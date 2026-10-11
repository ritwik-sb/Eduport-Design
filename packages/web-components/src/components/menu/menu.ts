import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import { placeNextTo, setTriggerAria, type Placement } from '../../utils/anchor.js';
import type { EpMenuItem } from './menu-item.js';

export interface MenuSelectDetail {
  value: string;
  item: EpMenuItem;
}

/**
 * A list of actions that opens from a button, like "Edit, Duplicate, Delete" on a row.
 * Arrow keys move between items, Home and End jump to the ends, typing a letter jumps to the next item
 * that starts with it, and Escape closes the menu and returns focus to the button.
 *
 * Menus are for actions. To pick a value in a form, use `<ep-select>` or a radio group.
 *
 * @tag ep-menu
 * @slot trigger - The button that opens the menu.
 * @slot - `<ep-menu-item>` and `<ep-menu-divider>` elements.
 * @csspart panel - The floating list.
 * @fires ep-select - When the user chooses an item. `detail` is `{ value, item }`. The menu closes; call
 *   `preventDefault()` to keep it open.
 * @fires ep-open - After the menu opens.
 * @fires ep-close - After the menu closes, for any reason.
 */
export class EpMenu extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    placement: { reflect: true },
    label: {},
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
      }

      .panel {
        position: fixed;
        inset: auto;
        margin: 0;
        box-sizing: border-box;
        min-width: 180px;
        max-width: min(320px, calc(100vw - 16px));
        max-height: calc(100vh - 16px);
        overflow: auto;
        padding: var(--ep-space-50);
        border: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-overlay);
        box-shadow: var(--ep-shadow-lg);
      }

      .panel:not(:popover-open) {
        display: none;
      }

      @media (forced-colors: active) {
        .panel {
          border-color: CanvasText;
        }
      }
    `,
  ];

  /** Whether the menu is showing. */
  declare open: boolean;
  /** Preferred side of the trigger. Flips when there isn't room. */
  declare placement: Placement;
  /** Accessible name for the menu. Defaults to the trigger's text. */
  declare label: string;

  #closedByPointer = false;
  #focusOnOpen: 'first' | 'last' = 'first';
  #typeahead = '';
  #typeaheadTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    super();
    this.open = false;
    this.placement = 'bottom';
    this.label = '';
    this.addEventListener('focusout', this.#onFocusOut);
  }

  connectedCallback() {
    super.connectedCallback();
    addEventListener('resize', this.#reposition);
    addEventListener('scroll', this.#reposition, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    removeEventListener('resize', this.#reposition);
    removeEventListener('scroll', this.#reposition, true);
  }

  get #trigger(): HTMLElement | undefined {
    return this.querySelector<HTMLElement>(':scope > [slot="trigger"]') ?? undefined;
  }

  get #panel(): HTMLElement {
    return this.renderRoot.querySelector('.panel')!;
  }

  get #items(): EpMenuItem[] {
    return [...this.querySelectorAll<EpMenuItem>(':scope > ep-menu-item')].filter((item) => !item.disabled);
  }

  /** Opens the menu and focuses the first item. */
  show() {
    this.#focusOnOpen = 'first';
    this.open = true;
  }

  /** Closes the menu. */
  hide() {
    this.open = false;
  }

  #reposition = () => {
    if (this.open && this.#trigger) placeNextTo(this.#trigger, this.#panel, this.placement, 'start');
  };

  #close(returnFocus: boolean) {
    this.open = false;
    if (returnFocus) this.#trigger?.focus();
  }

  #onTriggerPointerDown = () => {
    this.#closedByPointer = this.open;
  };

  #onTriggerClick = () => {
    if (this.#closedByPointer) {
      this.#closedByPointer = false;
      return;
    }
    this.#focusOnOpen = 'first';
    this.open = !this.open;
  };

  #onTriggerKeyDown = (event: KeyboardEvent) => {
    if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;
    event.preventDefault();
    this.#focusOnOpen = event.key === 'ArrowUp' ? 'last' : 'first';
    if (this.open) this.#focusItem(this.#focusOnOpen === 'last' ? this.#items.length - 1 : 0);
    else this.open = true;
  };

  #onToggle = (event: Event) => {
    if ((event as ToggleEvent).newState === 'closed' && this.open) this.open = false;
  };

  #focusItem(index: number) {
    const items = this.#items;
    if (!items.length) return;
    items[(index + items.length) % items.length].focus();
  }

  #onPanelKeyDown = (event: KeyboardEvent) => {
    const items = this.#items;
    const current = items.indexOf((event.target as Element).closest('ep-menu-item') as EpMenuItem);
    switch (event.key) {
      case 'ArrowDown':
        this.#focusItem(current + 1);
        break;
      case 'ArrowUp':
        this.#focusItem(current - 1);
        break;
      case 'Home':
        this.#focusItem(0);
        break;
      case 'End':
        this.#focusItem(items.length - 1);
        break;
      case 'Enter':
      case ' ':
        if (current >= 0) this.#choose(items[current]);
        break;
      case 'Escape':
        event.stopPropagation();
        this.#close(true);
        break;
      case 'Tab':
        this.open = false;
        return;
      default:
        if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
          this.#typeAhead(event.key, current);
          break;
        }
        return;
    }
    event.preventDefault();
  };

  #typeAhead(key: string, current: number) {
    clearTimeout(this.#typeaheadTimer);
    this.#typeaheadTimer = setTimeout(() => (this.#typeahead = ''), 500);
    this.#typeahead += key.toLowerCase();
    const items = this.#items;
    // A fresh single letter starts searching after the current item, so repeated presses cycle.
    const start = this.#typeahead.length === 1 ? current + 1 : current;
    for (let i = 0; i < items.length; i++) {
      const item = items[(start + i + items.length) % items.length];
      if (item.text.toLowerCase().startsWith(this.#typeahead)) {
        item.focus();
        return;
      }
    }
  }

  #onPanelClick = (event: MouseEvent) => {
    const item = (event.target as Element).closest<EpMenuItem>('ep-menu-item');
    if (item && !item.disabled) this.#choose(item);
  };

  #choose(item: EpMenuItem) {
    if (item.disabled) return;
    const event = new CustomEvent<MenuSelectDetail>('ep-select', {
      bubbles: true,
      composed: true,
      cancelable: true,
      detail: { value: item.value || item.text, item },
    });
    if (this.dispatchEvent(event)) this.#close(true);
  }

  #onFocusOut = (event: FocusEvent) => {
    const next = event.relatedTarget as Node | null;
    if (this.open && next && !this.contains(next) && !this.renderRoot.contains(next)) this.open = false;
  };

  async #syncTrigger() {
    const trigger = this.#trigger;
    if (!trigger) return;
    await (trigger as HTMLElement & { updateComplete?: Promise<unknown> }).updateComplete;
    setTriggerAria(trigger, 'aria-haspopup', 'menu');
    setTriggerAria(trigger, 'aria-expanded', String(this.open));
  }

  updated(changed: Map<string, unknown>) {
    if (!changed.has('open')) return;
    this.#syncTrigger();
    const panel = this.#panel;
    if (this.open) {
      if (!panel.matches(':popover-open')) panel.showPopover();
      this.#reposition();
      this.#focusItem(this.#focusOnOpen === 'last' ? -1 : 0);
      this.#focusOnOpen = 'first';
      this.dispatchEvent(new Event('ep-open', { bubbles: true, composed: true }));
    } else if (changed.get('open') === true) {
      if (panel.matches(':popover-open')) panel.hidePopover();
      this.dispatchEvent(new Event('ep-close', { bubbles: true, composed: true }));
    }
  }

  render() {
    const label = this.label || this.#trigger?.textContent?.trim() || this.#trigger?.getAttribute('label') || '';
    return html`<slot
        name="trigger"
        @pointerdown=${this.#onTriggerPointerDown}
        @click=${this.#onTriggerClick}
        @keydown=${this.#onTriggerKeyDown}
        @slotchange=${() => this.#syncTrigger()}
      ></slot>
      <div
        part="panel"
        class="panel"
        role="menu"
        aria-label=${label}
        popover="auto"
        @toggle=${this.#onToggle}
        @keydown=${this.#onPanelKeyDown}
        @click=${this.#onPanelClick}
      >
        <slot></slot>
      </div>`;
  }
}

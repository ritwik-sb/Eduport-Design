import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import { placeNextTo, setTriggerAria, type Placement } from '../../utils/anchor.js';

const FOCUSABLE =
  'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"]), ep-button, ep-icon-button, ep-text-field, ep-textarea, ep-select, ep-checkbox, ep-radio-group, ep-switch';

/**
 * A panel of interactive content anchored to a button, like a filter form or a short explanation with a link.
 * It doesn't block the page: clicking outside, pressing Escape or moving focus away closes it.
 * For a list of actions, use `<ep-menu>`; for plain text on hover, use `<ep-tooltip>`.
 *
 * ```html
 * <ep-popover label="Filters">
 *   <ep-button slot="trigger" variant="secondary">Filters</ep-button>
 *   …form controls…
 * </ep-popover>
 * ```
 *
 * @tag ep-popover
 * @slot trigger - The button that opens the popover.
 * @slot - The popover content.
 * @csspart panel - The floating panel.
 * @fires ep-open - After the popover opens.
 * @fires ep-close - After the popover closes, for any reason.
 */
export class EpPopover extends LitElement {
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
        width: max-content;
        max-width: min(360px, calc(100vw - 16px));
        max-height: calc(100vh - 16px);
        overflow: auto;
        padding: var(--ep-space-200);
        border: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-overlay);
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
        box-shadow: var(--ep-shadow-lg);
        outline: none;
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

  /** Whether the popover is showing. Set it to open or close the popover from code. */
  declare open: boolean;
  /** Preferred side of the trigger. Flips when there isn't room. */
  declare placement: Placement;
  /** Accessible name for the panel. Defaults to the trigger's text. */
  declare label: string;

  #closedByPointer = false;

  constructor() {
    super();
    this.open = false;
    this.placement = 'bottom';
    this.label = '';
    this.addEventListener('focusout', this.#onFocusOut);
  }

  get #trigger(): HTMLElement | undefined {
    return this.querySelector<HTMLElement>(':scope > [slot="trigger"]') ?? undefined;
  }

  get #panel(): HTMLElement {
    return this.renderRoot.querySelector('.panel')!;
  }

  /** Opens the popover and moves focus into it. */
  show() {
    this.open = true;
  }

  /** Closes the popover. */
  hide() {
    this.open = false;
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

  #reposition = () => {
    if (this.open && this.#trigger) placeNextTo(this.#trigger, this.#panel, this.placement, 'start');
  };

  // Clicking the trigger while open light-dismisses the popover on pointerdown; don't reopen it on click.
  #onTriggerPointerDown = () => {
    this.#closedByPointer = this.open;
  };

  #onTriggerClick = () => {
    if (this.#closedByPointer) {
      this.#closedByPointer = false;
      return;
    }
    this.open = !this.open;
  };

  #onToggle = (event: Event) => {
    // Light dismiss (outside click or Escape) closes the popover without going through `open`.
    if ((event as ToggleEvent).newState === 'closed' && this.open) {
      this.open = false;
    }
  };

  #onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.open) {
      event.stopPropagation();
      this.open = false;
      this.#trigger?.focus();
    }
  };

  #onFocusOut = (event: FocusEvent) => {
    const next = event.relatedTarget as Node | null;
    if (this.open && next && !this.contains(next) && !this.renderRoot.contains(next)) this.open = false;
  };

  async #syncTrigger() {
    const trigger = this.#trigger;
    if (!trigger) return;
    await (trigger as HTMLElement & { updateComplete?: Promise<unknown> }).updateComplete;
    setTriggerAria(trigger, 'aria-haspopup', 'dialog');
    setTriggerAria(trigger, 'aria-expanded', String(this.open));
  }

  updated(changed: Map<string, unknown>) {
    if (!changed.has('open')) return;
    this.#syncTrigger();
    const panel = this.#panel;
    if (this.open) {
      if (!panel.matches(':popover-open')) panel.showPopover();
      this.#reposition();
      const focusable = [...this.querySelectorAll<HTMLElement>(FOCUSABLE)].find(
        (el) => !el.closest('[slot="trigger"]') && !el.hasAttribute('disabled'),
      );
      (focusable ?? panel).focus();
      this.dispatchEvent(new Event('ep-open', { bubbles: true, composed: true }));
    } else if (changed.get('open') === true) {
      if (panel.matches(':popover-open')) panel.hidePopover();
      this.dispatchEvent(new Event('ep-close', { bubbles: true, composed: true }));
    }
  }

  render() {
    const label = this.label || this.#trigger?.textContent?.trim() || '';
    return html`<slot
        name="trigger"
        @pointerdown=${this.#onTriggerPointerDown}
        @click=${this.#onTriggerClick}
        @slotchange=${() => this.#syncTrigger()}
      ></slot>
      <div
        part="panel"
        class="panel"
        role="dialog"
        aria-label=${label}
        tabindex="-1"
        popover="auto"
        @toggle=${this.#onToggle}
        @keydown=${this.#onKeyDown}
      >
        <slot></slot>
      </div>`;
  }
}

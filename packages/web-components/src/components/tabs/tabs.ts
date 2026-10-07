import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import { uniqueId } from '../../utils/id.js';
import type { EpTab, EpTabPanel } from './tab.js';

/**
 * Switches between related views in the same place. Arrow keys move between tabs and select them,
 * Home and End jump to the first and last tab.
 *
 * ```html
 * <ep-tabs label="Course">
 *   <ep-tab panel="overview">Overview</ep-tab>
 *   <ep-tab panel="lessons">Lessons</ep-tab>
 *   <ep-tab-panel name="overview">…</ep-tab-panel>
 *   <ep-tab-panel name="lessons">…</ep-tab-panel>
 * </ep-tabs>
 * ```
 *
 * @tag ep-tabs
 * @slot - `<ep-tab-panel>` elements.
 * @slot nav - `<ep-tab>` elements. They move here on their own.
 * @csspart tablist - The row of tabs.
 * @fires change - When the user selects another tab. Read `value` for the new panel name.
 */
export class EpTabs extends LitElement {
  static properties = {
    value: { reflect: true },
    label: {},
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
      }

      .tablist {
        display: flex;
        overflow-x: auto;
        border-bottom: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        scrollbar-width: thin;
      }
    `,
  ];

  /** Name of the selected panel. Defaults to the first tab's panel. */
  declare value: string;
  /** Accessible name for the tab list. */
  declare label: string;

  constructor() {
    super();
    this.value = '';
    this.label = '';
  }

  get #tabs(): EpTab[] {
    return [...this.querySelectorAll<EpTab>(':scope > ep-tab')];
  }

  get #panels(): EpTabPanel[] {
    return [...this.querySelectorAll<EpTabPanel>(':scope > ep-tab-panel')];
  }

  #select(tab: EpTab | undefined, focus: boolean) {
    if (!tab || tab.disabled) return;
    if (focus) tab.focus();
    if (tab.panel === this.value) return;
    this.value = tab.panel;
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  #onClick(event: MouseEvent) {
    this.#select((event.target as Element).closest<EpTab>('ep-tab') ?? undefined, true);
  }

  #onKeyDown(event: KeyboardEvent) {
    const current = (event.target as Element).closest<EpTab>('ep-tab');
    if (!current) return;
    const tabs = this.#tabs.filter((t) => !t.disabled);
    const index = tabs.indexOf(current);
    const target = {
      ArrowRight: tabs[(index + 1) % tabs.length],
      ArrowLeft: tabs[(index - 1 + tabs.length) % tabs.length],
      Home: tabs[0],
      End: tabs[tabs.length - 1],
    }[event.key];
    if (!target) return;
    event.preventDefault();
    this.#select(target, true);
  }

  updated() {
    const tabs = this.#tabs;
    const panels = this.#panels;
    const value = this.value || tabs.find((t) => !t.disabled)?.panel || '';
    for (const tab of tabs) {
      const panel = panels.find((p) => p.name === tab.panel);
      tab.id ||= uniqueId('ep-tab');
      if (panel) {
        panel.id ||= uniqueId('ep-tab-panel');
        tab.setAttribute('aria-controls', panel.id);
        panel.setAttribute('aria-labelledby', tab.id);
      }
      tab.selected = tab.panel === value;
      tab.tabIndex = tab.selected ? 0 : -1;
    }
    for (const panel of panels) panel.active = panel.name === value;
  }

  render() {
    return html`<div
        part="tablist"
        class="tablist"
        role="tablist"
        aria-label=${this.label}
        @click=${this.#onClick}
        @keydown=${this.#onKeyDown}
      >
        <slot name="nav" @slotchange=${() => this.requestUpdate()}></slot>
      </div>
      <slot @slotchange=${() => this.requestUpdate()}></slot>`;
  }
}

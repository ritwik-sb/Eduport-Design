import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import type { EpAccordionItem } from './accordion-item.js';

/**
 * A stack of collapsible sections, like an FAQ or a course syllabus. Up and Down arrows move between
 * section headers, Home and End jump to the first and last.
 *
 * Don't hide content most people need behind an accordion; it is for long pages where people look for one part.
 *
 * @tag ep-accordion
 * @slot - `<ep-accordion-item>` elements.
 */
export class EpAccordion extends LitElement {
  static properties = {
    single: { type: Boolean, reflect: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        border-top: var(--ep-border-width-thin) solid var(--ep-color-border-default);
      }
    `,
  ];

  /** Only one section can be open at a time: opening one closes the others. */
  declare single: boolean;

  constructor() {
    super();
    this.single = false;
    this.addEventListener('ep-open', this.#onOpen);
    this.addEventListener('keydown', this.#onKeyDown);
  }

  get #items(): EpAccordionItem[] {
    return [...this.querySelectorAll<EpAccordionItem>(':scope > ep-accordion-item')];
  }

  #onOpen = (event: Event) => {
    const opened = event.target as Element;
    // Ignore ep-open from popovers and menus inside a section.
    if (!this.single || opened.parentElement !== this || opened.localName !== 'ep-accordion-item') return;
    for (const item of this.#items) if (item !== event.target) item.open = false;
  };

  #onKeyDown = (event: KeyboardEvent) => {
    const current = (event.target as Element).closest('ep-accordion-item');
    // Only act when focus is on a header, not on something inside a section's content.
    if (!current || current.parentElement !== this || event.composedPath()[0] !== current.shadowRoot?.activeElement) {
      return;
    }
    const items = this.#items.filter((item) => !item.disabled);
    const index = items.indexOf(current as EpAccordionItem);
    const target = {
      ArrowDown: items[(index + 1) % items.length],
      ArrowUp: items[(index - 1 + items.length) % items.length],
      Home: items[0],
      End: items[items.length - 1],
    }[event.key];
    if (!target) return;
    event.preventDefault();
    target.focus();
  };

  render() {
    return html`<slot></slot>`;
  }
}

import { LitElement, css, html } from 'lit';
import { baseStyles, focusRing } from '../../styles/shared.js';
import '../icon/index.js';

/**
 * One collapsible section in an `<ep-accordion>`. The header is a button inside a heading, so screen reader
 * users can jump between sections by heading.
 *
 * @tag ep-accordion-item
 * @slot - The section content.
 * @slot prefix - An icon before the heading text.
 * @csspart header - The button that opens and closes the section.
 * @csspart content - The content region.
 * @fires ep-open - After the user opens the section.
 * @fires ep-close - After the user closes the section.
 */
export class EpAccordionItem extends LitElement {
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static properties = {
    heading: {},
    headingLevel: { type: Number, attribute: 'heading-level' },
    open: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        border-bottom: var(--ep-border-width-thin) solid var(--ep-color-border-default);
      }

      .heading {
        margin: 0;
      }

      .header {
        display: flex;
        align-items: center;
        gap: var(--ep-space-150);
        width: 100%;
        min-height: var(--ep-size-control-lg);
        padding: var(--ep-space-150) var(--ep-space-100);
        border: 0;
        border-radius: var(--ep-radius-control);
        background: none;
        color: var(--ep-color-text-primary);
        font: inherit;
        font-size: var(--ep-font-size-300);
        font-weight: var(--ep-font-weight-semibold);
        line-height: var(--ep-font-line-height-snug);
        text-align: start;
        cursor: pointer;
      }

      .header:hover {
        background: var(--ep-color-interactive-ghost-hover);
      }

      .header:focus-visible {
        ${focusRing}
        outline-offset: -2px;
      }

      .header:disabled {
        background: none;
        color: var(--ep-color-text-disabled);
        cursor: not-allowed;
      }

      .title {
        flex: 1;
      }

      .chevron {
        flex: none;
        font-size: var(--ep-size-icon-md);
        color: var(--ep-color-text-secondary);
        transition: transform var(--ep-motion-duration-move) var(--ep-motion-easing-standard);
      }

      :host([open]) .chevron {
        transform: rotate(180deg);
      }

      ::slotted([slot='prefix']) {
        font-size: var(--ep-size-icon-md);
      }

      .content {
        padding: 0 var(--ep-space-100) var(--ep-space-200);
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
      }

      .content[hidden] {
        display: none;
      }

      @media (forced-colors: active) {
        .header:disabled {
          color: GrayText;
        }
      }
    `,
  ];

  /** The section title. */
  declare heading: string;
  /** Level of the heading around the header button, 1 to 6, so it fits the page outline. */
  declare headingLevel: number;
  declare open: boolean;
  declare disabled: boolean;

  constructor() {
    super();
    this.heading = '';
    this.headingLevel = 3;
    this.open = false;
    this.disabled = false;
  }

  #onClick() {
    if (this.disabled) return;
    this.open = !this.open;
    this.dispatchEvent(new Event(this.open ? 'ep-open' : 'ep-close', { bubbles: true, composed: true }));
  }

  render() {
    const level = Math.min(6, Math.max(1, Math.floor(this.headingLevel) || 3));
    return html`<div class="heading" role="heading" aria-level=${level}>
        <button
          part="header"
          class="header"
          id="header"
          type="button"
          aria-expanded=${String(this.open)}
          aria-controls="content"
          ?disabled=${this.disabled}
          @click=${this.#onClick}
        >
          <slot name="prefix"></slot>
          <span class="title">${this.heading}</span>
          <ep-icon class="chevron" name="chevron-down"></ep-icon>
        </button>
      </div>
      <div part="content" class="content" id="content" role="region" aria-labelledby="header" ?hidden=${!this.open}>
        <slot></slot>
      </div>`;
  }
}

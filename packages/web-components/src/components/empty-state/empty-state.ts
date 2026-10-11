import { LitElement, css, html, nothing } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import { HasSlotController } from '../../utils/slots.js';
import '../icon/index.js';

/**
 * What to show when a list, table or page has nothing in it yet: why it's empty and what to do next.
 *
 * @tag ep-empty-state
 * @slot - One or two sentences explaining why it's empty.
 * @slot media - An illustration, replacing the icon.
 * @slot actions - One primary button, and optionally a secondary one or a link.
 * @csspart base - The centered column.
 * @csspart heading - The heading.
 */
export class EpEmptyState extends LitElement {
  static properties = {
    heading: {},
    headingLevel: { type: Number, attribute: 'heading-level' },
    icon: {},
    size: { reflect: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        --_padding: var(--ep-space-800) var(--ep-space-300);
        --_icon-size: 32px;
        --_heading: var(--ep-font-size-400);
      }

      :host([size='sm']) {
        --_padding: var(--ep-space-400) var(--ep-space-200);
        --_icon-size: var(--ep-size-icon-lg);
        --_heading: var(--ep-font-size-300);
      }

      .base {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 48ch;
        margin: 0 auto;
        padding: var(--_padding);
        text-align: center;
      }

      .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-bottom: var(--ep-space-200);
        padding: var(--ep-space-150);
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-surface-muted);
        color: var(--ep-color-text-secondary);
        font-size: var(--_icon-size);
      }

      ::slotted([slot='media']) {
        max-width: 100%;
        margin-bottom: var(--ep-space-200);
      }

      .heading {
        margin: 0;
        color: var(--ep-color-text-primary);
        font-size: var(--_heading);
        font-weight: var(--ep-font-weight-semibold);
        line-height: var(--ep-font-line-height-snug);
      }

      .description {
        margin-top: var(--ep-space-100);
        color: var(--ep-color-text-secondary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--ep-space-100);
        margin-top: var(--ep-space-300);
      }

      [hidden] {
        display: none !important;
      }

      @media (forced-colors: active) {
        .icon {
          border: 1px solid CanvasText;
        }
      }
    `,
  ];

  /** A short statement of what's empty, like "No assignments yet". */
  declare heading: string;
  /** Level of the heading, 1 to 6, so it fits the page outline. */
  declare headingLevel: number;
  /** Name of a registered icon shown above the heading. */
  declare icon: string;
  /** `sm` for inside cards and panels, `md` for a whole page or table. */
  declare size: 'sm' | 'md';

  #slots = new HasSlotController(this, '[default]', 'media', 'actions');

  constructor() {
    super();
    this.heading = '';
    this.headingLevel = 2;
    this.icon = '';
    this.size = 'md';
  }

  render() {
    const level = Math.min(6, Math.max(1, Math.floor(this.headingLevel) || 2));
    const hasMedia = this.#slots.test('media');
    return html`<div part="base" class="base">
      <slot name="media"></slot>
      ${!hasMedia && this.icon ? html`<span class="icon"><ep-icon name=${this.icon}></ep-icon></span>` : nothing}
      ${this.heading
        ? html`<div part="heading" class="heading" role="heading" aria-level=${level}>${this.heading}</div>`
        : nothing}
      <div class="description" ?hidden=${!this.#slots.test('[default]')}><slot></slot></div>
      <div class="actions" ?hidden=${!this.#slots.test('actions')}><slot name="actions"></slot></div>
    </div>`;
  }
}

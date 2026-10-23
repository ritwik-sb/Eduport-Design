import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import { HasSlotController } from '../../utils/slots.js';

/**
 * The top of a page: breadcrumbs, the page title, a one-line description and page-level actions, spaced as
 * docs/layout.md describes. Put it first inside the content area. It includes the space before the first section,
 * so the next element needs no margin of its own.
 *
 * Actions sit beside the title when there is room and below the description on narrow screens. It responds
 * to its own width (a container query), not the viewport's.
 *
 * @tag ep-page-header
 * @slot breadcrumbs - An `<ep-breadcrumbs>` trail above the title.
 * @slot - The description: one short sentence about the page.
 * @slot actions - Page-level buttons, primary action last.
 * @csspart heading - The page title.
 */
export class EpPageHeader extends LitElement {
  static properties = {
    heading: {},
    headingLevel: { type: Number, attribute: 'heading-level' },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        container-type: inline-size;
      }

      .base {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: var(--ep-space-100);
        padding-block-end: var(--ep-space-300);
        color: var(--ep-color-text-primary);
      }

      .heading {
        margin: 0;
        font: var(--ep-font-heading-lg);
        letter-spacing: -0.01em;
        text-wrap: balance;
      }

      .description {
        color: var(--ep-color-text-secondary);
        font: var(--ep-font-body-md);
        max-width: var(--ep-layout-width-prose);
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: var(--ep-space-100);
        margin-block-start: var(--ep-space-100);
      }

      .breadcrumbs[hidden],
      .description[hidden],
      .actions[hidden] {
        display: none;
      }

      @container (min-width: 600px) {
        .base {
          grid-template-columns: minmax(0, 1fr) auto;
          column-gap: var(--ep-space-300);
          padding-block-end: var(--ep-space-400);
        }

        .breadcrumbs {
          grid-column: 1 / -1;
          grid-row: 1;
        }

        .description {
          grid-column: 1 / -1;
          grid-row: 3;
        }

        .heading {
          grid-column: 1;
          grid-row: 2;
          font: var(--ep-font-heading-xl);
          letter-spacing: -0.02em;
        }

        .actions {
          grid-column: 2;
          grid-row: 2;
          align-self: center;
          justify-content: flex-end;
          margin-block-start: 0;
        }

        .breadcrumbs[hidden] ~ .heading,
        .breadcrumbs[hidden] ~ .actions {
          grid-row: 1;
        }

        .breadcrumbs[hidden] ~ .description {
          grid-row: 2;
        }
      }
    `,
  ];

  /** The page title. Keep it short; it is the page's `h1` unless `heading-level` says otherwise. */
  declare heading: string;
  /** Heading level of the title, 1 to 6. Leave it at 1 unless the header sits inside another titled region. */
  declare headingLevel: number;

  #slots = new HasSlotController(this, 'breadcrumbs', '[default]', 'actions');

  constructor() {
    super();
    this.heading = '';
    this.headingLevel = 1;
  }

  render() {
    const level = Math.min(6, Math.max(1, Math.floor(this.headingLevel) || 1));
    return html`<div class="base">
      <div class="breadcrumbs" ?hidden=${!this.#slots.test('breadcrumbs')}><slot name="breadcrumbs"></slot></div>
      <div part="heading" class="heading" role="heading" aria-level=${level}>${this.heading}</div>
      <div class="description" ?hidden=${!this.#slots.test('[default]')}><slot></slot></div>
      <div class="actions" ?hidden=${!this.#slots.test('actions')}><slot name="actions"></slot></div>
    </div>`;
  }
}

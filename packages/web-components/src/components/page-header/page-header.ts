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
 * @slot eyebrow - A short overline above the title, such as the term or date (`variant="hero"`).
 * @slot aside - Stat tiles or a summary beside the title (`variant="hero"`).
 * @slot art - Decoration, such as the logo mark, behind the hero in the top-right corner (`variant="hero"`).
 * @csspart heading - The page title.
 */
export class EpPageHeader extends LitElement {
  static properties = {
    heading: {},
    headingLevel: { type: Number, attribute: 'heading-level' },
    variant: { reflect: true },
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
        letter-spacing: -0.02em;
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
      .actions[hidden],
      .eyebrow[hidden],
      .aside[hidden],
      .art[hidden] {
        display: none;
      }

      /* Hero: the title on the brand gradient, with the actions below it on the page. */
      .hero {
        display: contents;
      }

      :host([variant='hero']) .hero {
        position: relative;
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: var(--ep-space-100) var(--ep-space-300);
        align-items: end;
        padding: var(--ep-space-300);
        overflow: hidden;
        border-radius: var(--ep-radius-container);
        background:
          radial-gradient(120% 140% at 100% 0%, var(--ep-color-hero-glow) 0%, transparent 55%),
          linear-gradient(135deg, var(--ep-color-hero-start), var(--ep-color-hero-end));
        color: var(--ep-color-hero-text);
      }

      :host([variant='hero']) .heading {
        font: var(--ep-font-heading-xl);
        font-size: var(--ep-font-size-900);
        letter-spacing: -0.035em;
      }

      :host([variant='hero']) .description {
        color: inherit;
      }

      .eyebrow {
        font: var(--ep-font-label-sm);
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }

      .aside {
        display: flex;
        flex-wrap: wrap;
        gap: var(--ep-space-100);
        z-index: 1;
      }

      .art {
        position: absolute;
        inset-block-start: calc(-1 * var(--ep-space-600));
        inset-inline-end: calc(-1 * var(--ep-space-500));
        width: 16rem;
        opacity: 0.12;
        transform: rotate(-8deg);
        pointer-events: none;
      }

      .art ::slotted(*) {
        display: block;
        width: 100%;
        height: auto;
      }

      :host([variant='hero']) .text {
        position: relative;
        display: grid;
        gap: var(--ep-space-100);
      }

      .text {
        display: contents;
      }

      :host(:not([variant='hero'])) :is(.eyebrow, .aside, .art) {
        display: none;
      }

      @container (min-width: 600px) {
        :host([variant='hero']) .hero {
          grid-template-columns: minmax(0, 1fr) auto;
        }

        :host([variant='hero']) :is(.heading, .description, .breadcrumbs) {
          grid-column: auto;
          grid-row: auto;
        }

        :host([variant='hero']) .base {
          grid-template-columns: minmax(0, 1fr);
        }

        :host([variant='hero']) .actions {
          grid-column: 1;
          grid-row: auto;
          justify-content: flex-start;
          margin-block-start: var(--ep-space-100);
        }
      }

      @media (forced-colors: active) {
        :host([variant='hero']) .hero {
          border: 1px solid CanvasText;
          background: Canvas;
          color: CanvasText;
        }
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

        :host(:not([variant='hero'])) .base:has(.breadcrumbs[hidden]) .heading,
        :host(:not([variant='hero'])) .base:has(.breadcrumbs[hidden]) .actions {
          grid-row: 1;
        }

        :host(:not([variant='hero'])) .base:has(.breadcrumbs[hidden]) .description {
          grid-row: 2;
        }
      }
    `,
  ];

  /** The page title. Keep it short; it is the page's `h1` unless `heading-level` says otherwise. */
  declare heading: string;
  /** Heading level of the title, 1 to 6. Leave it at 1 unless the header sits inside another titled region. */
  declare headingLevel: number;
  /** `hero` puts the title on the brand gradient, for a dashboard's landing page. Use it once, on the first page of an app. */
  declare variant: 'default' | 'hero';

  #slots = new HasSlotController(this, 'breadcrumbs', '[default]', 'actions', 'eyebrow', 'aside', 'art');

  constructor() {
    super();
    this.heading = '';
    this.headingLevel = 1;
    this.variant = 'default';
  }

  render() {
    const level = Math.min(6, Math.max(1, Math.floor(this.headingLevel) || 1));
    return html`<div class="base">
      <div class="breadcrumbs" ?hidden=${!this.#slots.test('breadcrumbs')}><slot name="breadcrumbs"></slot></div>
      <div class="hero">
        <div class="art" aria-hidden="true" ?hidden=${!this.#slots.test('art')}><slot name="art"></slot></div>
        <div class="text">
          <div class="eyebrow" ?hidden=${!this.#slots.test('eyebrow')}><slot name="eyebrow"></slot></div>
          <div part="heading" class="heading" role="heading" aria-level=${level}>${this.heading}</div>
          <div class="description" ?hidden=${!this.#slots.test('[default]')}><slot></slot></div>
        </div>
        <div class="aside" ?hidden=${!this.#slots.test('aside')}><slot name="aside"></slot></div>
      </div>
      <div class="actions" ?hidden=${!this.#slots.test('actions')}><slot name="actions"></slot></div>
    </div>`;
  }
}

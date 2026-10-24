import { LitElement, css, html } from 'lit';
import { baseStyles, toneStyles } from '../../styles/shared.js';
import { HasSlotController } from '../../utils/slots.js';

/**
 * A surface that groups related content, like a course summary or a settings section.
 *
 * @tag ep-card
 * @slot - The body.
 * @slot media - An image or illustration at the top, edge to edge.
 * @slot heading - The title. Use a real heading element (`<h3 slot="heading">`) so it shows up in the page outline.
 * @slot header-actions - Buttons at the end of the header row.
 * @slot footer - Actions or meta information at the bottom.
 * @csspart base - The card surface.
 */
export class EpCard extends LitElement {
  static properties = {
    variant: { reflect: true },
    tone: { reflect: true },
    interactive: { type: Boolean, reflect: true },
  };

  static styles = [
    baseStyles,
    toneStyles,
    css`
      :host {
        display: block;
      }

      .base {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: hidden;
        border: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        border-radius: var(--ep-radius-container);
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
      }

      :host([variant='elevated']) .base {
        border-color: transparent;
        background: var(--ep-color-surface-raised);
        box-shadow: var(--ep-shadow-raised);
      }

      /* A card that leads somewhere rises a couple of pixels and its shadow deepens. The lift is 0 under reduced
         motion, so there the shadow change is all that's left. */
      @media (hover: hover) {
        :host([interactive][variant='elevated']) .base:hover {
          box-shadow: var(--ep-shadow-raised-hover);
          transform: translateY(calc(-1 * var(--ep-motion-distance-lift)));
        }
      }

      :host([interactive][variant='elevated']) .base:focus-within {
        box-shadow: var(--ep-shadow-raised-hover);
      }

      :host([interactive]) .base {
        transition:
          box-shadow var(--ep-motion-duration-normal) var(--ep-motion-easing-standard),
          transform var(--ep-motion-duration-normal) var(--ep-motion-easing-spring);
      }

      :host([variant='outlined']) .base {
        background: var(--ep-color-surface-default);
      }

      :host([variant='filled']) .base {
        border-color: transparent;
        background: var(--ep-color-surface-muted);
      }

      /* A toned card turns its media area into a tinted cover. Slotted content reads the --ep-tone-* properties. */
      :host([tone]) .media {
        margin: var(--ep-space-100);
        padding: var(--ep-space-150);
        border-radius: var(--ep-radius-control);
        background: var(--ep-tone-subtle);
        color: var(--ep-tone-text);
      }

      .media ::slotted(*) {
        display: block;
        width: 100%;
      }

      .header {
        display: flex;
        align-items: flex-start;
        gap: var(--ep-space-100);
        padding: var(--ep-space-200) var(--ep-space-200) 0;
      }

      .header ::slotted([slot='heading']) {
        flex: 1;
        margin: 0;
        font-size: var(--ep-font-size-300);
        font-weight: var(--ep-font-weight-semibold);
        line-height: var(--ep-font-line-height-snug);
      }

      .body {
        flex: 1;
        padding: var(--ep-space-200);
      }

      .header:not([hidden]) + .body {
        padding-top: var(--ep-space-100);
      }

      .footer {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--ep-space-100);
        padding: var(--ep-space-150) var(--ep-space-200);
        border-top: var(--ep-border-width-thin) solid var(--ep-color-border-default);
      }

      [hidden] {
        display: none !important;
      }

      @media (forced-colors: active) {
        .base {
          border-color: CanvasText;
        }
      }
    `,
  ];

  /** `elevated` (default) has a lifted surface with a ring and soft shadow, `outlined` a border, `filled` a tinted background. Each is a distinct step in both themes. */
  declare variant: 'outlined' | 'elevated' | 'filled';

  /** `1` to `6`: tints the media area with a categorical color and exposes `--ep-tone-*` to the content in it. */
  declare tone: '' | '1' | '2' | '3' | '4' | '5' | '6';

  /** Marks a card whose whole surface leads somewhere (stretch its heading link over it), so it responds to hover and focus. */
  declare interactive: boolean;

  #slots = new HasSlotController(this, 'media', 'heading', 'header-actions', 'footer');

  constructor() {
    super();
    this.variant = 'elevated';
    this.tone = '';
    this.interactive = false;
  }

  render() {
    const hasHeader = this.#slots.test('heading') || this.#slots.test('header-actions');
    return html`<div part="base" class="base">
      <div class="media" ?hidden=${!this.#slots.test('media')}><slot name="media"></slot></div>
      <div class="header" ?hidden=${!hasHeader}>
        <slot name="heading"></slot>
        <slot name="header-actions"></slot>
      </div>
      <div class="body"><slot></slot></div>
      <div class="footer" ?hidden=${!this.#slots.test('footer')}><slot name="footer"></slot></div>
    </div>`;
  }
}

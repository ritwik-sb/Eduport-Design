import { LitElement, css, html } from 'lit';
import { baseStyles, toneStyles } from '../../styles/shared.js';
import { HasSlotController } from '../../utils/slots.js';

/**
 * One headline number with its label and an optional note, like "128 Students, +6 this week". Use a few in a row
 * at the top of a dashboard.
 *
 * @tag ep-stat
 * @slot note - A short comparison or trend, like "+6 this week".
 * @slot chart - An `<ep-sparkline>` beside the number.
 * @csspart base - The tile.
 * @csspart value - The number.
 */
export class EpStat extends LitElement {
  static properties = {
    label: {},
    value: {},
    tone: { reflect: true },
    variant: { reflect: true },
  };

  static styles = [
    baseStyles,
    toneStyles,
    css`
      :host {
        display: block;
      }

      .base {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        align-items: end;
        gap: var(--ep-space-25) var(--ep-space-150);
        height: 100%;
        padding: var(--ep-space-150) var(--ep-space-200);
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-raised);
        box-shadow: var(--ep-shadow-raised);
        color: var(--ep-color-text-primary);
      }

      :host([variant='hero']) .base {
        background: var(--ep-color-hero-chip);
        box-shadow: none;
        color: var(--ep-color-hero-text);
      }

      :host([tone]:not([tone=''])) .base {
        background: var(--ep-tone-subtle);
        box-shadow: var(--ep-shadow-toned);
        color: var(--ep-tone-text);
      }

      .label,
      .value,
      .note {
        grid-column: 1;
      }

      .label {
        font: var(--ep-font-label-md);
      }

      .chart {
        grid-column: 2;
        grid-row: 2 / span 2;
        align-self: center;
      }

      .chart[hidden] {
        display: none;
      }

      .value {
        margin: 0;
        font: var(--ep-font-heading-lg);
        letter-spacing: -0.03em;
        font-variant-numeric: tabular-nums;
      }

      .note {
        font: var(--ep-font-label-sm);
      }

      .note[hidden] {
        display: none;
      }

      @media (forced-colors: active) {
        .base {
          border: 1px solid CanvasText;
        }
      }
    `,
  ];

  /** What the number counts, like "Students". */
  declare label: string;
  /** The number, already formatted, like "128" or "64%". */
  declare value: string;
  /** `1` to `6`: tints the tile with a categorical color. */
  declare tone: '' | '1' | '2' | '3' | '4' | '5' | '6';
  /** `hero` is a translucent tile for use on the brand hero. */
  declare variant: 'default' | 'hero';

  #slots = new HasSlotController(this, 'note', 'chart');

  constructor() {
    super();
    this.label = '';
    this.value = '';
    this.tone = '';
    this.variant = 'default';
  }

  render() {
    return html`<div part="base" class="base" role="group" aria-label=${this.label}>
      <span class="label">${this.label}</span>
      <p part="value" class="value">${this.value}</p>
      <span class="note" ?hidden=${!this.#slots.test('note')}><slot name="note"></slot></span>
      <div class="chart" ?hidden=${!this.#slots.test('chart')}><slot name="chart"></slot></div>
    </div>`;
  }
}

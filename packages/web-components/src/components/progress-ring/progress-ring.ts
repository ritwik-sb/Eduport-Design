import { LitElement, css, html } from 'lit';
import { baseStyles, toneStyles } from '../../styles/shared.js';

const RADIUS = 18;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * A circular progress indicator with the percentage in the middle, for a course's or a student's completion.
 * It is always determinate; use `ep-progress-bar` or `ep-spinner` when the amount isn't known.
 *
 * @tag ep-progress-ring
 * @csspart ring - The `<svg>`.
 * @csspart value - The percentage.
 */
export class EpProgressRing extends LitElement {
  static properties = {
    value: { type: Number },
    max: { type: Number },
    label: {},
    tone: { reflect: true },
    size: { reflect: true },
  };

  static styles = [
    baseStyles,
    toneStyles,
    css`
      :host {
        display: inline-grid;
        place-items: center;
        position: relative;
        --_size: 44px;
        --_fill: var(--ep-tone-bold);
        color: var(--ep-tone-text);
      }

      :host([size='sm']) {
        --_size: 32px;
      }

      :host([size='lg']) {
        --_size: 64px;
      }

      svg {
        grid-area: 1 / 1;
        width: var(--_size);
        height: var(--_size);
        transform: rotate(-90deg);
      }

      circle {
        fill: none;
        stroke-width: 4;
      }

      .track {
        stroke: var(--ep-color-border-default);
      }

      .fill {
        stroke: var(--_fill);
        stroke-linecap: round;
        stroke-dasharray: var(--_circumference);
        stroke-dashoffset: var(--_offset);
        transition: stroke-dashoffset var(--ep-motion-duration-slow) var(--ep-motion-easing-standard);
      }

      .value {
        grid-area: 1 / 1;
        font: var(--ep-font-label-sm);
        font-size: calc(var(--_size) * 0.26);
        font-variant-numeric: tabular-nums;
      }

      @media (forced-colors: active) {
        .track {
          stroke: GrayText;
        }

        .fill {
          stroke: Highlight;
        }
      }
    `,
  ];

  /** How much is done, from 0 to `max`. */
  declare value: number;
  declare max: number;
  /** What is progressing, like "Physics completion". Required: it is the accessible name. */
  declare label: string;
  /** `1` to `6`: a categorical color. Unset uses the text color. */
  declare tone: '' | '1' | '2' | '3' | '4' | '5' | '6';
  declare size: 'sm' | 'md' | 'lg';

  constructor() {
    super();
    this.value = 0;
    this.max = 100;
    this.label = '';
    this.tone = '';
    this.size = 'md';
  }

  render() {
    const max = this.max > 0 ? this.max : 100;
    const value = Math.min(Math.max(0, Number.isFinite(this.value) ? this.value : 0), max);
    const percent = Math.round((value / max) * 100);
    return html`<div
        role="progressbar"
        aria-label=${this.label}
        aria-valuemin="0"
        aria-valuemax=${max}
        aria-valuenow=${value}
        aria-valuetext="${percent}%"
        style="display: contents"
      >
        <svg part="ring" viewBox="0 0 44 44" aria-hidden="true">
          <circle class="track" cx="22" cy="22" r=${RADIUS}></circle>
          <circle
            class="fill"
            cx="22"
            cy="22"
            r=${RADIUS}
            style="--_circumference: ${CIRCUMFERENCE}; --_offset: ${CIRCUMFERENCE * (1 - value / max)}"
          ></circle>
        </svg>
        <span part="value" class="value" aria-hidden="true">${percent}%</span>
      </div>`;
  }
}

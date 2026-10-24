import { LitElement, css, html, nothing } from 'lit';
import { baseStyles } from '../../styles/shared.js';

/**
 * Shows how far a task has got, like an upload or course completion. Leave `value` unset when the
 * amount of work isn't known; the bar then moves continuously.
 *
 * @tag ep-progress-bar
 * @csspart track - The full-width track.
 * @csspart indicator - The filled part.
 */
export class EpProgressBar extends LitElement {
  static properties = {
    value: { type: Number },
    max: { type: Number },
    label: {},
    helperText: { attribute: 'helper-text' },
    hideLabel: { type: Boolean, attribute: 'hide-label' },
    showValue: { type: Boolean, attribute: 'show-value' },
    variant: { reflect: true },
    size: { reflect: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        --_height: 8px;
        --_fill: var(--ep-color-accent-default);
      }

      :host([size='sm']) {
        --_height: 4px;
      }

      :host([variant='success']) {
        --_fill: var(--ep-color-text-success);
      }

      :host([variant='danger']) {
        --_fill: var(--ep-color-text-danger);
      }

      .header {
        display: flex;
        justify-content: space-between;
        gap: var(--ep-space-200);
        margin-bottom: var(--ep-space-100);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-snug);
      }

      .label {
        color: var(--ep-color-text-primary);
        font-weight: var(--ep-font-weight-medium);
      }

      .value {
        color: var(--ep-color-text-secondary);
        font-variant-numeric: tabular-nums;
      }

      .track {
        position: relative;
        height: var(--_height);
        overflow: hidden;
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-border-default);
      }

      .indicator {
        height: 100%;
        /* A soft top highlight makes the fill read as a lit bar rather than a flat strip. */
        background: linear-gradient(to bottom, rgb(255 255 255 / 0.18), transparent 60%), var(--_fill);
        transform: scaleX(var(--_progress, 0));
        transform-origin: left;
        transition: transform var(--ep-motion-duration-normal) var(--ep-motion-easing-standard);
      }

      :host(:dir(rtl)) .indicator {
        transform-origin: right;
      }

      /* A segment that slides across. Its cycle is a multiple of the move token, which is 0 under reduced motion
         (prefers-reduced-motion or data-motion="reduced"), so the animation stops. */
      .indeterminate .indicator {
        width: 40%;
        transform: none;
        animation: slide calc(var(--ep-motion-duration-move) * 7) var(--ep-motion-easing-standard) infinite;
      }

      @keyframes slide {
        from {
          transform: translateX(-100%);
        }
        to {
          transform: translateX(250%);
        }
      }

      /* Reduced motion: a still, striped full-width bar instead of a moving segment. The style query follows the
         token, so it reacts to data-motion="reduced" too; the media query covers browsers without style queries. */
      @container style(--ep-motion-duration-move: 0ms) {
        .indeterminate .indicator {
          width: 100%;
          background: repeating-linear-gradient(-45deg, var(--_fill) 0 6px, transparent 6px 12px);
          animation: none;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .indeterminate .indicator {
          width: 100%;
          background: repeating-linear-gradient(-45deg, var(--_fill) 0 6px, transparent 6px 12px);
          animation: none;
        }
      }

      .helper {
        margin: var(--ep-space-100) 0 0;
        color: var(--ep-color-text-secondary);
        font-size: var(--ep-font-size-100);
        line-height: var(--ep-font-line-height-snug);
      }

      @media (forced-colors: active) {
        .track {
          border: 1px solid CanvasText;
        }

        .indicator {
          background: Highlight;
        }
      }
    `,
  ];

  /** How much is done, from 0 to `max`. Leave unset for an indeterminate bar. */
  declare value: number | undefined;
  declare max: number;
  /** What is progressing, like "Uploading notes.pdf". Required: it is the accessible name. */
  declare label: string;
  /** Hint shown under the bar, like "2 of 5 MB". */
  declare helperText: string;
  /** Hides the label visually. It stays the accessible name. */
  declare hideLabel: boolean;
  /** Shows the percentage next to the label. */
  declare showValue: boolean;
  /** `success` or `danger` when the task has finished or failed. */
  declare variant: 'default' | 'success' | 'danger';
  /** `sm` is a 4px bar for tight spaces like cards. */
  declare size: 'sm' | 'md';

  constructor() {
    super();
    this.value = undefined;
    this.max = 100;
    this.label = '';
    this.helperText = '';
    this.hideLabel = false;
    this.showValue = false;
    this.variant = 'default';
    this.size = 'md';
  }

  render() {
    const indeterminate = this.value === undefined || this.value === null || Number.isNaN(this.value);
    const max = this.max > 0 ? this.max : 100;
    const value = indeterminate ? 0 : Math.min(Math.max(0, this.value!), max);
    const percent = Math.round((value / max) * 100);
    const showHeader = !this.hideLabel || (this.showValue && !indeterminate);
    return html`${showHeader
        ? html`<div class="header" aria-hidden="true">
            <span class="label">${this.hideLabel ? '' : this.label}</span>
            ${this.showValue && !indeterminate ? html`<span class="value">${percent}%</span>` : nothing}
          </div>`
        : nothing}
      <div
        part="track"
        class="track ${indeterminate ? 'indeterminate' : ''}"
        role="progressbar"
        aria-label=${this.label}
        aria-describedby=${this.helperText ? 'helper' : nothing}
        aria-valuemin=${indeterminate ? nothing : 0}
        aria-valuemax=${indeterminate ? nothing : max}
        aria-valuenow=${indeterminate ? nothing : value}
        aria-valuetext=${indeterminate ? nothing : `${percent}%`}
      >
        <div part="indicator" class="indicator" style=${indeterminate ? '' : `--_progress: ${value / max}`}></div>
      </div>
      ${this.helperText ? html`<p class="helper" id="helper">${this.helperText}</p>` : nothing}`;
  }
}

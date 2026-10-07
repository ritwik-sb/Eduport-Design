import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import { statusVariants } from '../../styles/status.js';

export type StatusVariant = 'neutral' | 'accent' | 'info' | 'success' | 'warning' | 'danger';

/**
 * A short, non-interactive label for a status or count, like "Draft" or "12".
 * Don't rely on color alone: the text must say what the status is.
 *
 * @tag ep-badge
 * @slot - The badge text.
 * @slot prefix - An optional icon.
 * @csspart base - The badge.
 */
export class EpBadge extends LitElement {
  static properties = {
    variant: { reflect: true },
    dot: { type: Boolean, reflect: true },
  };

  static styles = [
    baseStyles,
    statusVariants,
    css`
      :host {
        display: inline-flex;
        vertical-align: middle;
      }

      .base {
        display: inline-flex;
        align-items: center;
        gap: var(--ep-space-50);
        min-width: 20px;
        height: 20px;
        padding: 0 var(--ep-space-100);
        border-radius: var(--ep-radius-indicator);
        background: var(--_bg);
        color: var(--_fg);
        font-size: var(--ep-font-size-100);
        font-weight: var(--ep-font-weight-semibold);
        line-height: 1;
        white-space: nowrap;
        justify-content: center;
        font-variant-numeric: tabular-nums;
      }

      .dot {
        width: 6px;
        height: 6px;
        border-radius: var(--ep-radius-round);
        background: var(--_border);
      }

      ::slotted(ep-icon) {
        font-size: 12px;
      }

      @media (forced-colors: active) {
        .base {
          border: 1px solid CanvasText;
        }

        .dot {
          background: CanvasText;
        }
      }
    `,
  ];

  declare variant: StatusVariant;
  /** Shows a small status dot before the text. */
  declare dot: boolean;

  constructor() {
    super();
    this.variant = 'neutral';
    this.dot = false;
  }

  render() {
    return html`<span part="base" class="base">
      ${this.dot ? html`<span class="dot"></span>` : html`<slot name="prefix"></slot>`}
      <slot></slot>
    </span>`;
  }
}

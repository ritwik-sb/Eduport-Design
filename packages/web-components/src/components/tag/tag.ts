import { LitElement, css, html, nothing } from 'lit';
import { baseStyles, focusRing } from '../../styles/shared.js';
import { statusVariants } from '../../styles/status.js';
import type { StatusVariant } from '../badge/badge.js';
import '../icon/index.js';

/**
 * A compact label for a keyword, category or filter. Set `removable` to add a remove button.
 *
 * @tag ep-tag
 * @slot - The tag text.
 * @slot prefix - An optional icon.
 * @csspart base - The tag.
 * @csspart remove - The remove button.
 * @fires ep-remove - When the user activates the remove button. The tag doesn't remove itself.
 */
export class EpTag extends LitElement {
  static properties = {
    variant: { reflect: true },
    size: { reflect: true },
    removable: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
  };

  static styles = [
    baseStyles,
    statusVariants,
    css`
      :host {
        display: inline-flex;
        vertical-align: middle;
        --_height: 28px;
        --_font-size: var(--ep-font-size-200);
      }

      :host([size='sm']) {
        --_height: 24px;
        --_font-size: var(--ep-font-size-100);
      }

      .base {
        display: inline-flex;
        align-items: center;
        gap: var(--ep-space-50);
        height: var(--_height);
        padding: 0 var(--ep-space-100);
        border: var(--ep-border-width-thin) solid var(--_border);
        border-radius: var(--ep-radius-indicator);
        background: var(--_bg);
        color: var(--_fg);
        font-size: var(--_font-size);
        font-weight: var(--ep-font-weight-medium);
        line-height: 1;
        white-space: nowrap;
      }

      :host([removable]) .base {
        padding-inline-end: var(--ep-space-25);
      }

      .remove {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: calc(var(--_height) - 8px);
        height: calc(var(--_height) - 8px);
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: var(--ep-radius-indicator);
        background: transparent;
        color: inherit;
        font-size: 14px;
        cursor: pointer;
      }

      /* The button stays small to fit the tag; its hit area grows to the minimum target. */
      .remove::before {
        content: '';
        position: absolute;
        inset: min(0px, calc((var(--_height) - 8px - var(--ep-size-target-min)) / 2));
      }

      .remove:hover {
        background: var(--ep-color-interactive-ghost-hover);
        color: var(--ep-color-text-primary);
      }

      .remove:focus-visible {
        ${focusRing}
        outline-offset: 0;
      }

      ::slotted(ep-icon) {
        font-size: 14px;
      }

      :host([disabled]) .base {
        background: var(--ep-color-interactive-disabled);
        border-color: var(--ep-color-border-default);
        color: var(--ep-color-text-disabled);
      }

      :host([disabled]) .remove {
        cursor: not-allowed;
        background: transparent;
        color: inherit;
      }

      @media (forced-colors: active) {
        .base {
          border-color: CanvasText;
        }
      }
    `,
  ];

  declare variant: StatusVariant;
  declare size: 'sm' | 'md';
  declare removable: boolean;
  declare disabled: boolean;

  constructor() {
    super();
    this.variant = 'neutral';
    this.size = 'md';
    this.removable = false;
    this.disabled = false;
  }

  #onRemove() {
    this.dispatchEvent(new CustomEvent('ep-remove', { bubbles: true, composed: true }));
  }

  render() {
    const text = this.textContent?.trim() ?? '';
    return html`<span part="base" class="base">
      <slot name="prefix"></slot>
      <slot></slot>
      ${this.removable
        ? html`<button
            part="remove"
            class="remove"
            type="button"
            aria-label=${`Remove ${text}`}
            ?disabled=${this.disabled}
            @click=${this.#onRemove}
          >
            <ep-icon name="x"></ep-icon>
          </button>`
        : nothing}
    </span>`;
  }
}

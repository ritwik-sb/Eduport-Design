import { LitElement, css, html } from 'lit';
import { baseStyles, focusRing } from '../../styles/shared.js';

/**
 * One action in an `<ep-menu>`.
 *
 * @tag ep-menu-item
 * @slot - The label.
 * @slot prefix - An icon before the label.
 * @slot suffix - A keyboard shortcut or short hint after the label.
 * @csspart base - The row.
 */
export class EpMenuItem extends LitElement {
  static properties = {
    value: { reflect: true },
    variant: { reflect: true },
    disabled: { type: Boolean, reflect: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        outline: none;
      }

      .base {
        display: flex;
        align-items: center;
        gap: var(--ep-space-100);
        min-height: var(--ep-size-control-md);
        padding: 0 var(--ep-space-150);
        border-radius: var(--ep-radius-control);
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-snug);
        white-space: nowrap;
        cursor: pointer;
        user-select: none;
      }

      .label {
        flex: 1;
      }

      :host(:hover) .base,
      :host(:focus-visible) .base {
        background: var(--ep-color-interactive-ghost-hover);
      }

      :host(:active) .base {
        background: var(--ep-color-interactive-ghost-active);
      }

      :host(:focus-visible) .base {
        ${focusRing}
        outline-offset: -2px;
      }

      :host([variant='danger']) .base {
        color: var(--ep-color-text-danger);
      }

      :host([disabled]) .base {
        background: none;
        color: var(--ep-color-text-disabled);
        cursor: not-allowed;
      }

      ::slotted([slot='prefix']) {
        font-size: var(--ep-size-icon-md);
      }

      ::slotted([slot='suffix']) {
        color: var(--ep-color-text-secondary);
        font-size: var(--ep-font-size-100);
      }

      @media (forced-colors: active) {
        :host(:focus-visible) .base,
        :host(:hover) .base {
          outline: 2px solid Highlight;
        }

        :host([disabled]) .base {
          color: GrayText;
        }
      }
    `,
  ];

  /** Sent with the menu's `ep-select` event. Defaults to the label text. */
  declare value: string;
  /** `danger` for destructive actions like Delete. Put them last, after a divider. */
  declare variant: 'default' | 'danger';
  declare disabled: boolean;

  constructor() {
    super();
    this.value = '';
    this.variant = 'default';
    this.disabled = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'menuitem');
    this.tabIndex = -1;
  }

  updated() {
    if (this.disabled) this.setAttribute('aria-disabled', 'true');
    else this.removeAttribute('aria-disabled');
  }

  /** The text used for type-ahead and as the default value. */
  get text(): string {
    return this.textContent?.trim() ?? '';
  }

  render() {
    return html`<div part="base" class="base">
      <slot name="prefix"></slot><span class="label"><slot></slot></span><slot name="suffix"></slot>
    </div>`;
  }
}

/**
 * A line between groups of items in an `<ep-menu>`.
 *
 * @tag ep-menu-divider
 */
export class EpMenuDivider extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: var(--ep-border-width-thin);
      margin: var(--ep-space-50) 0;
      background: var(--ep-color-border-default);
    }

    @media (forced-colors: active) {
      :host {
        background: CanvasText;
      }
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'separator');
  }
}

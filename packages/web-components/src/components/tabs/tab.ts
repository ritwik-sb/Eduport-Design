import { LitElement, css, html } from 'lit';
import { baseStyles, focusRing } from '../../styles/shared.js';

/**
 * One tab in an `<ep-tabs>`. `panel` must match the `name` of an `<ep-tab-panel>`.
 *
 * @tag ep-tab
 * @slot - The tab label.
 * @slot prefix - An optional icon.
 * @csspart base - The tab.
 */
export class EpTab extends LitElement {
  static properties = {
    panel: { reflect: true },
    selected: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-flex;
        outline: none;
        cursor: pointer;
      }

      .base {
        position: relative;
        display: inline-flex;
        align-items: center;
        gap: var(--ep-space-100);
        height: 40px;
        padding: 0 var(--ep-space-200);
        border-radius: var(--ep-radius-control) var(--ep-radius-control) 0 0;
        color: var(--ep-color-text-secondary);
        font-size: var(--ep-font-size-200);
        font-weight: var(--ep-font-weight-medium);
        white-space: nowrap;
        user-select: none;
        transition: color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
      }

      .base::after {
        content: '';
        position: absolute;
        inset: auto 0 0;
        height: 2px;
        background: transparent;
      }

      :host(:hover) .base {
        color: var(--ep-color-text-primary);
        background: var(--ep-color-interactive-ghost-hover);
      }

      :host([selected]) .base {
        color: var(--ep-color-text-primary);
        font-weight: var(--ep-font-weight-semibold);
      }

      :host([selected]) .base::after {
        background: var(--ep-color-accent-default);
      }

      :host(:focus-visible) .base {
        ${focusRing}
        outline-offset: -2px;
      }

      :host([disabled]) {
        cursor: not-allowed;
      }

      :host([disabled]) .base {
        color: var(--ep-color-text-disabled);
        background: none;
      }

      ::slotted(ep-icon) {
        font-size: 18px;
      }

      @media (forced-colors: active) {
        :host([selected]) .base::after {
          background: Highlight;
        }
      }
    `,
  ];

  declare panel: string;
  declare selected: boolean;
  declare disabled: boolean;

  constructor() {
    super();
    this.panel = '';
    this.selected = false;
    this.disabled = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tab');
    this.slot = 'nav';
  }

  updated() {
    this.setAttribute('aria-selected', String(this.selected));
    if (this.disabled) this.setAttribute('aria-disabled', 'true');
    else this.removeAttribute('aria-disabled');
  }

  render() {
    return html`<span part="base" class="base"><slot name="prefix"></slot><slot></slot></span>`;
  }
}

/**
 * The content for one tab. Shown when the `<ep-tab>` whose `panel` matches `name` is selected.
 *
 * @tag ep-tab-panel
 * @slot - The panel content.
 */
export class EpTabPanel extends LitElement {
  static properties = {
    name: { reflect: true },
    active: { type: Boolean, reflect: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        padding: var(--ep-space-200) 0;
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
        border-radius: var(--ep-radius-control);
        outline: none;
      }

      :host(:not([active])) {
        display: none;
      }

      :host(:focus-visible) {
        ${focusRing}
      }
    `,
  ];

  declare name: string;
  declare active: boolean;

  constructor() {
    super();
    this.name = '';
    this.active = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'tabpanel');
    if (!this.hasAttribute('tabindex')) this.tabIndex = 0;
  }

  render() {
    return html`<slot></slot>`;
  }
}

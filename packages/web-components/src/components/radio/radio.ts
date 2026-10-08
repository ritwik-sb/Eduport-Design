import { LitElement, css, html } from 'lit';
import { baseStyles, focusRing } from '../../styles/shared.js';

/**
 * One option in an `<ep-radio-group>`. Use it only inside a group, which handles selection and keyboard support.
 *
 * @tag ep-radio
 * @slot - The label.
 * @csspart control - The circle.
 */
export class EpRadio extends LitElement {
  static properties = {
    value: { reflect: true },
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-flex;
        align-items: flex-start;
        gap: var(--ep-space-100);
        font-size: var(--ep-font-size-200);
        line-height: 20px;
        color: var(--ep-color-text-primary);
        cursor: pointer;
        outline: none;
        /* Rows grow to the minimum touch target; the 20px line stays centered in it. */
        padding-block: max(0px, calc((var(--ep-size-target-min) - 20px) / 2));
      }

      .control {
        position: relative;
        flex: none;
        width: 16px;
        height: 16px;
        margin-block: 2px;
        border: var(--ep-border-width-thin) solid var(--ep-color-border-strong);
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-surface-default);
        transition: border-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
      }

      :host(:hover) .control {
        border-color: var(--ep-color-text-secondary);
      }

      :host([checked]) .control {
        border: 5px solid var(--ep-color-interactive-primary-default);
        box-shadow: 0 0 0 var(--ep-border-width-thin) var(--ep-color-accent-default);
      }

      :host(:focus-visible) .control {
        ${focusRing}
      }

      :host([disabled]) {
        color: var(--ep-color-text-disabled);
        cursor: not-allowed;
      }

      :host([disabled]) .control {
        border-color: var(--ep-color-border-default);
        background: var(--ep-color-interactive-disabled);
      }

      :host([disabled][checked]) .control {
        border-color: var(--ep-color-text-disabled);
        box-shadow: none;
      }

      @media (forced-colors: active) {
        .control {
          border-color: CanvasText;
        }

        :host([checked]) .control {
          border-color: Highlight;
        }

        :host([disabled]) .control {
          border-color: GrayText;
        }
      }
    `,
  ];

  declare value: string;
  declare checked: boolean;
  declare disabled: boolean;

  #internals = this.attachInternals();

  constructor() {
    super();
    this.value = '';
    this.checked = false;
    this.disabled = false;
    this.#internals.role = 'radio';
  }

  updated() {
    this.#internals.ariaChecked = String(this.checked);
    this.#internals.ariaDisabled = String(this.disabled);
  }

  render() {
    return html`<span part="control" class="control"></span><slot></slot>`;
  }
}

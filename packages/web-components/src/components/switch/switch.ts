import { LitElement, css, html, nothing } from 'lit';
import { baseStyles, focusRing } from '../../styles/shared.js';

/**
 * A toggle for a setting that takes effect straight away, like "Email notifications". For choices that are
 * submitted later with a form, a checkbox is usually clearer.
 *
 * @tag ep-switch
 * @slot - The label.
 * @csspart base - The `<button role="switch">`.
 * @csspart track - The track.
 * @csspart thumb - The moving thumb.
 * @fires change - When the user toggles the switch.
 */
export class EpSwitch extends LitElement {
  static formAssociated = true;
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static properties = {
    checked: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    name: { reflect: true },
    value: {},
    helperText: { attribute: 'helper-text' },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-flex;
        flex-direction: column;
        gap: var(--ep-space-25);
      }

      .base {
        display: inline-flex;
        align-items: flex-start;
        gap: var(--ep-space-150);
        margin: 0;
        padding: 0;
        border: 0;
        background: none;
        color: var(--ep-color-text-primary);
        font: inherit;
        font-size: var(--ep-font-size-200);
        line-height: 20px;
        text-align: start;
        cursor: pointer;
        /* Rows grow to the minimum touch target; the 20px line stays centered in it. */
        padding-block: max(0px, calc((var(--ep-size-target-min) - 20px) / 2));
      }

      .track {
        position: relative;
        flex: none;
        width: 36px;
        height: 20px;
        border: var(--ep-border-width-thin) solid var(--ep-color-border-strong);
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-surface-default);
        box-shadow: var(--ep-shadow-inset);
        transition:
          background-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard),
          box-shadow var(--ep-motion-duration-normal) var(--ep-motion-easing-standard);
      }

      .thumb {
        position: absolute;
        top: 2px;
        left: 2px;
        width: 14px;
        height: 14px;
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-border-strong);
        transition:
          transform var(--ep-motion-duration-move) var(--ep-motion-easing-spring),
          width var(--ep-motion-duration-move) var(--ep-motion-easing-standard);
      }

      .base[aria-checked='true'] .track {
        border-color: var(--ep-color-accent-default);
        background: var(--ep-color-interactive-primary-default);
        box-shadow: var(--ep-shadow-sheen), 0 3px 8px -3px color-mix(in srgb, var(--ep-color-interactive-primary-default) calc(var(--ep-effect-glow-strength) * 100%), transparent);
      }

      .base[aria-checked='true'] .thumb {
        transform: translateX(16px);
        background: var(--ep-color-text-on-primary);
        box-shadow: 0 1px 2px rgb(0 0 0 / 0.3);
      }

      /* The thumb stretches under the finger, then springs to its place. */
      .base:not(:disabled):active .thumb {
        width: calc(14px + var(--ep-motion-distance-sm));
      }

      .base[aria-checked='true']:not(:disabled):active .thumb {
        transform: translateX(calc(16px - var(--ep-motion-distance-sm)));
      }

      .base:hover .track {
        border-color: var(--ep-color-text-secondary);
      }

      .base[aria-checked='true']:hover .track {
        background: var(--ep-color-interactive-primary-hover);
        border-color: var(--ep-color-accent-default);
      }

      .base:focus-visible {
        outline: none;
      }

      .base:focus-visible .track {
        ${focusRing}
      }

      .helper {
        padding-inline-start: 48px;
        font-size: var(--ep-font-size-100);
        line-height: var(--ep-font-line-height-snug);
        color: var(--ep-color-text-secondary);
      }

      .base:disabled {
        color: var(--ep-color-text-disabled);
        cursor: not-allowed;
      }

      .base:disabled .track {
        box-shadow: none;
        border-color: var(--ep-color-border-default);
        background: var(--ep-color-interactive-disabled);
      }

      .base:disabled .thumb {
        box-shadow: none;
        background: var(--ep-color-text-disabled);
      }

      @media (forced-colors: active) {
        .track {
          border-color: CanvasText;
        }

        .thumb {
          background: CanvasText;
        }

        .base[aria-checked='true'] .track {
          background: Highlight;
          border-color: Highlight;
        }

        .base[aria-checked='true'] .thumb {
          background: HighlightText;
        }

        .base:disabled .track,
        .base:disabled .thumb {
          border-color: GrayText;
          background: GrayText;
        }
      }
    `,
  ];

  declare checked: boolean;
  declare disabled: boolean;
  declare name: string;
  /** Value submitted with the form when on. */
  declare value: string;
  declare helperText: string;

  #internals = this.attachInternals();
  #defaultChecked = false;

  constructor() {
    super();
    this.checked = false;
    this.disabled = false;
    this.name = '';
    this.value = 'on';
    this.helperText = '';
  }

  connectedCallback() {
    super.connectedCallback();
    this.#defaultChecked = this.hasAttribute('checked');
  }

  get form() {
    return this.#internals.form;
  }

  formResetCallback() {
    this.checked = this.#defaultChecked;
  }

  /** Set by the browser when the element or an ancestor `<fieldset>` is disabled. Kept apart from `disabled` so
   * re-enabling the fieldset doesn't clear the author's own value. */
  #formDisabled = false;

  formDisabledCallback(disabled: boolean) {
    this.#formDisabled = disabled;
    this.requestUpdate();
  }

  get #isDisabled() {
    return this.disabled || this.#formDisabled;
  }

  updated() {
    this.#internals.setFormValue(this.checked ? this.value : null);
  }

  #onClick() {
    if (this.#isDisabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  render() {
    return html`<button
      part="base"
      class="base"
      type="button"
      role="switch"
      aria-checked=${String(this.checked)}
      aria-describedby=${this.helperText ? 'helper' : nothing}
      ?disabled=${this.#isDisabled}
      @click=${this.#onClick}
    >
      <span part="track" class="track"><span part="thumb" class="thumb"></span></span>
      <slot></slot>
    </button>
    ${this.helperText ? html`<span class="helper" id="helper">${this.helperText}</span>` : nothing}`;
  }
}

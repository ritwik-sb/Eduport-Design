import { LitElement, css, html, nothing } from 'lit';
import { live } from 'lit/directives/live.js';
import { baseStyles, focusRing } from '../../styles/shared.js';
import '../icon/index.js';

/**
 * A checkbox for turning one option on or off, or picking several options from a list.
 *
 * @tag ep-checkbox
 * @slot - The label.
 * @csspart base - The `<label>` wrapper.
 * @csspart control - The native `<input type="checkbox">`.
 * @fires change - When the user checks or unchecks the box.
 */
export class EpCheckbox extends LitElement {
  static formAssociated = true;
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static properties = {
    checked: { type: Boolean, reflect: true },
    indeterminate: { type: Boolean, reflect: true },
    disabled: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
    name: { reflect: true },
    value: {},
    helperText: { attribute: 'helper-text' },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-flex;
      }

      .base {
        display: inline-flex;
        align-items: flex-start;
        gap: var(--ep-space-100);
        font-size: var(--ep-font-size-200);
        line-height: 20px;
        color: var(--ep-color-text-primary);
        cursor: pointer;
        /* Rows grow to the minimum touch target; the 20px line stays centered in it. */
        padding-block: max(0px, calc((var(--ep-size-target-min) - 20px) / 2));
      }

      .control {
        position: relative;
        display: inline-flex;
        flex: none;
        margin-block: 2px;
      }

      input {
        appearance: none;
        width: 16px;
        height: 16px;
        margin: 0;
        border: var(--ep-border-width-thin) solid var(--ep-color-border-strong);
        border-radius: var(--ep-radius-indicator);
        background: var(--ep-color-surface-default);
        cursor: inherit;
        box-shadow: var(--ep-shadow-inset);
        transition:
          background-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard),
          box-shadow var(--ep-motion-duration-normal) var(--ep-motion-easing-standard);
      }

      input:hover {
        border-color: var(--ep-color-text-secondary);
      }

      input:checked,
      input:indeterminate {
        border-color: var(--ep-color-accent-default);
        background: var(--ep-color-interactive-primary-default);
        box-shadow: var(--ep-shadow-sheen), 0 3px 8px -3px color-mix(in srgb, var(--ep-color-interactive-primary-default) calc(var(--ep-effect-glow-strength) * 100%), transparent);
      }

      input:focus-visible {
        ${focusRing}
      }

      .mark {
        position: absolute;
        inset: 0;
        margin: auto;
        font-size: 12px;
        color: var(--ep-color-text-on-primary);
        pointer-events: none;
        --ep-icon-stroke-width: 3;
        animation: pop var(--ep-motion-duration-normal) var(--ep-motion-easing-spring);
      }

      @keyframes pop {
        from {
          opacity: 0;
          transform: scale(var(--ep-motion-scale-pop));
        }
      }

      .text {
        display: flex;
        flex-direction: column;
      }

      .helper {
        font-size: var(--ep-font-size-100);
        line-height: var(--ep-font-line-height-snug);
        color: var(--ep-color-text-secondary);
      }

      :host(:is([disabled], :disabled)) .base {
        color: var(--ep-color-text-disabled);
        cursor: not-allowed;
      }

      :host(:is([disabled], :disabled)) input {
        box-shadow: none;
        border-color: var(--ep-color-border-default);
        background: var(--ep-color-interactive-disabled);
      }

      :host(:is([disabled], :disabled)) .mark {
        color: var(--ep-color-text-disabled);
      }

      @media (forced-colors: active) {
        input {
          border-color: CanvasText;
        }

        input:checked,
        input:indeterminate {
          background: Highlight;
          border-color: Highlight;
        }

        .mark {
          color: HighlightText;
        }
      }
    `,
  ];

  declare checked: boolean;
  /** Shows a dash for a partly-selected group. Cleared when the user clicks. */
  declare indeterminate: boolean;
  declare disabled: boolean;
  declare required: boolean;
  declare name: string;
  /** Value submitted with the form when checked. */
  declare value: string;
  declare helperText: string;

  #internals = this.attachInternals();
  #defaultChecked = false;

  constructor() {
    super();
    this.checked = false;
    this.indeterminate = false;
    this.disabled = false;
    this.required = false;
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
    // The browser can call this partway through an update, when requestUpdate() is ignored and the render that
    // just ran has missed the change. Ask again once that update is over.
    queueMicrotask(() => this.requestUpdate());
  }

  get #isDisabled() {
    return this.disabled || this.#formDisabled;
  }

  updated() {
    this.#internals.setFormValue(this.checked ? this.value : null);
    const input = this.renderRoot.querySelector('input')!;
    if (this.required && !this.checked) {
      this.#internals.setValidity({ valueMissing: true }, input.validationMessage || 'Check this box to continue.', input);
    } else {
      this.#internals.setValidity({});
    }
  }

  #onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.checked = input.checked;
    this.indeterminate = false;
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  render() {
    const icon = this.indeterminate ? 'minus' : this.checked ? 'check' : '';
    return html`<label part="base" class="base">
      <span class="control">
        <input
          part="control"
          type="checkbox"
          .checked=${live(this.checked)}
          .indeterminate=${this.indeterminate}
          ?disabled=${this.#isDisabled}
          ?required=${this.required}
          aria-describedby=${this.helperText ? 'helper' : nothing}
          @change=${this.#onChange}
        />
        ${icon ? html`<ep-icon class="mark" name=${icon}></ep-icon>` : nothing}
      </span>
      <span class="text">
        <slot></slot>
        ${this.helperText ? html`<span class="helper" id="helper">${this.helperText}</span>` : nothing}
      </span>
    </label>`;
  }
}

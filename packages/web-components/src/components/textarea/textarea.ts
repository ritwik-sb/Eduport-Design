import { LitElement, css, html, nothing } from 'lit';
import { live } from 'lit/directives/live.js';
import { baseStyles, fieldStyles } from '../../styles/shared.js';
import { inputStyles } from '../../styles/input.js';
import '../icon/index.js';

/**
 * A multi-line text input with a label, helper text and error message.
 *
 * @tag ep-textarea
 * @csspart base - The bordered box.
 * @csspart textarea - The native `<textarea>`.
 * @fires input - When the value changes as the user types.
 * @fires change - When the user commits a change.
 */
export class EpTextarea extends LitElement {
  static formAssociated = true;
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static properties = {
    label: {},
    value: {},
    name: { reflect: true },
    placeholder: {},
    helperText: { attribute: 'helper-text' },
    errorText: { attribute: 'error-text' },
    rows: { type: Number },
    maxlength: { type: Number },
    resize: { reflect: true },
    disabled: { type: Boolean, reflect: true },
    readonly: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
  };

  static styles = [
    baseStyles,
    fieldStyles,
    inputStyles,
    css`
      .box {
        align-items: stretch;
        padding: var(--ep-space-100) var(--_padding);
      }

      .control {
        resize: vertical;
      }

      :host([resize='none']) .control {
        resize: none;
      }

      .footer {
        display: flex;
        gap: var(--ep-space-200);
        justify-content: space-between;
      }

      .count {
        margin-inline-start: auto;
        font-size: var(--ep-font-size-100);
        color: var(--ep-color-text-secondary);
        font-variant-numeric: tabular-nums;
      }
    `,
  ];

  declare label: string;
  declare value: string;
  declare name: string;
  declare placeholder: string;
  declare helperText: string;
  /** Error shown under the field. When set, the field is marked invalid. */
  declare errorText: string;
  declare rows: number;
  /** Maximum length. When set, a character count is shown. */
  declare maxlength: number | undefined;
  declare resize: 'vertical' | 'none';
  declare disabled: boolean;
  declare readonly: boolean;
  declare required: boolean;

  #internals = this.attachInternals();
  #defaultValue = '';

  constructor() {
    super();
    this.label = '';
    this.value = '';
    this.name = '';
    this.placeholder = '';
    this.helperText = '';
    this.errorText = '';
    this.rows = 4;
    this.maxlength = undefined;
    this.resize = 'vertical';
    this.disabled = false;
    this.readonly = false;
    this.required = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.#defaultValue = this.getAttribute('value') ?? '';
  }

  get form() {
    return this.#internals.form;
  }

  formResetCallback() {
    this.value = this.#defaultValue;
  }

  formDisabledCallback(disabled: boolean) {
    this.disabled = disabled;
  }

  updated() {
    this.#internals.setFormValue(this.value);
    const textarea = this.renderRoot.querySelector('textarea')!;
    if (this.errorText) {
      this.#internals.setValidity({ customError: true }, this.errorText, textarea);
    } else if (!textarea.validity.valid) {
      this.#internals.setValidity(textarea.validity, textarea.validationMessage, textarea);
    } else {
      this.#internals.setValidity({});
    }
  }

  #onInput(event: Event) {
    this.value = (event.target as HTMLTextAreaElement).value;
  }

  render() {
    const invalid = Boolean(this.errorText);
    const describedBy = invalid ? 'error' : this.helperText ? 'helper' : '';
    const showFooter = this.helperText || invalid || this.maxlength;
    return html`<div class="field">
      ${this.label
        ? html`<label class="label" for="textarea"
            >${this.label}${this.required ? html`<span class="required" aria-hidden="true">*</span>` : nothing}</label
          >`
        : nothing}
      <div part="base" class="box ${invalid ? 'invalid' : ''} ${this.disabled ? 'disabled' : ''}">
        <textarea
          part="textarea"
          id="textarea"
          class="control"
          name=${this.name || nothing}
          rows=${this.rows}
          maxlength=${this.maxlength ?? nothing}
          .value=${live(this.value)}
          placeholder=${this.placeholder || nothing}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          aria-invalid=${invalid ? 'true' : nothing}
          aria-describedby=${describedBy || nothing}
          @input=${this.#onInput}
        ></textarea>
      </div>
      ${showFooter
        ? html`<div class="footer">
            ${invalid
              ? html`<p class="error" id="error"><ep-icon name="alert-circle"></ep-icon>${this.errorText}</p>`
              : this.helperText
                ? html`<p class="helper" id="helper">${this.helperText}</p>`
                : nothing}
            ${this.maxlength
              ? html`<span class="count" aria-hidden="true">${this.value.length}/${this.maxlength}</span>`
              : nothing}
          </div>`
        : nothing}
    </div>`;
  }
}

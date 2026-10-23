import { LitElement, html, nothing } from 'lit';
import { live } from 'lit/directives/live.js';
import { baseStyles, fieldStyles, visuallyHidden } from '../../styles/shared.js';
import { inputStyles } from '../../styles/input.js';
import '../icon/index.js';

export type TextFieldType = 'text' | 'email' | 'password' | 'search' | 'tel' | 'url' | 'number';

/**
 * A single-line text input with a label, helper text and error message.
 *
 * @tag ep-text-field
 * @slot prefix - An icon or short text before the input.
 * @slot suffix - An icon or short text after the input.
 * @csspart base - The bordered box.
 * @csspart input - The native `<input>`.
 * @fires input - When the value changes as the user types.
 * @fires change - When the user commits a change.
 *
 * Inside a `<form>`, pressing Enter submits it, unless the form's first submit button is disabled.
 */
export class EpTextField extends LitElement {
  static formAssociated = true;
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static properties = {
    label: {},
    hideLabel: { type: Boolean, reflect: true, attribute: 'hide-label' },
    value: {},
    name: { reflect: true },
    type: {},
    placeholder: {},
    helperText: { attribute: 'helper-text' },
    errorText: { attribute: 'error-text' },
    size: { reflect: true },
    autocomplete: {},
    disabled: { type: Boolean, reflect: true },
    readonly: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
  };

  static styles = [baseStyles, fieldStyles, inputStyles, visuallyHidden];

  /** Visible label. Required for accessibility. */
  declare label: string;
  /** Hides the label visually but keeps it for screen readers. Only where the purpose is obvious without it, such
   * as a search field in the top bar with a search icon. */
  declare hideLabel: boolean;
  declare value: string;
  declare name: string;
  declare type: TextFieldType;
  declare placeholder: string;
  /** Hint shown under the field. */
  declare helperText: string;
  /** Error shown under the field. When set, the field is marked invalid. */
  declare errorText: string;
  declare size: 'sm' | 'md' | 'lg';
  declare autocomplete: string;
  declare disabled: boolean;
  declare readonly: boolean;
  declare required: boolean;

  #internals = this.attachInternals();
  #defaultValue = '';

  constructor() {
    super();
    this.label = '';
    this.hideLabel = false;
    this.value = '';
    this.name = '';
    this.type = 'text';
    this.placeholder = '';
    this.helperText = '';
    this.errorText = '';
    this.size = 'md';
    this.autocomplete = '';
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

  get validity() {
    return this.#internals.validity;
  }

  checkValidity() {
    return this.#internals.checkValidity();
  }

  formResetCallback() {
    this.value = this.#defaultValue;
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
    this.#internals.setFormValue(this.value);
    const input = this.renderRoot.querySelector('input')!;
    if (this.errorText) {
      this.#internals.setValidity({ customError: true }, this.errorText, input);
    } else if (!input.validity.valid) {
      this.#internals.setValidity(input.validity, input.validationMessage, input);
    } else {
      this.#internals.setValidity({});
    }
  }

  #onInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
  }

  // The native `change` event doesn't leave the shadow root, so send our own.
  #onChange() {
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  // Enter submits the form, like a native input. The inner <input> has no form of its own, so do it here.
  #onKeyDown(event: KeyboardEvent) {
    const form = this.#internals.form;
    if (event.key !== 'Enter' || event.isComposing || event.defaultPrevented || !form) return;
    const submitter = [...form.elements].find((el) => (el as HTMLButtonElement).type === 'submit') as
      | HTMLElement
      | undefined;
    if (submitter?.matches(':disabled')) return;
    event.preventDefault();
    // requestSubmit() only takes native submit buttons; an <ep-button> submits the same way without one.
    const native = submitter instanceof HTMLButtonElement || submitter instanceof HTMLInputElement;
    form.requestSubmit(native ? submitter : undefined);
  }

  render() {
    const invalid = Boolean(this.errorText);
    const describedBy = [this.helperText && 'helper', invalid && 'error'].filter(Boolean).join(' ');
    return html`<div class="field">
      ${this.label
        ? html`<label class="label ${this.hideLabel ? 'visually-hidden' : ''}" for="input"
            >${this.label}${this.required ? html`<span class="required" aria-hidden="true">*</span>` : nothing}</label
          >`
        : nothing}
      <div part="base" class="box ${invalid ? 'invalid' : ''} ${this.#isDisabled ? 'disabled' : ''}">
        <slot name="prefix"></slot>
        <input
          part="input"
          id="input"
          class="control"
          type=${this.type}
          name=${this.name || nothing}
          .value=${live(this.value)}
          placeholder=${this.placeholder || nothing}
          autocomplete=${(this.autocomplete || nothing) as never}
          ?disabled=${this.#isDisabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          aria-invalid=${invalid ? 'true' : nothing}
          aria-describedby=${describedBy || nothing}
          @input=${this.#onInput}
          @change=${this.#onChange}
          @keydown=${this.#onKeyDown}
        />
        <slot name="suffix"></slot>
      </div>
      ${this.helperText ? html`<p class="helper" id="helper">${this.helperText}</p>` : nothing}
      ${invalid
        ? html`<p class="error" id="error"><ep-icon name="alert-circle"></ep-icon>${this.errorText}</p>`
        : nothing}
    </div>`;
  }
}

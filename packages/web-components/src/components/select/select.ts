import { LitElement, css, html, nothing } from 'lit';
import { baseStyles, fieldStyles } from '../../styles/shared.js';
import { inputStyles } from '../../styles/input.js';
import '../icon/index.js';

interface OptionData {
  value: string;
  label: string;
  disabled: boolean;
}

/**
 * A dropdown for picking one option, built on the native `<select>` so it works with every
 * keyboard, screen reader and mobile picker. Put `<option>` elements inside it.
 *
 * @tag ep-select
 * @slot - `<option>` elements. Read once on change; they are not rendered in place.
 * @csspart base - The bordered box.
 * @csspart select - The native `<select>`.
 * @fires change - When the user picks an option.
 */
export class EpSelect extends LitElement {
  static formAssociated = true;
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static properties = {
    label: {},
    value: {},
    name: { reflect: true },
    placeholder: {},
    helperText: { attribute: 'helper-text' },
    errorText: { attribute: 'error-text' },
    size: { reflect: true },
    disabled: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
    _options: { state: true },
  };

  static styles = [
    baseStyles,
    fieldStyles,
    inputStyles,
    css`
      .control {
        appearance: none;
        padding-inline-end: 28px;
        margin-inline-end: -28px;
        cursor: pointer;
      }

      .chevron {
        pointer-events: none;
      }

      /* An empty select shows its placeholder in the placeholder color, like a text field. */
      .control.placeholder {
        color: var(--ep-color-text-secondary);
      }

      .control option {
        background: var(--ep-color-surface-overlay);
        color: var(--ep-color-text-primary);
      }

      .hidden-slot {
        display: none;
      }
    `,
  ];

  declare label: string;
  declare value: string;
  declare name: string;
  /** Text shown when no option is selected. */
  declare placeholder: string;
  declare helperText: string;
  /** Error shown under the field. When set, the field is marked invalid. */
  declare errorText: string;
  declare size: 'sm' | 'md' | 'lg';
  declare disabled: boolean;
  declare required: boolean;
  declare _options: OptionData[];

  #internals = this.attachInternals();
  #defaultValue = '';
  #observer = new MutationObserver(() => this.#readOptions());

  constructor() {
    super();
    this.label = '';
    this.value = '';
    this.name = '';
    this.placeholder = '';
    this.helperText = '';
    this.errorText = '';
    this.size = 'md';
    this.disabled = false;
    this.required = false;
    this._options = [];
  }

  connectedCallback() {
    super.connectedCallback();
    this.#readOptions();
    this.#observer.observe(this, { childList: true, subtree: true, characterData: true, attributes: true });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#observer.disconnect();
  }

  #readOptions() {
    const options = [...this.querySelectorAll('option')];
    this._options = options.map((o) => ({ value: o.value, label: o.textContent ?? '', disabled: o.disabled }));
    if (!this.hasUpdated) {
      const selected = options.find((o) => o.hasAttribute('selected'));
      if (!this.value && selected) this.value = selected.value;
      else if (!this.value && !this.placeholder && options[0]) this.value = options[0].value;
      this.#defaultValue = this.value;
    }
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
    const select = this.renderRoot.querySelector('select')!;
    select.value = this.value;
    this.#internals.setFormValue(this.value);
    if (this.errorText) {
      this.#internals.setValidity({ customError: true }, this.errorText, select);
    } else if (this.required && !this.value) {
      this.#internals.setValidity({ valueMissing: true }, select.validationMessage || 'Select an option.', select);
    } else {
      this.#internals.setValidity({});
    }
  }

  #onChange(event: Event) {
    this.value = (event.target as HTMLSelectElement).value;
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  render() {
    const invalid = Boolean(this.errorText);
    const describedBy = [this.helperText && 'helper', invalid && 'error'].filter(Boolean).join(' ');
    return html`<div class="field">
      ${this.label
        ? html`<label class="label" for="select"
            >${this.label}${this.required ? html`<span class="required" aria-hidden="true">*</span>` : nothing}</label
          >`
        : nothing}
      <div part="base" class="box ${invalid ? 'invalid' : ''} ${this.disabled ? 'disabled' : ''}">
        <select
          part="select"
          id="select"
          class="control ${this.placeholder && !this.value ? 'placeholder' : ''}"
          name=${this.name || nothing}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-invalid=${invalid ? 'true' : nothing}
          aria-describedby=${describedBy || nothing}
          @change=${this.#onChange}
        >
          ${this.placeholder ? html`<option value="" disabled hidden>${this.placeholder}</option>` : nothing}
          ${this._options.map(
            (o) => html`<option value=${o.value} ?disabled=${o.disabled} ?selected=${o.value === this.value}>${o.label}</option>`,
          )}
        </select>
        <ep-icon class="chevron" name="chevron-down"></ep-icon>
      </div>
      ${this.helperText ? html`<p class="helper" id="helper">${this.helperText}</p>` : nothing}
      ${invalid
        ? html`<p class="error" id="error"><ep-icon name="alert-circle"></ep-icon>${this.errorText}</p>`
        : nothing}
      <slot class="hidden-slot"></slot>
    </div>`;
  }
}

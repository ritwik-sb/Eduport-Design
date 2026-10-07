import { LitElement, css, html, nothing } from 'lit';
import { baseStyles, fieldStyles } from '../../styles/shared.js';
import type { EpRadio } from './radio.js';
import '../icon/index.js';

/**
 * A set of `<ep-radio>` options where only one can be picked. Arrow keys move between options and select them;
 * Tab moves into and out of the group.
 *
 * @tag ep-radio-group
 * @slot - `<ep-radio>` elements.
 * @csspart options - The wrapper around the options.
 * @fires change - When the user picks an option.
 */
export class EpRadioGroup extends LitElement {
  static formAssociated = true;

  static properties = {
    label: {},
    name: { reflect: true },
    value: { reflect: true },
    helperText: { attribute: 'helper-text' },
    errorText: { attribute: 'error-text' },
    orientation: { reflect: true },
    disabled: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
  };

  static styles = [
    baseStyles,
    fieldStyles,
    css`
      :host {
        display: block;
      }

      fieldset {
        margin: 0;
        padding: 0;
        border: 0;
        min-width: 0;
      }

      .options {
        display: flex;
        flex-direction: column;
        gap: var(--ep-space-150);
      }

      :host([orientation='horizontal']) .options {
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--ep-space-300);
      }
    `,
  ];

  /** Visible group label. */
  declare label: string;
  declare name: string;
  declare value: string;
  declare helperText: string;
  declare errorText: string;
  declare orientation: 'vertical' | 'horizontal';
  declare disabled: boolean;
  declare required: boolean;

  #internals = this.attachInternals();
  #defaultValue = '';

  constructor() {
    super();
    this.label = '';
    this.name = '';
    this.value = '';
    this.helperText = '';
    this.errorText = '';
    this.orientation = 'vertical';
    this.disabled = false;
    this.required = false;
    this.#internals.role = 'radiogroup';
    this.addEventListener('click', this.#onClick);
    this.addEventListener('keydown', this.#onKeyDown);
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

  get #radios(): EpRadio[] {
    return [...this.querySelectorAll<EpRadio>('ep-radio')];
  }

  #isEnabled = (radio: EpRadio) => !radio.disabled && !this.disabled;

  #select(radio: EpRadio, focus: boolean) {
    if (!this.#isEnabled(radio)) return;
    const changed = radio.value !== this.value;
    this.value = radio.value;
    if (focus) radio.focus();
    if (changed) this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  #onClick = (event: MouseEvent) => {
    const radio = (event.target as Element).closest<EpRadio>('ep-radio');
    if (radio) this.#select(radio, true);
  };

  #onKeyDown = (event: KeyboardEvent) => {
    const radio = (event.target as Element).closest<EpRadio>('ep-radio');
    if (!radio) return;
    if (event.key === ' ') {
      event.preventDefault();
      this.#select(radio, false);
      return;
    }
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const enabled = this.#radios.filter(this.#isEnabled);
    const index = enabled.indexOf(radio);
    const next = enabled[(index + step + enabled.length) % enabled.length];
    if (next) this.#select(next, true);
  };

  updated() {
    const radios = this.#radios;
    const enabled = radios.filter(this.#isEnabled);
    const checked = radios.find((r) => r.value === this.value);
    // Roving tabindex: only the checked option (or the first enabled one) is in the tab order.
    const tabStop = checked && this.#isEnabled(checked) ? checked : enabled[0];
    for (const radio of radios) {
      radio.checked = radio === checked;
      radio.tabIndex = radio === tabStop ? 0 : -1;
      if (this.disabled) radio.setAttribute('aria-disabled', 'true');
    }
    this.#internals.ariaLabel = this.label;
    this.#internals.ariaRequired = String(this.required);
    this.#internals.ariaInvalid = String(Boolean(this.errorText));
    this.#internals.setFormValue(this.value || null);
    if (this.errorText) this.#internals.setValidity({ customError: true }, this.errorText);
    else if (this.required && !this.value) this.#internals.setValidity({ valueMissing: true }, 'Select an option.');
    else this.#internals.setValidity({});
  }

  render() {
    const invalid = Boolean(this.errorText);
    return html`<div class="field">
      ${this.label
        ? html`<span class="label" aria-hidden="true"
            >${this.label}${this.required ? html`<span class="required">*</span>` : nothing}</span
          >`
        : nothing}
      <div part="options" class="options">
        <slot @slotchange=${() => this.requestUpdate()}></slot>
      </div>
      ${this.helperText && !invalid ? html`<p class="helper">${this.helperText}</p>` : nothing}
      ${invalid ? html`<p class="error"><ep-icon name="alert-circle"></ep-icon>${this.errorText}</p>` : nothing}
    </div>`;
  }
}

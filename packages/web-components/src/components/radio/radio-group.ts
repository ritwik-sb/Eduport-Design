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

  get #radios(): EpRadio[] {
    return [...this.querySelectorAll<EpRadio>('ep-radio')];
  }

  #isEnabled = (radio: EpRadio) => !radio.disabled && !this.#isDisabled;

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
      radio.requestUpdate(); // so it picks up the group's disabled state
    }
    this.#internals.setFormValue(this.value || null);
    if (this.errorText) this.#internals.setValidity({ customError: true }, this.errorText);
    else if (this.required && !this.value) this.#internals.setValidity({ valueMissing: true }, 'Select an option.');
    else this.#internals.setValidity({});
  }

  render() {
    const invalid = Boolean(this.errorText);
    const describedBy = invalid ? 'error' : this.helperText ? 'helper' : '';
    // The radiogroup role lives in the shadow root so it can point at the label, helper and error text there.
    // Slotted <ep-radio>s are its children in the accessibility tree.
    return html`<div
      class="field"
      role="radiogroup"
      aria-labelledby=${this.label ? 'label' : nothing}
      aria-describedby=${describedBy || nothing}
      aria-required=${this.required ? 'true' : nothing}
      aria-invalid=${invalid ? 'true' : nothing}
      aria-disabled=${this.#isDisabled ? 'true' : nothing}
    >
      ${this.label
        ? html`<span class="label" id="label" aria-hidden="true"
            >${this.label}${this.required ? html`<span class="required" aria-hidden="true">*</span>` : nothing}</span
          >`
        : nothing}
      <div part="options" class="options">
        <slot @slotchange=${() => this.requestUpdate()}></slot>
      </div>
      ${this.helperText && !invalid ? html`<p class="helper" id="helper">${this.helperText}</p>` : nothing}
      ${invalid ? html`<p class="error" id="error"><ep-icon name="alert-circle"></ep-icon>${this.errorText}</p>` : nothing}
    </div>`;
  }
}

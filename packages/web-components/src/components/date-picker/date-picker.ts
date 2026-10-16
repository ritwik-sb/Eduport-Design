import { LitElement, css, html, nothing } from 'lit';
import { live } from 'lit/directives/live.js';
import { baseStyles, fieldStyles, visuallyHidden } from '../../styles/shared.js';
import { inputStyles } from '../../styles/input.js';
import { placeNextTo } from '../../utils/anchor.js';
import {
  fieldOrder,
  formatNumeric,
  formatPattern,
  parseIso,
  parseTyped,
  resolveLocale,
  toIso,
} from '../calendar/dates.js';
import type { EpCalendar } from '../calendar/calendar.js';
import '../calendar/index.js';
import '../icon/index.js';
import '../icon-button/index.js';

/**
 * A date field. People can type the date in their locale's order (22/11/2026 in India, 11/22/2026 in the US) or
 * pick it from a calendar. The value is always `YYYY-MM-DD`, whatever the display format.
 *
 * Typed dates are checked when the field loses focus. Text that isn't a date, or a date outside `min` and `max`,
 * shows an error and makes the field invalid.
 *
 * @tag ep-date-picker
 * @csspart base - The bordered box.
 * @csspart input - The native `<input>`.
 * @csspart panel - The calendar popup.
 * @fires change - When the value changes, from typing (on blur) or the calendar. Read `value`.
 */
export class EpDatePicker extends LitElement {
  static formAssociated = true;
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static properties = {
    label: {},
    value: {},
    name: { reflect: true },
    min: {},
    max: {},
    locale: {},
    helperText: { attribute: 'helper-text' },
    errorText: { attribute: 'error-text' },
    size: { reflect: true },
    disabled: { type: Boolean, reflect: true },
    readonly: { type: Boolean, reflect: true },
    required: { type: Boolean, reflect: true },
    isDateDisabled: { attribute: false },
    _text: { state: true },
    _problem: { state: true },
    _open: { state: true },
  };

  static styles = [
    baseStyles,
    fieldStyles,
    inputStyles,
    visuallyHidden,
    css`
      .box {
        padding-inline-end: var(--ep-space-50);
      }

      .panel {
        position: fixed;
        inset: auto;
        margin: 0;
        padding: var(--ep-space-150);
        border: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-overlay);
        box-shadow: var(--ep-shadow-lg);
      }

      .panel:not(:popover-open) {
        display: none;
      }

      .panel:popover-open {
        opacity: 1;
        translate: 0 0;
        transition:
          opacity var(--ep-motion-duration-fast) var(--ep-motion-easing-enter),
          translate var(--ep-motion-duration-fast) var(--ep-motion-easing-enter);
      }

      @starting-style {
        .panel:popover-open {
          opacity: 0;
          translate: 0 calc(-1 * var(--ep-motion-distance-sm));
        }
      }

      @media (forced-colors: active) {
        .panel {
          border-color: CanvasText;
        }
      }
    `,
  ];

  /** Visible label. Required for accessibility. */
  declare label: string;
  /** The date as `YYYY-MM-DD`, or empty. */
  declare value: string;
  declare name: string;
  /** Earliest allowed date, as `YYYY-MM-DD`. */
  declare min: string;
  /** Latest allowed date, as `YYYY-MM-DD`. */
  declare max: string;
  /** BCP 47 locale for the typed format and the calendar. Defaults to the page's `lang`. */
  declare locale: string;
  /** Hint shown under the field. The expected format is always announced to screen readers. */
  declare helperText: string;
  /** Error shown under the field. When set, the field is marked invalid. */
  declare errorText: string;
  declare size: 'sm' | 'md' | 'lg';
  declare disabled: boolean;
  declare readonly: boolean;
  declare required: boolean;
  /** Return `true` for dates that can't be picked in the calendar, like holidays. Property only. */
  declare isDateDisabled: ((date: Date) => boolean) | undefined;
  declare _text: string;
  declare _problem: '' | 'bad' | 'early' | 'late';
  declare _open: boolean;

  #internals = this.attachInternals();
  #defaultValue = '';
  #formDisabled = false;
  #closedByPointer = false;

  constructor() {
    super();
    this.label = '';
    this.value = '';
    this.name = '';
    this.min = '';
    this.max = '';
    this.locale = '';
    this.helperText = '';
    this.errorText = '';
    this.size = 'md';
    this.disabled = false;
    this.readonly = false;
    this.required = false;
    this.isDateDisabled = undefined;
    this._text = '';
    this._problem = '';
    this._open = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.#defaultValue = this.getAttribute('value') ?? '';
    addEventListener('resize', this.#reposition);
    addEventListener('scroll', this.#reposition, true);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    removeEventListener('resize', this.#reposition);
    removeEventListener('scroll', this.#reposition, true);
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
    this._problem = '';
  }

  formDisabledCallback(disabled: boolean) {
    this.#formDisabled = disabled;
    this.requestUpdate();
  }

  get #isDisabled() {
    return this.disabled || this.#formDisabled;
  }

  get #locale() {
    return resolveLocale(this, this.locale);
  }

  get #panel(): HTMLElement {
    return this.renderRoot.querySelector('.panel')!;
  }

  get #message(): string {
    const format = (iso: string) => {
      const date = parseIso(iso);
      return date ? formatNumeric(date, this.#locale) : iso;
    };
    if (this.errorText) return this.errorText;
    if (this._problem === 'bad') return `Enter a date like ${formatPattern(this.#locale)}.`;
    if (this._problem === 'early') return `Enter a date on or after ${format(this.min)}.`;
    if (this._problem === 'late') return `Enter a date on or before ${format(this.max)}.`;
    return '';
  }

  willUpdate(changed: Map<string, unknown>) {
    if (changed.has('value') || changed.has('locale')) {
      const date = parseIso(this.value);
      if (date) this._text = formatNumeric(date, this.#locale);
      else if (!this.value && this._problem !== 'bad') this._text = '';
      if (date || !this.value) this._problem = this.#rangeProblem(this.value);
    }
  }

  #rangeProblem(iso: string): '' | 'early' | 'late' {
    if (!iso) return '';
    if (this.min && iso < this.min) return 'early';
    if (this.max && iso > this.max) return 'late';
    return '';
  }

  updated(changed: Map<string, unknown>) {
    this.#internals.setFormValue(this.value);
    const input = this.renderRoot.querySelector('input')!;
    const message = this.#message;
    if (this.errorText) this.#internals.setValidity({ customError: true }, message, input);
    else if (this._problem === 'bad') this.#internals.setValidity({ badInput: true }, message, input);
    else if (this._problem === 'early') this.#internals.setValidity({ rangeUnderflow: true }, message, input);
    else if (this._problem === 'late') this.#internals.setValidity({ rangeOverflow: true }, message, input);
    else if (this.required && !this.value) {
      this.#internals.setValidity({ valueMissing: true }, 'Enter a date.', input);
    } else this.#internals.setValidity({});

    if (changed.has('_open')) {
      const panel = this.#panel;
      if (this._open) {
        if (!panel.matches(':popover-open')) panel.showPopover();
        this.#reposition();
        this.renderRoot.querySelector<EpCalendar>('ep-calendar')!.focus();
      } else if (panel.matches(':popover-open')) {
        panel.hidePopover();
      }
    }
  }

  #commit(value: string) {
    if (value === this.value) return;
    this.value = value;
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  #onInput(event: Event) {
    this._text = (event.target as HTMLInputElement).value;
    // Once an error shows, re-check as the user types so it clears the moment the date is right.
    if (this._problem) this.#check(false);
  }

  #onChange() {
    this.#check(true);
  }

  #check(commit: boolean) {
    const text = this._text.trim();
    if (!text) {
      this._problem = '';
      if (commit) this.#commit('');
      return;
    }
    const date = parseTyped(text, this.#locale);
    if (!date) {
      this._problem = 'bad';
      if (commit) this.#commit('');
      return;
    }
    const iso = toIso(date);
    this._problem = this.#rangeProblem(iso);
    if (commit) {
      this.#commit(iso);
      this._text = formatNumeric(date, this.#locale);
    }
  }

  #reposition = () => {
    if (!this._open) return;
    placeNextTo(this.renderRoot.querySelector('.box')!, this.#panel, 'bottom', 'start');
  };

  #onButtonPointerDown = () => {
    this.#closedByPointer = this._open;
  };

  #onButtonClick = () => {
    if (this.#closedByPointer) {
      this.#closedByPointer = false;
      return;
    }
    this._open = !this._open;
  };

  #onToggle = (event: Event) => {
    if ((event as ToggleEvent).newState === 'closed' && this._open) this._open = false;
  };

  #closeAndReturn() {
    this._open = false;
    this.renderRoot.querySelector<HTMLElement>('ep-icon-button')?.focus();
  }

  #onPanelKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      event.stopPropagation();
      this.#closeAndReturn();
    }
  };

  #onCalendarChange(event: Event) {
    event.stopPropagation();
    this._problem = '';
    this.#commit((event.target as EpCalendar).value);
    this.#closeAndReturn();
  }

  render() {
    const message = this.#message;
    const invalid = Boolean(message);
    const pattern = formatPattern(this.#locale);
    const describedBy = ['format', this.helperText && 'helper', invalid && 'error'].filter(Boolean).join(' ');
    const disabled = this.#isDisabled;
    return html`<div class="field">
      ${this.label
        ? html`<label class="label" for="input"
            >${this.label}${this.required ? html`<span class="required" aria-hidden="true">*</span>` : nothing}</label
          >`
        : nothing}
      <div part="base" class="box ${invalid ? 'invalid' : ''} ${disabled ? 'disabled' : ''}">
        <input
          part="input"
          id="input"
          class="control"
          type="text"
          autocomplete="off"
          name=${this.name || nothing}
          .value=${live(this._text)}
          placeholder=${pattern}
          ?disabled=${disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          aria-invalid=${invalid ? 'true' : nothing}
          aria-describedby=${describedBy}
          @input=${this.#onInput}
          @change=${this.#onChange}
        />
        <ep-icon-button
          icon="calendar"
          label="Choose date"
          size="sm"
          ?disabled=${disabled || this.readonly}
          @pointerdown=${this.#onButtonPointerDown}
          @click=${this.#onButtonClick}
        ></ep-icon-button>
      </div>
      <span class="visually-hidden" id="format">Format: ${fieldOrder(this.#locale).join(', ')}.</span>
      ${this.helperText ? html`<p class="helper" id="helper">${this.helperText}</p>` : nothing}
      ${invalid ? html`<p class="error" id="error"><ep-icon name="alert-circle"></ep-icon>${message}</p>` : nothing}
      <div
        part="panel"
        class="panel"
        role="dialog"
        aria-label="Choose date"
        popover="auto"
        @toggle=${this.#onToggle}
        @keydown=${this.#onPanelKeyDown}
      >
        <ep-calendar
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .locale=${this.#locale}
          .isDateDisabled=${this.isDateDisabled}
          @change=${this.#onCalendarChange}
        ></ep-calendar>
      </div>
    </div>`;
  }
}

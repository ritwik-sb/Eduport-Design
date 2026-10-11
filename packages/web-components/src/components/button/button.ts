import { LitElement, html, nothing } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import { buttonStyles } from './button.styles.js';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

/** A spinner waits this long before showing, so quick responses don't flicker. */
const SPINNER_DELAY = 400;
/** Once shown, the spinner stays at least this long. */
const SPINNER_MIN = 500;

/**
 * A button that starts an action. Inside a `<form>`, `type="submit"` and `type="reset"` work like a native button.
 *
 * Set `loading` while the action runs. The button stays focusable and keeps its label, presses are ignored rather
 * than queued, and `aria-busy` is set. A spinner replaces the prefix icon only if loading lasts over 400ms, and then
 * stays at least 500ms, so fast responses don't flicker. Announce the outcome where it lands, not on the button.
 *
 * @tag ep-button
 * @slot - The button label.
 * @slot prefix - An icon or element before the label.
 * @slot suffix - An icon or element after the label.
 * @csspart base - The native `<button>`.
 */
export class EpButton extends LitElement {
  static formAssociated = true;
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static properties = {
    variant: { reflect: true },
    size: { reflect: true },
    type: {},
    disabled: { type: Boolean, reflect: true },
    loading: { type: Boolean, reflect: true },
    fullWidth: { type: Boolean, reflect: true, attribute: 'full-width' },
    _spinning: { state: true },
  };

  static styles = [baseStyles, buttonStyles];

  /** Visual emphasis. Use one `primary` button per view. */
  declare variant: ButtonVariant;
  declare size: ButtonSize;
  /** What the button does inside a form. */
  declare type: 'button' | 'submit' | 'reset';
  declare disabled: boolean;
  /** Marks the action as in progress. Presses are ignored until it is cleared. */
  declare loading: boolean;
  /** Stretches the button to the width of its container. */
  declare fullWidth: boolean;
  declare _spinning: boolean;

  #internals = this.attachInternals();
  #spinnerTimer?: ReturnType<typeof setTimeout>;
  #spinnerShownAt = 0;

  constructor() {
    super();
    this.variant = 'primary';
    this.size = 'md';
    this.type = 'button';
    this.disabled = false;
    this.fullWidth = false;
    this.loading = false;
    this._spinning = false;
    // Capture on the host runs before any listener the app adds, so a press while loading never reaches them.
    this.addEventListener(
      'click',
      (event) => {
        if (!this.loading) return;
        event.preventDefault();
        event.stopImmediatePropagation();
      },
      { capture: true },
    );
  }

  willUpdate(changed: Map<string, unknown>) {
    if (!changed.has('loading')) return;
    clearTimeout(this.#spinnerTimer);
    if (this.loading) {
      if (this._spinning) return;
      this.#spinnerTimer = setTimeout(() => {
        this._spinning = true;
        this.#spinnerShownAt = performance.now();
      }, SPINNER_DELAY);
    } else if (this._spinning) {
      const left = SPINNER_MIN - (performance.now() - this.#spinnerShownAt);
      if (left <= 0) this._spinning = false;
      else this.#spinnerTimer = setTimeout(() => (this._spinning = false), left);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this.#spinnerTimer);
    this._spinning = false;
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

  #onClick() {
    const form = this.#internals.form;
    if (this.#isDisabled || this.loading || !form) return;
    if (this.type === 'submit') form.requestSubmit();
    if (this.type === 'reset') form.reset();
  }

  render() {
    return html`<button
      part="base"
      class="button"
      type="button"
      ?disabled=${this.#isDisabled}
      aria-busy=${this.loading ? 'true' : nothing}
      @click=${this.#onClick}
    >
      ${this._spinning ? html`<span class="spinner" aria-hidden="true"></span>` : nothing}
      <slot name="prefix" ?hidden=${this._spinning}></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    </button>`;
  }
}

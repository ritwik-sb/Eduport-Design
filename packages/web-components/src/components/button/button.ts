import { LitElement, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import { buttonStyles } from './button.styles.js';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * A button that starts an action. Inside a `<form>`, `type="submit"` and `type="reset"` work like a native button.
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
    fullWidth: { type: Boolean, reflect: true, attribute: 'full-width' },
  };

  static styles = [baseStyles, buttonStyles];

  /** Visual emphasis. Use one `primary` button per view. */
  declare variant: ButtonVariant;
  declare size: ButtonSize;
  /** What the button does inside a form. */
  declare type: 'button' | 'submit' | 'reset';
  declare disabled: boolean;
  /** Stretches the button to the width of its container. */
  declare fullWidth: boolean;

  #internals = this.attachInternals();

  constructor() {
    super();
    this.variant = 'primary';
    this.size = 'md';
    this.type = 'button';
    this.disabled = false;
    this.fullWidth = false;
  }

  #onClick() {
    const form = this.#internals.form;
    if (this.disabled || !form) return;
    if (this.type === 'submit') form.requestSubmit();
    if (this.type === 'reset') form.reset();
  }

  render() {
    return html`<button part="base" class="button" type="button" ?disabled=${this.disabled} @click=${this.#onClick}>
      <slot name="prefix"></slot>
      <slot></slot>
      <slot name="suffix"></slot>
    </button>`;
  }
}

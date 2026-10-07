import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import { buttonStyles } from '../button/button.styles.js';
import type { ButtonSize, ButtonVariant } from '../button/button.js';
import '../icon/index.js';

/**
 * A square button that shows only an icon. `label` is required: it is the accessible name.
 * Pair it with `<ep-tooltip>` so sighted users can see the label too.
 *
 * @tag ep-icon-button
 * @csspart base - The native `<button>`.
 */
export class EpIconButton extends LitElement {
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static properties = {
    icon: { reflect: true },
    label: {},
    variant: { reflect: true },
    size: { reflect: true },
    disabled: { type: Boolean, reflect: true },
  };

  static styles = [
    baseStyles,
    buttonStyles,
    css`
      .button {
        width: var(--_height);
        padding: 0;
      }
    `,
  ];

  /** Name of a registered icon. */
  declare icon: string;
  /** Accessible name, for example "Close" or "Edit profile". */
  declare label: string;
  declare variant: ButtonVariant;
  declare size: ButtonSize;
  declare disabled: boolean;

  constructor() {
    super();
    this.icon = '';
    this.label = '';
    this.variant = 'ghost';
    this.size = 'md';
    this.disabled = false;
  }

  render() {
    return html`<button part="base" class="button" type="button" aria-label=${this.label} ?disabled=${this.disabled}>
      <ep-icon name=${this.icon}></ep-icon>
    </button>`;
  }
}

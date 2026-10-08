import { LitElement, css, html, nothing } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import { feedbackIcons, feedbackVariants, type FeedbackVariant } from '../../styles/feedback.js';
import { HasSlotController } from '../../utils/slots.js';
import '../icon/index.js';
import '../icon-button/index.js';

/**
 * An inline message about the page or a section of it, like a warning above a form.
 * It isn't announced when the page loads. To announce a message that appears later, add `role="status"`
 * (or `role="alert"` for urgent errors) to the element before inserting it.
 *
 * @tag ep-alert
 * @slot - The message.
 * @slot actions - Buttons or links shown under the message.
 * @csspart base - The alert box.
 * @fires ep-close - When the user dismisses the alert. The alert hides itself; call `preventDefault()` to keep it.
 */
export class EpAlert extends LitElement {
  static properties = {
    variant: { reflect: true },
    heading: {},
    dismissible: { type: Boolean, reflect: true },
  };

  static styles = [
    baseStyles,
    feedbackVariants,
    css`
      :host {
        display: block;
      }

      .base {
        display: flex;
        gap: var(--ep-space-150);
        padding: var(--ep-space-150) var(--ep-space-200);
        border: var(--ep-border-width-thin) solid var(--_border);
        border-inline-start-width: 4px;
        border-radius: var(--ep-radius-container);
        background: var(--_bg);
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
      }

      .icon {
        flex: none;
        margin-top: 2px;
        font-size: var(--ep-size-icon-md);
        color: var(--_icon);
      }

      .content {
        flex: 1;
        min-width: 0;
      }

      .heading {
        margin: 0;
        font-size: inherit;
        font-weight: var(--ep-font-weight-semibold);
      }

      .actions {
        display: flex;
        flex-wrap: wrap;
        gap: var(--ep-space-100);
        margin-top: var(--ep-space-150);
      }

      ep-icon-button {
        align-self: flex-start;
        margin: -4px -8px -4px 0;
      }

      @media (forced-colors: active) {
        .base {
          border-color: CanvasText;
        }
      }
    `,
  ];

  declare variant: FeedbackVariant;
  /** Bold first line. */
  declare heading: string;
  /** Shows a close button. */
  declare dismissible: boolean;

  #slots = new HasSlotController(this, 'actions');

  constructor() {
    super();
    this.variant = 'info';
    this.heading = '';
    this.dismissible = false;
  }

  #onClose() {
    const event = new CustomEvent('ep-close', { bubbles: true, composed: true, cancelable: true });
    if (this.dispatchEvent(event)) this.hidden = true;
  }

  render() {
    return html`<div part="base" class="base">
      <ep-icon class="icon" name=${feedbackIcons[this.variant] ?? feedbackIcons.info}></ep-icon>
      <div class="content">
        ${this.heading ? html`<p class="heading">${this.heading}</p>` : nothing}
        <slot></slot>
        <div class="actions" ?hidden=${!this.#slots.test('actions')}><slot name="actions"></slot></div>
      </div>
      ${this.dismissible
        ? html`<ep-icon-button icon="x" label="Dismiss" size="sm" @click=${this.#onClose}></ep-icon-button>`
        : nothing}
    </div>`;
  }
}

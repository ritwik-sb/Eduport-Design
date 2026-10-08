import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import { HasSlotController } from '../../utils/slots.js';
import { modalClosed, modalOpened } from '../../utils/modal-stack.js';
import '../icon-button/index.js';

/**
 * A dialog that interrupts the page for a focused task or a decision. Built on the native `<dialog>`, so focus
 * moves into it, stays inside while it is open, and returns to the trigger when it closes. Escape and the close
 * button close it. A click on the backdrop does not, on purpose: a stray tap shouldn't throw away a half-filled
 * form or dismiss a confirmation the user hasn't answered.
 *
 * Toasts raised while the modal is open appear above it and stay clickable.
 *
 * @tag ep-modal
 * @slot - The body.
 * @slot footer - Action buttons, primary action last.
 * @csspart dialog - The native `<dialog>`.
 * @fires ep-close - After the modal closes, for any reason.
 */
export class EpModal extends LitElement {
  static properties = {
    open: { type: Boolean, reflect: true },
    heading: {},
    size: { reflect: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: contents;
        --_width: 520px;
      }

      :host([size='sm']) {
        --_width: 400px;
      }

      :host([size='lg']) {
        --_width: 720px;
      }

      dialog {
        width: min(var(--_width), calc(100vw - 32px));
        max-height: min(85vh, 800px);
        padding: 0;
        border: 0;
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-overlay);
        color: var(--ep-color-text-primary);
        box-shadow: var(--ep-shadow-lg);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
        overflow: hidden;
      }

      dialog[open] {
        display: flex;
        flex-direction: column;
        animation: enter var(--ep-motion-duration-normal) var(--ep-motion-easing-enter);
      }

      dialog::backdrop {
        background: var(--ep-color-background-scrim, rgb(0 0 0 / 0.6));
      }

      @keyframes enter {
        from {
          opacity: 0;
          transform: translateY(8px) scale(0.98);
        }
      }

      header {
        display: flex;
        align-items: flex-start;
        gap: var(--ep-space-150);
        padding: var(--ep-space-200) var(--ep-space-200) 0 var(--ep-space-300);
      }

      h2 {
        flex: 1;
        margin: var(--ep-space-100) 0 0;
        font-size: var(--ep-font-size-500);
        font-weight: var(--ep-font-weight-semibold);
        line-height: var(--ep-font-line-height-tight);
      }

      .body {
        flex: 1;
        overflow-y: auto;
        padding: var(--ep-space-200) var(--ep-space-300) var(--ep-space-300);
      }

      footer {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        gap: var(--ep-space-100);
        padding: var(--ep-space-200) var(--ep-space-300);
        border-top: var(--ep-border-width-thin) solid var(--ep-color-border-default);
      }

      footer[hidden] {
        display: none;
      }

      @media (forced-colors: active) {
        dialog {
          border: 1px solid CanvasText;
        }
      }
    `,
  ];

  declare open: boolean;
  /** The dialog title. Also its accessible name. */
  declare heading: string;
  declare size: 'sm' | 'md' | 'lg';

  #slots = new HasSlotController(this, 'footer');

  constructor() {
    super();
    this.open = false;
    this.heading = '';
    this.size = 'md';
  }

  /** Opens the modal. */
  show() {
    this.open = true;
  }

  /** Closes the modal. */
  close() {
    this.open = false;
  }

  get #dialog(): HTMLDialogElement {
    return this.renderRoot.querySelector('dialog')!;
  }

  updated(changed: Map<string, unknown>) {
    if (!changed.has('open')) return;
    const dialog = this.#dialog;
    if (this.open && !dialog.open) {
      dialog.showModal();
      modalOpened(this);
    }
    if (!this.open && dialog.open) dialog.close();
    if (!this.open) modalClosed(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    modalClosed(this);
  }

  #onClose() {
    this.open = false;
    this.dispatchEvent(new CustomEvent('ep-close', { bubbles: true, composed: true }));
  }

  render() {
    return html`<dialog part="dialog" aria-labelledby="heading" @close=${this.#onClose}>
      <header>
        <h2 id="heading">${this.heading}</h2>
        <ep-icon-button icon="x" label="Close" @click=${() => this.close()}></ep-icon-button>
      </header>
      <div class="body"><slot></slot></div>
      <footer ?hidden=${!this.#slots.test('footer')}><slot name="footer"></slot></footer>
      <slot name="toaster"></slot>
    </dialog>`;
  }
}

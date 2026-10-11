import { LitElement, css, html, nothing } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import { feedbackIcons, type FeedbackVariant } from '../../styles/feedback.js';
import { onModalChange, topModal } from '../../utils/modal-stack.js';
import { motionDuration } from '../../utils/motion.js';
import '../icon/index.js';
import '../icon-button/index.js';

/**
 * A brief notification that confirms an action, like "Assignment submitted". Use `toast()` to show one;
 * it puts the toast in a live region so screen readers announce it.
 *
 * Toasts close on their own after 6 seconds, plus 1 second for every 20 words over 20, and the timer pauses while
 * the pointer or focus is on the toast. A toast with an `action` (like "Undo") stays until it is dismissed, and so
 * does one with `duration` set to 0. Never put the only copy of important information in a toast.
 *
 * @tag ep-toast
 * @slot - The message.
 * @slot action - An optional button, like "Undo".
 * @csspart base - The toast surface.
 * @fires ep-close - After the toast closes.
 */
export class EpToast extends LitElement {
  static properties = {
    variant: { reflect: true },
    heading: {},
    duration: { type: Number },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        pointer-events: auto;
        --_icon: var(--ep-color-text-info);
      }

      :host([variant='success']) {
        --_icon: var(--ep-color-text-success);
      }

      :host([variant='warning']) {
        --_icon: var(--ep-color-text-warning);
      }

      :host([variant='danger']) {
        --_icon: var(--ep-color-text-danger);
      }

      .base {
        display: flex;
        align-items: flex-start;
        gap: var(--ep-space-150);
        width: min(380px, calc(100vw - 32px));
        padding: var(--ep-space-150) var(--ep-space-100) var(--ep-space-150) var(--ep-space-200);
        border: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-overlay);
        color: var(--ep-color-text-primary);
        box-shadow: var(--ep-shadow-lg);
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-normal);
        animation: enter var(--ep-motion-duration-slow) var(--ep-motion-easing-enter);
      }

      @keyframes enter {
        from {
          opacity: 0;
          transform: translateY(var(--ep-motion-distance-md));
        }
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
        padding-top: 0;
      }

      .heading {
        margin: 0;
        font-weight: var(--ep-font-weight-semibold);
      }

      .message {
        color: var(--ep-color-text-secondary);
      }

      .action {
        display: flex;
        align-self: center;
      }

      ep-icon-button {
        margin-block: -4px;
      }

      @media (forced-colors: active) {
        .base {
          border-color: CanvasText;
        }
      }
    `,
  ];

  declare variant: FeedbackVariant;
  declare heading: string;
  /**
   * Milliseconds before the toast closes. 0 keeps it open until dismissed. Leave unset for the default: 6 seconds,
   * plus 1 second for every 20 words over 20.
   */
  declare duration: number | undefined;

  #timer?: ReturnType<typeof setTimeout>;
  #remaining = 0;
  #startedAt = 0;
  #closing = false;

  constructor() {
    super();
    this.variant = 'info';
    this.heading = '';
    this.duration = undefined;
    this.addEventListener('pointerenter', this.#pause);
    this.addEventListener('pointerleave', this.#resume);
    this.addEventListener('focusin', this.#pause);
    this.addEventListener('focusout', this.#resume);
  }

  connectedCallback() {
    super.connectedCallback();
    // The toaster moves in and out of open modals; keep the time already counted down across those moves.
    if (!this.hasUpdated) this.#remaining = this.#lifetime;
    this.#resume();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#pause();
  }

  /** How long this toast stays, in milliseconds. 0 means until dismissed. */
  get #lifetime(): number {
    if (this.querySelector(':scope > [slot="action"]')) return 0;
    if (this.duration !== undefined) return this.duration;
    return readingTime(`${this.heading} ${this.textContent ?? ''}`);
  }

  #pause = () => {
    if (!this.#timer) return;
    clearTimeout(this.#timer);
    this.#timer = undefined;
    this.#remaining -= Date.now() - this.#startedAt;
  };

  #resume = () => {
    if (this.#lifetime <= 0 || this.#timer || this.matches(':focus-within')) return;
    this.#startedAt = Date.now();
    this.#timer = setTimeout(() => this.close(), Math.max(this.#remaining, 1000));
  };

  /** Fades the toast out, then removes it. */
  async close() {
    if (this.#closing) return;
    this.#closing = true;
    clearTimeout(this.#timer);
    const base = this.renderRoot.querySelector<HTMLElement>('.base');
    const duration = motionDuration(this, 'normal');
    if (base && duration > 0 && typeof base.animate === 'function') {
      // Exits are fade only and faster than the enter, so the stack below isn't left waiting.
      const exit = base.animate([{ opacity: 1 }, { opacity: 0 }], {
        duration,
        easing: getComputedStyle(this).getPropertyValue('--ep-motion-easing-exit').trim() || 'ease-in',
        fill: 'forwards',
      });
      await exit.finished.catch(() => {});
    }
    this.dispatchEvent(new CustomEvent('ep-close', { bubbles: true, composed: true }));
    this.remove();
  }

  render() {
    return html`<div part="base" class="base">
      <ep-icon class="icon" name=${feedbackIcons[this.variant] ?? feedbackIcons.info}></ep-icon>
      <div class="content">
        ${this.heading ? html`<p class="heading">${this.heading}</p>` : nothing}
        <div class="message"><slot></slot></div>
      </div>
      <div class="action"><slot name="action"></slot></div>
      <ep-icon-button icon="x" label="Dismiss notification" size="sm" @click=${() => this.close()}></ep-icon-button>
    </div>`;
  }
}

/** The default toast lifetime: 6 seconds, plus 1 second for every 20 words over 20. */
function readingTime(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return 6000 + Math.ceil(Math.max(0, words - 20) / 20) * 1000;
}

const supportsPopover = typeof HTMLElement !== 'undefined' && 'showPopover' in HTMLElement.prototype;

/**
 * The fixed corner region that holds toasts. `toast()` creates one on first use; you only need to add it
 * yourself to change `placement`.
 *
 * The toaster sits in the browser's top layer (as a manual popover), above dialogs and tooltips. While an
 * `<ep-modal>` is open it moves inside that modal, because a modal makes the rest of the page inert, and moves
 * back when the modal closes. So a "Couldn't save" raised from a modal form stays visible and clickable.
 *
 * @tag ep-toaster
 * @slot - `<ep-toast>` elements.
 */
export class EpToaster extends LitElement {
  static properties = {
    placement: { reflect: true },
  };

  static styles = css`
    :host {
      position: fixed;
      z-index: var(--ep-z-index-toast);
      inset: auto var(--ep-space-300) var(--ep-space-300) auto;
      /* Reset the browser's popover box. */
      width: auto;
      height: auto;
      margin: 0;
      padding: 0;
      border: 0;
      background: none;
      color: inherit;
      overflow: visible;
      display: flex;
      flex-direction: column-reverse;
      gap: var(--ep-space-150);
      pointer-events: none;
    }

    :host([placement='top-end']) {
      inset: var(--ep-space-300) var(--ep-space-300) auto auto;
      flex-direction: column;
    }

    :host([placement='bottom-center']) {
      inset: auto 0 var(--ep-space-300);
      align-items: center;
    }
  `;

  declare placement: 'bottom-end' | 'top-end' | 'bottom-center';

  constructor() {
    super();
    this.placement = 'bottom-end';
  }

  #home: ParentNode | null = null;
  #stopListening?: () => void;

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'region');
    this.setAttribute('aria-label', 'Notifications');
    this.setAttribute('aria-live', 'polite');
    this.setAttribute('aria-relevant', 'additions');
    if (supportsPopover) this.setAttribute('popover', 'manual');
    if (!this.#stopListening) {
      this.#home = this.parentNode;
      this.#stopListening = onModalChange(() => this.#place());
    }
    this.#place();
    this.#raise();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    // Moving between the page and a modal reconnects straight away; only a real removal stops listening.
    queueMicrotask(() => {
      if (this.isConnected) return;
      this.#stopListening?.();
      this.#stopListening = undefined;
    });
  }

  /** Moves the toaster into the newest open modal, or back where it started. */
  #place() {
    const modal = topModal();
    const target = modal ?? this.#home;
    if (!target || this.parentNode === target) return;
    if (modal) this.slot = 'toaster';
    else this.removeAttribute('slot');
    target.append(this);
  }

  /** Shows the toaster on top of the top layer, above any dialog opened since. */
  #raise() {
    if (!supportsPopover || !this.isConnected) return;
    if (this.matches(':popover-open')) this.hidePopover();
    this.showPopover();
  }

  render() {
    // Each new toast re-raises the toaster above anything opened since the last one.
    return html`<slot @slotchange=${() => this.#raise()}></slot>`;
  }
}

export interface ToastOptions {
  message: string;
  heading?: string;
  variant?: FeedbackVariant;
  /** Milliseconds before the toast closes. 0 keeps it open. Default: 6 seconds, plus 1 second per 20 words over 20. */
  duration?: number;
}

/** Shows a toast and returns its element. */
export function toast(options: ToastOptions): EpToast {
  let toaster = document.querySelector('ep-toaster');
  if (!toaster) {
    toaster = document.createElement('ep-toaster');
    document.body.append(toaster);
  }
  const element = document.createElement('ep-toast');
  element.variant = options.variant ?? 'info';
  element.heading = options.heading ?? '';
  element.duration = options.duration;
  element.textContent = options.message;
  // Wait a frame so a just-created live region is in the accessibility tree before content arrives.
  requestAnimationFrame(() => toaster!.append(element));
  return element;
}

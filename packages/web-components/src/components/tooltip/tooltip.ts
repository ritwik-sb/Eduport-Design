import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';

const HIDE_DELAY = 100;
const GAP = 6;

/**
 * A short text label that appears when the wrapped element is hovered or focused. Escape closes it, and the
 * pointer can move onto it without it closing (WCAG 1.4.13).
 *
 * The text is added to the trigger's accessible description. For an `<ep-icon-button>`, whose `label`
 * already says the same thing, nothing is added.
 *
 * @tag ep-tooltip
 * @slot - The trigger element.
 * @csspart tooltip - The tooltip bubble.
 */
export class EpTooltip extends LitElement {
  static properties = {
    content: {},
    placement: { reflect: true },
    _open: { state: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
      }

      .tooltip {
        position: fixed;
        inset: auto;
        margin: 0;
        padding: var(--ep-space-50) var(--ep-space-100);
        max-width: 280px;
        border: 0;
        border-radius: var(--ep-radius-indicator);
        background: var(--ep-color-background-inverse);
        color: var(--ep-color-text-inverse);
        font-size: var(--ep-font-size-100);
        font-weight: var(--ep-font-weight-medium);
        line-height: var(--ep-font-line-height-snug);
        box-shadow: var(--ep-shadow-md);
        pointer-events: auto;
        opacity: 0;
        transition: opacity var(--ep-motion-duration-fast) var(--ep-motion-easing-enter);
        overflow: visible;
      }

      .tooltip.open {
        opacity: 1;
      }

      .tooltip:not(.open):not(:popover-open) {
        display: none;
      }

      @media (forced-colors: active) {
        .tooltip {
          border: 1px solid CanvasText;
        }
      }
    `,
  ];

  /** The tooltip text. */
  declare content: string;
  /** Preferred side. Flips when there isn't room. */
  declare placement: 'top' | 'bottom' | 'left' | 'right';
  declare _open: boolean;

  #hideTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    super();
    this.content = '';
    this.placement = 'top';
    this._open = false;
    this.addEventListener('pointerenter', this.#show);
    this.addEventListener('pointerleave', this.#scheduleHide);
    this.addEventListener('focusin', this.#show);
    this.addEventListener('focusout', this.#hide);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this.#onKeyDown);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this.#onKeyDown);
  }

  get #trigger(): HTMLElement | undefined {
    return [...this.children].find((el): el is HTMLElement => el instanceof HTMLElement);
  }

  get #bubble(): HTMLElement | null {
    return this.renderRoot.querySelector('.tooltip');
  }

  #show = () => {
    clearTimeout(this.#hideTimer);
    if (this.content) this._open = true;
  };

  #scheduleHide = () => {
    this.#hideTimer = setTimeout(this.#hide, HIDE_DELAY);
  };

  #hide = () => {
    clearTimeout(this.#hideTimer);
    this._open = false;
  };

  #onKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this._open) this.#hide();
  };

  #position() {
    const trigger = this.#trigger;
    const bubble = this.#bubble;
    if (!trigger || !bubble) return;
    const t = trigger.getBoundingClientRect();
    const b = bubble.getBoundingClientRect();
    const fits = {
      top: t.top - b.height - GAP >= 0,
      bottom: t.bottom + b.height + GAP <= innerHeight,
      left: t.left - b.width - GAP >= 0,
      right: t.right + b.width + GAP <= innerWidth,
    };
    const opposite = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' } as const;
    const side = fits[this.placement] || !fits[opposite[this.placement]] ? this.placement : opposite[this.placement];
    let top = 0;
    let left = 0;
    if (side === 'top' || side === 'bottom') {
      top = side === 'top' ? t.top - b.height - GAP : t.bottom + GAP;
      left = t.left + t.width / 2 - b.width / 2;
    } else {
      top = t.top + t.height / 2 - b.height / 2;
      left = side === 'left' ? t.left - b.width - GAP : t.right + GAP;
    }
    left = Math.min(Math.max(4, left), innerWidth - b.width - 4);
    bubble.style.top = `${Math.round(top)}px`;
    bubble.style.left = `${Math.round(left)}px`;
  }

  updated(changed: Map<string, unknown>) {
    const trigger = this.#trigger;
    if (trigger && changed.has('content')) {
      const duplicate = trigger.getAttribute('label') === this.content || trigger.getAttribute('aria-label') === this.content;
      if (this.content && !duplicate) trigger.setAttribute('aria-description', this.content);
      else trigger.removeAttribute('aria-description');
    }
    if (changed.has('_open')) {
      const bubble = this.#bubble!;
      // Top layer escapes overflow: hidden and z-index stacking where the popover API exists.
      if (typeof bubble.showPopover === 'function') {
        if (this._open && !bubble.matches(':popover-open')) bubble.showPopover();
        if (!this._open && bubble.matches(':popover-open')) bubble.hidePopover();
      }
      if (this._open) this.#position();
    }
  }

  render() {
    return html`<slot @slotchange=${() => this.requestUpdate('content')}></slot>
      <div
        part="tooltip"
        class="tooltip ${this._open ? 'open' : ''}"
        role="tooltip"
        popover="manual"
        aria-hidden="true"
        @pointerenter=${this.#show}
        @pointerleave=${this.#scheduleHide}
      >
        ${this.content}
      </div>`;
  }
}

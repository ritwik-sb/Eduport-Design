import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';

/** Pointer hover waits this long before opening, so moving across a toolbar doesn't flash tooltips. */
const OPEN_DELAY = 500;
/** After a tooltip closes, a neighbor opens with no delay for this long, so scanning a toolbar stays quick. */
const SKIP_DELAY_WINDOW = 300;
const HIDE_DELAY = 100;
const GAP = 6;

let lastClosedAt = -Infinity;
const openTooltips = new Set<EpTooltip>();

/**
 * A short text label that appears when the wrapped element is hovered or focused. Keyboard focus opens it at once;
 * hover opens it after 500ms, or at once when another tooltip closed in the last 300ms. Escape closes it, and the
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
        box-shadow: var(--ep-shadow-raised);
        pointer-events: auto;
        overflow: visible;
        /* Enters with a fade and a small slide away from the trigger. The slide is 0 under reduced motion. */
        --_dx: 0px;
        --_dy: 0px;
      }

      .tooltip.open {
        animation: tooltip-enter var(--ep-motion-duration-fast) var(--ep-motion-easing-enter);
      }

      .tooltip[data-side='top'] {
        --_dy: var(--ep-motion-distance-sm);
      }

      .tooltip[data-side='bottom'] {
        --_dy: calc(-1 * var(--ep-motion-distance-sm));
      }

      .tooltip[data-side='left'] {
        --_dx: var(--ep-motion-distance-sm);
      }

      .tooltip[data-side='right'] {
        --_dx: calc(-1 * var(--ep-motion-distance-sm));
      }

      @keyframes tooltip-enter {
        from {
          opacity: 0;
          transform: translate(var(--_dx), var(--_dy));
        }
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
  #openTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    super();
    this.content = '';
    this.placement = 'top';
    this._open = false;
    this.addEventListener('pointerenter', this.#scheduleShow);
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
    clearTimeout(this.#openTimer);
    clearTimeout(this.#hideTimer);
    openTooltips.delete(this);
  }

  get #trigger(): HTMLElement | undefined {
    return [...this.children].find((el): el is HTMLElement => el instanceof HTMLElement);
  }

  get #bubble(): HTMLElement | null {
    return this.renderRoot.querySelector('.tooltip');
  }

  #show = () => {
    clearTimeout(this.#hideTimer);
    clearTimeout(this.#openTimer);
    if (this.content) this._open = true;
  };

  #scheduleShow = () => {
    clearTimeout(this.#hideTimer);
    // A neighbor that is still open (it closes 100ms after the pointer leaves) counts too.
    if (this._open || openTooltips.size > 0 || performance.now() - lastClosedAt < SKIP_DELAY_WINDOW) return this.#show();
    clearTimeout(this.#openTimer);
    this.#openTimer = setTimeout(this.#show, OPEN_DELAY);
  };

  #scheduleHide = () => {
    clearTimeout(this.#openTimer);
    this.#hideTimer = setTimeout(this.#hide, HIDE_DELAY);
  };

  #hide = () => {
    clearTimeout(this.#hideTimer);
    clearTimeout(this.#openTimer);
    if (this._open) lastClosedAt = performance.now();
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
    bubble.dataset.side = side;
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
      if (this._open) openTooltips.add(this);
      else openTooltips.delete(this);
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

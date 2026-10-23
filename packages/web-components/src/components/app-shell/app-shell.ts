import { LitElement, css, html, nothing } from 'lit';
import { baseStyles, focusRing } from '../../styles/shared.js';
import { HasSlotController } from '../../utils/slots.js';
import { modalClosed, modalOpened } from '../../utils/modal-stack.js';
import { motionDuration } from '../../utils/motion.js';
import type { EpTopBar } from '../top-bar/top-bar.js';
import '../icon-button/index.js';

/** Used when the --ep-breakpoint-lg token can't be read. */
const FALLBACK_LG = '1024px';

/**
 * The frame every screen of an app sits in: a sticky top bar, the side navigation and the content area, laid out
 * as docs/layout.md describes. It adds a "Skip to content" link and the `<main>` landmark, applies the page
 * margin, and caps content at `--ep-layout-width-page`.
 *
 * From the `lg` breakpoint (1024px) the navigation sits beside the content. On narrower screens it moves into a
 * drawer: the top bar shows a menu button that opens it, and choosing an item, pressing Escape or tapping outside
 * closes it. Focus moves into the drawer while it is open and returns to the menu button after.
 *
 * Put one `<ep-page-header>` first in the content, then the page's sections.
 *
 * @tag ep-app-shell
 * @slot top-bar - An `<ep-top-bar>`.
 * @slot nav - An `<ep-side-nav>`.
 * @slot - The page content.
 * @csspart main - The `<main>` landmark.
 * @csspart content - The width-capped wrapper inside `<main>`.
 * @csspart drawer - The `<dialog>` that holds the navigation on narrow screens.
 */
export class EpAppShell extends LitElement {
  static properties = {
    navOpen: { type: Boolean, reflect: true, attribute: 'nav-open' },
    fullWidth: { type: Boolean, reflect: true, attribute: 'full-width' },
    _wide: { state: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        --_top: 0px;
        display: block;
        min-height: 100dvh;
        background: var(--ep-color-background-default);
        color: var(--ep-color-text-primary);
      }

      :host([data-has-top-bar]) {
        --_top: var(--ep-layout-header-height);
      }

      .skip {
        position: fixed;
        z-index: 2;
        inset-block-start: var(--ep-space-100);
        inset-inline-start: var(--ep-space-100);
        padding: var(--ep-space-100) var(--ep-space-200);
        border-radius: var(--ep-radius-control);
        background: var(--ep-color-surface-overlay);
        border: 0;
        color: var(--ep-color-text-link);
        font: var(--ep-font-label-md);
        cursor: pointer;
        transform: translateY(calc(-100% - var(--ep-space-200)));
      }

      .skip:focus-visible {
        ${focusRing}
        box-shadow: var(--ep-shadow-overlay);
        transform: none;
      }

      .top {
        position: sticky;
        z-index: 1;
        inset-block-start: 0;
      }

      .body {
        display: flex;
      }

      .sidebar {
        position: sticky;
        flex: none;
        inset-block-start: var(--_top);
        width: var(--ep-layout-sidebar-width);
        height: calc(100dvh - var(--_top));
        overflow-y: auto;
        overscroll-behavior: contain;
        border-inline-end: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        background: var(--ep-color-surface-default);
      }

      .sidebar[hidden] {
        display: none;
      }

      main {
        flex: 1;
        min-width: 0;
      }

      main:focus {
        outline: none;
      }

      .content {
        max-width: calc(var(--ep-layout-width-page) + 2 * var(--ep-layout-margin));
        margin-inline: auto;
        padding-block: var(--ep-layout-margin) var(--ep-space-800);
        padding-inline: max(var(--ep-layout-margin), env(safe-area-inset-left))
          max(var(--ep-layout-margin), env(safe-area-inset-right));
      }

      :host([full-width]) .content {
        max-width: none;
      }

      .drawer {
        width: min(calc(var(--ep-layout-sidebar-width) + var(--ep-space-400)), calc(100vw - var(--ep-space-800)));
        height: 100dvh;
        max-width: none;
        max-height: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-start-end-radius: var(--ep-radius-container);
        border-end-end-radius: var(--ep-radius-container);
        inset-block: 0;
        inset-inline: 0 auto;
        overflow-y: auto;
        overscroll-behavior: contain;
        background: var(--ep-color-surface-overlay);
        box-shadow: var(--ep-shadow-overlay);
        color: var(--ep-color-text-primary);
      }

      .drawer[open] {
        display: flex;
        flex-direction: column;
        animation: slide-in var(--ep-motion-duration-slow) var(--ep-motion-easing-enter);
      }

      .drawer[data-closing] {
        animation: slide-out var(--ep-motion-duration-normal) var(--ep-motion-easing-exit) forwards;
      }

      /* Reduced motion: fade only, no slide. */
      .drawer.fade[open] {
        animation-name: fade-in;
      }

      .drawer.fade[data-closing] {
        animation-name: fade-out;
      }

      .drawer::backdrop {
        background: var(--ep-color-background-scrim, rgb(0 0 0 / 0.6));
        animation: fade-in var(--ep-motion-duration-slow) var(--ep-motion-easing-standard);
      }

      .drawer[data-closing]::backdrop {
        animation: fade-out var(--ep-motion-duration-normal) var(--ep-motion-easing-exit) forwards;
      }

      :host(:dir(rtl)) .drawer {
        --_from: 100%;
      }

      @keyframes slide-in {
        from {
          transform: translateX(var(--_from, -100%));
        }
      }

      @keyframes slide-out {
        to {
          transform: translateX(var(--_from, -100%));
        }
      }

      @keyframes fade-in {
        from {
          opacity: 0;
        }
      }

      @keyframes fade-out {
        to {
          opacity: 0;
        }
      }

      .drawer-head {
        display: flex;
        flex: none;
        justify-content: flex-end;
        padding: var(--ep-space-100) var(--ep-space-100) 0;
      }

      .drawer-nav {
        flex: 1;
      }

      @media (forced-colors: active) {
        .sidebar {
          border-inline-end-color: CanvasText;
        }

        .drawer {
          border-inline-end: 1px solid CanvasText;
        }
      }
    `,
  ];

  /** Whether the navigation drawer is open. Only applies below the `lg` breakpoint. */
  declare navOpen: boolean;
  /** Lets content use the whole width, for data-heavy screens such as gradebooks and timetables. */
  declare fullWidth: boolean;
  declare _wide: boolean;

  #slots = new HasSlotController(this, 'top-bar', 'nav');
  #query?: MediaQueryList;
  #closeTimer?: ReturnType<typeof setTimeout>;

  constructor() {
    super();
    this.navOpen = false;
    this.fullWidth = false;
    this._wide = true;
    this.addEventListener('ep-nav-toggle', this.#onToggle);
    this.addEventListener('click', this.#onClick);
  }

  connectedCallback() {
    super.connectedCallback();
    const lg = getComputedStyle(this).getPropertyValue('--ep-breakpoint-lg').trim() || FALLBACK_LG;
    this.#query = matchMedia(`(min-width: ${lg})`);
    this.#query.addEventListener('change', this.#onQuery);
    this._wide = this.#query.matches;
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#query?.removeEventListener('change', this.#onQuery);
    clearTimeout(this.#closeTimer);
    modalClosed(this);
  }

  #onQuery = () => {
    this._wide = this.#query!.matches;
  };

  #onToggle = () => {
    this.navOpen = !this.navOpen;
  };

  /** Following a link in the drawer closes it, so the new page isn't hidden behind it. */
  #onClick = (event: Event) => {
    if (this._wide || !this.navOpen) return;
    if (event.composedPath().some((node) => (node as Element).localName === 'ep-side-nav-item')) this.navOpen = false;
  };

  get #drawer(): HTMLDialogElement | null {
    return this.renderRoot.querySelector('.drawer');
  }

  willUpdate(changed: Map<string, unknown>) {
    if (changed.has('_wide') && this._wide) this.navOpen = false;
    this.toggleAttribute('data-has-top-bar', this.#slots.test('top-bar'));
  }

  updated(changed: Map<string, unknown>) {
    const hasNav = this.#slots.test('nav');
    const topBar = this.querySelector<EpTopBar>(':scope > [slot="top-bar"]');
    if (topBar && 'menuButton' in topBar) {
      topBar.menuButton = hasNav && !this._wide;
      topBar.menuExpanded = this.navOpen;
    }
    if (changed.has('navOpen') || changed.has('_wide')) this.#syncDrawer();
  }

  #syncDrawer() {
    const drawer = this.#drawer;
    clearTimeout(this.#closeTimer);
    if (!drawer) {
      modalClosed(this);
      return;
    }
    drawer.classList.toggle('fade', motionDuration(this, 'move') === 0);
    if (this.navOpen && !drawer.open) {
      drawer.removeAttribute('data-closing');
      drawer.showModal();
      modalOpened(this);
    } else if (!this.navOpen && drawer.open) {
      drawer.setAttribute('data-closing', '');
      this.#closeTimer = setTimeout(() => {
        drawer.removeAttribute('data-closing');
        drawer.close();
        modalClosed(this);
      }, motionDuration(this, 'normal'));
    }
  }

  /** A button, not an `<a href="#main">`: a fragment link can't reach an id inside shadow DOM. */
  #onSkip() {
    this.renderRoot.querySelector('main')!.focus();
  }

  /** Escape: animate the close instead of letting the dialog vanish. */
  #onCancel(event: Event) {
    event.preventDefault();
    this.navOpen = false;
  }

  /** A click on the dialog itself, not its contents, is a click on the backdrop. */
  #onDrawerClick(event: MouseEvent) {
    if (event.target === event.currentTarget) this.navOpen = false;
  }

  render() {
    const hasNav = this.#slots.test('nav');
    const nav = html`<slot name="nav"></slot>`;
    return html`<button class="skip" type="button" @click=${this.#onSkip}>Skip to content</button>
      <div class="top"><slot name="top-bar"></slot></div>
      <div class="body">
        ${this._wide ? html`<div class="sidebar" ?hidden=${!hasNav}>${nav}</div>` : nothing}
        <main part="main" id="main" tabindex="-1">
          <div part="content" class="content"><slot></slot></div>
        </main>
      </div>
      ${this._wide
        ? nothing
        : html`<dialog
            part="drawer"
            class="drawer"
            aria-label="Navigation"
            @cancel=${this.#onCancel}
            @click=${this.#onDrawerClick}
          >
            <div class="drawer-head">
              <ep-icon-button icon="x" label="Close navigation" @click=${() => (this.navOpen = false)}></ep-icon-button>
            </div>
            <div class="drawer-nav">${nav}</div>
            <slot name="toaster"></slot>
          </dialog>`}`;
  }
}

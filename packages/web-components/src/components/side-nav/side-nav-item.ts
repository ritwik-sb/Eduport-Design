import { LitElement, css, html, nothing } from 'lit';
import { baseStyles, focusRing } from '../../styles/shared.js';
import '../icon/index.js';

/**
 * One destination in `<ep-side-nav>`. It is always a link: navigation goes somewhere, so it never runs an action.
 *
 * @tag ep-side-nav-item
 * @slot - The destination name. Keep it to one or two words.
 * @slot suffix - A count or status at the inline end, such as `<ep-badge>`.
 * @csspart link - The `<a>`.
 */
export class EpSideNavItem extends LitElement {
  static shadowRootOptions = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static properties = {
    href: {},
    icon: { reflect: true },
    current: { type: Boolean, reflect: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
      }

      a {
        position: relative;
        display: flex;
        align-items: center;
        gap: var(--ep-space-150);
        min-height: var(--ep-size-control-md);
        padding: var(--ep-space-100) var(--ep-space-150);
        border-radius: var(--ep-radius-control);
        color: var(--_nav-text, var(--ep-color-text-secondary));
        font: var(--ep-font-label-md);
        text-decoration: none;
        transition: background-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
      }

      a:hover {
        background: var(--_nav-hover, var(--ep-color-interactive-ghost-hover));
        color: var(--_nav-text-active, var(--ep-color-text-primary));
      }

      a:active {
        background: var(--_nav-current, var(--ep-color-interactive-ghost-active));
      }

      a:focus-visible {
        ${focusRing}
        outline-color: var(--_nav-accent, var(--ep-color-border-focus));
        outline-offset: -2px;
      }

      :host([current]) a {
        background: var(--_nav-current, var(--ep-color-surface-sheet));
        box-shadow: var(--_nav-shadow, var(--ep-shadow-raised));
        color: var(--_nav-text-active, var(--ep-color-text-primary));
        font-weight: var(--ep-font-weight-semibold);
      }

      /* A bar at the inline start, so the current page doesn't rely on the tint alone. */
      :host([current]) a::before {
        content: '';
        position: absolute;
        inset-block: var(--ep-space-100);
        inset-inline-start: 0;
        width: 3px;
        border-radius: var(--ep-radius-round);
        background: var(--_nav-accent, var(--ep-color-accent-default));
      }

      :host([current]) a ep-icon {
        color: var(--_nav-accent, inherit);
      }

      ep-icon {
        flex: none;
        font-size: var(--ep-size-icon-md);
      }

      .label {
        flex: 1;
        min-width: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      @media (forced-colors: active) {
        a {
          color: LinkText;
        }

        :host([current]) a {
          outline: 1px solid Highlight;
        }

        :host([current]) a::before {
          background: Highlight;
        }
      }
    `,
  ];

  /** Where the item goes. */
  declare href: string;
  /** Name of a registered icon shown before the label. Use icons on all items or none. */
  declare icon: string;
  /** Marks the page the user is on. Set it on exactly one item. */
  declare current: boolean;

  constructor() {
    super();
    this.href = '';
    this.icon = '';
    this.current = false;
  }

  connectedCallback() {
    super.connectedCallback();
    // On the host, so the item is a direct child of the nav's list in the accessibility tree.
    if (!this.hasAttribute('role')) this.setAttribute('role', 'listitem');
  }

  render() {
    return html`<a part="link" href=${this.href || nothing} aria-current=${this.current ? 'page' : nothing}>
      ${this.icon ? html`<ep-icon name=${this.icon}></ep-icon>` : nothing}
      <span class="label"><slot></slot></span>
      <slot name="suffix"></slot>
    </a>`;
  }
}

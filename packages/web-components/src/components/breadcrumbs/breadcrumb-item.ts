import { LitElement, css, html, nothing } from 'lit';
import { baseStyles, focusRing } from '../../styles/shared.js';
import '../icon/index.js';

/**
 * One level in an `<ep-breadcrumbs>` trail. Give every item but the last an `href`.
 *
 * @tag ep-breadcrumb-item
 * @slot - The page name.
 * @csspart link - The `<a>`, or the `<span>` for the current page.
 * @csspart separator - The chevron before the item.
 */
export class EpBreadcrumbItem extends LitElement {
  static properties = {
    href: {},
    current: { type: Boolean, reflect: true },
    first: { type: Boolean, state: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        min-width: 0;
        font-size: var(--ep-font-size-200);
        line-height: var(--ep-font-line-height-snug);
      }

      .separator {
        flex: none;
        margin: 0 var(--ep-space-50);
        font-size: var(--ep-size-icon-sm);
        color: var(--ep-color-text-secondary);
      }

      .link {
        display: inline-block;
        max-width: 24ch;
        padding: var(--ep-space-50) var(--ep-space-25);
        overflow: hidden;
        border-radius: var(--ep-radius-indicator);
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      a.link {
        color: var(--ep-color-text-link);
        text-decoration: underline;
        text-underline-offset: 2px;
      }

      a.link:hover {
        text-decoration-thickness: 2px;
      }

      a.link:focus-visible {
        ${focusRing}
      }

      span.link {
        color: var(--ep-color-text-primary);
        font-weight: var(--ep-font-weight-medium);
      }

      @media (forced-colors: active) {
        a.link {
          color: LinkText;
        }
      }
    `,
  ];

  /** Where the item links to. Leave it empty on the current page. */
  declare href: string;
  /** Set by `<ep-breadcrumbs>` on the last item. */
  declare current: boolean;
  declare first: boolean;

  constructor() {
    super();
    this.href = '';
    this.current = false;
    this.first = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'listitem');
  }

  render() {
    const separator = this.first
      ? nothing
      : html`<ep-icon part="separator" class="separator" name="chevron-right"></ep-icon>`;
    const link =
      this.href && !this.current
        ? html`<a part="link" class="link" href=${this.href}><slot></slot></a>`
        : html`<span part="link" class="link" aria-current=${this.current ? 'page' : nothing}><slot></slot></span>`;
    return html`${separator}${link}`;
  }
}

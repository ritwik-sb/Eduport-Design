import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';

/**
 * A titled section of `<ep-side-nav-item>` links inside `<ep-side-nav>`, for apps with more than about seven
 * destinations. Screen readers announce it as a group with its heading as the name.
 *
 * @tag ep-side-nav-group
 * @slot - `<ep-side-nav-item>` elements.
 * @csspart heading - The group heading.
 */
export class EpSideNavGroup extends LitElement {
  static properties = {
    heading: {},
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
      }

      .heading {
        padding: var(--ep-space-100) var(--ep-space-150) var(--ep-space-50);
        color: var(--ep-color-text-secondary);
        font: var(--ep-font-label-sm);
        letter-spacing: 0.02em;
        text-transform: uppercase;
      }

      .list {
        display: flex;
        flex-direction: column;
        gap: var(--ep-space-25);
      }
    `,
  ];

  /** The group title, for example "Teaching" or "Admin". */
  declare heading: string;

  constructor() {
    super();
    this.heading = '';
  }

  connectedCallback() {
    super.connectedCallback();
    // On the host, so the item is a direct child of the nav's list in the accessibility tree.
    if (!this.hasAttribute('role')) this.setAttribute('role', 'listitem');
  }

  render() {
    return html`<div role="group" aria-labelledby="heading">
      <div part="heading" class="heading" id="heading">${this.heading}</div>
      <div class="list" role="list"><slot></slot></div>
    </div>`;
  }
}

import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import { HasSlotController } from '../../utils/slots.js';

/**
 * The app's main navigation: a list of `<ep-side-nav-item>` links, optionally in `<ep-side-nav-group>` sections.
 * Mark the page the user is on with `current` on its item.
 *
 * Inside `<ep-app-shell>` it sits beside the content from the `lg` breakpoint (1024px) and moves into a drawer,
 * opened from the top bar, on narrower screens.
 *
 * @tag ep-side-nav
 * @slot - `<ep-side-nav-item>` and `<ep-side-nav-group>` elements.
 * @slot footer - Items pinned to the bottom, such as Settings and Help.
 * @csspart base - The `<nav>`.
 */
export class EpSideNav extends LitElement {
  static properties = {
    label: {},
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        height: 100%;
      }

      nav {
        display: flex;
        flex-direction: column;
        gap: var(--ep-space-300);
        min-height: 100%;
        padding: var(--ep-space-200) var(--ep-space-150);
      }

      .list,
      .footer {
        display: flex;
        flex-direction: column;
        gap: var(--ep-space-25);
      }

      /* Groups need more room around them than items do. */
      .list ::slotted(ep-side-nav-group:not(:first-child)) {
        margin-block-start: var(--ep-space-200);
      }

      .footer {
        margin-block-start: auto;
        padding-block-start: var(--ep-space-200);
        border-block-start: var(--ep-border-width-thin) solid var(--ep-color-border-default);
      }

      .footer[hidden] {
        display: none;
      }
    `,
  ];

  /** Accessible name of the navigation landmark. Change it only when a page has more than one. */
  declare label: string;

  #slots = new HasSlotController(this, 'footer');

  constructor() {
    super();
    this.label = 'Main';
  }

  render() {
    return html`<nav part="base" aria-label=${this.label}>
      <div class="list" role="list"><slot></slot></div>
      <div class="footer" role="list" ?hidden=${!this.#slots.test('footer')}><slot name="footer"></slot></div>
    </nav>`;
  }
}

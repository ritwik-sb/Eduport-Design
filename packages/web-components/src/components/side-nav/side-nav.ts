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
 * @slot header - A logo at the top, mostly with `appearance="inverse"`.
 * @slot footer - Items pinned to the bottom, such as Settings and Help.
 * @csspart base - The `<nav>`.
 */
export class EpSideNav extends LitElement {
  static properties = {
    label: {},
    appearance: { reflect: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        height: 100%;
      }

      /* The dark rail. Items and groups read these private properties, which inherit through the shadow boundary. */
      :host([appearance='inverse']) {
        --_nav-text: var(--ep-color-rail-text-secondary);
        --_nav-text-active: var(--ep-color-rail-text);
        --_nav-hover: var(--ep-color-rail-hover);
        --_nav-current: var(--ep-color-rail-current);
        --_nav-accent: var(--ep-color-rail-accent);
        --_nav-border: var(--ep-color-rail-border);
        --_nav-shadow: none;
        --_nav-glow: 0 0 12px 1px color-mix(in srgb, var(--ep-color-rail-accent) 60%, transparent);
        background: var(--ep-color-rail-background);
        color: var(--ep-color-rail-text);
      }

      .header {
        padding: var(--ep-space-100) var(--ep-space-150) 0;
      }

      .header[hidden] {
        display: none;
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
        border-block-start: var(--ep-border-width-thin) solid var(--_nav-border, var(--ep-color-border-default));
      }

      .footer[hidden] {
        display: none;
      }
    `,
  ];

  /** Accessible name of the navigation landmark. Change it only when a page has more than one. */
  declare label: string;
  /** `inverse` is a dark rail in both themes, where the brand orange marks the current item. Default is `default`. */
  declare appearance: 'default' | 'inverse';

  #slots = new HasSlotController(this, 'header', 'footer');

  constructor() {
    super();
    this.label = 'Main';
    this.appearance = 'default';
  }

  render() {
    return html`<nav part="base" aria-label=${this.label}>
      <div class="header" ?hidden=${!this.#slots.test('header')}><slot name="header"></slot></div>
      <div class="list" role="list"><slot></slot></div>
      <div class="footer" role="list" ?hidden=${!this.#slots.test('footer')}><slot name="footer"></slot></div>
    </nav>`;
  }
}

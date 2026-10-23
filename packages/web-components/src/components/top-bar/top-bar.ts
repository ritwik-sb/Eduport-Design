import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import { HasSlotController } from '../../utils/slots.js';
import { setTriggerAria } from '../../utils/anchor.js';
import '../icon-button/index.js';

/**
 * The bar across the top of every screen: the product mark, global tools such as search, and the account menu.
 * Height follows `--ep-layout-header-height` (56px on phones, 64px from `md`).
 *
 * Inside `<ep-app-shell>` it shows a menu button on narrow screens that opens the navigation drawer. The shell sets
 * `menu-button` and `menu-expanded` on its own; outside a shell, set them yourself and listen for `ep-nav-toggle`.
 *
 * @tag ep-top-bar
 * @slot brand - The product logo and name, usually a link to the home page.
 * @slot - Global tools in the middle, such as a search field. Hidden on phones unless you style it otherwise.
 * @slot actions - Icon buttons and the account menu at the inline end.
 * @csspart base - The `<header>`.
 * @fires ep-nav-toggle - When the menu button is pressed.
 */
export class EpTopBar extends LitElement {
  static properties = {
    menuButton: { type: Boolean, reflect: true, attribute: 'menu-button' },
    menuExpanded: { type: Boolean, reflect: true, attribute: 'menu-expanded' },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        container-type: inline-size;
      }

      header {
        display: flex;
        align-items: center;
        gap: var(--ep-space-150);
        height: var(--ep-layout-header-height);
        padding-inline: max(var(--ep-layout-margin), env(safe-area-inset-left))
          max(var(--ep-layout-margin), env(safe-area-inset-right));
        border-block-end: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        background: var(--ep-color-surface-default);
        color: var(--ep-color-text-primary);
      }

      .menu {
        margin-inline-start: calc(-1 * var(--ep-space-100));
      }

      .brand {
        display: flex;
        flex: none;
        align-items: center;
        gap: var(--ep-space-100);
        min-width: 0;
        font: var(--ep-font-heading-xs);
      }

      .middle {
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
        min-width: 0;
      }

      .actions {
        display: flex;
        flex: none;
        align-items: center;
        gap: var(--ep-space-100);
        margin-inline-start: auto;
      }

      .middle[hidden],
      .actions[hidden] {
        display: none;
      }

      /* Phones: the middle slot gives way to the brand and actions. Put search behind an icon button there. */
      @container (max-width: 599px) {
        .middle {
          display: none;
        }
      }

      @media (forced-colors: active) {
        header {
          border-block-end-color: CanvasText;
        }
      }
    `,
  ];

  /** Shows the menu button that opens the navigation drawer. Set by `<ep-app-shell>` on narrow screens. */
  declare menuButton: boolean;
  /** Whether the navigation the menu button controls is open. Set by `<ep-app-shell>`. */
  declare menuExpanded: boolean;

  #slots = new HasSlotController(this, '[default]', 'actions');

  constructor() {
    super();
    this.menuButton = false;
    this.menuExpanded = false;
  }

  async updated() {
    const menu = this.renderRoot.querySelector('.menu') as LitElement | null;
    if (!menu) return;
    await menu.updateComplete;
    setTriggerAria(menu, 'aria-expanded', String(this.menuExpanded));
  }

  #onMenu() {
    this.dispatchEvent(new CustomEvent('ep-nav-toggle', { bubbles: true, composed: true }));
  }

  render() {
    return html`<header part="base">
      ${this.menuButton
        ? html`<ep-icon-button
            class="menu"
            icon="menu-2"
            label="Open navigation"
            variant="ghost"
            @click=${this.#onMenu}
          ></ep-icon-button>`
        : null}
      <div class="brand"><slot name="brand"></slot></div>
      <div class="middle" ?hidden=${!this.#slots.test('[default]')}><slot></slot></div>
      <div class="actions" ?hidden=${!this.#slots.test('actions')}><slot name="actions"></slot></div>
    </header>`;
  }
}

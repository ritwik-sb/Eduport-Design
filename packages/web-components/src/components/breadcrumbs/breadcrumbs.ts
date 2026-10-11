import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import type { EpBreadcrumbItem } from './breadcrumb-item.js';

/**
 * Shows where the current page sits in the app's hierarchy, with a link to each level above it.
 * The last item is the current page: it is marked `aria-current="page"` and isn't a link.
 *
 * ```html
 * <ep-breadcrumbs>
 *   <ep-breadcrumb-item href="/">Home</ep-breadcrumb-item>
 *   <ep-breadcrumb-item href="/courses">Courses</ep-breadcrumb-item>
 *   <ep-breadcrumb-item>Physics</ep-breadcrumb-item>
 * </ep-breadcrumbs>
 * ```
 *
 * @tag ep-breadcrumbs
 * @slot - `<ep-breadcrumb-item>` elements.
 * @csspart base - The `<nav>` landmark.
 * @csspart list - The list of items.
 */
export class EpBreadcrumbs extends LitElement {
  static properties = {
    label: {},
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
      }

      .list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0;
        padding: 0;
        list-style: none;
      }
    `,
  ];

  /** Accessible name for the navigation landmark. */
  declare label: string;

  constructor() {
    super();
    this.label = 'Breadcrumb';
  }

  #sync() {
    const items = [...this.querySelectorAll<EpBreadcrumbItem>(':scope > ep-breadcrumb-item')];
    items.forEach((item, index) => {
      item.current = index === items.length - 1;
      item.first = index === 0;
    });
  }

  render() {
    return html`<nav part="base" aria-label=${this.label}>
      <div part="list" class="list" role="list"><slot @slotchange=${this.#sync}></slot></div>
    </nav>`;
  }
}

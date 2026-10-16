import { LitElement, css, html, nothing } from 'lit';
import { baseStyles, focusRing } from '../../styles/shared.js';

// Arrow icons for sortable headers, drawn with CSS masks so they take the text color.
const svg = (paths: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>${paths}</svg>`,
  )}")`;
const sortIcons = {
  none: svg("<path d='M8 9l4-4 4 4'/><path d='M16 15l-4 4-4-4'/>"),
  ascending: svg("<path d='M12 5v14'/><path d='M18 11l-6-6-6 6'/>"),
  descending: svg("<path d='M12 5v14'/><path d='M18 13l-6 6-6-6'/>"),
};

/**
 * Styles for the light-DOM `<table>`. Shadow DOM can't style table cells, so these are adopted by the document
 * (or the shadow root the table lives in). `:where()` keeps specificity at zero, so app styles always win.
 */
const tableSheet = `
:where(ep-table) > table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  color: var(--ep-color-text-primary);
  font-size: var(--ep-font-size-200);
  line-height: var(--ep-font-line-height-snug);
  font-variant-numeric: tabular-nums;
}
:where(ep-table > table) caption {
  padding: var(--ep-space-150) var(--ep-space-200);
  font-size: var(--ep-font-size-300);
  font-weight: var(--ep-font-weight-semibold);
  text-align: start;
}
:where(ep-table > table) :is(th, td) {
  height: var(--_ep-row-height, var(--ep-size-control-lg));
  padding: var(--ep-space-100) var(--ep-space-200);
  border-bottom: var(--ep-border-width-thin) solid var(--ep-color-border-default);
  text-align: start;
  vertical-align: middle;
}
:where(ep-table[size='sm'] > table) :is(th, td) {
  --_ep-row-height: var(--ep-size-control-md);
  padding: var(--ep-space-50) var(--ep-space-150);
}
:where(ep-table > table) thead th {
  background: var(--ep-color-surface-sunken);
  border-bottom-color: var(--ep-color-border-strong);
  color: var(--ep-color-text-secondary);
  font-weight: var(--ep-font-weight-semibold);
  white-space: nowrap;
}
:where(ep-table > table) tbody th {
  font-weight: var(--ep-font-weight-medium);
}
:where(ep-table[sticky-header] > table) thead th {
  position: sticky;
  top: 0;
  z-index: 1;
}
:where(ep-table[striped] > table) tbody tr:nth-child(even) > * {
  background: var(--ep-color-background-subtle);
}
:where(ep-table > table) tbody tr[aria-selected='true'] > * {
  background: var(--ep-color-accent-subtle);
}
:where(ep-table > table) tbody tr:last-child > * {
  border-bottom: 0;
}
:where(ep-table > table) th > button {
  display: inline-flex;
  align-items: center;
  gap: var(--ep-space-50);
  margin: calc(-1 * var(--ep-space-50)) calc(-1 * var(--ep-space-100));
  padding: var(--ep-space-50) var(--ep-space-100);
  border: 0;
  border-radius: var(--ep-radius-control);
  background: none;
  color: inherit;
  font: inherit;
  cursor: pointer;
}
:where(ep-table > table) th > button:hover {
  background: var(--ep-color-interactive-ghost-hover);
  color: var(--ep-color-text-primary);
}
:where(ep-table > table) th > button:focus-visible {
  ${focusRing.cssText}
}
:where(ep-table > table) th > button::after {
  content: '';
  width: var(--ep-size-icon-sm);
  height: var(--ep-size-icon-sm);
  background: currentColor;
  -webkit-mask: ${sortIcons.none} center / contain no-repeat;
  mask: ${sortIcons.none} center / contain no-repeat;
  opacity: 0.6;
}
:where(ep-table > table) th[aria-sort='ascending'] > button::after {
  -webkit-mask-image: ${sortIcons.ascending};
  mask-image: ${sortIcons.ascending};
  opacity: 1;
}
:where(ep-table > table) th[aria-sort='descending'] > button::after {
  -webkit-mask-image: ${sortIcons.descending};
  mask-image: ${sortIcons.descending};
  opacity: 1;
}
:where(ep-table > table) th:is([aria-sort='ascending'], [aria-sort='descending']) {
  color: var(--ep-color-text-primary);
}
@media (forced-colors: active) {
  :where(ep-table > table) :is(th, td) {
    border-bottom-color: CanvasText;
  }
  :where(ep-table > table) tbody tr[aria-selected='true'] > * {
    forced-color-adjust: none;
    background: Highlight;
    color: HighlightText;
  }
  :where(ep-table > table) th > button::after {
    forced-color-adjust: none;
    background: ButtonText;
  }
}
`;

let sheet: CSSStyleSheet | undefined;
const adopted = new WeakSet<Document | ShadowRoot>();

function adoptTableStyles(root: Document | ShadowRoot) {
  if (adopted.has(root)) return;
  sheet ??= new CSSStyleSheet();
  if (!sheet.cssRules.length) sheet.replaceSync(tableSheet);
  root.adoptedStyleSheets = [...root.adoptedStyleSheets, sheet];
  adopted.add(root);
}

/**
 * Styles a native `<table>` and makes it scroll sideways on narrow screens. Write the table yourself, with
 * `<caption>`, `<thead>`, `<th scope="col">` and `<tbody>`, so it keeps full table semantics and any cell content.
 *
 * Sorting: put a `<button>` inside a `<th>` and set `aria-sort="ascending"` or `"descending"` on the sorted
 * column's `<th>`; the arrow follows. Selection: set `aria-selected="true"` on selected `<tr>`s.
 *
 * ```html
 * <ep-table>
 *   <table>
 *     <caption>Students</caption>
 *     <thead><tr><th scope="col" aria-sort="ascending"><button>Name</button></th><th scope="col">Grade</th></tr></thead>
 *     <tbody><tr><td>Ananya</td><td>11</td></tr></tbody>
 *   </table>
 * </ep-table>
 * ```
 *
 * @tag ep-table
 * @slot - One `<table>`.
 * @csspart scroller - The box that scrolls when the table is wider (or, with `sticky-header`, taller) than it.
 */
export class EpTable extends LitElement {
  static properties = {
    label: {},
    size: { reflect: true },
    striped: { type: Boolean, reflect: true },
    stickyHeader: { type: Boolean, reflect: true, attribute: 'sticky-header' },
    _scrollable: { state: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        border: var(--ep-border-width-thin) solid var(--ep-color-border-default);
        border-radius: var(--ep-radius-container);
        background: var(--ep-color-surface-default);
        overflow: hidden;
      }

      .scroller {
        max-height: inherit;
        overflow: auto;
        border-radius: inherit;
        outline: none;
      }

      .scroller:focus-visible {
        ${focusRing}
        outline-offset: -2px;
      }

      @media (forced-colors: active) {
        :host {
          border-color: CanvasText;
        }
      }
    `,
  ];

  /** Accessible name for the scroll area. Defaults to the table's caption. */
  declare label: string;
  /** `sm` for dense data, `md` for most tables. */
  declare size: 'sm' | 'md';
  /** Shades every other row. */
  declare striped: boolean;
  /** Keeps the header row visible while the body scrolls. Give the `<ep-table>` a `max-height`. */
  declare stickyHeader: boolean;
  declare _scrollable: boolean;

  #resizeObserver?: ResizeObserver;

  constructor() {
    super();
    this.label = '';
    this.size = 'md';
    this.striped = false;
    this.stickyHeader = false;
    this._scrollable = false;
  }

  connectedCallback() {
    super.connectedCallback();
    const root = this.getRootNode();
    if (root instanceof Document || root instanceof ShadowRoot) adoptTableStyles(root);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#resizeObserver?.disconnect();
  }

  firstUpdated() {
    const scroller = this.renderRoot.querySelector<HTMLElement>('.scroller')!;
    this.#resizeObserver = new ResizeObserver(() => {
      this._scrollable = scroller.scrollWidth > scroller.clientWidth || scroller.scrollHeight > scroller.clientHeight;
    });
    this.#resizeObserver.observe(scroller);
    const table = this.querySelector('table');
    if (table) this.#resizeObserver.observe(table);
  }

  render() {
    const label = this.label || this.querySelector('caption')?.textContent?.trim() || 'Table';
    // A scrolling region must be keyboard-focusable so keyboard users can scroll it (WCAG 2.1.1). One template for
    // both states, so the observed scroller is never replaced.
    const scrollable = this._scrollable;
    return html`<div
      part="scroller"
      class="scroller"
      role=${scrollable ? 'region' : nothing}
      aria-label=${scrollable ? label : nothing}
      tabindex=${scrollable ? 0 : nothing}
    >
      <slot></slot>
    </div>`;
  }
}

import { LitElement, css, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import { baseStyles, focusRing } from '../../styles/shared.js';
import '../icon/index.js';

type PageEntry = number | 'gap';

/** Pages to show: always the first and last, the current page and one on each side, with gaps between. */
export function pageRange(page: number, total: number): PageEntry[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const start = Math.max(2, Math.min(page - 1, total - 4));
  const end = Math.min(total - 1, Math.max(page + 1, 5));
  const middle = Array.from({ length: end - start + 1 }, (_, i) => start + i);
  return [1, ...(start > 2 ? ['gap' as const] : []), ...middle, ...(end < total - 1 ? ['gap' as const] : []), total];
}

/**
 * Moves between pages of a long list or table. It doesn't load anything itself: listen for `change`
 * and load the page in `page`. On narrow containers the page numbers collapse to "Page 3 of 12".
 *
 * @tag ep-pagination
 * @csspart base - The `<nav>` landmark.
 * @fires change - When the user picks another page. Read `page` for the new page number.
 */
export class EpPagination extends LitElement {
  static properties = {
    page: { type: Number, reflect: true },
    totalPages: { type: Number, attribute: 'total-pages' },
    label: {},
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
        container-type: inline-size;
      }

      .list {
        display: flex;
        align-items: center;
        gap: var(--ep-space-50);
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .button {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: var(--ep-space-50);
        min-width: var(--ep-size-control-md);
        height: var(--ep-size-control-md);
        padding: 0 var(--ep-space-100);
        border: var(--ep-border-width-thin) solid transparent;
        border-radius: var(--ep-radius-control);
        background: var(--ep-color-interactive-ghost-default);
        color: var(--ep-color-text-primary);
        font: inherit;
        font-size: var(--ep-font-size-200);
        font-variant-numeric: tabular-nums;
        cursor: pointer;
        transition: background-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
      }

      .button:hover {
        background: var(--ep-color-interactive-ghost-hover);
      }

      .button:active {
        background: var(--ep-color-interactive-ghost-active);
      }

      .button:focus-visible {
        ${focusRing}
      }

      .button[aria-current='page'] {
        background: var(--ep-color-interactive-primary-default);
        color: var(--ep-color-text-on-primary);
        font-weight: var(--ep-font-weight-semibold);
        cursor: default;
      }

      .button:disabled {
        background: transparent;
        color: var(--ep-color-text-disabled);
        cursor: not-allowed;
      }

      .gap,
      .summary {
        color: var(--ep-color-text-secondary);
        font-size: var(--ep-font-size-200);
        font-variant-numeric: tabular-nums;
      }

      .gap {
        min-width: var(--ep-size-control-sm);
        text-align: center;
      }

      .summary {
        display: none;
        padding: 0 var(--ep-space-100);
        white-space: nowrap;
      }

      ep-icon {
        font-size: var(--ep-size-icon-md);
      }

      @container (max-width: 400px) {
        .number,
        .gap {
          display: none;
        }

        .summary {
          display: block;
        }

        .step-label {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
        }
      }

      @media (forced-colors: active) {
        .button[aria-current='page'] {
          border-color: Highlight;
          background: Highlight;
          color: HighlightText;
        }

        .button:disabled {
          color: GrayText;
        }
      }
    `,
  ];

  /** The current page, starting at 1. */
  declare page: number;
  /** How many pages there are. */
  declare totalPages: number;
  /** Accessible name for the navigation landmark. Name it after what it pages through when a view has more than one. */
  declare label: string;

  constructor() {
    super();
    this.page = 1;
    this.totalPages = 1;
    this.label = 'Pagination';
  }

  #go(page: number) {
    const total = Math.max(1, this.totalPages);
    const next = Math.min(Math.max(1, page), total);
    if (next === this.page) return;
    this.page = next;
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  render() {
    const total = Math.max(1, this.totalPages);
    const page = Math.min(Math.max(1, this.page), total);
    return html`<nav part="base" aria-label=${this.label}>
      <ul class="list">
        <li>
          <button class="button" type="button" ?disabled=${page <= 1} @click=${() => this.#go(page - 1)}>
            <ep-icon name="chevron-left"></ep-icon><span class="step-label">Previous</span>
          </button>
        </li>
        ${repeat(
          pageRange(page, total),
          // Keyed by page number, so focus stays on the page the user picked when the range shifts.
          (entry, index) => (entry === 'gap' ? `gap-${index}` : entry),
          (entry) =>
            entry === 'gap'
              ? html`<li class="gap" aria-hidden="true">…</li>`
              : html`<li class="number">
                  <button
                    class="button"
                    type="button"
                    aria-label="Page ${entry}"
                    aria-current=${entry === page ? 'page' : 'false'}
                    @click=${() => this.#go(entry)}
                  >
                    ${entry}
                  </button>
                </li>`,
        )}
        <li class="summary">Page ${page} of ${total}</li>
        <li>
          <button class="button" type="button" ?disabled=${page >= total} @click=${() => this.#go(page + 1)}>
            <span class="step-label">Next</span><ep-icon name="chevron-right"></ep-icon>
          </button>
        </li>
      </ul>
    </nav>`;
  }
}

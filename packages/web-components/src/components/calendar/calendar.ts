import { LitElement, css, html, nothing } from 'lit';
import { baseStyles, focusRing } from '../../styles/shared.js';
import { addDays, addMonths, firstDayOfWeek, parseIso, resolveLocale, sameDay, toIso, today } from './dates.js';
import '../icon-button/index.js';

/**
 * A month grid for picking one date. Usually you want `<ep-date-picker>`, which puts this in a popup next to a
 * text field; use the calendar alone when the grid should always show, like a schedule sidebar.
 *
 * Keyboard: arrows move by day and week, Home and End go to the start and end of the week, Page Up and
 * Page Down change the month (with Shift, the year), and Enter or Space picks the focused date.
 *
 * @tag ep-calendar
 * @csspart header - The month heading and buttons.
 * @csspart grid - The table of days.
 * @fires change - When the user picks a date. Read `value`.
 */
export class EpCalendar extends LitElement {
  static properties = {
    value: { reflect: true },
    min: {},
    max: {},
    locale: {},
    isDateDisabled: { attribute: false },
    _focused: { state: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-block;
        color: var(--ep-color-text-primary);
        font-size: var(--ep-font-size-200);
      }

      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--ep-space-100);
        margin-bottom: var(--ep-space-100);
      }

      .month {
        margin: 0;
        font-size: var(--ep-font-size-200);
        font-weight: var(--ep-font-weight-semibold);
      }

      table {
        border-collapse: separate;
        border-spacing: 2px;
        margin: -2px;
      }

      th {
        width: var(--ep-size-control-md);
        height: var(--ep-size-control-sm);
        color: var(--ep-color-text-secondary);
        font-size: var(--ep-font-size-100);
        font-weight: var(--ep-font-weight-medium);
      }

      td {
        padding: 0;
        text-align: center;
        vertical-align: middle;
      }

      .day {
        width: var(--ep-size-control-md);
        height: var(--ep-size-control-md);
        border: var(--ep-border-width-thin) solid transparent;
        border-radius: var(--ep-radius-control);
        font-variant-numeric: tabular-nums;
        cursor: pointer;
        user-select: none;
        outline: none;
      }

      .day:hover {
        background: var(--ep-color-interactive-ghost-hover);
      }

      .day[aria-current='date'] {
        border-color: var(--ep-color-border-strong);
        font-weight: var(--ep-font-weight-semibold);
      }

      .day[aria-selected='true'] {
        border-color: transparent;
        background: var(--ep-color-interactive-primary-default);
        color: var(--ep-color-text-on-primary);
        font-weight: var(--ep-font-weight-semibold);
      }

      .day[aria-disabled='true'] {
        background: none;
        color: var(--ep-color-text-disabled);
        text-decoration: line-through;
        cursor: not-allowed;
      }

      .day:focus-visible {
        ${focusRing}
        outline-offset: 0;
      }

      @media (forced-colors: active) {
        .day[aria-current='date'] {
          border-color: CanvasText;
        }

        .day[aria-selected='true'] {
          forced-color-adjust: none;
          background: Highlight;
          color: HighlightText;
        }

        .day[aria-disabled='true'] {
          color: GrayText;
        }
      }
    `,
  ];

  /** The picked date, as `YYYY-MM-DD`. */
  declare value: string;
  /** Earliest date that can be picked, as `YYYY-MM-DD`. */
  declare min: string;
  /** Latest date that can be picked, as `YYYY-MM-DD`. */
  declare max: string;
  /** BCP 47 locale for month and weekday names and the first day of the week. Defaults to the page's `lang`. */
  declare locale: string;
  /** Return `true` for dates that can't be picked, like holidays. Property only. */
  declare isDateDisabled: ((date: Date) => boolean) | undefined;
  declare _focused: Date;

  constructor() {
    super();
    this.value = '';
    this.min = '';
    this.max = '';
    this.locale = '';
    this.isDateDisabled = undefined;
    this._focused = today();
  }

  /** Moves focus to the selected date, or today. */
  focus(options?: FocusOptions) {
    this.renderRoot.querySelector<HTMLElement>('.day[tabindex="0"]')?.focus(options);
  }

  willUpdate(changed: Map<string, unknown>) {
    // Show the month of the selected date whenever the value changes from outside.
    if (changed.has('value')) {
      const selected = parseIso(this.value);
      if (selected) this._focused = selected;
    }
  }

  #disabled(date: Date): boolean {
    const iso = toIso(date);
    if (this.min && parseIso(this.min) && iso < this.min) return true;
    if (this.max && parseIso(this.max) && iso > this.max) return true;
    return this.isDateDisabled?.(date) ?? false;
  }

  async #moveFocus(date: Date) {
    this._focused = date;
    await this.updateComplete;
    this.focus();
  }

  #pick(date: Date) {
    if (this.#disabled(date)) return;
    this._focused = date;
    const iso = toIso(date);
    if (iso === this.value) return;
    this.value = iso;
    this.dispatchEvent(new Event('change', { bubbles: true, composed: true }));
  }

  #onKeyDown(event: KeyboardEvent) {
    const date = this._focused;
    const first = firstDayOfWeek(resolveLocale(this, this.locale));
    const column = (date.getDay() - first + 7) % 7;
    const moves: Record<string, () => Date> = {
      ArrowLeft: () => addDays(date, this.#rtl ? 1 : -1),
      ArrowRight: () => addDays(date, this.#rtl ? -1 : 1),
      ArrowUp: () => addDays(date, -7),
      ArrowDown: () => addDays(date, 7),
      Home: () => addDays(date, -column),
      End: () => addDays(date, 6 - column),
      PageUp: () => addMonths(date, event.shiftKey ? -12 : -1),
      PageDown: () => addMonths(date, event.shiftKey ? 12 : 1),
    };
    if (moves[event.key]) {
      event.preventDefault();
      this.#moveFocus(moves[event.key]());
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.#pick(date);
    }
  }

  get #rtl() {
    return getComputedStyle(this).direction === 'rtl';
  }

  render() {
    const locale = resolveLocale(this, this.locale);
    const focused = this._focused;
    const selected = parseIso(this.value);
    const now = today();
    const first = firstDayOfWeek(locale);
    const monthStart = new Date(focused.getFullYear(), focused.getMonth(), 1, 12);
    const lead = (monthStart.getDay() - first + 7) % 7;
    const daysInMonth = new Date(focused.getFullYear(), focused.getMonth() + 1, 0).getDate();
    const cells: Array<Date | null> = [
      ...Array.from({ length: lead }, () => null),
      ...Array.from({ length: daysInMonth }, (_, i) => addDays(monthStart, i)),
    ];
    while (cells.length % 7) cells.push(null);
    const weeks = Array.from({ length: cells.length / 7 }, (_, i) => cells.slice(i * 7, i * 7 + 7));
    const weekdays = Array.from({ length: 7 }, (_, i) => addDays(monthStart, i - lead));
    const monthLabel = new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(focused);
    const fullDate = new Intl.DateTimeFormat(locale, {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const prev = addMonths(focused, -1);
    const next = addMonths(focused, 1);

    return html`<div part="header" class="header">
        <ep-icon-button
          icon="chevron-left"
          label="Previous month"
          size="sm"
          @click=${() => (this._focused = prev)}
        ></ep-icon-button>
        <p class="month" id="month" aria-live="polite">${monthLabel}</p>
        <ep-icon-button
          icon="chevron-right"
          label="Next month"
          size="sm"
          @click=${() => (this._focused = next)}
        ></ep-icon-button>
      </div>
      <table part="grid" role="grid" aria-labelledby="month" @keydown=${this.#onKeyDown}>
        <thead>
          <tr>
            ${weekdays.map(
              (day) =>
                html`<th scope="col" abbr=${new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(day)}>
                  ${new Intl.DateTimeFormat(locale, { weekday: 'narrow' }).format(day)}
                </th>`,
            )}
          </tr>
        </thead>
        <tbody>
          ${weeks.map(
            (week) =>
              html`<tr>
                ${week.map((date) =>
                  date
                    ? html`<td
                        class="day"
                        tabindex=${sameDay(date, focused) ? 0 : -1}
                        aria-label=${fullDate.format(date)}
                        aria-selected=${sameDay(date, selected) ? 'true' : 'false'}
                        aria-current=${sameDay(date, now) ? 'date' : nothing}
                        aria-disabled=${this.#disabled(date) ? 'true' : nothing}
                        @click=${() => this.#pick(date)}
                      >
                        ${date.getDate()}
                      </td>`
                    : html`<td></td>`,
                )}
              </tr>`,
          )}
        </tbody>
      </table>`;
  }
}

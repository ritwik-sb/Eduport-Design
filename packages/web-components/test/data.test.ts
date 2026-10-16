import { describe, expect, it, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import type { EpCalendar } from '../src/components/calendar/index.js';
import { fieldOrder, parseTyped, toIso } from '../src/components/calendar/dates.js';
import type { EpDatePicker } from '../src/components/date-picker/index.js';
import type { EpTable } from '../src/components/table/index.js';
import { expectNoA11yViolations, fixture, settle, shadow } from './helpers.js';

const focusedCell = (calendar: Element) => calendar.shadowRoot!.activeElement?.getAttribute('aria-label');

describe('date parsing', () => {
  it('reads typed dates in the locale order', () => {
    expect(fieldOrder('en-IN')).toEqual(['day', 'month', 'year']);
    expect(fieldOrder('en-US')).toEqual(['month', 'day', 'year']);
    expect(toIso(parseTyped('22/11/2026', 'en-IN')!)).toBe('2026-11-22');
    expect(toIso(parseTyped('11-22-26', 'en-US')!)).toBe('2026-11-22');
    expect(toIso(parseTyped('2026-11-22', 'en-US')!)).toBe('2026-11-22');
    expect(parseTyped('31/02/2026', 'en-IN')).toBeNull();
    expect(parseTyped('soon', 'en-IN')).toBeNull();
  });
});

describe('ep-calendar', () => {
  it('moves by day, week and month with the keyboard and picks with Enter', async () => {
    const calendar = await fixture<EpCalendar>('<ep-calendar value="2026-10-15" locale="en-GB"></ep-calendar>');
    const onChange = vi.fn();
    calendar.addEventListener('change', onChange);
    calendar.focus();
    expect(focusedCell(calendar)).toBe('Thursday 15 October 2026');
    await userEvent.keyboard('{ArrowRight}{ArrowDown}');
    expect(focusedCell(calendar)).toBe('Friday 23 October 2026');
    await userEvent.keyboard('{PageDown}');
    expect(focusedCell(calendar)).toBe('Monday 23 November 2026');
    await userEvent.keyboard('{Home}');
    expect(focusedCell(calendar)).toBe('Monday 23 November 2026');
    await userEvent.keyboard('{End}{Enter}');
    expect(calendar.value).toBe('2026-11-29');
    expect(onChange).toHaveBeenCalledOnce();
    await expectNoA11yViolations();
  });

  it("doesn't pick dates outside min and max or ones the app disables", async () => {
    const calendar = await fixture<EpCalendar>(
      '<ep-calendar value="2026-10-15" min="2026-10-10" locale="en-GB"></ep-calendar>',
    );
    calendar.isDateDisabled = (date) => date.getDay() === 0;
    await settle();
    const cell = (label: string) => calendar.shadowRoot!.querySelector<HTMLElement>(`[aria-label="${label}"]`)!;
    expect(cell('Friday 9 October 2026').getAttribute('aria-disabled')).toBe('true');
    expect(cell('Sunday 18 October 2026').getAttribute('aria-disabled')).toBe('true');
    cell('Sunday 18 October 2026').click();
    await settle();
    expect(calendar.value).toBe('2026-10-15');
  });
});

describe('ep-date-picker', () => {
  it('accepts a typed date on blur and submits it as YYYY-MM-DD', async () => {
    const form = await fixture<HTMLFormElement>(
      '<form><ep-date-picker label="Exam date" name="exam" locale="en-IN"></ep-date-picker></form>',
    );
    const picker = form.querySelector<EpDatePicker>('ep-date-picker')!;
    const onChange = vi.fn();
    picker.addEventListener('change', onChange);
    await userEvent.type(shadow(picker, 'input'), '5/3/2026');
    await userEvent.tab();
    await settle();
    expect(picker.value).toBe('2026-03-05');
    expect((shadow(picker, 'input') as HTMLInputElement).value).toBe('05/03/2026');
    expect(new FormData(form).get('exam')).toBe('2026-03-05');
    expect(onChange).toHaveBeenCalledOnce();
    await expectNoA11yViolations();
  });

  it('shows an error for text that is not a date, and for dates out of range', async () => {
    const picker = await fixture<EpDatePicker>(
      '<ep-date-picker label="Exam date" locale="en-IN" max="2026-12-31"></ep-date-picker>',
    );
    const input = shadow(picker, 'input') as HTMLInputElement;
    await userEvent.type(input, '31/02/2026');
    await userEvent.tab();
    await settle();
    expect(picker.validity.badInput).toBe(true);
    expect(shadow(picker, '.error').textContent).toContain('DD/MM/YYYY');
    expect(input.getAttribute('aria-invalid')).toBe('true');

    await userEvent.clear(input);
    await userEvent.type(input, '01/01/2027');
    await userEvent.tab();
    await settle();
    expect(picker.validity.rangeOverflow).toBe(true);
    expect(shadow(picker, '.error').textContent).toContain('31/12/2026');
  });

  it('picks from the calendar and returns focus to the calendar button', async () => {
    const picker = await fixture<EpDatePicker>(
      '<ep-date-picker label="Exam date" value="2026-10-15" locale="en-GB"></ep-date-picker>',
    );
    const button = picker.shadowRoot!.querySelector('ep-icon-button')!;
    await userEvent.click(button);
    await settle();
    const calendar = picker.shadowRoot!.querySelector('ep-calendar')!;
    expect(focusedCell(calendar)).toBe('Thursday 15 October 2026');
    await userEvent.keyboard('{ArrowRight}{Enter}');
    await settle();
    expect(picker.value).toBe('2026-10-16');
    expect(picker.shadowRoot!.activeElement).toBe(button);
    expect(shadow(picker, '.panel').matches(':popover-open')).toBe(false);
  });
});

describe('ep-table', () => {
  it('styles the light-DOM table and becomes a focusable region when it scrolls', async () => {
    const table = await fixture<EpTable>(`<ep-table style="width: 200px">
      <table>
        <caption>Students</caption>
        <thead><tr><th scope="col" aria-sort="ascending"><button>Name</button></th><th scope="col">Section</th><th scope="col">Score</th></tr></thead>
        <tbody><tr aria-selected="true"><td>Ananya Menon</td><td>11 A</td><td>92</td></tr></tbody>
      </table>
    </ep-table>`);
    await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    await settle();
    const scroller = shadow(table, '.scroller');
    expect(scroller.getAttribute('role')).toBe('region');
    expect(scroller.getAttribute('aria-label')).toBe('Students');
    expect(scroller.tabIndex).toBe(0);
    const cell = table.querySelector('td')!;
    expect(getComputedStyle(cell).backgroundColor).not.toBe('rgba(0, 0, 0, 0)');
    await expectNoA11yViolations();
  });
});

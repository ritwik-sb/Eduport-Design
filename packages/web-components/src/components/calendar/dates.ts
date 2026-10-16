/** Calendar dates as local Date objects at noon, so daylight-saving shifts never move them to another day. */

export function parseIso(value: string | null | undefined): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value ?? '');
  if (!match) return null;
  const date = new Date(+match[1], +match[2] - 1, +match[3], 12);
  return date.getMonth() === +match[2] - 1 ? date : null;
}

export function toIso(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${String(date.getFullYear()).padStart(4, '0')}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

export function addDays(date: Date, days: number): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + days, 12);
}

/** Moves by whole months, keeping the day where possible (31 January + 1 month is 28 or 29 February). */
export function addMonths(date: Date, months: number): Date {
  const target = new Date(date.getFullYear(), date.getMonth() + months, 1, 12);
  const lastDay = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  target.setDate(Math.min(date.getDate(), lastDay));
  return target;
}

export const sameDay = (a: Date | null, b: Date | null) => !!a && !!b && toIso(a) === toIso(b);

export const today = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
};

/** The locale to format dates in: the element's `lang`, then the page's, then the browser's. */
export function resolveLocale(element: Element, locale: string): string {
  return locale || element.closest('[lang]')?.getAttribute('lang') || navigator.language || 'en-IN';
}

/** First day of the week for a locale, 0 = Sunday … 6 = Saturday. Monday where the browser can't say. */
export function firstDayOfWeek(locale: string): number {
  try {
    const info = new Intl.Locale(locale) as Intl.Locale & {
      getWeekInfo?: () => { firstDay: number };
      weekInfo?: { firstDay: number };
    };
    const firstDay = info.getWeekInfo?.().firstDay ?? info.weekInfo?.firstDay;
    if (firstDay) return firstDay % 7;
  } catch {
    /* unknown locale */
  }
  return 1;
}

type Field = 'day' | 'month' | 'year';

/** The order of day, month and year in the locale's short numeric date, like ['day', 'month', 'year'] for en-IN. */
export function fieldOrder(locale: string): Field[] {
  const parts = new Intl.DateTimeFormat(locale, { day: '2-digit', month: '2-digit', year: 'numeric' }).formatToParts(
    new Date(2026, 10, 22, 12),
  );
  return parts.map((p) => p.type).filter((t): t is Field => t === 'day' || t === 'month' || t === 'year');
}

/** Formats a date the way people type it in the locale, always with numbers: 22/11/2026 for en-IN. */
export function formatNumeric(date: Date, locale: string): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  const values = { day: pad(date.getDate()), month: pad(date.getMonth() + 1), year: String(date.getFullYear()) };
  return fieldOrder(locale)
    .map((field) => values[field])
    .join('/');
}

/** The pattern to show as a hint, like DD/MM/YYYY. */
export function formatPattern(locale: string): string {
  const names = { day: 'DD', month: 'MM', year: 'YYYY' };
  return fieldOrder(locale)
    .map((field) => names[field])
    .join('/');
}

/**
 * Reads what someone typed, in the locale's field order, with any of / - . or spaces between the numbers.
 * Also accepts ISO (2026-11-22). A two-digit year means 20xx. Returns null when it isn't a real date.
 */
export function parseTyped(text: string, locale: string): Date | null {
  const trimmed = text.trim();
  if (!trimmed) return null;
  const iso = parseIso(trimmed);
  if (iso) return iso;
  const numbers = trimmed.split(/[\s/.-]+/).filter(Boolean);
  if (numbers.length !== 3 || numbers.some((n) => !/^\d+$/.test(n))) return null;
  const order = fieldOrder(locale);
  const fields = { day: 0, month: 0, year: 0 };
  order.forEach((field, i) => (fields[field] = Number(numbers[i])));
  const yearText = numbers[order.indexOf('year')];
  if (yearText.length <= 2) fields.year += 2000;
  else if (yearText.length !== 4) return null;
  const date = new Date(fields.year, fields.month - 1, fields.day, 12);
  if (date.getFullYear() !== fields.year || date.getMonth() !== fields.month - 1 || date.getDate() !== fields.day) {
    return null;
  }
  return date;
}

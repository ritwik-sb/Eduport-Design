import { html } from 'lit';
import { onPrimaryContrastException } from './on-primary-exception.js';

export default { title: 'Date picker' };

export const Default = {
  render: () =>
    html`<div style="max-width: 320px; min-height: 440px">
      <ep-date-picker
        label="Exam date"
        helper-text="Weekends aren't available."
        min="2026-01-01"
        max="2026-12-31"
        .isDateDisabled=${(date) => date.getDay() === 0 || date.getDay() === 6}
      ></ep-date-picker>
    </div>`,
};

export const WithValue = {
  render: () =>
    html`<div style="max-width: 320px; min-height: 440px">
      <ep-date-picker label="Date of birth" value="2010-06-15" required></ep-date-picker>
    </div>`,
};

export const Calendar = {
  parameters: onPrimaryContrastException,
  render: () => html`<ep-calendar value="2026-10-15"></ep-calendar>`,
};

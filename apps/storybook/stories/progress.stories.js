import { html } from 'lit';
import { onPrimaryContrastException } from './on-primary-exception.js';

export default { title: 'Progress' };

export const ProgressBar = {
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    variant: { control: 'inline-radio', options: ['default', 'success', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
  },
  args: { value: 64, variant: 'default', size: 'md' },
  render: ({ value, variant, size }) =>
    html`<div class="sb-stack">
      <ep-progress-bar
        label="Course completion"
        value=${value}
        variant=${variant}
        size=${size}
        show-value
        helper-text="16 of 25 lessons"
      ></ep-progress-bar>
    </div>`,
};

export const Indeterminate = {
  render: () =>
    html`<div class="sb-stack">
      <ep-progress-bar label="Preparing your report"></ep-progress-bar>
      <ep-progress-bar label="Syncing" hide-label size="sm"></ep-progress-bar>
    </div>`,
};

export const Spinner = {
  parameters: onPrimaryContrastException,
  render: () =>
    html`<div class="sb-row">
      <ep-spinner size="sm"></ep-spinner>
      <ep-spinner></ep-spinner>
      <ep-spinner size="lg" label="Loading results"></ep-spinner>
      <ep-button loading>Saving…</ep-button>
    </div>`,
};

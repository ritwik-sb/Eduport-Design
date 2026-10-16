import { html } from 'lit';

export default {
  title: 'Popover',
  argTypes: { placement: { control: 'inline-radio', options: ['top', 'bottom', 'left', 'right'] } },
  args: { placement: 'bottom' },
};

export const Default = {
  render: ({ placement }) =>
    html`<div style="min-height: 320px; padding: 120px 160px">
      <ep-popover label="Filter students" placement=${placement}>
        <ep-button slot="trigger" variant="secondary"><ep-icon slot="prefix" name="filter"></ep-icon>Filters</ep-button>
        <div class="sb-stack" style="width: 260px">
          <ep-select label="Grade" placeholder="Any grade">
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
          </ep-select>
          <ep-checkbox>Only show students with pending fees</ep-checkbox>
          <ep-button size="sm" @click=${(e) => e.target.closest('ep-popover').hide()}>Apply</ep-button>
        </div>
      </ep-popover>
    </div>`,
};

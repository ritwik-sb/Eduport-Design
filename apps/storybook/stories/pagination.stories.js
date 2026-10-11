import { html } from 'lit';

export default {
  title: 'Pagination',
  argTypes: {
    page: { control: { type: 'number', min: 1 } },
    totalPages: { control: { type: 'number', min: 1 } },
  },
  args: { page: 4, totalPages: 12 },
};

export const Default = {
  render: ({ page, totalPages }) =>
    html`<ep-pagination label="Students" page=${page} total-pages=${totalPages}></ep-pagination>`,
};

export const FewPages = {
  args: { page: 2, totalPages: 4 },
  render: Default.render,
};

export const NarrowContainer = {
  render: ({ page, totalPages }) =>
    html`<div style="max-width: 320px; border: 1px dashed var(--ep-color-border-default)">
      <ep-pagination label="Students" page=${page} total-pages=${totalPages}></ep-pagination>
    </div>`,
};

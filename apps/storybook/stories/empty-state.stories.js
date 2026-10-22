import { html } from 'lit';
import { onPrimaryContrastException } from './on-primary-exception.js';

export default { title: 'Empty state' };

export const Default = {
  parameters: onPrimaryContrastException,
  render: () =>
    html`<ep-empty-state icon="clipboard-list" heading="No assignments yet">
      Assignments your teachers post will show up here.
      <ep-button slot="actions">Browse courses</ep-button>
    </ep-empty-state>`,
};

export const NoResults = {
  render: () =>
    html`<ep-empty-state icon="search" heading="No students match “Rahul”" size="sm">
      Check the spelling or clear the filters.
      <ep-button slot="actions" variant="secondary">Clear filters</ep-button>
    </ep-empty-state>`,
};

export const InCard = {
  render: () =>
    html`<ep-card style="max-width: 360px">
      <h3 slot="heading">Recent activity</h3>
      <ep-empty-state icon="bell" heading="Nothing new" heading-level="4" size="sm"
        >You're all caught up.</ep-empty-state
      >
    </ep-card>`,
};

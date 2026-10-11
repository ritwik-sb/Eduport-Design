import { html } from 'lit';

export default { title: 'Skeleton' };

export const Card = {
  render: () =>
    html`<div aria-busy="true" aria-label="Loading course" role="group" class="sb-stack" style="max-width: 360px">
      <ep-skeleton variant="rect" style="height: 160px"></ep-skeleton>
      <div class="sb-row" style="flex-wrap: nowrap">
        <ep-skeleton variant="circle"></ep-skeleton>
        <ep-skeleton style="flex: 1"></ep-skeleton>
      </div>
      <ep-skeleton lines="3"></ep-skeleton>
    </div>`,
};

export const Text = {
  render: () =>
    html`<div style="max-width: 480px; font-size: var(--ep-font-size-300)">
      <ep-skeleton lines="4"></ep-skeleton>
    </div>`,
};

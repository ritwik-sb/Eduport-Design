import { html } from 'lit';

export default { title: 'Breadcrumbs' };

export const Default = {
  render: () =>
    html`<ep-breadcrumbs>
      <ep-breadcrumb-item href="#">Home</ep-breadcrumb-item>
      <ep-breadcrumb-item href="#">Courses</ep-breadcrumb-item>
      <ep-breadcrumb-item href="#">Physics for Class 11</ep-breadcrumb-item>
      <ep-breadcrumb-item>Motion in a straight line</ep-breadcrumb-item>
    </ep-breadcrumbs>`,
};

export const LongNames = {
  render: () =>
    html`<div style="max-width: 360px">
      <ep-breadcrumbs>
        <ep-breadcrumb-item href="#">Home</ep-breadcrumb-item>
        <ep-breadcrumb-item href="#">Entrance exam preparation</ep-breadcrumb-item>
        <ep-breadcrumb-item>Chemical bonding and molecular structure</ep-breadcrumb-item>
      </ep-breadcrumbs>
    </div>`,
};

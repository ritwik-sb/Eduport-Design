import { html } from 'lit';

export default { title: 'App shell', parameters: { layout: 'fullscreen' } };

const topBar = html`<ep-top-bar slot="top-bar">
  <a slot="brand" href="#" style="color: inherit; text-decoration: none">Eduport Teach</a>
  <ep-text-field label="Search" hide-label type="search" placeholder="Search courses and students" size="sm" style="width: min(100%, 360px)">
    <ep-icon slot="prefix" name="search"></ep-icon>
  </ep-text-field>
  <ep-icon-button slot="actions" icon="bell" label="Notifications"></ep-icon-button>
  <ep-avatar slot="actions" name="Anjali Menon" size="sm"></ep-avatar>
</ep-top-bar>`;

const sideNav = html`<ep-side-nav slot="nav">
  <ep-side-nav-item href="#" icon="home">Home</ep-side-nav-item>
  <ep-side-nav-item href="#" icon="book" current>Courses</ep-side-nav-item>
  <ep-side-nav-item href="#" icon="calendar">Timetable</ep-side-nav-item>
  <ep-side-nav-group heading="Assessment">
    <ep-side-nav-item href="#" icon="clipboard-list">Assignments <ep-badge slot="suffix" variant="accent">4</ep-badge></ep-side-nav-item>
    <ep-side-nav-item href="#" icon="certificate">Grades</ep-side-nav-item>
  </ep-side-nav-group>
  <ep-side-nav-item slot="footer" href="#" icon="settings">Settings</ep-side-nav-item>
  <ep-side-nav-item slot="footer" href="#" icon="help-circle">Help</ep-side-nav-item>
</ep-side-nav>`;

const pageHeader = html`<ep-page-header heading="Courses">
  <ep-breadcrumbs slot="breadcrumbs">
    <ep-breadcrumb-item href="#">Home</ep-breadcrumb-item>
    <ep-breadcrumb-item>Courses</ep-breadcrumb-item>
  </ep-breadcrumbs>
  Everything you teach this term.
  <ep-button slot="actions" variant="secondary">Import</ep-button>
  <ep-button slot="actions">New course</ep-button>
</ep-page-header>`;

const cards = html`<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: var(--ep-layout-gutter)">
  ${['Physics, Class 11', 'Chemistry, Class 12', 'Mathematics, Class 10'].map(
    (name) => html`<ep-card><h2 slot="heading">${name}</h2>32 students · 4 assignments due</ep-card>`,
  )}
</div>`;

/** The whole frame. Narrow the canvas below 1024px to see the navigation move into a drawer. */
export const Default = {
  render: () => html`<ep-app-shell>${topBar}${sideNav}${pageHeader}${cards}</ep-app-shell>`,
};

export const WithoutNavigation = {
  render: () => html`<ep-app-shell>${topBar}${pageHeader}${cards}</ep-app-shell>`,
};

export const SideNav = {
  parameters: { layout: 'padded' },
  render: () => html`<div style="width: 256px; height: 520px; border: 1px solid var(--ep-color-border-default)">
    ${sideNav}
  </div>`,
};

export const PageHeader = {
  parameters: { layout: 'padded' },
  render: () => pageHeader,
};

export const PageHeaderTitleOnly = {
  parameters: { layout: 'padded' },
  render: () => html`<ep-page-header heading="Settings"></ep-page-header>`,
};

import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import wordmark from '@eduportdesign/logos/wordmark-white.svg?raw';
import symbol from '@eduportdesign/logos/symbol-white.svg?raw';

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

const railNav = html`<ep-side-nav slot="nav" appearance="inverse">
  <span slot="header" role="img" aria-label="Eduport" style="display: block; width: 7rem; color: white">${unsafeHTML(wordmark)}</span>
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

const stat = (value, label) => html`<div style="display: grid; gap: 2px; min-width: 6rem; padding: var(--ep-space-150) var(--ep-space-200); border-radius: var(--ep-radius-container); background: var(--ep-color-hero-chip)">
  <b style="font: var(--ep-font-heading-lg); letter-spacing: -0.03em; font-variant-numeric: tabular-nums">${value}</b>
  <span style="font: var(--ep-font-label-sm)">${label}</span>
</div>`;

const heroHeader = html`<ep-page-header variant="hero" heading="Good morning, Anjali">
  <span slot="eyebrow">Thursday · Term 2, week 7</span>
  <span slot="art" style="color: white">${unsafeHTML(symbol)}</span>
  Physics 11 starts at 10:30. You have 16 submissions waiting.
  <div slot="aside" style="display: flex; flex-wrap: wrap; gap: var(--ep-space-100)">${stat('3', 'classes today')}${stat('16', 'to grade')}${stat('64%', 'avg. progress')}</div>
  <ep-button slot="actions" variant="secondary">Import</ep-button>
  <ep-button slot="actions">New course</ep-button>
</ep-page-header>`;

/** A dark rail with the logo, and a brand hero on the landing page. The rail runs the full height beside the top bar. */
export const RailAndHero = {
  render: () => html`<ep-app-shell>${topBar}${railNav}${heroHeader}${cards}</ep-app-shell>`,
};

export const Hero = {
  parameters: { layout: 'padded' },
  render: () => heroHeader,
};

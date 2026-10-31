import { html } from 'lit';

/**
 * The Playground style: `data-style="playground"` on the page. Same components, bolder look. Rounded Nunito,
 * 2px outlines, hard-edged "sticker" shadows, buttons that press down, and bright subject tints. Each story fixes the
 * style and theme with its own globals, so these also run the accessibility checks for Playground in light and dark.
 */
export default { title: 'Playground style', parameters: { layout: 'padded' } };

const light = { style: 'playground', theme: 'light' };
const dark = { style: 'playground', theme: 'dark' };

const people = ['Rahul Kumar', 'Sana Noor', 'Arun Joseph', 'Meera Varma'];
const subjects = [
  { tone: '1', icon: 'atom', name: 'Physics', meta: 'Class 11 · 32 students', value: 68, due: 4 },
  { tone: '2', icon: 'flask', name: 'Chemistry', meta: 'Class 12 · 29 students', value: 54, due: 6 },
  { tone: '3', icon: 'math-function', name: 'Mathematics', meta: 'Class 10 · 35 students', value: 81, due: 2 },
  { tone: '5', icon: 'leaf', name: 'Biology', meta: 'Class 9 · 32 students', value: 47, due: 4 },
];

const buttons = () => html`<div style="display: flex; flex-wrap: wrap; gap: var(--ep-space-200); align-items: center; padding-block-end: var(--ep-space-100)">
  <ep-button>Primary</ep-button>
  <ep-button variant="secondary">Secondary</ep-button>
  <ep-button variant="tertiary">Tertiary</ep-button>
  <ep-button variant="ghost">Ghost</ep-button>
  <ep-button variant="danger">Danger</ep-button>
  <ep-button disabled>Disabled</ep-button>
  <ep-icon-button label="Settings" icon="settings"></ep-icon-button>
</div>`;

const courseCards = () => html`<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ep-layout-gutter); padding-block-end: var(--ep-space-100)">
  ${subjects.map(
    (s) => html`<ep-card tone=${s.tone}>
      <div slot="media" style="display: flex; justify-content: space-between; align-items: flex-start; min-height: 4rem">
        <ep-icon-tile tone=${s.tone} icon=${s.icon}></ep-icon-tile>
        <ep-progress-ring tone=${s.tone} value=${s.value} label=${`${s.name} completion`}></ep-progress-ring>
      </div>
      <h3 slot="heading">${s.name}</h3>
      ${s.meta}
      <div slot="footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%">
        <ep-avatar-group label=${`Students in ${s.name}`} max="3">
          ${people.map((name) => html`<ep-avatar name=${name}></ep-avatar>`)}
        </ep-avatar-group>
        <ep-badge variant="accent">${s.due} due</ep-badge>
      </div>
    </ep-card>`,
  )}
</div>`;

const forms = () => html`<div style="display: grid; gap: var(--ep-space-200); max-width: 420px; padding-block-end: var(--ep-space-100)">
  <ep-text-field label="Course name" value="Physics, Class 11" help="Students see this on their timetable."></ep-text-field>
  <ep-select label="Term">
    <option value="1">Term 1</option>
    <option value="2" selected>Term 2</option>
  </ep-select>
  <ep-checkbox checked>Send a reminder the day before</ep-checkbox>
  <ep-switch checked>Allow late submissions</ep-switch>
  <ep-tabs label="Course sections">
    <ep-tab panel="overview">Overview</ep-tab>
    <ep-tab panel="students">Students</ep-tab>
    <ep-tab-panel name="overview">16 submissions are waiting.</ep-tab-panel>
    <ep-tab-panel name="students">128 students.</ep-tab-panel>
  </ep-tabs>
  <ep-alert variant="success" heading="Saved">Your changes are live.</ep-alert>
</div>`;

const stats = () => html`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--ep-space-200); padding-block-end: var(--ep-space-100)">
  <ep-stat label="Students" value="128"><span slot="note">+6 this week</span></ep-stat>
  <ep-stat label="To grade" value="16" tone="5"><span slot="note">Oldest: 3 days</span></ep-stat>
  <ep-stat label="Avg. progress" value="64%" tone="4"></ep-stat>
</div>`;

/** The primary button has a hard edge. Pressing it moves it down onto the edge, so it sits flat. */
export const Buttons = { globals: light, render: buttons };
export const CourseCards = { globals: light, render: courseCards };
export const FormsAndFeedback = { globals: light, render: forms };
export const Stats = { globals: light, render: stats };

export const ButtonsDark = { globals: dark, render: buttons };
export const CourseCardsDark = { globals: dark, render: courseCards };
export const FormsAndFeedbackDark = { globals: dark, render: forms };
export const StatsDark = { globals: dark, render: stats };

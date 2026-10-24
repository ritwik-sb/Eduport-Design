import { html } from 'lit';

export default { title: 'Signal patterns', parameters: { layout: 'padded' } };

const people = ['Rahul Kumar', 'Sana Noor', 'Arun Joseph', 'Meera Varma', 'Priya Thomas', 'Faisal Ali'];

/** Six categorical tones. They tell things apart (a subject, a team); they never mean "good" or "bad". */
export const Tones = {
  render: () => html`<div style="display: flex; gap: var(--ep-space-150); flex-wrap: wrap">
    ${['1', '2', '3', '4', '5', '6'].map(
      (tone) => html`<ep-icon-tile tone=${tone} icon="atom"></ep-icon-tile>`,
    )}
  </div>`,
};

export const IconTile = {
  render: () => html`<div style="display: flex; gap: var(--ep-space-150); align-items: center">
    <ep-icon-tile size="sm" tone="2" icon="flask"></ep-icon-tile>
    <ep-icon-tile tone="2" icon="flask"></ep-icon-tile>
    <ep-icon-tile size="lg" tone="2" icon="flask"></ep-icon-tile>
    <ep-icon-tile icon="book"></ep-icon-tile>
  </div>`,
};

export const ProgressRing = {
  render: () => html`<div style="display: flex; gap: var(--ep-space-300); align-items: center">
    <ep-progress-ring size="sm" tone="1" value="68" label="Physics completion"></ep-progress-ring>
    <ep-progress-ring tone="2" value="54" label="Chemistry completion"></ep-progress-ring>
    <ep-progress-ring size="lg" tone="3" value="81" label="Mathematics completion"></ep-progress-ring>
    <ep-progress-ring value="30" label="Overall completion"></ep-progress-ring>
  </div>`,
};

export const AvatarGroup = {
  render: () => html`<div style="display: grid; gap: var(--ep-space-200)">
    <ep-avatar-group label="Students in Physics 11" max="3">
      ${people.map((name) => html`<ep-avatar name=${name}></ep-avatar>`)}
    </ep-avatar-group>
    <ep-avatar-group label="Teachers" size="md">
      ${people.slice(0, 3).map((name) => html`<ep-avatar name=${name}></ep-avatar>`)}
    </ep-avatar-group>
  </div>`,
};

export const Stat = {
  render: () => html`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: var(--ep-space-150)">
    <ep-stat label="Students" value="128"><span slot="note">+6 this week</span></ep-stat>
    <ep-stat label="To grade" value="16" tone="5"><span slot="note">Oldest: 3 days</span></ep-stat>
    <ep-stat label="Avg. progress" value="64%" tone="4"></ep-stat>
    <ep-stat label="Classes today" value="3" tone="1"></ep-stat>
  </div>`,
};

const subjects = [
  { tone: '1', icon: 'atom', name: 'Physics', meta: 'Class 11 · 32 students', value: 68, due: 4, people: 6 },
  { tone: '2', icon: 'flask', name: 'Chemistry', meta: 'Class 12 · 29 students', value: 54, due: 6, people: 5 },
  { tone: '3', icon: 'math-function', name: 'Mathematics', meta: 'Class 10 · 35 students', value: 81, due: 2, people: 6 },
  { tone: '4', icon: 'leaf', name: 'Biology', meta: 'Class 9 · 32 students', value: 47, due: 4, people: 4 },
];

/** The course cards from the visual direction: a tinted cover with the subject's tile and progress, then people and due work. */
export const CourseCards = {
  render: () => html`<div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: var(--ep-layout-gutter)">
    ${subjects.map(
      (s) => html`<ep-card tone=${s.tone}>
        <div slot="media" style="display: flex; justify-content: space-between; align-items: flex-start; min-height: 5rem">
          <ep-icon-tile tone=${s.tone} icon=${s.icon}></ep-icon-tile>
          <ep-progress-ring tone=${s.tone} value=${s.value} label=${`${s.name} completion`}></ep-progress-ring>
        </div>
        <h3 slot="heading">${s.name}</h3>
        ${s.meta}
        <div slot="footer" style="display: flex; justify-content: space-between; align-items: center; width: 100%">
          <ep-avatar-group label=${`Students in ${s.name}`} max="3">
            ${people.slice(0, s.people).map((name) => html`<ep-avatar name=${name}></ep-avatar>`)}
          </ep-avatar-group>
          <ep-badge variant="accent">${s.due} due</ep-badge>
        </div>
      </ep-card>`,
    )}
  </div>`,
};

/** For a card whose whole surface is a link: the shadow deepens on hover and focus, and on hover the card rises 2px. */
export const InteractiveCard = {
  render: () => html`<div style="max-width: 280px">
    <ep-card interactive>
      <h3 slot="heading"><a href="#" style="color: inherit; text-decoration: none">Physics, Class 11</a></h3>
      32 students · 4 assignments due
    </ep-card>
  </div>`,
};

const patterns = ['waves', 'rings', 'dots', 'blocks', 'orbit', 'mesh'];

/** Generated artwork for course tiles and empty states. The same `seed` always draws the same picture. */
export const Cover = {
  render: () => html`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--ep-space-200)">
    ${patterns.map(
      (pattern, i) => html`<ep-card>
        <ep-cover slot="media" pattern=${pattern} tone=${String((i % 6) + 1)} seed=${i + 3} style="--ep-cover-radius: 0"></ep-cover>
        <h3 slot="heading">${pattern}</h3>
        <span>tone ${(i % 6) + 1}, seed ${i + 3}</span>
      </ep-card>`,
    )}
  </div>`,
};

/** A trend with no axes. Always give it a label that says what it shows. */
export const Sparkline = {
  render: () => html`<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: var(--ep-space-150)">
    <ep-stat label="Submissions" value="63">
      <span slot="note">+12 this week</span>
      <ep-sparkline slot="chart" values="12, 18, 15, 24, 31, 28, 40, 52, 63" label="Submissions, last 9 days"></ep-sparkline>
    </ep-stat>
    <ep-stat label="Avg. score" value="78%">
      <span slot="note">+3 points</span>
      <ep-sparkline slot="chart" tone="2" variant="line" values="60, 64, 63, 70, 72, 71, 78" label="Average score, last 7 tests"></ep-sparkline>
    </ep-stat>
    <ep-stat label="Attendance" value="94%">
      <span slot="note">Steady</span>
      <ep-sparkline slot="chart" tone="3" variant="bars" values="9, 8, 10, 7, 9, 10, 9" label="Students present, last 7 days"></ep-sparkline>
    </ep-stat>
  </div>`,
};

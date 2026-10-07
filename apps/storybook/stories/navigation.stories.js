import { html } from 'lit';

export default { title: 'Navigation' };

export const Tabs = {
  render: () => html`<ep-tabs label="Course sections">
    <ep-tab panel="overview">Overview</ep-tab>
    <ep-tab panel="lessons">Lessons</ep-tab>
    <ep-tab panel="tests">Tests</ep-tab>
    <ep-tab panel="certificate" disabled>Certificate</ep-tab>
    <ep-tab-panel name="overview">An introduction to motion, forces and energy.</ep-tab-panel>
    <ep-tab-panel name="lessons">24 lessons, about 18 hours in total.</ep-tab-panel>
    <ep-tab-panel name="tests">Three practice tests and one final test.</ep-tab-panel>
    <ep-tab-panel name="certificate">Finish every lesson to unlock your certificate.</ep-tab-panel>
  </ep-tabs>`,
};

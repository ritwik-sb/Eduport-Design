import { html } from 'lit';

export default {
  title: 'Accordion',
  argTypes: { single: { control: 'boolean' } },
  args: { single: false },
};

export const Default = {
  render: ({ single }) =>
    html`<ep-accordion ?single=${single} style="max-width: 640px">
      <ep-accordion-item heading="How do I join a live class?" open>
        Open the course, choose Live classes and select Join. The button turns on five minutes before the start.
      </ep-accordion-item>
      <ep-accordion-item heading="Can I download lessons to watch offline?">
        Yes, in the mobile app. Downloads stay available for 30 days.
      </ep-accordion-item>
      <ep-accordion-item heading="How are test scores calculated?">
        Each correct answer earns the marks shown next to it. Wrong answers on entrance tests lose a quarter mark.
      </ep-accordion-item>
      <ep-accordion-item heading="Certificates (after the course ends)" disabled
        >Available after the course ends.</ep-accordion-item
      >
    </ep-accordion>`,
};

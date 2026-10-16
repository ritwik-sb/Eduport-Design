import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpAccordion } from '@eduportdesign/web-components/components/accordion';

export const Accordion = createComponent({
  tagName: 'ep-accordion',
  elementClass: EpAccordion,
  react: React,
});

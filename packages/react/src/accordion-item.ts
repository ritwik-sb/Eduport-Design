import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpAccordionItem } from '@eduportdesign/web-components/components/accordion';

export const AccordionItem = createComponent({
  tagName: 'ep-accordion-item',
  elementClass: EpAccordionItem,
  react: React,
  events: {
    onOpen: 'ep-open',
    onClose: 'ep-close',
  },
});

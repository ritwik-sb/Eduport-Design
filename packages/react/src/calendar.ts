import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpCalendar } from '@eduportdesign/web-components/components/calendar';

export const Calendar = createComponent({
  tagName: 'ep-calendar',
  elementClass: EpCalendar,
  react: React,
  events: {
    onChange: 'change',
  },
});

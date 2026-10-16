import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpDatePicker } from '@eduportdesign/web-components/components/date-picker';

export const DatePicker = createComponent({
  tagName: 'ep-date-picker',
  elementClass: EpDatePicker,
  react: React,
  events: {
    onChange: 'change',
  },
});

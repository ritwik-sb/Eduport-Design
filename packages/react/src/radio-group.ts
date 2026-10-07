import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpRadioGroup } from '@eduportdesign/web-components/components/radio';

export const RadioGroup = createComponent({
  tagName: 'ep-radio-group',
  elementClass: EpRadioGroup,
  react: React,
  events: {
    onChange: 'change',
  },
});

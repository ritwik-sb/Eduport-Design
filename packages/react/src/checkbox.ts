import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpCheckbox } from '@eduportdesign/web-components/components/checkbox';

export const Checkbox = createComponent({
  tagName: 'ep-checkbox',
  elementClass: EpCheckbox,
  react: React,
  events: {
    onChange: 'change',
  },
});

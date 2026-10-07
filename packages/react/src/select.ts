import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpSelect } from '@eduportdesign/web-components/components/select';

export const Select = createComponent({
  tagName: 'ep-select',
  elementClass: EpSelect,
  react: React,
  events: {
    onChange: 'change',
  },
});

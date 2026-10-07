import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpSwitch } from '@eduportdesign/web-components/components/switch';

export const Switch = createComponent({
  tagName: 'ep-switch',
  elementClass: EpSwitch,
  react: React,
  events: {
    onChange: 'change',
  },
});

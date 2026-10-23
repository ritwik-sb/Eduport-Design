import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpProgressRing } from '@eduportdesign/web-components/components/progress-ring';

export const ProgressRing = createComponent({
  tagName: 'ep-progress-ring',
  elementClass: EpProgressRing,
  react: React,
});

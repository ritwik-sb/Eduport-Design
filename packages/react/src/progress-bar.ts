import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpProgressBar } from '@eduportdesign/web-components/components/progress-bar';

export const ProgressBar = createComponent({
  tagName: 'ep-progress-bar',
  elementClass: EpProgressBar,
  react: React,
});

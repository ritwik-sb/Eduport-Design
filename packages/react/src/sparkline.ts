import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpSparkline } from '@eduportdesign/web-components/components/sparkline';

export const Sparkline = createComponent({
  tagName: 'ep-sparkline',
  elementClass: EpSparkline,
  react: React,
});

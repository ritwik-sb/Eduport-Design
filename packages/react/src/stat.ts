import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpStat } from '@eduportdesign/web-components/components/stat';

export const Stat = createComponent({
  tagName: 'ep-stat',
  elementClass: EpStat,
  react: React,
});

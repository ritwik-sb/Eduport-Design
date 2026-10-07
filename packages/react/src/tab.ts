import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpTab } from '@eduportdesign/web-components/components/tabs';

export const Tab = createComponent({
  tagName: 'ep-tab',
  elementClass: EpTab,
  react: React,
});

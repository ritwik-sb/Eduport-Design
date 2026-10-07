import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpTabPanel } from '@eduportdesign/web-components/components/tabs';

export const TabPanel = createComponent({
  tagName: 'ep-tab-panel',
  elementClass: EpTabPanel,
  react: React,
});

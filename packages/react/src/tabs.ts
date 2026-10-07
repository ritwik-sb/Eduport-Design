import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpTabs } from '@eduportdesign/web-components/components/tabs';

export const Tabs = createComponent({
  tagName: 'ep-tabs',
  elementClass: EpTabs,
  react: React,
  events: {
    onChange: 'change',
  },
});

import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpTopBar } from '@eduportdesign/web-components/components/top-bar';

export const TopBar = createComponent({
  tagName: 'ep-top-bar',
  elementClass: EpTopBar,
  react: React,
  events: {
    onNavToggle: 'ep-nav-toggle',
  },
});

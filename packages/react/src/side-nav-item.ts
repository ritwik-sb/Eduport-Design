import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpSideNavItem } from '@eduportdesign/web-components/components/side-nav';

export const SideNavItem = createComponent({
  tagName: 'ep-side-nav-item',
  elementClass: EpSideNavItem,
  react: React,
});

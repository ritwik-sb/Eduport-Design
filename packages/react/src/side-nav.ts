import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpSideNav } from '@eduportdesign/web-components/components/side-nav';

export const SideNav = createComponent({
  tagName: 'ep-side-nav',
  elementClass: EpSideNav,
  react: React,
});

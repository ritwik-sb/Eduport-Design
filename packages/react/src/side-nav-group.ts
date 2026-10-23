import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpSideNavGroup } from '@eduportdesign/web-components/components/side-nav';

export const SideNavGroup = createComponent({
  tagName: 'ep-side-nav-group',
  elementClass: EpSideNavGroup,
  react: React,
});

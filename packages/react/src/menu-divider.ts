import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpMenuDivider } from '@eduportdesign/web-components/components/menu';

export const MenuDivider = createComponent({
  tagName: 'ep-menu-divider',
  elementClass: EpMenuDivider,
  react: React,
});

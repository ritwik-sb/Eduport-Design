import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpMenuItem } from '@eduportdesign/web-components/components/menu';

export const MenuItem = createComponent({
  tagName: 'ep-menu-item',
  elementClass: EpMenuItem,
  react: React,
});

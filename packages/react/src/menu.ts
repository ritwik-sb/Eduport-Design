import * as React from 'react';
import { createComponent, type EventName } from '@lit/react';
import { EpMenu, type MenuSelectDetail } from '@eduportdesign/web-components/components/menu';

export const Menu = createComponent({
  tagName: 'ep-menu',
  elementClass: EpMenu,
  react: React,
  events: {
    onSelect: 'ep-select' as EventName<CustomEvent<MenuSelectDetail>>,
    onOpen: 'ep-open',
    onClose: 'ep-close',
  },
});

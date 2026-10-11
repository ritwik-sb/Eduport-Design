import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpPopover } from '@eduportdesign/web-components/components/popover';

export const Popover = createComponent({
  tagName: 'ep-popover',
  elementClass: EpPopover,
  react: React,
  events: {
    onOpen: 'ep-open',
    onClose: 'ep-close',
  },
});

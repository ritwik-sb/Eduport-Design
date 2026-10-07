import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpModal } from '@eduportdesign/web-components/components/modal';

export const Modal = createComponent({
  tagName: 'ep-modal',
  elementClass: EpModal,
  react: React,
  events: {
    onClose: 'ep-close',
  },
});

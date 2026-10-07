import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpAlert } from '@eduportdesign/web-components/components/alert';

export const Alert = createComponent({
  tagName: 'ep-alert',
  elementClass: EpAlert,
  react: React,
  events: {
    onClose: 'ep-close',
  },
});

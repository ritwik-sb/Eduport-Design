import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpToast } from '@eduportdesign/web-components/components/toast';

export const Toast = createComponent({
  tagName: 'ep-toast',
  elementClass: EpToast,
  react: React,
  events: {
    onClose: 'ep-close',
  },
});

export { toast, type ToastOptions } from '@eduportdesign/web-components/components/toast';

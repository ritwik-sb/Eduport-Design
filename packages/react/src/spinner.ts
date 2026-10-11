import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpSpinner } from '@eduportdesign/web-components/components/spinner';

export const Spinner = createComponent({
  tagName: 'ep-spinner',
  elementClass: EpSpinner,
  react: React,
});

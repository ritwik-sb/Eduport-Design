import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpRadio } from '@eduportdesign/web-components/components/radio';

export const Radio = createComponent({
  tagName: 'ep-radio',
  elementClass: EpRadio,
  react: React,
});

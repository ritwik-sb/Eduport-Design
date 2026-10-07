import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpButton } from '@eduportdesign/web-components/components/button';

export const Button = createComponent({
  tagName: 'ep-button',
  elementClass: EpButton,
  react: React,
});

import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpIconButton } from '@eduportdesign/web-components/components/icon-button';

export const IconButton = createComponent({
  tagName: 'ep-icon-button',
  elementClass: EpIconButton,
  react: React,
});

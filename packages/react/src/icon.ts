import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpIcon } from '@eduportdesign/web-components/components/icon';

export const Icon = createComponent({
  tagName: 'ep-icon',
  elementClass: EpIcon,
  react: React,
});

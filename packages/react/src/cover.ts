import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpCover } from '@eduportdesign/web-components/components/cover';

export const Cover = createComponent({
  tagName: 'ep-cover',
  elementClass: EpCover,
  react: React,
});

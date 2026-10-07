import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpTag } from '@eduportdesign/web-components/components/tag';

export const Tag = createComponent({
  tagName: 'ep-tag',
  elementClass: EpTag,
  react: React,
  events: {
    onRemove: 'ep-remove',
  },
});

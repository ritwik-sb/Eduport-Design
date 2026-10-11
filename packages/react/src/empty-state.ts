import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpEmptyState } from '@eduportdesign/web-components/components/empty-state';

export const EmptyState = createComponent({
  tagName: 'ep-empty-state',
  elementClass: EpEmptyState,
  react: React,
});

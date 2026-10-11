import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpSkeleton } from '@eduportdesign/web-components/components/skeleton';

export const Skeleton = createComponent({
  tagName: 'ep-skeleton',
  elementClass: EpSkeleton,
  react: React,
});

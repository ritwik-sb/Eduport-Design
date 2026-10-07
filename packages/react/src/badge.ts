import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpBadge } from '@eduportdesign/web-components/components/badge';

export const Badge = createComponent({
  tagName: 'ep-badge',
  elementClass: EpBadge,
  react: React,
});

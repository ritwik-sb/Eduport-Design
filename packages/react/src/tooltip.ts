import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpTooltip } from '@eduportdesign/web-components/components/tooltip';

export const Tooltip = createComponent({
  tagName: 'ep-tooltip',
  elementClass: EpTooltip,
  react: React,
});

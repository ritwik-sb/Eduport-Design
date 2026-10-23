import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpIconTile } from '@eduportdesign/web-components/components/icon-tile';

export const IconTile = createComponent({
  tagName: 'ep-icon-tile',
  elementClass: EpIconTile,
  react: React,
});

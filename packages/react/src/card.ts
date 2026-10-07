import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpCard } from '@eduportdesign/web-components/components/card';

export const Card = createComponent({
  tagName: 'ep-card',
  elementClass: EpCard,
  react: React,
});

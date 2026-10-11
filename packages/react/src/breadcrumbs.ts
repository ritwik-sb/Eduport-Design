import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpBreadcrumbs } from '@eduportdesign/web-components/components/breadcrumbs';

export const Breadcrumbs = createComponent({
  tagName: 'ep-breadcrumbs',
  elementClass: EpBreadcrumbs,
  react: React,
});

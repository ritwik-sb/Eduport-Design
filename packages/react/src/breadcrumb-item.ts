import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpBreadcrumbItem } from '@eduportdesign/web-components/components/breadcrumbs';

export const BreadcrumbItem = createComponent({
  tagName: 'ep-breadcrumb-item',
  elementClass: EpBreadcrumbItem,
  react: React,
});

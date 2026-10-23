import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpPageHeader } from '@eduportdesign/web-components/components/page-header';

export const PageHeader = createComponent({
  tagName: 'ep-page-header',
  elementClass: EpPageHeader,
  react: React,
});

import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpPagination } from '@eduportdesign/web-components/components/pagination';

export const Pagination = createComponent({
  tagName: 'ep-pagination',
  elementClass: EpPagination,
  react: React,
  events: {
    onChange: 'change',
  },
});

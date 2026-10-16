import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpTable } from '@eduportdesign/web-components/components/table';

export const Table = createComponent({
  tagName: 'ep-table',
  elementClass: EpTable,
  react: React,
});

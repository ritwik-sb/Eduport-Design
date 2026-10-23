import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpAppShell } from '@eduportdesign/web-components/components/app-shell';

export const AppShell = createComponent({
  tagName: 'ep-app-shell',
  elementClass: EpAppShell,
  react: React,
});

import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpAvatar } from '@eduportdesign/web-components/components/avatar';

export const Avatar = createComponent({
  tagName: 'ep-avatar',
  elementClass: EpAvatar,
  react: React,
});

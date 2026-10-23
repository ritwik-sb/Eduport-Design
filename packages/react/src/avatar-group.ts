import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpAvatarGroup } from '@eduportdesign/web-components/components/avatar-group';

export const AvatarGroup = createComponent({
  tagName: 'ep-avatar-group',
  elementClass: EpAvatarGroup,
  react: React,
});

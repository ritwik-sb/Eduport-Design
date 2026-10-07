import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpTextField } from '@eduportdesign/web-components/components/text-field';

export const TextField = createComponent({
  tagName: 'ep-text-field',
  elementClass: EpTextField,
  react: React,
  events: {
    onInput: 'input',
    onChange: 'change',
  },
});

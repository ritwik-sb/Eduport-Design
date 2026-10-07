import * as React from 'react';
import { createComponent } from '@lit/react';
import { EpTextarea } from '@eduportdesign/web-components/components/textarea';

export const Textarea = createComponent({
  tagName: 'ep-textarea',
  elementClass: EpTextarea,
  react: React,
  events: {
    onInput: 'input',
    onChange: 'change',
  },
});

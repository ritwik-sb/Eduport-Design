# @eduportdesign/react

React components for the Eduport Design System. Each one is a thin [`@lit/react`](https://lit.dev/docs/frameworks/react/) wrapper around the matching web component in [`@eduportdesign/web-components`](../web-components), so there is one implementation to maintain.

> **Building an app, or using an AI coding assistant?** Read the [AI and app guide](https://github.com/ritwik-sb/Eduport-Design/blob/main/docs/llm-guide.md) first. It has the full setup, a page skeleton to start every screen from, and every component's API. Layout rules (app shell, page header, sections) are in [docs/layout.md](https://github.com/ritwik-sb/Eduport-Design/blob/main/docs/layout.md).

```bash
npm install @eduportdesign/react @eduportdesign/tokens
```

```jsx
import '@eduportdesign/tokens/css';
import '@eduportdesign/tokens/css/base'; // recommended: body, headings, text, links, focus
import { Button, TextField, toast } from '@eduportdesign/react';

export function Profile() {
  return (
    <form onSubmit={(e) => { e.preventDefault(); toast({ variant: 'success', message: 'Saved' }); }}>
      <TextField label="Full name" name="name" required />
      <Button type="submit">Save</Button>
    </form>
  );
}
```

Props match the web component properties in camelCase (`helperText`, `errorText`, `fullWidth`). Events: `onChange` and `onInput` on form controls, `onChange` on `Tabs`, `Pagination`, `DatePicker` and `Calendar`, `onRemove` on `Tag`, `onClose` on `Alert`, `Modal` and `Toast`, `onSelect`, `onOpen` and `onClose` on `Menu`, and `onOpen` and `onClose` on `Popover` and `AccordionItem`.

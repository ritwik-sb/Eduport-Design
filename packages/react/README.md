# @eduportdesign/react

React components for the Eduport Design System. Each one is a thin [`@lit/react`](https://lit.dev/docs/frameworks/react/) wrapper around the matching web component in [`@eduportdesign/web-components`](../web-components), so there is one implementation to maintain.

```bash
npm install @eduportdesign/react @eduportdesign/tokens
```

```jsx
import '@eduportdesign/tokens/css';
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

Props match the web component properties in camelCase (`helperText`, `errorText`, `fullWidth`). Events: `onChange` and `onInput` on form controls, `onRemove` on `Tag`, `onClose` on `Alert`, `Modal` and `Toast`.

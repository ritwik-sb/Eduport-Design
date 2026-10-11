---
'@eduportdesign/web-components': minor
---

Form controls behave like native ones:

- `ep-text-field` and `ep-textarea` fire `change` when an edit is committed, so `onChange` in the React wrappers works.
- Pressing Enter in `ep-text-field` submits its form, unless the form's submit button is disabled.
- `ep-button` is disabled inside a disabled `<fieldset>`.
- Re-enabling a `<fieldset>` no longer clears or overrides a control's own `disabled`. Controls disabled by a fieldset keep `disabled` as `false` and match `:disabled` instead.
- `ep-radio-group` links its helper and error text to the group with `aria-describedby`. The `radiogroup` role moves from the host to an element inside the shadow root.
- `ep-radio` marks itself `aria-disabled` when it or its group is disabled.

Component tests and axe checks of every story now run in CI.

---
'@eduportdesign/web-components': patch
---

A control can be enabled again after it was disabled. When `disabled` went back to false, `ep-button`, `ep-text-field`, `ep-textarea`, `ep-select`, `ep-checkbox`, `ep-switch`, `ep-date-picker` and `ep-radio-group` could stay disabled: the browser reports the change in the middle of an update, where the request to render again was ignored. `ep-button` now also passes `aria-label` to its inner button, so an icon-only button gets a name.

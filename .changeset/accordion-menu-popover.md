---
"@eduportdesign/web-components": minor
"@eduportdesign/react": minor
---

Add `<ep-accordion>` with `<ep-accordion-item>`, `<ep-menu>` with `<ep-menu-item>` and `<ep-menu-divider>`, and `<ep-popover>`, with React wrappers `Accordion`, `AccordionItem`, `Menu` (`onSelect`, `onOpen`, `onClose`), `MenuItem`, `MenuDivider` and `Popover`. Add component tests for these and the previous batch.

Skeleton and the indeterminate progress bar now also stop under `data-motion="reduced"`, not just the OS setting, by following the motion tokens. The spinner turns once a second at all times. Menu and popover fade in with a small offset, and the accordion chevron uses the move token.

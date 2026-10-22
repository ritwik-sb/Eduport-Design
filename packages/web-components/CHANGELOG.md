# @eduportdesign/web-components

## 0.4.0

### Patch Changes

- 721e92d: Add an opt-in base stylesheet, `@eduportdesign/tokens/css/base`, that styles `body`, headings, text, links, code and the focus ring with the semantic tokens, so the parts of an app that aren't components match the components. It lives in `@layer ep-base` with zero specificity, resets heading, paragraph and list margins to 0, and adds `.ep-prose` and `.ep-visually-hidden`. Package READMEs now import it and point to the AI and app guide.
- 68ae93b: Primary fills now take white text. `interactive.primary.default` is the new `brand.58` `#d64200`, the brand orange darkened in OKLCH lightness just enough for white text to pass WCAG AA (4.53:1); hover and pressed are `brand.60` and `brand.70` in both themes, so dark-theme primary buttons no longer lighten on hover. `text.on-primary` is white in both themes. Checked checkboxes, switch thumbs, the current pagination page and the selected calendar day follow automatically.
- Updated dependencies [721e92d]
- Updated dependencies [68ae93b]
  - @eduportdesign/tokens@0.4.0

## 0.3.0

### Minor Changes

- c47dd36: Add `<ep-accordion>` with `<ep-accordion-item>`, `<ep-menu>` with `<ep-menu-item>` and `<ep-menu-divider>`, and `<ep-popover>`, with React wrappers `Accordion`, `AccordionItem`, `Menu` (`onSelect`, `onOpen`, `onClose`), `MenuItem`, `MenuDivider` and `Popover`. Add component tests for these and the previous batch.

  Skeleton and the indeterminate progress bar now also stop under `data-motion="reduced"`, not just the OS setting, by following the motion tokens. The spinner turns once a second at all times. Menu and popover fade in with a small offset, and the accordion chevron uses the move token.

- cbc03d1: Form controls behave like native ones:

  - `ep-text-field` and `ep-textarea` fire `change` when an edit is committed, so `onChange` in the React wrappers works.
  - Pressing Enter in `ep-text-field` submits its form, unless the form's submit button is disabled.
  - `ep-button` is disabled inside a disabled `<fieldset>`.
  - Re-enabling a `<fieldset>` no longer clears or overrides a control's own `disabled`. Controls disabled by a fieldset keep `disabled` as `false` and match `:disabled` instead.
  - `ep-radio-group` links its helper and error text to the group with `aria-describedby`. The `radiogroup` role moves from the host to an element inside the shadow root.
  - `ep-radio` marks itself `aria-disabled` when it or its group is disabled.

  Component tests and axe checks of every story now run in CI.

- daeb87d: Adopt the interaction and motion policy (docs/motion.md).

  Tokens: new `--ep-motion-duration-slower` (400ms, drawers only), `--ep-motion-duration-move` (movement inside a control), `--ep-motion-distance-{sm,md}` (4px, 8px enter offsets) and `--ep-motion-scale-enter` (0.98). Under `prefers-reduced-motion: reduce` or the new `data-motion="reduced"` attribute, distances and `duration-move` drop to 0 and every duration caps at 100ms, so fades stay and nothing slides.

  Components:
  - `<ep-tooltip>` opens 500ms after hover (at once on keyboard focus, and at once when moving from another open tooltip), and enters with a fade plus a 4px slide.
  - `<ep-button>` has a new `loading` property: presses are ignored, `aria-busy` is set, and a spinner replaces the prefix icon if loading lasts over 400ms, then stays at least 500ms.
  - `<ep-toast>` and `toast()` stay 6s by default (was 5s), plus 1s per 20 words over 20. A toast with an `action` never closes on its own. `duration` now defaults to unset (automatic). Toasts fade out on close, and `close()` returns a promise.
  - `<ep-modal>` fades in from a 0.98 scale with no slide, and its backdrop fades in. `<ep-switch>`'s thumb jumps under reduced motion.
  - The blanket rule that cut every animation to 0.01ms under reduced motion is gone; the tokens handle it, and loading spinners keep turning.

- a6fcea3: Add six components: `<ep-breadcrumbs>` with `<ep-breadcrumb-item>`, `<ep-pagination>`, `<ep-progress-bar>`, `<ep-spinner>`, `<ep-skeleton>` and `<ep-empty-state>`, with React wrappers `Breadcrumbs`, `BreadcrumbItem`, `Pagination` (`onChange`), `ProgressBar`, `Spinner`, `Skeleton` and `EmptyState`.
- b0997cd: Add `<ep-table>`, which styles a native `<table>` (sizes, striping, sticky header, `aria-sort` arrows, `aria-selected` rows, keyboard-scrollable overflow), and `<ep-date-picker>` with `<ep-calendar>`: a form-associated date field that accepts typed dates in the locale's order and has an APG-style calendar grid. React wrappers `Table`, `DatePicker` (`onChange`) and `Calendar` (`onChange`).

### Patch Changes

- Updated dependencies [daeb87d]
- Updated dependencies [b39d213]
- Updated dependencies [ac56da8]
  - @eduportdesign/tokens@0.3.0

## 0.2.0

### Minor Changes

- 4440ad0: Use the exact brand orange for primary actions and make components ready for phones and tablets.

  - Primary buttons, checked checkboxes, radios and switches use the brand orange `#fb6514` with near-black text. New token `--ep-color-text-on-primary`; `--ep-color-text-on-color` now covers the danger fill only. New hover and pressed shades `brand.55` and `brand.57`.
  - The secondary button is outlined in both themes, so it no longer outweighs the primary button or reads as disabled in dark.
  - Dark theme: outlined, filled and elevated cards are three distinct surfaces. New token `--ep-color-surface-muted`; dark `surface.raised` is one step lighter.
  - New touch density: 44px controls, 16px input text and 44px minimum hit areas, applied automatically on touch screens. Override with `data-density="touch|compact"`. New tokens `--ep-size-control-{sm,md,lg}`, `--ep-size-target-min`, `--ep-font-size-input`, `--ep-size-icon-{sm,md,lg}` and `--ep-z-index-toast`.
  - Toasts stay visible and clickable above an open modal.
  - An empty select shows its placeholder in the placeholder color.
  - Card and modal bodies use primary text by default.
  - Disabled buttons keep their variant's shape.
  - The sans font stack falls back to Noto Sans Malayalam for Malayalam text.

### Patch Changes

- 8d721b2: `@eduportdesign/tokens` is now a regular dependency of `@eduportdesign/web-components` instead of a peer dependency, so installing the components also installs a matching tokens version.
- Updated dependencies [4440ad0]
- Updated dependencies [9a727d5]
  - @eduportdesign/tokens@0.2.0

## 0.1.0

### Minor Changes

- 421ca16: Starter components: button, icon button, text field, textarea, select, checkbox, radio group, switch, badge, tag, avatar, card, icon, tabs, alert, toast, tooltip and modal, with React wrappers. New tokens `color.text.info` and `color.background.scrim`.

### Patch Changes

- Updated dependencies [803c4e5]
- Updated dependencies [421ca16]
  - @eduportdesign/tokens@0.1.0

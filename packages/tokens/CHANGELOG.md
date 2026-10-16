# @eduportdesign/tokens

## 0.3.0

### Minor Changes

- daeb87d: Adopt the interaction and motion policy (docs/motion.md).

  Tokens: new `--ep-motion-duration-slower` (400ms, drawers only), `--ep-motion-duration-move` (movement inside a control), `--ep-motion-distance-{sm,md}` (4px, 8px enter offsets) and `--ep-motion-scale-enter` (0.98). Under `prefers-reduced-motion: reduce` or the new `data-motion="reduced"` attribute, distances and `duration-move` drop to 0 and every duration caps at 100ms, so fades stay and nothing slides.

  Components:
  - `<ep-tooltip>` opens 500ms after hover (at once on keyboard focus, and at once when moving from another open tooltip), and enters with a fade plus a 4px slide.
  - `<ep-button>` has a new `loading` property: presses are ignored, `aria-busy` is set, and a spinner replaces the prefix icon if loading lasts over 400ms, then stays at least 500ms.
  - `<ep-toast>` and `toast()` stay 6s by default (was 5s), plus 1s per 20 words over 20. A toast with an `action` never closes on its own. `duration` now defaults to unset (automatic). Toasts fade out on close, and `close()` returns a promise.
  - `<ep-modal>` fades in from a 0.98 scale with no slide, and its backdrop fades in. `<ep-switch>`'s thumb jumps under reduced motion.
  - The blanket rule that cut every animation to 0.01ms under reduced motion is gone; the tokens handle it, and loading spinners keep turning.

- b39d213: Neutral color scheme: the gray scale is now true neutral (no brand tint), so whites, off-whites and greys look clean on screen. Red, green and blue move to standard hues. Brand orange stays where it is used on purpose: primary actions, accent marks, selected states and `accent.subtle`. Token names are unchanged; values change. The scrim and shadows use the neutral near-black too.
- ac56da8: Add spacing and layout guidelines and layout tokens. New breakpoints `--ep-breakpoint-{md,lg,xl}` (600, 1024, 1440px) and responsive `--ep-layout-{columns,margin,gutter,section-gap,header-height}` that change inside min-width media queries in `tokens.css`, plus `--ep-layout-sidebar-width` and `--ep-layout-width-{prose,form,page}`. SCSS and JS export the breakpoints for media queries. See docs/layout.md.

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

- 9a727d5: Dark theme neutrals: the page is deeper (`gray.100` `#110f0e`), the dark grays are nearly neutral instead of brownish, and surfaces step up in smaller increments. Adds `gray.95` for filled surfaces and `background.subtle` in dark; raised and overlay surfaces use `gray.90`.

## 0.1.0

### Minor Changes

- 803c4e5: First release: brand color scales, light and dark themes, soft and sharp corner modes, as CSS variables, SCSS and JS.
- 421ca16: Starter components: button, icon button, text field, textarea, select, checkbox, radio group, switch, badge, tag, avatar, card, icon, tabs, alert, toast, tooltip and modal, with React wrappers. New tokens `color.text.info` and `color.background.scrim`.

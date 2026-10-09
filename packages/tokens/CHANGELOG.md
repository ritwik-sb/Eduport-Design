# @eduportdesign/tokens

## 0.3.0

### Minor Changes

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

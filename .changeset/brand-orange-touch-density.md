---
'@eduportdesign/tokens': minor
'@eduportdesign/web-components': minor
'@eduportdesign/react': minor
---

Use the exact brand orange for primary actions and make components ready for phones and tablets.

- Primary buttons, checked checkboxes, radios and switches use the brand orange `#fb6514` with near-black text. New token `--ep-color-text-on-primary`; `--ep-color-text-on-color` now covers the danger fill only. New hover and pressed shades `brand.55` and `brand.57`.
- The secondary button is outlined in both themes, so it no longer outweighs the primary button or reads as disabled in dark.
- Dark theme: outlined, filled and elevated cards are three distinct surfaces. New token `--ep-color-surface-muted`; dark `surface.raised` is one step lighter.
- New touch density: 44px controls, 16px input text and 44px minimum hit areas, applied automatically on touch screens. Override with `data-density="touch|compact"`. New tokens `--ep-size-control-{sm,md,lg}`, `--ep-size-target-min`, `--ep-font-size-input`, `--ep-size-icon-{sm,md,lg}` and `--ep-z-index-toast`.
- Toasts stay visible and clickable above an open modal.
- An empty select shows its placeholder in the placeholder color.
- Card and modal bodies use primary text by default.
- Disabled buttons keep their variant's shape.
- The sans font stack falls back to Noto Sans Malayalam for Malayalam text.

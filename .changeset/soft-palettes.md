---
"@eduportdesign/tokens": minor
"@eduportdesign/web-components": minor
"@eduportdesign/react": minor
---

Soft palettes for the Signal style, and new fonts.

- **Clay is the new default palette.** Semantic colors move from brand orange and gray to the new `coral` key color and warm `clay` neutrals, in light and dark. Shadows are tinted with the palette's own dark tone. The primary fill is `coral.55` with dark `text.on-primary` (5.36:1); always use `--ep-color-text-on-primary` on primary fills, never hard-coded white.
- **Sage & Sand palette.** Import `@eduportdesign/tokens/css/palette-sage` and set `data-palette="sage"` on `<html>` or any subtree. Same token names, different values; combines with theme, corners, density, motion and contrast. Playground ignores it.
- **Fonts.** `font.family.sans` is now Onest and `font.family.display` is Gabarito (was Inter and Bricolage Grotesque). Install and import `@fontsource-variable/onest` and `@fontsource-variable/gabarito`.
- **Softer corners.** In the soft corner mode, `radius.indicator` is 6px, `radius.control` 14px and `radius.container` 22px (were 4, 6 and 10px). Sharp mode is unchanged.
- New primitives: `color.coral`, `color.clay`, `color.sage` and `color.sand`. No tokens were renamed or removed; `color.brand` and `color.gray` stay for the logo and existing references.

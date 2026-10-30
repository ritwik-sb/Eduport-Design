---
'@eduportdesign/tokens': minor
'@eduportdesign/web-components': minor
---

Add the Playground style, a bolder second look for the same components, switched with `data-style="playground"`.

Import `@eduportdesign/tokens/css/style-playground` (after `css`, and after `css/theme-dark` for dark) and load Nunito (`@fontsource-variable/nunito`). It gives rounded Nunito at heavy weights, 2px outlines, hard-edged sticker shadows, buttons with a hard edge that press down, a warm cream canvas and bright subject tints, with its own light and dark colors that meet the same contrast checks as the standard style. The standard style is unchanged and stays the default.

New tokens, with defaults that keep today's look: `effect.depth-control`, `effect.glow-strength`, `effect.sheen-strength`, `effect.tone-fill`, `motion.distance.press`, `shadow.sheet`, `shadow.toned`, `radius.2xl` and `radius.3xl`. Buttons, checkboxes, radios, switches, `ep-card` (toned), `ep-stat` and `ep-app-shell` now read them. See docs/playground.md.

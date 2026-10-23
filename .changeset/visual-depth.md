---
'@eduportdesign/tokens': minor
'@eduportdesign/web-components': minor
'@eduportdesign/react': minor
---

A first pass of visual depth. Everything is additive except the look of three defaults.

New tokens: `color.gray.15`, `color.background.canvas`, `color.surface.sheet`, and `font.family.display` (Bricolage Grotesque, falling back to Inter). The `font.heading.xl/lg/md` roles now use the display face at bold weight, and base heading tracking is tighter. Load the font with `@fontsource-variable/bricolage-grotesque/opsz.css`.

`shadow.raised` is now a 1px ring plus two soft layers in light, so cards need no border.

Visual changes you will see on upgrade: `ep-card` now defaults to `variant="elevated"` (use `variant="outlined"` for the old look); `ep-app-shell` with a sidebar shows the content as a raised sheet on a canvas, with no hairlines around the top bar and sidebar; the current `ep-side-nav-item` is a raised pill instead of a tint.

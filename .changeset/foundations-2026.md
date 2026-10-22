---
"@eduportdesign/tokens": minor
"@eduportdesign/web-components": patch
---

New foundations, all additive:

- Theme-aware elevation: `--ep-shadow-raised` and `--ep-shadow-overlay`, darker and tighter in the dark theme so surfaces still lift. Components now use them instead of the primitive `--ep-shadow-{md,lg}`, which stay available.
- Type roles: `--ep-font-heading-{xl,lg,md,sm,xs}`, `--ep-font-body-{lg,md,sm}`, `--ep-font-label-{md,sm}` and `--ep-font-code-md`, each a `font` shorthand. The base stylesheet styles body text and headings with them.
- Increased contrast: under `prefers-contrast: more` or `data-contrast="more"`, `border.default` uses `border.strong` and feedback borders use their status text color.

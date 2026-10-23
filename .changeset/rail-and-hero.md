---
'@eduportdesign/tokens': minor
'@eduportdesign/web-components': minor
'@eduportdesign/react': minor
---

Brand moments, both opt-in. `ep-side-nav` gets `appearance="inverse"` (a dark rail in both themes, with a `header` slot for the logo; inside `ep-app-shell` the rail then runs the full height). `ep-page-header` gets `variant="hero"` (the title on the brand gradient) with `eyebrow`, `aside` and `art` slots; its actions sit below the hero.

New tokens: `color.rail.{background,text,text-secondary,hover,current,border,accent,badge,on-badge}` and `color.hero.{start,end,glow,text,chip}`. Contrast pairs for both are checked in CI.

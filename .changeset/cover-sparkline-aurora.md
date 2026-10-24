---
'@eduportdesign/tokens': minor
'@eduportdesign/web-components': minor
'@eduportdesign/react': minor
---

New `ep-cover`: generated artwork (waves, rings, dots, blocks, orbit, mesh) in a category color, seeded so each course keeps its own picture. New `ep-sparkline`: a smooth line, area or bar trend with no axes, with a marker on the last value; `ep-stat` gets a `chart` slot for it.

The brand hero gains two slow blobs of color (new tokens `color.hero.aurora-1` and `aurora-2`), film grain, and a soft light that follows a mouse pointer. The drift and the light are off under reduced motion.

Fix: a card or stat with no `tone` no longer gets the neutral tone tint (an empty `tone=""` attribute matched `:host([tone])`), so card media is edge to edge again and a plain stat is a white tile.

---
'@eduportdesign/tokens': minor
'@eduportdesign/web-components': minor
'@eduportdesign/react': minor
---

Categorical color and four dashboard patterns, all new.

Tokens: `color.category.{1..6}.{subtle,bold,on-bold,text}` for telling things apart (never for status), and the `violet`, `teal` and `pink` primitive scales. Every pair is in the CI contrast check, in both themes.

Components: `ep-stat`, `ep-progress-ring`, `ep-avatar-group` and `ep-icon-tile`, each with a React wrapper. `ep-card` gets `tone="1"` to `"6"`, which tints its `media` area and exposes `--ep-tone-*` to the content in it. Ten icons for subjects and trends are added to the built-in set (atom, flask, math-function, leaf, language, palette, music, ball-football, trending-up).

---
"@eduportdesign/tokens": minor
"@eduportdesign/web-components": patch
"@eduportdesign/react": patch
---

Primary fills now take white text. `interactive.primary.default` is the new `brand.58` `#d64200`, the brand orange darkened in OKLCH lightness just enough for white text to pass WCAG AA (4.53:1); hover and pressed are `brand.60` and `brand.70` in both themes, so dark-theme primary buttons no longer lighten on hover. `text.on-primary` is white in both themes. Checked checkboxes, switch thumbs, the current pagination page and the selected calendar day follow automatically.

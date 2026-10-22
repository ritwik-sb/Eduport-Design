---
"@eduportdesign/web-components": patch
"@eduportdesign/tokens": patch
---

Ship a Custom Elements Manifest (`@eduportdesign/web-components/custom-elements.json`) so editors and AI coding tools can autocomplete and check `<ep-*>` markup. `tokens.css` and `theme-dark.css` now set `color-scheme`, so scrollbars and native controls follow the theme even without the base stylesheet. In the base stylesheet, `.ep-prose` paragraphs use `text-wrap: pretty`.

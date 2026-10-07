# @eduportdesign/tokens

Design tokens for the Eduport Design System, in [DTCG](https://www.designtokens.org/) format, built with Style Dictionary.

```js
import '@eduportdesign/tokens/css';                 // primitives, light theme, soft corners
import '@eduportdesign/tokens/css/theme-dark';      // [data-theme="dark"]
import '@eduportdesign/tokens/css/corners-sharp';   // [data-corners="sharp"]
```

```html
<html data-theme="dark" data-corners="sharp">
```

- `src/primitives/` raw values (color scales, space, radius, type, shadow, motion). Components never use these directly.
- `src/themes/` semantic color tokens per theme.
- `src/corners/` semantic radius tokens per corner mode.

`npm run build` writes `dist/`. `npm test` checks WCAG 2.1 AA contrast for the key pairs in every theme.

See [docs/foundations.md](../../docs/foundations.md) for how the scales were built and why.

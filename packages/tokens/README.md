# @eduportdesign/tokens

Design tokens for the Eduport Design System, in [DTCG](https://www.designtokens.org/) format, built with Style Dictionary.

```js
import '@eduportdesign/tokens/css';                 // primitives, light theme, soft corners, compact + touch density
import '@eduportdesign/tokens/css/theme-dark';      // [data-theme="dark"]
import '@eduportdesign/tokens/css/corners-sharp';   // [data-corners="sharp"]
```

```html
<html data-theme="dark" data-corners="sharp" data-motion="reduced">
```

Touch density applies by itself on touch screens (`pointer: coarse`). Set `data-density="touch"` or `"compact"` to force one.

Reduced motion applies by itself when the OS asks for it (`prefers-reduced-motion`). Set `data-motion="reduced"` to offer it as an app setting. Both are in `tokens.css`; see [docs/motion.md](../../docs/motion.md).

- `src/primitives/` raw values (color scales, space, radius, type, shadow, motion). Components never use these directly.
- `src/themes/` semantic color tokens per theme.
- `src/corners/` semantic radius tokens per corner mode.
- `src/density/` control heights, minimum target size and input text size per density.
- `src/motion/` motion tokens beyond the primitives (move duration, enter distances and scale), with `reduced.json` holding the reduced-motion values.
- `src/layout/` breakpoints, grid columns, page margin, gutter, section gap and content widths. `base.json` is the phone value; `md.json`, `lg.json` and `xl.json` override it inside `min-width` media queries.

Layout tokens change with viewport width by themselves. CSS variables can't be used inside `@media`, so use `$ep-breakpoint-{md,lg,xl}` from SCSS or `BreakpointMd`/`Lg`/`Xl` from JS. See [docs/layout.md](../../docs/layout.md).

`npm run build` writes `dist/`. `npm test` checks WCAG 2.1 AA contrast for the key pairs in every theme.

See [docs/foundations.md](../../docs/foundations.md) for how the scales were built and why.

# @eduportdesign/tokens

Design tokens for the Eduport Design System, in [DTCG](https://www.designtokens.org/) format, built with Style Dictionary.

> **Building an app, or using an AI coding assistant?** Read the [AI and app guide](https://github.com/ritwik-sb/Eduport-Design/blob/main/docs/llm-guide.md) first. It has the full setup, a page skeleton to start every screen from, and every component's API. Layout rules (app shell, page header, sections) are in [docs/layout.md](https://github.com/ritwik-sb/Eduport-Design/blob/main/docs/layout.md).

```js
import '@eduportdesign/tokens/css';                 // primitives, light theme, soft corners, compact + touch density
import '@eduportdesign/tokens/css/theme-dark';      // [data-theme="dark"]
import '@eduportdesign/tokens/css/corners-sharp';   // [data-corners="sharp"]
import '@eduportdesign/tokens/css/base';            // opt-in element styles: body, headings, text, links, focus
```

```html
<html data-theme="dark" data-corners="sharp" data-motion="reduced" data-contrast="more">
```

`base.css` styles bare elements (`body`, `h1`–`h6`, links, `code`, focus ring) with the semantic tokens, inside `@layer ep-base` with zero specificity, so app CSS always wins. It resets heading, paragraph and list margins to 0; wrap long-form text in `.ep-prose` for reading spacing. `.ep-visually-hidden` hides text visually but keeps it for screen readers.

Touch density applies by itself on touch screens (`pointer: coarse`). Set `data-density="touch"` or `"compact"` to force one.

Reduced motion applies by itself when the OS asks for it (`prefers-reduced-motion`). Set `data-motion="reduced"` to offer it as an app setting. Both are in `tokens.css`; see [docs/motion.md](../../docs/motion.md).

Increased contrast also applies by itself when the OS asks for it (`prefers-contrast: more`), and `data-contrast="more"` offers it as an app setting. It points `color.border.default` at `border.strong` and the feedback borders at their status text colors. Both `tokens.css` and `theme-dark.css` carry it.

Type roles (`--ep-font-heading-{xl,lg,md,sm,xs}`, `--ep-font-body-{lg,md,sm}`, `--ep-font-label-{md,sm}`, `--ep-font-code-md`) are `font` shorthands, so `font: var(--ep-font-heading-lg)` sets the whole style. Elevation uses `--ep-shadow-raised` and `--ep-shadow-overlay`, which change with the theme.

- `src/primitives/` raw values (color scales, space, radius, type, shadow, motion). Components never use these directly.
- `src/themes/` semantic color and shadow tokens per theme.
- `src/type/` type roles (composite typography tokens).
- `src/contrast/` the increased-contrast overrides, written as references to other semantic tokens so they work in every theme.
- `src/corners/` semantic radius tokens per corner mode.
- `src/density/` control heights, minimum target size and input text size per density.
- `src/motion/` motion tokens beyond the primitives (move duration, enter distances and scale), with `reduced.json` holding the reduced-motion values.
- `src/layout/` breakpoints, grid columns, page margin, gutter, section gap and content widths. `base.json` is the phone value; `md.json`, `lg.json` and `xl.json` override it inside `min-width` media queries.

Layout tokens change with viewport width by themselves. CSS variables can't be used inside `@media`, so use `$ep-breakpoint-{md,lg,xl}` from SCSS or `BreakpointMd`/`Lg`/`Xl` from JS. See [docs/layout.md](../../docs/layout.md).

`npm run build` writes `dist/`. `npm test` checks WCAG 2.1 AA contrast for the key pairs in every theme.

See [docs/foundations.md](../../docs/foundations.md) for how the scales were built and why.

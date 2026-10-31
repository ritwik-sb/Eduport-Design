# Playground style

Playground is a second look for the same components: rounded Nunito at heavy weights, 2px outlines, hard-edged "sticker" shadows, buttons that press down onto an edge, a warm cream canvas, and bright subject tints on cards. It is an opt-in **style**, not a fork: the components, tokens and packages are the standard ones, and one attribute switches the look.

Use it for surfaces where the audience is students or a first-time user and friendliness matters more than density. The standard style (Signal) stays the default and the right choice for staff tools that people use all day.

## Turn it on

```js
import '@fontsource-variable/nunito';                  // the font is self-hosted by the app, like Inter
import '@eduportdesign/tokens/css';
import '@eduportdesign/tokens/css/theme-dark';          // only if you offer dark
import '@eduportdesign/tokens/css/style-playground';    // load after the two above
```

```html
<html data-style="playground" data-theme="light">
```

`data-style` is a separate axis, like `data-theme`, `data-corners`, `data-density` and `data-motion`. It combines with all of them, and it can sit on any element to restyle just that subtree. Removing the attribute returns to Signal. The attribute is `data-style="playground"`; any other value, or none, is Signal.

## What changes

| Part | Signal | Playground |
|---|---|---|
| Font | Inter, Bricolage Grotesque for headings | Nunito everywhere; weights 500, 600, 800, 900 |
| Canvas | Gray page, white sheet | Warm cream page and sheet, white cards |
| Borders | 1px | 2px (`border-width.thin`), focus ring 3px |
| Corners | 6px controls, 10px containers | 14px controls, 22px containers (sharp corners still win) |
| Cards, tiles, menus | Soft ring and shadow | 2px outline plus a hard 5px base, no border needed |
| Buttons | Rim light, glow, shade | Flat fill with a 4px darker edge; pressing moves the button down onto the edge |
| Toned card | Tinted cover only | Whole card filled with the tone, lighter cover on it |
| Categories 1 to 6 | Pale tint, tone-colored label | Bright pastel fill, dark brown label (dark theme: deep fill, pale label) |

## Tokens it adds to the system

These exist in every style, with defaults that give the standard look, so adding them changes nothing for Signal. They are public API: renaming them later is a breaking change.

| Token | Default | Playground | What reads it |
|---|---|---|---|
| `effect.depth-control` | 0px | 4px | Button: height of the hard edge under it |
| `motion.distance.press` | 0px | 4px | Button: how far a press moves it down. **0 under reduced motion** |
| `effect.glow-strength` | 0.6 | 0 | Colored glow under solid buttons, checkbox, radio, switch |
| `effect.sheen-strength` | 1 | 0 | Bottom shading on solid buttons |
| `effect.tone-fill` | 0 | 1 | Toned card: how much of the card the tone fills |
| `shadow.sheet` | = `shadow.raised` | none | The content sheet in `ep-app-shell` |
| `shadow.toned` | none | sticker | `ep-stat` on a categorical tone |
| `radius.2xl`, `radius.3xl` | 14px, 22px | | Raw radii the Playground corners point at |

Playground also overrides existing tokens: `font.family.*`, `font.weight.*`, `border-width.*`, the semantic `radius.*`, `motion.scale.press` (1), and, per theme, the background, surface, text, border, accent, category, interactive and rail colors and the `shadow.*` set. `src/styles/` holds the sources.

## Motion

A pressed button moves down by `motion.distance.press` (4px) onto its hard edge, which is a press-down on a small mark and uses `transform` only. Under reduced motion (`prefers-reduced-motion` or `data-motion="reduced"`) the movement is 0 and the edge stays put, so the darker fill is the only feedback, as for Signal. Everything else follows [docs/motion.md](motion.md).

## Accessibility

- `color.border.strong` is darker than the mockup's soft outlines, so text field, checkbox and radio edges stay at 3:1 or more on the cream canvas (5.9:1 in light, more in dark).
- The contrast script (`pnpm --filter @eduportdesign/tokens test`) checks Playground light and dark with the same pairs as Signal, including every category tint.
- The decorative outlines and hard edges are shadows. They are not the only signal for any state, and `forced-colors` still uses real borders.
- Storybook runs the accessibility checks on the "Playground style" stories in light and dark.

## Limits in this first version

- The current item in `ep-side-nav` is a raised pill, not an orange fill. A filled current item needs a nav token set, and is a follow-up.
- Roles and a few colors are re-emitted so `data-style` works on a subtree, but `data-corners="sharp"` has to be on the root for sharp corners to win over Playground radii.
- Nunito has no Malayalam. The stack falls back to Inter, then Noto Sans Malayalam, as in Signal.

## Moving it out later

If Playground needs its own name, packages or audience, the source files in `src/styles/` and the hooks above are everything it is made of, so it can become its own tokens package without touching the components.

# Foundations

Foundations for the Eduport Design System: color, typography, radius (with a soft/sharp corner switch) and icons. The logo orange **#fb6514** stays in the logo; the interface uses the soft palettes below (since 2026-11-07).

Tokens live in [`packages/tokens`](../packages/tokens). Run `npm test` inside the package to re-check contrast.

## Color

### How the scales are built

Every hue has ten steps, `10` (lightest) to `100` (darkest), generated in OKLCH so steps look evenly spaced. Each step is tuned to a **fixed contrast against white**, so the same rules hold for every hue:

| Step | Contrast vs white | What it guarantees |
|---|---|---|
| 50 | ≥ 3:1 | Non-text UI (borders, icons, focus rings) and large text on white. Black text on it passes AA (~7:1). |
| 60 | ≥ 4.5:1 | White text on it passes AA. Body text on white passes AA. |
| 70 | ≥ 7:1 | AAA for body text. |
| 40 and lighter | — | Light fills. Pair with step 90–100 text. |

The Signal style has two palettes. Both use the same semantic token names, so components never change; the palette only swaps values.

| Palette | Attribute | Key color | Neutrals | Feel |
|---|---|---|---|---|
| **Clay** (default) | none | `coral` | `clay` (warm off-white to warm brown-black) | warm, soft, the default for every app |
| **Sage & Sand** | `data-palette="sage"` | `sage` | `sand` (green-grey paper) | calm, quieter, for apps that want less warmth |

Load Sage & Sand with `import '@eduportdesign/tokens/css/palette-sage'` and set `data-palette="sage"` on `<html>` (or any subtree). It combines with `data-theme`, `data-corners`, `data-density`, `data-motion` and `data-contrast`. It does not apply to the Playground style, which has its own colors.

| | 10 | 20 | 30 | 40 | 50 | 55 | 58 | 60 | 70 | 80 | 90 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| coral | `#fff3ee` | `#ffddd1` | `#ffb8a1` | `#ff9776` | `#fc815a` | `#ea653a` | `#e16037` | `#d15227` | `#aa3e19` | `#7e2c10` | `#4a2419` | `#2c120a` |
| sage | `#f2f9f2` | `#ddeddf` | `#c0d9c3` | `#a3c1a6` | `#82a285` | `#6a8a6e` | | `#59785d` | `#48634b` | `#344836` | `#213023` | `#121b13` |

| | 10 | 15 | 20 | 25 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 95 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| clay | `#fff9f5` | `#f8eee7` | `#f2e6de` | `#eaddd4` | `#e4d6cd` | `#c2b4ac` | `#a3958d` | `#867971` | `#6a5e56` | `#483d37` | `#322924` | `#28211c` | `#1e1814` |
| sand | `#fbfaf6` | `#eeede4` | `#e8e7dc` | `#e0ded3` | `#dad8cb` | `#b9b8ac` | `#9a998e` | `#7d7c73` | `#626158` | `#414039` | `#272721` | `#1f1e19` | `#171612` |

The status and category hues (`red`, `green`, `amber`, `blue`, `violet`, `teal`, `pink`) and the older `brand` and `gray` scales are unchanged and shared by both palettes. `brand.50` `#fb6514` is still the logo orange; it is no longer the primary fill.

- **Neutrals are tinted, never grey.** Clay leans warm, sand leans green. Pure grey next to a soft key color looks dirty.
- **Surfaces step, shadows are tinted.** The page (`background.canvas`), the sheet and raised cards are a few lightness steps apart, and shadows use the palette's own dark tone (`#78503c` in Clay, `#3c4a3a` in Sage) at low alpha, so depth reads as soft rather than grey.
- **The key color is used with intent**: primary actions, accent marks such as the tab underline and progress, selected states and `accent.subtle` highlights. It is never a tint on every surface.

### Primary fills

The key color is a soft mid-tone, so the label color is chosen per palette, not fixed to white:

| | Clay light | Clay dark | Sage light | Sage dark |
|---|---|---|---|---|
| Fill (default / hover / active) | `coral.55` / `50` / `58` | `coral.40` / `30` / `20` | `sage.60` / `70` / `80` | `sage.40` / `30` / `20` |
| Label (`text.on-primary`) | `coral.100` (dark) | `coral.100` (dark) | white | `sand.100` (dark) |
| Label contrast (default) | 5.36:1 | 8.3:1 | 4.92:1 | 9.26:1 |
| Fill vs page | 3.13:1 | 8.31:1 | 4.71:1 | 9.26:1 |

What it means in practice:

- **Always use `text.on-primary`** for anything on an `interactive.primary` fill, including checkmarks and switch thumbs. Never hard-code white: in Clay the label is dark.
- **The primary fill must stay ≥3:1 against `background.default`**, so the button is visible as a control, not just its label. Coral at its brightest (`coral.50`) is 2.4:1, so the resting fill is `coral.55`; `coral.50` is used only as the hover, where the label gains contrast.
- **Links and thin marks are darker in light**: `text.link` is `coral.70` / `sage.70`, and `accent.default` (tab underline, progress, checked control edges) is `coral.60` / `sage.60`.
- `scripts/check-contrast.mjs` checks every pair in Clay light and dark, Sage light and dark, and Playground light and dark, and fails the build on any miss.

### Semantic tokens

Components use only these (`--ep-color-*`). Values per theme are in `src/themes/light.json` and `dark.json`.

| Group | Tokens |
|---|---|
| `background` | `default`, `subtle`, `inverse`, `scrim` (modal backdrop) |
| `surface` | `default`, `raised` (elevated cards), `overlay` (modals, toasts), `sunken`, `muted` (filled cards, avatars) |
| `text` | `primary`, `secondary`, `disabled`, `inverse`, `on-primary`, `on-color`, `link`, `info`, `success`, `warning`, `danger` |
| `border` | `default` (decorative), `strong` (≥3:1, for control boundaries), `focus`, `danger` |
| `accent` **(new)** | `default` (selected indicators, progress, active tab), `subtle` (selected rows) |
| `interactive` | `primary`, `secondary`, `ghost`, `danger` × `default`/`hover`/`active`; `disabled` |
| `feedback` | `info`, `success`, `warning`, `danger` × `background`/`border` |

`text.on-primary` goes on every primary fill state; its value depends on the palette (see Primary fills). `text.on-color` is white in both themes and goes on the danger fill. The secondary button is outlined (`border.strong` edge, `text.primary` label, clear fill), so it never outweighs the primary button and never reads as disabled in dark.

In dark, the three card styles are three distinct steps: outlined is the page color (`clay.100`) with a border, filled is `surface.muted` (`clay.95`), and elevated is `surface.raised` (`clay.90`); Sage uses the matching `sand` steps. Shadows don't show on a dark page, so elevation relies on the lighter surface.

The dark end of the neutral scales (80, 90, 95 and 100) is kept close together, because big jumps between dark surfaces look flat and grey, especially on phones (changed 2026-10-08).

### Contrast results

`scripts/check-contrast.mjs` checks every pair per theme and palette (every text token on every background, non-text tokens at 3:1, on-primary and on-color text on every fill state, text on the secondary and ghost hover tints, feedback text on feedback backgrounds). All pass in Clay, Sage & Sand and Playground, light and dark. It exits non-zero on a failure, so it can run in CI.

## Typography

**Text: [Onest](https://fonts.google.com/specimen/Onest)** (Onest Variable), self-hosted with `@fontsource-variable/onest`. **Headings: [Gabarito](https://fonts.google.com/specimen/Gabarito)**, with `@fontsource-variable/gabarito`. Chosen 2026-11-07, replacing Inter and Bricolage Grotesque.

- Onest is a calm, open grotesque built for screens: clear at 12–14px in dense tables and forms, with tabular figures (`font-variant-numeric: tabular-nums`). It is far less common than Inter in generated UIs, so apps don't look templated.
- Gabarito is round and friendly at bold weights, which suits the soft palettes; it is used only by the heading roles (`font.heading.xl`, `lg`, `md`, `font.family.display`).
- Both are SIL Open Font License and variable, so one file per family covers every weight.
- Neither has italics; browsers synthesise a slant, so keep italics rare.
- If either isn't loaded, the stacks fall through to system fonts, so nothing breaks. Neither has Malayalam glyphs (see below).

**Depth.** `color.background.canvas` is the page, `color.surface.sheet` is the main content sheet on it, and `shadow.raised` is a 1px ring plus two soft layers, so raised surfaces (cards, the current nav item, the sheet) separate without borders. `ep-app-shell` uses all three when a sidebar is present.

Mono: **JetBrains Mono** for code and IDs. The token stacks fall back to system fonts, so nothing breaks if a font isn't loaded.

**Malayalam.** Onest and Gabarito have no Malayalam. The sans and display stacks name **Noto Sans Malayalam** right after them, so Malayalam text uses it glyph by glyph while Latin text stays in Onest. Apps with Malayalam content load it with `@fontsource-variable/noto-sans-malayalam`. It was checked in buttons and tags at the 1.2 button line height, with no clipping.

## Density

Controls come in two densities, a third axis next to theme and corner mode:

| Token | Compact (default) | Touch |
|---|---|---|
| `--ep-size-control-sm` / `-md` / `-lg` | 32 / 40 / 48px | 36 / 44 / 52px |
| `--ep-size-target-min` | 24px | 44px |
| `--ep-font-size-input` | 14px | 16px |

Touch density turns on by itself on phones and tablets (`@media (pointer: coarse)`), so nothing needs configuring. `data-density="touch"` forces it anywhere and `data-density="compact"` opts out, on `<html>` or any subtree.

- Inputs use 16px text in touch density at every size, because iOS Safari zooms the page when a field under 16px gets focus.
- Small buttons, the tag remove button, and checkbox, radio and switch rows keep their look but extend their hit area to `--ep-size-target-min`.
- Icon sizes inside controls are `--ep-size-icon-{sm,md,lg}` (16, 18, 20px). The toast layer's fallback stacking is `--ep-z-index-toast`.

Spacing, the layout grid, breakpoints and page structure have their own guide: [layout.md](./layout.md).

## Radius and corner modes

Components never use raw radius values. They use four **semantic** radius tokens, which a corner mode sets:

| Token | Used for | Soft (default) | Sharp |
|---|---|---|---|
| `--ep-radius-indicator` | checkbox, tag, badge, tooltip | 6px | 0 |
| `--ep-radius-control` | button, text field, select, menu item | 14px | 0 |
| `--ep-radius-container` | card, popover, modal, toast | 22px | 0 |
| `--ep-radius-round` | avatar, radio, switch | full | full |

Switch modes with an attribute, on `<html>` or any subtree:

```html
<html data-theme="dark" data-corners="sharp">
```

```js
import '@eduportdesign/tokens/css';
import '@eduportdesign/tokens/css/theme-dark';     // optional
import '@eduportdesign/tokens/css/corners-sharp';  // optional
```

Corner mode is a separate axis from color theme, so light/dark × soft/sharp all combine without four theme files.

## Icons

**Recommendation: [Tabler Icons](https://tabler.io/icons)** (MIT).

- The largest free set with one consistent style: roughly 5,000+ icons on a 24px grid with 2px strokes, plus filled variants for many of them (count approximate, as of 2025; it grows every release).
- The stroke weight and geometry pair well with Onest.
- Plain SVGs, so we can generate our own `@eduportdesign/icons` package rather than depend on their framework wrappers.

| Set | License | Size (approx.) | Notes |
|---|---|---|---|
| **Tabler** | MIT | 5,000+ | Largest consistent outline set. Recommended. |
| Phosphor | MIT | ~1,500 × 6 weights | Best if we want thin/bold/fill/duotone weights. |
| Lucide | ISC | ~1,500 | Very popular, smaller set. |
| Material Symbols | Apache-2.0 | ~3,000 | Variable font; looks distinctly Google. |

Proposed shape for `@eduportdesign/icons` (roadmap item 3, not built in this change): one ES module per icon generated from the SVGs, plus an `<ep-icon>` element that renders an imported icon, inherits `currentColor`, and is `aria-hidden` unless given a `label`.

## Public API trade-offs

These names become public on release; renaming them later is a breaking change.

- **Token names.** `--ep-color-accent-*` and `--ep-radius-{indicator,control,container,round}` are new. Role-based names (control, container) are easier to keep stable than size names (sm, md), because a mode can change the value without the name lying.
- **Primitive step values changed.** `radius.lg` is now 6px and `radius.xl` 10px, and every color primitive has a new value. Pre-release, so no consumer is affected yet.
- **Corner mode as `data-corners="soft|sharp"`.** An attribute (rather than a JS API or class) works the same in plain HTML, React and SSR, and matches `data-theme`. Adding a third mode later (e.g. `round`) is non-breaking; renaming the attribute or the two values is breaking.
- **`text.on-primary` and `text.on-color`.** Both are white today, but keep them separate: on-primary follows whatever the primary fill becomes. Custom components that put text on a primary fill must use on-primary.
- **Density as `data-density="compact|touch"`.** Same attribute pattern as `data-theme` and `data-corners`. `--ep-size-control-*`, `--ep-size-target-min` and `--ep-font-size-input` are new public names.
- **Icon names.** If we keep Tabler's names, upstream renames become our breaking changes; pin the Tabler version and treat upgrades as reviewed changes.

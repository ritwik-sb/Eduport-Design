# Foundations

Proposed foundations for the Eduport Design System: color, typography, radius (with a soft/sharp corner switch) and icons. The only fixed input is the brand primary, **#fb6514**. Everything else here is a proposal.

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

`brand.50` is the exact brand color `#fb6514` (3.01:1 against white).

| | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100 |
|---|---|---|---|---|---|---|---|---|---|---|
| brand | `#fff6f3` | `#ffe7de` | `#ffcbb7` | `#ff9f79` | `#fb6514` | `#c64b00` | `#983800` | `#762900` | `#561b00` | `#2b0a00` |
| gray | `#faf7f6` | `#eeebea` | `#d9d5d2` | `#bab6b4` | `#95918f` | `#767270` | `#5a5654` | `#45413f` | `#312d2b` | `#171412` |
| red | `#fff6f6` | `#ffe6e5` | `#ffc9c7` | `#ff9c99` | `#ff565e` | `#d73240` | `#a91e2d` | `#811922` | `#5c1218` | `#310306` |
| green | `#ebfded` | `#d1f5d7` | `#a3e5b0` | `#69cb82` | `#2ca756` | `#00853c` | `#00652c` | `#004d20` | `#013614` | `#001906` |
| amber | `#fff8e5` | `#fdeabf` | `#f6d283` | `#e7ae2c` | `#c08800` | `#996a00` | `#774f00` | `#5d3b00` | `#442800` | `#221000` |
| blue | `#f4f8ff` | `#e0edff` | `#bbd9ff` | `#85baff` | `#4093f8` | `#2272cf` | `#1157a3` | `#0f427d` | `#0b2e58` | `#011430` |

- **Gray** is slightly warm (tinted toward the brand hue) so it sits comfortably next to orange.
- **Red** is pushed toward crimson so danger never reads as brand orange. **Amber** leans yellow for the same reason.
- **Blue** is new: the brief had no info hue, and orange, red and amber are too close to carry "info" as well.

### The brand-orange accessibility problem

White text on `#fb6514` is **3.01:1**, which fails WCAG AA for normal text (4.5:1). There are two ways to keep AA:

1. **Darker fill, white text.** Primary buttons use `brand.60` `#c64b00` with white text (4.76:1). Next to the logo, this reads as rust rather than Eduport orange.
2. **Exact brand fill, dark text (chosen 2026-10-08).** Primary buttons use `#fb6514` with near-black text (`text.on-primary`, `gray.100`, 6.09:1), in both themes. The UI shows the true brand color.

Decision: option 2, after the design critique showed the option 1 orange reads as rust next to the logo. Option 1 was the choice from 2026-10-07 to 2026-10-08.

What option 2 means in practice:

- **Labels on orange are near-black, never white.** Use `text.on-primary` for anything on an `interactive.primary` fill, including checkmarks and switch thumbs.
- **Hover and pressed shades.** Light theme darkens to `brand.55` `#ea5b0d` (5.24:1) and `brand.57` `#dc5309` (4.61:1); `brand.60` would drop dark text to 3.85:1. Dark theme lightens to `brand.40` and `brand.30`, so the button gains emphasis instead of sinking into the page.
- **Orange text stays darker.** `#fb6514` as text on white is 3.01:1, so links and the tertiary button label keep `text.link` (`brand.70` in light).
- **Thin marks stay darker in light.** The tab underline, progress bar and the edge of checked controls use `accent.default`, which is `brand.60` in light: the brand color is 2.82:1 on `background.subtle`, under the 3:1 non-text minimum. Checked checkboxes, radios and switches are filled with the brand orange inside that edge. Dark uses the exact brand orange for all of them.
- **The button against the page** is 3.01:1 on white and 6.09:1 on the dark page.

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

`text.on-primary` is near-black in both themes and goes on every primary fill state. `text.on-color` is white in both themes and goes on the danger fill. The secondary button is outlined (`border.strong` edge, `text.primary` label, clear fill), so it never outweighs the primary button and never reads as disabled in dark.

In dark, the three card styles are three distinct steps: outlined is the page color with a border, filled is `surface.muted` (`gray.90`), and elevated is `surface.raised` (`gray.80`). Shadows don't show on a dark page, so elevation relies on the lighter surface.

### Contrast results

`scripts/check-contrast.mjs` checks 77 pairs per theme (every text token on every background, non-text tokens at 3:1, on-primary and on-color text on every fill state, text on the secondary and ghost hover tints, feedback text on feedback backgrounds). All pass in light and dark. It exits non-zero on a failure, so it can run in CI.

## Typography

**Recommendation: keep Inter** (Inter Variable), self-hosted with `@fontsource-variable/inter`.

- It is built for UI at small sizes, which is what internal apps mostly are: dense tables, forms, 12–14px labels.
- It has tabular figures (`font-variant-numeric: tabular-nums`) for numbers in tables, and a large character set.
- It matches the Eduport website, so internal tools feel related to the public brand for free.
- SIL Open Font License, free for any use.

Alternatives considered: **Geist** (more character, smaller language coverage) and **IBM Plex Sans** (more distinctive, wider, heavier for dense UIs). Either is a one-line change to `font.family.sans`.

Mono: **JetBrains Mono** for code and IDs. The token stacks fall back to system fonts, so nothing breaks if a font isn't loaded.

**Malayalam.** Inter covers Latin, Cyrillic, Greek and Vietnamese only. The sans stack names **Noto Sans Malayalam** right after Inter, so Malayalam text uses it glyph by glyph while Latin text stays in Inter. Apps with Malayalam content load it with `@fontsource-variable/noto-sans-malayalam`. It was checked in buttons and tags at the 1.2 button line height, with no clipping.

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

## Radius and corner modes

Components never use raw radius values. They use four **semantic** radius tokens, which a corner mode sets:

| Token | Used for | Soft (default) | Sharp |
|---|---|---|---|
| `--ep-radius-indicator` | checkbox, tag, badge, tooltip | 4px | 0 |
| `--ep-radius-control` | button, text field, select, menu item | 6px | 0 |
| `--ep-radius-container` | card, popover, modal, toast | 10px | 0 |
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
- The stroke weight and geometry pair well with Inter.
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
- **`text.on-primary` and `text.on-color`.** On-primary is near-black and on-color is white. Custom components that put text on a primary fill must use on-primary; using on-color there fails AA.
- **Density as `data-density="compact|touch"`.** Same attribute pattern as `data-theme` and `data-corners`. `--ep-size-control-*`, `--ep-size-target-min` and `--ep-font-size-input` are new public names.
- **Icon names.** If we keep Tabler's names, upstream renames become our breaking changes; pin the Tabler version and treat upgrades as reviewed changes.

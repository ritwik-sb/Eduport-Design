# Eduport Design System

A reusable design system for Eduport products, in the spirit of IBM Carbon and the Atlassian Design System. Components are written once as web components and work in any framework, with React wrappers on top.

> **Status:** pre-release (v0.0.0). This repository currently holds the design tokens (`@eduportdesign/tokens`). The component packages are on the [roadmap](#roadmap).

## Highlights

- **Built on the Eduport brand.** Every color scale is generated from the brand orange `#fb6514`.
- **Light and dark themes**, switched with one attribute.
- **Soft or sharp corners**, a separate switch that works with either theme.
- **Accessible by default.** The target is WCAG 2.1 AA. A contrast check covers every key color pair in both themes.
- **Framework-agnostic.** Lit web components with `@lit/react` wrappers, so there's one codebase to maintain.

## Packages

| Package | What it is | Status |
|---|---|---|
| [`@eduportdesign/tokens`](packages/tokens) | Design tokens (color, type, space, radius, shadow, motion) as CSS variables, SCSS and JS | In this repo |
| `@eduportdesign/web-components` | Lit 3 components (`<ep-button>`, …) | Planned |
| `@eduportdesign/react` | React wrappers (`<Button>`, …) | Planned |
| `@eduportdesign/icons` | Icon package based on [Tabler Icons](https://tabler.io/icons) | Planned |

## Quick start

```bash
npm install @eduportdesign/tokens
```

```js
import '@eduportdesign/tokens/css';                 // primitives, light theme, soft corners
import '@eduportdesign/tokens/css/theme-dark';      // optional: dark theme
import '@eduportdesign/tokens/css/corners-sharp';   // optional: sharp corners
```

```html
<html data-theme="dark" data-corners="sharp">
```

```css
.card {
  background: var(--ep-color-surface-raised);
  color: var(--ep-color-text-primary);
  border-radius: var(--ep-radius-container);
}
```

> The packages aren't published to npm yet. Until they are, build from source (below).

## Foundations

| | |
|---|---|
| **Color** | Six 10–100 scales (brand, gray, red, green, amber, blue). Step 60 of every hue takes white text at AA contrast. Primary actions use `#c64b00`, a darker brand orange, with white text. |
| **Type** | [Inter](https://rsms.me/inter/) for UI text, JetBrains Mono for code and IDs. |
| **Radius** | Semantic tokens `indicator`, `control`, `container` and `round`, set by the corner mode. |
| **Icons** | Tabler Icons (MIT, 5,000+ icons). |

Components use **semantic tokens only** (`--ep-color-text-primary`, `--ep-radius-control`), never raw primitives or hard-coded values. That rule is what makes themes and corner modes work.

The full reasoning, including the color tables and the contrast results, is in [docs/foundations.md](docs/foundations.md).

## Develop

Requires Node 20 or later.

```bash
cd packages/tokens
npm install
npm run build   # writes dist/ (CSS, SCSS, JS)
npm test        # WCAG 2.1 AA contrast check across all themes
```

Token sources are [DTCG](https://www.designtokens.org/) JSON files:

```
packages/tokens/src/
  primitives/   raw values: color scales, space, radius, type, shadow, motion
  themes/       semantic colors: light.json, dark.json
  corners/      semantic radius: soft.json, sharp.json
```

To add a theme, add a JSON file to `src/themes/`. If a component needs a color that doesn't exist yet, add a semantic token to both `light.json` and `dark.json` and run the contrast check. Don't hard-code the value.

## Conventions

- npm scope `@eduportdesign/*`. Custom elements use the `ep-` prefix and CSS custom properties use `--ep-`.
- Token names, component props and package exports are public API. Renaming them after release is a breaking change.
- Accessibility is a requirement: keyboard support, visible focus, correct ARIA, `forced-colors` support, and AA contrast for every new color pair.

## Roadmap

1. ✅ Tokens with light and dark themes and soft and sharp corners
2. ⬜ CI (build, contrast check, publish via Changesets) and the npm org
3. ⬜ Web components and React wrappers, starting with Button
4. ⬜ Icon package, typography styles and a Figma library
5. ⬜ Core components: TextField, Checkbox, Radio, Select, Modal, Tooltip, Toast, Link
6. ⬜ Docs site, contribution guide and versioning policy
7. ⬜ v0.1, then a pilot in an Eduport app, then v1.0

## License

MIT (planned; a LICENSE file hasn't been added yet).

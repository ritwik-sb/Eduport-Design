# Eduport Design System

A reusable design system for Eduport products, in the spirit of IBM Carbon and the Atlassian Design System. Components are written once as web components and work in any framework, with React wrappers on top.

> **Status:** pre-release. The first release will be v0.1.0. This repository currently holds the design tokens (`@eduportdesign/tokens`). The component packages are on the [roadmap](#roadmap).

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

The packages are published to two registries under the same version number. Use public npm unless you have a reason not to.

### From npm (recommended)

```bash
npm install @eduportdesign/tokens
```

No setup or login is needed.

### From GitHub Packages

GitHub Packages only accepts packages scoped to the repository owner, so there the tokens are published as `@ritwik-sb/tokens`. Install it under an alias so your imports still say `@eduportdesign/tokens`:

1. Create a GitHub personal access token (classic) with the `read:packages` scope.
2. Add an `.npmrc` next to your app's `package.json`:

   ```ini
   @ritwik-sb:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
   ```

3. Install with the alias:

   ```bash
   npm install @eduportdesign/tokens@npm:@ritwik-sb/tokens
   ```

In CI, set `GITHUB_TOKEN` to a token that can read the package. In GitHub Actions, that's the built-in `GITHUB_TOKEN` with `permissions: packages: read`.

### Use it

Import the CSS once, at your app's entry point:

```js
import '@eduportdesign/tokens/css';                 // primitives, light theme, soft corners
import '@eduportdesign/tokens/css/theme-dark';      // optional: dark theme
import '@eduportdesign/tokens/css/corners-sharp';   // optional: sharp corners
```

Then pick the theme and corner mode on the root element. Both attributes are optional and can change at runtime:

```html
<html data-theme="dark" data-corners="sharp">
```

Style your own UI with the semantic tokens:

```css
.card {
  background: var(--ep-color-surface-raised);
  color: var(--ep-color-text-primary);
  border-radius: var(--ep-radius-container);
}
```

Sass and JS are also available:

```scss
@use '@eduportdesign/tokens/scss' as ep;
```

```js
import * as tokens from '@eduportdesign/tokens';
```

Component packages will install the same way once they exist.

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

Requires Node 20 or later and pnpm (run `corepack enable` once to get the pinned version).

```bash
pnpm install
pnpm build   # writes packages/*/dist (CSS, SCSS, JS)
pnpm test    # WCAG 2.1 AA contrast check across all themes
```

Token sources are [DTCG](https://www.designtokens.org/) JSON files:

```
packages/tokens/src/
  primitives/   raw values: color scales, space, radius, type, shadow, motion
  themes/       semantic colors: light.json, dark.json
  corners/      semantic radius: soft.json, sharp.json
```

To add a theme, add a JSON file to `src/themes/`. If a component needs a color that doesn't exist yet, add a semantic token to both `light.json` and `dark.json` and run the contrast check. Don't hard-code the value.

## Release

Versions are managed with [Changesets](https://github.com/changesets/changesets). All `@eduportdesign/*` packages share one version number.

1. A pull request that changes a package runs `pnpm changeset` and commits the file it creates.
2. When that lands on `main`, the Release workflow opens a **Version packages** PR that bumps versions and writes changelogs.
3. Merging that PR publishes the new versions to npm (with provenance) and then to GitHub Packages, and tags the release.

Publishing only runs when the repository variable `PUBLISH_ENABLED` is `true`. Until then the workflow only opens Version PRs.

## Conventions

- npm scope `@eduportdesign/*`. Custom elements use the `ep-` prefix and CSS custom properties use `--ep-`.
- Token names, component props and package exports are public API. Renaming them after release is a breaking change.
- Accessibility is a requirement: keyboard support, visible focus, correct ARIA, `forced-colors` support, and AA contrast for every new color pair.

## Roadmap

1. ✅ Tokens with light and dark themes and soft and sharp corners
2. ✅ CI (build, contrast check) and releases to npm and GitHub Packages via Changesets
3. ⬜ Web components and React wrappers, starting with Button
4. ⬜ Icon package, typography styles and a Figma library
5. ⬜ Core components: TextField, Checkbox, Radio, Select, Modal, Tooltip, Toast, Link
6. ⬜ Docs site, contribution guide and versioning policy
7. ⬜ v0.1, then a pilot in an Eduport app, then v1.0

## License

MIT (planned; a LICENSE file hasn't been added yet).

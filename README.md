# Eduport Design System

A reusable design system for Eduport products, in the spirit of IBM Carbon and the Atlassian Design System. Components are written once as web components and work in any framework, with React wrappers on top.

> **Status:** pre-release. The first release will be v0.1.0. This repository holds the design tokens, a starter set of 18 components, and React wrappers for them.

**Using an AI coding assistant?** Point it at [docs/llm-guide.md](docs/llm-guide.md) (or [llms.txt](llms.txt)). It has setup, every component API, the token rules and accessibility requirements in one file, plus a snippet to paste into your app's `AGENTS.md` or `CLAUDE.md`.

**See every component:** run `pnpm install && pnpm dev`. A gallery opens in your browser with light/dark and soft/sharp switches.

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
| [`@eduportdesign/web-components`](packages/web-components) | Lit 3 components (`<ep-button>`, `<ep-text-field>`, …) | In this repo |
| [`@eduportdesign/react`](packages/react) | React wrappers (`<Button>`, `<TextField>`, …) | In this repo |
| [`@eduportdesign/logos`](packages/logos) | Eduport logo SVGs with a manifest of where to use each one | In this repo, not published yet |
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

Components install the same way:

```js
import '@eduportdesign/web-components';                       // every component
import '@eduportdesign/web-components/components/button';     // or one at a time
```

```jsx
import { Button, TextField } from '@eduportdesign/react';

<Button variant="primary" onClick={save}>Save</Button>
```

## Components

Button, Icon button, Text field, Textarea, Select, Checkbox, Radio group, Switch, Badge, Tag, Avatar, Card, Icon, Tabs, Alert, Toast, Tooltip and Modal. See [packages/web-components](packages/web-components/README.md) for the tag names and APIs.

## Foundations

| | |
|---|---|
| **Color** | Six 10–100 scales (brand, gray, red, green, amber, blue). Step 60 of every hue takes white text at AA contrast. Primary actions use the exact brand orange `#fb6514` with near-black text (6.37:1). |
| **Type** | [Inter](https://rsms.me/inter/) for UI text, Noto Sans Malayalam for Malayalam, JetBrains Mono for code and IDs. |
| **Radius** | Semantic tokens `indicator`, `control`, `container` and `round`, set by the corner mode. |
| **Density** | Compact for mouse and trackpad, touch (44px controls, 16px input text) for phones and tablets. Touch turns on by itself on touch screens; `data-density` overrides it. |
| **Spacing and layout** | 4px-based space scale; a 4 / 8 / 12 column grid whose margin, gutter and section gap grow at the `md` (600px), `lg` (1024px) and `xl` (1440px) breakpoints. See [docs/layout.md](docs/layout.md). |
| **Icons** | Tabler Icons (MIT, 5,000+ icons). |

Components use **semantic tokens** for color, radius, control heights and icon sizes (`--ep-color-text-primary`, `--ep-radius-control`, `--ep-size-control-md`), never raw color or radius primitives. That rule is what makes themes, corner modes and touch density work. Fixed geometry that belongs to one component, like avatar diameters or the switch track, stays in that component.

The full reasoning, including the color tables and the contrast results, is in [docs/foundations.md](docs/foundations.md).

## Develop

Requires Node 20 or later and pnpm (run `corepack enable` once to get the pinned version).

```bash
pnpm install
pnpm dev        # component gallery at http://localhost:5173
pnpm storybook  # Storybook at http://localhost:6006
pnpm build      # writes packages/*/dist and builds the gallery and Storybook
pnpm test       # WCAG 2.1 AA contrast check across all themes
```

```
apps/
  gallery/      one page with every component (Vite)
  storybook/    Storybook workbench with the accessibility addon
packages/
  logos/            logo SVGs and logos.json (use cases)
  tokens/           design tokens
  web-components/   src/components/<name>/<name>.ts, index.ts (registers the tag)
  react/            src/<name>.ts, one @lit/react wrapper per component
```

The gallery and Storybook read components from source, so edits show up straight away.

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
3. ✅ Web components and React wrappers: a starter set of 18 components, a gallery page and Storybook
4. ⬜ Icon package (all Tabler icons, tree-shakable), typography styles and a Figma library
5. ⬜ More components: Link, Menu, Popover, Table, Pagination, Progress, Skeleton, Breadcrumb; component tests
6. ⬜ Docs site, contribution guide and versioning policy
7. ⬜ v0.1, then a pilot in an Eduport app, then v1.0

## License

MIT (planned; a LICENSE file hasn't been added yet).

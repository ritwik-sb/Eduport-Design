# @eduportdesign/web-components

Lit web components for the Eduport Design System. They work in plain HTML and in any framework. For React, use [`@eduportdesign/react`](../react).

```bash
npm install @eduportdesign/web-components @eduportdesign/tokens
```

```js
import '@eduportdesign/tokens/css';
import '@eduportdesign/tokens/css/theme-dark';     // optional
import '@eduportdesign/tokens/css/corners-sharp';  // optional
import '@eduportdesign/web-components';             // registers every <ep-*> tag
```

To keep bundles small, import only what you use: `import '@eduportdesign/web-components/components/button'`.

## Components

| Tag | What it's for | Key attributes | Events |
|---|---|---|---|
| `<ep-button>` | Starting an action | `variant` (primary, secondary, tertiary, ghost, danger), `size` (sm, md, lg), `type`, `disabled`, `full-width` | `click` |
| `<ep-icon-button>` | An action shown as an icon only | `icon`, `label` (required), `variant`, `size`, `disabled` | `click` |
| `<ep-text-field>` | Single-line text | `label`, `value`, `name`, `type`, `placeholder`, `helper-text`, `error-text`, `size`, `required`, `disabled`, `readonly` | `input`, `change` |
| `<ep-textarea>` | Multi-line text | `label`, `value`, `rows`, `maxlength` (shows a count), `helper-text`, `error-text`, `resize` | `input`, `change` |
| `<ep-select>` | Picking one option (native select) | `label`, `value`, `placeholder`, `helper-text`, `error-text`, `size`; `<option>` children | `change` |
| `<ep-checkbox>` | On/off, or several from a list | `checked`, `indeterminate`, `name`, `value`, `helper-text`, `required`, `disabled` | `change` |
| `<ep-radio-group>` + `<ep-radio>` | Exactly one from a list | group: `label`, `name`, `value`, `orientation`, `error-text`; radio: `value`, `disabled` | `change` |
| `<ep-switch>` | A setting that applies at once | `checked`, `name`, `value`, `helper-text`, `disabled` | `change` |
| `<ep-badge>` | Status or count | `variant` (neutral, accent, info, success, warning, danger), `dot` | |
| `<ep-tag>` | Keyword or filter | `variant`, `size` (sm, md), `removable`, `disabled` | `ep-remove` |
| `<ep-avatar>` | A person | `name`, `src`, `size` (xs–xl) | |
| `<ep-card>` | Grouped content | `variant` (outlined, elevated, filled); slots `media`, `heading`, `header-actions`, `footer` | |
| `<ep-icon>` | A Tabler icon | `name`, `label` | |
| `<ep-tabs>` + `<ep-tab>` + `<ep-tab-panel>` | Switching views in place | tabs: `value`, `label`; tab: `panel`, `disabled`; panel: `name` | `change` |
| `<ep-alert>` | Inline message | `variant` (info, success, warning, danger), `heading`, `dismissible`; slot `actions` | `ep-close` |
| `<ep-toast>` + `toast()` | Brief notification | `variant`, `heading`, `duration` (0 = stays open) | `ep-close` |
| `<ep-tooltip>` | Label on hover or focus | `content`, `placement` (top, bottom, left, right) | |
| `<ep-modal>` | Focused task or decision | `open`, `heading`, `size` (sm, md, lg); slot `footer`; `show()`, `close()` | `ep-close` |

Form controls are form-associated: they submit with a surrounding `<form>`, reset with it, and report validity.

## Icons

`<ep-icon>` ships with a curated set of [Tabler](https://tabler.io/icons) icons (see `scripts/generate-icons.mjs`). Add more with `registerIcons({ name: '<path d="…"/>' })`, using the inner markup of any Tabler outline icon. A full, tree-shakable icon package is planned.

## Conventions

- Lit without decorators: `static properties`, `declare` fields, defaults in the constructor.
- Each component renders a native element in shadow DOM where one exists, exposed as `part="base"`.
- Colors and radii come only from semantic `--ep-*` tokens, so every component follows the theme and corner mode.
- Keyboard support, visible focus (`:focus-visible`), ARIA where native semantics fall short, and `forced-colors` styles are required.

# @eduportdesign/web-components

Lit web components for the Eduport Design System. They work in plain HTML and in any framework. For React, use [`@eduportdesign/react`](../react).

> **Building an app, or using an AI coding assistant?** Read the [AI and app guide](https://github.com/ritwik-sb/Eduport-Design/blob/main/docs/llm-guide.md) first. It has the full setup, a page skeleton to start every screen from, and every component's API. Layout rules (app shell, page header, sections) are in [docs/layout.md](https://github.com/ritwik-sb/Eduport-Design/blob/main/docs/layout.md).

```bash
npm install @eduportdesign/web-components @eduportdesign/tokens
```

```js
import '@eduportdesign/tokens/css';
import '@eduportdesign/tokens/css/theme-dark';     // optional
import '@eduportdesign/tokens/css/corners-sharp';  // optional
import '@eduportdesign/tokens/css/base';           // recommended: body, headings, text, links, focus
import '@eduportdesign/web-components';             // registers every <ep-*> tag
```

To keep bundles small, import only what you use: `import '@eduportdesign/web-components/components/button'`.

## Components

| Tag | What it's for | Key attributes | Events |
|---|---|---|---|
| `<ep-app-shell>` | The frame of every screen: top bar, side nav, content | `nav-open`, `full-width`; slots `top-bar`, `nav` | |
| `<ep-top-bar>` | The bar across the top | slots `brand`, default, `actions` | `ep-nav-toggle` |
| `<ep-side-nav>` + `<ep-side-nav-item>` + `<ep-side-nav-group>` | Main navigation | nav: `label`, slot `footer`; item: `href`, `icon`, `current`, slot `suffix`; group: `heading` | |
| `<ep-page-header>` | Title, breadcrumbs, description and actions at the top of a page | `heading`, `heading-level`; slots `breadcrumbs`, `actions` | |
| `<ep-button>` | Starting an action | `variant` (primary, secondary, tertiary, ghost, danger), `size` (sm, md, lg), `type`, `disabled`, `full-width` | `click` |
| `<ep-icon-button>` | An action shown as an icon only | `icon`, `label` (required), `variant`, `size`, `disabled` | `click` |
| `<ep-text-field>` | Single-line text | `label`, `hide-label`, `value`, `name`, `type`, `placeholder`, `helper-text`, `error-text`, `size`, `required`, `disabled`, `readonly` | `input`, `change` |
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
| `<ep-breadcrumbs>` + `<ep-breadcrumb-item>` | Where the page sits | breadcrumbs: `label`; item: `href` (the last item is the current page) | |
| `<ep-pagination>` | Moving between pages | `page`, `total-pages`, `label` | `change` |
| `<ep-progress-bar>` | Progress of a task | `label` (required), `value` (unset = indeterminate), `max`, `show-value`, `hide-label`, `helper-text`, `variant` (default, success, danger), `size` (sm, md) | |
| `<ep-spinner>` | A short wait | `label`, `size` (sm, md, lg) | |
| `<ep-skeleton>` | Placeholder while loading | `variant` (text, rect, circle), `lines` | |
| `<ep-accordion>` + `<ep-accordion-item>` | Collapsible sections | accordion: `single`; item: `heading`, `heading-level`, `open`, `disabled` | `ep-open`, `ep-close` |
| `<ep-menu>` + `<ep-menu-item>` + `<ep-menu-divider>` | Actions from a button | menu: `open`, `placement`, `label`, slot `trigger`; item: `value`, `variant` (default, danger), `disabled` | `ep-select`, `ep-open`, `ep-close` |
| `<ep-popover>` | Interactive content from a button | `open`, `placement`, `label`, slot `trigger`; `show()`, `hide()` | `ep-open`, `ep-close` |
| `<ep-table>` | Styling a native `<table>` | `size` (sm, md), `striped`, `sticky-header`, `label`; sort with `aria-sort` on `<th>`, highlight with `aria-selected` on `<tr>` | |
| `<ep-date-picker>` | A date, typed or picked | `label`, `value` (YYYY-MM-DD), `name`, `min`, `max`, `locale`, `helper-text`, `error-text`, `size`, `required`, `disabled`, `readonly`; `isDateDisabled` property | `change` |
| `<ep-calendar>` | A month grid on its own | `value`, `min`, `max`, `locale`; `isDateDisabled` property | `change` |
| `<ep-empty-state>` | Nothing to show yet | `heading`, `heading-level`, `icon`, `size` (sm, md); slots `actions`, `media` | |

Form controls are form-associated: they submit with a surrounding `<form>`, reset with it, and report validity.

## Editor and AI tool support

The package ships a [Custom Elements Manifest](https://github.com/webcomponents/custom-elements-manifest) at `@eduportdesign/web-components/custom-elements.json` (also named in `package.json` under `customElements`). It lists every tag with its attributes, properties, methods, slots, CSS parts and events, generated from the source on each build. Editors and tools that read it give autocomplete and checks for `<ep-*>` markup, and AI coding assistants can read it to get the exact API instead of guessing.

## Icons

`<ep-icon>` ships with a curated set of [Tabler](https://tabler.io/icons) icons (see `scripts/generate-icons.mjs`). Add more with `registerIcons({ name: '<path d="…"/>' })`, using the inner markup of any Tabler outline icon. A full, tree-shakable icon package is planned.

## Conventions

- Lit without decorators: `static properties`, `declare` fields, defaults in the constructor.
- Each component renders a native element in shadow DOM where one exists, exposed as `part="base"`.
- Colors and radii come only from semantic `--ep-*` tokens, so every component follows the theme and corner mode.
- Keyboard support, visible focus (`:focus-visible`), ARIA where native semantics fall short, and `forced-colors` styles are required.

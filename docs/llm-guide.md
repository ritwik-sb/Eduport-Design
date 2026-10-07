# Eduport Design System: guide for AI coding assistants

This file is written for LLM coding assistants (Claude Code, Cursor, Copilot, Codex and others) that build UI in an app using the Eduport Design System. It is the short, exact version of the docs: what to install, which tags and props exist, which tokens to use, and the rules generated code must follow. Humans are welcome to read it too.

If something you need is not listed here, it does not exist yet. Don't invent tags, props, events or tokens. Build it from the tokens in this file and flag it as a gap.

Visual reference: the [component gallery](https://ritwik-sb.github.io/Eduport-Design/) shows every component in both themes and corner modes, and [Storybook](https://ritwik-sb.github.io/Eduport-Design/storybook/) has each one's controls.

Status: pre-release (0.x). Names can still change before 1.0.

## 1. The rules (read these first)

1. **Use a component when one exists.** `<ep-button>`, not a styled `<button>`. `<ep-text-field>`, not a bare `<input>`. See the list in section 4.
2. **Style everything else with semantic `--ep-*` tokens.** Never hard-code colors, and never use primitive color tokens (`--ep-color-brand-60`, `--ep-color-gray-20`, …). Use `--ep-color-text-primary`, `--ep-color-surface-raised` and so on. This is what makes dark mode and the corner modes work.
3. **Use the semantic radius tokens** (`--ep-radius-control`, `--ep-radius-container`, …), not `--ep-radius-md` or `px` values, so sharp-corner mode works.
4. **Use the space, type, shadow and motion tokens** instead of raw numbers.
5. **Give every control an accessible name.** Form controls take `label`. `<ep-icon-button>` requires `label`. Meaningful `<ep-icon>`s take `label`. See section 7.
6. **Don't reach into shadow DOM.** Style components only through their attributes, `::part()` and the tokens. Don't override internal classes, and don't rely on `--_*` private properties.
7. **One primary button per view or dialog.** Other actions are `secondary`, `tertiary` or `ghost`. Destructive actions are `danger`.

## 2. Install and set up

The packages are published to npm under `@eduportdesign/*`. (They are also on GitHub Packages as `@ritwik-sb/*`; install those with an alias such as `@eduportdesign/tokens@npm:@ritwik-sb/tokens` so imports stay the same. See the repo README.)

```bash
# Any framework, or plain HTML
npm install @eduportdesign/tokens @eduportdesign/web-components

# React
npm install @eduportdesign/tokens @eduportdesign/react

# The font (recommended; the tokens fall back to the system font without it)
npm install @fontsource-variable/inter
```

Import the CSS once, at the app entry point, before any component is used. Without `tokens.css` the components render with no colors.

```js
import '@fontsource-variable/inter';
import '@eduportdesign/tokens/css';                // required: all tokens, light theme, soft corners
import '@eduportdesign/tokens/css/theme-dark';     // optional: enables data-theme="dark"
import '@eduportdesign/tokens/css/corners-sharp';  // optional: enables data-corners="sharp"

// Web components: register every tag…
import '@eduportdesign/web-components';
// …or only the ones you use (smaller bundles)
import '@eduportdesign/web-components/components/button';
import '@eduportdesign/web-components/components/text-field';
```

React wrappers register their own web component on import, so a React app only needs the CSS imports plus:

```jsx
import { Button, TextField } from '@eduportdesign/react';
```

The tokens don't style `<body>`. Add this once to the app's global CSS:

```css
body {
  margin: 0;
  background: var(--ep-color-background-default);
  color: var(--ep-color-text-primary);
  font-family: var(--ep-font-family-sans);
  font-size: var(--ep-font-size-300);
  line-height: var(--ep-font-line-height-normal);
}
```

### Theme and corners

Two independent attributes on the root element. Both are optional and can change at runtime.

```html
<html data-theme="dark" data-corners="sharp">
```

| Attribute | Values | Default (attribute absent) | Needs |
|---|---|---|---|
| `data-theme` | `light`, `dark` | `light` | `theme-dark` CSS for `dark` |
| `data-corners` | `soft`, `sharp` | `soft` | `corners-sharp` CSS for `sharp` |

To follow the OS setting:

```js
const dark = matchMedia('(prefers-color-scheme: dark)');
const apply = () => (document.documentElement.dataset.theme = dark.matches ? 'dark' : 'light');
apply();
dark.addEventListener('change', apply);
```

The attributes also work on any subtree (`<section data-theme="dark">`), because the tokens are plain inherited CSS custom properties.

## 3. Using components

### Web components (HTML, Vue, Svelte, Angular, plain JS)

- Attributes are kebab-case (`helper-text`, `full-width`); the matching JS properties are camelCase (`helperText`, `fullWidth`).
- Boolean attributes are on when present: `<ep-button disabled>`.
- Events bubble and cross shadow DOM. Read the new value from `event.target`.

```html
<ep-text-field label="Email" name="email" type="email" required helper-text="We'll never share it."></ep-text-field>
<ep-button variant="primary" type="submit">Sign up</ep-button>

<script type="module">
  document.querySelector('ep-text-field').addEventListener('change', (e) => console.log(e.target.value));
</script>
```

In Angular add `CUSTOM_ELEMENTS_SCHEMA`. In Vue, set `compilerOptions.isCustomElement = (tag) => tag.startsWith('ep-')`.

### React (`@eduportdesign/react`)

- Component names are PascalCase without the prefix: `ep-text-field` → `TextField`, `ep-icon-button` → `IconButton`.
- Props are the camelCase properties: `helperText`, `errorText`, `fullWidth`.
- Event props: `onChange` and `onInput` on form controls, `onChange` on `Tabs`, `onRemove` on `Tag`, `onClose` on `Alert`, `Modal` and `Toast`. Read values from `e.target`.
- Slots are plain children with a `slot` attribute.

```jsx
import { useState } from 'react';
import { Button, TextField, Icon } from '@eduportdesign/react';

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');
  return (
    <form onSubmit={(e) => { e.preventDefault(); onSearch(query); }}>
      <TextField label="Search courses" type="search" value={query} onInput={(e) => setQuery(e.target.value)}>
        <Icon slot="prefix" name="search" />
      </TextField>
      <Button type="submit">Search</Button>
    </form>
  );
}
```

### Forms

`ep-button`, `ep-text-field`, `ep-textarea`, `ep-select`, `ep-checkbox`, `ep-radio-group` and `ep-switch` are form-associated. They submit their `name`/`value` with a surrounding native `<form>`, reset with it, take part in `required` validation, and `<ep-button type="submit">` submits the form. Use a real `<form>` and `FormData`; no extra wiring is needed.

To show a validation error, set `error-text` (`errorText`) to a non-empty message. Clear it to remove the error. Don't color the border yourself.

## 4. Component reference

All components: `@eduportdesign/web-components` tag → `@eduportdesign/react` name. Defaults in **bold**.

### Actions

**`<ep-button>` → `Button`**: starts an action.
- `variant`: **`primary`** | `secondary` | `tertiary` | `ghost` | `danger`
- `size`: `sm` (32px) | **`md`** (40px) | `lg` (48px)
- `type`: **`button`** | `submit` | `reset`
- `disabled`, `full-width` (`fullWidth`)
- Slots: default (label), `prefix`, `suffix` (for `<ep-icon>`)
- Event: native `click`

**`<ep-icon-button>` → `IconButton`**: an action shown only as an icon.
- `icon` (icon name), `label` (**required**, the accessible name)
- `variant`: same as button, default **`ghost`**; `size`: `sm` | **`md`** | `lg`; `disabled`
- Wrap it in `<ep-tooltip>` so sighted users see the label too.

### Form controls

**`<ep-text-field>` → `TextField`**: single-line text.
- `label`, `value`, `name`, `type` (**`text`** | `email` | `password` | `search` | `tel` | `url` | `number`), `placeholder`, `autocomplete`
- `helper-text`, `error-text` (non-empty = invalid), `size` (`sm` | **`md`** | `lg`)
- `required`, `disabled`, `readonly`
- Slots: `prefix`, `suffix`. Events: `input` (each keystroke), `change` (committed)

**`<ep-textarea>` → `Textarea`**: multi-line text.
- `label`, `value`, `name`, `placeholder`, `rows` (**4**), `maxlength` (shows a character count), `resize` (**`vertical`** | `none`)
- `helper-text`, `error-text`, `required`, `disabled`, `readonly`. Events: `input`, `change`

**`<ep-select>` → `Select`**: pick one option from a short list (native `<select>` inside).
- `label`, `value`, `name`, `placeholder`, `helper-text`, `error-text`, `size`, `required`, `disabled`
- Children: plain `<option value="…">` elements. Event: `change`

```html
<ep-select label="Grade" name="grade" placeholder="Choose a grade">
  <option value="9">Grade 9</option>
  <option value="10">Grade 10</option>
</ep-select>
```

**`<ep-checkbox>` → `Checkbox`**: on/off, or several choices from a list.
- `checked`, `indeterminate`, `name`, `value` (**`on`**), `helper-text`, `required`, `disabled`
- Slot: default (the label text). Event: `change`

**`<ep-radio-group>` + `<ep-radio>` → `RadioGroup` + `Radio`**: exactly one choice from a list.
- Group: `label`, `name`, `value`, `orientation` (**`vertical`** | `horizontal`), `helper-text`, `error-text`, `required`, `disabled`. Event: `change` (read the group's `value`)
- Radio: `value`, `disabled`; default slot is the label. Arrow keys move between options.

```html
<ep-radio-group label="Delivery" name="delivery" value="online">
  <ep-radio value="online">Online</ep-radio>
  <ep-radio value="classroom">Classroom</ep-radio>
</ep-radio-group>
```

**`<ep-switch>` → `Switch`**: a setting that takes effect immediately (no Save button).
- `checked`, `name`, `value`, `helper-text`, `disabled`; default slot is the label. Event: `change`
- Inside a form that has a Save button, use a checkbox instead.

### Display

**`<ep-badge>` → `Badge`**: a short status or count. Not interactive.
- `variant`: **`neutral`** | `accent` | `info` | `success` | `warning` | `danger`; `dot` (shows a colored dot)
- Slots: default (text), `prefix` (icon)

**`<ep-tag>` → `Tag`**: a keyword, category or active filter.
- `variant` (same values as badge), `size` (`sm` | **`md`**), `removable`, `disabled`
- Event: `ep-remove` (`onRemove`). The tag does not remove itself; remove it from your data.

**`<ep-avatar>` → `Avatar`**: a person.
- `name` (used for initials and the accessible name), `src` (image URL), `size`: `xs` | `sm` | **`md`** | `lg` | `xl`

**`<ep-card>` → `Card`**: groups related content.
- `variant`: **`outlined`** | `elevated` | `filled`
- Slots: default (body), `media`, `heading`, `header-actions`, `footer`
- Put a real heading in the heading slot: `<h3 slot="heading">`.

**`<ep-icon>` → `Icon`**: a Tabler outline icon, sized `1em` and colored `currentColor`.
- `name`, `label` (leave empty for decorative icons; set it when the icon alone carries meaning)
- Size it with `font-size`; change stroke with `--ep-icon-stroke-width`.
- Only a curated set is bundled (see section 6). Add others with `registerIcons()`.

### Navigation

**`<ep-tabs>` + `<ep-tab>` + `<ep-tab-panel>` → `Tabs` + `Tab` + `TabPanel`**: switch between views in place.
- Tabs: `value` (name of the selected panel), `label` (accessible name of the tab list). Event: `change` (read `value`)
- Tab: `panel` (name of the panel it controls), `disabled`; slots default, `prefix`
- Tab panel: `name`

```html
<ep-tabs value="overview" label="Course sections">
  <ep-tab panel="overview">Overview</ep-tab>
  <ep-tab panel="lessons">Lessons</ep-tab>
  <ep-tab-panel name="overview">…</ep-tab-panel>
  <ep-tab-panel name="lessons">…</ep-tab-panel>
</ep-tabs>
```

### Feedback and overlays

**`<ep-alert>` → `Alert`**: an inline message in the page.
- `variant`: **`info`** | `success` | `warning` | `danger`; `heading`; `dismissible`
- Slots: default (message), `actions`. Event: `ep-close` (`onClose`); the alert hides itself unless you call `preventDefault()`.
- An alert present at page load is not announced. If you insert one later and it must be announced, add `role="status"` (or `role="alert"` for urgent errors) before inserting it.

**`toast()` and `<ep-toast>` → `toast()` and `Toast`**: a brief, non-blocking notification.
- Prefer the function: `toast({ message, heading?, variant?, duration? })`. `variant` is `info` | `success` | `warning` | `danger`; `duration` is ms, default 5000, `0` keeps it open. It returns the element.
- Import from `@eduportdesign/web-components/components/toast` or `@eduportdesign/react`.
- Toasts are announced politely. Never put the only copy of important information, or a required action, in a toast.
- To change position, add `<ep-toaster placement="top-end">` (`bottom-end` default, `top-end`, `bottom-center`) once to the page.

**`<ep-tooltip>` → `Tooltip`**: a short text label on hover or focus.
- `content` (text), `placement`: **`top`** | `bottom` | `left` | `right`
- Wrap the trigger element: `<ep-tooltip content="Edit"><ep-icon-button icon="edit" label="Edit"></ep-icon-button></ep-tooltip>`
- Only plain text. Never put links, buttons or essential information in a tooltip. Don't use it on disabled elements.

**`<ep-modal>` → `Modal`**: a focused task or decision that blocks the page (native `<dialog>`).
- `open`, `heading` (required for the accessible name), `size`: `sm` | **`md`** | `lg`
- Slots: default (body), `footer` (buttons, primary action **last**)
- Methods: `show()`, `close()`. Event: `ep-close` after it closes for any reason (Escape, close button, `close()`); keep your state in sync there.

```jsx
<Modal heading="Delete course?" open={open} onClose={() => setOpen(false)} size="sm">
  This removes the course for all students.
  <Button slot="footer" variant="secondary" onClick={() => setOpen(false)}>Cancel</Button>
  <Button slot="footer" variant="danger" onClick={remove}>Delete</Button>
</Modal>
```

### Styling a component from outside

Use `::part()` for the parts each component exposes (`base` on most; `input`, `textarea`, `select`, `control`, `dialog`, `tooltip`, `track`, `thumb`, `remove`, `tablist`, `options`, `svg` where listed in the source JSDoc). Layout from the outside (margins, width in a grid, `full-width`) is fine. Changing colors, borders or radii of a component is not: if a variant is missing, ask for one.

## 5. Tokens

All tokens are CSS custom properties on `:root`. Full source: `packages/tokens/src` in the repo.

### Color (semantic only)

| Purpose | Tokens |
|---|---|
| Page background | `--ep-color-background-default`, `-subtle`, `-inverse`, `-scrim` (modal backdrop) |
| Surfaces (cards, panels, menus) | `--ep-color-surface-default`, `-raised`, `-sunken`, `-overlay` |
| Text | `--ep-color-text-primary`, `-secondary`, `-disabled`, `-inverse`, `-on-color` (on filled interactive/accent colors), `-link`, `-info`, `-success`, `-warning`, `-danger` |
| Borders | `--ep-color-border-default`, `-strong`, `-focus`, `-danger` |
| Interactive fills | `--ep-color-interactive-{primary,secondary,ghost,danger}-{default,hover,active}`, `--ep-color-interactive-disabled` |
| Feedback boxes | `--ep-color-feedback-{info,success,warning,danger}-{background,border}` |
| Brand accent (decoration, selected states, highlights) | `--ep-color-accent-default`, `--ep-color-accent-subtle` |

Pairing rules. These are the pairs the contrast check covers in both themes; stick to them:
- Text (`text-primary`, `-secondary`, `-link`, and the status colors `-info`, `-success`, `-warning`, `-danger`) on `background-default`, `background-subtle`, `surface-raised` or `surface-overlay`.
- `text-on-color` on the filled `interactive-{primary,secondary,danger}-{default,hover,active}` colors.
- `text-inverse` on `background-inverse`.
- `text-primary` or `text-link` on `accent-subtle`.
- `text-primary` or the matching status text on `feedback-*-background`.
- `border-strong`, `border-focus`, `border-danger` and `accent-default` reach 3:1 against the backgrounds above, so they work for non-text marks (icons, indicators, outlines). Don't put text on `accent-default`.
- `text-disabled` is exempt from contrast requirements; use it only for disabled UI.

If no token fits, don't hard-code a color and don't use a primitive. Note the gap and propose a new semantic token for both `light.json` and `dark.json`.

### Space

`--ep-space-{0,25,50,100,150,200,300,400,500,600,800}` = 0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64px. Use them for padding, margin and gap.

### Radius (semantic, follows the corner mode)

| Token | Use for | Soft | Sharp |
|---|---|---|---|
| `--ep-radius-indicator` | Small marks: checkbox, tag, badge, tooltip | 4px | 0 |
| `--ep-radius-control` | Buttons, inputs, menu items | 6px | 0 |
| `--ep-radius-container` | Cards, popovers, modals, toasts, panels | 10px | 0 |
| `--ep-radius-round` | Always round: avatars, pills, dots | 9999px | 9999px |

### Typography

- Families: `--ep-font-family-sans` (Inter, UI text), `--ep-font-family-mono` (JetBrains Mono, code and IDs).
- Sizes: `--ep-font-size-{100..900}` = 12, 14, 16, 18, 20, 24, 28, 32, 40px. Body text is `300` (16px); dense UI and secondary text `200` (14px); captions `100` (12px).
- Weights: `--ep-font-weight-{regular,medium,semibold,bold}`. Line heights: `--ep-font-line-height-{tight,snug,normal}` (tight for headings, normal for paragraphs).
- There are no heading components yet. Use real `<h1>`–`<h6>` elements in order and style them with these tokens.

### Borders, shadow, motion

- `--ep-border-width-thin`, `--ep-border-width-thick`
- `--ep-shadow-sm` (raised), `-md` (popovers, tooltips), `-lg` (modals)
- `--ep-motion-duration-fast` (100ms), `-normal` (200ms), `-slow` (300ms); `--ep-motion-easing-standard`, `-enter`, `-exit`

## 6. Icons

`<ep-icon>` ships with this set of [Tabler](https://tabler.io/icons) outline icons:

check, minus, x, chevron-down, chevron-up, chevron-left, chevron-right, selector, info-circle, circle-check, alert-triangle, alert-circle, user, plus, search, filter, adjustments-horizontal, settings, dots, dots-vertical, menu-2, home, layout-dashboard, school, book, books, notebook, certificate, clipboard-list, calendar, calendar-event, clock, bell, mail, message-circle, send, phone, users, user-plus, user-circle, id-badge-2, lock, lock-open, key, shield-check, logout, login, edit, pencil, trash, copy, download, upload, share, link, external-link, paperclip, file, file-text, folder, photo, video, microphone, player-play, player-pause, star, heart, bookmark, flag, tag, eye, eye-off, refresh, arrow-left, arrow-right, arrow-up, arrow-down, sun, moon, world, map-pin, chart-bar, chart-pie, trophy, help-circle, question-mark, bulb, sparkles, cloud-upload, printer, credit-card, wallet

Any other Tabler outline icon can be registered once at startup with the inner markup of its SVG:

```js
import { registerIcons } from '@eduportdesign/web-components/components/icon';
registerIcons({ 'brand-github': '<path d="…"/>' });
```

Don't import another icon library, and don't inline SVGs in markup. A full icon package (`@eduportdesign/icons`) is planned.

### Logos

Logo files live in `@eduportdesign/logos` (in the repo; not on npm yet). Never redraw the logo, set "eduport" in a font, or recolor an SVG; pick a file. The full list with use cases is in [packages/logos/README.md](../packages/logos/README.md) and machine-readable in `packages/logos/logos.json`.

| Where | File |
|---|---|
| Header or sign-in screen, light theme | `wordmark-orange.svg` |
| Header, dark theme, or on brand orange | `wordmark-white.svg` |
| Collapsed sidebar, tight space | `symbol-orange.svg` / `symbol-white.svg` |
| App icon, favicon, PWA manifest | `symbol-tile-brand.svg` |
| Eduport as the sender (notifications, chat avatar) | `symbol-circle-brand.svg` |
| Over a photo or busy background | `wordmark-card-light-*.svg` or `wordmark-pill-light.svg` |
| One-color print | `wordmark-black.svg` |

```html
<!-- Do: an image with alt="Eduport", swapped with the theme -->
<a href="/" class="home-link">
  <img class="logo-light" src="/brand/wordmark-orange.svg" alt="Eduport" height="32" />
  <img class="logo-dark" src="/brand/wordmark-white.svg" alt="Eduport" height="32" />
</a>
<style>
  [data-theme='dark'] .logo-light, :root:not([data-theme='dark']) .logo-dark { display: none; }
</style>
```

Keep clear space of half the wordmark's height around it, and don't show the wordmark under 80 px wide or the symbol under 24 px.

## 7. Accessibility (WCAG 2.1 AA is a requirement)

The components handle keyboard support, focus rings, ARIA roles and `forced-colors` themselves. Generated code still has to:

- **Name things.** Every form control gets a visible `label`. Don't replace a label with `placeholder`. Every `ep-icon-button` gets `label`. Icon-only links or custom controls get `aria-label`. `ep-tabs` gets `label` when the page has more than one tab set.
- **Use real structure.** Headings in order, `<main>`, `<nav>`, `<header>`, lists as `<ul>`. Use `<a href>` for navigation and `<ep-button>` for actions.
- **Keep focus visible.** Never set `outline: none` without a replacement. For your own focusable elements, use the same ring as the components:
  ```css
  .my-thing:focus-visible {
    outline: var(--ep-border-width-thick) solid var(--ep-color-border-focus);
    outline-offset: 2px;
  }
  ```
- **Don't rely on color alone.** Pair status colors with text or an icon.
- **Announce dynamic changes.** Use `toast()` for transient confirmations, `role="status"` on inserted alerts, and `error-text` for field errors (it is wired to `aria-describedby` and `aria-invalid`).
- **Respect reduced motion.** The components already do. For your own animation, use the motion tokens, animate only `opacity` and `transform`, keep it at or under 300ms, and disable movement under `@media (prefers-reduced-motion: reduce)`.
- **Support Windows High Contrast.** If you draw custom borders or indicators with `background`, add an `@media (forced-colors: active)` rule that uses system colors (`CanvasText`, `Highlight`, `ButtonText`).

## 8. Do and don't

```css
/* Don't */
.panel { background: #fff; color: #333; border-radius: 8px; padding: 15px; border: 1px solid #ddd; }
.panel { background: var(--ep-color-gray-10); }            /* primitive: breaks dark mode */
.panel { border-radius: var(--ep-radius-lg); }             /* primitive: ignores sharp corners */

/* Do */
.panel {
  background: var(--ep-color-surface-raised);
  color: var(--ep-color-text-primary);
  border: var(--ep-border-width-thin) solid var(--ep-color-border-default);
  border-radius: var(--ep-radius-container);
  padding: var(--ep-space-200);
  box-shadow: var(--ep-shadow-sm);
}
```

```html
<!-- Don't -->
<button class="btn-orange" onclick="save()">Save</button>
<input placeholder="Email">
<ep-icon-button icon="trash"></ep-icon-button>
<ep-button variant="primary">Save</ep-button><ep-button variant="primary">Publish</ep-button>

<!-- Do -->
<ep-button variant="primary" type="submit">Save</ep-button>
<ep-text-field label="Email" type="email" name="email"></ep-text-field>
<ep-tooltip content="Delete"><ep-icon-button icon="trash" label="Delete" variant="ghost"></ep-icon-button></ep-tooltip>
<ep-button variant="secondary">Save draft</ep-button><ep-button variant="primary">Publish</ep-button>
```

```jsx
// Don't: style the inside of a component, or invent props
<Button style={{ background: 'orange' }} color="orange" loading>Save</Button>

// Do: use an existing variant, and handle loading state in your own UI until a prop exists
<Button variant="primary" disabled={saving}>{saving ? 'Saving…' : 'Save'}</Button>
```

## 9. What doesn't exist yet

Build these from native elements plus tokens, and keep them accessible: links (style `<a>` with `--ep-color-text-link`), menus and dropdowns, popovers, tables, pagination, progress bars and spinners, skeletons, breadcrumbs, date pickers, comboboxes, file upload, and heading/text components. Planned components are listed in the repo README roadmap; check there before building one.

## 10. Add this to your app's agent instructions

Paste this into your app's `AGENTS.md`, `CLAUDE.md`, `.cursor/rules` or `.github/copilot-instructions.md`:

```md
## UI: Eduport Design System
This app uses the Eduport Design System (@eduportdesign/tokens, @eduportdesign/web-components, @eduportdesign/react).
Before writing UI, read https://github.com/ritwik-sb/Eduport-Design/blob/main/docs/llm-guide.md and follow it.
- Use <ep-*> components (React: @eduportdesign/react) whenever one exists; never invent props or tags.
- Style custom UI only with semantic --ep-* tokens (color, radius-indicator/control/container/round, space, font, shadow, motion). No hex values, no primitive tokens like --ep-color-brand-60.
- Every control has an accessible name; WCAG 2.1 AA is required.
```

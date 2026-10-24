# Eduport Design System: guide for AI coding assistants

This file is written for LLM coding assistants (Claude Code, Cursor, Copilot, Codex and others) that build UI in an app using the Eduport Design System. It is the short, exact version of the docs: what to install, which tags and props exist, which tokens to use, and the rules generated code must follow. Humans are welcome to read it too.

If something you need is not listed here, it does not exist yet. Don't invent tags, props, events or tokens. Build it from the tokens in this file and flag it as a gap.

Visual reference: the [component gallery](https://ritwik-sb.github.io/Eduport-Design/) shows every component in both themes and corner modes, and [Storybook](https://ritwik-sb.github.io/Eduport-Design/storybook/) has each one's controls.

Status: pre-release (0.x). Names can still change before 1.0.

## 1. The rules (read these first)

1. **Use a component when one exists.** `<ep-button>`, not a styled `<button>`. `<ep-text-field>`, not a bare `<input>`. See the list in section 4.
2. **Style everything else with semantic `--ep-*` tokens.** Never hard-code colors, and never use primitive color tokens (`--ep-color-brand-60`, `--ep-color-gray-20`, …). Use `--ep-color-text-primary`, `--ep-color-surface-raised` and so on. This is what makes dark mode and the corner modes work.
3. **Use the semantic radius tokens** (`--ep-radius-control`, `--ep-radius-container`, …), not `--ep-radius-md` or `px` values, so sharp-corner mode works.
4. **Use the space, layout, type, shadow and motion tokens** instead of raw numbers. Space inside a group is smaller than the space around it, and pages sit on the layout grid (section 5, Space and layout).
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
import '@eduportdesign/tokens/css/base';           // recommended: body, headings, text, links and focus (see below)

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

**Import the base stylesheet.** `tokens.css` only defines variables; it doesn't style any element. `@eduportdesign/tokens/css/base` styles the parts of a page that aren't components, so they match the components:

- `body`: background, text color, Inter, 16px, line height (`color-scheme` follows `data-theme` from the token files themselves)
- `h1`–`h6` on the type scale (32, 24, 20, 18, 16, 14px), semibold, tight line height
- links in `--ep-color-text-link`, `code`/`pre` in the mono font, `hr`, images that never overflow, a focus ring on native focusable elements
- `box-sizing: border-box` everywhere, and form elements inherit the font
- **Margins on headings, paragraphs and lists are 0.** Space things with `gap` on their parent (section 5 and the page skeleton below). For long-form text (help pages, rich text, terms), wrap it in `<div class="ep-prose">` to get reading spacing and a 68ch line length back.
- `.ep-visually-hidden` hides text visually but keeps it for screen readers.

It sits in a CSS cascade layer (`@layer ep-base`) with zero specificity, so any rule in your own CSS wins. Without it, text outside components falls back to the browser's serif font and default heading margins, which is the most common reason an app looks off.

If an app can't use it (for example it already has a reset it must keep), add at least this to its global CSS:

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

### Page skeleton

Build every screen on `<ep-app-shell>`. It lays out the sticky top bar, the side navigation (inline from 1024px, a drawer opened from the top bar below that) and the content area, and it adds the skip link, the `<main>` landmark, the page margin and the content width cap. Full rules are in [docs/layout.md](layout.md#page-structure).

```html
<ep-app-shell>
  <ep-top-bar slot="top-bar">
    <a slot="brand" href="/">Eduport Teach</a>
    <ep-text-field label="Search" hide-label type="search" placeholder="Search students" size="sm">
      <ep-icon slot="prefix" name="search"></ep-icon>
    </ep-text-field>
    <ep-icon-button slot="actions" icon="bell" label="Notifications"></ep-icon-button>
    <ep-menu slot="actions" label="Account">…</ep-menu>
  </ep-top-bar>

  <ep-side-nav slot="nav">
    <ep-side-nav-item href="/" icon="home">Home</ep-side-nav-item>
    <ep-side-nav-item href="/students" icon="users" current>Students</ep-side-nav-item>
    <ep-side-nav-group heading="Assessment">
      <ep-side-nav-item href="/grades" icon="certificate">Grades</ep-side-nav-item>
    </ep-side-nav-group>
    <ep-side-nav-item slot="footer" href="/settings" icon="settings">Settings</ep-side-nav-item>
  </ep-side-nav>

  <ep-page-header heading="Students">
    <ep-breadcrumbs slot="breadcrumbs">…</ep-breadcrumbs>
    Everyone enrolled in your classes this term.
    <ep-button slot="actions" variant="secondary">Export</ep-button>
    <ep-button slot="actions">Add student</ep-button>
  </ep-page-header>
  <div class="page">
    <section class="section">
      <h2>Overview</h2>
      <div class="grid">…cards…</div>
    </section>
  </div>
</ep-app-shell>
```

```css
.page { display: flex; flex-direction: column; gap: var(--ep-layout-section-gap); }
.section { display: flex; flex-direction: column; gap: var(--ep-space-200); }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr)); gap: var(--ep-layout-gutter); }
```

- Don't add your own `<main>`, skip link, page padding or `max-width`: the shell does all four. Use `full-width` on `<ep-app-shell>` for data-heavy screens (gradebooks, timetables) that need the whole width.
- `<ep-page-header>` comes first and already includes the space below it, so put it outside the `.page` wrapper and give the first section no margin. It is the page's `h1`.
- Mark the page the user is on with `current` on its `<ep-side-nav-item>` (exactly one). Choosing an item in the drawer closes it.
- On phones the top bar's middle slot (search) is hidden; offer search behind an icon button in `actions` instead.
- With the base stylesheet, anchor jumps and focused fields stop below the sticky top bar.
- With a sidebar the shell paints `--ep-color-background-canvas` and shows the content on a raised `--ep-color-surface-sheet`. Cards default to `variant="elevated"` (a ring and soft shadow, no border). Custom panels use `--ep-color-surface-raised` with `box-shadow: var(--ep-shadow-raised)`; use `--ep-color-border-default` borders only for dividers and `outlined` cards.
- Brand moments: `<ep-side-nav appearance="inverse">` is a dark rail in both themes (put the white logo in `slot="header"`; the shell then runs the rail the full height beside the top bar). `<ep-page-header variant="hero">` puts the title on the brand gradient with `eyebrow`, `aside` (stat tiles on `--ep-color-hero-chip`) and `art` (logo mark) slots; its `actions` sit below the hero. Use the hero once, on an app's landing page, not on every page. Keep text off the corner glow.

### Categorical color and dashboard patterns

- `--ep-color-category-{1..6}-{subtle,bold,on-bold,text}` tell things apart (a subject, a team, a calendar). They never mean good or bad; use the feedback and `text-success/danger` tokens for status. Map your own meanings to the numbers once and reuse them everywhere (Physics is always `1`).
- `tone="1"` to `tone="6"` is accepted by `ep-card` (tints its `media` area), `ep-icon-tile`, `ep-progress-ring` and `ep-stat`. Inside a toned card's `media` slot, content can read `--ep-tone-subtle`, `--ep-tone-bold`, `--ep-tone-on-bold` and `--ep-tone-text`.
- `ep-stat` (label, value, `note` slot; `variant="hero"` on the brand hero), `ep-progress-ring` (value 0 to max, `label` required), `ep-avatar-group` (`max`, `label`), `ep-icon-tile` (icon, tone, size). A course card is: toned `ep-card`, a row with an `ep-icon-tile` and an `ep-progress-ring` in `media`, the title in `heading`, and an `ep-avatar-group` plus an `ep-badge` in `footer`.

### Theme, corners, motion and contrast

Independent attributes on the root element. All are optional and can change at runtime.

```html
<html data-theme="dark" data-corners="sharp" data-motion="reduced" data-contrast="more">
```

| Attribute | Values | Default (attribute absent) | Needs |
|---|---|---|---|
| `data-theme` | `light`, `dark` | `light` | `theme-dark` CSS for `dark` |
| `data-corners` | `soft`, `sharp` | `soft` | `corners-sharp` CSS for `sharp` |
| `data-motion` | `reduced` | full motion, unless the OS asks for reduced motion | nothing extra |
| `data-contrast` | `more` | standard contrast, unless the OS asks for more contrast | nothing extra |

Use `data-motion="reduced"` for an in-app "Reduce motion" setting. The OS setting (`prefers-reduced-motion`) already applies on its own, and nothing overrides it.

Increased contrast works the same way: the OS setting (`prefers-contrast: more`, e.g. Increase Contrast on macOS and iOS) applies on its own, and `data-contrast="more"` is for an in-app setting. It turns `--ep-color-border-default` into the 3:1 `border-strong` and feedback borders into their status text color, so dividers and outlines stay visible. Custom UI that uses the semantic border tokens follows it with no extra work.

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
- `loading`: set while the action runs. Presses are ignored, `aria-busy` is set, and a spinner replaces the `prefix` icon if loading lasts over 400ms (then stays at least 500ms). Keep the label, or change it to a verb like "Saving…". Announce the result with `toast()` or inline text, not on the button. Prefer `loading` over `disabled` for in-progress actions.
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
- `hide-label` (`hideLabel`): keeps `label` for screen readers but hides it on screen. Only for fields whose purpose is obvious without it, such as top bar search with a search icon
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

**`<ep-date-picker>` → `DatePicker`**: a date, typed or picked from a calendar.
- `label`, `value` (always **`YYYY-MM-DD`**, or empty), `name`, `min`, `max` (both `YYYY-MM-DD`), `locale` (defaults to the page's `lang`)
- `helper-text`, `error-text`, `size`, `required`, `disabled`, `readonly`. Property `isDateDisabled: (date: Date) => boolean` greys out dates like weekends or holidays.
- People type in their locale's order (22/11/2026 for `en-IN`, 11/22/2026 for `en-US`); it is checked on blur. Text that isn't a date, or a date outside `min`/`max`, shows an error and sets `validity.badInput`, `rangeUnderflow` or `rangeOverflow`.
- Event: `change` (`onChange`); read `value`. Set `lang` on `<html>` so the format matches your users.

```html
<ep-date-picker label="Exam date" name="exam" min="2026-01-01" max="2026-12-31"></ep-date-picker>
```

**`<ep-calendar>` → `Calendar`**: the month grid on its own, for when it should always show. Same `value`, `min`, `max`, `locale`, `isDateDisabled`; event `change`. Arrows move by day and week, Home/End to the week's ends, Page Up/Down by month (with Shift, by year), Enter picks.

### Display

**`<ep-badge>` → `Badge`**: a short status or count. Not interactive.
- `variant`: **`neutral`** | `accent` | `info` | `success` | `warning` | `danger`; `dot` (shows a colored dot)
- Slots: default (text), `prefix` (icon)

**`<ep-tag>` → `Tag`**: a keyword, category or active filter.
- `variant` (same values as badge), `size` (`sm` | **`md`**), `removable`, `disabled`
- Event: `ep-remove` (`onRemove`). The tag does not remove itself; remove it from your data.

**`<ep-avatar>` → `Avatar`**: a person.
- `name` (used for initials and the accessible name), `src` (image URL), `size`: `xs` | `sm` | **`md`** | `lg` | `xl`

**`<ep-table>` → `Table`**: styles a native `<table>` you write inside it, so any cell content works.
- `size`: `sm` | **`md`**; `striped`; `sticky-header` (`stickyHeader`; give `<ep-table>` a `max-height`); `label` (name of the scroll area, defaults to the `<caption>`)
- Write real table markup: `<caption>`, `<thead>`, `<th scope="col">`, `<tbody>`, and `<th scope="row">` for row headers. A header cell for an actions column still needs text: use a visually hidden "Actions".
- Sorting: put a `<button>` in the `<th>` and set `aria-sort="ascending"` or `"descending"` on the sorted column's `<th>` (remove it from the others). Sort the data yourself on the button's click; the arrow follows `aria-sort`.
- Selection: put an `<ep-checkbox>` in each row and set `aria-selected="true"` on selected `<tr>`s for the highlight.
- Right-align numbers with `style="text-align: end"` on their cells. Empty results: an `<ep-empty-state size="sm">` in a `<td colspan>`. Many rows: `<ep-pagination>` under the table.
- When the table is wider than its container it scrolls sideways and becomes a focusable, named region, so keyboard users can scroll it.

```html
<ep-table>
  <table>
    <caption>Students</caption>
    <thead><tr><th scope="col" aria-sort="ascending"><button>Name</button></th><th scope="col">Section</th></tr></thead>
    <tbody><tr><td>Ananya Menon</td><td>11 A</td></tr></tbody>
  </table>
</ep-table>
```

**`<ep-card>` → `Card`**: groups related content.
- `variant`: `outlined` | **`elevated`** | `filled` (elevated is the default: a ring plus soft shadow on `surface-raised`, no border)
- Slots: default (body), `media`, `heading`, `header-actions`, `footer`
- Put a real heading in the heading slot: `<h3 slot="heading">`.

**`<ep-icon>` → `Icon`**: a Tabler outline icon, sized `1em` and colored `currentColor`.
- `name`, `label` (leave empty for decorative icons; set it when the icon alone carries meaning)
- Size it with `font-size`; change stroke with `--ep-icon-stroke-width`.
- Only a curated set is bundled (see section 6). Add others with `registerIcons()`.

**`<ep-empty-state>` → `EmptyState`**: what to show when a list, table or page has nothing in it yet.
- `heading` (what's empty), `heading-level` (`headingLevel`, **2**; match the page outline), `icon` (icon name), `size`: `sm` (cards, panels) | **`md`** (page, table)
- Slots: default (one or two sentences on why it's empty), `actions` (one primary button), `media` (an illustration instead of the icon)
- Say why it's empty and what to do next. For "no search results", offer to clear filters.

**`<ep-accordion>` + `<ep-accordion-item>` → `Accordion` + `AccordionItem`**: collapsible sections, like an FAQ.
- Accordion: `single` (only one section open at a time). Up/Down arrows move between headers, Home/End jump.
- Item: `heading`, `heading-level` (`headingLevel`, **3**; match the page outline), `open`, `disabled`; slots default (content), `prefix` (icon). Events: `ep-open` (`onOpen`), `ep-close` (`onClose`) when the user toggles it.
- Don't hide content most people need behind an accordion.

**`<ep-skeleton>` → `Skeleton`**: a placeholder in the shape of loading content.
- `variant`: **`text`** | `rect` | `circle`; `lines` (**1**, for `text`; the last of several is shorter)
- Size it with CSS `width`/`height`. Text skeletons follow the surrounding `font-size`.
- Skeletons are hidden from screen readers. Put `aria-busy="true"` on the region that is loading and remove it when the content arrives.

### Navigation

**`<ep-app-shell>` → `AppShell`**: the frame of every screen (see the page skeleton in section 2).
- Props: `nav-open` (the drawer below 1024px; the top bar's menu button toggles it), `full-width` (no content width cap)
- Slots: `top-bar` (an `<ep-top-bar>`), `nav` (an `<ep-side-nav>`), default (the page). Parts: `main`, `content`, `drawer`

**`<ep-top-bar>` → `TopBar`**: the bar across the top. Height is `--ep-layout-header-height`.
- Slots: `brand` (logo and product name), default (search or other global tools; hidden on phones), `actions` (icon buttons, account menu)
- `menu-button` and `menu-expanded` are set by `<ep-app-shell>`. Event: `ep-nav-toggle` (React `onNavToggle`) when its menu button is pressed

**`<ep-side-nav>` + `<ep-side-nav-item>` + `<ep-side-nav-group>` → `SideNav` + `SideNavItem` + `SideNavGroup`**: the app's main navigation.
- Side nav: `label` (landmark name, default **`Main`**); slots default (items and groups), `footer` (pinned to the bottom: Settings, Help)
- Item: `href` (required: items are always links), `icon`, `current` (the page the user is on); slots default (one or two words), `suffix` (a count, e.g. `<ep-badge>`)
- Group: `heading`; holds items. Use groups once there are more than about seven destinations

**`<ep-page-header>` → `PageHeader`**: the top of a page.
- Props: `heading` (the `h1`), `heading-level` (default 1)
- Slots: `breadcrumbs`, default (one-sentence description), `actions` (primary action last). Actions sit beside the title when there is room and below the description on narrow screens

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

**`<ep-breadcrumbs>` + `<ep-breadcrumb-item>` → `Breadcrumbs` + `BreadcrumbItem`**: where the page sits in the app.
- Breadcrumbs: `label` (landmark name, **`Breadcrumb`**)
- Item: `href`; default slot is the page name. The last item is the current page: it gets `aria-current="page"` and isn't a link, so leave its `href` empty.
- Long names truncate with an ellipsis; keep them short.

```html
<ep-breadcrumbs>
  <ep-breadcrumb-item href="/courses">Courses</ep-breadcrumb-item>
  <ep-breadcrumb-item>Physics for Class 11</ep-breadcrumb-item>
</ep-breadcrumbs>
```

**`<ep-menu>` + `<ep-menu-item>` + `<ep-menu-divider>` → `Menu` + `MenuItem` + `MenuDivider`**: a list of actions that opens from a button.
- Menu: `open`, `placement` (**`bottom`** | `top` | `left` | `right`; flips when there isn't room), `label` (defaults to the trigger's text). Methods `show()`, `hide()`.
- Slot `trigger`: an `<ep-button>` or `<ep-icon-button>`. The menu sets `aria-haspopup` and `aria-expanded` on it.
- Item: `value`, `variant` (**`default`** | `danger`), `disabled`; slots default (label), `prefix` (icon), `suffix` (shortcut hint).
- Event: `ep-select` (`onSelect`) with `detail: { value, item }`; the menu closes and focus returns to the trigger unless you call `preventDefault()`. Also `ep-open`, `ep-close`.
- Keyboard: Enter, Space or Down opens on the first item, Up opens on the last; arrows, Home/End and typing a letter move; Escape closes.
- Menus are for actions. To choose a form value, use `<ep-select>` or a radio group. Put destructive items last, after a divider.

```html
<ep-menu>
  <ep-icon-button slot="trigger" icon="dots-vertical" label="Row actions"></ep-icon-button>
  <ep-menu-item value="edit"><ep-icon slot="prefix" name="edit"></ep-icon>Edit</ep-menu-item>
  <ep-menu-divider></ep-menu-divider>
  <ep-menu-item value="delete" variant="danger">Delete</ep-menu-item>
</ep-menu>
```

**`<ep-pagination>` → `Pagination`**: move between pages of a long list or table.
- `page` (1-based), `total-pages` (`totalPages`), `label` (landmark name, **`Pagination`**; name it after the list, like "Students")
- Event: `change` (`onChange`); read `page` and load that page. It doesn't fetch anything itself.
- Renders buttons, not links. Below 400px of container width it collapses to "Page 3 of 12" with previous and next.

```jsx
<Pagination label="Students" page={page} totalPages={pages} onChange={(e) => setPage(e.target.page)} />
```

### Feedback and overlays

**`<ep-alert>` → `Alert`**: an inline message in the page.
- `variant`: **`info`** | `success` | `warning` | `danger`; `heading`; `dismissible`
- Slots: default (message), `actions`. Event: `ep-close` (`onClose`); the alert hides itself unless you call `preventDefault()`.
- An alert present at page load is not announced. If you insert one later and it must be announced, add `role="status"` (or `role="alert"` for urgent errors) before inserting it.

**`toast()` and `<ep-toast>` → `toast()` and `Toast`**: a brief, non-blocking notification.
- Prefer the function: `toast({ message, heading?, variant?, duration? })`. `variant` is `info` | `success` | `warning` | `danger`; `duration` is ms; leave it out for the default (6s, plus 1s per 20 words over 20); `0` keeps it open. A toast with an `action` slot never closes on its own. It returns the element.
- Import from `@eduportdesign/web-components/components/toast` or `@eduportdesign/react`.
- Toasts are announced politely. Never put the only copy of important information, or a required action, in a toast.
- To change position, add `<ep-toaster placement="top-end">` (`bottom-end` default, `top-end`, `bottom-center`) once to the page.

**`<ep-tooltip>` → `Tooltip`**: a short text label on hover or focus.
- `content` (text), `placement`: **`top`** | `bottom` | `left` | `right`
- Opens 500ms after hover (at once on keyboard focus, or when moving from another tooltip). Don't build your own delay.
- Wrap the trigger element: `<ep-tooltip content="Edit"><ep-icon-button icon="edit" label="Edit"></ep-icon-button></ep-tooltip>`
- Only plain text. Never put links, buttons or essential information in a tooltip. Don't use it on disabled elements.

**`<ep-popover>` → `Popover`**: interactive content anchored to a button, like a filter form.
- `open`, `placement` (**`bottom`** | `top` | `left` | `right`), `label` (accessible name of the panel; defaults to the trigger's text). Methods `show()`, `hide()`. Events `ep-open` (`onOpen`), `ep-close` (`onClose`).
- Slot `trigger` for the button; the default slot is the content. Focus moves to the first control inside on open; Escape, an outside click or tabbing away closes it.
- Non-modal. For a task that must block the page, use `<ep-modal>`; for plain text on hover, `<ep-tooltip>`; for a list of actions, `<ep-menu>`.

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

**`<ep-progress-bar>` → `ProgressBar`**: how far a task has got.
- `label` (**required**, the accessible name; shown above the bar), `value` (0 to `max`; **leave unset for indeterminate**), `max` (**100**)
- `show-value` (`showValue`, shows the percentage), `hide-label` (`hideLabel`), `helper-text` (`helperText`, like "2 of 5 MB")
- `variant`: **`default`** | `success` | `danger` (finished or failed); `size`: `sm` (4px) | **`md`** (8px)

**`<ep-spinner>` → `Spinner`**: a short wait of unknown length.
- `label` (**`Loading`**; set `label=""` when nearby text already says it, like a button that reads "Saving"), `size`: `sm` | **`md`** | `lg`
- In a button, don't add one yourself: set `loading` on `<ep-button>`, which shows its own spinner with the right delay.
- Use a skeleton for loading page content, a progress bar when you know how much is left, and a spinner only for short waits.

### Styling a component from outside

Use `::part()` for the parts each component exposes (`base` on most; `input`, `textarea`, `select`, `control`, `dialog`, `tooltip`, `track`, `thumb`, `remove`, `tablist`, `options`, `svg` where listed in the source JSDoc). Layout from the outside (margins, width in a grid, `full-width`) is fine. Changing colors, borders or radii of a component is not: if a variant is missing, ask for one.

## 5. Tokens

All tokens are CSS custom properties on `:root`. Full source: `packages/tokens/src` in the repo.

### Color (semantic only)

| Purpose | Tokens |
|---|---|
| Page background | `--ep-color-background-default`, `-subtle`, `-inverse`, `-scrim` (modal backdrop) |
| Surfaces (cards, panels, menus) | `--ep-color-surface-default`, `-raised`, `-sunken`, `-overlay`, `-muted` (tinted fill) |
| Text | `--ep-color-text-primary`, `-secondary`, `-disabled`, `-inverse`, `-on-primary` (on the brand-orange primary fill), `-on-color` (on the danger fill), `-link`, `-info`, `-success`, `-warning`, `-danger` |
| Borders | `--ep-color-border-default`, `-strong`, `-focus`, `-danger` |
| Interactive fills | `--ep-color-interactive-{primary,secondary,ghost,danger}-{default,hover,active}`, `--ep-color-interactive-disabled` |
| Feedback boxes | `--ep-color-feedback-{info,success,warning,danger}-{background,border}` |
| Brand accent (decoration, selected states, highlights) | `--ep-color-accent-default`, `--ep-color-accent-subtle` |

Pairing rules. These are the pairs the contrast check covers in both themes; stick to them:
- Text (`text-primary`, `-secondary`, `-link`, and the status colors `-info`, `-success`, `-warning`, `-danger`) on `background-default`, `background-subtle`, `surface-raised`, `surface-overlay` or `surface-muted`.
- `text-on-primary` (white) on `interactive-primary-{default,hover,active}` (4.53:1 and up). The primary fill is the brand orange darkened just enough for white text; never put white text on the exact logo orange `--ep-color-brand-50`, which is 3.01:1.
- `text-on-color` (white) on `interactive-danger-{default,hover,active}`.
- `text-primary` on `interactive-{secondary,ghost}-{hover,active}`. The secondary button is outlined, with a clear fill.
- `text-inverse` on `background-inverse`.
- `text-primary` or `text-link` on `accent-subtle`.
- `text-primary` or the matching status text on `feedback-*-background`.
- `border-strong`, `border-focus`, `border-danger` and `accent-default` reach 3:1 against the backgrounds above, so they work for non-text marks (icons, indicators, outlines). Don't put text on `accent-default`.
- `text-disabled` is exempt from contrast requirements; use it only for disabled UI.

If no token fits, don't hard-code a color and don't use a primitive. Note the gap and propose a new semantic token for both `light.json` and `dark.json`.

### Space and layout

Full rules: `docs/layout.md`.

`--ep-space-{0,25,50,100,150,200,300,400,500,600,800}` = 0, 2, 4, 8, 12, 16, 24, 32, 40, 48, 64px. Use them for padding, margin and gap; prefer `gap` over margins between siblings.

| Step | Use for |
|---|---|
| `50` (4px) | Icon to text in small items, label to helper text |
| `100` (8px) | Icon to text in buttons, between buttons in a group, between tags |
| `150` (12px) | Padding in menus, tooltips, list rows |
| `200` (16px) | Card padding, related controls in a row |
| `300` (24px) | Between form fields, heading to its content |
| `400` (32px) | Between groups inside a section |
| `600` (48px) | Between form sections |

Layout tokens change with viewport width on their own (mobile first, breakpoints `md` 600px, `lg` 1024px, `xl` 1440px):

| Token | base / md / lg / xl |
|---|---|
| `--ep-layout-columns` | 4 / 8 / 12 / 12 |
| `--ep-layout-margin` (page inline padding) | 16 / 24 / 32 / 40px |
| `--ep-layout-gutter` (gap between columns and cards) | 16 / 24 / 24 / 32px |
| `--ep-layout-section-gap` (between page sections) | 32 / 40 / 48 / 48px |
| `--ep-layout-header-height` (top bar, sticky offsets) | 56 / 64 / 64 / 64px |
| `--ep-layout-sidebar-width` (inline side nav, lg and up) | 256px |
| `--ep-layout-width-{prose,form,page}` (max widths) | 68ch, 560px, 1280px |

```css
.page { display: flex; flex-direction: column; gap: var(--ep-layout-section-gap); max-width: calc(var(--ep-layout-width-page) + 2 * var(--ep-layout-margin)); margin-inline: auto; padding-inline: var(--ep-layout-margin); }
.grid { display: grid; grid-template-columns: repeat(var(--ep-layout-columns), minmax(0, 1fr)); gap: var(--ep-layout-gutter); }
.form { display: flex; flex-direction: column; gap: var(--ep-space-300); max-width: var(--ep-layout-width-form); }
```

- CSS variables don't work inside `@media`; write `@media (min-width: 1024px)` or use `$ep-breakpoint-lg` (SCSS) / `BreakpointLg` (JS).
- Breakpoints decide layout; `pointer: coarse` (density) decides control size. Never use one for the other.
- Forms are one column. Paragraphs cap at `--ep-layout-width-prose`. Nothing scrolls sideways at 320px wide except data tables.
- No layout classes or layout components ship yet; write the CSS above in your app, starting from the page skeleton in section 2.

### Size and density

| Token | Use for | Compact (default) | Touch |
|---|---|---|---|
| `--ep-size-control-{sm,md,lg}` | Height of custom buttons, inputs and similar controls | 32 / 40 / 48px | 36 / 44 / 52px |
| `--ep-size-target-min` | Minimum hit area for anything clickable | 24px | 44px |
| `--ep-font-size-input` | Text typed into custom inputs | 14px | 16px |
| `--ep-size-icon-{sm,md,lg}` | Icons inside controls | 16 / 18 / 20px | same |

Touch density applies on its own on phones and tablets (`pointer: coarse`); `data-density="touch|compact"` on `<html>` or a subtree forces one. Custom inputs must use `--ep-font-size-input`, or iOS Safari zooms the page on focus.

### Radius (semantic, follows the corner mode)

| Token | Use for | Soft | Sharp |
|---|---|---|---|
| `--ep-radius-indicator` | Small marks: checkbox, tag, badge, tooltip | 4px | 0 |
| `--ep-radius-control` | Buttons, inputs, menu items | 6px | 0 |
| `--ep-radius-container` | Cards, popovers, modals, toasts, panels | 10px | 0 |
| `--ep-radius-round` | Always round: avatars, pills, dots | 9999px | 9999px |

### Typography

- Families: `--ep-font-family-sans` (Inter for UI text, falling back to Noto Sans Malayalam for Malayalam), `--ep-font-family-display` (Bricolage Grotesque, used by the heading roles `heading-xl/lg/md`; load it with `import '@fontsource-variable/bricolage-grotesque/opsz.css'`, and headings fall back to Inter if you don't), `--ep-font-family-mono` (JetBrains Mono, code and IDs).
- Sizes: `--ep-font-size-{100..900}` = 12, 14, 16, 18, 20, 24, 28, 32, 40px. Body text is `300` (16px); dense UI and secondary text `200` (14px); captions `100` (12px).
- Weights: `--ep-font-weight-{regular,medium,semibold,bold}`. Line heights: `--ep-font-line-height-{tight,snug,normal}` (tight for headings, normal for paragraphs).
- Type roles: `--ep-font-{role}` are `font` shorthands (weight, size/line height, family), so one declaration sets the whole style. Use them for custom UI instead of combining the size, weight and line-height tokens by hand:

| Token | Size | Use for |
|---|---|---|
| `--ep-font-heading-xl` | 32px semibold | Page titles (h1); add `letter-spacing: -0.02em` |
| `--ep-font-heading-lg` | 24px semibold | Section titles (h2); add `letter-spacing: -0.01em` |
| `--ep-font-heading-md` | 20px semibold | Subsection and card titles (h3) |
| `--ep-font-heading-sm` | 18px semibold | Small headings (h4), dialog and panel titles |
| `--ep-font-heading-xs` | 16px semibold | Group labels inside a section (h5) |
| `--ep-font-body-lg` / `-md` / `-sm` | 18 / 16 / 14px regular | Lead text / default text / secondary and dense text |
| `--ep-font-label-md` / `-sm` | 14 / 12px medium | Labels, nav items / badges, captions, metadata |
| `--ep-font-code-md` | 14px mono | Inline code and IDs |

```css
.stat-value { font: var(--ep-font-heading-lg); }
.stat-caption { font: var(--ep-font-label-sm); color: var(--ep-color-text-secondary); }
```

- There are no heading components. Use real `<h1>`–`<h6>` elements in order; the base stylesheet (section 2) styles them with the heading roles. Pick the level for the page outline, not the look; if a heading needs a different look, set `font` to another role.

### Borders, shadow, motion

- `--ep-border-width-thin`, `--ep-border-width-thick`
- `--ep-shadow-raised` (cards, tooltips: things just above the page), `--ep-shadow-overlay` (menus, popovers, dialogs, toasts). Both are tuned per theme: darker and tighter in dark, where a soft gray shadow disappears. Pair them with `--ep-color-surface-raised` and `--ep-color-surface-overlay`. The primitive `--ep-shadow-{sm,md,lg}` stay for compatibility but don't change with the theme.
- `--ep-motion-duration-fast` (100ms), `-normal` (200ms), `-slow` (300ms), `-slower` (400ms, drawers only), `-move` (200ms, movement inside a control); `--ep-motion-easing-standard`, `-enter`, `-exit`
- `--ep-motion-distance-sm` (4px, overlay enter offset), `-md` (8px, toast enter offset); `--ep-motion-scale-enter` (0.98, modal)
- Under reduced motion (OS setting or `data-motion="reduced"`) distances become 0, `-move` becomes 0ms and every duration caps at 100ms, so write `transform: translateY(var(--ep-motion-distance-sm))` and the slide disappears on its own while the fade stays.
- Motion only explains a change: state change, enter/exit, spatial continuity or progress. Buttons and interactive cards rise 2px on hover and buttons press to 0.98 (both are zero under reduced motion); small marks (switch thumb, tick, dot) may overshoot. No shake, ripple, bounce on anything larger, or animated counters. Full rules: [docs/motion.md](motion.md).

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
- **Respect reduced motion.** The components already do. For your own animation, use the motion tokens (durations, easings, and `distance`/`scale` for movement), animate only `opacity` and `transform`, and keep it at or under 300ms. The tokens then handle reduced motion for you. A loading spinner is the one thing that keeps moving.
- **Support Windows High Contrast.** If you draw custom borders or indicators with `background`, add an `@media (forced-colors: active)` rule that uses system colors (`CanvasText`, `Highlight`, `ButtonText`).

## 8. Do and don't

```css
/* Don't */
.panel { background: #fff; color: #333; border-radius: 8px; padding: 15px; border: 1px solid #ddd; }
.panel { background: var(--ep-color-gray-10); }            /* primitive: breaks dark mode */
.panel { border-radius: var(--ep-radius-lg); }             /* primitive: ignores sharp corners */

.form > * + * { margin-top: 20px; }                       /* off-scale, and margins instead of gap */

/* Do */
.form { display: flex; flex-direction: column; gap: var(--ep-space-300); }
.panel {
  background: var(--ep-color-surface-raised);
  color: var(--ep-color-text-primary);
  border: var(--ep-border-width-thin) solid var(--ep-color-border-default);
  border-radius: var(--ep-radius-container);
  padding: var(--ep-space-200);
  box-shadow: var(--ep-shadow-raised);
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
<Button style={{ background: 'orange' }} color="orange" busy>Save</Button>

// Do: use an existing variant, and the loading prop for in-progress actions
<Button variant="primary" loading={saving}>{saving ? 'Saving…' : 'Save'}</Button>
```

## 9. What doesn't exist yet

Build these from native elements plus tokens, and keep them accessible: links (style `<a>` with `--ep-color-text-link`), date range pickers, comboboxes, file upload, heading/text components, and a bottom tab bar for phones. Planned components are listed in the repo README roadmap; check there before building one.

## 10. Add this to your app's agent instructions

Paste this into your app's `AGENTS.md`, `CLAUDE.md`, `.cursor/rules` or `.github/copilot-instructions.md`:

```md
## UI: Eduport Design System
This app uses the Eduport Design System (@eduportdesign/tokens, @eduportdesign/web-components, @eduportdesign/react).
Before writing UI, read https://github.com/ritwik-sb/Eduport-Design/blob/main/docs/llm-guide.md and follow it. Before building an app shell or a new kind of page, also read https://github.com/ritwik-sb/Eduport-Design/blob/main/docs/layout.md.
- Import @eduportdesign/tokens/css and @eduportdesign/tokens/css/base once at the entry point, plus @fontsource-variable/inter. Don't add another CSS reset or framework on top.
- Build every screen on <ep-app-shell> with <ep-top-bar>, <ep-side-nav> and an <ep-page-header> first in the content (the guide's page skeleton), and space everything with gap and the --ep-space-* / --ep-layout-* tokens. Headings and paragraphs have no margins.
- Use <ep-*> components (React: @eduportdesign/react) whenever one exists; never invent props or tags.
- Style custom UI only with semantic --ep-* tokens (color, radius-indicator/control/container/round, space, layout, font, shadow, motion). No hex values, no primitive tokens like --ep-color-brand-60.
- Every control has an accessible name; WCAG 2.1 AA is required.
- Animate only with --ep-motion-* tokens (opacity and transform, 300ms max); see docs/motion.md.
```

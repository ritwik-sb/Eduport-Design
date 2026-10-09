# Spacing and layout

How space, grids and page structure work in Eduport apps, from a 4px gap inside a tag up to a full dashboard. The rules apply the same way on phones, tablets and desktop; only a handful of layout tokens change with screen width.

**In one paragraph:** every distance is a step on the space scale. Space inside a group is always smaller than the space around it. Pages sit on a 4, 8 or 12 column grid whose margin and gutter grow with the viewport. Width decides layout; pointer type decides control size; the two never stand in for each other.

## Principles

1. **Use the scale, never a one-off number.** Every margin, padding and gap is a `--ep-space-*` or `--ep-layout-*` token. If nothing fits, the design is usually wrong, not the scale. Borders (1px, 2px) and optical nudges inside a component are the only exceptions.
2. **Proximity carries meaning.** Things that belong together sit closer than things that don't. Space between groups should be at least **twice** the space within them (a label 4px from its field, fields 24px apart, form sections 48px apart). When everything is evenly spaced, nothing reads as a group.
3. **8px rhythm for layout, 4px for detail.** Page and section spacing uses steps that are multiples of 8px (`100` and up). The 2px and 4px steps are for the inside of small components: icon to text, badge padding, label to helper text.
4. **Mobile first.** Write the phone layout as the default and add `min-width` queries for larger screens. Content stacks in one column by default and spreads out as room appears.
5. **Let content set height.** Avoid fixed heights on anything that holds text. Translations, Malayalam script, user zoom and WCAG text-spacing overrides all make text taller.
6. **Use `gap`, not margins, between siblings.** Flex and grid `gap` never collapses, never doubles, and doesn't need a `:last-child` fix. Use margins only to separate a component from unrelated content.
7. **Use logical properties.** `padding-inline`, `margin-block-start`, `inset-inline-end` and friends, so layouts flip correctly if a right-to-left language is ever added.

## Space scale

The scale is on a 4px base. Step names are hundredths of 8px, so `100` = 8px and `300` = 24px. Gaps in the numbering (no `700`) are deliberate: fewer choices make spacing more consistent.

| Token | Value | Use for |
|---|---|---|
| `--ep-space-0` | 0 | Resetting; flush edges |
| `--ep-space-25` | 2px | Optical nudges, badge and tag padding-block |
| `--ep-space-50` | 4px | Icon to text in small items; label to helper text; between stacked lines of meta text |
| `--ep-space-100` | 8px | Icon to text in buttons; between buttons in a group; between chips or tags; label to field |
| `--ep-space-150` | 12px | Padding in small containers (menus, tooltips, list rows); between items in a dense list |
| `--ep-space-200` | 16px | Card padding (`<ep-card>`); between related controls in a row; phone page margin and gutter |
| `--ep-space-300` | 24px | **Between form fields**; padding of large panels and modals; heading to the content it introduces |
| `--ep-space-400` | 32px | Between groups inside a section (fieldsets, card rows); phone section gap |
| `--ep-space-500` | 40px | Between page header and content on large screens; tablet section gap |
| `--ep-space-600` | 48px | Between major page sections on desktop |
| `--ep-space-800` | 64px | Empty states and onboarding screens; generous top and bottom page padding |

### Common pairings

| Inside | Between | Example |
|---|---|---|
| 4px | 24px | Label + field + helper, then the next field |
| 8px | 16px | Buttons in a group, then the group and the surrounding text |
| 16px | 16px to 32px (`--ep-layout-gutter`) | Card padding, then the gap between cards on the grid |
| 24px | 48px (`--ep-layout-section-gap`) | Heading to section content, then the next section |

### Density and spacing

Touch density (on by itself for `pointer: coarse`, see [foundations](./foundations.md#density)) makes controls taller. It does **not** change the space scale, so layouts stay the same shape on every device. Two things to check on touch screens:

- Keep at least 8px (`--ep-space-100`) between neighbouring tap targets, so a thumb can't hit two.
- A row of small buttons at touch density is taller; let rows wrap instead of fixing their height.

## Layout grid

Pages sit on a column grid. The column count, page margin and gutter change at each breakpoint and come from layout tokens, so a page written once adapts on its own.

| Breakpoint | Min width | Typical devices | Columns | Margin | Gutter | Section gap | Header |
|---|---|---|---|---|---|---|---|
| base | 0 | Phones in portrait | 4 | 16px | 16px | 32px | 56px |
| `md` | 600px | Large phones in landscape, small tablets, narrow windows | 8 | 24px | 24px | 40px | 64px |
| `lg` | 1024px | Tablets in landscape, laptops | 12 | 32px | 24px | 48px | 64px |
| `xl` | 1440px | Large monitors | 12 | 40px | 32px | 48px | 64px |

```css
.page {
  max-width: calc(var(--ep-layout-width-page) + 2 * var(--ep-layout-margin));
  margin-inline: auto;
  padding-inline: max(var(--ep-layout-margin), env(safe-area-inset-left)) max(var(--ep-layout-margin), env(safe-area-inset-right));
}

.grid {
  display: grid;
  grid-template-columns: repeat(var(--ep-layout-columns), minmax(0, 1fr));
  gap: var(--ep-layout-gutter);
}

/* Phone first: every item spans all 4 columns, then narrows as columns appear. */
.grid > * { grid-column: 1 / -1; }
@media (min-width: 600px) {
  .grid > .half { grid-column: span 4; }          /* 2 up on tablets */
}
@media (min-width: 1024px) {
  .grid > .half { grid-column: span 6; }
  .grid > .third { grid-column: span 4; }         /* 3 up */
  .grid > .two-thirds { grid-column: span 8; }
}
```

The `env(safe-area-inset-*)` part keeps content clear of the notch and rounded corners on phones held sideways (it needs `viewport-fit=cover` in the viewport meta tag).

### Breakpoints

- **Named by width, not device.** `md`, `lg` and `xl` describe the space available. A phone in landscape can be `md`, and a desktop browser in split view can be base. Never read a breakpoint as "this is a tablet".
- **Width is not input.** Use breakpoints for layout and `pointer: coarse` (density) for control size. A laptop with a touch screen and a tablet with a keyboard both exist.
- **CSS variables can't go inside `@media`.** Write the value (`@media (min-width: 1024px)`), or use `$ep-breakpoint-lg` from the SCSS export or `BreakpointLg` from the JS export. `--ep-breakpoint-*` exists so scripts can read it with `getComputedStyle`.
- **Use container queries inside components.** A card in a narrow sidebar should respond to its own width, not the viewport's. Breakpoints are for page-level layout.

### Content widths

Line length matters more than screen size. Even on a 2560px monitor, cap content to one of these:

| Token | Value | Use for |
|---|---|---|
| `--ep-layout-width-prose` | 68ch | Running text: lesson content, articles, long descriptions, help |
| `--ep-layout-width-form` | 560px | Single-column forms, settings pages, sign-in |
| `--ep-layout-width-page` | 1280px | The default cap for page content |
| none | 100% | Data-heavy screens (tables, timetables, gradebooks) that need every pixel |

Paragraphs inside a wider page still get `max-width: var(--ep-layout-width-prose)`.

## Page structure

Most Eduport screens follow one shell. From the outside in:

```
┌──────────────────────────────────────────────────────────┐
│ Top bar  (--ep-layout-header-height, sticky)              │
├────────────┬─────────────────────────────────────────────┤
│ Side nav   │  Page header                                 │
│ (lg+ only, │   breadcrumb · title · description · actions │
│  --ep-     │  ── 24px (md: 32px) ──                       │
│  layout-   │  Section                                     │
│  sidebar-  │   heading ── 16px ── content (grid of cards) │
│  width)    │  ── --ep-layout-section-gap ──               │
│            │  Section                                     │
└────────────┴─────────────────────────────────────────────┘
```

### App shell

- **Top bar.** Height `--ep-layout-header-height` (56px on phones, 64px from `md`). Holds the product mark, global search and the account menu. When sticky, set `scroll-padding-top: var(--ep-layout-header-height)` on `html` so anchor links and focused fields don't land underneath it.
- **Side navigation.** Shows inline at `--ep-layout-sidebar-width` (256px) from `lg`. Below `lg` it becomes a modal drawer opened from a menu button in the top bar. On phones, apps with three to five top-level destinations can use a bottom bar instead; never both.
- **Content area.** Takes the remaining width, applies the page margin, and caps content at `--ep-layout-width-page` unless the screen is data-heavy.

### Page header

The first thing in the content area. In order: breadcrumb (optional), title (`h1`, one per page), a one-line description (optional), and page-level actions.

- Title to description: `--ep-space-100`. Breadcrumb to title: `--ep-space-100`.
- Actions sit at the inline end of the title row from `md`. On phones they move below the description, full width if there are one or two, or into an overflow menu if there are more.
- Page header to first section: `--ep-space-300` on phones, `--ep-space-400` from `md`.

### Sections

- Separate sections with `--ep-layout-section-gap`. Add a divider only when sections are visually similar and the space alone doesn't separate them.
- Section heading (`h2`) to its content: `--ep-space-200`. Heading to a one-line section description: `--ep-space-50`, then `--ep-space-200` to content.
- Use headings, not just space, to mark sections, so screen-reader users can jump between them.

### Cards on the grid

- Gap between cards is `--ep-layout-gutter`, so cards line up with everything else on the grid.
- Card padding is `--ep-space-200`, which `<ep-card>` applies. Don't add padding around its slots; nest content directly.
- Typical spans: 4 of 4 on phones; 4 of 8 (two up) on tablets; 4 of 12 (three up) or 3 of 12 (four up) on desktop. Prefer `grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))` for collections of equal cards, so the count follows the space.

### Forms

- One column. Two-column forms are slower to fill and break the reading order; pair fields side by side only when they are one answer (first and last name, start and end date).
- Cap at `--ep-layout-width-form`. Fields stack with `--ep-space-300` between them; fieldsets or form sections with `--ep-space-600`.
- The primary action goes at the end of the form, aligned with the fields' inline start on phones (full width) and at the inline end of the button row from `md`. Secondary actions sit before it in the same row, `--ep-space-100` apart.

### Overlays

- Modals keep at least `--ep-layout-margin` from every viewport edge. On phones a modal may become full screen.
- Popovers and menus stay within the viewport; flip rather than clip.

## Accessibility

- **Reflow (WCAG 1.4.10).** At 320 CSS px wide (a 1280px screen at 400% zoom) nothing scrolls horizontally except content that needs two dimensions, such as data tables and timetables. Mobile-first layouts pass this almost for free; test it.
- **Text spacing (1.4.12).** No content may be clipped when users increase line height, letter spacing or paragraph spacing. Don't put fixed heights or `overflow: hidden` on text containers.
- **Target spacing (2.5.8).** Targets under 24px need 24px of clear space around them. Touch density already raises targets to 44px; keep at least 8px between neighbouring ones.
- **Reading and focus order follow the DOM.** Don't reorder visually with `order`, `grid-area` placement or `flex-direction: row-reverse` in ways that make the tab order jump around the screen.
- **Landmarks.** Use `<header>`, `<nav>`, `<main>` and `<footer>`, one `<main>` per page, and a "skip to content" link as the first focusable element.

## Do and don't

| Do | Don't |
|---|---|
| `gap: var(--ep-space-300)` between form fields | `margin-bottom: 20px` (off-scale, and doubles with the next margin) |
| More space between groups than within them | Equal spacing everywhere |
| `max-width: var(--ep-layout-width-prose)` on paragraphs | Body text running the full width of a desktop screen |
| `@media (min-width: 1024px)` for layout | `@media (pointer: coarse)` to decide the number of columns |
| Container queries for components that live in different widths | Viewport breakpoints inside a reusable component |
| Let the grid wrap and content set height | Fixed heights on cards, rows and text boxes |

## Public API trade-offs

These names become public on release; renaming them later is a breaking change.

- **Responsive tokens instead of one token per breakpoint.** `--ep-layout-margin` changes value inside media queries in `tokens.css`, rather than shipping `--ep-layout-margin-md`, `-lg` and so on. Pages written once adapt with no queries of their own, and the values can be tuned later without a breaking change. The cost: SCSS and JS exports hold only the phone value, so apps that need the larger values in JS must read the CSS variable at runtime.
- **Breakpoint names `md`, `lg`, `xl`.** Size names rather than device names (`tablet`, `desktop`), because device names stop being true (a landscape phone is `md`). Adding a step later (for example `xxl`) is non-breaking; renaming or moving a step changes every page that uses it.
- **Layout tokens are global (`:root` only).** They follow the viewport, so they are not overridden by `data-theme`, `data-corners` or `data-density`. Nested regions that need different spacing should use container queries, not a different set of layout tokens.
- **No semantic spacing tokens for component insides** (no `--ep-space-inset-md` or `--ep-space-stack-lg`). Components use the space scale directly and this guide says which step to use. That keeps the public surface small. If we later find a value that must change per mode (for example roomier padding at touch density), we add a role-named token then; adding one is non-breaking, removing one is not.
- **No layout utility classes or layout components yet.** The CSS snippets above are recipes, not shipped API. Classes like `.ep-grid` or elements like `<ep-stack>` would be public names to support forever, so they are worth a separate decision once a pilot app shows which ones are actually needed.
- **`--ep-layout-width-prose` is in `ch`.** It follows the font size, which is what makes it a good line length, but design tools that only accept px will show it as an approximation (roughly 650 to 700px at 16px Inter).

# @eduportdesign/web-components

## 0.6.1

### Patch Changes

- e01f623: A control can be enabled again after it was disabled. When `disabled` went back to false, `ep-button`, `ep-text-field`, `ep-textarea`, `ep-select`, `ep-checkbox`, `ep-switch`, `ep-date-picker` and `ep-radio-group` could stay disabled: the browser reports the change in the middle of an update, where the request to render again was ignored. `ep-button` now also passes `aria-label` to its inner button, so an icon-only button gets a name.
  - @eduportdesign/tokens@0.6.1

## 0.6.0

### Minor Changes

- ce478c5: New `ep-cover`: generated artwork (waves, rings, dots, blocks, orbit, mesh) in a category color, seeded so each course keeps its own picture. New `ep-sparkline`: a smooth line, area or bar trend with no axes, with a marker on the last value; `ep-stat` gets a `chart` slot for it.

  The brand hero gains two slow blobs of color (new tokens `color.hero.aurora-1` and `aurora-2`), film grain, and a soft light that follows a mouse pointer. The drift and the light are off under reduced motion.

  Fix: a card or stat with no `tone` no longer gets the neutral tone tint (an empty `tone=""` attribute matched `:host([tone])`), so card media is edge to edge again and a plain stat is a white tile.

- e7beb5a: Add the Playground style, a bolder second look for the same components, switched with `data-style="playground"`.

  Import `@eduportdesign/tokens/css/style-playground` (after `css`, and after `css/theme-dark` for dark) and load Nunito (`@fontsource-variable/nunito`). It gives rounded Nunito at heavy weights, 2px outlines, hard-edged sticker shadows, buttons with a hard edge that press down, a warm cream canvas and bright subject tints, with its own light and dark colors that meet the same contrast checks as the standard style. The standard style is unchanged and stays the default.

  New tokens, with defaults that keep today's look: `effect.depth-control`, `effect.glow-strength`, `effect.sheen-strength`, `effect.tone-fill`, `motion.distance.press`, `shadow.sheet`, `shadow.toned`, `radius.2xl` and `radius.3xl`. Buttons, checkboxes, radios, switches, `ep-card` (toned), `ep-stat` and `ep-app-shell` now read them. See docs/playground.md.

- 5243641: Controls now feel physical. Primary and danger buttons get a rim light, a faint base shade and a glow tinted by their own color; secondary buttons rest on a soft shadow. Text fields, selects and textareas sit in a faint recess and open a soft halo on focus. The switch thumb springs and stretches under the finger, the checkbox tick and radio dot pop in, the tab indicator is one bar that slides, the progress fill is lit from above, and skeletons sweep instead of pulsing.

  Motion policy change, on purpose: buttons and interactive cards rise 2px on hover and buttons press to 0.98. New tokens `shadow.sheen`, `shadow.control`, `shadow.inset`, `motion.easing.spring`, `motion.distance.lift`, `motion.scale.press` and `motion.scale.pop`. All distances and scales are neutral under reduced motion. `docs/motion.md` is updated to match.

### Patch Changes

- f9c2f73: Review fixes for the new look. The brand hero no longer has a pointer-following light (white over the brand orange cannot hold AA contrast), its grain is luminance-neutral, and the aurora drifts once for five seconds and then rests. `ep-stat` keeps a gap between the value and its chart, `ep-sparkline` bars no longer double-darken and curves can't overshoot, and the `ep-tabs` indicator is placed correctly when the tabs scroll, are scaled, or change size.
- Updated dependencies [ce478c5]
- Updated dependencies [e7beb5a]
- Updated dependencies [5243641]
  - @eduportdesign/tokens@0.6.0

## 0.5.0

### Minor Changes

- 3822a78: Add the app shell: `<ep-app-shell>` (sticky top bar, side navigation that becomes a drawer below 1024px, skip link, `<main>`, page margin and width cap), `<ep-top-bar>`, `<ep-side-nav>` with `<ep-side-nav-item>` and `<ep-side-nav-group>`, and `<ep-page-header>`. React: `AppShell`, `TopBar`, `SideNav`, `SideNavItem`, `SideNavGroup`, `PageHeader`.

  `<ep-text-field>` gains `hide-label` for fields whose purpose is clear without a visible label, such as top bar search. The base stylesheet keeps anchor jumps and focused fields clear of the shell's sticky top bar.

- 22532e9: Quiet hover feedback within the motion policy. New token `shadow.raised-hover`; `ep-card` gets an `interactive` property whose elevated surface deepens its shadow on hover and focus (no lift, no scale); the current item on the dark rail gets a soft glow on its marker. The new row is in the motion catalog.
- 78af0ed: Categorical color and four dashboard patterns, all new.

  Tokens: `color.category.{1..6}.{subtle,bold,on-bold,text}` for telling things apart (never for status), and the `violet`, `teal` and `pink` primitive scales. Every pair is in the CI contrast check, in both themes.

  Components: `ep-stat`, `ep-progress-ring`, `ep-avatar-group` and `ep-icon-tile`, each with a React wrapper. `ep-card` gets `tone="1"` to `"6"`, which tints its `media` area and exposes `--ep-tone-*` to the content in it. Ten icons for subjects and trends are added to the built-in set (atom, flask, math-function, leaf, language, palette, music, ball-football, trending-up).

- f673a32: Brand moments, both opt-in. `ep-side-nav` gets `appearance="inverse"` (a dark rail in both themes, with a `header` slot for the logo; inside `ep-app-shell` the rail then runs the full height). `ep-page-header` gets `variant="hero"` (the title on the brand gradient) with `eyebrow`, `aside` and `art` slots; its actions sit below the hero.

  New tokens: `color.rail.{background,text,text-secondary,hover,current,border,accent,badge,on-badge}` and `color.hero.{start,end,glow,text,chip}`. Contrast pairs for both are checked in CI.

- c20fb87: A first pass of visual depth. Everything is additive except the look of three defaults.

  New tokens: `color.gray.15`, `color.background.canvas`, `color.surface.sheet`, and `font.family.display` (Bricolage Grotesque, falling back to Inter). The `font.heading.xl/lg/md` roles now use the display face at bold weight, and base heading tracking is tighter. Load the font with `@fontsource-variable/bricolage-grotesque/opsz.css`.

  `shadow.raised` is now a 1px ring plus two soft layers in light, so cards need no border.

  Visual changes you will see on upgrade: `ep-card` now defaults to `variant="elevated"` (use `variant="outlined"` for the old look); `ep-app-shell` with a sidebar shows the content as a raised sheet on a canvas, with no hairlines around the top bar and sidebar; the current `ep-side-nav-item` is a raised pill instead of a tint.

### Patch Changes

- 58d79c0: New foundations, all additive:

  - Theme-aware elevation: `--ep-shadow-raised` and `--ep-shadow-overlay`, darker and tighter in the dark theme so surfaces still lift. Components now use them instead of the primitive `--ep-shadow-{md,lg}`, which stay available.
  - Type roles: `--ep-font-heading-{xl,lg,md,sm,xs}`, `--ep-font-body-{lg,md,sm}`, `--ep-font-label-{md,sm}` and `--ep-font-code-md`, each a `font` shorthand. The base stylesheet styles body text and headings with them.
  - Increased contrast: under `prefers-contrast: more` or `data-contrast="more"`, `border.default` uses `border.strong` and feedback borders use their status text color.

- 4d29dc5: Ship a Custom Elements Manifest (`@eduportdesign/web-components/custom-elements.json`) so editors and AI coding tools can autocomplete and check `<ep-*>` markup. `tokens.css` and `theme-dark.css` now set `color-scheme`, so scrollbars and native controls follow the theme even without the base stylesheet. In the base stylesheet, `.ep-prose` paragraphs use `text-wrap: pretty`.
- Updated dependencies [3822a78]
- Updated dependencies [22532e9]
- Updated dependencies [78af0ed]
- Updated dependencies [58d79c0]
- Updated dependencies [4d29dc5]
- Updated dependencies [f673a32]
- Updated dependencies [c20fb87]
  - @eduportdesign/tokens@0.5.0

## 0.4.0

### Patch Changes

- 721e92d: Add an opt-in base stylesheet, `@eduportdesign/tokens/css/base`, that styles `body`, headings, text, links, code and the focus ring with the semantic tokens, so the parts of an app that aren't components match the components. It lives in `@layer ep-base` with zero specificity, resets heading, paragraph and list margins to 0, and adds `.ep-prose` and `.ep-visually-hidden`. Package READMEs now import it and point to the AI and app guide.
- 68ae93b: Primary fills now take white text. `interactive.primary.default` is the new `brand.58` `#d64200`, the brand orange darkened in OKLCH lightness just enough for white text to pass WCAG AA (4.53:1); hover and pressed are `brand.60` and `brand.70` in both themes, so dark-theme primary buttons no longer lighten on hover. `text.on-primary` is white in both themes. Checked checkboxes, switch thumbs, the current pagination page and the selected calendar day follow automatically.
- Updated dependencies [721e92d]
- Updated dependencies [68ae93b]
  - @eduportdesign/tokens@0.4.0

## 0.3.0

### Minor Changes

- c47dd36: Add `<ep-accordion>` with `<ep-accordion-item>`, `<ep-menu>` with `<ep-menu-item>` and `<ep-menu-divider>`, and `<ep-popover>`, with React wrappers `Accordion`, `AccordionItem`, `Menu` (`onSelect`, `onOpen`, `onClose`), `MenuItem`, `MenuDivider` and `Popover`. Add component tests for these and the previous batch.

  Skeleton and the indeterminate progress bar now also stop under `data-motion="reduced"`, not just the OS setting, by following the motion tokens. The spinner turns once a second at all times. Menu and popover fade in with a small offset, and the accordion chevron uses the move token.

- cbc03d1: Form controls behave like native ones:

  - `ep-text-field` and `ep-textarea` fire `change` when an edit is committed, so `onChange` in the React wrappers works.
  - Pressing Enter in `ep-text-field` submits its form, unless the form's submit button is disabled.
  - `ep-button` is disabled inside a disabled `<fieldset>`.
  - Re-enabling a `<fieldset>` no longer clears or overrides a control's own `disabled`. Controls disabled by a fieldset keep `disabled` as `false` and match `:disabled` instead.
  - `ep-radio-group` links its helper and error text to the group with `aria-describedby`. The `radiogroup` role moves from the host to an element inside the shadow root.
  - `ep-radio` marks itself `aria-disabled` when it or its group is disabled.

  Component tests and axe checks of every story now run in CI.

- daeb87d: Adopt the interaction and motion policy (docs/motion.md).

  Tokens: new `--ep-motion-duration-slower` (400ms, drawers only), `--ep-motion-duration-move` (movement inside a control), `--ep-motion-distance-{sm,md}` (4px, 8px enter offsets) and `--ep-motion-scale-enter` (0.98). Under `prefers-reduced-motion: reduce` or the new `data-motion="reduced"` attribute, distances and `duration-move` drop to 0 and every duration caps at 100ms, so fades stay and nothing slides.

  Components:
  - `<ep-tooltip>` opens 500ms after hover (at once on keyboard focus, and at once when moving from another open tooltip), and enters with a fade plus a 4px slide.
  - `<ep-button>` has a new `loading` property: presses are ignored, `aria-busy` is set, and a spinner replaces the prefix icon if loading lasts over 400ms, then stays at least 500ms.
  - `<ep-toast>` and `toast()` stay 6s by default (was 5s), plus 1s per 20 words over 20. A toast with an `action` never closes on its own. `duration` now defaults to unset (automatic). Toasts fade out on close, and `close()` returns a promise.
  - `<ep-modal>` fades in from a 0.98 scale with no slide, and its backdrop fades in. `<ep-switch>`'s thumb jumps under reduced motion.
  - The blanket rule that cut every animation to 0.01ms under reduced motion is gone; the tokens handle it, and loading spinners keep turning.

- a6fcea3: Add six components: `<ep-breadcrumbs>` with `<ep-breadcrumb-item>`, `<ep-pagination>`, `<ep-progress-bar>`, `<ep-spinner>`, `<ep-skeleton>` and `<ep-empty-state>`, with React wrappers `Breadcrumbs`, `BreadcrumbItem`, `Pagination` (`onChange`), `ProgressBar`, `Spinner`, `Skeleton` and `EmptyState`.
- b0997cd: Add `<ep-table>`, which styles a native `<table>` (sizes, striping, sticky header, `aria-sort` arrows, `aria-selected` rows, keyboard-scrollable overflow), and `<ep-date-picker>` with `<ep-calendar>`: a form-associated date field that accepts typed dates in the locale's order and has an APG-style calendar grid. React wrappers `Table`, `DatePicker` (`onChange`) and `Calendar` (`onChange`).

### Patch Changes

- Updated dependencies [daeb87d]
- Updated dependencies [b39d213]
- Updated dependencies [ac56da8]
  - @eduportdesign/tokens@0.3.0

## 0.2.0

### Minor Changes

- 4440ad0: Use the exact brand orange for primary actions and make components ready for phones and tablets.

  - Primary buttons, checked checkboxes, radios and switches use the brand orange `#fb6514` with near-black text. New token `--ep-color-text-on-primary`; `--ep-color-text-on-color` now covers the danger fill only. New hover and pressed shades `brand.55` and `brand.57`.
  - The secondary button is outlined in both themes, so it no longer outweighs the primary button or reads as disabled in dark.
  - Dark theme: outlined, filled and elevated cards are three distinct surfaces. New token `--ep-color-surface-muted`; dark `surface.raised` is one step lighter.
  - New touch density: 44px controls, 16px input text and 44px minimum hit areas, applied automatically on touch screens. Override with `data-density="touch|compact"`. New tokens `--ep-size-control-{sm,md,lg}`, `--ep-size-target-min`, `--ep-font-size-input`, `--ep-size-icon-{sm,md,lg}` and `--ep-z-index-toast`.
  - Toasts stay visible and clickable above an open modal.
  - An empty select shows its placeholder in the placeholder color.
  - Card and modal bodies use primary text by default.
  - Disabled buttons keep their variant's shape.
  - The sans font stack falls back to Noto Sans Malayalam for Malayalam text.

### Patch Changes

- 8d721b2: `@eduportdesign/tokens` is now a regular dependency of `@eduportdesign/web-components` instead of a peer dependency, so installing the components also installs a matching tokens version.
- Updated dependencies [4440ad0]
- Updated dependencies [9a727d5]
  - @eduportdesign/tokens@0.2.0

## 0.1.0

### Minor Changes

- 421ca16: Starter components: button, icon button, text field, textarea, select, checkbox, radio group, switch, badge, tag, avatar, card, icon, tabs, alert, toast, tooltip and modal, with React wrappers. New tokens `color.text.info` and `color.background.scrim`.

### Patch Changes

- Updated dependencies [803c4e5]
- Updated dependencies [421ca16]
  - @eduportdesign/tokens@0.1.0

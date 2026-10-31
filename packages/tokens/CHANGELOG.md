# @eduportdesign/tokens

## 0.6.1

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

## 0.5.0

### Minor Changes

- 22532e9: Quiet hover feedback within the motion policy. New token `shadow.raised-hover`; `ep-card` gets an `interactive` property whose elevated surface deepens its shadow on hover and focus (no lift, no scale); the current item on the dark rail gets a soft glow on its marker. The new row is in the motion catalog.
- 78af0ed: Categorical color and four dashboard patterns, all new.

  Tokens: `color.category.{1..6}.{subtle,bold,on-bold,text}` for telling things apart (never for status), and the `violet`, `teal` and `pink` primitive scales. Every pair is in the CI contrast check, in both themes.

  Components: `ep-stat`, `ep-progress-ring`, `ep-avatar-group` and `ep-icon-tile`, each with a React wrapper. `ep-card` gets `tone="1"` to `"6"`, which tints its `media` area and exposes `--ep-tone-*` to the content in it. Ten icons for subjects and trends are added to the built-in set (atom, flask, math-function, leaf, language, palette, music, ball-football, trending-up).

- 58d79c0: New foundations, all additive:

  - Theme-aware elevation: `--ep-shadow-raised` and `--ep-shadow-overlay`, darker and tighter in the dark theme so surfaces still lift. Components now use them instead of the primitive `--ep-shadow-{md,lg}`, which stay available.
  - Type roles: `--ep-font-heading-{xl,lg,md,sm,xs}`, `--ep-font-body-{lg,md,sm}`, `--ep-font-label-{md,sm}` and `--ep-font-code-md`, each a `font` shorthand. The base stylesheet styles body text and headings with them.
  - Increased contrast: under `prefers-contrast: more` or `data-contrast="more"`, `border.default` uses `border.strong` and feedback borders use their status text color.

- f673a32: Brand moments, both opt-in. `ep-side-nav` gets `appearance="inverse"` (a dark rail in both themes, with a `header` slot for the logo; inside `ep-app-shell` the rail then runs the full height). `ep-page-header` gets `variant="hero"` (the title on the brand gradient) with `eyebrow`, `aside` and `art` slots; its actions sit below the hero.

  New tokens: `color.rail.{background,text,text-secondary,hover,current,border,accent,badge,on-badge}` and `color.hero.{start,end,glow,text,chip}`. Contrast pairs for both are checked in CI.

- c20fb87: A first pass of visual depth. Everything is additive except the look of three defaults.

  New tokens: `color.gray.15`, `color.background.canvas`, `color.surface.sheet`, and `font.family.display` (Bricolage Grotesque, falling back to Inter). The `font.heading.xl/lg/md` roles now use the display face at bold weight, and base heading tracking is tighter. Load the font with `@fontsource-variable/bricolage-grotesque/opsz.css`.

  `shadow.raised` is now a 1px ring plus two soft layers in light, so cards need no border.

  Visual changes you will see on upgrade: `ep-card` now defaults to `variant="elevated"` (use `variant="outlined"` for the old look); `ep-app-shell` with a sidebar shows the content as a raised sheet on a canvas, with no hairlines around the top bar and sidebar; the current `ep-side-nav-item` is a raised pill instead of a tint.

### Patch Changes

- 3822a78: Add the app shell: `<ep-app-shell>` (sticky top bar, side navigation that becomes a drawer below 1024px, skip link, `<main>`, page margin and width cap), `<ep-top-bar>`, `<ep-side-nav>` with `<ep-side-nav-item>` and `<ep-side-nav-group>`, and `<ep-page-header>`. React: `AppShell`, `TopBar`, `SideNav`, `SideNavItem`, `SideNavGroup`, `PageHeader`.

  `<ep-text-field>` gains `hide-label` for fields whose purpose is clear without a visible label, such as top bar search. The base stylesheet keeps anchor jumps and focused fields clear of the shell's sticky top bar.

- 4d29dc5: Ship a Custom Elements Manifest (`@eduportdesign/web-components/custom-elements.json`) so editors and AI coding tools can autocomplete and check `<ep-*>` markup. `tokens.css` and `theme-dark.css` now set `color-scheme`, so scrollbars and native controls follow the theme even without the base stylesheet. In the base stylesheet, `.ep-prose` paragraphs use `text-wrap: pretty`.

## 0.4.0

### Minor Changes

- 721e92d: Add an opt-in base stylesheet, `@eduportdesign/tokens/css/base`, that styles `body`, headings, text, links, code and the focus ring with the semantic tokens, so the parts of an app that aren't components match the components. It lives in `@layer ep-base` with zero specificity, resets heading, paragraph and list margins to 0, and adds `.ep-prose` and `.ep-visually-hidden`. Package READMEs now import it and point to the AI and app guide.
- 68ae93b: Primary fills now take white text. `interactive.primary.default` is the new `brand.58` `#d64200`, the brand orange darkened in OKLCH lightness just enough for white text to pass WCAG AA (4.53:1); hover and pressed are `brand.60` and `brand.70` in both themes, so dark-theme primary buttons no longer lighten on hover. `text.on-primary` is white in both themes. Checked checkboxes, switch thumbs, the current pagination page and the selected calendar day follow automatically.

## 0.3.0

### Minor Changes

- daeb87d: Adopt the interaction and motion policy (docs/motion.md).

  Tokens: new `--ep-motion-duration-slower` (400ms, drawers only), `--ep-motion-duration-move` (movement inside a control), `--ep-motion-distance-{sm,md}` (4px, 8px enter offsets) and `--ep-motion-scale-enter` (0.98). Under `prefers-reduced-motion: reduce` or the new `data-motion="reduced"` attribute, distances and `duration-move` drop to 0 and every duration caps at 100ms, so fades stay and nothing slides.

  Components:
  - `<ep-tooltip>` opens 500ms after hover (at once on keyboard focus, and at once when moving from another open tooltip), and enters with a fade plus a 4px slide.
  - `<ep-button>` has a new `loading` property: presses are ignored, `aria-busy` is set, and a spinner replaces the prefix icon if loading lasts over 400ms, then stays at least 500ms.
  - `<ep-toast>` and `toast()` stay 6s by default (was 5s), plus 1s per 20 words over 20. A toast with an `action` never closes on its own. `duration` now defaults to unset (automatic). Toasts fade out on close, and `close()` returns a promise.
  - `<ep-modal>` fades in from a 0.98 scale with no slide, and its backdrop fades in. `<ep-switch>`'s thumb jumps under reduced motion.
  - The blanket rule that cut every animation to 0.01ms under reduced motion is gone; the tokens handle it, and loading spinners keep turning.

- b39d213: Neutral color scheme: the gray scale is now true neutral (no brand tint), so whites, off-whites and greys look clean on screen. Red, green and blue move to standard hues. Brand orange stays where it is used on purpose: primary actions, accent marks, selected states and `accent.subtle`. Token names are unchanged; values change. The scrim and shadows use the neutral near-black too.
- ac56da8: Add spacing and layout guidelines and layout tokens. New breakpoints `--ep-breakpoint-{md,lg,xl}` (600, 1024, 1440px) and responsive `--ep-layout-{columns,margin,gutter,section-gap,header-height}` that change inside min-width media queries in `tokens.css`, plus `--ep-layout-sidebar-width` and `--ep-layout-width-{prose,form,page}`. SCSS and JS export the breakpoints for media queries. See docs/layout.md.

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

- 9a727d5: Dark theme neutrals: the page is deeper (`gray.100` `#110f0e`), the dark grays are nearly neutral instead of brownish, and surfaces step up in smaller increments. Adds `gray.95` for filled surfaces and `background.subtle` in dark; raised and overlay surfaces use `gray.90`.

## 0.1.0

### Minor Changes

- 803c4e5: First release: brand color scales, light and dark themes, soft and sharp corner modes, as CSS variables, SCSS and JS.
- 421ca16: Starter components: button, icon button, text field, textarea, select, checkbox, radio group, switch, badge, tag, avatar, card, icon, tabs, alert, toast, tooltip and modal, with React wrappers. New tokens `color.text.info` and `color.background.scrim`.

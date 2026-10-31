# Interaction and motion

How Eduport components respond to people: states, input, feedback, timing and motion, including which microinteractions are allowed. This policy is adopted; the tokens and component timings it describes ship in the packages.

The audience is internal apps: people doing the same tasks many times a day in dense screens. That sets the tone. Interactions should be **fast, quiet and predictable**. Motion explains what changed; it never decorates.

**In one paragraph:** respond within 100ms; animate only to explain a change; never block input with motion; keep everything in a component at or under 300ms; animate only `opacity` and `transform`; and under reduced motion, keep the fades and drop the movement. The `--ep-motion-*` tokens do the last part for you.

---

## 1. Principles

1. **Respond within 100ms.** Every press, click or keystroke gets a visible response within 100ms, even if the result takes longer.
2. **Motion must explain something.** Animate only to show where something came from, where it went, or that its state changed. If removing the animation loses no information, remove it.
3. **Never block the user with motion.** No animation delays input. Everything is interruptible: a second click during an animation acts on the new state.
4. **Same thing, same behavior.** A pattern behaves the same in every component and app (Escape always closes the top layer; focus always returns to the trigger).
5. **Accessible by default.** WCAG 2.1 AA is the floor. Keyboard, screen reader, forced-colors and reduced-motion users get the same information, never a degraded version.

---

## 2. Interaction states

Every interactive component implements the states that apply to it, in this priority order (a later state wins when two apply):

| State | Trigger | Visual rule | Tokens |
|---|---|---|---|
| Rest | — | Base appearance. Control boundary ≥ 3:1 against its background. | `border.strong`, `interactive.*.default` |
| Hover | Pointer over, only under `@media (hover: hover)` | Fill or border shifts one step. Filled and bordered buttons and interactive cards also rise `distance-lift` (2px) as their shadow deepens. | `interactive.*.hover`, `motion.distance.lift` |
| Active / pressed | Pointer down or key down | One step darker than hover; buttons also scale to `scale-press` (0.98) and spring back on release. In the Playground style they move down `distance-press` onto their hard edge instead. | `interactive.*.active`, `motion.scale.press`, `motion.distance.press` |
| Focus-visible | Keyboard focus only (`:focus-visible`) | The shared `focusRing`: 2px `border.focus` outline, 2px offset. Never removed, never animated. | `border.focus` |
| Selected / checked | Persistent choice | `accent.default` indicator plus a non-color cue (check, weight, underline). | `accent.default`, `accent.subtle` |
| Invalid | Failed validation | `border.danger` plus an icon and error text. Color alone is never the signal. | `border.danger`, `text.danger` |
| Loading / busy | Action in progress | See §4. Keeps its size; `aria-busy="true"`. | — |
| Read-only | Value visible, not editable | Normal text color, no hover, still focusable and selectable. | `text.primary` |
| Disabled | Not available | `interactive.disabled`, `text.disabled`, `cursor: not-allowed`. | `interactive.disabled` |

Rules:

- **Hover is never the only way to reveal something.** Anything shown on hover (row actions, tooltips) must also appear on focus, and must not be required on touch.
- **Prefer `aria-disabled` over `disabled` when the user needs to know why.** A natively disabled button can't be focused, so its tooltip can't explain itself. Components that take `disabled` keep it native by default. A focusable `disabled-reason` style API will be decided when the form components are built.
- **Forced colors:** every state must survive `forced-colors: active`. Use `Highlight`/`GrayText` system colors for selected/disabled and keep real borders (not just shadows or fills).

---

## 3. Input and keyboard

### Targets

- **Minimum target 24 × 24px**, with spacing so neighboring targets don't overlap a 24px circle. (This is WCAG 2.2 SC 2.5.8; we adopt it now though our floor is 2.1.)
- Default control height is 40px (`md`); `sm` (32px) is for dense tables and toolbars only.
- An icon-only button is never smaller than 32px, even when the icon is 16px.

### Activation

- Activate on **pointer up**, not down, so the user can slide off to cancel (WCAG 2.5.2).
- `Enter` activates buttons and links; `Space` activates buttons, checkboxes, switches and radios.
- Double-click is never the only way to do anything.

### Keyboard maps

| Pattern | Keys |
|---|---|
| Composite widgets (tabs, radio group, menu, listbox, toolbar) | One tab stop for the group (roving `tabindex`). Arrow keys move inside. `Home`/`End` jump to first/last. |
| Tabs | Arrows move focus **and** select (automatic activation) unless panels are slow to load, then manual (`Enter`/`Space`). |
| Menu, select, combobox | `Escape` closes and returns focus to the trigger. Typing a character jumps to the next match. |
| Modal | Focus moves into the dialog on open, is trapped while open, `Escape` closes, focus returns to the trigger on close. |
| Popover, tooltip | `Escape` closes without moving focus. |
| Data grid / table with actions | `Tab` moves between interactive cells; row actions reachable without a pointer. |

### Focus management

- **Focus never gets lost.** When the focused element disappears (row deleted, panel closed), move focus to the logical next place: the next row, the previous row, or the container.
- After a page-level action that changes the view (submit, navigate), move focus to the new heading or the first error.
- Never move focus on hover, on a timer, or while the user is typing.

---

## 4. Feedback and timing

### Response time thresholds

| Expected duration | What the user sees |
|---|---|
| < 100ms | Nothing extra. The result is the feedback. |
| 100ms – 1s | The control shows its pressed/busy state. No spinner. |
| > 1s | A spinner (inline) or a skeleton (content area). **Wait 400ms before showing it**, and once shown keep it at least 500ms, so fast responses don't flicker. |
| > 10s | A determinate progress bar if progress is known, plus a way to cancel or leave and come back. |

### Loading buttons

- The button keeps its width; the spinner replaces the prefix icon (or sits before the label).
- The label stays (or changes to a progressive verb, e.g. "Saving…"); `aria-busy="true"`, and repeated presses are ignored, not queued.
- When done, return to rest. Announce the outcome where it lands (inline message or toast), not on the button.

### Choosing a feedback channel

| Situation | Use | Why |
|---|---|---|
| Field-level problem | Inline error text under the field | Closest to the cause. |
| Form-level problem on submit | Alert above the form + focus to it, listing linked errors | One place to start fixing. |
| Background or completed action ("Saved", "Copied", "Invite sent") | Toast, `aria-live="polite"` | Doesn't interrupt. |
| Persistent condition (offline, read-only mode, trial ending) | Alert/banner in the page | Must stay visible until it's resolved. |
| Needs a decision before continuing | Modal | Only when the user can't sensibly continue without answering. |

Toast rules: **never put the only copy of important information in a toast**; auto-dismiss after **6s** by default, plus 1s for every 20 words over 20, pause on hover and focus, and toasts with an action never auto-dismiss.

### Validation timing

- Validate a field **on blur**, not on every keystroke.
- Once a field is invalid, re-validate **on input** so the error clears the moment it's fixed.
- On submit, validate everything, show the form-level alert, and move focus to it (or to the first invalid field when there's only one).
- Never show an error on a field the user hasn't touched yet (except on submit).

### Destructive and irreversible actions

- **Prefer undo over confirm.** For reversible deletes, act immediately and show a toast with Undo. Toasts with an action stay until dismissed.
- **Confirm only when it can't be undone** (permanent delete, sending email to students, publishing grades). The confirm dialog names the object and the consequence; the destructive button says what it does ("Delete 12 records"), never "OK" or "Yes".
- For very high-stakes actions, require typing the object's name.

### Optimistic updates

Allowed when the success rate is very high and the change is cheap to roll back (toggles, reordering, starring). On failure, revert visibly and show an inline or toast error that says what was reverted.

---

## 5. Motion

### When motion is allowed

Motion is allowed for exactly four jobs:

1. **State change**: a color, border or position change that follows the user's action (hover, switch thumb, tab indicator).
2. **Enter / exit**: an element appearing or leaving (popover, modal, toast, expanding section).
3. **Spatial continuity**: showing where something moved (reordering, a panel sliding in from its edge).
4. **Progress**: showing that work is happening (spinner, progress bar, skeleton).

Everything else is decoration and is not allowed in components.

### Duration and easing

Use the existing tokens. The table says which to pick.

| Use | Duration | Easing |
|---|---|---|
| Color, border, opacity state changes (hover, focus border, checkbox fill) | `fast` 100ms | `standard` |
| Small movement within a control (switch thumb, tab indicator, chevron rotate) | `normal` 200ms | `standard` |
| Small overlays entering (tooltip, menu, popover) | `fast`–`normal` | `enter` |
| Large surfaces entering (modal, drawer, toast) | `normal`–`slow` 200–300ms | `enter` |
| Anything leaving | One step shorter than its enter | `exit` |

Rules:

- **Nothing in a component lasts longer than 300ms.** Page-level transitions (a full drawer) may use up to 400ms (`--ep-motion-duration-slower`).
- **Exits are faster than entries.** The user already decided; get out of the way.
- **Animate `opacity` and `transform` only.** Never animate width, height, top/left or margin, which cause layout jank. For expanding sections, animate `grid-template-rows: 0fr → 1fr` or skip the animation.
- **Small distances.** Enter offsets are 4px (overlays) or 8px (toasts, drawers excepted). Scale, if used, starts at 0.98, never smaller. The exceptions are small marks that pop in (`scale-pop`, 0.5).
- **Overshoot only on small things that settle.** The `spring` easing (a 1.4 control point) is for the switch thumb, the checkbox tick, the radio dot, a button letting go and a card landing. Never for fades, overlays or anything larger than a control. Under reduced motion every distance and scale is neutral, so nothing overshoots.
- **Stagger is capped:** at most 5 items, 30ms apart. Lists longer than that appear together.
- **No infinite loops** other than progress indicators, and those stop the moment the work finishes.
- **The focus ring is never animated.** It must appear instantly where focus lands.

### Reduced motion

`prefers-reduced-motion: reduce` means **remove movement, keep meaning**:

| Normally | Under reduced motion |
|---|---|
| Slide + fade | Fade only (opacity, ≤ 100ms) |
| Scale + fade | Fade only |
| Switch thumb slides | Thumb jumps; the fill color still changes |
| Tab indicator slides | Indicator jumps |
| Skeleton shimmer | Static skeleton |
| Spinner rotates | Keeps rotating (it's the only progress signal), at most 1 revolution/second |
| Smooth scroll | Instant scroll |

The motion tokens do this for you (section 7): under reduced motion the distance and move tokens become 0 and every duration caps at 100ms, so a component written with the tokens keeps its fade and loses its movement with no extra CSS.

---

## 6. Microinteraction catalog

Microinteractions are allowed **only from this list**. A new one needs a proposal that says which of the four motion jobs (§5) it does.

### Allowed

| Component / pattern | Microinteraction | Spec | Reduced motion |
|---|---|---|---|
| Button, icon button | Hover, press | Hover: fill to `hover`, rises `distance-lift`, shadow deepens, 200ms `standard`. Press: fill to `active`, scales to `scale-press`, 50ms; release springs back in 200ms. No ripple. | Color only |
| Text field, select, textarea | Focus | Border to `border.focus` 100ms; focus ring appears instantly; a 4px halo fades in around it over 200ms. | Same |
| Checkbox | Check | Fill 100ms; check icon pops in from `scale-pop` with `spring`, 200ms. Indeterminate dash same. | Fade only |
| Radio | Select | The dot grows with `spring`, `duration-move`. | Jumps |
| Switch | Toggle | Thumb slides with `spring`, `duration-move`, and stretches `distance-sm` while pressed; track fill 100ms. | Thumb jumps, fill changes |
| Tabs | Select | Indicator slides between tabs 200ms `standard`. | Indicator jumps |
| Tooltip | Show / hide | **Open after 500ms hover**, instantly on keyboard focus; fade + 4px offset, 100ms. Once one tooltip is open, neighbors open with no delay for 300ms. Hide after 100ms. | Fade only |
| Menu, popover, select list | Open / close | Fade + 4px offset from the trigger side, 150ms `enter`; close 100ms `exit`. | Fade only |
| Modal | Open / close | Scrim fades 200ms; dialog fade + scale 0.98→1, 200ms `enter`; close 150ms `exit`. | Fade only |
| Drawer / side panel | Open / close | Slides from its edge, 300ms `enter`, close 200ms `exit`. | Fade only |
| Toast | Enter / exit | Slide 8px + fade, 300ms `enter`; exit fade 200ms `exit`. Stack shifts with `transform`. | Fade only |
| Accordion / disclosure | Expand | Chevron rotates 180°, 200ms; content `grid-template-rows` 200ms, or no animation. | Instant |
| Copy to clipboard | Confirm | Icon swaps to check for 2s; "Copied" announced politely. | Same (swap is not motion) |
| Loading button | Busy | Spinner fades in after 400ms (see §4). | Spinner keeps rotating |
| Skeleton | Loading content | Subtle shimmer, 1.5s per cycle, low contrast. | Static |
| Progress bar | Progress | Width moves with `transform: scaleX`, 200ms. Indeterminate: sliding segment. | Determinate jumps; indeterminate becomes a static striped bar with text |
| Interactive card | Hover / focus | `shadow.raised` to `shadow.raised-hover`, rises `distance-lift`, 200ms. Focus-within gets the shadow without the lift. | Shadow only |
| Table row | Hover / select | Background to `background.subtle` 100ms; selected uses `accent.subtle` plus a checkbox. | Same |
| Drag to reorder | Lift / drop | Lifted item gets `shadow.md`, others shift 200ms. **A keyboard alternative is required** (move up/down buttons or `Space` to pick up, arrows to move). | Items jump |
| Inline save | Saved | "Saved" text with check fades in next to the field, fades out after 2s. | Same |

### Not allowed

- **Shake on error.** It's a vestibular trigger and carries no information a screen reader gets. Use the invalid state and error text.
- **Ripple effects.**
- **Bounce on anything bigger than a control.** Modals, menus, popovers, toasts and page content never overshoot.
- **Animated number counters** for data values. They show wrong numbers mid-animation and are slow to read.
- **Parallax, auto-playing carousels, background video.**
- **Confetti and celebration animations** in components. If a product wants one for a rare milestone, it's the product's decision, must respect reduced motion, and must never block input.
- **Animated focus rings or "pulse" attention effects** on controls.
- **Typewriter or character-by-character text reveals.**

---

## 7. Motion tokens

Every transition and animation uses `--ep-motion-*` tokens. Never write raw `ms` values or `cubic-bezier()` in component styles.

| Token | Default | Reduced motion | Use |
|---|---|---|---|
| `--ep-motion-duration-fast` | 100ms | 100ms | Color, border and opacity changes; small overlays entering |
| `--ep-motion-duration-normal` | 200ms | 100ms | Larger surfaces entering; anything leaving |
| `--ep-motion-duration-slow` | 300ms | 100ms | Toasts and modals entering; the longest anything inside a component runs |
| `--ep-motion-duration-slower` | 400ms | 100ms | Drawers and page-level panels only |
| `--ep-motion-duration-move` | 200ms | **0ms** | Movement inside a control: switch thumb, tab indicator, chevron rotate |
| `--ep-motion-distance-sm` | 4px | **0px** | Enter offset for tooltip, menu, popover |
| `--ep-motion-distance-md` | 8px | **0px** | Enter offset for toasts and larger surfaces |
| `--ep-motion-scale-enter` | 0.98 | **1** | Starting scale for a modal entering |
| `--ep-motion-scale-press` | 0.98 | **1** | Scale of a pressed button |
| `--ep-motion-scale-pop` | 0.5 | **1** | Starting scale of a tick or dot popping in |
| `--ep-motion-distance-lift` | 2px | **0px** | Hover rise of buttons and interactive cards |
| `--ep-motion-distance-press` | 0px (4px in the Playground style) | **0px** | How far a pressed button moves down onto its hard edge |
| `--ep-motion-easing-standard` | `cubic-bezier(0.2, 0, 0, 1)` | same | State changes |
| `--ep-motion-easing-enter` | `cubic-bezier(0, 0, 0, 1)` | same | Things appearing |
| `--ep-motion-easing-exit` | `cubic-bezier(0.3, 0, 1, 1)` | same | Things leaving |
| `--ep-motion-easing-spring` | `cubic-bezier(0.34, 1.4, 0.64, 1)` | same | Small marks and controls settling: switch thumb, tick, dot, button release, card lift |

`tokens.css` switches to the reduced values in two cases:

```css
@media (prefers-reduced-motion: reduce) { :root { /* reduced values */ } }
[data-motion="reduced"] { /* reduced values */ }
```

So an enter animation written like this needs nothing else to respect reduced motion. The fade still runs; the slide becomes a no-op:

```css
.popover[open] {
  animation: enter var(--ep-motion-duration-fast) var(--ep-motion-easing-enter);
}

@keyframes enter {
  from {
    opacity: 0;
    transform: translateY(var(--ep-motion-distance-sm));
  }
}
```

### `data-motion="reduced"`

Lets an app offer its own "Reduce motion" setting, the same way `data-theme` and `data-corners` work. It goes on `<html>` or any subtree and needs no extra CSS file:

```html
<html data-motion="reduced">
```

There is no value that turns motion back on when the operating system asks for less. That is on purpose: the OS setting is the user's choice, and an app shouldn't override it.

### Timers that belong to components

Three timings are component behavior, not tokens, because JavaScript owns the timers:

| Component | Timing |
|---|---|
| `<ep-tooltip>` | Opens 500ms after the pointer arrives, at once on keyboard focus, and at once if another tooltip closed in the last 300ms. Closes 100ms after the pointer leaves. |
| `<ep-button loading>` | The spinner appears only if loading lasts over 400ms and then stays at least 500ms. |
| `<ep-toast>` / `toast()` | Closes after 6s plus 1s for every 20 words over 20. Never closes on its own if it has an `action` or `duration` is 0. |

### What changed in the components

- **Tooltip:** 500ms hover delay with a 300ms skip window; enters with a fade and a 4px slide away from the trigger.
- **Button:** new `loading` property (spinner delay and minimum time as above, `aria-busy`, presses ignored).
- **Toast:** 6s default with length scaling; toasts with an action stay; enter slides 8px; exit fades over `normal`.
- **Modal:** dialog fades in from `scale(0.98)` with no slide; the backdrop fades in.
- **Switch:** thumb uses `duration-move`, so it jumps under reduced motion; the track fill uses `fast`.
- The old rule that cut every transition and animation to 0.01ms under reduced motion is gone. Fades stay, and the loading spinner keeps turning.

### Public API notes

- **Role-named distances** (`distance-sm`, `distance-md`) rather than per-component offsets, so the set stays small. Adding more later is non-breaking; removing or renaming one after 1.0 is breaking.
- **`duration-move`** is the one role-named duration. It exists because a slide inside a control must jump under reduced motion while a fade of the same length should not, and only a separate token can express that across shadow DOM. Other role names (`--ep-motion-duration-overlay-enter`) are held back until a real need appears.
- **`data-motion`** may gain values later (`none` for test environments) without breaking anything. Renaming the attribute or `reduced` would be breaking.
- **Tooltip delay** is a constant for now. If teams need to tune it, it becomes a `delay` property, which is non-breaking.
- **`<ep-toast>` `duration`** now defaults to unset (automatic) instead of 5000. `toast()` callers who passed a number see no change.
- **`EpToast.close()`** now returns a promise that settles after the exit fade.

## 8. Decisions

These were open questions in the draft policy. Each one took the recommended answer:

1. **Undo over confirm for deletes.** Undo for anything reversible; confirm only when it can't be undone.
2. **`data-motion="reduced"` and the motion tokens:** adopted, plus `--ep-motion-duration-move`.
3. **Tooltip open delay 500ms:** adopted.
4. **Toast default 6s with length scaling:** adopted.
5. **A `disabled-reason` API:** decided when the form components are built, not now.

## 9. Accessibility checklist for any new interaction

A component or pattern ships only if all of these hold:

- [ ] Every action works with keyboard alone, with a visible `:focus-visible` ring.
- [ ] Focus order follows reading order; focus never gets lost or trapped (except in modals, by design).
- [ ] Nothing depends on hover, color, motion or timing alone to carry meaning.
- [ ] State changes that aren't the result of moving focus are announced (`aria-live`, `aria-expanded`, `aria-pressed`, `aria-busy`, `aria-invalid`).
- [ ] Targets are ≥ 24px; icon buttons ≥ 32px.
- [ ] Under `prefers-reduced-motion: reduce` (and `data-motion="reduced"`), no element moves except progress indicators.
- [ ] Nothing flashes more than 3 times per second.
- [ ] Anything that moves, blinks or auto-updates for more than 5s can be paused or stopped.
- [ ] Timed content (toasts) pauses on hover and focus, and nothing essential disappears on a timer.
- [ ] Works in `forced-colors: active`, both themes and both corner modes.

---

## 10. How this is enforced

- **Storybook:** a "Motion" toolbar toggle (sets `data-motion="reduced"`) sits next to theme and corners.
- **Gallery:** the [Motion page](https://ritwik-sb.github.io/Eduport-Design/#motion) shows every timing live, with its own reduced-motion switch.
- **Review:** PRs that add `transition` or `animation` must use `--ep-motion-*` tokens and name the motion job from section 5.

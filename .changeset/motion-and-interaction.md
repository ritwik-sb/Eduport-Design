---
"@eduportdesign/tokens": minor
"@eduportdesign/web-components": minor
"@eduportdesign/react": minor
---

Adopt the interaction and motion policy (docs/motion.md).

Tokens: new `--ep-motion-duration-slower` (400ms, drawers only), `--ep-motion-duration-move` (movement inside a control), `--ep-motion-distance-{sm,md}` (4px, 8px enter offsets) and `--ep-motion-scale-enter` (0.98). Under `prefers-reduced-motion: reduce` or the new `data-motion="reduced"` attribute, distances and `duration-move` drop to 0 and every duration caps at 100ms, so fades stay and nothing slides.

Components:
- `<ep-tooltip>` opens 500ms after hover (at once on keyboard focus, and at once when moving from another open tooltip), and enters with a fade plus a 4px slide.
- `<ep-button>` has a new `loading` property: presses are ignored, `aria-busy` is set, and a spinner replaces the prefix icon if loading lasts over 400ms, then stays at least 500ms.
- `<ep-toast>` and `toast()` stay 6s by default (was 5s), plus 1s per 20 words over 20. A toast with an `action` never closes on its own. `duration` now defaults to unset (automatic). Toasts fade out on close, and `close()` returns a promise.
- `<ep-modal>` fades in from a 0.98 scale with no slide, and its backdrop fades in. `<ep-switch>`'s thumb jumps under reduced motion.
- The blanket rule that cut every animation to 0.01ms under reduced motion is gone; the tokens handle it, and loading spinners keep turning.

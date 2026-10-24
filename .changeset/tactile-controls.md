---
'@eduportdesign/tokens': minor
'@eduportdesign/web-components': minor
'@eduportdesign/react': minor
---

Controls now feel physical. Primary and danger buttons get a rim light, a faint base shade and a glow tinted by their own color; secondary buttons rest on a soft shadow. Text fields, selects and textareas sit in a faint recess and open a soft halo on focus. The switch thumb springs and stretches under the finger, the checkbox tick and radio dot pop in, the tab indicator is one bar that slides, the progress fill is lit from above, and skeletons sweep instead of pulsing.

Motion policy change, on purpose: buttons and interactive cards rise 2px on hover and buttons press to 0.98. New tokens `shadow.sheen`, `shadow.control`, `shadow.inset`, `motion.easing.spring`, `motion.distance.lift`, `motion.scale.press` and `motion.scale.pop`. All distances and scales are neutral under reduced motion. `docs/motion.md` is updated to match.

/** Reads a `--ep-motion-duration-*` token in milliseconds, as resolved on `element`. Missing or invalid reads as 0. */
export function motionDuration(element: Element, name: 'fast' | 'normal' | 'slow' | 'slower' | 'move'): number {
  const value = getComputedStyle(element).getPropertyValue(`--ep-motion-duration-${name}`).trim();
  const number = parseFloat(value);
  if (!Number.isFinite(number)) return 0;
  return value.endsWith('ms') ? number : number * 1000;
}

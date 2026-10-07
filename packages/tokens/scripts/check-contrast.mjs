// Checks WCAG 2.1 contrast for the color pairs components rely on, in every theme.
// Run: node scripts/check-contrast.mjs   (exits 1 if any pair fails)
import { readFileSync, readdirSync } from 'node:fs';

const read = (p) => JSON.parse(readFileSync(new URL(p, import.meta.url), 'utf8'));
const primitives = read('../src/primitives/color.json');

const get = (obj, path) => path.split('.').reduce((o, k) => o?.[k], obj);
const resolve = (tree, path) => {
  const v = get(tree, path)?.$value ?? get(primitives, path)?.$value;
  if (v === undefined) throw new Error(`Unknown token: ${path}`);
  return v.startsWith('{') ? resolve(tree, v.slice(1, -1)) : v;
};

const channel = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const luminance = (hex) => {
  const [r, g, b] = [1, 3, 5].map((i) => channel(parseInt(hex.slice(i, i + 2), 16) / 255));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
};

const BACKGROUNDS = ['background.default', 'background.subtle', 'surface.raised', 'surface.overlay'];
const TEXT = ['primary', 'secondary', 'link', 'info', 'success', 'warning', 'danger'].map((t) => `text.${t}`);
const NON_TEXT = ['border.strong', 'border.focus', 'border.danger', 'accent.default'];
const FILLS = ['primary', 'secondary', 'danger'].flatMap((v) =>
  ['default', 'hover', 'active'].map((s) => `interactive.${v}.${s}`),
);
const FEEDBACK = ['info', 'success', 'warning', 'danger'];

// [foreground, background, minimum ratio]
const pairs = [
  ...TEXT.flatMap((fg) => BACKGROUNDS.map((bg) => [fg, bg, 4.5])),
  ...NON_TEXT.flatMap((fg) => BACKGROUNDS.map((bg) => [fg, bg, 3])),
  ...FILLS.map((bg) => ['text.on-color', bg, 4.5]),
  // Labelled buttons don't strictly need a 3:1 boundary (1.4.11), but the primary fill should still stand out on the page.
  ['interactive.primary.default', 'background.default', 3],
  ...['hover', 'active'].map((s) => ['text.primary', `interactive.ghost.${s}`, 4.5]),
  ['text.inverse', 'background.inverse', 4.5],
  // Accent tint: tertiary button hover, accent badge and tag, avatar initials.
  ['text.link', 'accent.subtle', 4.5],
  ['text.primary', 'accent.subtle', 4.5],
  ...FEEDBACK.flatMap((f) => [
    ['text.primary', `feedback.${f}.background`, 4.5],
    [`text.${f}`, `feedback.${f}.background`, 4.5],
  ]),
];

let failures = 0;
for (const file of readdirSync(new URL('../src/themes', import.meta.url))) {
  const theme = read(`../src/themes/${file}`);
  console.log(`\n${file}`);
  for (const [fg, bg, min] of pairs) {
    const ratio = contrast(resolve(theme, `color.${fg}`), resolve(theme, `color.${bg}`));
    const ok = ratio >= min;
    if (!ok) failures++;
    console.log(`  ${ok ? 'pass' : 'FAIL'}  ${ratio.toFixed(2).padStart(5)}:1 (min ${min})  ${fg} on ${bg}`);
  }
}
if (failures) {
  console.error(`\n${failures} pair(s) below WCAG 2.1 AA.`);
  process.exit(1);
}
console.log('\nAll pairs meet WCAG 2.1 AA.');

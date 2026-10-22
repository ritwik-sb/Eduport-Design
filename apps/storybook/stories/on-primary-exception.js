// White labels on the brand orange are 3.01:1, a documented exception to WCAG AA (docs/foundations.md, chosen
// 2026-10-22). axe can't exempt one color pair, so stories that show text on a primary fill turn off its contrast
// rule. Every token pair, this one included, is still checked by packages/tokens/scripts/check-contrast.mjs.
export const onPrimaryContrastException = {
  a11y: { config: { rules: [{ id: 'color-contrast', enabled: false }] } },
};

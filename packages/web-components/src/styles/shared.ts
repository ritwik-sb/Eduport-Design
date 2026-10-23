import { css, unsafeCSS } from 'lit';

/**
 * Applied to every component: box sizing, the system font, and `hidden` support on the host.
 *
 * Reduced motion is handled by the --ep-motion-* tokens, not here: under prefers-reduced-motion or
 * data-motion="reduced" the distance and move tokens drop to zero and durations cap at 100ms, so fades still run.
 */
export const baseStyles = css`
  :host {
    box-sizing: border-box;
    font-family: var(--ep-font-family-sans);
    -webkit-font-smoothing: antialiased;
  }

  :host([hidden]) {
    display: none !important;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`;

/** Focus indicator for keyboard focus. Use inside a `:focus-visible` rule. Meets 3:1 against every background. */
export const focusRing = css`
  outline: var(--ep-border-width-thick) solid var(--ep-color-border-focus);
  outline-offset: 2px;
`;

/** Hides content visually but keeps it available to assistive technology. */
export const visuallyHidden = css`
  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
  }
`;

/** Label, helper text and error text shared by form fields. */
export const fieldStyles = css`
  .field {
    display: flex;
    flex-direction: column;
    gap: var(--ep-space-100);
  }

  .label {
    font-size: var(--ep-font-size-200);
    font-weight: var(--ep-font-weight-medium);
    line-height: var(--ep-font-line-height-snug);
    color: var(--ep-color-text-primary);
  }

  .required {
    color: var(--ep-color-text-danger);
    margin-inline-start: 2px;
  }

  .helper,
  .error {
    margin: 0;
    font-size: var(--ep-font-size-100);
    line-height: var(--ep-font-line-height-snug);
    color: var(--ep-color-text-secondary);
  }

  .error {
    display: flex;
    align-items: center;
    gap: var(--ep-space-50);
    color: var(--ep-color-text-danger);
  }

  .error ep-icon {
    flex: none;
    font-size: 14px;
  }

  :host(:is([disabled], :disabled)) .label {
    color: var(--ep-color-text-disabled);
  }
`;

/**
 * Maps `tone="1"` to `tone="6"` onto the categorical color tokens, as `--ep-tone-subtle`, `--ep-tone-bold`,
 * `--ep-tone-on-bold` and `--ep-tone-text`. These inherit into slotted content, so a card's cover can use them.
 * Without a tone they are the neutral surface and text colors.
 */
export const toneStyles = css`
  :host {
    --ep-tone-subtle: var(--ep-color-surface-muted);
    --ep-tone-bold: var(--ep-color-text-primary);
    --ep-tone-on-bold: var(--ep-color-text-inverse);
    --ep-tone-text: var(--ep-color-text-primary);
  }
  ${unsafeCSS(
    [1, 2, 3, 4, 5, 6]
      .map(
        (n) => `:host([tone='${n}']) {
    --ep-tone-subtle: var(--ep-color-category-${n}-subtle);
    --ep-tone-bold: var(--ep-color-category-${n}-bold);
    --ep-tone-on-bold: var(--ep-color-category-${n}-on-bold);
    --ep-tone-text: var(--ep-color-category-${n}-text);
  }`,
      )
      .join('\n'),
  )}
`;

import { css } from 'lit';

/** Applied to every component: box sizing, the system font, and `hidden` support on the host. */
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

  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
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

  :host([disabled]) .label {
    color: var(--ep-color-text-disabled);
  }
`;

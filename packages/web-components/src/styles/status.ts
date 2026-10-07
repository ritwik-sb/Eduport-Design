import { css } from 'lit';

/** Color sets for status variants (badge, tag). Each sets private --_bg, --_fg and --_border. */
export const statusVariants = css`
  :host {
    --_bg: var(--ep-color-background-subtle);
    --_fg: var(--ep-color-text-secondary);
    --_border: var(--ep-color-border-default);
  }

  :host([variant='accent']) {
    --_bg: var(--ep-color-accent-subtle);
    --_fg: var(--ep-color-text-link);
    --_border: var(--ep-color-accent-default);
  }

  :host([variant='info']) {
    --_bg: var(--ep-color-feedback-info-background);
    --_fg: var(--ep-color-text-info);
    --_border: var(--ep-color-feedback-info-border);
  }

  :host([variant='success']) {
    --_bg: var(--ep-color-feedback-success-background);
    --_fg: var(--ep-color-text-success);
    --_border: var(--ep-color-feedback-success-border);
  }

  :host([variant='warning']) {
    --_bg: var(--ep-color-feedback-warning-background);
    --_fg: var(--ep-color-text-warning);
    --_border: var(--ep-color-feedback-warning-border);
  }

  :host([variant='danger']) {
    --_bg: var(--ep-color-feedback-danger-background);
    --_fg: var(--ep-color-text-danger);
    --_border: var(--ep-color-feedback-danger-border);
  }
`;

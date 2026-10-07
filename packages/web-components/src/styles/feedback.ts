import { css } from 'lit';

export type FeedbackVariant = 'info' | 'success' | 'warning' | 'danger';

/** The default icon for each feedback variant. Icons back up color, so meaning never relies on color alone. */
export const feedbackIcons: Record<FeedbackVariant, string> = {
  info: 'info-circle',
  success: 'circle-check',
  warning: 'alert-triangle',
  danger: 'alert-circle',
};

/** Sets --_bg, --_border and --_icon for alert and toast. */
export const feedbackVariants = css`
  :host {
    --_bg: var(--ep-color-feedback-info-background);
    --_border: var(--ep-color-feedback-info-border);
    --_icon: var(--ep-color-text-info);
  }

  :host([variant='success']) {
    --_bg: var(--ep-color-feedback-success-background);
    --_border: var(--ep-color-feedback-success-border);
    --_icon: var(--ep-color-text-success);
  }

  :host([variant='warning']) {
    --_bg: var(--ep-color-feedback-warning-background);
    --_border: var(--ep-color-feedback-warning-border);
    --_icon: var(--ep-color-text-warning);
  }

  :host([variant='danger']) {
    --_bg: var(--ep-color-feedback-danger-background);
    --_border: var(--ep-color-feedback-danger-border);
    --_icon: var(--ep-color-text-danger);
  }
`;

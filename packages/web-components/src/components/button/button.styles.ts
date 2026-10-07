import { css } from 'lit';
import { focusRing } from '../../styles/shared.js';

/** Shared by ep-button and ep-icon-button. */
export const buttonStyles = css`
  :host {
    display: inline-flex;
    vertical-align: middle;
    --_height: 40px;
    --_padding: var(--ep-space-200);
    --_font-size: var(--ep-font-size-200);
    --_icon-size: 18px;
    --_bg: var(--ep-color-interactive-primary-default);
    --_bg-hover: var(--ep-color-interactive-primary-hover);
    --_bg-active: var(--ep-color-interactive-primary-active);
    --_fg: var(--ep-color-text-on-color);
    --_border: transparent;
  }

  :host([full-width]) {
    display: flex;
  }

  :host([size='sm']) {
    --_height: 32px;
    --_padding: var(--ep-space-150);
    --_icon-size: 16px;
  }

  :host([size='lg']) {
    --_height: 48px;
    --_padding: var(--ep-space-300);
    --_font-size: var(--ep-font-size-300);
    --_icon-size: 20px;
  }

  :host([variant='secondary']) {
    --_bg: var(--ep-color-interactive-secondary-default);
    --_bg-hover: var(--ep-color-interactive-secondary-hover);
    --_bg-active: var(--ep-color-interactive-secondary-active);
  }

  :host([variant='tertiary']) {
    --_bg: var(--ep-color-interactive-ghost-default);
    --_bg-hover: var(--ep-color-accent-subtle);
    --_bg-active: var(--ep-color-accent-subtle);
    --_fg: var(--ep-color-text-link);
    --_border: var(--ep-color-interactive-primary-default);
  }

  :host([variant='ghost']) {
    --_bg: var(--ep-color-interactive-ghost-default);
    --_bg-hover: var(--ep-color-interactive-ghost-hover);
    --_bg-active: var(--ep-color-interactive-ghost-active);
    --_fg: var(--ep-color-text-primary);
  }

  :host([variant='danger']) {
    --_bg: var(--ep-color-interactive-danger-default);
    --_bg-hover: var(--ep-color-interactive-danger-hover);
    --_bg-active: var(--ep-color-interactive-danger-active);
  }

  .button {
    display: inline-flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    gap: var(--ep-space-100);
    min-height: var(--_height);
    padding: 0 var(--_padding);
    border: var(--ep-border-width-thin) solid var(--_border);
    border-radius: var(--ep-radius-control);
    background: var(--_bg);
    color: var(--_fg);
    font: inherit;
    font-size: var(--_font-size);
    font-weight: var(--ep-font-weight-semibold);
    line-height: var(--ep-font-line-height-tight);
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    transition:
      background-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard),
      border-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
  }

  .button:hover {
    background: var(--_bg-hover);
  }

  .button:active {
    background: var(--_bg-active);
  }

  .button:focus-visible {
    ${focusRing}
  }

  .button:disabled {
    background: var(--ep-color-interactive-disabled);
    border-color: transparent;
    color: var(--ep-color-text-disabled);
    cursor: not-allowed;
  }

  ::slotted(ep-icon),
  ep-icon {
    font-size: var(--_icon-size);
  }

  @media (forced-colors: active) {
    .button {
      border-color: ButtonText;
    }

    .button:disabled {
      border-color: GrayText;
      color: GrayText;
    }
  }
`;

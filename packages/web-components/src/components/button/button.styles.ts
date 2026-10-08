import { css } from 'lit';
import { focusRing } from '../../styles/shared.js';

/** Shared by ep-button and ep-icon-button. */
export const buttonStyles = css`
  :host {
    display: inline-flex;
    vertical-align: middle;
    --_height: var(--ep-size-control-md);
    --_padding: var(--ep-space-200);
    --_font-size: var(--ep-font-size-200);
    --_icon-size: var(--ep-size-icon-md);
    --_bg: var(--ep-color-interactive-primary-default);
    --_bg-hover: var(--ep-color-interactive-primary-hover);
    --_bg-active: var(--ep-color-interactive-primary-active);
    --_fg: var(--ep-color-text-on-primary);
    --_border: transparent;
  }

  :host([full-width]) {
    display: flex;
  }

  :host([size='sm']) {
    --_height: var(--ep-size-control-sm);
    --_padding: var(--ep-space-150);
    --_icon-size: var(--ep-size-icon-sm);
  }

  :host([size='lg']) {
    --_height: var(--ep-size-control-lg);
    --_padding: var(--ep-space-300);
    --_font-size: var(--ep-font-size-300);
    --_icon-size: var(--ep-size-icon-lg);
  }

  :host([variant='secondary']) {
    --_bg: var(--ep-color-interactive-secondary-default);
    --_bg-hover: var(--ep-color-interactive-secondary-hover);
    --_bg-active: var(--ep-color-interactive-secondary-active);
    --_fg: var(--ep-color-text-primary);
    --_border: var(--ep-color-border-strong);
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
    --_fg: var(--ep-color-text-on-color);
  }

  .button {
    position: relative;
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

  /* Extends the hit area of buttons shorter than the minimum target, without changing their size. */
  .button::before {
    content: '';
    position: absolute;
    inset: min(0px, calc((var(--_height) - var(--ep-size-target-min)) / 2));
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

  /* Disabled keeps each variant's shape: filled buttons stay filled, outlined stay outlined, ghost stays clear. */
  .button:disabled {
    background: var(--ep-color-interactive-disabled);
    border-color: transparent;
    color: var(--ep-color-text-disabled);
    cursor: not-allowed;
  }

  :host(:is([variant='secondary'], [variant='tertiary'])) .button:disabled {
    background: transparent;
    border-color: var(--ep-color-border-default);
  }

  :host([variant='ghost']) .button:disabled {
    background: transparent;
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

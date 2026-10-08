import { css } from 'lit';
import { focusRing } from './shared.js';

/** The bordered box shared by text field, textarea and select. */
export const inputStyles = css`
  :host {
    display: block;
    --_height: var(--ep-size-control-md);
    --_padding: var(--ep-space-150);
    /* 16px on touch screens at every size, so iOS Safari doesn't zoom the page on focus. */
    --_font-size: var(--ep-font-size-input);
  }

  :host([size='sm']) {
    --_height: var(--ep-size-control-sm);
    --_padding: var(--ep-space-100);
  }

  :host([size='lg']) {
    --_height: var(--ep-size-control-lg);
    --_padding: var(--ep-space-200);
    --_font-size: var(--ep-font-size-300);
  }

  .box {
    position: relative;
    display: flex;
    align-items: center;
    gap: var(--ep-space-100);
    min-height: var(--_height);
    padding: 0 var(--_padding);
    border: var(--ep-border-width-thin) solid var(--ep-color-border-strong);
    border-radius: var(--ep-radius-control);
    background: var(--ep-color-surface-default);
    color: var(--ep-color-text-primary);
    transition: border-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard);
  }

  .box:hover {
    border-color: var(--ep-color-text-secondary);
  }

  .box:focus-within {
    ${focusRing}
    outline-offset: 0;
    border-color: var(--ep-color-border-focus);
  }

  .box.invalid {
    border-color: var(--ep-color-border-danger);
  }

  .box.disabled {
    border-color: var(--ep-color-border-default);
    background: var(--ep-color-interactive-disabled);
    color: var(--ep-color-text-disabled);
    cursor: not-allowed;
  }

  .control {
    flex: 1;
    min-width: 0;
    align-self: stretch;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: inherit;
    font: inherit;
    font-size: var(--_font-size);
    line-height: var(--ep-font-line-height-normal);
  }

  .control::placeholder {
    color: var(--ep-color-text-secondary);
    opacity: 1;
  }

  .control:disabled {
    cursor: not-allowed;
  }

  .box ::slotted(ep-icon),
  .box > ep-icon {
    font-size: var(--ep-size-icon-md);
    color: var(--ep-color-text-secondary);
  }

  @media (forced-colors: active) {
    .box {
      border-color: FieldText;
    }

    .box.disabled {
      border-color: GrayText;
    }
  }
`;

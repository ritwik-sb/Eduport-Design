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
    /* Solid fills (primary, danger) get a rim light and a glow tinted by their own color; the rest stay flat. */
    --_shadow: 0 0 0 0 transparent;
    --_shade: none;
    --_lift: 0px;
    --_glow: color-mix(in srgb, var(--_bg) calc(var(--ep-effect-glow-strength) * 100%), transparent);
    /* A hard edge under the button when the style asks for one (effect.depth-control). Pressing moves the button
       down by motion.distance.press, which covers the edge, so a pressed button sits flat. */
    --_depth: var(--ep-effect-depth-control);
    --_edge: color-mix(in srgb, var(--_bg) 60%, black);
    --_press: min(var(--_depth), var(--ep-motion-distance-press));
    --_edge-shadow: 0 var(--_depth) 0 var(--_edge);
    --_edge-pressed: 0 calc(var(--_depth) - var(--_press)) 0 var(--_edge);
  }

  :host(:is(:not([variant]), [variant='primary'], [variant='danger'])) {
    --_lift: var(--ep-motion-distance-lift);
    --_shade: linear-gradient(to bottom, transparent 35%, rgb(0 0 0 / calc(0.07 * var(--ep-effect-sheen-strength))));
    --_shadow: var(--ep-shadow-sheen), 0 1px 2px rgb(0 0 0 / 0.16), 0 4px 10px -4px var(--_glow);
    --_shadow-hover: var(--ep-shadow-sheen), 0 1px 2px rgb(0 0 0 / 0.16), 0 8px 18px -6px var(--_glow);
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
    --_border: var(--ep-color-border-default);
    --_edge: var(--_border);
    --_shadow: var(--ep-shadow-control);
    --_lift: var(--ep-motion-distance-lift);
  }

  :host([variant='tertiary']) {
    --_bg: var(--ep-color-interactive-ghost-default);
    --_bg-hover: var(--ep-color-accent-subtle);
    --_bg-active: var(--ep-color-accent-subtle);
    --_fg: var(--ep-color-text-link);
    --_border: var(--ep-color-interactive-primary-default);
    --_edge: var(--_border);
  }

  :host([variant='ghost']) {
    --_bg: var(--ep-color-interactive-ghost-default);
    --_bg-hover: var(--ep-color-interactive-ghost-hover);
    --_bg-active: var(--ep-color-interactive-ghost-active);
    --_fg: var(--ep-color-text-primary);
    --_depth: 0px;
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
    background: var(--_shade), var(--_bg);
    box-shadow: var(--_edge-shadow), var(--_shadow);
    color: var(--_fg);
    font: inherit;
    font-size: var(--_font-size);
    font-weight: var(--ep-font-weight-semibold);
    line-height: var(--ep-font-line-height-tight);
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    /* Letting go springs back; pressing in is instant (see :active). Both distances are zero under reduced motion. */
    transition:
      background-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard),
      border-color var(--ep-motion-duration-fast) var(--ep-motion-easing-standard),
      box-shadow var(--ep-motion-duration-normal) var(--ep-motion-easing-standard),
      transform var(--ep-motion-duration-normal) var(--ep-motion-easing-spring);
  }

  /* Extends the hit area of buttons shorter than the minimum target, without changing their size. */
  .button::before {
    content: '';
    position: absolute;
    inset: min(0px, calc((var(--_height) - var(--ep-size-target-min)) / 2));
  }

  .button:hover {
    background: var(--_shade), var(--_bg-hover);
  }

  @media (hover: hover) {
    .button:not(:disabled):hover {
      transform: translateY(calc(-1 * var(--_lift)));
      box-shadow: var(--_edge-shadow), var(--_shadow-hover, var(--_shadow));
    }
  }

  .button:active {
    background: var(--_shade), var(--_bg-active);
  }

  .button:not(:disabled):active {
    transform: translateY(var(--_press)) scale(var(--ep-motion-scale-press));
    box-shadow: var(--_edge-pressed), var(--_shadow);
    transition-duration: 50ms;
  }

  .button:focus-visible {
    ${focusRing}
  }

  /* Disabled keeps each variant's shape: filled buttons stay filled, outlined stay outlined, ghost stays clear. */
  .button:disabled {
    background: var(--ep-color-interactive-disabled);
    box-shadow: none;
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

  slot[hidden] {
    display: none;
  }

  :host([loading]) .button {
    cursor: progress;
  }

  /* A progress indicator, so it keeps turning under reduced motion: it's the only sign that work is happening. */
  .spinner {
    flex: none;
    width: var(--_icon-size);
    height: var(--_icon-size);
    border: 2px solid currentColor;
    border-inline-end-color: transparent;
    border-radius: 50%;
    animation:
      spinner-in var(--ep-motion-duration-fast) var(--ep-motion-easing-enter),
      spinner-turn 1s linear infinite;
  }

  @keyframes spinner-in {
    from {
      opacity: 0;
    }
  }

  @keyframes spinner-turn {
    to {
      transform: rotate(1turn);
    }
  }

  @media (forced-colors: active) {
    .button {
      border-color: ButtonText;
      background-image: none;
    }

    .button:disabled {
      border-color: GrayText;
      color: GrayText;
    }
  }
`;

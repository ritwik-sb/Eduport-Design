import { LitElement, css, html } from 'lit';

/**
 * A spinning indicator for a short wait of unknown length, like a button that is saving.
 * For waits with a known amount of work, use `<ep-progress-bar>`; for loading page content, use `<ep-skeleton>`.
 *
 * It keeps spinning when the user prefers reduced motion, because a still spinner looks frozen.
 *
 * @tag ep-spinner
 * @csspart base - The SVG.
 */
export class EpSpinner extends LitElement {
  static properties = {
    label: {},
    size: { reflect: true },
  };

  static styles = css`
    :host {
      display: inline-flex;
      vertical-align: middle;
      --_size: var(--ep-size-icon-md);
      color: var(--ep-color-accent-default);
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([size='sm']) {
      --_size: var(--ep-size-icon-sm);
    }

    :host([size='lg']) {
      --_size: var(--ep-space-400);
    }

    svg {
      width: var(--_size);
      height: var(--_size);
      animation: spin 0.8s linear infinite;
    }

    .track {
      stroke: var(--ep-color-border-default);
    }

    .arc {
      stroke: currentColor;
    }

    @keyframes spin {
      to {
        transform: rotate(360deg);
      }
    }

    /* Slower, but still turning, so it never looks frozen. */
    @media (prefers-reduced-motion: reduce) {
      svg {
        animation-duration: 1.6s;
      }
    }

    @media (forced-colors: active) {
      .track {
        stroke: GrayText;
      }

      .arc {
        stroke: CanvasText;
      }
    }
  `;

  /** What is loading, like "Saving". Leave empty when nearby text already says it, such as a button label. */
  declare label: string;
  /** `sm` 16px, `md` 18px (icon sizes), `lg` 32px for a page or panel. Inside a button, use `sm`. */
  declare size: 'sm' | 'md' | 'lg';

  constructor() {
    super();
    this.label = 'Loading';
    this.size = 'md';
  }

  updated() {
    if (this.label) {
      this.setAttribute('role', 'img');
      this.setAttribute('aria-label', this.label);
      this.removeAttribute('aria-hidden');
    } else {
      this.removeAttribute('role');
      this.removeAttribute('aria-label');
      this.setAttribute('aria-hidden', 'true');
    }
  }

  render() {
    return html`<svg part="base" viewBox="0 0 24 24" fill="none" stroke-width="3" aria-hidden="true">
      <circle class="track" cx="12" cy="12" r="9.5"></circle>
      <path class="arc" d="M12 2.5a9.5 9.5 0 0 1 9.5 9.5" stroke-linecap="round"></path>
    </svg>`;
  }
}

import { LitElement, css, html } from 'lit';
import { baseStyles } from '../../styles/shared.js';

/**
 * A gray placeholder in the shape of content that is still loading, so the layout doesn't jump when it arrives.
 * Skeletons are hidden from assistive technology. Mark the region that is loading with `aria-busy="true"`
 * and remove it when the content is in.
 *
 * Size it with CSS: `width` and `height` on the element. Text skeletons follow the font size around them.
 *
 * @tag ep-skeleton
 * @csspart line - Each placeholder line or shape.
 */
export class EpSkeleton extends LitElement {
  static properties = {
    variant: { reflect: true },
    lines: { type: Number },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: block;
      }

      :host([variant='circle']),
      :host([variant='rect']) {
        width: var(--ep-size-control-md);
        height: var(--ep-size-control-md);
      }

      :host([variant='rect']) {
        width: 100%;
      }

      .lines {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        height: 100%;
      }

      .line {
        height: 1em;
        border-radius: var(--ep-radius-indicator);
        /* border-default rather than surface-muted, which is nearly invisible on the dark page. */
        background: var(--ep-color-border-default);
        animation: pulse 1.6s var(--ep-motion-easing-standard) infinite;
      }

      .line:last-child:not(:first-child) {
        width: 60%;
      }

      :host([variant='rect']) .line,
      :host([variant='circle']) .line {
        height: 100%;
        border-radius: var(--ep-radius-container);
      }

      :host([variant='circle']) .line {
        border-radius: var(--ep-radius-round);
      }

      @keyframes pulse {
        50% {
          opacity: 0.5;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .line {
          animation: none;
        }
      }

      @media (forced-colors: active) {
        .line {
          border: 1px solid GrayText;
        }
      }
    `,
  ];

  /** `text` (lines that follow the font size), `rect` (an image or card) or `circle` (an avatar). */
  declare variant: 'text' | 'rect' | 'circle';
  /** Number of lines for `text`. The last of several is shorter, like a paragraph. */
  declare lines: number;

  constructor() {
    super();
    this.variant = 'text';
    this.lines = 1;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('aria-hidden', 'true');
  }

  render() {
    const count = this.variant === 'text' ? Math.max(1, Math.floor(this.lines)) : 1;
    return html`<div class="lines">
      ${Array.from({ length: count }, () => html`<div part="line" class="line"></div>`)}
    </div>`;
  }
}

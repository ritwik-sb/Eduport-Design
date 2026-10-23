import { LitElement, css, html } from 'lit';
import { baseStyles, toneStyles } from '../../styles/shared.js';
import '../icon/index.js';

/**
 * A rounded square holding an icon, in a categorical tone: the identity mark for a subject, a team or a calendar.
 * Decorative unless `label` is set.
 *
 * @tag ep-icon-tile
 * @csspart base - The tile.
 */
export class EpIconTile extends LitElement {
  static properties = {
    icon: {},
    tone: { reflect: true },
    size: { reflect: true },
    label: {},
  };

  static styles = [
    baseStyles,
    toneStyles,
    css`
      :host {
        display: inline-flex;
        --_size: 40px;
      }

      :host([size='sm']) {
        --_size: 32px;
      }

      :host([size='lg']) {
        --_size: 56px;
      }

      .base {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--_size);
        height: var(--_size);
        border-radius: var(--ep-radius-control);
        background: var(--ep-tone-bold);
        color: var(--ep-tone-on-bold);
        font-size: calc(var(--_size) * 0.5);
      }

      @media (forced-colors: active) {
        .base {
          border: 1px solid CanvasText;
          background: Canvas;
          color: CanvasText;
        }
      }
    `,
  ];

  /** Name of a registered icon. */
  declare icon: string;
  /** `1` to `6`: a categorical color. Unset is a neutral tile. */
  declare tone: '' | '1' | '2' | '3' | '4' | '5' | '6';
  declare size: 'sm' | 'md' | 'lg';
  /** Accessible name, when the icon alone carries meaning. */
  declare label: string;

  constructor() {
    super();
    this.icon = '';
    this.tone = '';
    this.size = 'md';
    this.label = '';
  }

  render() {
    return html`<span
      part="base"
      class="base"
      role=${this.label ? 'img' : 'presentation'}
      aria-label=${this.label || ''}
      ><ep-icon name=${this.icon}></ep-icon
    ></span>`;
  }
}

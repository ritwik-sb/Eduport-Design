import { LitElement, css, html, nothing } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import '../icon/index.js';

/**
 * A picture of a person. Falls back to their initials, then to a generic icon, when there's no image
 * or it fails to load. Avatars are always round, in every corner mode.
 *
 * @tag ep-avatar
 * @csspart base - The circle.
 */
export class EpAvatar extends LitElement {
  static properties = {
    name: {},
    src: {},
    size: { reflect: true },
    _failed: { state: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-flex;
        vertical-align: middle;
        --_size: 40px;
        --_font-size: var(--ep-font-size-200);
      }

      :host([size='xs']) {
        --_size: 24px;
        --_font-size: 10px;
      }

      :host([size='sm']) {
        --_size: 32px;
        --_font-size: var(--ep-font-size-100);
      }

      :host([size='lg']) {
        --_size: 56px;
        --_font-size: var(--ep-font-size-500);
      }

      :host([size='xl']) {
        --_size: 80px;
        --_font-size: var(--ep-font-size-700);
      }

      .base {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: var(--_size);
        height: var(--_size);
        overflow: hidden;
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-surface-muted);
        color: var(--ep-color-text-primary);
        font-size: var(--_font-size);
        font-weight: var(--ep-font-weight-semibold);
        line-height: 1;
        user-select: none;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      ep-icon {
        font-size: calc(var(--_size) * 0.55);
      }

      @media (forced-colors: active) {
        .base {
          border: 1px solid CanvasText;
        }
      }
    `,
  ];

  /** The person's name. Used for the accessible name and the initials. */
  declare name: string;
  /** Image URL. */
  declare src: string;
  declare size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  declare _failed: boolean;

  constructor() {
    super();
    this.name = '';
    this.src = '';
    this.size = 'md';
    this._failed = false;
  }

  willUpdate(changed: Map<string, unknown>) {
    if (changed.has('src')) this._failed = false;
  }

  get initials() {
    const words = this.name.trim().split(/\s+/).filter(Boolean);
    if (words.length === 0) return '';
    const first = words[0][0];
    const last = words.length > 1 ? words[words.length - 1][0] : '';
    return (first + last).toUpperCase();
  }

  render() {
    const content =
      this.src && !this._failed
        ? html`<img src=${this.src} alt="" @error=${() => (this._failed = true)} />`
        : this.initials
          ? html`<span aria-hidden="true">${this.initials}</span>`
          : html`<ep-icon name="user"></ep-icon>`;
    return html`<span part="base" class="base" role=${this.name ? 'img' : nothing} aria-label=${this.name || nothing} aria-hidden=${this.name ? nothing : 'true'}
      >${content}</span
    >`;
  }
}

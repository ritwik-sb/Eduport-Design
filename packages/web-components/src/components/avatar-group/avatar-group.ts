import { LitElement, css, html, nothing } from 'lit';
import { baseStyles } from '../../styles/shared.js';
import type { EpAvatar } from '../avatar/avatar.js';
import '../avatar/index.js';

/**
 * A row of overlapping `<ep-avatar>` elements for the people in a class, team or thread. Beyond `max` they collapse
 * into a "+N" count.
 *
 * @tag ep-avatar-group
 * @slot - `<ep-avatar>` elements.
 * @csspart count - The "+N" chip.
 */
export class EpAvatarGroup extends LitElement {
  static properties = {
    max: { type: Number },
    label: {},
    size: { reflect: true },
    _hidden: { state: true },
  };

  static styles = [
    baseStyles,
    css`
      :host {
        display: inline-flex;
        align-items: center;
        --_overlap: -8px;
        --_ring: var(--ep-color-surface-raised);
      }

      :host([size='sm']) {
        --_overlap: -6px;
      }

      .group {
        display: inline-flex;
        align-items: center;
      }

      ::slotted(ep-avatar) {
        border-radius: var(--ep-radius-round);
        box-shadow: 0 0 0 2px var(--_ring);
      }

      ::slotted(ep-avatar:not(:first-child)) {
        margin-inline-start: var(--_overlap);
      }

      .count {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: var(--_count-size, 32px);
        height: var(--_count-size, 32px);
        margin-inline-start: var(--_overlap);
        padding-inline: var(--ep-space-50);
        border-radius: var(--ep-radius-round);
        background: var(--ep-color-surface-muted);
        box-shadow: 0 0 0 2px var(--_ring);
        color: var(--ep-color-text-primary);
        font: var(--ep-font-label-sm);
        font-variant-numeric: tabular-nums;
      }

      :host([size='md']) .count {
        --_count-size: 40px;
      }

      :host([size='xs']) .count {
        --_count-size: 24px;
      }

      @media (forced-colors: active) {
        .count {
          border: 1px solid CanvasText;
        }
      }
    `,
  ];

  /** How many avatars to show before collapsing the rest into "+N". */
  declare max: number;
  /** Names the group, like "Students in Physics 11". */
  declare label: string;
  /** Applied to every avatar in the group. */
  declare size: 'xs' | 'sm' | 'md';
  declare _hidden: number;

  constructor() {
    super();
    this.max = 4;
    this.label = '';
    this.size = 'sm';
    this._hidden = 0;
  }

  get #avatars() {
    return [...this.children].filter((el): el is EpAvatar => el.localName === 'ep-avatar');
  }

  #sync = () => {
    const max = Math.max(1, Math.floor(this.max) || 1);
    const avatars = this.#avatars;
    avatars.forEach((avatar, index) => {
      avatar.hidden = index >= max;
      avatar.size = this.size;
    });
    this._hidden = Math.max(0, avatars.length - max);
  };

  willUpdate() {
    this.#sync();
  }

  render() {
    return html`<div class="group" role=${this.label ? 'group' : nothing} aria-label=${this.label || nothing}>
      <slot @slotchange=${this.#sync}></slot>
      ${this._hidden > 0 ? html`<span part="count" class="count" role="img" aria-label="${this._hidden} more">+${this._hidden}</span>` : nothing}
    </div>`;
  }
}

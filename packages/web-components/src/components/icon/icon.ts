import { LitElement, css, html, svg } from 'lit';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { icons } from '../../icons/icons.js';

const registry = new Map<string, string>(Object.entries(icons));
const instances = new Set<EpIcon>();

/**
 * Adds icons to the registry used by `<ep-icon>`. Values are the inner markup of a
 * 24×24 stroke icon (Tabler format, without the outer `<svg>`). Only register markup you trust.
 */
export function registerIcons(set: Record<string, string>): void {
  for (const [name, markup] of Object.entries(set)) registry.set(name, markup);
  for (const icon of instances) icon.requestUpdate();
}

/** Names of every registered icon. */
export function iconNames(): string[] {
  return [...registry.keys()];
}

/**
 * An SVG icon from the Tabler set. It is 1em square and uses `currentColor`, so it follows the surrounding text.
 * Icons are decorative by default; set `label` when the icon carries meaning on its own.
 *
 * @cssproperty --ep-icon-stroke-width - Stroke width in 24px units. Default 2.
 * @tag ep-icon
 * @csspart svg - The `<svg>` element.
 */
export class EpIcon extends LitElement {
  static properties = {
    name: { reflect: true },
    label: {},
  };

  static styles = css`
    :host {
      display: inline-flex;
      flex: none;
      width: 1em;
      height: 1em;
      color: inherit;
      vertical-align: -0.125em;
    }

    :host([hidden]) {
      display: none;
    }

    svg {
      width: 100%;
      height: 100%;
      stroke-width: var(--ep-icon-stroke-width, 2);
    }
  `;

  /** Icon name, for example `check` or `calendar`. */
  declare name: string;
  /** Accessible name. When empty the icon is hidden from assistive technology. */
  declare label: string;

  constructor() {
    super();
    this.name = '';
    this.label = '';
  }

  connectedCallback() {
    super.connectedCallback();
    instances.add(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    instances.delete(this);
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
    const markup = registry.get(this.name) ?? '';
    return html`<svg
      part="svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
      aria-hidden="true"
    >
      ${svg`${unsafeSVG(markup)}`}
    </svg>`;
  }
}

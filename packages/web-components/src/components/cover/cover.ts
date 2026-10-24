import { LitElement, css, html, svg } from 'lit';
import { baseStyles, toneStyles } from '../../styles/shared.js';

const W = 320;
const H = 180;

/** A small seeded random number generator, so one `seed` always draws the same picture. */
function random(seed: number) {
  let a = (Math.floor(seed) || 1) >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const round = (n: number) => Math.round(n * 10) / 10;

type Pattern = 'waves' | 'rings' | 'dots' | 'blocks' | 'orbit' | 'mesh';

const PATTERNS: Record<Pattern, (rnd: () => number) => ReturnType<typeof svg>> = {
  /** Layered hills, back to front, each a little darker. */
  waves(rnd) {
    const layers = [];
    const count = 5;
    for (let i = 0; i < count; i++) {
      const base = H * (0.32 + (i / count) * 0.62);
      const amp = 14 + rnd() * 22;
      const phase = rnd() * Math.PI * 2;
      const freq = 1 + rnd() * 1.4;
      let d = `M0 ${H} L0 ${round(base)}`;
      for (let x = 0; x <= W; x += 10) {
        d += ` L${x} ${round(base + Math.sin((x / W) * Math.PI * 2 * freq + phase) * amp)}`;
      }
      d += ` L${W} ${H} Z`;
      layers.push(svg`<path d=${d} fill="var(--_ink)" fill-opacity=${round(0.1 + (i / count) * 0.38)} />`);
    }
    return svg`${layers}`;
  },
  /** Concentric circles spreading from a point near a corner. */
  rings(rnd) {
    const cx = rnd() > 0.5 ? W * (0.78 + rnd() * 0.2) : W * (0.02 + rnd() * 0.2);
    const cy = H * (0.1 + rnd() * 0.5);
    const rings = [];
    for (let i = 1; i <= 9; i++) {
      rings.push(
        svg`<circle cx=${round(cx)} cy=${round(cy)} r=${i * 22} fill="none" stroke="var(--_ink)" stroke-opacity=${round(0.6 - i * 0.055)} stroke-width=${i % 3 === 0 ? 3 : 1.5} />`,
      );
    }
    return svg`${rings}<circle cx=${round(cx)} cy=${round(cy)} r="14" fill="var(--_ink)" />`;
  },
  /** A halftone: dots grow toward a point of light. */
  dots(rnd) {
    const fx = W * (0.2 + rnd() * 0.6);
    const fy = H * (0.15 + rnd() * 0.7);
    const dots = [];
    const step = 16;
    for (let y = step / 2; y < H; y += step) {
      for (let x = step / 2; x < W; x += step) {
        const dist = Math.hypot(x - fx, y - fy) / Math.hypot(W, H);
        const r = Math.max(0.6, 7.2 * (1 - dist * 2.1));
        dots.push(svg`<circle cx=${x} cy=${y} r=${round(r)} />`);
      }
    }
    return svg`<g fill="var(--_ink)" fill-opacity="0.8">${dots}</g>`;
  },
  /** A mosaic of rounded squares at different strengths, like a bento heat map. */
  blocks(rnd) {
    const size = 22;
    const gap = 6;
    const cells = [];
    for (let y = 0; y * (size + gap) < H; y++) {
      for (let x = 0; x * (size + gap) < W; x++) {
        const v = rnd();
        if (v < 0.28) continue;
        cells.push(
          svg`<rect x=${x * (size + gap) + 4} y=${y * (size + gap) + 4} width=${size} height=${size} rx="6" fill="var(--_ink)" fill-opacity=${round(0.12 + v * 0.7)} />`,
        );
      }
    }
    return svg`${cells}`;
  },
  /** Tilted orbits around a sun, with a few planets. */
  orbit(rnd) {
    const cx = W * (0.55 + rnd() * 0.25);
    const cy = H * (0.4 + rnd() * 0.25);
    const tilt = -20 + rnd() * 40;
    const parts = [];
    for (let i = 0; i < 5; i++) {
      const rx = 40 + i * 36;
      const ry = rx * 0.38;
      const angle = rnd() * Math.PI * 2;
      parts.push(
        svg`<g transform=${`rotate(${round(tilt)} ${round(cx)} ${round(cy)})`}>
          <ellipse cx=${round(cx)} cy=${round(cy)} rx=${rx} ry=${round(ry)} fill="none" stroke="var(--_ink)" stroke-opacity="0.45" stroke-width="1.5" />
          <circle cx=${round(cx + Math.cos(angle) * rx)} cy=${round(cy + Math.sin(angle) * ry)} r=${i % 2 ? 5 : 8} fill="var(--_ink)" />
        </g>`,
      );
    }
    return svg`${parts}<circle cx=${round(cx)} cy=${round(cy)} r="16" fill="var(--_ink)" /><circle cx=${round(cx)} cy=${round(cy)} r="30" fill="var(--_ink)" fill-opacity="0.2" />`;
  },
  /** Soft blurred blobs: a gradient mesh. */
  mesh(rnd) {
    const blobs = [];
    for (let i = 0; i < 4; i++) {
      blobs.push(
        svg`<circle cx=${round(rnd() * W)} cy=${round(rnd() * H)} r=${round(50 + rnd() * 50)} fill="var(--_ink)" fill-opacity=${round(0.35 + rnd() * 0.4)} />`,
      );
    }
    return svg`<filter id="blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="26" /></filter><g filter="url(#blur)">${blobs}</g>`;
  },
};

/**
 * Generated artwork for the top of a card, a course tile or an empty state: waves, rings, dots, blocks, orbits or a
 * soft mesh, drawn in a category color. The same `seed` always draws the same picture, so give each course its own.
 * It is decorative and hidden from assistive technology.
 *
 * @tag ep-cover
 * @slot - Optional content over the artwork, such as a subject icon or a title chip.
 * @csspart art - The `<svg>`.
 */
export class EpCover extends LitElement {
  static properties = {
    pattern: { reflect: true },
    seed: { type: Number },
    tone: { reflect: true },
  };

  static styles = [
    baseStyles,
    toneStyles,
    css`
      :host {
        position: relative;
        display: block;
        overflow: hidden;
        aspect-ratio: var(--ep-cover-ratio, 16 / 9);
        border-radius: var(--ep-cover-radius, var(--ep-radius-control));
        /* With no tone the cover is brand orange. */
        --_bg: var(--ep-color-accent-subtle);
        --_ink: var(--ep-color-accent-default);
        background: var(--_bg);
        isolation: isolate;
      }

      :host([tone]:not([tone=''])) {
        --_bg: var(--ep-tone-subtle);
        --_ink: var(--ep-tone-bold);
      }

      svg {
        position: absolute;
        inset: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
      }

      .content {
        position: relative;
        display: flex;
        height: 100%;
        padding: var(--ep-space-150);
      }

      @media (forced-colors: active) {
        :host {
          border: 1px solid CanvasText;
        }

        svg {
          display: none;
        }
      }
    `,
  ];

  /** `waves`, `rings`, `dots`, `blocks`, `orbit` or `mesh`. */
  declare pattern: Pattern;
  /** Any number. Different seeds give different pictures in the same style. */
  declare seed: number;
  /** `1` to `6`: a categorical color. Unset is the brand orange. */
  declare tone: '' | '1' | '2' | '3' | '4' | '5' | '6';

  constructor() {
    super();
    this.pattern = 'waves';
    this.seed = 1;
    this.tone = '';
  }

  render() {
    const draw = PATTERNS[this.pattern] ?? PATTERNS.waves;
    return html`<svg part="art" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        ${draw(random(this.seed))}
      </svg>
      <div class="content"><slot></slot></div>`;
  }
}

import { LitElement, css, html, nothing, svg } from 'lit';
import { baseStyles, toneStyles } from '../../styles/shared.js';

const W = 100;
const H = 32;
const PAD = 3;

/** Turns `[1, 2, 3]` or `"1, 2, 3"` into finite numbers. */
function parse(values: unknown): number[] {
  const list = Array.isArray(values) ? values : String(values ?? '').split(/[\s,]+/);
  return list.filter((v) => v !== '' && v !== null).map(Number).filter(Number.isFinite);
}

/** A smooth path through the points (monotone cubic), so a trend reads as a curve rather than a zigzag. */
function smooth(points: [number, number][]): string {
  if (points.length < 2) return '';
  const n = points.length;
  const dx: number[] = [];
  const slope: number[] = [];
  for (let i = 0; i < n - 1; i++) {
    dx.push(points[i + 1][0] - points[i][0]);
    slope.push((points[i + 1][1] - points[i][1]) / dx[i]);
  }
  // Tangents are clamped (Fritsch-Carlson) so a steep step can't make the curve dip outside the data.
  const clamp = (v: number, a: number, b: number) => Math.sign(v) * Math.min(Math.abs(v), 3 * Math.min(Math.abs(a), Math.abs(b)));
  const t = [slope[0]];
  for (let i = 1; i < n - 1; i++) {
    t.push(slope[i - 1] * slope[i] <= 0 ? 0 : clamp((slope[i - 1] + slope[i]) / 2, slope[i - 1], slope[i]));
  }
  t.push(slope[n - 2]);
  let d = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 0; i < n - 1; i++) {
    const h = dx[i] / 3;
    d += ` C${(points[i][0] + h).toFixed(2)} ${(points[i][1] + t[i] * h).toFixed(2)} ${(points[i + 1][0] - h).toFixed(2)} ${(points[i + 1][1] - t[i + 1] * h).toFixed(2)} ${points[i + 1][0].toFixed(2)} ${points[i + 1][1].toFixed(2)}`;
  }
  return d;
}

/**
 * A tiny trend chart with no axes, for a stat tile or a table row: a smooth line, a line with a soft area under it,
 * or bars. The last value is marked. Give it a `label` that says what it shows, because the picture alone doesn't.
 *
 * ```html
 * <ep-sparkline values="12, 18, 15, 24, 31, 28, 40" label="Submissions, last 7 days"></ep-sparkline>
 * ```
 *
 * @tag ep-sparkline
 * @csspart chart - The `<svg>`.
 * @csspart marker - The dot on the last value (`line` and `area`).
 */
export class EpSparkline extends LitElement {
  static properties = {
    values: { converter: { fromAttribute: (v: string | null) => parse(v ?? '') } },
    variant: { reflect: true },
    tone: { reflect: true },
    label: {},
  };

  static styles = [
    baseStyles,
    toneStyles,
    css`
      :host {
        position: relative;
        display: inline-block;
        width: var(--ep-sparkline-width, 7.5rem);
        height: var(--ep-sparkline-height, 2.5rem);
        --_ink: var(--ep-color-accent-default);
        vertical-align: middle;
      }

      :host([tone]:not([tone=''])) {
        --_ink: var(--ep-tone-bold);
      }

      /* The chart wipes in from the left; the move token is 0 under reduced motion, so it just appears. */
      svg {
        display: block;
        animation: wipe calc(var(--ep-motion-duration-move) * 4) var(--ep-motion-easing-standard) both;
        width: 100%;
        height: 100%;
        overflow: visible;
      }

      .line {
        fill: none;
        stroke: var(--_ink);
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        vector-effect: non-scaling-stroke;
      }

      .stop-top {
        stop-color: var(--_ink);
        stop-opacity: 0.28;
      }

      .stop-bottom {
        stop-color: var(--_ink);
        stop-opacity: 0;
      }

      .bar {
        fill: var(--_ink);
        fill-opacity: 0.7;
      }

      .bar.last {
        fill-opacity: 1;
      }

      .marker {
        position: absolute;
        width: 8px;
        height: 8px;
        margin: -4px 0 0 -4px;
        border-radius: 50%;
        background: var(--_ink);
        box-shadow:
          0 0 0 2px var(--ep-color-surface-raised),
          0 0 10px color-mix(in srgb, var(--_ink) 60%, transparent);
        animation: appear calc(var(--ep-motion-duration-move) * 4) var(--ep-motion-easing-standard) both;
      }

      @keyframes wipe {
        from {
          clip-path: inset(-10px 100% -10px -10px);
        }
        to {
          clip-path: inset(-10px -10px -10px -10px);
        }
      }

      @keyframes appear {
        from {
          opacity: 0;
        }
      }

      @media (forced-colors: active) {
        .line {
          stroke: Highlight;
        }

        .area,
        .stop-top,
        .stop-bottom {
          display: none;
        }

        .bar {
          fill: Highlight;
        }

        .marker {
          background: Highlight;
          box-shadow: none;
        }
      }
    `,
  ];

  /** The numbers to draw, as an array or a comma-separated attribute. */
  declare values: number[];
  /** `area` (default) draws a line with a soft fill under it, `line` only the line, `bars` one bar per value. */
  declare variant: 'area' | 'line' | 'bars';
  /** `1` to `6`: a categorical color. Unset is the brand orange. */
  declare tone: '' | '1' | '2' | '3' | '4' | '5' | '6';
  /** What the chart shows, like "Submissions, last 7 days". Without it a summary of the values is used. */
  declare label: string;

  constructor() {
    super();
    this.values = [];
    this.variant = 'area';
    this.tone = '';
    this.label = '';
  }

  render() {
    const values = parse(this.values);
    if (values.length < 2) return nothing;
    const min = Math.min(...values);
    const max = Math.max(...values);
    const span = max - min || 1;
    const x = (i: number) => (i / (values.length - 1)) * W;
    const y = (v: number) => H - PAD - ((v - min) / span) * (H - PAD * 2);
    const points = values.map((v, i): [number, number] => [x(i), y(v)]);
    const [lastX, lastY] = points[points.length - 1];
    const name = this.label || `Trend of ${values.length} values, from ${values[0]} to ${values[values.length - 1]}`;

    if (this.variant === 'bars') {
      const slot = W / values.length;
      const width = slot * 0.62;
      return html`<svg part="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label=${name}>
        ${values.map((v, i) => {
          const h = Math.max(2, ((v - Math.min(0, min)) / (max - Math.min(0, min) || 1)) * (H - 2));
          return svg`<rect
            class="bar ${i === values.length - 1 ? 'last' : ''}"
            x=${(i * slot + (slot - width) / 2).toFixed(2)}
            y=${(H - h).toFixed(2)}
            width=${width.toFixed(2)}
            height=${h.toFixed(2)}
            rx="1.2"
          ></rect>`;
        })}
      </svg>`;
    }

    const d = smooth(points);
    return html`<svg part="chart" viewBox="0 0 ${W} ${H}" preserveAspectRatio="none" role="img" aria-label=${name}>
        ${this.variant === 'area'
          ? svg`<defs>
                <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
                  <stop class="stop-top" offset="0"></stop>
                  <stop class="stop-bottom" offset="1"></stop>
                </linearGradient>
              </defs>
              <path class="area" fill="url(#fade)" d="${d} L${W} ${H} L0 ${H} Z"></path>`
          : nothing}
        <path class="line" d=${d}></path>
      </svg>
      <span
        part="marker"
        class="marker"
        aria-hidden="true"
        style="left: ${(lastX / W) * 100}%; top: ${(lastY / H) * 100}%"
      ></span>`;
  }
}

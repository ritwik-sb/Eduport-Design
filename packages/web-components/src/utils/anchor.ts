export type Placement = 'top' | 'bottom' | 'left' | 'right';
export type Align = 'start' | 'center' | 'end';

const GAP = 4;
const EDGE = 8;
const opposite = { top: 'bottom', bottom: 'top', left: 'right', right: 'left' } as const;

/**
 * Positions a fixed-position floating element next to its anchor, flipping to the opposite side
 * when the preferred side doesn't fit, and keeping it inside the viewport.
 */
export function placeNextTo(anchor: Element, floating: HTMLElement, placement: Placement, align: Align = 'start') {
  const a = anchor.getBoundingClientRect();
  const f = floating.getBoundingClientRect();
  const space = {
    top: a.top - GAP,
    bottom: innerHeight - a.bottom - GAP,
    left: a.left - GAP,
    right: innerWidth - a.right - GAP,
  };
  const size = placement === 'top' || placement === 'bottom' ? f.height : f.width;
  const side =
    space[placement] >= size || space[placement] >= space[opposite[placement]] ? placement : opposite[placement];
  let top: number;
  let left: number;
  if (side === 'top' || side === 'bottom') {
    top = side === 'top' ? a.top - f.height - GAP : a.bottom + GAP;
    left = align === 'start' ? a.left : align === 'end' ? a.right - f.width : a.left + a.width / 2 - f.width / 2;
  } else {
    left = side === 'left' ? a.left - f.width - GAP : a.right + GAP;
    top = align === 'start' ? a.top : align === 'end' ? a.bottom - f.height : a.top + a.height / 2 - f.height / 2;
  }
  left = Math.min(Math.max(EDGE, left), innerWidth - f.width - EDGE);
  top = Math.min(Math.max(EDGE, top), innerHeight - f.height - EDGE);
  floating.style.top = `${Math.round(top)}px`;
  floating.style.left = `${Math.round(left)}px`;
  floating.dataset.side = side;
}

/**
 * Sets an ARIA attribute on a trigger element. For Eduport buttons, whose real `<button>` is in shadow DOM,
 * the attribute goes on that inner button so assistive technology reads it from the element with the role.
 */
export function setTriggerAria(trigger: Element, name: string, value: string | null) {
  const target = trigger.shadowRoot?.querySelector('[part="base"]') ?? trigger;
  if (value === null) target.removeAttribute(name);
  else target.setAttribute(name, value);
}

import { afterEach, describe, expect, it, vi } from 'vitest';
import type { EpButton } from '../src/components/button/index.js';
import { toast, type EpToast } from '../src/components/toast/index.js';
import type { EpTooltip } from '../src/components/tooltip/index.js';
import { expectNoA11yViolations, fixture, settle, shadow } from './helpers.js';

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

afterEach(() => {
  vi.useRealTimers();
  delete document.documentElement.dataset.motion;
});

describe('motion tokens', () => {
  const read = (el: Element, name: string) => getComputedStyle(el).getPropertyValue(`--ep-motion-${name}`).trim();

  it('drop movement and cap durations under data-motion="reduced", on the page or a subtree', async () => {
    const box = await fixture('<div><span></span></div>');
    expect(read(box, 'distance-sm')).toBe('4px');
    expect(read(box, 'scale-enter')).toBe('0.98');

    box.setAttribute('data-motion', 'reduced');
    const inner = box.firstElementChild!;
    expect(read(inner, 'distance-sm')).toBe('0px');
    expect(read(inner, 'distance-md')).toBe('0px');
    expect(read(inner, 'scale-enter')).toBe('1');
    expect(parseFloat(read(inner, 'duration-move'))).toBe(0);
    // Durations stay non-zero so fades still run, but no longer than 100ms.
    expect(read(inner, 'duration-slow')).toMatch(/^(100ms|\.1s|0\.1s)$/);
  });
});

describe('ep-tooltip timing', () => {
  const isOpen = (tip: EpTooltip) => shadow(tip, '.tooltip').classList.contains('open');

  it('opens 500ms after hover, at once on keyboard focus', async () => {
    const tip = await fixture<EpTooltip>('<ep-tooltip content="Edit"><button>Edit</button></ep-tooltip>');
    tip.dispatchEvent(new PointerEvent('pointerenter'));
    await wait(300);
    await settle();
    expect(isOpen(tip)).toBe(false);
    await wait(300);
    await settle();
    expect(isOpen(tip)).toBe(true);

    tip.dispatchEvent(new PointerEvent('pointerleave'));
    await wait(500);
    await settle();
    expect(isOpen(tip)).toBe(false);

    await wait(400);
    tip.querySelector('button')!.focus();
    await settle();
    expect(isOpen(tip)).toBe(true);
  });

  it('opens a neighbor at once while another tooltip is showing', async () => {
    const row = await fixture(`<div>
      <ep-tooltip content="One"><button>1</button></ep-tooltip>
      <ep-tooltip content="Two"><button>2</button></ep-tooltip>
    </div>`);
    const [one, two] = [...row.querySelectorAll<EpTooltip>('ep-tooltip')];
    one.dispatchEvent(new PointerEvent('pointerenter'));
    await wait(600);
    one.dispatchEvent(new PointerEvent('pointerleave'));
    two.dispatchEvent(new PointerEvent('pointerenter'));
    await settle();
    expect(isOpen(two)).toBe(true);
    two.dispatchEvent(new PointerEvent('pointerleave'));
    await wait(150);
  });
});

describe('ep-button loading', () => {
  it('ignores presses, sets aria-busy and shows the spinner only after 400ms', async () => {
    const button = await fixture<EpButton>('<ep-button loading><span slot="prefix">✓</span>Save</ep-button>');
    const onClick = vi.fn();
    button.addEventListener('click', onClick);

    shadow(button, 'button').click();
    expect(onClick).not.toHaveBeenCalled();
    expect(shadow(button, 'button').getAttribute('aria-busy')).toBe('true');
    expect(button.shadowRoot!.querySelector('.spinner')).toBeNull();

    await wait(450);
    await settle();
    expect(button.shadowRoot!.querySelector('.spinner')).not.toBeNull();
    expect(shadow(button, 'slot[name="prefix"]').hidden).toBe(true);
    await expectNoA11yViolations();

    // Cleared 50ms after appearing, the spinner still stays for its 500ms minimum.
    button.loading = false;
    await settle();
    expect(shadow(button, 'button').hasAttribute('aria-busy')).toBe(false);
    expect(button.shadowRoot!.querySelector('.spinner')).not.toBeNull();
    await wait(550);
    await settle();
    expect(button.shadowRoot!.querySelector('.spinner')).toBeNull();

    shadow(button, 'button').click();
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('never flashes a spinner for a quick action', async () => {
    const button = await fixture<EpButton>('<ep-button>Save</ep-button>');
    button.loading = true;
    await wait(200);
    button.loading = false;
    await wait(400);
    await settle();
    expect(button.shadowRoot!.querySelector('.spinner')).toBeNull();
  });

  it("doesn't submit its form while loading", async () => {
    const form = await fixture<HTMLFormElement>('<form><ep-button type="submit" loading>Save</ep-button></form>');
    const onSubmit = vi.fn((event: Event) => event.preventDefault());
    form.addEventListener('submit', onSubmit);
    shadow(form.querySelector('ep-button')!, 'button').click();
    expect(onSubmit).not.toHaveBeenCalled();
  });
});

describe('ep-toast timing', () => {
  const show = async (options: Parameters<typeof toast>[0], action = false) => {
    const element = toast(options);
    if (action) element.append(Object.assign(document.createElement('button'), { slot: 'action', textContent: 'Undo' }));
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await settle();
    return element;
  };

  it('stays 6s by default, longer for long messages, and until dismissed with an action', async () => {
    // Animation frames stay real, so toast() can attach each toast.
    vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout', 'Date'] });
    const short = await show({ message: 'Saved.' });
    const long = await show({ message: Array.from({ length: 45 }, (_, i) => `word${i}`).join(' ') });
    const undo = await show({ message: 'Lesson deleted.' }, true);
    const sticky: EpToast = await show({ message: 'Read me', duration: 0 });

    await vi.advanceTimersByTimeAsync(5900);
    expect(short.isConnected).toBe(true);
    await vi.advanceTimersByTimeAsync(200);
    // 45 words: 6s + 2s.
    await vi.advanceTimersByTimeAsync(1800);
    expect(long.isConnected).toBe(true);
    await vi.advanceTimersByTimeAsync(10000);
    vi.useRealTimers();
    await wait(300);
    expect(short.isConnected).toBe(false);
    expect(long.isConnected).toBe(false);
    expect(undo.isConnected).toBe(true);
    expect(sticky.isConnected).toBe(true);
    await undo.close();
    expect(undo.isConnected).toBe(false);
  });
});

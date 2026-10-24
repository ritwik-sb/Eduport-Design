import { describe, expect, it } from 'vitest';
import type { EpAvatarGroup } from '../src/components/avatar-group/index.js';
import { expectNoA11yViolations, fixture, settle, shadow } from './helpers.js';

describe('ep-progress-ring', () => {
  it('is a progressbar with its percentage as the value text', async () => {
    const ring = await fixture('<ep-progress-ring value="54" label="Chemistry completion"></ep-progress-ring>');
    const bar = shadow(ring, '[role="progressbar"]');
    expect(bar.getAttribute('aria-label')).toBe('Chemistry completion');
    expect(bar.getAttribute('aria-valuenow')).toBe('54');
    expect(bar.getAttribute('aria-valuetext')).toBe('54%');
    await expectNoA11yViolations(ring);
  });

  it('clamps values to the range', async () => {
    const ring = await fixture('<ep-progress-ring value="140" label="Done"></ep-progress-ring>');
    expect(shadow(ring, '[role="progressbar"]').getAttribute('aria-valuenow')).toBe('100');
  });
});

describe('ep-avatar-group', () => {
  it('collapses avatars beyond max into a count', async () => {
    const group = await fixture<EpAvatarGroup>(`<ep-avatar-group max="2" label="Students">
      <ep-avatar name="Rahul Kumar"></ep-avatar><ep-avatar name="Sana Noor"></ep-avatar>
      <ep-avatar name="Arun Joseph"></ep-avatar><ep-avatar name="Meera Varma"></ep-avatar>
    </ep-avatar-group>`);
    await settle();
    const avatars = [...group.querySelectorAll('ep-avatar')];
    expect(avatars.map((a) => a.hidden)).toEqual([false, false, true, true]);
    expect(shadow(group, '.count').getAttribute('aria-label')).toBe('2 more');
    await expectNoA11yViolations(group);
  });
});

describe('ep-stat and ep-icon-tile', () => {
  it('names the stat group and has no violations', async () => {
    const stat = await fixture('<ep-stat label="Students" value="128" tone="1"><span slot="note">+6</span></ep-stat>');
    expect(shadow(stat, '.base').getAttribute('aria-label')).toBe('Students');
    await expectNoA11yViolations(stat);
  });

  it('keeps a decorative tile out of the accessibility tree', async () => {
    const tile = await fixture('<ep-icon-tile tone="2" icon="flask"></ep-icon-tile>');
    expect(shadow(tile, '.base').getAttribute('role')).toBe('presentation');
    await expectNoA11yViolations(tile);
  });
});

describe('ep-cover', () => {
  it('draws every pattern, the same way for the same seed, and stays out of the accessibility tree', async () => {
    const drawn: string[] = [];
    for (const pattern of ['waves', 'rings', 'dots', 'blocks', 'orbit', 'mesh']) {
      const cover = await fixture(`<ep-cover pattern="${pattern}" seed="4"></ep-cover>`);
      const svg = shadow(cover, 'svg');
      expect(svg.getAttribute('aria-hidden')).toBe('true');
      expect(svg.children.length).toBeGreaterThan(0);
      drawn.push(svg.innerHTML);
      await expectNoA11yViolations(cover);
    }
    const again = await fixture('<ep-cover pattern="waves" seed="4"></ep-cover>');
    expect(shadow(again, 'svg').innerHTML).toBe(drawn[0]);
    const other = await fixture('<ep-cover pattern="waves" seed="5"></ep-cover>');
    expect(shadow(other, 'svg').innerHTML).not.toBe(drawn[0]);
  });
});

describe('ep-sparkline', () => {
  it('is an image named by its label and marks the last value', async () => {
    const chart = await fixture('<ep-sparkline values="1, 3, 2, 5" label="Submissions, last 4 days"></ep-sparkline>');
    expect(shadow(chart, 'svg').getAttribute('role')).toBe('img');
    expect(shadow(chart, 'svg').getAttribute('aria-label')).toBe('Submissions, last 4 days');
    expect(shadow(chart, '.marker')).toBeTruthy();
    await expectNoA11yViolations(chart);
  });

  it('describes the values when there is no label, and draws bars', async () => {
    const chart = await fixture('<ep-sparkline variant="bars" values="2, 4, 3"></ep-sparkline>');
    expect(shadow(chart, 'svg').getAttribute('aria-label')).toBe('Trend of 3 values, from 2 to 3');
    expect(chart.shadowRoot!.querySelectorAll('rect.bar')).toHaveLength(3);
  });

  it('draws nothing for fewer than two values', async () => {
    const chart = await fixture('<ep-sparkline values="5"></ep-sparkline>');
    expect(chart.shadowRoot!.querySelector('svg')).toBeNull();
  });
});

describe('tone', () => {
  it('does not tint a stat or card that has no tone', async () => {
    const stat = await fixture('<ep-stat label="Students" value="128"></ep-stat>');
    const bg = getComputedStyle(shadow(stat, '.base')).backgroundColor;
    const toned = await fixture('<ep-stat label="Students" value="128" tone="1"></ep-stat>');
    expect(bg).not.toBe(getComputedStyle(shadow(toned, '.base')).backgroundColor);
  });
});

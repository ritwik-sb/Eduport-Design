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

import { describe, expect, it, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import type { EpBreadcrumbItem } from '../src/components/breadcrumbs/index.js';
import { pageRange, type EpPagination } from '../src/components/pagination/index.js';
import type { EpProgressBar } from '../src/components/progress-bar/index.js';
import type { EpEmptyState } from '../src/components/empty-state/index.js';
import { expectNoA11yViolations, fixture, settle, shadow } from './helpers.js';

describe('ep-breadcrumbs', () => {
  it('marks the last item as the current page and links the rest', async () => {
    const nav = await fixture(`<ep-breadcrumbs>
      <ep-breadcrumb-item href="/">Home</ep-breadcrumb-item>
      <ep-breadcrumb-item href="/courses">Courses</ep-breadcrumb-item>
      <ep-breadcrumb-item href="/courses/physics">Physics</ep-breadcrumb-item>
    </ep-breadcrumbs>`);
    const items = [...nav.querySelectorAll<EpBreadcrumbItem>('ep-breadcrumb-item')];
    await settle();
    expect(items.map((item) => item.current)).toEqual([false, false, true]);
    expect(shadow(items[0], 'a').getAttribute('href')).toBe('/');
    expect(shadow(items[2], '[part="link"]').localName).toBe('span');
    expect(shadow(items[2], '[part="link"]').getAttribute('aria-current')).toBe('page');
    expect(shadow(items[0], '.separator')).toBeNull();
    await expectNoA11yViolations();
  });
});

describe('ep-pagination', () => {
  it('shows the first, last and neighboring pages', () => {
    expect(pageRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(pageRange(1, 12)).toEqual([1, 2, 3, 4, 5, 'gap', 12]);
    expect(pageRange(6, 12)).toEqual([1, 'gap', 5, 6, 7, 'gap', 12]);
    expect(pageRange(12, 12)).toEqual([1, 'gap', 8, 9, 10, 11, 12]);
  });

  it('fires change with the chosen page and keeps focus on it', async () => {
    const pagination = await fixture<EpPagination>('<ep-pagination page="4" total-pages="12"></ep-pagination>');
    const onChange = vi.fn();
    pagination.addEventListener('change', onChange);
    const five = shadow(pagination, '[aria-label="Page 5"]');
    await userEvent.click(five);
    await settle();
    expect(pagination.page).toBe(5);
    expect(onChange).toHaveBeenCalledOnce();
    expect(pagination.shadowRoot!.activeElement?.getAttribute('aria-label')).toBe('Page 5');
    expect(shadow(pagination, '[aria-current="page"]').textContent!.trim()).toBe('5');
  });

  it('disables previous on the first page', async () => {
    const pagination = await fixture<EpPagination>('<ep-pagination page="1" total-pages="3"></ep-pagination>');
    const [previous] = pagination.shadowRoot!.querySelectorAll('button');
    expect(previous.disabled).toBe(true);
    await expectNoA11yViolations();
  });
});

describe('ep-progress-bar', () => {
  it('exposes its value to assistive technology', async () => {
    const bar = await fixture<EpProgressBar>('<ep-progress-bar label="Upload" value="30" max="60"></ep-progress-bar>');
    const track = shadow(bar, '[role="progressbar"]');
    expect(track.getAttribute('aria-valuenow')).toBe('30');
    expect(track.getAttribute('aria-valuetext')).toBe('50%');
    await expectNoA11yViolations();
  });

  it('is indeterminate without a value', async () => {
    const bar = await fixture<EpProgressBar>('<ep-progress-bar label="Preparing"></ep-progress-bar>');
    const track = shadow(bar, '[role="progressbar"]');
    expect(track.hasAttribute('aria-valuenow')).toBe(false);
    expect(track.classList.contains('indeterminate')).toBe(true);
  });
});

describe('reduced motion', () => {
  it('stops the skeleton pulse and the sliding progress segment under data-motion="reduced"', async () => {
    const wrapper = await fixture(`<div data-motion="reduced">
      <ep-skeleton></ep-skeleton>
      <ep-progress-bar label="Preparing"></ep-progress-bar>
    </div>`);
    const line = shadow(wrapper.querySelector('ep-skeleton')!, '.line');
    expect(parseFloat(getComputedStyle(line).animationDuration)).toBe(0);
    const track = shadow(wrapper.querySelector('ep-progress-bar')!, '.track');
    const indicator = track.querySelector('.indicator')!;
    expect(getComputedStyle(indicator).animationName).toBe('none');
    expect(getComputedStyle(indicator).backgroundImage).toContain('repeating-linear-gradient');
  });

  it('animates both by default', async () => {
    const wrapper = await fixture(
      `<div><ep-skeleton></ep-skeleton><ep-progress-bar label="Preparing"></ep-progress-bar></div>`,
    );
    const line = shadow(wrapper.querySelector('ep-skeleton')!, '.line');
    expect(parseFloat(getComputedStyle(line).animationDuration)).toBeGreaterThan(1);
    const indicator = shadow(wrapper.querySelector('ep-progress-bar')!, '.indicator');
    expect(getComputedStyle(indicator).animationName).toBe('slide');
  });
});

describe('ep-spinner and ep-skeleton', () => {
  it('names the spinner, or hides it when the label is empty', async () => {
    const wrapper = await fixture(
      `<div><ep-spinner></ep-spinner><ep-spinner label=""></ep-spinner><ep-skeleton lines="3"></ep-skeleton></div>`,
    );
    const [named, decorative] = wrapper.querySelectorAll('ep-spinner');
    expect(named.getAttribute('aria-label')).toBe('Loading');
    expect(decorative.getAttribute('aria-hidden')).toBe('true');
    const skeleton = wrapper.querySelector('ep-skeleton')!;
    expect(skeleton.getAttribute('aria-hidden')).toBe('true');
    expect(skeleton.shadowRoot!.querySelectorAll('.line')).toHaveLength(3);
    await expectNoA11yViolations();
  });
});

describe('ep-empty-state', () => {
  it('renders a heading at the requested level', async () => {
    const empty =
      await fixture<EpEmptyState>(`<ep-empty-state heading="No assignments" heading-level="3" icon="clipboard-list">
      Assignments will show up here.
      <ep-button slot="actions">Browse</ep-button>
    </ep-empty-state>`);
    const heading = shadow(empty, '[role="heading"]');
    expect(heading.getAttribute('aria-level')).toBe('3');
    expect(heading.textContent).toBe('No assignments');
    expect(shadow(empty, '.actions').hidden).toBe(false);
    await expectNoA11yViolations();
  });
});

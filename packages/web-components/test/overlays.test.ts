import { describe, expect, it, vi } from 'vitest';
import { userEvent } from 'vitest/browser';
import type { EpAccordion, EpAccordionItem } from '../src/components/accordion/index.js';
import type { EpMenu } from '../src/components/menu/index.js';
import type { EpPopover } from '../src/components/popover/index.js';
import { expectNoA11yViolations, fixture, settle, shadow } from './helpers.js';

/** The focused element, looking inside shadow roots. */
function deepActive(): Element | null {
  let active = document.activeElement;
  while (active?.shadowRoot?.activeElement) active = active.shadowRoot.activeElement;
  return active;
}

const menuMarkup = `<ep-menu>
  <ep-button slot="trigger">Actions</ep-button>
  <ep-menu-item value="edit">Edit</ep-menu-item>
  <ep-menu-item value="archive" disabled>Archive</ep-menu-item>
  <ep-menu-item value="duplicate">Duplicate</ep-menu-item>
  <ep-menu-divider></ep-menu-divider>
  <ep-menu-item value="delete" variant="danger">Delete</ep-menu-item>
</ep-menu>`;

describe('ep-menu', () => {
  it('opens from the keyboard, moves with arrows and skips disabled items', async () => {
    const menu = await fixture<EpMenu>(menuMarkup);
    const trigger = menu.querySelector('ep-button')!;
    expect(shadow(trigger, 'button').getAttribute('aria-haspopup')).toBe('menu');
    trigger.focus();
    await userEvent.keyboard('{ArrowDown}');
    await settle();
    expect(menu.open).toBe(true);
    expect(shadow(trigger, 'button').getAttribute('aria-expanded')).toBe('true');
    expect(document.activeElement?.textContent).toBe('Edit');
    await userEvent.keyboard('{ArrowDown}');
    expect(document.activeElement?.textContent).toBe('Duplicate');
    await userEvent.keyboard('{End}');
    expect(document.activeElement?.textContent).toBe('Delete');
    await userEvent.keyboard('e');
    expect(document.activeElement?.textContent).toBe('Edit');
    await expectNoA11yViolations();
  });

  it('fires ep-select, closes and returns focus to the trigger', async () => {
    const menu = await fixture<EpMenu>(menuMarkup);
    const onSelect = vi.fn();
    menu.addEventListener('ep-select', onSelect);
    menu.show();
    await settle();
    await userEvent.keyboard('{ArrowDown}{Enter}');
    await settle();
    expect(onSelect.mock.calls[0][0].detail.value).toBe('duplicate');
    expect(menu.open).toBe(false);
    expect(deepActive()).toBe(shadow(menu.querySelector('ep-button')!, 'button'));
  });

  it('closes on Escape', async () => {
    const menu = await fixture<EpMenu>(menuMarkup);
    menu.show();
    await settle();
    await userEvent.keyboard('{Escape}');
    await settle();
    expect(menu.open).toBe(false);
  });
});

describe('ep-popover', () => {
  it('toggles from its trigger and moves focus into the panel', async () => {
    const popover = await fixture<EpPopover>(`<ep-popover label="Filters">
      <ep-button slot="trigger">Filters</ep-button>
      <ep-checkbox>Pending fees only</ep-checkbox>
    </ep-popover>`);
    const trigger = popover.querySelector('ep-button')!;
    await userEvent.click(trigger);
    await settle();
    expect(popover.open).toBe(true);
    expect(shadow(popover, '[role="dialog"]').getAttribute('aria-label')).toBe('Filters');
    expect(document.activeElement).toBe(popover.querySelector('ep-checkbox'));
    await expectNoA11yViolations();

    await userEvent.keyboard('{Escape}');
    await settle();
    expect(popover.open).toBe(false);
    expect(deepActive()).toBe(shadow(trigger, 'button'));

    await userEvent.click(trigger);
    await userEvent.click(trigger);
    await settle();
    expect(popover.open).toBe(false);
  });
});

describe('ep-accordion', () => {
  const markup = `<ep-accordion single>
    <ep-accordion-item heading="One">First</ep-accordion-item>
    <ep-accordion-item heading="Two">Second</ep-accordion-item>
    <ep-accordion-item heading="Three">Third</ep-accordion-item>
  </ep-accordion>`;

  it('opens one section at a time in single mode', async () => {
    const accordion = await fixture<EpAccordion>(markup);
    const items = [...accordion.querySelectorAll<EpAccordionItem>('ep-accordion-item')];
    await userEvent.click(shadow(items[0], 'button'));
    await userEvent.click(shadow(items[1], 'button'));
    await settle();
    expect(items.map((item) => item.open)).toEqual([false, true, false]);
    expect(shadow(items[1], 'button').getAttribute('aria-expanded')).toBe('true');
    expect(shadow(items[0], '[role="region"]').hidden).toBe(true);
    await expectNoA11yViolations();
  });

  it('moves between headers with arrow keys', async () => {
    const accordion = await fixture<EpAccordion>(markup);
    const items = [...accordion.querySelectorAll<EpAccordionItem>('ep-accordion-item')];
    items[0].focus();
    await userEvent.keyboard('{ArrowDown}');
    expect(document.activeElement).toBe(items[1]);
    await userEvent.keyboard('{ArrowUp}{ArrowUp}');
    expect(document.activeElement).toBe(items[2]);
    await userEvent.keyboard('{Home}');
    expect(document.activeElement).toBe(items[0]);
  });
});

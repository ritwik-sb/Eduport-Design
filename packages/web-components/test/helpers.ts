import axe from 'axe-core';
import type { LitElement } from 'lit';
import { expect } from 'vitest';

/** Parses `markup` into the page and waits for every Eduport element in it to finish rendering. */
export async function fixture<T extends Element = HTMLElement>(markup: string): Promise<T> {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = markup;
  document.body.append(wrapper);
  await settle(wrapper);
  return wrapper.firstElementChild as T;
}

/** Waits until every Lit element under `root` has finished its pending update. */
export async function settle(root: ParentNode = document.body) {
  for (let i = 0; i < 3; i++) {
    const elements = [...root.querySelectorAll('*')].filter((el) => el.localName.startsWith('ep-'));
    await Promise.all(elements.map((el) => (el as LitElement).updateComplete));
  }
}

/** The element's shadow root, for poking at what it renders. */
export function shadow(el: Element, selector: string) {
  return el.shadowRoot!.querySelector(selector)! as HTMLElement;
}

/** Fails the test on any WCAG 2.1 A/AA violation axe finds under `root`. */
export async function expectNoA11yViolations(root: Element = document.body) {
  const results = await axe.run(root, {
    runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'best-practice'],
    // Page-level rules don't apply to a component on its own.
    rules: { region: { enabled: false }, 'landmark-one-main': { enabled: false }, 'page-has-heading-one': { enabled: false } },
  });
  const summary = results.violations.map(
    (v) => `${v.id}: ${v.help}\n${v.nodes.map((n) => `  ${n.target.join(' ')}  ${n.failureSummary}`).join('\n')}`,
  );
  expect(summary).toEqual([]);
}

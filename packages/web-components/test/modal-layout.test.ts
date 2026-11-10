import { describe, expect, it } from 'vitest';
import { page } from 'vitest/browser';
import { fixture, shadow } from './helpers.js';
import type { EpModal } from '../src/index.js';

// Runs in Chromium and in WebKit at iPhone size (see vitest.config.ts). WebKit used to size the modal body to its
// padding alone, so every modal showed a one-line strip that scrolled inside itself.
describe('ep-modal layout', () => {
  const field = '<label style="display:block;height:56px">Field</label>';

  async function openModal(fields: number) {
    await page.viewport(390, 844);
    const modal = await fixture<EpModal>(
      `<ep-modal heading="Spot registration">${field.repeat(fields)}<button slot="footer">Save</button></ep-modal>`,
    );
    modal.show();
    await modal.updateComplete;
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    return { dialog: shadow(modal, 'dialog'), body: shadow(modal, '.body') };
  }

  it('fits a short body without scrolling', async () => {
    const { dialog, body } = await openModal(2);
    // Two 56px fields plus padding: the body shows them all and the dialog stays compact.
    expect(body.clientHeight).toBeGreaterThanOrEqual(112);
    expect(body.scrollHeight).toBeLessThanOrEqual(body.clientHeight);
    expect(dialog.getBoundingClientRect().height).toBeLessThan(844 / 2);
  });

  it('gives a tall body the full dialog height and one scroll', async () => {
    const { dialog, body } = await openModal(30);
    const dialogHeight = dialog.getBoundingClientRect().height;
    // The dialog grows to its max height (85vh) and the body fills what the header and footer leave.
    expect(dialogHeight).toBeGreaterThan(844 * 0.8);
    expect(dialogHeight).toBeLessThanOrEqual(844 * 0.85 + 1);
    expect(body.clientHeight).toBeGreaterThan(dialogHeight / 2);
    expect(body.scrollHeight).toBeGreaterThan(body.clientHeight);
    expect(dialog.scrollHeight).toBeLessThanOrEqual(dialog.clientHeight);
  });
});

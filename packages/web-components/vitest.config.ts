import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

// Component tests run in a real Chromium, so shadow DOM, form association and focus behave as they do for users.
// CHROMIUM_PATH points at a preinstalled browser; without it Playwright uses the one from `playwright install`.
//
// Layout tests that have broken in Safari also run in WebKit. CI always runs them; locally they run when
// WEBKIT=1 is set, after `pnpm exec playwright install webkit`.
const webkitTests = ['test/modal-layout.test.ts'];

export default defineConfig({
  test: {
    include: ['test/**/*.test.ts'],
    setupFiles: ['test/setup.ts'],
    browser: {
      enabled: true,
      headless: true,
      screenshotFailures: false,
      provider: playwright({
        launchOptions: process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
      }),
      instances: [
        { browser: 'chromium' },
        ...(process.env.CI || process.env.WEBKIT
          ? [{ browser: 'webkit' as const, include: webkitTests, provider: playwright() }]
          : []),
      ],
    },
  },
});

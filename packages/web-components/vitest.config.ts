import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';

// Component tests run in a real Chromium, so shadow DOM, form association and focus behave as they do for users.
// CHROMIUM_PATH points at a preinstalled browser; without it Playwright uses the one from `playwright install`.
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
      instances: [{ browser: 'chromium' }],
    },
  },
});

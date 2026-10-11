import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';

// Runs every story in a real Chromium: each one must render without errors and pass the a11y addon's axe checks
// (`a11y.test: 'error'` in preview.js). CHROMIUM_PATH points at a preinstalled browser when there is one.
export default defineConfig({
  plugins: [storybookTest({ configDir: fileURLToPath(new URL('.storybook', import.meta.url)) })],
  test: {
    name: 'storybook',
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

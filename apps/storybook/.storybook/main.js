import { fileURLToPath } from 'node:url';

/** @type {import('@storybook/web-components-vite').StorybookConfig} */
export default {
  stories: ['../stories/**/*.stories.js'],
  addons: ['@storybook/addon-a11y'],
  framework: '@storybook/web-components-vite',
  // Read components from source so edits show up without a rebuild.
  viteFinal: (config) => {
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@eduportdesign/web-components': fileURLToPath(
        new URL('../../../packages/web-components/src/index.ts', import.meta.url),
      ),
    };
    return config;
  },
};

import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Components are read from source, so edits in packages/web-components show up instantly.
export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      '@eduportdesign/web-components': fileURLToPath(new URL('../../packages/web-components/src/index.ts', import.meta.url)),
    },
  },
  server: { open: true },
  // `pnpm build:single` inlines everything into one HTML file for sharing.
  plugins: mode === 'single' ? [viteSingleFile()] : [],
  build: { outDir: mode === 'single' ? 'dist-single' : 'dist' },
}));

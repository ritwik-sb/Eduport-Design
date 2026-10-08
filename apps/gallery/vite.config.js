import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// All @eduportdesign packages are released together at one version, so the header shows theirs.
const { version } = JSON.parse(readFileSync(new URL('../../packages/web-components/package.json', import.meta.url), 'utf8'));
const designSystemVersion = {
  name: 'design-system-version',
  transformIndexHtml: (html) => html.replaceAll('%EP_VERSION%', version),
};

// Components are read from source, so edits in packages/web-components show up instantly.
export default defineConfig(({ mode }) => ({
  // Relative URLs, so the build works from any path (GitHub Pages serves it under /Eduport-Design/).
  base: './',
  resolve: {
    alias: {
      '@eduportdesign/web-components': fileURLToPath(new URL('../../packages/web-components/src/index.ts', import.meta.url)),
    },
  },
  server: { open: true },
  // `pnpm build:single` inlines everything into one HTML file for sharing.
  plugins: [designSystemVersion, ...(mode === 'single' ? [viteSingleFile()] : [])],
  build: {
    outDir: mode === 'single' ? 'dist-single' : 'dist',
    // Logo files stay real files, so their download links give a clean .svg.
    assetsInlineLimit: (file) => (mode !== 'single' && file.includes('/packages/logos/') ? false : undefined),
  },
}));

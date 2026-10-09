// Builds CSS, SCSS and JS from the DTCG token sources.
//
// tokens.css         primitives + light theme on :root, then soft corners and compact density on :root,
//                    then touch density under [data-density="touch"] and, unless compact is forced, on coarse pointers,
//                    then layout tokens on :root with md/lg/xl overrides inside min-width media queries
// theme-dark.css     semantic color overrides under [data-theme="dark"]
// corners-sharp.css  semantic radius overrides under [data-corners="sharp"]
//
// Color theme, corner mode and density are independent axes, so any combination works. Layout follows the
// viewport width only, never the theme, corner mode or pointer.
import { readFile, rm, appendFile } from 'node:fs/promises';
import StyleDictionary from 'style-dictionary';

const PREFIX = 'ep';
const isSemantic = (token) => !token.filePath.includes('/primitives/');
const isCorner = (token) => token.filePath.includes('/corners/');
const isDensity = (token) => token.filePath.includes('/density/');
const isLayout = (token) => token.filePath.includes('/layout/');

const base = new StyleDictionary({
  source: ['src/primitives/*.json', 'src/themes/light.json', 'src/corners/soft.json', 'src/density/compact.json', 'src/layout/base.json'],
  usesDtcg: true,
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: PREFIX,
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          filter: (token) => !isCorner(token) && !isDensity(token) && !isLayout(token),
          options: { selector: ':root, [data-theme="light"]', outputReferences: true },
        },
        // Separate block so [data-theme] and [data-corners] never reset each other. Appended to tokens.css below.
        {
          destination: 'corners-soft.css',
          format: 'css/variables',
          filter: isCorner,
          options: { selector: ':root, [data-corners="soft"]', outputReferences: true },
        },
        {
          destination: 'density-compact.css',
          format: 'css/variables',
          filter: isDensity,
          options: { selector: ':root, [data-density="compact"]', outputReferences: true },
        },
        // Plain :root, so a nested [data-theme] or [data-density] never resets the breakpoint values.
        {
          destination: 'layout.css',
          format: 'css/variables',
          filter: isLayout,
          options: { selector: ':root', outputReferences: true },
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      prefix: PREFIX,
      buildPath: 'dist/scss/',
      files: [{ destination: '_tokens.scss', format: 'scss/variables' }],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [
        { destination: 'tokens.js', format: 'javascript/es6' },
        { destination: 'tokens.d.ts', format: 'typescript/es6-declarations' },
      ],
    },
  },
});

// Overrides reference primitives already defined by tokens.css, so they only emit semantic tokens.
const override = (source, destination, selector) =>
  new StyleDictionary({
    source: ['src/primitives/*.json', source],
    usesDtcg: true,
    log: { warnings: 'disabled' },
    platforms: {
      css: {
        transformGroup: 'css',
        prefix: PREFIX,
        buildPath: 'dist/css/',
        files: [
          { destination, format: 'css/variables', filter: isSemantic, options: { selector, outputReferences: true } },
        ],
      },
    },
  });

// Moves a generated block into tokens.css, so one import carries every default.
const inline = async (file, wrap = (css) => css) => {
  await appendFile('dist/css/tokens.css', '\n' + wrap(await readFile(`dist/css/${file}`, 'utf8')));
  await rm(`dist/css/${file}`);
};

await base.buildAllPlatforms();
await inline('corners-soft.css');
await inline('density-compact.css');
await override('src/density/touch.json', 'density-touch.css', '[data-density="touch"]').buildAllPlatforms();
// Phones and tablets get touch density on their own; data-density="compact" opts out, "touch" opts in anywhere.
await inline('density-touch.css', (css) => {
  const block = css.slice(css.indexOf('[data-density'));
  const coarse = block.replace('[data-density="touch"]', ':root:not([data-density="compact"])');
  return `${css}\n@media (pointer: coarse) {\n${coarse.replace(/^/gm, '  ').trimEnd()}\n}\n`;
});
await inline('layout.css');
// Breakpoint values come from the same source, so the media queries can't drift from the published tokens.
const breakpoints = JSON.parse(await readFile('src/layout/base.json', 'utf8')).breakpoint;
for (const step of ['md', 'lg', 'xl']) {
  await override(`src/layout/${step}.json`, `layout-${step}.css`, ':root').buildAllPlatforms();
  await inline(`layout-${step}.css`, (css) => {
    const header = css.slice(0, css.indexOf(':root'));
    const block = css.slice(css.indexOf(':root'));
    return `${header}@media (min-width: ${breakpoints[step].$value}) {\n${block.replace(/^/gm, '  ').trimEnd()}\n}\n`;
  });
}
await override('src/themes/dark.json', 'theme-dark.css', '[data-theme="dark"]').buildAllPlatforms();
await override('src/corners/sharp.json', 'corners-sharp.css', '[data-corners="sharp"]').buildAllPlatforms();

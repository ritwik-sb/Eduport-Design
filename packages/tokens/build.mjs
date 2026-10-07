// Builds CSS, SCSS and JS from the DTCG token sources.
//
// tokens.css         primitives + light theme on :root, then soft corners on :root
// theme-dark.css     semantic color overrides under [data-theme="dark"]
// corners-sharp.css  semantic radius overrides under [data-corners="sharp"]
//
// Color theme and corner mode are independent axes, so any theme combines with any corner mode.
import { readFile, rm, appendFile } from 'node:fs/promises';
import StyleDictionary from 'style-dictionary';

const PREFIX = 'ep';
const isSemantic = (token) => !token.filePath.includes('/primitives/');
const isCorner = (token) => token.filePath.includes('/corners/');

const base = new StyleDictionary({
  source: ['src/primitives/*.json', 'src/themes/light.json', 'src/corners/soft.json'],
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
          filter: (token) => !isCorner(token),
          options: { selector: ':root, [data-theme="light"]', outputReferences: true },
        },
        // Separate block so [data-theme] and [data-corners] never reset each other. Appended to tokens.css below.
        {
          destination: 'corners-soft.css',
          format: 'css/variables',
          filter: isCorner,
          options: { selector: ':root, [data-corners="soft"]', outputReferences: true },
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

await base.buildAllPlatforms();
await appendFile('dist/css/tokens.css', '\n' + (await readFile('dist/css/corners-soft.css', 'utf8')));
await rm('dist/css/corners-soft.css');
await override('src/themes/dark.json', 'theme-dark.css', '[data-theme="dark"]').buildAllPlatforms();
await override('src/corners/sharp.json', 'corners-sharp.css', '[data-corners="sharp"]').buildAllPlatforms();

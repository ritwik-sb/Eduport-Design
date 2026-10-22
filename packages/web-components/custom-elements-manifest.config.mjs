// Builds dist/custom-elements.json, the Custom Elements Manifest: every tag with its attributes, properties, slots,
// CSS parts and events, read from the JSDoc in the Lit sources. Editors (VS Code, JetBrains), Storybook and AI
// coding tools read it to autocomplete and check <ep-*> markup.
//
// Paths point at the published dist/*.js files. Private members (leading underscore), statics and form lifecycle
// callbacks are left out, so the manifest lists only what an app can use.
const isPrivate = (member) =>
  member.name?.startsWith('_') ||
  member.static ||
  member.name?.endsWith('Callback') ||
  member.privacy === 'private' ||
  member.privacy === 'protected';

export default {
  globs: ['src/components/**/*.ts'],
  exclude: ['src/**/*.styles.ts', 'src/**/*.test.ts'],
  outdir: 'dist',
  litelement: true,
  plugins: [
    {
      name: 'ep-public-api',
      packageLinkPhase({ customElementsManifest }) {
        for (const mod of customElementsManifest.modules) {
          mod.path = mod.path.replace(/^src\//, 'dist/').replace(/\.ts$/, '.js');
          for (const exp of mod.exports ?? []) {
            if (exp.declaration?.module) {
              exp.declaration.module = exp.declaration.module.replace(/^src\//, 'dist/').replace(/\.ts$/, '.js');
            }
          }
          for (const decl of mod.declarations ?? []) {
            if (decl.members) decl.members = decl.members.filter((m) => !isPrivate(m));
            if (decl.attributes) decl.attributes = decl.attributes.filter((a) => !a.name.startsWith('_') && !a.fieldName?.startsWith('_'));
          }
        }
      },
    },
  ],
};

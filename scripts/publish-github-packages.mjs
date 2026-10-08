// Publishes every public package to GitHub Packages (npm.pkg.github.com).
//
// GitHub Packages only accepts packages scoped to the repository owner, so
// @eduportdesign/tokens is published as @<owner>/tokens. Dependencies on other
// @eduportdesign/* packages become npm aliases (
//   "@eduportdesign/tokens": "npm:@<owner>/tokens@^1.2.3"
// ) so code that imports @eduportdesign/* keeps working. If the repository
// lives under a GitHub org named "eduportdesign", nothing is renamed.
//
// Versions that already exist on GitHub Packages are skipped, so this is safe
// to re-run. Needs NODE_AUTH_TOKEN (GITHUB_TOKEN with packages: write).
//
// Usage: node scripts/publish-github-packages.mjs [--dry-run]
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const SCOPE = '@eduportdesign/';
const REGISTRY = 'https://npm.pkg.github.com';
const dryRun = process.argv.includes('--dry-run');
const owner = (process.env.GITHUB_REPOSITORY_OWNER ?? '').toLowerCase();
if (!owner) throw new Error('GITHUB_REPOSITORY_OWNER is not set');

const root = new URL('..', import.meta.url).pathname;
const rename = (name) => (name.startsWith(SCOPE) ? `@${owner}/${name.slice(SCOPE.length)}` : name);
const run = (cmd, args, cwd) => execFileSync(cmd, args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] });

const exists = (name, version) => {
  try {
    run('npm', ['view', `${name}@${version}`, 'version', '--registry', REGISTRY]);
    return true;
  } catch {
    return false;
  }
};

for (const dir of readdirSync(join(root, 'packages'))) {
  const pkgDir = join(root, 'packages', dir);
  const manifestPath = join(pkgDir, 'package.json');
  if (!existsSync(manifestPath)) continue;
  const pkg = JSON.parse(readFileSync(manifestPath, 'utf8'));
  if (pkg.private) continue;

  const target = rename(pkg.name);
  if (exists(target, pkg.version)) {
    console.log(`skip ${target}@${pkg.version} (already on GitHub Packages)`);
    continue;
  }

  // pnpm pack resolves workspace: ranges to real versions.
  const out = mkdtempSync(join(tmpdir(), 'ghp-'));
  run('pnpm', ['pack', '--pack-destination', out], pkgDir);
  const tarball = readdirSync(out).find((f) => f.endsWith('.tgz'));
  run('tar', ['-xzf', join(out, tarball), '-C', out]);
  const staged = join(out, 'package');

  const manifest = JSON.parse(readFileSync(join(staged, 'package.json'), 'utf8'));
  manifest.name = target;
  for (const field of ['dependencies', 'peerDependencies', 'optionalDependencies']) {
    for (const [dep, range] of Object.entries(manifest[field] ?? {})) {
      if (dep.startsWith(SCOPE) && rename(dep) !== dep) manifest[field][dep] = `npm:${rename(dep)}@${range}`;
    }
  }
  // GitHub Packages doesn't support provenance or the public-access flag.
  manifest.publishConfig = { registry: REGISTRY };
  writeFileSync(join(staged, 'package.json'), JSON.stringify(manifest, null, 2) + '\n');

  console.log(`publish ${target}@${pkg.version}${dryRun ? ' (dry run)' : ''}`);
  // --tag latest: npm won't move `latest` to a lower version implicitly (a 1.0.0
  // published by mistake still sits on GitHub Packages).
  run('npm', ['publish', '--registry', REGISTRY, '--tag', 'latest', ...(dryRun ? ['--dry-run'] : [])], staged);
}

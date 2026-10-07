# Changesets

Every pull request that changes a published package adds a changeset:

```bash
pnpm changeset
```

Pick the packages, the bump type (patch, minor or major) and write one line for the changelog. All `@eduportdesign/*` packages share one version number, so a bump to any of them bumps them all.

While the version is 0.x, a breaking change to a token name, prop or export is a **minor** bump. From 1.0 on it is a **major** bump.

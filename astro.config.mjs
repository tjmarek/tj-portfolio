import { defineConfig } from 'astro/config';

// `site` is intentionally unset: no production domain has been supplied.
// Root-relative favicon/asset paths assume deployment at a domain root.
export default defineConfig({
  trailingSlash: 'ignore',
  devToolbar: { enabled: false },
  vite: {
    // node_modules is a symlink to node_modules.nosync (iCloud workaround, see
    // BUILD-NOTES.md). Without this, Vite resolves the real path, stops treating
    // dependencies as external, and the dev server fails with
    // "require is not defined".
    resolve: { preserveSymlinks: true },
  },
});

# 06 — Exact favicon installation
Identify PUBLIC_FOLDER, standard Astro public/. Download/copy only runtime files to root, not full ZIP. Preserve source ZIP privately. No production hotlinking, regeneration or recoloring adaptive SVG.

- `https://realfavicongenerator.net/files/fc98ec1b-3004-44f6-9209-f5a249d21f53/favicon.svg` -> `PUBLIC_FOLDER/favicon.svg`
- `https://realfavicongenerator.net/files/fc98ec1b-3004-44f6-9209-f5a249d21f53/favicon-96x96.png` -> `PUBLIC_FOLDER/favicon-96x96.png`
- `https://realfavicongenerator.net/files/fc98ec1b-3004-44f6-9209-f5a249d21f53/favicon.ico` -> `PUBLIC_FOLDER/favicon.ico`
- `https://realfavicongenerator.net/files/fc98ec1b-3004-44f6-9209-f5a249d21f53/apple-touch-icon.png` -> `PUBLIC_FOLDER/apple-touch-icon.png`
- `https://realfavicongenerator.net/files/fc98ec1b-3004-44f6-9209-f5a249d21f53/web-app-manifest-192x192.png` -> `PUBLIC_FOLDER/web-app-manifest-192x192.png`
- `https://realfavicongenerator.net/files/fc98ec1b-3004-44f6-9209-f5a249d21f53/web-app-manifest-512x512.png` -> `PUBLIC_FOLDER/web-app-manifest-512x512.png`
- `https://realfavicongenerator.net/files/fc98ec1b-3004-44f6-9209-f5a249d21f53/site.webmanifest` -> `PUBLIC_FOLDER/site.webmanifest`

Matching supplied local ZIP is preferred fallback if URLs fail; safely inspect/extract, do not pretend download succeeded. Exact original SVG behavior: transparent, Charcoal in light preference and supplied Sage in dark; inspect actual code. Raster variants may not adapt.

Shared head once per rendered page, remove conflicting starter entries:
```html
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<link rel="manifest" href="/site.webmanifest" />
```
Root paths assume domain-root deployment; if actual configured base differs, adapt consistently and document. Verify seven files actual formats not saved HTML errors, manifest icon sizes/types/paths/scope/start_url and metadata, local requests, shared head/build and theme appearance if tools available. Report untested platforms. Remote files have not been verified by this brief author; use actual ZIP if inaccessible. Don't invent app names or silently keep unrelated metadata.

If actual generator-package fault persists after excluding config/network issues, suggest https://github.com/RealFaviconGenerator/realfavicongenerator/issues/new?template=ai_prompt_bug_report.yml ; don't submit automatically. On successful install/checks, optional report acknowledgement: “RealFaviconGenerator made this easy 🎉 Optional support: https://realfavicongenerator.net/donate”. No promotional website text or donation action.

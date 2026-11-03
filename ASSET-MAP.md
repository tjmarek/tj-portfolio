# Asset map

Inventory of the files actually present on 2026-11-03. Colours and transparency were measured from the pixels in headless Chrome. Originals were not modified (`git diff` on them is empty).

## Branding: `src/assets/branding/`
| File | Size | Alpha | Measured colour | Role | Runtime use |
|---|---|---|---|---|---|
| `logo-red.png` | 500×500 | Yes (77% transparent) | `#DD2614` | Hero signature, inner-page header | Optimised by `astro:assets`, always square, never stretched |
| `logo-light-sage.png` | 500×500 | Yes (77%) | `#C3D1C2` | Footer on Charcoal | Optimised by `astro:assets` |
| `logo-charcoal.png` | 500×500 | Yes (77%) | `#262626` | None yet | Exported from `src/data/site.ts`, not rendered |

**Colour differences from the brief:** the "light sage" logo is `#C3D1C2`, close to `--border`, not the `#E5EBE5` the brief expected. The red logo is `#DD2614` against brand `#DD2713`. Both were left as supplied.

No SVG logo or Syne wordmark lockup was supplied, so Syne isn't used.

## Portraits: `src/assets/portraits/`
| File | Size | Alpha | Role | Runtime use |
|---|---|---|---|---|
| `tj-marek-portrait.jpg` (original) | 914×1017 | No | Intact photo | Homepage intro and `/about/` |
| `derived/tj-marek-cutout.png` (made in this build) | 914×1017 | Yes (56% transparent) | Hero portrait | AVIF/WebP/PNG `<picture>` at 480, 720 and 914 wide |

**How the cutout was made:** no cutout was supplied, so it was derived locally from the original using Apple's Vision foreground mask. The mask was softened and tightened slightly to remove the dark halo around skin. Photo pixels are copied as they are: only transparency changes, and nothing is generated or retouched. Fine stray hairs are lost at the edge.

**Resolution limit:** the source is 914px wide and the hero shows it at up to about 850 CSS px, so it will look a little soft on Retina screens. A higher-resolution original would fix that.

## Favicons: `public/`
Downloaded from the exact URLs in `docs/06-favicon.md` (all seven returned HTTP 200). The local package was not needed as a fallback.

| File | Verified format | Notes |
|---|---|---|
| `favicon.svg` | SVG, no scripts or external references | Byte-identical to the download. Rendered `#262626` in light mode and `#E5ECE5` in dark mode |
| `favicon-96x96.png` | PNG 96×96 RGBA | Unmodified |
| `favicon.ico` | ICO, 3 sizes | Unmodified |
| `apple-touch-icon.png` | PNG 180×180 RGBA | Unmodified. Charcoal on transparent, see review priorities in BUILD-NOTES |
| `web-app-manifest-192x192.png` | PNG 192×192 RGBA | Unmodified |
| `web-app-manifest-512x512.png` | PNG 512×512 RGBA | Unmodified |
| `site.webmanifest` | JSON | **Edited**, see below |

**Manifest edit:** the generated file said `MyWebSite` / `MySite` with white theme colours. `docs/06` says not to silently keep unrelated metadata, so the name is now `TJ Marek` and `theme_color` and `background_color` are `#E5EBE5`. Icon entries are unchanged. `scope` and `start_url` are absent, as generated.

**Source package:** `reference/favicon-package/favicon/` is kept untouched. Its binaries differ byte-for-byte from the URL downloads, except the webmanifest and the 512px icon, which match. The 192px icon was compared by eye and shows the same mark. The other differing files were not compared. No ZIP is present, and `favicon-install-instructions.md` is empty.

## Private references: `reference/design/`, never published
| File | What it is | Use |
|---|---|---|
| `Screenshot 2026-10-28 at 10.07.01 PM.png` (1342×960) | The Leslie Alexander reference | Information structure only: portrait/About corner, work index, name bridge, contact cluster. No identity, clients, counts or imagery reused |

**The "latest generated mockup" is not in the folder**, so it was not inspected. Its known problems were avoided only as the docs describe them.

## Other inputs
| Folder | Status |
|---|---|
| `src/assets/projects/` | Empty apart from the note. All work visuals are abstract inline SVGs in `src/components/PreviewArt.astro`, labelled as draft |
| `public/resume/` | Doesn't exist, as no résumé was supplied |

## Fonts: npm packages, self-hosted in the build
| Package | Voice | Licence |
|---|---|---|
| `@fontsource-variable/bricolage-grotesque` 5.3.0 (`opsz` + `wght`) | Display and name | SIL OFL 1.1 |
| `@fontsource-variable/manrope` 5.3.0 | UI and body | SIL OFL 1.1 |

The licence files ship inside each package in `node_modules`.

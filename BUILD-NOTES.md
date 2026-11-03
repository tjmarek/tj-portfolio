# Build notes

Astro 7.4.5, static output, no UI framework. The only client JS is one small inline module for the work preview. Nothing has been committed, pushed or deployed.

## Run it
```sh
cd ~/Desktop/portfolio/tj-portfolio
npm run dev       # development server
npm run build     # production build into dist/
npm run preview   # serve dist/ locally
npm run check     # type and template check
```
- `node_modules` is already installed, so you shouldn't need `npm install`. **Read the iCloud note first if you do.**
- Astro prints the URL. In a non-interactive shell it ran in the background, and `npx astro dev stop` or `npx astro preview stop` ends it.
- **Port 4321 is taken** by an old `astro preview` (pid 60122, running since Oct 31 from a trashed copy of this project), so Astro will pick the next free port, probably 4322. I left that process alone. To free the port: `kill 60122`.

## ⚠️ iCloud makes builds hang
Your Desktop syncs through iCloud, which was evicting project files to the cloud. **9,493 of 12,885 `node_modules` files were cloud-only**, and `astro build` hung with no output.

**Current workaround:** `node_modules` is a symlink to `node_modules.nosync`, a name iCloud skips. Build and check both pass this way.

The symlink also needs `vite.resolve.preserveSymlinks: true` in `astro.config.mjs`. Without it, `npm run dev` fails with "Failed to create the dev server app: require is not defined". Earlier QA ran against the built site, so this only surfaced later. `npm run dev` and `npm run build` were both rerun with the setting and work.

**Its limit:** `npm ci` and `npm install` both replace the symlink with a real folder (tested). After installing anything, re-link it:
```sh
rm -rf node_modules.nosync && mv node_modules node_modules.nosync && ln -s node_modules.nosync node_modules
```
**The lasting fix** is to move the project out of Desktop and Documents, for example to `~/dev/tj-portfolio`. I didn't move it because that's your call.

## Checks actually run
Automated checks ran against the production build in Chrome (headless, via `playwright-core` installed outside the project). The final `dist/` is byte-identical to the build tested. Test-contact results come from a scratch copy of the same source, built with test values; your `src/data/site.ts` still has `null` for both.

| Check | Result |
|---|---|
| `npm run build` | Pass: 6 pages |
| `npm run check` | Pass: 0 errors, 0 warnings, 0 hints across 18 files |
| `npm audit --omit=dev` | 0 vulnerabilities |
| Internal links | All 14 unique URLs return 200, all `#` targets exist, no dead or empty hrefs |
| Console and network | No console errors or warnings, no failed requests, no external requests |
| Page structure | One `h1` per page, title and description on each, no missing `alt`, no broken images after scrolling |
| Favicon | 5 icon/manifest links on each of the 6 pages, 7 files return 200 with correct types, formats verified, SVG adapts to light and dark |
| Horizontal overflow | 0 at all 12 sizes: 1920×1080, 1440×900, 1366×768, 1280×600, 1024×768, 960×600, 844×390, 720×450, 600×800, 390×844, 360×640, 320×568 |
| Collisions | No real overlaps of name, role, Experience link, work index, contact, About, logo or face. Flagged pairs (`TJ×Marek`, `Marek×role`, `TJ×exp`) are invisible font boxes, confirmed in screenshots |
| Preview on hover and focus | Updates on both, stays selected after leaving, and no row or frame moves by even a pixel |
| Keyboard | Tab order: Skip, About, Experience, View all, 3 work rows, Let's talk. 3px focus ring. Enter follows the link |
| Touch (emulated) | Tapping a row reaches the right `/work/#…` anchor |
| No JavaScript | All 5 routes load with their links, and the first preview shows |
| Reduced motion | Transitions 0s, smooth scrolling off |
| Reduced transparency (emulated) | Solid `#CDD6CD`, no blur, no shadow |
| Test contact values (scratch copy only) | Email and LinkedIn satellites appear, about 11–12px clear of the main circle |
| Screenshots inspected | Hero at 1440, 1920, 1280×600, 1024, 720, 600 and 390; focus state; full homepage; favicon in dark mode |

### Measured contrast against actual rendered pixels
These are worst-case figures across the sizes above. Text colour was hidden, then the lightest and darkest background pixels were sampled.

| Element | Worst ratio | Needs |
|---|---|---|
| TJ / Marek | 12.18 | 3 |
| Role line, About, work rows | 12.5 | 4.5 |
| Experience link (over shirt) | 11.86 | 4.5 |
| Preview caption | 9.51 | 4.5 |
| "Let's talk" label on frost | 7.53 | 3 (large) |
| Email / LinkedIn on frost | 7.53 | 4.5 |
| Red arrow on frost (decorative, hidden from screen readers) | 3.09 | 3 |
| Solid glass fallback: label / arrow (calculated) | 10.16 / 4.35 | 4.5 / 3 |

The name's automated reading of 1.0 at 600px came from the role text falling inside the probe box. Rechecked with the role hidden, it is 12.34.

Bugs these checks caught and fixed: the Experience link dropping to 1.47:1 at 600–720px, hair crowding the About pocket on short screens, and a reserved Astro `slot` prop.

## Not tested
- Safari, Firefox and any real phone or tablet
- Real browser zoom. 200% was approximated with an equivalent 720×450 viewport
- A browser without `backdrop-filter`. The `@supports` fallback exists but was never triggered
- Actual favicon requests. Headless Chrome didn't request them, so the markup and files were checked instead; browser tabs and home-screen icons are unverified
- Screen readers
- Pages with the web fonts failing to load
- Whether touching a row updates the preview before navigating. Only the navigation was verified

## Missing inputs (all "NOT PROVIDED" in `docs/07`)
| Input | What the site does now | Where to add it |
|---|---|---|
| **Email, LinkedIn** | **Satellites omitted, so the constellation is one circle. "Let's talk" leads to a page with no way to reach you** | `contact` in `src/data/site.ts` |
| Résumé | Experience link goes to `/experience/`, which says none is available | Put the file in `public/resume/`, set `resume.href` |
| Employer, title, dates, results | Shown as "Not supplied yet" | `experienceEntries` |
| Availability | Omitted | `contact.availability` |
| Projects (names, permission, outcomes, imagery) | Three provisional category slots | `workSlots`, `src/assets/projects/` |
| Latest mockup | Not inspected | `reference/design/` |
| Production domain | No `site` config or canonical URLs | `astro.config.mjs` |

The email on your Claude account was deliberately not used, because it wasn't supplied for publishing. Austin Block Company is named in the brief only as a candidate, with no permission recorded, so it doesn't appear on the site.

## Provisional content
All editable copy lives in `src/data/site.ts`, marked `// DRAFT` where I wrote it.

- **Verified from the brief:** the name and "Digital marketing, web operations & design."
- **Draft, needs your confirmation:** all intro copy, work-slot problem and contribution text, the discipline descriptions, and the first-person About text.
- **Please check in particular:** the About line naming mid-level roles and freelance work. It comes from `docs/01`, but it tells the public you're open to roles.
- **Labelled on the page:** "Draft copy", "Provisional slot", and "Draft visual: abstract study, not client work".

## Compromises
- **Self-made cutout.** Hair edges are clean but firmer than a hand-made mask. To use your own, replace `derived/tj-marek-cutout.png` with a file of the same crop.
- **Name placement.** The name overlaps the shoulder and Charcoal, not the portrait's Sage side, because light type on Sage would fail contrast.
- **Frost opacity.** The fill is 74% Sage so labels pass on both Charcoal and Sage. That makes it fairly opaque, with the blur mostly showing where the seam passes behind the circle.
- **Added beyond the brief:** a Sage pocket in the lower-right, mirroring the About pocket, so the frost has something to blur. Also a `/404` page, and a thin sliver of the next section as the scroll cue instead of a separate element.
- **Home intro** uses the intact photo with one larger rounded corner, echoing the hero seam.

## Review priorities
1. **Still hero at your real screen size:** portrait and name balance, the lower-right Sage pocket, the logo position.
2. **Cutout at full size on a Retina display:** whether the edges and softness are acceptable, or a better source is needed.
3. **Add email and LinkedIn:** this completes the constellation and the contact route, and it's the biggest functional gap. A preview with test values: see the screenshot paths in my final message.
4. **Draft copy:** especially the role-seeking line.
5. **Apple touch icon:** it's Charcoal on transparent and unmodified, so it may be hard to see if iOS places it on a dark background. Check on a real device; a fix would need an opaque icon from your generator.
6. **Safari and a real phone:** the main untested environments.

RealFaviconGenerator made this easy 🎉 Optional support: https://realfavicongenerator.net/donate

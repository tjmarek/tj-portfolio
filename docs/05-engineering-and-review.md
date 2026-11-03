# 05 — Engineering and review

Initialize minimal Astro safely in nonempty kit. Prefer semantic HTML, CSS layout/masks and small vanilla JS/TS. No Three.js/WebGL/animation framework required. No React requirement. Preserve existing assets. Choose compatible actual packages/APIs, document versions. Avoid unnecessary dependencies.

Use real HTML for content and anchors, not giant rendered hero image. Compose with responsive CSS, portrait image, real logo, text, optional masks. Hero screenshot must NOT be inserted as a fake functional website. Small progressive JS only for work preview; essential routes/content work without it. Pre-size images and preview region, optimize assets sensibly, no huge duplicated background photo. Don't download a generic portrait/logo as substitute.

Shared Layout/Head for all routes, exact favicon install in document 06, licensed fonts, titles/descriptions. Meaningful alt text or empty alt when redundant. Semantic nav labels for distributed navigation, logical DOM/Tab order, visible focus, adequate targets. Don't use confusing ARIA patterns. Preview responds to focus and touch safely; no target movement while selecting.

Glass: subtle backdrop-filter enhancement with opaque readable fallback. Verify every label against actual composite background. No excessive blur on huge regions. Reduced-motion removes optional movement; reduced-transparency/unsupported filtering uses solid/tinted surface. Natural scroll, no fixed viewport clipping.

Review desktop ~1440x900/1366x768, short ~1280x600, mobile ~390x844, landscape and 200% zoom. Confirm no face/text/control collisions or horizontal overflow. Preserve intent via reflow rather than tiny scale.

Implementation order: establish static hero using actual assets -> refine spacing/layers/type in available browser tools -> supporting content/routes -> restrained interaction -> QA. Complete all within task, not stop after plan. No automatic need to ask for another brief.

Run install/build and available checks. Inspect desktop/mobile screenshots if tools allow; fix obvious errors. Test every link, no-JS, focus/touch preview, reduced-motion/transparency fallback, favicon requests, browser console/network where available. Never claim tests not run or scores not measured. Create BUILD-NOTES.md with actual results, missing inputs, provisional copy, visual compromises, run commands and review priorities. No deploy/git push/backend/tracking or destructive writes.

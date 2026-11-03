# Start here — new editorial reset

1. Back up/rename old project outside this one. Do not delete your only assets or remote GitHub repository. Fresh local start requires no remote deletion; this kit performs no repo operation.
2. Extract ZIP. Use enclosed tj-editorial-portfolio folder as project root; rename to tj-portfolio if desired. No earlier kit/update required. It is documentation, not yet an app: Claude creates package.json/toolchain.
3. Add actual assets:
   - src/assets/branding/: real transparent logo variants (#262626, #E5EBE5, #DD2713 when available); SVG optional.
   - src/assets/portraits/: clean portrait and cutout if available, preserve original.
   - reference/design/: Leslie structural reference AND latest generated mockup, optional other inspirations. Label filenames clearly. Latest mockup is direction to improve, not exact template. No private refs published.
   - reference/favicon-package/: original favicon ZIP and optional generator HTML. Exact download instructions already bundled.
   - src/assets/projects/: approved imagery if ready.
   - public/resume/: actual approved resume if available (create folder).
4. Fill docs/07-user-inputs.md with real contact links, resume, facts and image roles. Unknowns can remain NOT PROVIDED. Don't wait for every case study; don't invent numbers.
5. Open this root in Claude Code/editor. Terminal example:
```
cd /your/actual/path/tj-portfolio
claude
```
6. Paste all of prompts/BUILD.md below its title. Let Claude inspect, initialize and build. Don't paste old prompt. Review local install approvals; no deployment/account changes needed.
7. After application exists, use commands Claude reports. Typical npm: npm install, npm run dev; open server URL. Don't run npm before package.json exists or mix lockfiles/package managers. Build/preview use actual generated scripts.
8. Review still hero first: personality, portrait/name/work balance, breathing room, embedded links, professional identity, frosted contacts. Then test keyboard/mobile/routes/preview and supporting content. Read BUILD-NOTES.md. A good screenshot doesn't validate interaction.

Missing toolchain: let Claude diagnose actual selected Astro requirements. No prebuilt app/font/image binaries in kit. Keep backup until new app works. Full public copy and case studies need later verification; this is a complete homepage rough draft, not guaranteed production-ready deployment.

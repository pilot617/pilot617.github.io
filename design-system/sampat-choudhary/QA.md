# Redesign verification — 2026-09-24

Verified the Vite production build in Chromium, in addition to visually inspecting desktop and mobile screenshots.

## Build and deployment

- ESLint passed.
- TypeScript checks passed for application and Vite configuration.
- Production build passed; existing Browserslist data-age notice is non-blocking.
- `git diff --check` passed.
- GitHub Pages root base path, HashRouter and `.nojekyll` preserved.
- Deployment workflow now runs lint and typecheck before building.
- No deployment or remote push performed.

## Browser checks

- No horizontal page overflow at 320, 375, 390, 640, 768, 1024 and 1440 CSS pixels.
- Home, writing archive and article routes rendered without JavaScript errors or failed local asset requests.
- Home section navigation updates the URL, scrolls below the sticky header, and focuses the destination.
- Native career and project disclosures open correctly.
- Copy email writes the correct address and announces success.
- Mobile menu exposes expanded state, closes on selection, and restores toggle focus on Escape.
- Writing category filters, search, empty state, reset and clear controls work.
- Existing article URLs survive reload; invalid articles return to writing; unknown routes show a 404 with a working home link.
- Article table of contents scrolls and preserves keyboard focus. Reading progress updates independently of the Markdown tree.
- Code examples and wide tables support keyboard scrolling.
- Embedded MP4 metadata loads: 60.021 seconds, 1920 × 1080. Playback uses native controls.
- Résumé returns HTTP 200 with PDF content type.
- Reduced-motion mode disables custom reveal effects and smooth scrolling.

## Automated accessibility

Axe-core 4.10.3, WCAG 2 A/AA, WCAG 2.1 AA and best-practice rules: **zero reported violations** in the tested states:

- Homepage: desktop and mobile.
- Writing archive: mobile.
- Video article: desktop and mobile.
- Voice AI article: desktop.

This is an automated audit plus visual and keyboard checks, not a claim of exhaustive assistive-technology certification.

## Performance decisions

- Main JavaScript: approximately 75.8 KB gzip.
- Markdown renderer/article route: separate approximately 49.2 KB gzip chunk.
- Shared CSS: approximately 12.2 KB gzip.
- Locally hosted fonts: approximately 48 KB combined.
- Portrait reduced from approximately 2 MB to 165 KB WebP.
- No new application dependencies, autoplay, animation framework or remote font requests.

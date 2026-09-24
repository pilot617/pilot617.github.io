# Sampat Choudhary — Design system

## Direction

An editorial engineering portfolio: confident typography, quiet technical diagrams, and a clear narrative from work to person to conversation. UI/UX Pro Max’s verified **Minimalism & Swiss Style** guidance is the foundation: strong grid, generous whitespace, restrained interactions, clear hierarchy. The dark-mode guidance informs the charcoal surfaces. The generic light/blue palette was intentionally adapted into charcoal, warm ivory, and chartreuse for this personal identity. Archivo and Space Grotesk are the recommended pairing; Space Grotesk leads display typography while Archivo handles longer body copy.

## Tokens

The implementation source of truth is `src/index.css`.

| Role | Value |
| --- | --- |
| Background | #141613 |
| Surface | #1b1e18 |
| Raised surface | #23261f |
| Primary text | #f0f0e8 |
| Secondary text | #a3a69b |
| Accent / contact surface | #d2eaa2 |
| Text on accent | #202717 |
| Border | #34372f |
| Display | Space Grotesk, locally hosted WOFF2 |
| Body | Archivo, locally hosted variable WOFF2 |
| Labels | System monospace |
| Content width | 1184px maximum |
| Section spacing | 112 / 80 / 64px |
| UI motion | 200ms, cubic-bezier(.2,.7,.2,1) |
| Scroll reveal | 550ms, 16px travel, once per element |

Typography uses fluid hero sizing, balanced headings, comfortable prose measures, and generous line heights. Small monospace labels are supplementary, never the only explanation of an action. Main mobile prose is 16px; project descriptions are 14px. Desktop text runs on a restrained editorial scale.

## Structure

1. Identity, engineering focus, and primary CTA.
2. Previous teams and education.
3. Work: voice infrastructure, AI developer tooling, local video pipeline.
4. About: real portrait, engineering philosophy, education, four expertise areas.
5. Experience: four roles, native disclosure controls, patent and mentorship.
6. Writing: latest notes and full writing archive.
7. Contact: email, copy action, social profiles, phone.

The archive and article routes use the same shell, type, color and spacing system. Articles gain a table of contents, reading progress, code/table treatment, native video controls, and a next-read link.

## Interaction and accessibility

- Semantic links for navigation; native buttons for actions; native details for disclosures.
- HashRouter remains to preserve GitHub Pages deep links. Sections use `/#work` inside the router (browser URL `/#/#work`).
- Sticky navigation, visible current section, keyboard skip link, focus management on route changes.
- Mobile navigation exposes expanded state, removes hidden controls from tab order, and closes with Escape.
- Search has a real label, category filters expose pressed state, results and clipboard feedback use status regions.
- Icons accompanying text are decorative; icon-only controls are named.
- No infinite motion, autoplay, hover-only content, scroll hijacking, or custom cursor.
- Reduced-motion renders the static state. Content stays visible even if an observer fails.
- Section links and article table-of-contents offsets account for the sticky header.
- High-contrast foreground/background pairs; focus indicators use a contrasting 2px outline.
- Responsive checks: 320, 375, 390, 640, 768, 1024, 1440px.

## Assets and performance

- Keep original portrait, résumé and article video. Use a 720px WebP portrait on the site.
- Fonts self-hosted, with licenses. Preload only the two used font files.
- Hand-built SVG/CSS diagrams; no animation library or graphics dependency.
- Markdown renderer loaded only on article routes. Non-critical portrait is lazy-loaded.
- Keep existing Google Analytics and GitHub Pages workflow.

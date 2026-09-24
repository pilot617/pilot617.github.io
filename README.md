# Sampat Choudhary — personal website

A responsive engineering portfolio and Markdown notebook built with React 18, TypeScript, Vite, React Router, and Tailwind Typography.

## Local development

```sh
npm ci
npm run dev
```

## Validation and production build

```sh
npm run lint
npm run typecheck
npm run build
npm run preview
```

## Content

- `src/pages/HomePage.tsx`: introduction, projects, experience, education, expertise, and contact.
- `src/content/blog/*.md`: articles, with `title`, `date`, `description`, and `tags` in frontmatter. Filenames become slugs; the index sorts newest first.
- `public/sampat-resume.pdf`: résumé.
- `public/sam-portfolio.webp`: optimized current portrait.
- `src/index.css`: shared design tokens, responsive components, and article typography.
- `design-system/sampat-choudhary/MASTER.md`: visual direction and implementation rules informed by UI/UX Pro Max.

Markdown supports GFM tables and code blocks. An image link to a `.mp4`, `.webm`, or `.ogg` file renders as a native video player. Level-two headings populate the article table of contents; use unique, plain-text heading names.

## GitHub Pages

The existing `.github/workflows/deploy.yml` builds and deploys `dist` on pushes to `main`. Use **GitHub Actions** as the Pages source in repository settings. `vite.config.ts` uses `/` as the base because this is a user site at `pilot617.github.io`.

HashRouter preserves refresh-safe URLs without a server rewrite:

- Home: `https://pilot617.github.io/`
- Writing: `https://pilot617.github.io/#/blog`
- Article: `https://pilot617.github.io/#/blog/ai-video-pipeline-no-cloud`
- Section: `https://pilot617.github.io/#/#work`

This is a static site: email opens the visitor’s mail client, copy email uses the browser clipboard API, and there is no contact form backend. Existing analytics are retained. Hash-based article URLs share the homepage social preview, since GitHub Pages cannot serve per-article HTML metadata for fragment URLs.

Fonts are self-hosted under `public/fonts` with their SIL Open Font Licenses. The custom favicon and social preview are local assets.

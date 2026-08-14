# Shanjida Farzana Owishy — Portfolio

A professional public-health research portfolio built with Astro and adapted from the narrow, content-first architecture of Astro Narrow. Content is editable through Decap CMS and deploys to GitHub Pages.

## Local development

```sh
pnpm install
pnpm dev
```

The site runs at `http://localhost:4321`. The Decap editor is at `/admin/`; for local CMS editing, run `npx decap-server` in a second terminal.

## Decap CMS setup

1. In `public/admin/config.yml`, replace `YOUR_GITHUB_USERNAME/Owishy-Website` with the final GitHub `owner/repository`.
2. Configure a GitHub OAuth provider for Decap CMS and add its `base_url` and `auth_endpoint` under `backend`, or use a compatible hosted authentication service.
3. Commit the configuration. Editors can then sign in at the deployed `/admin/` route and propose content changes through the editorial workflow.

## GitHub Pages

Push the repository to GitHub, then open **Settings → Pages** and set **Source** to **GitHub Actions**. The included workflow automatically detects whether it is a user site or project site and supplies Astro's `site` and `base` values.

## Content

All portfolio content lives in `src/data/profile.json`. The downloadable CV is in `public/Shanjida-Farzana-Owishy-CV.pdf`.

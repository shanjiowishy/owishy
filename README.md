# Shanjida Farzana Owishy — Portfolio

A professional public-health research portfolio built with Astro and adapted from the narrow, content-first architecture of Astro Narrow. Content is editable through Pages CMS and deploys to GitHub Pages.

## Local development

```sh
pnpm install
pnpm dev
```

The site runs at `http://localhost:4321`.

## Pages CMS

1. Sign in at [Pages CMS](https://app.pagescms.org/) with GitHub.
2. Select the `shanjiowishy/owishy` repository and the `main` branch.
3. Edit blog articles or structured profile content. Pages CMS reads `.pages.yml` from the repository root and commits saved changes to GitHub.
4. Each commit triggers the included GitHub Pages workflow automatically.

## GitHub Pages

Push the repository to GitHub, then open **Settings → Pages** and set **Source** to **GitHub Actions**. The included workflow automatically detects whether it is a user site or project site and supplies Astro's `site` and `base` values.

## Content

All portfolio content lives in `src/data/profile.json`. The downloadable CV is in `public/Shanjida-Farzana-Owishy-CV.pdf`.

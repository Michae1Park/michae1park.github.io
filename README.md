# michae1park.github.io

My personal website, built with [Next.js](https://nextjs.org) and [Tailwind CSS](https://tailwindcss.com).

## Editing content

**All text, links, jobs, and projects live in [`src/content.ts`](src/content.ts).** Edit that file and the site updates. You shouldn't need to touch any other file.

The site is in English at `/` and Korean at `/ko/`, with an EN / KO toggle in the top bar. The Korean text lives in [`src/content.ko.ts`](src/content.ko.ts), which has the same layout as `content.ts`: when you add, remove, or change an item in one, do the same in the other.

- **Your photo:** put it in `public/` (e.g. `public/me.jpg`) and set `photo: "/me.jpg"`. It also appears on the link-preview image, which is redrawn on every build.
- **Project images:** put them in `public/projects/` and set each project's `image`.
- **Résumé:** put a PDF at `public/resume.pdf` and set `resume: "/resume.pdf"`.
- **Links in text:** write `[label](https://url)` inside any bio, about, or description string.

## Running locally

Requires [Node.js](https://nodejs.org) 20.9+ (Ubuntu's `apt install nodejs` is too old).
Easiest is [nvm](https://github.com/nvm-sh/nvm): run `nvm use` in this folder to pick up the version in `.nvmrc`.

```bash
npm install
npm run dev     # open http://localhost:3000; changes show up live
```

## Deploying

Every push to `main` builds the site and publishes it to GitHub Pages via
`.github/workflows/deploy.yml`.

One-time setup: in the GitHub repo, go to **Settings → Pages → Build and deployment**
and set **Source** to **GitHub Actions**.

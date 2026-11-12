# Maduka Jayasinghe — Portfolio

Personal portfolio site for Maduka Jayasinghe, Senior Systems Software Engineer.

Built with React, TypeScript, Vite, and Tailwind CSS.

## Setup

```bash
npm install
npm run dev
```

## Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start the dev server     |
| `npm run build`   | Typecheck and production build |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run oxlint               |

## Content

Edit personal details, experience, projects, and links in [`src/data/site.ts`](src/data/site.ts). Leave a string empty when a link or image is not ready yet.

## Deploy

Pushing to `main` builds and deploys to GitHub Pages via Actions.

1. In this repo: **Settings → Pages → Source → GitHub Actions**.
2. Register `madukajay.is-a.dev` (see below).
3. After that PR is merged: **Settings → Pages → Custom domain** → `madukajay.is-a.dev` → check **Enforce HTTPS**.

Live site: https://madukajay.is-a.dev

### Register the is-a.dev subdomain

is-a.dev is free DNS for `*.is-a.dev`. You claim a name with a PR to [is-a-dev/register](https://github.com/is-a-dev/register):

1. Fork that repo.
2. Add `domains/madukajay.json`:

```json
{
  "owner": {
    "username": "madukajay"
  },
  "records": {
    "CNAME": "madukajay.github.io"
  }
}
```

3. Open a pull request and wait for it to merge (DNS publishes within a few minutes).
4. Then set the custom domain on this Pages site as above.

If GitHub asks you to verify the domain, follow [their verification guide](https://docs.is-a.dev/guides/github-pages/) (extra TXT record PR using the string GitHub shows).

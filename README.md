# WPDA Website (Next.js + Sanity)

Wojtek Potaszkin Dance Academy website built with:
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Sanity CMS (embedded Studio + draft/preview support)

## Features

- Sanity-powered content for:
  - Homepage
  - Classes
  - About / Academy
  - Team
  - Competitive page
  - Wojtek profile
  - Gallery
  - Contact
  - Join page
  - SEO metadata
- Embedded Studio at `/studio`
- Draft mode endpoints for preview workflow
- Structured schemas with singletons + list documents

## Project Structure

- `app/(site)` - frontend site routes
- `app/studio/[[...tool]]` - embedded Sanity Studio
- `app/api/draft-mode/*` - preview enable/disable routes
- `sanity/` - schema, queries, clients, loaders
- `scripts/seed-sanity.mjs` - bootstrap seed script

## Requirements

- Node.js 20+
- npm
- Sanity project (project ID + dataset)

## Ubuntu Prerequisites (Single Command)

Use this command to install required system tooling and Node.js 20 on Ubuntu:

```bash
sudo apt-get update && sudo apt-get install -y curl ca-certificates gnupg && curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt-get install -y nodejs git build-essential
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill values:

```bash
cp .env.example .env.local
```

Required:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `NEXT_PUBLIC_SITE_URL` (e.g. `http://localhost:3000` locally)
- `NEXT_PUBLIC_SANITY_STUDIO_URL` (default `/studio`)

Preview:
- `SANITY_VIEWER_TOKEN` (Viewer permissions)

Optional (seeding with write access):
- `SANITY_API_WRITE_TOKEN`

## Install

```bash
npm install
```

## First Run (Recommended Order)

1. Copy env template and set values:

```bash
cp .env.example .env.local
```

2. Install dependencies:

```bash
npm install
```

3. (Optional) Seed starter CMS content:

```bash
SANITY_API_WRITE_TOKEN=your_token_here npm run sanity:seed
```

4. Start dev server:

```bash
npm run dev
```

## Run Locally

```bash
npm run dev
```

Open:
- Site: `http://localhost:3000`
- Studio: `http://localhost:3000/studio`

## Seed Initial Content

```bash
SANITY_API_WRITE_TOKEN=your_token_here npm run sanity:seed
```

Notes:
- `SANITY_API_WRITE_TOKEN` should be a token with write permissions.
- `SANITY_VIEWER_TOKEN` is for draft/preview reads and should be least-privilege.

## Quality Checks

```bash
npx tsc --noEmit
npm run lint
npm run build
```

## Production Deployment Checklist

1. Set all required environment variables in your hosting platform.
2. Ensure Sanity CORS and preview URLs include your production domain.
3. Build and smoke test critical routes.
4. Verify draft mode:
   - `/api/draft-mode/enable`
   - `/api/draft-mode/disable`
5. Confirm Studio access and publishing flow for editors.

## Scripts

- `npm run dev` - start dev server
- `npm run build` - production build
- `npm run start` - run production server
- `npm run lint` - run ESLint
- `npm run sanity:dev` - run Sanity CLI dev
- `npm run sanity:seed` - seed starter content

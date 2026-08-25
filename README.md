# Dobaria Law PC — Website

Next.js 13 (App Router) marketing site for Dobaria Law PC, Lansdale PA.

## Getting started

```bash
npm install
cp .env.example .env.local   # fill in SMTP values
npm run dev
```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Local dev server on http://localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |

## Environment variables

The contact / consultation forms POST to `app/api/contact/route.ts`, which sends mail over
SMTP via nodemailer. Set these in Vercel → Project → Settings → Environment Variables
(and in `.env.local` for development). See `.env.example` for the full list.

`SMTP_HOST` · `SMTP_PORT` · `SMTP_SECURE` · `SMTP_USER` · `SMTP_PASS` · `MAIL_FROM` · `MAIL_TO`

Without these the API route returns a 503 and the form shows a "please call the office" message.

## Deploying to Vercel

Framework preset **Next.js** is auto-detected — no `vercel.json` needed. Add the SMTP
environment variables before the first deploy so the forms work on launch.

## Structure

```
app/          routes, layouts, metadata, sitemap/robots, contact API route
components/   Navbar, Footer, page sections, Breadcrumbs, JsonLd, LenisProvider
components/ui accordion (the only shadcn primitive this site uses)
content/      page copy, attorney bios, blog posts
lib/          schema.org helpers, phone formatting, cn()
public/       images and OG assets
```

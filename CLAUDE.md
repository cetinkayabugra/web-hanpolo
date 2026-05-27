# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Hanpolo is a single-page marketing site for a digital solutions business. Built with Next.js (App Router), Tailwind CSS, and Resend for contact form email delivery. Deployed on Vercel with Cloudflare DNS.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build (must pass before deploying)
npm run lint      # ESLint
```

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `RESEND_API_KEY` | Resend API key for contact form emails → contact@hanpolo.com |

## Architecture

**Single page (`src/app/page.tsx`)** composes five section components in order:

```
Nav → Hero → Services → About → ContactForm → Footer
```

All section components live in `src/components/`. They are plain Server Components except:
- `Nav` — `"use client"` for mobile menu toggle state
- `ContactForm` — `"use client"` for form state and fetch to `/api/contact`

**Contact form flow:**
1. `ContactForm` POSTs `{ name, company, email, message }` to `/api/contact`
2. `src/app/api/contact/route.ts` (dynamic route) initialises Resend per-request and sends an email to `contact@hanpolo.com` with `replyTo` set to the submitter's email

> Resend must be instantiated **inside** the handler, not at module scope — module-level instantiation breaks the build when `RESEND_API_KEY` is absent.

## Resend Sender Address

The `from` address in `route.ts` currently uses `onboarding@resend.dev` (Resend's test domain). Before going live, add and verify a sending domain in Resend and update it to something like `noreply@hanpolo.com`.

## Planned Expansion Phases

1. Service pages
2. Portfolio & case studies
3. AI chat assistant
4. Client portal
5. Business automation platform

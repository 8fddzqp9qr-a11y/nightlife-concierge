# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on localhost:3000
npm run build        # Production build
npm start            # Run production server
npm run lint         # ESLint
```

No test framework is configured.

## Architecture

Next.js 14 App Router site with TypeScript, Tailwind CSS, and Framer Motion. Dark luxury theme with gold accent (`#D4AF37`).

**Routing**: File-based under `/app` — pages at `/`, `/services`, `/how-it-works`, `/about`, `/faq`, `/request-booking`. All page components are client components (`"use client"`).

**Components** (`/components`): `Navigation` (fixed header + mobile drawer), `Footer`, `Button` (primary/secondary variants via motion), `ServiceCard`, `FadeIn` (scroll-triggered Framer Motion wrapper), `FormInput` (text/email/tel/number/textarea/select).

**Styling**: Tailwind with custom theme in `tailwind.config.ts` — extended colors (background `#0A0A0A`, surface `#1A1A1A`, accent gold), custom border radii, max-width 1200px. Inline gradient styles used for gold text effects. Custom scrollbar styling in `globals.css`.

**Path alias**: `@/*` maps to project root (e.g., `@/components/Button`).

**Environment**: `.env.local` holds `RESEND_API_KEY` and `ADMIN_EMAIL` for Resend email integration.

**Animations**: Framer Motion throughout — `FadeIn` for scroll reveals, `motion` wrappers on buttons/cards for hover/tap, mobile menu slide transitions.

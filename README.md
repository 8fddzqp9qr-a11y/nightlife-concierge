# Nightlife Concierge

Premium nightlife and event concierge website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
npm install
```

### Environment Variables

Create a `.env.local` file with:

```
RESEND_API_KEY=re_your_api_key_here
ADMIN_EMAIL=admin@yourdomain.com
```

Get your Resend API key at [resend.com](https://resend.com).

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
npm start
```

## Pages

- `/` — Home (hero, services overview, how it works, trust, CTA)
- `/services` — Detailed service descriptions
- `/how-it-works` — Step-by-step process
- `/about` — Brand story and values
- `/faq` — Frequently asked questions
- `/request-booking` — Booking request form

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Email**: Resend API

## Deployment

Deploy to Vercel:

1. Push to GitHub
2. Connect repository in Vercel dashboard
3. Add `RESEND_API_KEY` and `ADMIN_EMAIL` environment variables
4. Deploy

# AvantiLogix Website

AvantiLogix's marketing website, based on the AzconServices site and built with
Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Design and branding

The reference site's page layouts, service catalogue, imagery, animations,
and contact flow are retained. Company-facing names,
metadata, email subjects, social links, and logo assets use AvantiLogix branding.
Public Jobs navigation and pages are removed; `/jobs` and `/jobs/[id]` return
404 and are not included in the sitemap. Admin pages, jobs APIs, database code,
and their dependencies have also been removed. No database or admin setup is required.

The palette is based on the supplied artwork in `Logo/AVANTLOGIC-LOGO PNG.png`:

| Token | Value | Use |
| --- | --- | --- |
| `brand-500` | `#de1f26` | Logo red, accents, progress indicators |
| `brand-600` | `#ba2024` | Primary buttons with white text |
| `brand-800` | `#7f0000` | Deep logo red, footer, gradients |
| `navy-900` | `#20100f` | Warm near-black headings |
| `canvas` | `#fcfafa` | Off-white page background |

Shared colors are defined in `tailwind.config.ts`; global scrollbar and selection
styles reference those tokens. The original `navy` token names are retained for
compatibility with the reference components, but use warm dark shades.

`public/logo.png` is the tightly cropped, web-sized version of the supplied
artwork. `app/icon.png` and `app/apple-icon.png` use the logo symbol. Navigation
and footer images preserve the artwork's aspect ratio without CSS recoloring.
Both serve the full-resolution lossless PNG directly to preserve fine logo
details; the header uses solid white to match the artwork background.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm start
```

The production build compiles the application and checks TypeScript.

## Pages

| Route | Content |
| --- | --- |
| `/` | Hero, talent/project paths, services, process, industries, contact CTA |
| `/about` | Company story, mission, vision, values, process |
| `/services` | Grouped service catalogue and service details |
| `/portfolio` | Seven projects with All, Apps, and Websites filters |
| `/portfolio/[slug]` | Project preview, overview, and original app/website link |
| `/industries` | Industry experience and capabilities |
| `/contact` | Office details and topic-aware contact form |
| `/privacy`, `/terms`, `/cookies` | Legal information |

## Content and assets

- `lib/data.ts`: company details, navigation, services, industries, and values.
- `components/`: shared sections, navigation, footer, forms, and animations.
- `app/`: routes, metadata, API handlers, and global styles.
- `public/images/`: hero, service, industry, and team photography.
- `lib/portfolio.ts`: project names, categories, descriptions, images, and external links.

Portfolio content and the seven images in `public/images/portfolio/` are carried
over from http://www.avantilogix.com/#portfolio. The original Go Eats title,
description, and Google Play destination are preserved as published.
The homepage retains a `#portfolio` section linking to the dedicated page.
Project detail pages are included in the sitemap.

Contact details are shared through `lib/data.ts`:

- Address: D-406, They SkyWalk Element, Jagatpur, 382470, Ahmedabad.
- Phone: +91 8758770402.
- Email: support@avantilogix.com.
- LinkedIn: https://www.linkedin.com/company/avantilogix-solutions-private-limited.

The contact map uses the shared address. Office hours are shown in IST.

## Service configuration

Configure environment variables in your deployment environment, or an untracked
`.env.local` file for local development. Do not commit credentials.

- Contact email: `RESEND_API_KEY`, `CONTACT_FROM_EMAIL`, and optionally
  `CONTACT_TO_EMAIL` (defaults to the company email in `lib/data.ts`).

The contact form submits to `/api/contact`; it requires email-provider
configuration to send messages. This is the site's only API integration.

Deploy as a standard Next.js application. Netlify configuration is included.

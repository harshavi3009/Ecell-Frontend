# E-Cell RBU — Website

Official public website for **E-Cell RBU** (Entrepreneurship Cell of
**Ramdeobaba University, Nagpur**). Built as a static, content-driven Next.js
site — no backend, no database.

## Tech Stack

- **Next.js 16** (App Router) + **TypeScript** (strict)
- **Tailwind CSS v4** (design tokens via CSS variables in `src/app/globals.css`)
- **Motion** (`motion/react`) for animations, with `prefers-reduced-motion` fallbacks
- **lucide-react** for icons + custom social icons in `src/components/ui/SocialIcons.tsx`
- Package manager: **pnpm** (a `package-lock.json` / `pnpm-lock.yaml` is committed)

## Local Setup

```bash
# Install dependencies
pnpm install        # or: npm install

# Run the dev server (hot reload at http://localhost:3000)
pnpm dev            # or: npm run dev

# Production build (must succeed with zero errors before deploy)
pnpm build          # or: npm run build

# Preview the production build
pnpm start
```

Node 18+ required.

## Site Structure

```
src/app/
  page.tsx              # Home      (/)
  about/page.tsx        # About     (/about)
  committee/page.tsx    # Committee (/committee)
  layout.tsx            # Root layout: fonts, SEO metadata, OG tags
  globals.css           # Design tokens (colors, spacing, radii), base styles

src/components/
  layout/Navigation.tsx # Fixed navbar, scroll background, mobile drawer
  sections/Footer.tsx
  sections/Hero.tsx
  sections/AboutCardCascade.tsx   # Signature scroll-driven card cascade (About)
  sections/WhoWeAre.tsx           # Mission / Vision / Focus / Impact pillars
  sections/EventsSection.tsx      # Event cards + computed status badges
  sections/CommitteeSection.tsx   # Category-grouped member grid
  ui/Button.tsx
  ui/SocialIcons.tsx
  ui/SectionHeading.tsx

src/data/
  events.ts             # All four verified events (ISO dates → status computed)
  committee.ts          # 15 members across 3 categories
  content.ts            # Org name, description, social links, nav items

public/
  committee/1.jpg … 15.jpg   # Member headshots
  events/*.svg               # Event poster placeholders (swap for real posters)
  logo/                      # Brand assets (when supplied)
```

## How to Edit Content (non-engineer friendly)

### Add or edit an event → `src/data/events.ts`

Each event is a plain object. **Always use real ISO dates** — the "Past /
Upcoming" badge is computed automatically from `endDate`, so you never edit the
badge text:

```ts
{
  title: "TRANSPRENEUR '26",
  subtitle: "The Journey to Entrepreneurship",
  displayDate: "30–31 January 2026",   // shown to visitors
  startDate: "2026-01-30",             // ISO — drives status
  endDate:   "2026-01-31",             // ISO — drives status
  venue: "Main Audi",
  image: "/events/transpreneur-26.jpg",
  highlights: ["Founder sessions", "BMC workshop", "Idea pitching"],
  tags: ["Startup", "Entrepreneurship"],
}
```

Rules:
- `startDate` / `endDate` must be real `YYYY-MM-DD` strings.
- `tags` should only list categories that are actually accurate for that event
  (Startup, Entrepreneurship, Innovation, Networking, Competition).
- Drop the poster image into `public/events/` and point `image` at it.

### Add or edit a committee member → `src/data/committee.ts`

```ts
{
  name: "Jane Doe",
  position: "President",
  category: "Leadership",          // Leadership | Core Committee | Domain Teams
  image: "/committee/1.jpg",
  linkedin: "https://linkedin.com/in/…",   // optional
  instagram: "https://instagram.com/…",    // optional
}
```

Rules:
- `category` must be one of the three defined in `committeeCategories`
  (`src/data/committee.ts`). Don't invent a new hierarchy.
- Map `image` to the correct file in `public/committee/`.
- Leave `linkedin` / `instagram` out entirely if the member hasn't supplied them.

### Swap logo or images

- **Logo / favicon / OG image:** drop files into `public/logo/` (or root of
  `public/`) and update references in `src/app/layout.tsx` (metadata icons) and
  `src/components/layout/Navigation.tsx` (navbar wordmark).
- **Event posters:** replace the placeholder SVGs in `public/events/` with real
  JPG/PNG posters and update the `image` path in `src/data/events.ts`.
- **Committee photos:** replace files in `public/committee/` (keep the `1.jpg`
  … `15.jpg` naming or update the paths in `src/data/committee.ts`).

### Edit site-wide copy

Org name, one-line description, Instagram URL, and nav links live in
`src/data/content.ts`. The footer and navbar read from there.

## Recruitment CTA Policy (important)

E-Cell RBU is **not currently open for recruitment**. Do **not** add "Join Now",
"Apply Now", "Register Now", or any similar CTA anywhere on the site. Use
discovery-oriented copy instead ("Explore E-Cell", "Meet the Committee",
"Follow E-Cell RBU"). If recruitment reopens, update the copy in one place
(`src/data/content.ts`) and re-propagate.

## Accessibility & Performance Notes

- All scroll-driven animation (the About card cascade) has a static,
  non-scroll fallback when `prefers-reduced-motion` is set.
- Images use native `loading="lazy"` and `next/image` where applicable.
- Semantic HTML, visible focus states, and `aria-label`s are used throughout.

## Deploy

The site is a static export-ready Next.js app. Deploy on **Vercel**:

1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). Build command `next build`,
   output directory auto.
4. `pnpm build` (or `npm run build`) must pass with zero errors before deploy.

## Outstanding Content (to be supplied before final launch)

- [ ] Official E-Cell RBU logo (SVG + PNG, light & dark variants)
- [ ] Favicon (512×512) and OG image (1200×630)
- [ ] Real event poster images (replace `public/events/*.svg` placeholders)
- [ ] Official mission / vision statement text (currently using placeholder pillars)
- [ ] Confirmed short org description for hero/footer/SEO
- [ ] Committee member LinkedIn / Instagram URLs (where available)

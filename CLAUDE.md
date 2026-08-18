# E-Cell RBU — Website Build Specification (v2)

## 0. How to Use This Document

This is a build prompt for an AI coding agent (or a dev team) producing the
official public website for E-Cell RBU. Treat the factual content in this
document (org name, event details, dates) as **source of truth** — do not
silently overwrite it if a live source phrases something differently.
However, before writing final copy, the agent **must** fetch and read:

1. `http://rcoemtbi.org/e-cell/` — content reference only, never design reference
2. `https://www.instagram.com/ecell_rbu/` — content, tone, and event reference

Use these to fill gaps and confirm nothing here is stale. If a live source
contradicts this document on a factual point (a date, a name, a title),
flag the conflict to the user instead of silently picking one.

**Open items you need from the user before this can ship** (see §26 for
the full checklist): logo files, committee roster + photos, event poster
images, and an official mission/vision statement or short description.

**Confirmed:** all four listed events (Transpreneur '26, Expo Techsetu 2026,
Venture Vault 2.0 2025, Ideathon '25) are historical — the site is being
built after all of them have already taken place. Treat every one as
"Past" in copy and design, and see §16 for why the code should still
compute this rather than hardcode it.

---

## 1. Official Identity

- Organization name: **E-Cell RBU**
- University: **Ramdeobaba University (RBU), Nagpur**
- Never use "E-Cell Nagpur," "E-Cell RCOEM," or "RCOEM E-Cell" as the
  primary name. RCOEM TBI may appear only where it's factually a co-organizer
  (e.g., Ideathon '25).
- Official Instagram: `https://www.instagram.com/ecell_rbu/`
- Use the supplied E-Cell RBU logo and brand assets as the foundation for
  the visual system (see §6 and §26).

---

## 2. Recruitment Status & CTA Policy (authoritative — do not restate elsewhere)

E-Cell RBU is **not currently open for recruitment.** This is the single
governing rule for all CTAs on the site; every other section should link
back here rather than re-list the banned phrases.

**Never use:** "Join Now," "Join E-Cell," "Become a Member," "Apply Now,"
"Register Now," "Recruitment Open," "Registrations Open," or any CTA/copy
implying students can currently join or that any historical event is
currently accepting registrations.

**Use instead:** "Explore E-Cell," "Discover More," "Meet the Committee,"
"Explore Our Events," "Follow E-Cell RBU."

If recruitment status changes in the future, this is the only section that
needs to be updated and re-propagated.

---

## 3. Required Site Structure

Three primary pages:

```
/
/about
/committee
```

Events are prominently featured on Home; About may reference them briefly
but should **link to** the Home events section rather than duplicating the
full event archive, to avoid maintaining the same content in two places.

Do not add extra routes unless they clearly improve UX (e.g., don't build
individual event detail pages — use a modal instead, per §16).

---

## 4. Tech Stack & Tooling

- Next.js (App Router), TypeScript, Tailwind CSS
- Motion (Framer Motion), lucide-react
- Package manager: **pnpm** (or npm if pnpm isn't available — pick one and
  commit a matching lockfile)
- No backend, no database, no environment variables required
- Include a `README.md` covering: local setup, how to add/edit an event
  (`data/events.ts`), how to add/edit a committee member (`data/committee.ts`),
  and how to swap the logo/images — this site will likely be maintained by
  non-engineers on the committee after handoff
- `npm run build` (or `pnpm build`) must succeed with zero errors before
  the project is considered done

---

## 5. Design Direction

Feel: premium, modern, minimal, entrepreneurial, confident, slightly
futuristic — like a real startup accelerator's site, not a college club
template.

**Avoid:** generic Bootstrap layouts, excessive gradients/glassmorphism/neon,
random or unnecessary animation, unneeded 3D, overcrowded sections.

**Priority order:** typography → spacing → composition → imagery →
interaction → animation.

**Design tokens:** derive the color palette from the supplied logo (extract
1–2 brand colors + a neutral scale) rather than picking an arbitrary
palette. Pick one display typeface for headlines and one workhorse
typeface for body text; define a consistent spacing scale (e.g., Tailwind's
default `4/8/12/16/24/32/48/64/96`) and stick to it site-wide.

---

## 6. Navbar

- Logo/wordmark: **E-CELL RBU**
- Links: Home, About, Committee
- Instagram icon linking to `https://www.instagram.com/ecell_rbu/`
- No recruitment/membership links
- Sticky/fixed after a small scroll threshold
- Clean hamburger menu on mobile

---

## 7. Home — Hero

- E-Cell RBU logo
- Headline: "Ideas. Innovation. Entrepreneurship." (or a stronger line in
  the same register, grounded in verified organization tone — don't invent
  claims)
- Supporting description from verified sources
- Primary CTA: "Explore E-Cell" · Secondary CTA: "Meet the Committee"
- Subtle animated background/motion element; should feel visually strong
  on first paint

---

## 8. Home — About Preview

- Title: "What is E-Cell RBU?"
- What it is, what it focuses on, how it supports entrepreneurship/innovation,
  mission/vision if verified — sourced from §0's verification step
- "Discover More →" linking to `/about`
- No invented statistics

---

## 9. Home — Core Areas

Card grid on themes consistent with verified activities (suggested:
Entrepreneurship, Innovation, Leadership, Networking). Icon + title + short
description + subtle hover motion per card. Keep elegant, not busy.

---

## 10. Home — Events & Initiatives

Heading: "Events & Initiatives" · Sub-line: "From ideas to action."

This is a **historical archive**, not an "upcoming events" section — see
§14 for why status must be computed, not hardcoded.

---

## 11–14. Verified Event Data

Preserve this content faithfully; it comes from the org's own Instagram
posts and should not be reworded into something less specific.

### TRANSPRENEUR '26
- Subtitle: "The Journey to Entrepreneurship"
- Date: 30–31 January 2026 · Venue: Main Audi · Time: 10 AM–5 PM
- Day 1: real startup journeys from founders/industry experts; building an
  ABMC; identifying a problem; creating a solution; pitching the idea
- Day 2: BMC workshop; refining ideas; winner recognition; founder insights
  on identifying opportunities, solving real problems, scaling ventures
- Speakers: Dr. Sonali Kirde (Founder & CEO, Healthspect 360); Mukesh Ashar
  (Founder & Director, Behav'toral Science Chair, Lemon School of
  Entrepreneurship); Saurabh Mangrulkar (Founder, EventBeep); Yash Pande
  (Founder, ROCCA Chocolates; Shark Tank participant)
- Treat Yash Pande's post as part of this event, not a separate one, unless
  official data says otherwise

### EXPO – TECHSETU
- Subtitle: "Startup Expo"
- Date: 23 February 2026 · Time: 11:00 AM–5:00 PM · Venue: Electrical Parking
- Highlights: Startup Pitch, Patent Demonstrations, Business Networking,
  Investor Connects
- Status: Past (confirmed)

### VENTURE VAULT 2.0
- "Entrepreneurial games exclusively for 1st years"
- Activities: Baggage Battle, Memo Marketing, live interaction with the
  founder of "Licksters"
- Venue: MBA Audi · Date: 17–18 September 2025 · Time: 10 AM onwards
- Status: Past (confirmed)

### IDEATHON '25
- Organizer: RCOEM TBI × E-Cell
- Date: 25 & 28 March 2025 · Venue: MBA Auditorium, RBU
- ₹3,00,000 total seed-money grant for MVP development; top 3 ideas receive
  a grant upon incubation at RCOEM TBI; selected ideas may get pre-incubation
  at RCOEM TBI; max 4 people/team

---

## 15. Event Archive Design

Reusable cards: poster/image, name, date, short description, key
highlights, status badge. Category tags (Startup, Entrepreneurship,
Innovation, Networking, Competition) — only tags that are actually accurate
per event. Subtle hover animation. Clicking opens a modal with full detail
(no separate routed pages).

---

## 16. Event Data & Status Logic

Do not hardcode events in JSX, and **do not hardcode a `status: "Past"`
string** — a date-driven site should compute this so it's still correct a
year from now without a manual edit. Store real ISO dates and derive status
at render time:

```ts
// data/events.ts
export interface EcellEvent {
  title: string;
  subtitle: string;
  displayDate: string;   // e.g. "30–31 January"
  startDate: string;     // ISO, e.g. "2026-01-30"
  endDate: string;       // ISO, e.g. "2026-01-31"
  venue: string;
  image: string;
  highlights: string[];
  tags: string[];
}

export const events: EcellEvent[] = [
  {
    title: "TRANSPRENEUR '26",
    subtitle: "The Journey to Entrepreneurship",
    displayDate: "30–31 January 2026",
    startDate: "2026-01-30",
    endDate: "2026-01-31",
    venue: "Main Audi",
    image: "/events/transpreneur-26.jpg",
    highlights: ["Founder sessions", "BMC workshop", "Idea pitching"],
    tags: ["Startup", "Entrepreneurship"],
  },
  {
    title: "EXPO – TECHSETU",
    subtitle: "Startup Expo",
    displayDate: "23 February 2026",
    startDate: "2026-02-23",
    endDate: "2026-02-23",
    venue: "Electrical Parking",
    image: "/events/expo-techsetu.jpg",
    highlights: ["Startup Pitch", "Patent Demonstrations", "Investor Connects"],
    tags: ["Startup", "Networking"],
  },
  {
    title: "VENTURE VAULT 2.0",
    subtitle: "Entrepreneurial games for 1st years",
    displayDate: "17–18 September 2025",
    startDate: "2025-09-17",
    endDate: "2025-09-18",
    venue: "MBA Audi",
    image: "/events/venture-vault-2.jpg",
    highlights: ["Baggage Battle", "Memo Marketing", "Founder of Licksters"],
    tags: ["Entrepreneurship", "Competition"],
  },
  {
    title: "IDEATHON '25",
    subtitle: "RCOEM TBI × E-Cell",
    displayDate: "25 & 28 March 2025",
    startDate: "2025-03-25",
    endDate: "2025-03-28",
    venue: "MBA Auditorium, RBU",
    image: "/events/ideathon-25.jpg",
    highlights: ["₹3,00,000 seed-money grant", "Pre-incubation at RCOEM TBI"],
    tags: ["Startup", "Competition"],
  },
];

// lib/eventStatus.ts
export function getEventStatus(endDateISO: string): "Past" | "Upcoming" {
  return new Date(endDateISO) < new Date() ? "Past" : "Upcoming";
}
```

All four events are confirmed historical as of this build — every one
should render with a "Past Event" badge. Still compute status from
`endDate` rather than hardcoding the badge text, so the archive stays
accurate automatically if new events are added later without a code change.

---

## 17. About Page — Signature Animation

Four cards (Innovation, Leadership, Networking, Entrepreneurship) enter
**one at a time, all from the same top-left corner**, as the user scrolls.
Each new arrival pushes the previously-placed cards one step around a
fixed 2×2 grid, so the set builds up into four perfectly aligned boxes in
the center by the end of the sequence. This replaces the old
"four-corners-converge-to-logo" concept — there is no separate logo/
wordmark resolution state; the end state **is** the four aligned cards.

**The grid:** define four fixed target slots arranged clockwise —
`Slot 1 (top-left)` → `Slot 2 (top-right)` → `Slot 3 (bottom-right)` →
`Slot 4 (bottom-left)`. A new card always enters from the top-left corner
of the viewport and always comes to rest in **Slot 1**. Every card already
placed advances exactly one step clockwise (`1→2`, `2→3`, `3→4`) to make
room. No card ever skips a slot or jumps out of the clockwise order.

**Choreography (map to four scroll segments, e.g. 0–25 / 25–50 / 50–75 /
75–100%):**

1. **Card 1 arrives:** slides in from the top-left corner and settles into
   Slot 1 (top-left). Nothing else on screen yet.
2. **Card 2 arrives:** slides in along the same top-left entry path. As it
   reaches Slot 1, Card 1 slides right into Slot 2 (top-right), vacating
   Slot 1 for Card 2 to settle into. Result: Slot 1 = Card 2, Slot 2 =
   Card 1.
3. **Card 3 arrives:** slides in from the top-left. As it approaches, the
   two placed cards each advance one clockwise step at the same time —
   Card 2 (Slot 1) slides right into Slot 2, and Card 1 (Slot 2) slides
   down into Slot 3 (bottom-right) — vacating Slot 1 for Card 3. Result:
   Slot 1 = Card 3, Slot 2 = Card 2, Slot 3 = Card 1.
4. **Card 4 arrives:** slides in from the top-left. All three placed cards
   advance one clockwise step together — Card 3 (Slot 1) slides right into
   Slot 2, Card 2 (Slot 2) slides down into Slot 3, and Card 1 (Slot 3)
   slides left into Slot 4 (bottom-left) — vacating Slot 1 for Card 4.
   Final result: Slot 1 = Card 4, Slot 2 = Card 3, Slot 3 = Card 2,
   Slot 4 = Card 1 — a completed 2×2 grid, all four cards visible and
   aligned, animation complete.

Implementation notes:

- Scroll-driven via `useScroll` + `useTransform` on a sticky/pinned
  container, with smooth interpolation within each of the four segments —
  not a one-time entrance animation. Within a segment, interpolate the
  entering card's position from the top-left origin to Slot 1, and
  interpolate any repositioned card(s) from their old slot to their new
  slot, in sync.
- Each card keeps a stable identity (key) across the whole sequence so
  Motion animates it smoothly between slots rather than re-mounting it.
- Slot positions (pixel/percentage coordinates for Slot 1–4) should be
  computed once from the container's dimensions so the grid stays
  centered and evenly spaced at any viewport width.
- Subtle scale/shadow/fade-in on entry allowed; avoid excessive rotation
  or motion that would fight the clean slide-and-settle feel.
- **Mobile:** a deliberately redesigned version, not a scaled-down desktop
  layout. A 2×2 grid may be too cramped under ~430px — consider the same
  clockwise-cascade concept collapsing into a single column (each new
  card enters from the top and pushes prior cards down one slot) so it
  stays readable, with no overlap and no horizontal scroll. Support
  375/390/430px.
- **Reduced motion:** provide a simpler, non-scroll-driven static
  presentation of the same four themes already laid out in their final
  positions when `prefers-reduced-motion` is set — skip the cascade
  entirely rather than showing a reduced version of it.

---

## 18. About Content (below the animation)

- **Who We Are** — verified info only
- **Mission** / **Vision** — use verified official text; if none exists
  yet, render `[Mission statement pending]` as an internal TODO marker in
  code comments, not as visible page copy (see §21 on placeholder policy)
- **What We Do** — actual activities from verified sources
- **Our Impact/Ecosystem** — only if real numbers exist; never invent
  stats like "500+ students" or "50+ startups"

---

## 19. Committee Page

Title: "E-Cell RBU Committee." Use only real supplied roster data;
categories (Leadership / Core Committee / Domain Teams) only if they
actually exist in the supplied structure — don't invent a hierarchy.

**Member card:** photo, full name, position, domain (if available),
LinkedIn/Instagram (if available). Clean image, subtle hover scale + card
lift, social icons appearing smoothly. Name must be visible without
requiring hover.

```ts
// data/committee.ts
export interface CommitteeMember {
  name: string;
  position: string;
  category: string;
  image: string;
  linkedin?: string;
  instagram?: string;
}

export const committeeMembers: CommitteeMember[] = [
  // real supplied data only
];
```

---

## 20. Asset Checklist (blocking — needed before final build)

| Asset | Format/Notes | Status |
|---|---|---|
| E-Cell RBU logo | SVG preferred + PNG (transparent bg), light & dark variants | Needed |
| Favicon / OG image | 512×512 favicon; 1200×630 OG image | Needed |
| Committee photos | Square headshots, consistent crop, per member | Needed |
| Committee roster data | Names, positions, categories, socials | Needed |
| Transpreneur '26 poster(s) | `public/events/transpreneur-26.jpg` | Needed |
| Expo Techsetu poster | `public/events/expo-techsetu.jpg` (Feb 2026 — confirmed) | Needed |
| Venture Vault 2.0 poster | `public/events/venture-vault-2.jpg` (Sept 2025 — confirmed) | Needed |
| Ideathon '25 poster | `public/events/ideathon-25.jpg` | Needed |
| Mission/vision statement | Official text, or explicit "none published" | Needed |
| Short org description (1–2 sentences) | For hero/footer/SEO meta description | Needed |

Until these arrive, use tasteful, clearly-labeled placeholder blocks (e.g.
a branded "Image coming soon" panel) — never raw bracket text like
`[CONTENT TO BE PROVIDED]` in the live UI. Track outstanding items in the
README instead, so the shipped site never looks unfinished to a visitor.

---

## 21. Placeholder & Factuality Policy

Never fabricate names, positions, events, dates, awards, partnerships,
sponsors, statistics, or recruitment status. Where data is missing, use a
polished visual placeholder (per §20) and log the gap in the README's
"Outstanding Content" section — don't ship visible bracket placeholders on
a page meant to look production-ready.

---

## 22. Instagram Integration

Link only (navbar, footer, and one CTA section) — no live embedded feed,
since there's no backend to proxy/cache it. Don't invent other social
links; Instagram is the only official one.

---

## 23. Footer

E-Cell RBU wordmark, one-line official description (from §20's needed
short description), Home/About/Committee links, Instagram icon,
"Ramdeobaba University, Nagpur." Clean and minimal.

---

## 24. Responsive, Accessibility, Performance, SEO

- **Responsive:** test 375 / 390 / 430 / 768 / 1024 / 1440px — no
  horizontal overflow, no cropped names/images, no animation clipping
- **Accessibility:** semantic HTML, proper heading hierarchy, alt text,
  keyboard nav, visible focus states, sufficient contrast,
  `prefers-reduced-motion` fallback for the About page card-cascade animation
- **Performance:** `next/image` everywhere, lazy loading, minimal client
  components, no unnecessary dependencies
- **SEO:** per-page metadata + Open Graph:
  - Home: "E-Cell RBU | Entrepreneurship & Innovation"
  - About: "About E-Cell RBU"
  - Committee: "E-Cell RBU Committee"
  - Descriptions sourced from verified content, not invented

---

## 25. Suggested Component Structure

```
app/
  page.tsx
  about/page.tsx
  committee/page.tsx
components/
  Navbar.tsx  Footer.tsx  Hero.tsx  SectionHeading.tsx
  FeatureCard.tsx  EventCard.tsx  EventModal.tsx  EventsSection.tsx
  AboutCardCascade.tsx  MemberCard.tsx  CommitteeSection.tsx  CTA.tsx
lib/
  eventStatus.ts
data/
  committee.ts  events.ts  content.ts
public/
  logo/  committee/  events/  images/
README.md
```

---

## 26. Definition of Done

- [ ] Name is E-Cell RBU everywhere; Ramdeobaba University referenced correctly
- [ ] No recruitment CTA anywhere, including on historical events
- [ ] All four verified events present with correct facts
- [ ] Event status computed from ISO dates, not hardcoded strings
- [ ] All four events (confirmed: Transpreneur '26, Expo Techsetu 2026,
      Venture Vault 2.0 2025, Ideathon '25) display as "Past Event"
- [ ] No visible bracket-style placeholders on live pages
- [ ] About page card-cascade animation works (top-left entry, clockwise
      slot cascade into a final 2×2 grid), is scroll-driven, works on
      mobile, and has a reduced-motion fallback
- [ ] Committee and event data live in `data/`, not inline JSX
- [ ] No broken images, no horizontal overflow
- [ ] SEO metadata + OG tags present
- [ ] README documents content-update workflow
- [ ] `npm run build` succeeds with zero errors
- [ ] Ready to connect to GitHub and deploy on Vercel

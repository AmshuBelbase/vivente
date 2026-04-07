# Viventé Website — CLAUDE.md

## Project Overview

Viventé is a luxury lifestyle brand website showcasing premium construction, swimming pools, landscaping, and interior design services. Built as a marketing/portfolio site with a strong focus on visual storytelling and smooth animations.

## Tech Stack

- **Framework**: Next.js (App Router) with TypeScript
- **Styling**: Tailwind CSS v4 (custom theme in `src/app/globals.css`)
- **Animation**: Framer Motion — presets in `src/lib/animations.ts`
- **Icons**: Lucide React
- **Fonts**: Playfair Display (headings), Cormorant Garamond (display), Inter (body)

## Commands

```bash
npm run dev       # Start dev server with Turbopack (http://localhost:3000)
npm run build     # Production build
npm start         # Start production server
npm run lint      # Run ESLint (run from project root)
```

## Project Structure

```
src/
├── app/                      # Next.js App Router pages
│   ├── page.tsx              # Home page
│   ├── layout.tsx            # Root layout, fonts, metadata
│   ├── globals.css           # Global styles + custom Tailwind theme
│   ├── about/page.tsx        # Standalone About Us page
│   ├── enquiry/page.tsx      # Enquiry/contact form
│   ├── services/             # 8 service detail pages
│   │   ├── construction/
│   │   ├── interior-design/
│   │   ├── swimming-pools/
│   │   ├── landscaping/
│   │   ├── water-features/
│   │   ├── water-wellness/
│   │   ├── real-estate/
│   │   └── facility-management/
│   └── products/             # Product category pages
│       └── swimming-pool-products/
├── components/
│   ├── Navbar.tsx            # Sticky nav, scroll-aware, mobile hamburger, usePathname active state
│   ├── Footer.tsx            # Footer — uses COMPANY constants from src/lib/company.ts
│   ├── ServicePageLayout.tsx # Shared template for all service pages
│   ├── MotionWrapper.tsx     # Entrance animation wrapper
│   ├── ui/SectionHeader.tsx  # Reusable section header
│   └── sections/             # Home page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Services.tsx
│       ├── Products.tsx      # Products section (id="products")
│       ├── ProjectGallery.tsx
│       ├── ProjectsSlider.tsx
│       ├── BrandsSlider.tsx
│       ├── WhyChooseUs.tsx
│       ├── Testimonials.tsx
│       ├── FounderMessage.tsx
│       └── FindUsMap.tsx     # Uses COMPANY constants
└── lib/
    ├── animations.ts         # Framer Motion animation presets
    └── company.ts            # Shared company constants (name, address, email, phone, etc.)
public/
├── clients/                  # Client logos
├── projects/                 # Project images
├── enquiry/                  # Enquiry page images
└── founder.jpg               # Founder photo (used on About page)
```

## Key Conventions

### Component Pattern
- Server components by default; add `"use client"` only for interactive components (forms, animations, scroll listeners)
- Path alias `@/*` maps to `src/*`

### Company Constants
All shared company details (address, phone, email, tagline) live in `src/lib/company.ts` as the `COMPANY` object. Import from there — never hardcode contact info in components.

### Custom Tailwind Theme
Defined in `src/app/globals.css` (not `tailwind.config`):
- **Brand greens**: `brand-950` through `brand-300`
- **Gold accents**: `gold-900` through `gold-100`
- **Cream backgrounds**: `cream-50` through `cream-200`

### Animations
Reuse presets from `src/lib/animations.ts`:
- `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight`
- `scaleIn`, `staggerContainer`, `lineGrow`
- Custom easing `[0.22, 1, 0.36, 1]` for the luxury feel
- Scroll-triggered: `viewport = { once: false, amount: 0.2 }`

### Navbar Links
Nav links use absolute paths — never relative anchors. Home-section anchors use `/#sectionid` format so they work from any route. Standalone pages use full paths (e.g. `/about`, `/enquiry`). Active state is detected via `usePathname`.

### Service Pages
All 8 service detail pages use `ServicePageLayout` — add new ones there rather than building custom layouts.

### Product Pages
Product pages live under `/products/`. For new product categories, create a new page under `src/app/products/[slug]/page.tsx`. The Swimming Pool Products page lists all categories inline (no separate `ProductPageLayout` yet — create one if a second product page is added).

### Enquiry Form
Currently client-side only (no backend). Form state managed with React hooks; ready for API integration.

## Routing

| Route | Page |
|---|---|
| `/` | Home (all sections) |
| `/about` | About Us (standalone page) |
| `/enquiry` | Enquiry form |
| `/services/construction` | Construction service detail |
| `/services/interior-design` | Interior design detail |
| `/services/swimming-pools` | Swimming pools detail |
| `/services/landscaping` | Landscaping detail |
| `/services/water-features` | Water features detail |
| `/services/water-wellness` | Water wellness detail |
| `/services/real-estate` | Real estate detail |
| `/services/facility-management` | Facility management detail |
| `/products/swimming-pool-products` | Swimming Pool Products catalogue |

## Home Page Section Order

```
Hero → ProjectGallery → WhyChooseUs → ProjectsSlider → BrandsSlider
→ About → Services → Products → FounderMessage → Testimonials → FindUsMap
```

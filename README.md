# Moon Star Restaurant & Lodge 🌙⭐

> **Premium static hotel & restaurant website** built with Next.js 16, Tailwind CSS v4, and Framer Motion. Deployed on Vercel.

**Live site:** [moonstarhotel.com](https://moonstarhotel.com) · **Location:** Hetauda-2, Manaschowk, Makawanpur, Nepal

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.2.x | App Router, static export, Turbopack |
| React | 19.2.x | UI framework |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.x | CSS-first utility styling |
| Framer Motion | 12.x | Page animations |
| Lucide React | 1.x | Icons |
| Vercel | — | Hosting & CDN |

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, welcome, highlights, gallery preview |
| `/about` | About the hotel — story, team, stats |
| `/rooms` | Rooms — Deluxe, Executive, Family suite cards |
| `/gallery` | Filterable photo gallery with lightbox |
| `/contact` | Contact form, map, address, phone |

---

## Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/moon-star-hotel.git
cd moon-star-hotel

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → http://localhost:3000

# 4. Production build
npm run build

# 5. Preview production build locally
npm start
```

---

## Project Structure

```
moon-star-hotel/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout + metadata + fonts
│   ├── page.tsx            # Home page
│   ├── about/page.tsx
│   ├── rooms/page.tsx
│   ├── gallery/page.tsx
│   ├── contact/page.tsx
│   ├── globals.css         # Tailwind v4 theme + global styles
│   ├── not-found.tsx       # Custom 404 page
│   ├── robots.ts           # Auto-generated robots.txt
│   └── sitemap.ts          # Auto-generated sitemap.xml
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── sections/           # Hero, Welcome, Gallery preview etc.
│   └── ui/                 # Logo, RoomCard, GalleryGrid, etc.
├── constants/
│   └── hotelData.ts        # All hotel content & data
├── types/
│   └── index.ts            # Shared TypeScript interfaces
├── public/
│   ├── favicon.svg
│   └── icon.svg
├── next.config.ts          # Security headers, image optimisation
├── vercel.json             # Vercel deployment config
└── postcss.config.js       # Tailwind v4 PostCSS setup
```

---

## Deploying to Vercel

### Option 1 — One-click (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

---

## Environment Variables

No environment variables are required for the static site.
If you add a contact form backend or CMS later, copy `.env.example`:

```bash
cp .env.example .env.local
```

---

## SEO

- ✅ `sitemap.xml` — auto-generated at `/sitemap.xml`
- ✅ `robots.txt` — auto-generated at `/robots.txt`
- ✅ Open Graph + Twitter Card metadata
- ✅ Canonical URLs
- ✅ Structured heading hierarchy (single `<h1>` per page)
- ✅ Semantic HTML5 elements

---

## Performance

- ✅ All pages statically prerendered (SSG)
- ✅ AVIF + WebP image formats via Next.js Image
- ✅ Google Fonts loaded via `next/font` (no layout shift)
- ✅ Security headers (HSTS, X-Frame-Options, etc.)
- ✅ 30-day image cache TTL, immutable static assets

---

## Contact

**Moon Star Restaurant & Lodge**
Hetauda-2, Manaschowk, Makawanpur, Nepal
📞 +977 9865501880 · +977 9855017880
📧 moonstarhotel@gmail.com

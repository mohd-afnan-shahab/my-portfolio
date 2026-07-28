# afnan.dev — Portfolio

A modern, production-ready portfolio built with Next.js 15, React, TypeScript, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/afnanshahab/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles, CSS variables, utilities
│   ├── layout.tsx           # Root layout with metadata & fonts
│   ├── page.tsx             # Home page entry
│   ├── not-found.tsx        # 404 page
│   ├── robots.ts            # SEO robots configuration
│   └── sitemap.ts           # SEO sitemap generation
├── components/
│   ├── home-page.tsx        # Main page component (assembles sections)
│   ├── layout/
│   │   └── navbar.tsx       # Navigation bar
│   ├── sections/
│   │   ├── hero.tsx         # Hero section with terminal animation
│   │   ├── about.tsx        # About me section
│   │   ├── experience.tsx   # Work experience timeline
│   │   ├── tech-stack.tsx   # Technology categories
│   │   ├── philosophy.tsx   # Engineering philosophy
│   │   ├── sdlc.tsx         # Software development lifecycle
│   │   ├── projects.tsx     # Project case studies
│   │   ├── ai-section.tsx   # AI & learning interests
│   │   ├── skills.tsx       # Skills grid
│   │   ├── timeline.tsx     # Career timeline
│   │   ├── achievements.tsx # Key achievements
│   │   ├── contact.tsx      # Contact information
│   │   └── footer.tsx       # Site footer
│   └── ui/
│       ├── animated-section.tsx  # Scroll animations
│       ├── section-heading.tsx   # Reusable section headers
│       ├── loading-screen.tsx    # Initial loading animation
│       └── custom-cursor.tsx     # Interactive cursor
└── lib/
    └── utils.ts             # Utility functions (cn)
```

## Design System

### Colors
- **Background:** Near-black (`hsl(0 0% 3%)`)
- **Foreground:** Near-white (`hsl(0 0% 95%)`)
- **Accent:** Indigo (`hsl(234 89% 74%)`)
- **Secondary accent:** Violet
- **Borders:** Subtle white/dark borders

### Typography
- **Sans:** Inter (variable font)
- **Mono:** JetBrains Mono (code sections)

### Effects
- Glassmorphism (backdrop-blur + subtle borders)
- Gradient glows (radial blurs)
- Dot pattern backgrounds
- Scroll-triggered animations
- Interactive hover states

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Deploy — zero configuration needed

### Custom Domain

1. Add domain in Vercel dashboard
2. Update DNS records
3. Update `metadataBase` in `layout.tsx`

## Performance Targets

- Lighthouse Performance: 100
- Lighthouse Accessibility: 100
- Lighthouse SEO: 100
- Lighthouse Best Practices: 100

## Future Improvements

- Blog section with MDX
- Interactive 3D elements (Three.js)
- Dark/light theme toggle
- Analytics integration
- RSS feed
- Resume download (PDF)
- Project demos with live previews
- Testimonials section
- Open source contributions section

## License

MIT

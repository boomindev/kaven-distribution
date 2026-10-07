# KAVEN Distribution

Official website for **KAVEN Distribution** — an elite music distribution and artist services house.

## Visual Identity & Brand Philosophy
- **Aesthetic**: Premium, dark, cinematic, minimalist, corporate.
- **Palette**: Deep obsidian black (`#050505`), crisp typography, subtle film grain overlay, delicate ambient lighting.
- **Artists Feature**: Video-game inspired **Character Selector** matrix showcasing active roster talent with verified Spotify metadata, top tracks, and audio preview drawer.

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org) (App Router, React 19)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer-motion.com)
- **Icons**: [Lucide React](https://lucide.dev)
- **Language**: TypeScript

## Project Structure
```text
src/
├── app/
│   ├── layout.tsx         # Master layout with NoiseOverlay, Navbar & Footer
│   ├── template.tsx       # Route transition animation wrapper
│   ├── page.tsx           # Home: Hero, Manifesto & Contact CTA
│   ├── artists/page.tsx   # Interactive Character Selector & Spotify intelligence
│   ├── services/page.tsx  # Editorial breakdown of 6 core music capabilities
│   ├── partners/page.tsx  # Global DSP & Streaming partner ecosystem
│   └── contact/page.tsx   # Direct submissions & official contact channels
├── components/
│   ├── Navbar.tsx         # Sticky glassmorphic navbar with mobile fullscreen overlay
│   ├── Footer.tsx         # Minimalist luxury footer
│   └── NoiseOverlay.tsx   # Film grain texture overlay
└── data/
    ├── artists.ts         # Verified roster data and Spotify metadata
    ├── services.ts        # Service definitions and deliverables
    └── partners.ts        # Digital storefronts & DSP metadata
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Contact
- Official Inquiries: [contact@kavendistribution.com](mailto:contact@kavendistribution.com)

&copy; 2026 KAVEN Distribution. All rights reserved.

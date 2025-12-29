# RentKub Landing Page

A modern landing page for RentKub - a peer-to-peer sharing and rental marketplace that enables neighbors to borrow, lend, and rent items from each other.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## Project Structure

```
rentkub-web/
├── app/
│   ├── globals.css         # Global styles and Tailwind
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Landing page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── ProblemStatement.tsx # Problem/stats section
│   ├── HowItWorks.tsx      # How it works steps
│   ├── Features.tsx        # Key features grid
│   ├── Categories.tsx      # Item categories
│   ├── Impact.tsx          # Sustainability impact
│   ├── CTA.tsx             # Email signup form
│   └── Footer.tsx          # Site footer
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── next.config.js          # Next.js configuration
└── package.json
```

## Features

- Responsive design (mobile-first)
- Smooth scroll navigation
- Email waitlist signup form
- SEO optimized with Open Graph tags
- Custom color palette (green primary, blue secondary)

## Deployment

Deploy to Vercel:

```bash
npm run build
```

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

## License

Private - All rights reserved.

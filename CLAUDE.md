# CLAUDE.md - RentKub Landing Page

This file provides context for AI assistants working on this project.

## Project Overview

**RentKub** is a peer-to-peer sharing and rental marketplace landing page.

- **Tagline:** "Borrow, Rent, Share - From Your Neighbors"
- **Purpose:** Marketing landing page to introduce RentKub and drive user signups
- **Inspiration:** Peerby.com (Netherlands-based goods-sharing platform)

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Deployment:** Vercel
- **Language:** TypeScript

## Project Structure

```
rentkub-web/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage/landing page
│   └── globals.css         # Global styles
├── components/             # Reusable UI components
├── public/                 # Static assets (images, icons)
└── CLAUDE.md               # This file
```

## Key Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Landing Page Sections

The landing page should include:

1. **Hero Section**
   - Tagline: "Borrow, Rent, Share - From Your Neighbors"
   - Value proposition: Access items without buying
   - CTA: Join waitlist / Get early access

2. **Problem Statement**
   - 80% of household items used less than once a month
   - Average drill used only 13 minutes in its lifetime
   - Neighbors buying duplicates of rarely-used items

3. **How It Works**
   - Request what you need
   - Neighbors respond
   - Meet and borrow
   - Return and review

4. **Key Features**
   - Free borrowing + paid rentals
   - Request-based discovery (broadcast needs)
   - Hyper-local focus (walking/biking distance)
   - Trust & verification system

5. **Item Categories**
   - Tools & Equipment
   - Party & Events
   - Outdoor & Recreation
   - Home & Garden
   - Baby & Kids
   - Electronics & Tech

6. **Sustainability Impact**
   - 37% CO2 reduction per shared item
   - Community money saved
   - Items kept from landfill

7. **Social Proof / Testimonials**
   - Community success stories
   - Trust indicators

8. **CTA Section**
   - Email signup for launch notification
   - App store badges (coming soon)

## Design Guidelines

- **Primary Colors:** Consider eco-friendly greens, community-oriented blues
- **Tone:** Friendly, community-focused, sustainable
- **Imagery:** Neighbors, shared items, community connection
- **Responsive:** Mobile-first design

## Target Audience

1. **Sustainable Neighbor** (28-45 yrs) - Environmentally conscious
2. **Occasional Borrower** (25-50 yrs) - One-time project needs
3. **Frequent Lender** (35-60 yrs) - Has items to share/rent
4. **Event Planner** (25-45 yrs) - Party supplies needs
5. **DIY Enthusiast** (30-55 yrs) - Tool borrowing

## Key Differentiators to Highlight

1. **Dual Model:** Free borrowing AND paid rentals
2. **Request-Based:** Broadcast needs, neighbors respond
3. **Hyper-Local:** Within walking/biking distance
4. **Sustainability:** Real environmental impact tracking
5. **Community:** Foster genuine neighbor connections

## Development Notes

- Use Next.js App Router conventions
- Implement responsive design with Tailwind breakpoints
- Optimize images with next/image
- Add proper meta tags for SEO
- Include Open Graph tags for social sharing


# BVOGI Digital Platform

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://bvogi-platform.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC)](https://tailwindcss.com/)

**BVOGI (Believer's Voice for Global Impact)** is a Christian youth movement focused on authentic worship, leadership development, systems building, community transformation, and spiritual growth.

🌍 **Live URL:** [https://bvogi-platform.vercel.app](https://bvogi-platform.vercel.app)


## 🚀 Features

### ✅ Implemented
- Responsive homepage with all sections
- Sticky navigation bar (mobile + desktop)
- Vision & Mission display
- Core focus areas
- Monday prayer meeting promotion
- Leaders selection criteria
- Upcoming events preview
- Footer with quick links
- Yellow/Black brand color scheme
- Joel 2:1 scripture integration

### ⏳ In Progress
- Sanity CMS integration for dynamic content
- Admin dashboard for non-technical content management

### 📅 Planned
- Member registration (Google Forms + QR code)
- Events management system
- Photo gallery (Cloudinary integration)
- Announcements system
- Testimonials section
- Team members directory

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type safety |
| **Tailwind CSS 4** | Styling & responsiveness |
| **Framer Motion** | Animations |
| **Lucide React** | Icons |
| **Vercel** | Hosting & deployment |
| **Sanity** | Headless CMS (coming) |

## 📁 Project Structure

📁 Project Structure Explained
```
~/bvogi-platform/                          # Root directory
│
├── 📄 Configuration Files (Root level)
│   ├── package.json                        # Dependencies & scripts
│   ├── package-lock.json                   # Locked versions
│   ├── tsconfig.json                       # TypeScript config
│   ├── tailwind.config.ts                  # Tailwind CSS config
│   ├── postcss.config.mjs                  # PostCSS config (Tailwind v4)
│   ├── next.config.ts                      # Next.js config
│   ├── eslint.config.mjs                   # Code linting
│   ├── next-env.d.ts                       # Next.js TypeScript types
│   └── .gitignore                          # Files Git ignores
│
├── 📁 src/                                 # MAIN SOURCE CODE
│   ├── 📁 app/                             # Next.js App Router (PAGES)
│   │   ├── layout.tsx                      # Root layout (wraps all pages)
│   │   ├── page.tsx                        # HOMEPAGE (what users see)
│   │   └── globals.css                     # Global styles + Tailwind
│   │
│   ├── 📁 components/                      # REUSABLE UI COMPONENTS
│   │   ├── layout/                         # Navbar, Footer (coming soon)
│   │   ├── sections/                       # Hero, Events, etc. (coming soon)
│   │   └── ui/                             # Buttons, Cards (coming soon)
│   │
│   ├── 📁 sanity/                          # SANITY CMS (to be implemented)
│   │   ├── schemas/                        # Event, Announcement schemas
│   │   └── lib/                            # Sanity client config
│   │
│   ├── 📁 lib/                             # UTILITY FUNCTIONS
│   ├── 📁 hooks/                           # Custom React hooks
│   ├── 📁 styles/                          # Additional styles
│   └── 📁 types/                           # TypeScript type definitions
│
├── 📁 public/                              # STATIC ASSETS
│   └── (images, icons, favicon, logos)
│
└── 📁 node_modules/                        # DEPENDENCIES (don't touch)
```
🎨 Component Structure Plan (Refactoring)
Currently everything is in ONE file (page.tsx). We'll split into:
```
src/components/sections/
├── Hero.tsx
├── About.tsx
├── VisionMission.tsx
├── FocusAreas.tsx
├── PrayerMeeting.tsx
├── LeadersCriteria.tsx
├── Events.tsx
├── CTA.tsx
└── Footer.tsx
```


## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SAMKE-glitch/bvogi-platform.git
cd bvogi-platform

# Install dependencies
npm install

# Run development server
npm run dev
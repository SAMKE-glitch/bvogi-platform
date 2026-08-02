# BVOGI Digital Platform

[![Production](https://img.shields.io/badge/Status-Production-success)](#)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black)](https://www.vercel.com/)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC)](https://tailwindcss.com/)
[![Sanity CMS](https://img.shields.io/badge/Sanity-CMS-red)](https://www.sanity.io/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](#)

---

## Overview

**BVOGI (Believer's Voice for Global Impact)** is a Christian youth movement dedicated to authentic worship, leadership development, discipleship, community transformation, and global impact.
BVoGI is not another church programme — it is a platform for believers across Kenya, and eventually the globe, to speak into the nations they live in. We exist because faith was never meant to stay silent in the public square: in governance, education, media, business, and culture, believers have a voice and a mandate to use it./A Christian program to contribute towards social \& economic development for marginalized communities by promoting good governance, holistic education \& peace through advocacy, research and policy development.
This repository contains the official source code for the BVOGI digital platform, built using modern web technologies with a headless CMS architecture to enable scalable content management.

**Website:** https://www.bvogi.org

**Admin Studio:** https://www.bvogi.org/studio

---

# 📋 Project Status

**Current Release:** v1.0 (Production)

| Status | Description |
|---------|-------------|
| ✅ Production Website | Live |
| ✅ Responsive UI | Complete |
| ✅ Sanity CMS | Integrated |
| ✅ Custom Domain | Configured |
| ✅ SSL Certificate | Enabled |
| ✅ Mobile Responsive | Complete |
| 🚧 Phase 2 | Planned |

---

# 📸 Screenshots

> Add screenshots after uploading them.

```text
docs/images/
├── homepage.png
├── gallery.png
├── leadership.png
└── studio.png
```

Example:

```md
![Homepage](docs/images/homepage.png)

![Gallery](docs/images/gallery.png)

![Sanity Studio](docs/images/studio.png)
```

---

# 🚀 Features

## ✅ Implemented

- Responsive homepage
- Mobile-first design
- Sticky navigation
- Hero banner with dynamic CMS content
- Mission & Vision section
- Seven Pillars of Influence
- Dynamic leadership section
- Dynamic gallery with lightbox
- Registration CTA
- Google Forms integration
- QR Code support
- Dynamic footer
- Custom domain
- SSL Certificate
- Sanity CMS
- Password-protected Admin Studio
- SEO metadata
- Optimized images
- Accessible UI components

---

## 🚧 In Progress

- Leadership profiles
- Event population
- Ministry content

---

## 📅 Phase 2 Roadmap

- Member Portal
- Authentication
- Volunteer Management
- Blog
- Donations
- Livestream
- Email Notifications
- Analytics Dashboard
- Community Directory

---

# 🏗️ System Architecture

```text
                    Browser
                       │
                       ▼
             Next.js 16 (App Router)
                       │
        ┌──────────────┼───────────────┐
        │              │               │
        ▼              ▼               ▼
   Sanity CMS     Google Forms     Vercel Hosting
        │
        ▼
 Dynamic Content Delivery
```

---

# 🛠 Technology Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| Next.js | React Framework | 16 |
| TypeScript | Type Safety | 5.x |
| Tailwind CSS | Styling | 4.x |
| Framer Motion | Animations | Latest |
| Lucide React | Icons | Latest |
| Sanity CMS | Headless CMS | Latest |
| Vercel | Deployment | Latest |
| Google Forms | Registration | — |
| Git & GitHub | Version Control | — |

---

# 📊 Project Overview

| Metric | Value |
|---------|------:|
| Framework | Next.js 16 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| CMS | Sanity |
| Deployment | Vercel |
| Architecture | JAMstack |
| Rendering | SSR + Static Generation |
| Status | Production |

---

# 🧩 Design Principles

- Component-first architecture
- Mobile-first responsive design
- Headless CMS
- Type-safe development
- Reusable UI components
- Performance optimization
- Accessibility focused
- SEO optimized
- Scalable architecture

---

# 📁 Project Structure

```text
bvogi-platform/
│
├── public/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── sanity/
│   ├── styles/
│   └── types/
│
├── package.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

# 📦 Sanity Schemas

| Schema | Description |
|---------|-------------|
| Events | Upcoming events |
| Announcements | Ministry updates |
| Gallery | Photo gallery |
| Leadership | Team members |
| Testimonials | Member testimonies |
| Site Settings | Hero, Logo, Branding |
| Registration | Google Form & QR |
| Term Settings | Leadership terms |

---

# ⚙️ Environment Variables

Create a `.env.local` file.

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token
```

---

# 🚀 Getting Started

## Prerequisites

- Node.js 20+
- npm
- Git
- Sanity Account

---

## Installation

```bash
git clone https://github.com/SAMKE-glitch/bvogi-platform.git

cd bvogi-platform

npm install
```

---

## Development

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

# 📜 Available Scripts

| Command | Description |
|---------|-------------|
| npm run dev | Start development server |
| npm run build | Create production build |
| npm run start | Start production server |
| npm run lint | Run ESLint |
| npm run type-check | TypeScript checking |

---

# 🚢 Deployment

The application is automatically deployed using **Vercel** whenever changes are pushed to the production branch.

Manual production build:

```bash
npm run build
```

---

# 👨‍💼 Content Management

Administrators can update website content without touching code.

## Workflow

1. Visit `/studio`
2. Sign in
3. Select a content type
4. Create or edit content
5. Click **Publish**
6. Changes appear automatically on the website

---

# 🛣 Roadmap

## Phase 1

- ✅ Public Website
- ✅ Responsive Design
- ✅ CMS
- ✅ Registration
- ✅ Deployment

## Phase 2

- Authentication
- Member Portal
- Blog
- Donations
- Volunteer System
- Analytics

## Phase 3

- Mobile Application
- Push Notifications
- Community Dashboard
- Ministry Reporting

---

# 🤝 Contributing

This repository is privately maintained.

Feature requests and improvements should be submitted through the internal development workflow.

---

# 📄 License

**Copyright © BVOGI.**

This repository contains proprietary software developed for BVOGI.

Unauthorized copying, modification, distribution, or commercial use of this software is prohibited without written permission.

---

# 📞 Contact

**Website**

https://www.bvogi.org

**Email**

info@bvogi.org

**Prayer Meeting**

Every Monday — 7:00 PM (EAT)

---

# 🙏 Acknowledgements

Built with ❤️ for the BVOGI community.

Powered by:

- Next.js
- TypeScript
- Tailwind CSS
- Sanity CMS
- Vercel

---

## Scripture Anchor

> **Joel 2:1**
>
> *"Blow the trumpet in Zion..."*

---

## Motto

**Positioned for Global Impact**

---

## Hashtags

```
#BelieversNeedAVoice
#BVOGI
#BeTheVoice
#PositionedForGlobalImpact
```

## 👨‍💻 Project Team

### Technical Lead & Lead Developer

**Samwel Mwawasi**  
*CTO, SAMKE.tech*

- **Role:** Technical Lead, Lead Developer & CTO
- **Responsibilities:**
  - Full-stack architecture design
  - Next.js & Sanity CMS implementation
  - DevOps & deployment (Vercel, DNS, SSL)
  - Technical strategy & roadmap
  - Team leadership & code review
- **Company:** [SAMKE.tech](https://samke.tech)

# Utkarsh Travels — Programmatic SEO Web Platform

> **Your Journey • Our Priority**  
> Fast, trustworthy, search-first digital storefront for spiritual and intercity travel from Varanasi (Mehmoorganj).

[![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)

---

## 🛕 Overview

Utkarsh Travels connects high-intent organic pilgrimage and intercity travel queries (*route + vehicle + transparent price*) directly to an active WhatsApp booking desk in Varanasi without aggregators or hidden markups.

### ✨ Key Features

- **Programmatic SEO Engine**: SSG pages generated from `data/routes.json` via `generateStaticParams()` and `generateMetadata()`.
- **Rich Structured Data (JSON-LD)**:
  - `LocalBusiness` / `TravelAgency` site-wide in root layout
  - `Product` & `Offer` per vehicle on all route landing pages
  - `FAQPage` schema on route pages for "People Also Ask" SERP features
  - `BreadcrumbList` schema
- **Authoritative Rate Cards**: Desktop table and mobile stacked card views with instant per-vehicle booking actions.
- **Fleet Showcase**: Detailed specs for Swift Dzire, Maruti Ertiga, Toyota Innova Crysta, Force Urbania (16S), Tempo Traveller (17S & 26S), and 35S Mini Bus.
- **Conversion Optimization**:
  - Persistent Floating WhatsApp Button (FAB) with contextual pre-filled messages
  - Mobile Sticky Bottom Bar with instant Call (`+91 9648974238`) and WhatsApp CTAs
  - Custom Package Inquiry Form on `/contact` with anti-spam honeypot
- **Verified Local NAP**: Mehmoorganj, Varanasi, Uttar Pradesh, India.

---

## 📍 Target Routes (v1)

| Route Slug | Package Name | Dzire Fare | Innova Crysta |
|---|---|---|---|
| [`/varanasi-to-ayodhya-taxi-service`](/varanasi-to-ayodhya-taxi-service) | Varanasi – Ayodhya (Same Day) | ₹5,500 | ₹8,500 |
| [`/varanasi-to-prayagraj-taxi-service`](/varanasi-to-prayagraj-taxi-service) | Varanasi – Prayagraj (Same Day) | ₹3,500 | ₹5,500 |
| [`/varanasi-to-vindhyachal-taxi-service`](/varanasi-to-vindhyachal-taxi-service) | Varanasi – Vindhyachal (Same Day) | ₹2,400 | ₹4,000 |
| [`/varanasi-vindhyachal-prayagraj-taxi`](/varanasi-vindhyachal-prayagraj-taxi) | VNS – Vindhyachal – Prayagraj | ₹4,200 | ₹6,200 |
| [`/varanasi-to-gaya-taxi-service`](/varanasi-to-gaya-taxi-service) | Varanasi – Gaya (Same Day) | ₹7,000 | ₹10,500 |
| [`/3-day-multi-city-pilgrimage-taxi`](/3-day-multi-city-pilgrimage-taxi) | 3-Day Multi-City Circuit | ₹12,000 | ₹18,000 |

---

## 📂 Project Structure

```
├── app/
│   ├── [slug]/page.tsx      # Programmatic route template (SSG + JSON-LD)
│   ├── contact/page.tsx     # Contact & custom quote form
│   ├── layout.tsx           # Global layout, fonts, LocalBusiness JSON-LD
│   ├── page.tsx             # Homepage with Hero, Rates & Fleet
│   ├── not-found.tsx        # 404 page with route recommendations
│   ├── robots.ts            # Dynamic robots.txt
│   └── sitemap.ts           # Dynamic sitemap.xml
├── components/
│   ├── Breadcrumbs.tsx      # Breadcrumb trail
│   ├── FleetShowcase.tsx    # Vehicle specifications and features
│   ├── Footer.tsx           # Verified NAP, trust badges, sitemap links
│   ├── Navbar.tsx           # Header, route dropdown, quick call
│   ├── RateCard.tsx         # Responsive rate cards with WhatsApp triggers
│   ├── StickyBottomBar.tsx  # Mobile sticky action bar
│   └── WhatsAppFAB.tsx      # Floating WhatsApp action button
├── data/
│   ├── routes.json          # Authoritative tariffs, itineraries & FAQs
│   ├── site.json            # NAP, business hours & inclusions/exclusions
│   └── vehicles.json        # Fleet specs and seating capacities
├── lib/
│   ├── data.ts              # Type definitions & data accessors
│   ├── schema.ts            # Schema.org JSON-LD builders
│   └── whatsapp.ts          # Contextual WhatsApp deep-linking
```

---

## 🚀 Getting Started

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Production Build

```bash
npm run build
npm start
```

---

## 📞 Business Information (NAP)

- **Operator**: Utkarsh Travels
- **Office**: Mehmoorganj, Varanasi, Uttar Pradesh - 221010, India
- **Phone / WhatsApp**: [+91 9648974238](tel:+919648974238)
- **Email**: [utkarshtravelsvns@gmail.com](mailto:utkarshtravelsvns@gmail.com)

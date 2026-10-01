import type { Metadata } from "next";
import siteConfig from "@/data/site.json";
import DevDeepawaliClientPage from "./client_page";

export const metadata: Metadata = {
  title: "Dev Deepawali Varanasi 2026 Tour Packages | Utkarsh Travels",
  description:
    "Experience the magic of Dev Deepawali in Varanasi on 24th November. Book exclusive tour packages with boat rides, cab rentals, and hotels. Limited slots—Book Now!",
  keywords: [
    "Dev Deepawali Varanasi",
    "Dev Deepawali 2026",
    "Varanasi tour packages",
    "Dev Deepawali boat ride",
    "Varanasi cab rental",
    "Kashi Dev Deepawali",
    "Ghats of Varanasi",
  ],
  alternates: {
    canonical: `${siteConfig.domain}/dev-deepawali-varanasi-tour-packages`,
  },
  openGraph: {
    title: "Dev Deepawali Varanasi 2026 Tour Packages | Utkarsh Travels",
    description:
      "Experience the magic of Dev Deepawali in Varanasi on 24th November. Book exclusive tour packages with boat rides, cab rentals, and hotels. Limited slots—Book Now!",
    url: `${siteConfig.domain}/dev-deepawali-varanasi-tour-packages`,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}/images/destinations/dev-deepawali.jpg`,
        width: 1200,
        height: 630,
        alt: "Millions of diyas lighting up Varanasi ghats during Dev Deepawali",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Deepawali Varanasi 2026 Tour Packages | Utkarsh Travels",
    description:
      "Experience the magic of Dev Deepawali in Varanasi on 24th November. Book exclusive tour packages with boat rides, cab rentals, and hotels. Limited slots—Book Now!",
    images: [`${siteConfig.domain}/images/destinations/dev-deepawali.jpg`],
  },
};

export default function DevDeepawaliPage() {
  return <DevDeepawaliClientPage />;
}

import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFAB from "@/components/WhatsAppFAB";
import { getLocalBusinessSchema } from "@/lib/schema";
import siteConfig from "@/data/site.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: "Utkarsh Travels Varanasi | Pilgrimage Taxi & Intercity Cab Service",
    template: "%s | Utkarsh Travels",
  },
  description:
    "Book verified AC cabs from Varanasi to Ayodhya, Prayagraj, Vindhyachal, Gaya & Chitrakoot. Transparent fares, Dzire from ₹2,400. 24/7 WhatsApp booking from Mehmoorganj.",
  keywords: [
    "utkarsh travels varanasi",
    "utkarsh singh varanasi taxi",
    "varanasi taxi service",
    "varanasi to ayodhya cab fare",
    "varanasi prayagraj taxi",
    "varanasi to gaya taxi",
    "tempo traveller booking varanasi",
    "kashi darshan cab",
    "innova crysta varanasi rental"
  ],
  authors: [{ name: `${siteConfig.founder} - ${siteConfig.name}`, url: siteConfig.domain }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  alternates: {
    canonical: siteConfig.domain,
  },
  openGraph: {
    title: "Utkarsh Travels Varanasi | Pilgrimage Taxi & Intercity Cab Service",
    description:
      "Verified local cab operator in Mehmoorganj, Varanasi. Fixed tariffs for Ayodhya, Prayagraj, Vindhyachal, and Gaya. Instant WhatsApp quote.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Travels Varanasi | Pilgrimage Taxi & Intercity Cab Service",
    description:
      "Varanasi's trusted cab operator. Transparent rate cards for Ayodhya, Prayagraj, Gaya, and Vindhyachal.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessJsonLd = getLocalBusinessSchema();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAF8F5] text-slate-900 font-sans antialiased selection:bg-amber-500 selection:text-slate-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}

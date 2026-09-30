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
    default: "Utkarsh Travels Varanasi | Pilgrimage Taxi & Outstation Cab Service",
    template: "%s | Utkarsh Travels Varanasi",
  },
  description:
    "Book verified AC cabs from Varanasi to Ayodhya Ram Mandir (₹5,500), Prayagraj Sangam (₹3,500), Vindhyachal (₹2,400) & Gaya (₹7,000). Swift Dzire, Innova Crysta, Force Urbania & Tempo Traveller. 24/7 WhatsApp booking (+91 9648974238).",
  keywords: [
    "utkarsh travels varanasi",
    "utkarsh travels",
    "varanasi taxi service",
    "varanasi to ayodhya taxi service",
    "varanasi to ayodhya cab fare",
    "varanasi to prayagraj taxi",
    "triveni sangam cab from varanasi",
    "varanasi to vindhyachal taxi fare",
    "varanasi to bodh gaya taxi",
    "varanasi to gaya pind daan cab",
    "tempo traveller in varanasi",
    "force urbania rental varanasi",
    "innova crysta car rental varanasi",
    "35 seater bus hire varanasi",
    "49 seater coach hire varanasi",
    "best taxi service in mehmoorganj varanasi",
    "kashi vishwanath tour taxi",
    "ayodhya ram mandir same day tour from varanasi",
    "car rental with driver varanasi"
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
    title: "Utkarsh Travels Varanasi | Pilgrimage Taxi & Outstation Cab Service",
    description:
      "Varanasi's trusted pilgrimage taxi service in Mehmoorganj. Fixed tariffs for Ayodhya (₹5,500), Prayagraj (₹3,500), Vindhyachal (₹2,400), Gaya (₹7,000). Swift Dzire, Innova Crysta, Tempo Traveller & Luxury Coach.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteConfig.domain}/images/destinations/ayodhya.jpg`,
        width: 1200,
        height: 800,
        alt: "Utkarsh Travels Varanasi - Sacred Pilgrimage Cabs & Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Utkarsh Travels Varanasi | Pilgrimage Taxi & Outstation Cab Service",
    description:
      "Varanasi's trusted cab operator. Transparent rate cards for Ayodhya, Prayagraj, Gaya, and Vindhyachal.",
    images: [`${siteConfig.domain}/images/destinations/ayodhya.jpg`],
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
  verification: {
    google: "hbFE5WuIAn09JMnhHUDshG1NjvRw4UNIJNz_JBMP1TI",
  },
  other: {
    "geo.region": "IN-UP",
    "geo.placename": "Varanasi, Uttar Pradesh, India",
    "geo.position": "25.3076;82.9739",
    "ICBM": "25.3076, 82.9739",
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

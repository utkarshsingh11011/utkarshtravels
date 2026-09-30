import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Clock,
  Navigation,
  MapPin,
  Calendar,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";
import { getAllRoutes, getRouteBySlug, getRelatedRoutes, getAllVehicles, formatINR } from "@/lib/data";
import { getRouteProductSchema, getRouteFaqSchema, getBreadcrumbSchema } from "@/lib/schema";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import siteConfig from "@/data/site.json";
import RateCard from "@/components/RateCard";
import Breadcrumbs from "@/components/Breadcrumbs";
import StickyBottomBar from "@/components/StickyBottomBar";

interface RoutePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const routes = getAllRoutes();
  return routes.map((r) => ({
    slug: r.slug,
  }));
}

export async function generateMetadata({ params }: RoutePageProps): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    return {
      title: "Route Not Found | Utkarsh Travels",
    };
  }

  const canonicalUrl = `${siteConfig.domain}/${route.slug}`;

  return {
    title: route.seo.title,
    description: route.seo.description,
    keywords: route.seo.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: route.seo.title,
      description: route.seo.description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: route.seo.title,
      description: route.seo.description,
    },
  };
}

export default async function RoutePage({ params }: RoutePageProps) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  const vehicles = getAllVehicles();
  const relatedRoutes = getRelatedRoutes(route.relatedSlugs || []);

  // Schemas
  const productSchema = getRouteProductSchema(route, vehicles);
  const faqSchema = getRouteFaqSchema(route);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: siteConfig.domain },
    { name: route.name, url: `${siteConfig.domain}/${route.slug}` },
  ]);

  const whatsappInquiryUrl = getWhatsAppUrl({
    slug: route.slug,
    routeName: route.name,
    packageType: route.packageType,
  });

  return (
    <div className="bg-[#FAF8F5] text-slate-900 pb-16">
      {/* Server Rendered JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: "Tour Packages", url: "/#destinations" },
            { name: route.name, url: `/${route.slug}` },
          ]}
        />

        {/* Hero Banner with Authentic Destination Image */}
        <div className="relative rounded-3xl overflow-hidden bg-[#0A1931] text-white shadow-2xl border-2 border-amber-500/40">
          {/* Background Image */}
          {route.image && (
            <div className="absolute inset-0 z-0">
              <Image
                src={route.image}
                alt={route.name}
                fill
                priority
                className="object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-[#0A1931]/85 to-transparent" />
            </div>
          )}

          <div className="relative z-10 p-6 sm:p-10 lg:p-12 max-w-4xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/50 text-amber-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>{route.packageType} Package • Utkarsh Travels</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-serif">
              {route.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl">
              {route.summary}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs sm:text-sm">
              <div className="bg-[#050D1B]/80 p-3.5 rounded-2xl border border-amber-500/20">
                <span className="text-slate-400 flex items-center space-x-1.5 mb-1">
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Distance</span>
                </span>
                <span className="font-bold text-white">{route.distance}</span>
              </div>

              <div className="bg-[#050D1B]/80 p-3.5 rounded-2xl border border-amber-500/20">
                <span className="text-slate-400 flex items-center space-x-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Driving Time</span>
                </span>
                <span className="font-bold text-white">{route.duration}</span>
              </div>

              <div className="bg-[#050D1B]/80 p-3.5 rounded-2xl border border-amber-500/20">
                <span className="text-slate-400 flex items-center space-x-1.5 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Departure</span>
                </span>
                <span className="font-bold text-emerald-400">Daily / Flexible</span>
              </div>

              <div className="bg-[#050D1B]/80 p-3.5 rounded-2xl border border-amber-500/20">
                <span className="text-slate-400 flex items-center space-x-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Starting Fare</span>
                </span>
                <span className="font-black text-amber-400 font-mono text-base">
                  {formatINR(route.pricing.dzire)}
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-500" />
                <span>Book This Route on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm border-2 border-amber-500/30 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Chauffeur Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* Rate Card Component */}
        <section aria-label="Rate Card">
          <RateCard route={route} />
        </section>

        {/* Shrines & Tour Highlights */}
        <section className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Key Darshan Spots
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1931] tracking-tight mt-3 font-serif">
              Sacred Highlights Covered in this Tour
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Our chauffeurs are knowledgeable local guides who ensure timely arrival and smooth access to each sacred shrine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {route.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-2xl bg-slate-50 border border-slate-200"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Suggested Itinerary Timeline */}
        {route.itinerary && route.itinerary.length > 0 && (
          <section className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                Recommended Schedule
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1931] tracking-tight mt-3 font-serif">
                Suggested Tour Itinerary
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Flexible timings customizable according to your arrival flights, trains, or family convenience.
              </p>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-amber-300">
              {route.itinerary.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6 pl-2">
                  <div className="w-5 h-5 rounded-full bg-amber-500 border-4 border-white shadow shrink-0 mt-1 z-10" />
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 flex-1">
                    <span className="text-xs font-mono font-bold text-amber-600 block mb-1">
                      {item.time}
                    </span>
                    <h4 className="text-base font-bold text-[#0A1931] mb-1 font-serif">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Route Specific FAQs */}
        {route.faq && route.faq.length > 0 && (
          <section className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A1931] tracking-tight mt-3 font-serif">
                Everything You Need to Know Before Booking
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {route.faq.map((faqItem, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2.5"
                >
                  <h3 className="font-bold text-[#0A1931] text-sm sm:text-base flex items-start space-x-2">
                    <HelpCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <span>{faqItem.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {faqItem.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Routes / Internal Linking for SEO */}
        {relatedRoutes.length > 0 && (
          <section className="py-6">
            <h3 className="text-xl font-bold text-[#0A1931] mb-6 font-serif">
              Explore Nearby Sacred Pilgrimage Circuits
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedRoutes.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${rel.slug}`}
                  className="p-5 rounded-2xl bg-white border-2 border-slate-200 hover:border-amber-400 transition-all group flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <span className="text-xs text-amber-600 uppercase tracking-wider font-bold block mb-1">
                      {rel.packageType}
                    </span>
                    <h4 className="font-bold text-[#0A1931] group-hover:text-amber-600 transition-colors font-serif">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-amber-600 font-bold">
                      From {formatINR(rel.pricing.dzire)}
                    </span>
                    <span className="text-slate-500 group-hover:text-slate-800 flex items-center space-x-1 font-medium">
                      <span>View details</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Sticky Mobile Conversion Bar */}
      <StickyBottomBar
        slug={route.slug}
        routeName={route.name}
        packageType={route.packageType}
      />
    </div>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
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
    <>
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

      <div className="py-6 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: "Tour Packages", url: "/#routes" },
            { name: route.name, url: `/${route.slug}` },
          ]}
        />

        {/* Hero Banner for Route */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{route.packageType} Package</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {route.name}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {route.summary}
            </p>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs sm:text-sm">
              <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
                <span className="text-slate-400 flex items-center space-x-1.5 mb-1">
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Distance</span>
                </span>
                <span className="font-semibold text-white">{route.distance}</span>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
                <span className="text-slate-400 flex items-center space-x-1.5 mb-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Driving Time</span>
                </span>
                <span className="font-semibold text-white">{route.duration}</span>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
                <span className="text-slate-400 flex items-center space-x-1.5 mb-1">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>Availability</span>
                </span>
                <span className="font-semibold text-emerald-400">Daily / 24x7</span>
              </div>

              <div className="bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
                <span className="text-slate-400 flex items-center space-x-1.5 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Starting Fare</span>
                </span>
                <span className="font-bold text-amber-400 font-mono text-base">
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
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-xl shadow-emerald-600/20 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Book This Route on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm border border-slate-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Operator</span>
              </a>
            </div>
          </div>
        </div>

        {/* Rate Card Component (PRD Core requirement) */}
        <section aria-label="Rate Card">
          <RateCard route={route} />
        </section>

        {/* Shrines & Tour Highlights */}
        <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Key Darshan Spots
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
              Sacred Highlights Covered in this Tour
            </h2>
            <p className="text-slate-400 text-sm mt-2">
              Our chauffeurs are knowledgeable local guides who ensure timely arrival and smooth access to each shrine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {route.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 rounded-2xl bg-slate-950/70 border border-slate-800"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-slate-200">{highlight}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Suggested Itinerary Timeline */}
        {route.itinerary && route.itinerary.length > 0 && (
          <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Recommended Schedule
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
                Suggested Tour Itinerary
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Flexible timing customizable according to your train or flight arrivals.
              </p>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-slate-800">
              {route.itinerary.map((item, index) => (
                <div key={index} className="relative flex items-start space-x-6 pl-2">
                  <div className="w-5 h-5 rounded-full bg-amber-500 border-4 border-slate-900 shrink-0 mt-1 z-10" />
                  <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 flex-1">
                    <span className="text-xs font-mono font-semibold text-amber-400 block mb-1">
                      {item.time}
                    </span>
                    <h4 className="text-base font-bold text-white mb-1.5">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Route Specific FAQs (Structured Data Support) */}
        {route.faq && route.faq.length > 0 && (
          <section className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-3">
                Everything You Need to Know Before Booking
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Clear answers regarding fare policies, timing, and travel comfort.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {route.faq.map((faqItem, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-5 space-y-2.5"
                >
                  <h3 className="font-semibold text-white text-sm sm:text-base flex items-start space-x-2">
                    <HelpCircle className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                    <span>{faqItem.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">
                    {faqItem.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Routes / Internal Linking for SEO (PRD Section 6.4) */}
        {relatedRoutes.length > 0 && (
          <section className="py-6">
            <h3 className="text-xl font-bold text-white mb-6">Explore Other Popular Routes from Varanasi</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedRoutes.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/${rel.slug}`}
                  className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs text-amber-400 uppercase tracking-wider font-semibold block mb-1">
                      {rel.packageType}
                    </span>
                    <h4 className="font-bold text-white group-hover:text-amber-400 transition-colors">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="font-mono text-amber-400 font-semibold">
                      From {formatINR(rel.pricing.dzire)}
                    </span>
                    <span className="text-slate-400 group-hover:text-white flex items-center space-x-1">
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
    </>
  );
}

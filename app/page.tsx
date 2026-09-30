import Link from "next/link";
import {
  Car,
  MapPin,
  ShieldCheck,
  Clock,
  Phone,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Sparkles,
  Users,
  Compass,
} from "lucide-react";
import siteConfig from "@/data/site.json";
import { getAllRoutes, formatINR } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import FleetShowcase from "@/components/FleetShowcase";

export default function HomePage() {
  const routes = getAllRoutes();

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 py-16 sm:py-24 lg:py-32 border-b border-slate-800">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-amber-500/10 blur-[120px] pointer-events-none rounded-full" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Varanasi’s Leading Pilgrimage & Intercity Cab Service</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Sacred Journeys from <span className="text-amber-400">Kashi</span>, Tailored with Care.
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Discover smooth, transparent, and verified cab rentals from Varanasi to Ayodhya Dham, Prayagraj Sangam, Vindhyachal Shaktipeeth, and Gaya. Clean AC cars, courteous chauffeurs, and upfront tariffs.
              </p>

              {/* Badges / Highlights */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs sm:text-sm text-slate-300">
                <span className="flex items-center space-x-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Doorstep Pickup</span>
                </span>
                <span className="flex items-center space-x-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Fixed Tariffs</span>
                </span>
                <span className="flex items-center space-x-1.5 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sedan to 35S Mini Bus</span>
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href={getWhatsAppUrl({})}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-base shadow-xl shadow-emerald-600/25 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Book via WhatsApp</span>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-base border border-slate-700 transition-all"
                >
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Quick Rate Card Snapshot */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm relative">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                      <Compass className="w-5 h-5 text-amber-400" />
                      <span>Popular Pilgrimage Tariffs</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">Round-trip same day fares (AC Sedan Dzire)</p>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                    Live Rates
                  </span>
                </div>

                <div className="space-y-3">
                  {routes.slice(0, 4).map((route) => (
                    <Link
                      key={route.slug}
                      href={`/${route.slug}`}
                      className="group flex items-center justify-between p-3 rounded-2xl bg-slate-950/60 hover:bg-slate-800/80 border border-slate-800/80 hover:border-slate-700 transition-all"
                    >
                      <div>
                        <span className="font-semibold text-sm text-slate-200 group-hover:text-amber-400 transition-colors block">
                          {route.name}
                        </span>
                        <span className="text-xs text-slate-400">{route.packageType}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-base font-bold text-amber-400 font-mono block">
                          {formatINR(route.pricing.dzire)}
                        </span>
                        <span className="text-[10px] text-slate-500 group-hover:text-slate-400 flex items-center justify-end space-x-1">
                          <span>View rates</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800 text-center">
                  <Link
                    href="/contact"
                    className="text-xs text-amber-400 hover:text-amber-300 font-medium inline-flex items-center space-x-1"
                  >
                    <span>Need a custom itinerary or multi-day booking? Click here</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programmatic Routes Grid Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">
            Top Pilgrimage & Intercity Circuits
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Curated Taxi Packages from Varanasi
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Complete route details, verified rate cards from Dzire to 35-Seater Mini Bus, itinerary highlights, and direct WhatsApp booking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => {
            return (
              <div
                key={route.slug}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-2xl hover:shadow-amber-500/5 group"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      {route.packageType}
                    </span>
                    <span className="text-xs text-slate-400">{route.duration}</span>
                  </div>

                  {/* Route Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {route.name}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                    {route.summary}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="mt-5 space-y-1.5">
                    {route.highlights.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Overview */}
                  <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800/80">
                      <span className="text-slate-400 block text-[11px]">Sedan (Dzire)</span>
                      <span className="text-base font-bold text-amber-400 font-mono">
                        {formatINR(route.pricing.dzire)}
                      </span>
                    </div>
                    <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800/80">
                      <span className="text-slate-400 block text-[11px]">Innova Crysta</span>
                      <span className="text-base font-bold text-amber-400 font-mono">
                        {formatINR(route.pricing.innovaCrysta)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-2 gap-2">
                  <Link
                    href={`/${route.slug}`}
                    className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs transition-colors"
                  >
                    <span>View Rates</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={getWhatsAppUrl({
                      slug: route.slug,
                      routeName: route.name,
                      packageType: route.packageType,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-md shadow-emerald-600/20"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fleet Showcase Section */}
      <FleetShowcase />

      {/* Why Choose Utkarsh Travels (E-E-A-T & Trust) */}
      <section id="why-us" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">
              Local Expertise & Reliability
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
              Why Pilgrims & Travelers Trust Utkarsh Travels
            </h2>
            <p className="text-slate-400 mt-3 text-base">
              Headquartered at Mehmoorganj, Varanasi, we combine authentic local hospitality with modern vehicle standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-white text-base">Experienced Chauffeurs</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Our drivers have deep knowledge of pilgrimage shrines, temple timings, VIP darshan rules, and highway conditions.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-bold text-white text-base">Zero-Delay Guarantee</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Whether arriving at Babatpur Airport (VNS) or Varanasi Cantt / Banaras Railway Station, your cab arrives 15 minutes early.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 flex items-center justify-center mb-4">
                <Car className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="font-bold text-white text-base">Spotless, Chilled AC Cabs</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Every vehicle is thoroughly washed, sanitized, and air-conditioned before reporting for your journey.
              </p>
            </div>

            <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800/80">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-bold text-white text-base">Physical Varanasi Office</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                We are not an anonymous aggregator. Visit our office in Mehmoorganj, Varanasi or talk to our live team 24/7.
              </p>
            </div>
          </div>

          {/* Quick Contact Banner */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <h4 className="text-lg font-bold text-white">Have a specific tour plan in mind?</h4>
              <p className="text-xs text-slate-400 mt-1">
                Custom itineraries, group packages, and temple circuits tailored to your family&apos;s comfort.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 transition-colors"
              >
                Inquire Online
              </Link>
              <a
                href={getWhatsAppUrl({})}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 transition-colors flex items-center space-x-1.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

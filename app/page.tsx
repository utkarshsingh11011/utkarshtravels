import Image from "next/image";
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
  Sparkles,
  Users,
  Compass,
  Star,
  Award,
} from "lucide-react";
import siteConfig from "@/data/site.json";
import { getAllRoutes, formatINR } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import FleetShowcase from "@/components/FleetShowcase";
import VaranasiSkyline from "@/components/VaranasiSkyline";

export default function HomePage() {
  const routes = getAllRoutes();

  // Top destination arches matching the business card
  const topDestinations = [
    {
      name: "Ayodhya",
      title: "Shri Ram Janmabhoomi & Saryu",
      image: "/images/destinations/ayodhya.jpg",
      slug: "varanasi-to-ayodhya-taxi-service",
      fare: "From ₹5,500",
      description: "Ram Lalla darshan, Hanuman Garhi, and evening Saryu Maha Aarti.",
    },
    {
      name: "Prayagraj",
      title: "Triveni Sangam Holy Snan",
      image: "/images/destinations/prayagraj.jpg",
      slug: "varanasi-to-prayagraj-taxi-service",
      fare: "From ₹3,500",
      description: "Sacred confluence dip, Bade Hanuman Ji temple, and Alopi Devi.",
    },
    {
      name: "Vindhyachal",
      title: "Maa Vindhyavasini Shaktipeeth",
      image: "/images/destinations/vindhyachal.jpg",
      slug: "varanasi-to-vindhyachal-taxi-service",
      fare: "From ₹2,400",
      description: "Sacred Trikona Parikrama covering Kali Khoh & Ashta Bhuja hills.",
    },
    {
      name: "Bodh Gaya & Gaya",
      title: "Mahabodhi & Pind Daan",
      image: "/images/destinations/bodhgaya.jpg",
      slug: "varanasi-to-gaya-taxi-service",
      fare: "From ₹7,000",
      description: "Vishnupad ancestral rites and the UNESCO sacred Bodhi Tree.",
    },
    {
      name: "Chitrakoot Dham",
      title: "Sacred Ramghat & Kamadgiri",
      image: "/images/destinations/chitrakoot.jpg",
      slug: "3-day-multi-city-pilgrimage-taxi",
      fare: "From ₹12,000",
      description: "Mandakini river Aarti, Gupt Godavari caves & 3-day pilgrimage circuit.",
    },
    {
      name: "Varanasi (Kashi)",
      title: "Ganga Aarti & Temple Circuit",
      image: "/images/destinations/varanasi.jpg",
      slug: "varanasi-to-ayodhya-taxi-service",
      fare: "Custom",
      description: "Dashashwamedh Ghat Aarti, Kashi Vishwanath, and Kaal Bhairav darshan.",
    },
  ];

  return (
    <div className="space-y-0 bg-[#FAFAF9] text-slate-900">
      {/* Hero Section: Majestic Varanasi Sunrise Ghats with Light Warm Background */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-amber-50/80 via-[#FAFAF9] to-[#FAFAF9] text-slate-900 py-20 lg:py-28">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0 opacity-25">
          <Image
            src="/images/destinations/varanasi.jpg"
            alt="Varanasi Ganga Ghats Sunrise"
            fill
            priority
            className="object-cover object-center scale-105 animate-in fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAF9] via-[#FAFAF9]/80 to-[#FAFAF9]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Headlines & Business Card Core Message */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-400/60 text-amber-900 text-xs sm:text-sm font-bold tracking-wide uppercase shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Explore India&apos;s Spiritual &amp; Cultural Heritage</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.12] font-serif">
                Sacred Pilgrimage Journeys from <span className="text-amber-700">Kashi</span>, Tailored with Devotion.
              </h1>

              <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Experience authentic, hassle-free taxi rentals and luxury tour packages from Varanasi to Ayodhya Ram Mandir, Prayagraj Sangam, Vindhyachal Shaktipeeth, and Gaya. Managed personally by <strong className="text-amber-900 font-bold">{siteConfig.founder}</strong>.
              </p>

              {/* Tagline Cursive Quote */}
              <div className="pt-1 flex items-center justify-center lg:justify-start space-x-3 text-amber-900 font-serif italic text-lg sm:text-xl font-medium">
                <span>&ldquo;{siteConfig.tagline}&rdquo;</span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href={getWhatsAppUrl({})}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-7 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-base shadow-xl shadow-emerald-600/20 transition-all hover:scale-[1.02]"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                  <span>Instant WhatsApp Booking</span>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-6 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base border-2 border-amber-400/60 transition-all"
                >
                  <Phone className="w-5 h-5 text-amber-400" />
                  <span>Call {siteConfig.phoneDisplay}</span>
                </a>
              </div>

              {/* Verification Badges */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-800">
                <span className="flex items-center space-x-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-300 shadow-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Mehmoorganj, Varanasi Office</span>
                </span>
                <span className="flex items-center space-x-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-300 shadow-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Sedan to 49S Tourist Coach</span>
                </span>
                <span className="flex items-center space-x-1.5 bg-white/80 px-3 py-1.5 rounded-lg border border-slate-300 shadow-sm font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>24/7 Verified Chauffeurs</span>
                </span>
              </div>
            </div>

            {/* Right Column: Quick Tariff & Booking Desk */}
            <div className="lg:col-span-5">
              <div className="bg-white border-2 border-amber-400/60 rounded-3xl p-6 sm:p-7 shadow-xl backdrop-blur-md relative overflow-hidden group">
                <div className="flex items-center justify-between border-b border-amber-400/40 pb-3 mb-4">
                  <span className="text-xs font-bold text-amber-900 uppercase tracking-widest flex items-center space-x-1.5">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span>Instant Booking Desk</span>
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full border border-emerald-300">
                    24/7 Available
                  </span>
                </div>

                {/* Popular Fares Overview Box */}
                <div className="space-y-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                    Popular Route Fixed Tariffs
                  </span>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-200/80">
                      <span className="font-semibold text-slate-800">Varanasi ⇄ Ayodhya</span>
                      <span className="font-mono font-bold text-amber-700">₹5,500</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-200/80">
                      <span className="font-semibold text-slate-800">Varanasi ⇄ Prayagraj</span>
                      <span className="font-mono font-bold text-amber-700">₹3,500</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-slate-200/80">
                      <span className="font-semibold text-slate-800">Varanasi ⇄ Vindhyachal</span>
                      <span className="font-mono font-bold text-amber-700">₹2,400</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="font-semibold text-slate-800">Varanasi ⇄ Gaya &amp; Bodh Gaya</span>
                      <span className="font-mono font-bold text-amber-700">₹7,000</span>
                    </div>
                  </div>
                </div>

                {/* Chauffeur Fleet Chip Badges */}
                <div className="mt-4 flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-semibold border border-amber-300">Swift Dzire</span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-semibold border border-amber-300">Innova Crysta</span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-semibold border border-amber-300">Maharaja (15S)</span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-semibold border border-amber-300">Urbania (16S)</span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-100 text-amber-900 font-semibold border border-amber-300">Mini Bus (35S)</span>
                </div>

                <div className="mt-4 pt-3 border-t border-amber-400/30 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{siteConfig.founder}</span>
                    <span className="text-slate-600 text-[11px]">Tour Coordinator • Mehmoorganj, VNS</span>
                  </div>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="px-3.5 py-1.5 rounded-xl bg-amber-500 text-slate-950 font-bold hover:bg-amber-600 transition-colors shadow-sm"
                  >
                    Direct Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Golden Varanasi Temple Skyline Wave at bottom of hero */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none opacity-40 flex justify-center">
          <VaranasiSkyline className="w-full max-w-4xl h-24" color="#D97706" />
        </div>
      </section>

      {/* Top Destinations Section: Arched Frames matching the Business Card */}
      <section id="destinations" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-400/60 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Our Top Destinations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mt-3 font-serif">
            Sacred Pilgrimage &amp; Outstation Circuits
          </h2>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Immerse yourself in the spiritual heritage of northern India with our private door-to-door cab packages from Varanasi.
          </p>
        </div>

        {/* Arched Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topDestinations.map((dest, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border-2 border-slate-200 hover:border-amber-400 transition-all duration-300 hover:shadow-xl group flex flex-col justify-between"
            >
              <div>
                {/* Arched Photo Window (Jharokha Style matching card) */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100 rounded-b-[40px]">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* Top Destination Pill Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1 rounded-full border border-amber-400/60 text-xs font-bold text-amber-900 shadow-sm">
                    {dest.name}
                  </div>

                  {/* Fare badge */}
                  <div className="absolute bottom-4 right-4 bg-amber-500 text-slate-950 font-black px-3 py-1 rounded-xl text-xs font-mono shadow-md">
                    {dest.fare}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0F172A] font-serif group-hover:text-amber-700 transition-colors">
                    {dest.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    {dest.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/${dest.slug}`}
                  className="flex-1 inline-flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-xs transition-colors"
                >
                  <span>View Rates</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={getWhatsAppUrl({
                    slug: dest.slug,
                    routeName: dest.name,
                    packageType: "Tour Package",
                  })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fleet Showcase with Real Vehicle Images & Business Card Lineup */}
      <FleetShowcase />

      {/* Authoritative Rate Matrix Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-400/60 text-amber-900">
            Transparent Pricing Guarantee
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mt-3 font-serif">
            Popular Tour Rate Cards
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Clear, all-inclusive fuel tariffs from Varanasi. No hidden booking charges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route) => {
            const isCustom = route.slug === "dev-deepawali-varanasi-tour-packages";

            return (
              <div
                key={route.slug}
                className="bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-semibold text-amber-700 uppercase tracking-wider">{route.packageType}</span>
                    <span>{route.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#0F172A] font-serif">{route.name}</h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2">{route.summary}</p>

                  {/* Price Highlights */}
                  <div className="mt-5 grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                      <span className="text-slate-500 block text-[11px]">Sedan (Dzire)</span>
                      <span className={`text-base font-bold ${isCustom ? "text-amber-800 text-xs uppercase" : "text-amber-700 font-mono"}`}>
                        {isCustom ? "On Request" : formatINR(route.pricing.dzire)}
                      </span>
                    </div>
                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200">
                      <span className="text-slate-500 block text-[11px]">Innova Crysta</span>
                      <span className={`text-base font-bold ${isCustom ? "text-amber-800 text-xs uppercase" : "text-slate-900 font-mono"}`}>
                        {isCustom ? "On Request" : formatINR(route.pricing.innovaCrysta)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link
                    href={`/${route.slug}`}
                    className="flex-1 flex items-center justify-center space-x-1.5 py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold text-xs transition-colors"
                  >
                    <span>{isCustom ? "Chat for Quote" : "Detailed Rate Card"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={getWhatsAppUrl({
                      slug: route.slug,
                      routeName: route.name,
                      packageType: route.packageType,
                      customMessage: isCustom
                        ? "Hello Utkarsh Singh, please share rates and availability for Dev Deepawali 2026."
                        : undefined,
                    })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors shadow-sm"
                    aria-label="Book on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Pilgrims Trust Utkarsh Travels */}
      <section className="py-16 sm:py-24 bg-slate-50 text-slate-900 relative overflow-hidden border-t-2 border-amber-400/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-400/60 text-amber-900">
              Varanasi Local Expertise
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] tracking-tight mt-3 font-serif">
              Why Pilgrims &amp; Families Choose Utkarsh Travels
            </h2>
            <p className="text-slate-600 mt-3 text-base">
              With our operational headquarters in Mehmoorganj, Varanasi, we offer genuine warmth and punctuality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.corePillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-amber-400 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 fill-amber-500 text-amber-500" />
                </div>
                <h3 className="font-bold text-slate-900 text-base font-serif">{pillar.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

          {/* Quick Consultation Ribbon */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 className="text-2xl font-black font-serif">Need a Custom Pilgrimage Itinerary?</h3>
              <p className="text-xs sm:text-sm text-slate-900 mt-1 font-medium">
                Talk directly with Utkarsh Singh for VIP temple darshan assistance, custom multi-day circuits, or group coach arrangements.
              </p>
            </div>
            <div className="flex items-center space-x-3 shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs transition-colors shadow-lg"
              >
                Submit Form
              </Link>
              <a
                href={getWhatsAppUrl({})}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-2xl bg-emerald-700 hover:bg-emerald-800 text-white font-black text-xs transition-colors shadow-lg flex items-center space-x-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-700" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

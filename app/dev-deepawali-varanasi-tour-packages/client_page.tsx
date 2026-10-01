"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Calendar,
  Clock,
  Car,
  Ship,
  Hotel,
  CheckCircle2,
  AlertTriangle,
  Flame,
  MessageCircle,
  Phone,
  Send,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Star,
  Compass,
} from "lucide-react";
import siteConfig from "@/data/site.json";
import { getRouteBySlug, formatINR } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import RateCard from "@/components/RateCard";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function DevDeepawaliClientPage() {
  const route = getRouteBySlug("dev-deepawali-varanasi-tour-packages");

  // Countdown Timer State to November 24th, 2026
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-11-24T00:00:00+05:30").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  // Form State
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    travelers: "2-4 Persons",
    vehiclePreference: "Toyota Innova Crysta",
    needHotel: "Yes",
    needBoat: "Private Motorboat",
    message: "",
    honeypot: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    setLoading(true);

    try {
      const payload = {
        name: formData.name,
        phone: formData.phone,
        travelDate: "24th November 2026",
        destination: "Dev Deepawali Varanasi Package",
        passengers: formData.travelers,
        vehiclePreference: `${formData.vehiclePreference} (Hotel: ${formData.needHotel}, Boat: ${formData.needBoat})`,
        pickupLocation: "Varanasi Airport / Railway Station / Hotel",
        message: formData.message,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);

      // Open WhatsApp direct ticket
      const whatsappText = `*DEV DEEPAWALI 2026 INQUIRY - UTKARSH TRAVELS*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Date:* 24th November 2026\n*Group Size:* ${formData.travelers}\n*Vehicle:* ${formData.vehiclePreference}\n*Need Hotel:* ${formData.needHotel}\n*Need Boat:* ${formData.needBoat}\n*Notes:* ${formData.message || "None"}\n\nPlease share quote and confirm slot.`;
      window.open(`https://wa.me/919648974238?text=${encodeURIComponent(whatsappText)}`, "_blank");
    } catch (err) {
      console.error("Form error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const whatsappHeroUrl = getWhatsAppUrl({
    slug: "dev-deepawali-varanasi-tour-packages",
    routeName: "Dev Deepawali 2026",
    customMessage: "Hello Utkarsh Singh, I am interested in booking the Dev Deepawali 2026 Package (24th November). Please share boat ride, hotel, and cab rates.",
  });

  return (
    <div className="bg-[#FAFAF9] text-slate-900 pb-20">
      {/* Event JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": "Dev Deepawali Varanasi 2026",
            "startDate": "2026-11-24T15:00:00+05:30",
            "endDate": "2026-11-24T23:00:00+05:30",
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": "Varanasi Ghats & Sacred Ganges River",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Varanasi",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN"
              }
            },
            "image": [
              `${siteConfig.domain}/images/destinations/dev-deepawali.jpg`
            ],
            "description": "Experience the magic of Dev Deepawali in Varanasi on 24th November. Book exclusive tour packages with boat rides, cab rentals, and hotels.",
            "offers": {
              "@type": "Offer",
              "url": `${siteConfig.domain}/dev-deepawali-varanasi-tour-packages`,
              "price": "4500",
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": "2026-01-01"
            },
            "organizer": {
              "@type": "TravelAgency",
              "name": "Utkarsh Travels Varanasi",
              "url": siteConfig.domain
            }
          })
        }}
      />

      <div className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { name: "Tour Packages", url: "/#destinations" },
            { name: "Dev Deepawali 2026", url: "/dev-deepawali-varanasi-tour-packages" },
          ]}
        />

        {/* Hero Section: Wide Angle Banner of Illuminated Ghats & Countdown Timer */}
        <section className="relative rounded-3xl overflow-hidden bg-white text-slate-900 shadow-2xl border-2 border-amber-400/60">
          {/* Background Image with High Contrast Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/destinations/dev-deepawali.jpg"
              alt="Millions of diyas lighting up Varanasi ghats during Dev Deepawali"
              fill
              priority
              className="object-cover opacity-25 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-amber-50/95 via-amber-50/80 to-transparent" />
          </div>

          <div className="relative z-10 p-6 sm:p-10 lg:p-14 max-w-5xl space-y-6">
            {/* Urgency & Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-400/60 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Calendar className="w-4 h-4 text-amber-600" />
                <span>24th November 2026</span>
              </div>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider shadow-sm">
                <Flame className="w-4 h-4 text-amber-600" />
                <span>Bookings Open – Selling Out Fast!</span>
              </div>
            </div>

            {/* H1 Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.12] font-serif">
              Experience the Divine Magic: <span className="text-amber-700">Dev Deepawali</span> Varanasi 2026 Tour Packages
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-3xl">
              Witness the spectacular festival of lights in the spiritual capital of India. Complete packages including premium cabs, guaranteed hotel stays, and exclusive boat rides.
            </p>

            {/* Live Countdown Timer to 24th November 2026 */}
            <div className="bg-white/90 p-5 rounded-3xl border-2 border-amber-400/60 shadow-lg max-w-xl">
              <div className="text-xs font-bold text-amber-900 uppercase tracking-widest text-center mb-3 flex items-center justify-center space-x-1.5">
                <Clock className="w-4 h-4 text-amber-600 animate-pulse" />
                <span>Countdown to Dev Deepawali 2026 (24th Nov)</span>
              </div>
              <div className="grid grid-cols-4 gap-3 text-center">
                <div className="bg-amber-50 p-2.5 rounded-2xl border border-amber-200">
                  <span className="text-2xl sm:text-3xl font-black text-amber-800 font-mono block">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase">Days</span>
                </div>
                <div className="bg-amber-50 p-2.5 rounded-2xl border border-amber-200">
                  <span className="text-2xl sm:text-3xl font-black text-amber-800 font-mono block">
                    {timeLeft.hours}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase">Hours</span>
                </div>
                <div className="bg-amber-50 p-2.5 rounded-2xl border border-amber-200">
                  <span className="text-2xl sm:text-3xl font-black text-amber-800 font-mono block">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase">Mins</span>
                </div>
                <div className="bg-amber-50 p-2.5 rounded-2xl border border-amber-200">
                  <span className="text-2xl sm:text-3xl font-black text-amber-800 font-mono block">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-600 uppercase">Secs</span>
                </div>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#lead-form"
                className="inline-flex items-center space-x-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-sm uppercase tracking-wide shadow-xl shadow-amber-500/25 transition-all hover:scale-[1.02]"
              >
                <Sparkles className="w-4 h-4 fill-slate-950" />
                <span>BOOK YOUR DEV DEEPAWALI PACKAGE NOW</span>
              </a>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2.5 px-6 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-sm shadow-xl shadow-emerald-600/20 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Instant WhatsApp Expert</span>
              </a>
            </div>
          </div>
        </section>

        {/* H2 Section: The Heritage of Dev Deepawali in Varanasi: The City of Light */}
        <section className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-400/60 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-amber-700" />
            <span>Diwali of the Gods</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-serif">
            The Heritage of Dev Deepawali in Varanasi: The City of Light
          </h2>

          <div className="text-slate-700 text-sm sm:text-base leading-relaxed space-y-4 pt-2">
            <p>
              Often referred to as the &ldquo;Diwali of the Gods,&rdquo; Dev Deepawali is Varanasi&apos;s most spectacular and spiritually significant festival. Celebrated on Kartik Purnima (15 days after Diwali), it is believed that the Gods descend to Earth to bathe in the sacred river Ganges.
            </p>
            <p>
              To welcome them, the entire majestic crescent of Varanasi&apos;s ghats—from Ravidas Ghat to Rajghat—is illuminated with over a million earthen lamps (diyas). The visual of the shimmering river, the grand Maha Aarti at Dashashwamedh Ghat, and the sky lit with eco-friendly fireworks make this an unforgettable, once-in-a-lifetime heritage experience.
            </p>
          </div>
        </section>

        {/* H2 Section: Utkarsh Travels Exclusive Dev Deepawali Packages (3 Feature Cards) */}
        <section className="space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-400/60 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Star className="w-3.5 h-3.5 text-amber-700 fill-amber-500" />
              <span>All-Inclusive Hassle-Free Logistics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-serif">
              Utkarsh Travels Exclusive Dev Deepawali Packages
            </h2>
            <p className="text-slate-600 text-base">
              Varanasi attracts millions of visitors during this time, making logistics extremely difficult. We take the stress out of your trip by handling everything.
            </p>
          </div>

          {/* 3 Package Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Premium Cab Rentals */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-amber-400 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 border-2 border-amber-400 text-amber-800 flex items-center justify-center">
                  <Car className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] font-serif">
                  Premium Cab Rentals
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pick-up and drop-off from the Airport/Railway station, local sightseeing, and outstation drops. Choose from our well-maintained fleet including Dzire, Innova Crysta, or group vehicles like the 15-Seater Maharaja Tempo Traveller and Force Urbania.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-amber-800 flex items-center space-x-1">
                <span>Sanitized AC Fleet & Chauffeur</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 2: Confirmed Boat Rides */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-amber-400 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 border-2 border-amber-400 text-amber-800 flex items-center justify-center">
                  <Ship className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] font-serif">
                  Confirmed Boat Rides
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Experience the illuminated ghats from the best vantage point—the middle of the river. We offer private row boats, motorboats, and luxury Bajras (traditional large wooden boats) with guaranteed slots.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-amber-800 flex items-center space-x-1">
                <span>Guaranteed Pre-Booked Slots</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 3: Comfortable Accommodations */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm hover:border-amber-400 transition-all flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 border-2 border-amber-400 text-amber-800 flex items-center justify-center">
                  <Hotel className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] font-serif">
                  Comfortable Accommodations
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Pre-booked, verified hotel stays near key locations, ensuring you have a restful place to stay despite the peak season rush and heavy city occupancy.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-amber-800 flex items-center space-x-1">
                <span>Verified Clean Hotels Near Ghats</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </section>

        {/* Rate Matrix Card */}
        {route && (
          <section aria-label="Official Tariff">
            <RateCard route={route} />
          </section>
        )}

        {/* H2 Section: Essential Guide: Timings & Activities for Dev Deepawali */}
        <section className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-400/60">
              Practical Tourist Guide
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0F172A] tracking-tight font-serif">
              Essential Guide: Timings &amp; Activities for Dev Deepawali
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              To get the most out of your experience, planning is crucial. Here is what you need to know:
            </p>
          </div>

          {/* Timings Timeline */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-amber-900 font-serif border-b border-amber-200 pb-2">
              Recommended Timings:
            </h3>

            <div className="space-y-4 relative before:absolute before:inset-0 before:left-4 before:h-full before:w-0.5 before:bg-amber-400">
              {/* Item 1 */}
              <div className="relative flex items-start space-x-5 pl-2">
                <div className="w-5 h-5 rounded-full bg-amber-500 border-4 border-white shadow shrink-0 mt-1 z-10" />
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex-1 space-y-1">
                  <span className="text-xs font-mono font-bold text-amber-800 block">
                    3:00 PM – 4:00 PM (Ghat Arrival)
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The city experiences massive traffic restrictions on this day. Arrive at the ghats early to secure a good viewing spot or board your pre-booked boat before the crowds swell.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative flex items-start space-x-5 pl-2">
                <div className="w-5 h-5 rounded-full bg-amber-500 border-4 border-white shadow shrink-0 mt-1 z-10" />
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex-1 space-y-1">
                  <span className="text-xs font-mono font-bold text-amber-800 block">
                    5:15 PM – 6:00 PM (Diya Lighting)
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    Witness the magical moment when volunteers and priests begin lighting millions of diyas along the steps.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative flex items-start space-x-5 pl-2">
                <div className="w-5 h-5 rounded-full bg-amber-500 border-4 border-white shadow shrink-0 mt-1 z-10" />
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 sm:p-5 flex-1 space-y-1">
                  <span className="text-xs font-mono font-bold text-amber-800 block">
                    6:30 PM Onwards (Maha Aarti)
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    The grand Ganga Aarti begins. Watching this from a boat on the water is highly recommended.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Top Activities Checklist */}
          <div className="space-y-4 pt-4 border-t border-slate-200">
            <h3 className="text-lg font-bold text-amber-900 font-serif">
              Top Activities to Do:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold mb-0.5">Take an Evening Boat Ride</strong>
                  <span className="text-slate-600">The ultimate way to see all 84 ghats glittering with lamps.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold mb-0.5">Witness the Maha Aarti</strong>
                  <span className="text-slate-600">Specially choreographed, grand-scale Aartis take place at Dashashwamedh, Rajendra Prasad, and Assi Ghat.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold mb-0.5">Light a Diya</strong>
                  <span className="text-slate-600">Participate in the tradition by floating your own diya in the Ganges for blessings and peace.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold mb-0.5">Kashi Vishwanath Corridor Visit</strong>
                  <span className="text-slate-600">Visit the beautifully illuminated temple corridor.</span>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 md:col-span-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold mb-0.5">Enjoy the Laser Show</strong>
                  <span className="text-slate-600">Watch the state-sponsored laser and 3D projection mapping shows narrating the history of Kashi (typically at Chet Singh Ghat).</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* H2 Section: Why You Must Book Immediately */}
        <section className="bg-amber-500/10 border-2 border-amber-400/60 rounded-3xl p-6 sm:p-10 space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-200 px-3 py-1 rounded-full border border-amber-400">
              High Demand Scarcity Warning
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight font-serif">
              Why You Must Book Immediately
            </h2>
            <p className="text-slate-800 text-sm sm:text-base font-medium">
              Dev Deepawali is on <strong>24th November</strong>, and it is the busiest day of the year in Varanasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-xs sm:text-sm">
            <div className="bg-white p-5 rounded-2xl border border-amber-300 shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-rose-600 font-bold">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>Hotel Occupancy</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Hotels reach <strong>100% occupancy</strong> months in advance.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-300 shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-rose-600 font-bold">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>Boat Price Surges</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Boat prices surge drastically on the spot, and availability becomes zero.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-amber-300 shadow-sm space-y-2">
              <div className="flex items-center space-x-2 text-rose-600 font-bold">
                <AlertTriangle className="w-5 h-5 shrink-0" />
                <span>Transport Shortage</span>
              </div>
              <p className="text-slate-700 leading-relaxed">
                Cab and transport availability is strictly limited due to high demand.
              </p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-amber-400 text-center font-bold text-slate-900 text-sm sm:text-base">
            Don&apos;t leave your spiritual journey to chance. Secure your peace of mind with Utkarsh Travels today.
          </div>
        </section>

        {/* Lead Capture Form: Let Us Plan Your Perfect Dev Deepawali Experience */}
        <section id="lead-form" className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-400/60">
              Free Custom Quote
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0F172A] font-serif">
              Let Us Plan Your Perfect Dev Deepawali Experience
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Fill out your details below to receive guaranteed boat slots, verified hotel availability, and transparent AC cab rates from Utkarsh Singh.
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-10 space-y-5 bg-slate-50 rounded-2xl border border-slate-200">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-400">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black text-[#0F172A] font-serif">Dev Deepawali Slot Reserved!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you! Your Dev Deepawali inquiry has been dispatched directly to <strong>Utkarsh Singh</strong>. Your WhatsApp chat ticket is ready.
              </p>
              <button
                type="button"
                onClick={() => window.open(whatsappHeroUrl, "_blank")}
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 text-white font-extrabold text-sm shadow-md shadow-emerald-600/20"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>Open WhatsApp Ticket</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Anand Sharma"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Number of Travelers
                  </label>
                  <select
                    value={formData.travelers}
                    onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  >
                    <option value="1-2 Persons (Couple)">1-2 Persons (Couple)</option>
                    <option value="3-5 Persons (Family)">3-5 Persons (Family)</option>
                    <option value="6-7 Persons (Innova)">6-7 Persons (Innova)</option>
                    <option value="8-15 Persons (Maharaja/Urbania)">8-15 Persons (Maharaja/Urbania)</option>
                    <option value="16-26 Persons (Tempo Traveller)">16-26 Persons (Tempo Traveller)</option>
                    <option value="27+ Persons (Coach)">27+ Persons (Tourist Coach)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Vehicle Preference
                  </label>
                  <select
                    value={formData.vehiclePreference}
                    onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  >
                    <option value="Swift Dzire Sedan">Swift Dzire (4S Sedan)</option>
                    <option value="Maruti Ertiga MUV">Maruti Ertiga (6S MUV)</option>
                    <option value="Toyota Innova Crysta">Toyota Innova Crysta (7S)</option>
                    <option value="Maharaja Tempo Traveller 15S">Maharaja Tempo Traveller (15S)</option>
                    <option value="Force Urbania 16S">Force Urbania (16S Luxury)</option>
                    <option value="Tempo Traveller 20S/26S">Tempo Traveller (20S/26S)</option>
                    <option value="Tourist Coach 35S/49S">Tourist Coach (35S/49S)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Need Hotel Accommodation?
                  </label>
                  <select
                    value={formData.needHotel}
                    onChange={(e) => setFormData({ ...formData, needHotel: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  >
                    <option value="Yes - Hotel Required">Yes (Include Verified Hotel)</option>
                    <option value="No - Cab & Boat Only">No (Only Cab & Boat Ride)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Ganga Boat Ride Preference
                </label>
                <select
                  value={formData.needBoat}
                  onChange={(e) => setFormData({ ...formData, needBoat: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                >
                  <option value="Private Motorboat">Private Motorboat (Best View)</option>
                  <option value="Traditional Row Boat">Traditional Row Boat (Authentic)</option>
                  <option value="Luxury Bajra (Wooden Cruise)">Luxury Wooden Bajra (Group/Family)</option>
                  <option value="No Boat Needed">No Boat Needed</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Special Instructions / Flight or Train Details
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Senior citizen assistance, airport pickup flight numbers, wheelchair requirements..."
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center space-x-2 py-4 px-8 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-black text-base transition-all shadow-xl shadow-amber-500/25 disabled:opacity-50 uppercase tracking-wide"
              >
                <Send className="w-5 h-5 fill-slate-950 text-amber-500" />
                <span>{loading ? "Processing Quote..." : "GET A FREE CUSTOM QUOTE"}</span>
              </button>
            </form>
          )}
        </section>

        {/* Route Specific FAQs */}
        {route && route.faq && route.faq.length > 0 && (
          <section className="bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-400/60">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight font-serif">
                Everything You Need to Know About Dev Deepawali
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {route.faq.map((faqItem, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-5 space-y-2.5"
                >
                  <h3 className="font-bold text-[#0F172A] text-sm sm:text-base flex items-start space-x-2">
                    <HelpCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
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
      </div>

      {/* Floating WhatsApp FAB Badge for Dev Deepawali Expert */}
      <aside aria-label="Dev Deepawali Expert WhatsApp" className="fixed bottom-20 md:bottom-8 right-5 z-40">
        <a
          href={whatsappHeroUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3 rounded-full shadow-2xl shadow-emerald-600/40 transition-all duration-300 hover:scale-105"
        >
          <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:opacity-50 animate-ping pointer-events-none" />
          <MessageCircle className="w-6 h-6 fill-white text-emerald-600 relative z-10" />
          <span className="text-xs font-extrabold tracking-wide hidden sm:inline-block relative z-10">
            Chat with our Dev Deepawali Expert
          </span>
        </a>
      </aside>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, MapPin, Mail, ChevronDown, Sparkles, Flame, Compass, Navigation } from "lucide-react";
import siteConfig from "@/data/site.json";
import routesData from "@/data/routes.json";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toursDropdownOpen, setToursDropdownOpen] = useState(false);
  const [oneWayDropdownOpen, setOneWayDropdownOpen] = useState(false);

  const tourPackages = routesData.filter((r) => !r.isOneWay);
  const oneWayCabs = routesData.filter((r) => r.isOneWay);

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* Top Heritage Bar — Authentic Business Card Credentials */}
      <div className="bg-[#F1F5F9] text-slate-800 px-4 py-2 text-xs border-b border-amber-300/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Founder & Address */}
          <div className="flex items-center space-x-3 text-slate-800">
            <span className="flex items-center space-x-1.5 text-amber-800 font-extrabold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{siteConfig.founder}</span>
            </span>
            <span className="text-slate-400 hidden sm:inline">•</span>
            <span className="flex items-center space-x-1 text-slate-700 hidden sm:flex">
              <MapPin className="w-3.5 h-3.5 text-amber-600" />
              <span>{siteConfig.address.street}, {siteConfig.address.locality}, UP</span>
            </span>
            <span className="text-slate-400 hidden md:inline">•</span>
            <span className="italic text-amber-900 hidden md:inline font-serif font-medium">
              &ldquo;{siteConfig.slogan}&rdquo;
            </span>
          </div>

          {/* Right: Phone & Email */}
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hover:text-amber-700 transition-colors flex items-center space-x-1 font-extrabold text-slate-900 tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-amber-600" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <span className="text-slate-300 hidden sm:inline">|</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-amber-700 transition-colors hidden sm:flex items-center space-x-1 text-slate-700 font-medium"
            >
              <Mail className="w-3 h-3 text-amber-600" />
              <span className="text-[11px]">{siteConfig.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Royal Light Header */}
      <div className="bg-white/95 backdrop-blur-md border-b-2 border-amber-400/40 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            {/* Business Card Logo */}
            <Logo variant="dark" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                href="/"
                className="px-3 py-2 rounded-xl text-sm font-bold text-slate-800 hover:text-amber-700 hover:bg-amber-50/70 transition-all"
              >
                Home
              </Link>

              {/* Dev Deepawali Highlight Link */}
              <Link
                href="/dev-deepawali-varanasi-tour-packages"
                className="px-2.5 py-1.5 rounded-xl text-xs font-black bg-amber-100 border border-amber-400/80 text-amber-900 hover:bg-amber-500 hover:text-slate-950 transition-all flex items-center space-x-1 shadow-sm"
              >
                <Flame className="w-3.5 h-3.5 text-amber-600 fill-amber-500" />
                <span>Dev Deepawali</span>
              </Link>

              {/* 1. Tour Packages Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setToursDropdownOpen(true)}
                onMouseLeave={() => setToursDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setToursDropdownOpen(!toursDropdownOpen)}
                  className="px-3 py-2 rounded-xl text-sm font-bold text-slate-800 hover:text-amber-700 hover:bg-amber-50/70 transition-all flex items-center space-x-1"
                  aria-expanded={toursDropdownOpen}
                >
                  <Compass className="w-4 h-4 text-amber-600" />
                  <span>Tour Packages</span>
                  <ChevronDown className="w-4 h-4 text-amber-600" />
                </button>

                {toursDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-96 rounded-2xl bg-white border-2 border-amber-400/80 shadow-2xl py-3 z-50">
                    <div className="px-4 pb-2 mb-2 text-xs font-extrabold text-amber-800 uppercase tracking-widest border-b border-slate-200 flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <span>🛕 Pilgrim &amp; Local Tour Packages</span>
                      </span>
                      <span className="text-[10px] text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">Round Trips</span>
                    </div>
                    <div className="max-h-[70vh] overflow-y-auto">
                      {tourPackages.map((route) => (
                        <Link
                          key={route.slug}
                          href={`/${route.slug}`}
                          onClick={() => setToursDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm text-slate-800 hover:bg-amber-50/80 hover:text-amber-900 transition-colors border-b border-slate-100 last:border-0"
                        >
                          <div className="font-bold text-slate-900 flex items-center justify-between">
                            <span className="truncate pr-2">{route.name}</span>
                          </div>
                          <div className="text-xs text-slate-500 flex items-center justify-between mt-0.5">
                            <span className="truncate max-w-[180px]">{route.packageType}</span>
                            <span className="text-amber-700 font-extrabold font-mono shrink-0">
                              From ₹{route.pricing.dzire.toLocaleString("en-IN")}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="pt-2 mt-1 border-t border-slate-200 px-4 text-center">
                      <Link
                        href="/#tour-packages"
                        onClick={() => setToursDropdownOpen(false)}
                        className="text-xs font-black text-amber-800 hover:text-amber-950 uppercase tracking-wider block py-1"
                      >
                        View All Tour Packages &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. One-Way Cabs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOneWayDropdownOpen(true)}
                onMouseLeave={() => setOneWayDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setOneWayDropdownOpen(!oneWayDropdownOpen)}
                  className="px-3 py-2 rounded-xl text-sm font-bold text-slate-800 hover:text-amber-700 hover:bg-amber-50/70 transition-all flex items-center space-x-1"
                  aria-expanded={oneWayDropdownOpen}
                >
                  <Navigation className="w-4 h-4 text-emerald-600" />
                  <span>One-Way Cabs</span>
                  <ChevronDown className="w-4 h-4 text-emerald-600" />
                </button>

                {oneWayDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-96 rounded-2xl bg-white border-2 border-emerald-400/80 shadow-2xl py-3 z-50">
                    <div className="px-4 pb-2 mb-2 text-xs font-extrabold text-emerald-800 uppercase tracking-widest border-b border-slate-200 flex items-center justify-between">
                      <span className="flex items-center space-x-1">
                        <span>🚕 One-Way Intercity Cab Drops</span>
                      </span>
                      <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Fixed Low Rates</span>
                    </div>
                    <div className="max-h-[70vh] overflow-y-auto">
                      {oneWayCabs.map((route) => (
                        <Link
                          key={route.slug}
                          href={`/${route.slug}`}
                          onClick={() => setOneWayDropdownOpen(false)}
                          className="block px-4 py-2.5 text-sm text-slate-800 hover:bg-emerald-50/80 hover:text-emerald-950 transition-colors border-b border-slate-100 last:border-0"
                        >
                          <div className="font-bold text-slate-900 flex items-center justify-between">
                            <span className="truncate pr-2">{route.name}</span>
                          </div>
                          <div className="text-xs text-slate-500 flex items-center justify-between mt-0.5">
                            <span>{route.origin} &rarr; {route.destination}</span>
                            <span className="text-emerald-700 font-extrabold font-mono shrink-0">
                              ₹{route.pricing.dzire.toLocaleString("en-IN")} Drop
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="pt-2 mt-1 border-t border-slate-200 px-4 text-center">
                      <Link
                        href="/#oneway"
                        onClick={() => setOneWayDropdownOpen(false)}
                        className="text-xs font-black text-emerald-800 hover:text-emerald-950 uppercase tracking-wider block py-1"
                      >
                        View All One-Way Drops &rarr;
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/#fleet"
                className="px-3 py-2 rounded-xl text-sm font-bold text-slate-800 hover:text-amber-700 hover:bg-amber-50/70 transition-all"
              >
                Our Fleet
              </Link>

              <Link
                href="/contact"
                className="px-3 py-2 rounded-xl text-sm font-bold text-slate-800 hover:text-amber-700 hover:bg-amber-50/70 transition-all"
              >
                Custom Quote
              </Link>
            </nav>

            {/* Direct Action CTAs */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-100 border-2 border-amber-400/50 hover:bg-amber-50 text-slate-900 text-xs sm:text-sm font-bold shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call Chauffeur</span>
              </a>

              <a
                href={getWhatsAppUrl({})}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <a
                href={getWhatsAppUrl({})}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-emerald-600 text-white sm:hidden shadow-md"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 text-slate-800 hover:text-slate-950 border border-slate-300"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b-2 border-amber-400 px-5 pt-4 pb-8 space-y-5 shadow-2xl max-h-[85vh] overflow-y-auto">
          <div className="pb-3 border-b border-slate-200 text-xs text-amber-800 font-serif italic font-medium">
            &ldquo;{siteConfig.slogan}&rdquo;
          </div>

          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-slate-900 hover:text-amber-700"
          >
            Home
          </Link>

          <Link
            href="/dev-deepawali-varanasi-tour-packages"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-2 py-2.5 px-3 rounded-xl bg-amber-100 border border-amber-400 text-amber-950 font-black text-sm"
          >
            <Flame className="w-4 h-4 text-amber-600 fill-amber-500" />
            <span>Dev Deepawali 2026 Packages</span>
          </Link>

          {/* Section 1: Pilgrim Tour Packages */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-black text-amber-900 uppercase tracking-widest bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 flex items-center justify-between">
              <span>🛕 Pilgrim Tour Packages</span>
              <span className="text-[10px] text-amber-700 font-bold">Round Trip</span>
            </div>
            <div className="space-y-1 pl-2 border-l-2 border-amber-400">
              {tourPackages.map((route) => (
                <Link
                  key={route.slug}
                  href={`/${route.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 rounded hover:bg-amber-50 text-sm text-slate-800"
                >
                  <span className="font-bold text-slate-900 block">{route.name}</span>
                  <span className="text-xs text-amber-700 font-mono font-bold">
                    From ₹{route.pricing.dzire.toLocaleString("en-IN")}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 2: One-Way Cab Drops */}
          <div className="space-y-2 pt-2">
            <div className="text-xs font-black text-emerald-900 uppercase tracking-widest bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 flex items-center justify-between">
              <span>🚕 One-Way Intercity Cab Drops</span>
              <span className="text-[10px] text-emerald-700 font-bold">Point to Point</span>
            </div>
            <div className="space-y-1 pl-2 border-l-2 border-emerald-500">
              {oneWayCabs.map((route) => (
                <Link
                  key={route.slug}
                  href={`/${route.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-1.5 px-2 rounded hover:bg-emerald-50 text-sm text-slate-800"
                >
                  <span className="font-bold text-slate-900 block">{route.name}</span>
                  <span className="text-xs text-emerald-700 font-mono font-bold">
                    ₹{route.pricing.dzire.toLocaleString("en-IN")} Drop
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/#fleet"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-slate-900 hover:text-amber-700"
          >
            Our Fleet &amp; Coaches
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-slate-900 hover:text-amber-700"
          >
            Contact &amp; Custom Route Quote
          </Link>

          <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-100 text-slate-900 font-bold text-xs border border-amber-300"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Call Utkarsh</span>
            </a>
            <a
              href={getWhatsAppUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-emerald-600 text-white font-extrabold text-xs shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

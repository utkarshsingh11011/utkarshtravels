"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, MapPin, Mail, ChevronDown, Sparkles } from "lucide-react";
import siteConfig from "@/data/site.json";
import routesData from "@/data/routes.json";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [routesDropdownOpen, setRoutesDropdownOpen] = useState(false);

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
                className="px-3.5 py-2 rounded-xl text-sm font-bold text-slate-800 hover:text-amber-700 hover:bg-amber-50/70 transition-all"
              >
                Home
              </Link>

              {/* Routes Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setRoutesDropdownOpen(true)}
                onMouseLeave={() => setRoutesDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setRoutesDropdownOpen(!routesDropdownOpen)}
                  className="px-3.5 py-2 rounded-xl text-sm font-bold text-slate-800 hover:text-amber-700 hover:bg-amber-50/70 transition-all flex items-center space-x-1"
                  aria-expanded={routesDropdownOpen}
                >
                  <span>Pilgrimage Routes</span>
                  <ChevronDown className="w-4 h-4 text-amber-600" />
                </button>

                {routesDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-88 rounded-2xl bg-white border-2 border-amber-400/80 shadow-2xl py-3 z-50">
                    <div className="px-4 pb-2 mb-2 text-xs font-extrabold text-amber-800 uppercase tracking-widest border-b border-slate-200 flex items-center justify-between">
                      <span>Sacred Destination Circuits</span>
                      <span className="text-[10px] text-slate-500 font-semibold">Fixed Fares</span>
                    </div>
                    {routesData.map((route) => (
                      <Link
                        key={route.slug}
                        href={`/${route.slug}`}
                        onClick={() => setRoutesDropdownOpen(false)}
                        className="block px-4 py-2.5 text-sm text-slate-800 hover:bg-amber-50/80 hover:text-amber-900 transition-colors"
                      >
                        <div className="font-bold text-slate-900">{route.name}</div>
                        <div className="text-xs text-slate-500 flex items-center justify-between mt-0.5">
                          <span>{route.packageType}</span>
                          <span className="text-amber-700 font-extrabold font-mono">
                            From ₹{route.pricing.dzire.toLocaleString("en-IN")}
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/#destinations"
                className="px-3.5 py-2 rounded-xl text-sm font-bold text-slate-800 hover:text-amber-700 hover:bg-amber-50/70 transition-all"
              >
                Destinations
              </Link>

              <Link
                href="/#fleet"
                className="px-3.5 py-2 rounded-xl text-sm font-bold text-slate-800 hover:text-amber-700 hover:bg-amber-50/70 transition-all"
              >
                Our Fleet
              </Link>

              <Link
                href="/contact"
                className="px-3.5 py-2 rounded-xl text-sm font-bold text-slate-800 hover:text-amber-700 hover:bg-amber-50/70 transition-all"
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
        <div className="lg:hidden bg-white border-b-2 border-amber-400 px-5 pt-4 pb-8 space-y-4 shadow-2xl">
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

          <div className="text-xs font-extrabold text-amber-800 uppercase tracking-widest pt-1">
            Top Pilgrimage Circuits
          </div>
          <div className="space-y-1.5 pl-3 border-l-2 border-amber-400">
            {routesData.map((route) => (
              <Link
                key={route.slug}
                href={`/${route.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm text-slate-800 hover:text-amber-800"
              >
                <span className="font-bold text-slate-900">{route.name}</span>
                <span className="block text-xs text-amber-700 font-mono font-bold">
                  From ₹{route.pricing.dzire.toLocaleString("en-IN")}
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/#destinations"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-bold text-slate-900 hover:text-amber-700"
          >
            Top Destinations
          </Link>

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

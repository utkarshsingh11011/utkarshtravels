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
    <header className="sticky top-0 z-50 shadow-xl">
      {/* Top Heritage Bar — Authentic Business Card Credentials */}
      <div className="bg-[#050C1A] text-slate-300 px-4 py-2 text-xs border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Founder & Address */}
          <div className="flex items-center space-x-3 text-slate-300">
            <span className="flex items-center space-x-1.5 text-amber-400 font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{siteConfig.founder}</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="flex items-center space-x-1 text-slate-300 hidden sm:flex">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteConfig.address.street}, {siteConfig.address.locality}, UP</span>
            </span>
            <span className="text-slate-600 hidden md:inline">•</span>
            <span className="italic text-amber-300/90 hidden md:inline font-serif">
              &ldquo;{siteConfig.slogan}&rdquo;
            </span>
          </div>

          {/* Right: Phone & Email */}
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hover:text-amber-400 transition-colors flex items-center space-x-1 font-bold text-white tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href={`mailto:${siteConfig.email}`}
              className="hover:text-amber-400 transition-colors hidden sm:flex items-center space-x-1 text-slate-400 hover:text-white"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              <span className="text-[11px]">{siteConfig.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Royal Navy Header */}
      <div className="bg-[#0A1931]/98 backdrop-blur-md border-b-2 border-amber-500/40 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-22">
            {/* Business Card Logo */}
            <Logo variant="light" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              <Link
                href="/"
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-white/5 transition-all"
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
                  className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-white/5 transition-all flex items-center space-x-1"
                  aria-expanded={routesDropdownOpen}
                >
                  <span>Pilgrimage Routes</span>
                  <ChevronDown className="w-4 h-4 text-amber-400" />
                </button>

                {routesDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-88 rounded-2xl bg-[#071326] border-2 border-amber-500/40 shadow-2xl py-3 z-50">
                    <div className="px-4 pb-2 mb-2 text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-slate-800 flex items-center justify-between">
                      <span>Sacred Destination Circuits</span>
                      <span className="text-[10px] text-slate-400 font-normal">Fixed Fares</span>
                    </div>
                    {routesData.map((route) => (
                      <Link
                        key={route.slug}
                        href={`/${route.slug}`}
                        onClick={() => setRoutesDropdownOpen(false)}
                        className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-amber-500/10 hover:text-amber-400 transition-colors"
                      >
                        <div className="font-semibold text-white">{route.name}</div>
                        <div className="text-xs text-slate-400 flex items-center justify-between mt-0.5">
                          <span>{route.packageType}</span>
                          <span className="text-amber-400 font-bold font-mono">
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
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-white/5 transition-all"
              >
                Destinations
              </Link>

              <Link
                href="/#fleet"
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-white/5 transition-all"
              >
                Our Fleet
              </Link>

              <Link
                href="/contact"
                className="px-3.5 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-amber-400 hover:bg-white/5 transition-all"
              >
                Custom Quote
              </Link>
            </nav>

            {/* Direct Action CTAs */}
            <div className="hidden sm:flex items-center space-x-3">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800/90 border border-amber-500/40 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Chauffeur</span>
              </a>

              <a
                href={getWhatsAppUrl({})}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-amber-500/25 transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-500" />
                <span>WhatsApp Booking</span>
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center space-x-2">
              <a
                href={getWhatsAppUrl({})}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-emerald-600 text-white sm:hidden"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-800 text-slate-200 hover:text-white border border-slate-700"
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
        <div className="lg:hidden bg-[#071326] border-b-2 border-amber-500/40 px-5 pt-4 pb-8 space-y-4 shadow-2xl">
          <div className="pb-3 border-b border-slate-800 text-xs text-amber-400 font-serif italic">
            &ldquo;{siteConfig.slogan}&rdquo;
          </div>

          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-white hover:text-amber-400"
          >
            Home
          </Link>

          <div className="text-xs font-bold text-amber-500 uppercase tracking-widest pt-1">
            Top Pilgrimage Circuits
          </div>
          <div className="space-y-1.5 pl-3 border-l-2 border-amber-500/30">
            {routesData.map((route) => (
              <Link
                key={route.slug}
                href={`/${route.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm text-slate-300 hover:text-amber-400"
              >
                <span className="font-medium text-white">{route.name}</span>
                <span className="block text-xs text-amber-400 font-mono">
                  From ₹{route.pricing.dzire.toLocaleString("en-IN")}
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/#destinations"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-white hover:text-amber-400"
          >
            Top Destinations
          </Link>

          <Link
            href="/#fleet"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-white hover:text-amber-400"
          >
            Our Fleet & Coaches
          </Link>

          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-white hover:text-amber-400"
          >
            Contact & Custom Route Quote
          </Link>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-slate-800 text-white font-semibold text-xs border border-slate-700"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Utkarsh</span>
            </a>
            <a
              href={getWhatsAppUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md"
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

"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Menu, X, Car, MapPin, ChevronDown } from "lucide-react";
import siteConfig from "@/data/site.json";
import routesData from "@/data/routes.json";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [routesDropdownOpen, setRoutesDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-white">
      {/* Top micro bar for Local NAP & Quick contact */}
      <div className="bg-slate-950 px-4 py-1.5 text-xs text-slate-300 border-b border-slate-800/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1 text-amber-400">
              <MapPin className="w-3.5 h-3.5" />
              <span>Mehmoorganj, Varanasi (UP)</span>
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">24/7 Verified Chauffeur & Cab Service</span>
          </div>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hover:text-amber-400 transition-colors flex items-center space-x-1 font-medium"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <a
              href={getWhatsAppUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center space-x-1 font-medium"
            >
              <MessageCircle className="w-3 h-3" />
              <span>Instant WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform">
              <Car className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-white block leading-tight">
                Utkarsh <span className="text-amber-400">Travels</span>
              </span>
              <span className="text-[11px] text-slate-400 font-medium tracking-wider uppercase block">
                Varanasi • Sacred Tours & Cabs
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/70 transition-colors"
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
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/70 transition-colors flex items-center space-x-1"
                aria-expanded={routesDropdownOpen}
              >
                <span>Tour Packages</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>

              {routesDropdownOpen && (
                <div className="absolute left-0 mt-1 w-80 rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="px-4 py-2 text-xs font-semibold text-amber-400 uppercase tracking-wider border-b border-slate-800">
                    Spiritual & Intercity Routes
                  </div>
                  {routesData.map((route) => (
                    <Link
                      key={route.slug}
                      href={`/${route.slug}`}
                      onClick={() => setRoutesDropdownOpen(false)}
                      className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-400 transition-colors"
                    >
                      <div className="font-medium text-slate-100">{route.name}</div>
                      <div className="text-xs text-slate-400 flex items-center justify-between mt-0.5">
                        <span>{route.packageType}</span>
                        <span className="text-amber-400 font-semibold">
                          From ₹{route.pricing.dzire.toLocaleString("en-IN")}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/#fleet"
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/70 transition-colors"
            >
              Our Fleet
            </Link>

            <Link
              href="/#why-us"
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/70 transition-colors"
            >
              Why Choose Us
            </Link>

            <Link
              href="/contact"
              className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:text-white hover:bg-slate-800/70 transition-colors"
            >
              Contact & Rates
            </Link>
          </nav>

          {/* Direct CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-200 text-sm font-medium transition-all"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Us</span>
            </a>
            <a
              href={getWhatsAppUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold shadow-lg shadow-emerald-600/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book Cab</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="p-2 rounded-lg bg-slate-800 text-amber-400 hover:bg-slate-700"
              aria-label="Call Utkarsh Travels"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Home
          </Link>
          <div className="px-3 py-1 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            Popular Tour Routes
          </div>
          <div className="space-y-1 pl-2">
            {routesData.map((route) => (
              <Link
                key={route.slug}
                href={`/${route.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm text-slate-300 hover:bg-slate-800 hover:text-amber-400"
              >
                <div className="font-medium text-slate-100">{route.name}</div>
                <div className="text-xs text-amber-400">From ₹{route.pricing.dzire.toLocaleString("en-IN")}</div>
              </Link>
            ))}
          </div>
          <Link
            href="/#fleet"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Our Fleet
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-slate-800"
          >
            Contact & Custom Quote
          </Link>

          <div className="pt-3 border-t border-slate-800 grid grid-cols-2 gap-2">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-slate-800 text-white font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now</span>
            </a>
            <a
              href={getWhatsAppUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-sm shadow-md"
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

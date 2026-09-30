import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, Clock, Award } from "lucide-react";
import siteConfig from "@/data/site.json";
import routesData from "@/data/routes.json";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Trust Badges Bar */}
      <div className="border-b border-slate-800/80 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base">Verified & Polite Drivers</h4>
                <p className="text-xs text-slate-400 mt-0.5">Background-checked highway experts for peace of mind.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base">100% Punctual Pickup</h4>
                <p className="text-xs text-slate-400 mt-0.5">On-time airport, railway station, and doorstep reporting.</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base">Transparent Rate Cards</h4>
                <p className="text-xs text-slate-400 mt-0.5">Zero hidden charges. Complete clarity on tolls and parking.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & NAP */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company & NAP */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 flex items-center justify-center font-bold text-slate-950 text-xl">
                U
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Utkarsh <span className="text-amber-400">Travels</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed italic">
              &ldquo;{siteConfig.tagline}&rdquo;
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Utkarsh Travels is Varanasi’s trusted local operator for spiritual pilgrimage circuits, darshan day-trips, and intercity cab rentals across Uttar Pradesh and Bihar.
            </p>

            {/* Verified NAP Block */}
            <div className="pt-2 space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Utkarsh Travels</strong>
                  <br />
                  {siteConfig.address.street}, {siteConfig.address.locality}
                  <br />
                  {siteConfig.address.region} - {siteConfig.address.postalCode}, India
                </span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Popular Spiritual Routes (SEO Internal Links) */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Popular Tour Routes
            </h3>
            <ul className="space-y-2.5 text-xs">
              {routesData.map((route) => (
                <li key={route.slug}>
                  <Link
                    href={`/${route.slug}`}
                    className="text-slate-400 hover:text-amber-400 transition-colors flex items-center justify-between"
                  >
                    <span>{route.name}</span>
                    <span className="text-[11px] text-slate-500 font-mono">
                      ₹{route.pricing.dzire.toLocaleString("en-IN")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet Categories */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Our Vehicle Fleet
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <strong className="text-slate-300">Maruti Swift Dzire</strong> (4 Seater Sedan)
              </li>
              <li>
                <strong className="text-slate-300">Maruti Suzuki Ertiga</strong> (6 Seater MUV)
              </li>
              <li>
                <strong className="text-slate-300">Toyota Innova Crysta</strong> (6/7 Seater Premium SUV)
              </li>
              <li>
                <strong className="text-slate-300">Force Urbania (16S)</strong> (16 Seater Luxury Van)
              </li>
              <li>
                <strong className="text-slate-300">Tempo Traveller 17S</strong> (17 Seater Mini Coach)
              </li>
              <li>
                <strong className="text-slate-300">Tempo Traveller 26S</strong> (26 Seater Group Van)
              </li>
              <li>
                <strong className="text-slate-300">35 Seater Mini Bus</strong> (Large Tour Coach)
              </li>
            </ul>
          </div>

          {/* Quick Lead Action & Inclusions */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Instant Booking
            </h3>
            <p className="text-xs text-slate-400">
              Need a personalized itinerary or immediate cab dispatch in Varanasi? Chat directly on WhatsApp with our travel coordinator.
            </p>
            <a
              href={getWhatsAppUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 w-full justify-center px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/20 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Booking Desk</span>
            </a>
            <div className="text-[11px] text-slate-400 bg-slate-900 p-3 rounded-xl border border-slate-800">
              <span className="font-semibold text-slate-300 block mb-1">Inclusions Guarantee:</span>
              Clean AC vehicles, verified polite chauffeurs, 24/7 route support, and fuel charges included.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Utkarsh Travels Varanasi. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">
              Contact & Inquiry
            </Link>
            <a href={siteConfig.domain + "/sitemap.xml"} className="hover:text-amber-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

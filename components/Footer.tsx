import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Map, ShieldCheck, HeartHandshake, Headphones } from "lucide-react";
import siteConfig from "@/data/site.json";
import routesData from "@/data/routes.json";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Logo from "@/components/Logo";
import VaranasiSkyline from "@/components/VaranasiSkyline";

export default function Footer() {
  return (
    <footer className="bg-[#050D1B] text-slate-300 relative border-t-4 border-amber-500 overflow-hidden">
      {/* Card Ribbon Feature Badges Bar */}
      <div className="bg-[#08152B] border-b border-amber-500/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {/* 1. Local & Outstation */}
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-amber-500/20 hover:border-amber-400/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border-2 border-amber-400 flex items-center justify-center text-amber-400 mb-2.5 shadow-lg shadow-amber-500/10">
                <Map className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-xs sm:text-sm">Local & Outstation</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Tour Packages</p>
            </div>

            {/* 2. Comfortable & Safe */}
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-amber-500/20 hover:border-amber-400/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border-2 border-amber-400 flex items-center justify-center text-amber-400 mb-2.5 shadow-lg shadow-amber-500/10">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-xs sm:text-sm">Comfortable & Safe</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Sanitized AC Rides</p>
            </div>

            {/* 3. Reliable Service */}
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-amber-500/20 hover:border-amber-400/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border-2 border-amber-400 flex items-center justify-center text-amber-400 mb-2.5 shadow-lg shadow-amber-500/10">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-xs sm:text-sm">Reliable Service</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Verified Local Chauffeurs</p>
            </div>

            {/* 4. 24/7 Support */}
            <div className="flex flex-col items-center p-3 rounded-2xl bg-white/5 border border-amber-500/20 hover:border-amber-400/50 transition-colors">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border-2 border-amber-400 flex items-center justify-center text-amber-400 mb-2.5 shadow-lg shadow-amber-500/10">
                <Headphones className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-white text-xs sm:text-sm">24/7 Support</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Direct Owner Contact</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Body with Business Card Artwork */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          {/* Brand & Utkarsh Singh Credentials */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="light" />

            <p className="text-xs text-slate-300 leading-relaxed pt-2">
              Utkarsh Travels is Varanasi’s premier spiritual pilgrimage and intercity cab service, dedicated to providing dependable, air-conditioned sacred yatras across Uttar Pradesh and Bihar.
            </p>

            {/* Business Card Box */}
            <div className="bg-[#0A1A36] p-4 rounded-2xl border border-amber-500/30 space-y-2.5 text-xs">
              <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm border-b border-slate-700/60 pb-2">
                <span>{siteConfig.founder}</span>
                <span className="text-slate-500 font-normal text-xs">• Tour Coordinator</span>
              </div>

              <div className="flex items-start space-x-2 text-slate-300">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address.street}, {siteConfig.address.locality}, UP - {siteConfig.address.postalCode}</span>
              </div>

              <div className="flex items-center space-x-2 text-slate-300">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-amber-400 font-bold tracking-wide">
                  {siteConfig.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center space-x-2 text-slate-300">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-amber-400">
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Pilgrimage Circuits Internal SEO Links */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-2">
              Pilgrimage Tour Circuits
            </h3>
            <ul className="space-y-2 text-xs">
              {routesData.map((route) => (
                <li key={route.slug}>
                  <Link
                    href={`/${route.slug}`}
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center justify-between group"
                  >
                    <span className="group-hover:translate-x-0.5 transition-transform">{route.name}</span>
                    <span className="font-mono text-amber-400/90 text-[11px]">
                      ₹{route.pricing.dzire.toLocaleString("en-IN")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet Lineup */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-2">
              Vehicle Fleet
            </h3>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>Swift Dzire (Sedan)</li>
              <li>Maruti Ertiga (MUV)</li>
              <li>Toyota Innova Crysta</li>
              <li>Maharaja Tempo Traveller (15S)</li>
              <li>Force Urbania (16S Luxury)</li>
              <li>Tempo Traveller (17S &amp; 20S)</li>
              <li>Tempo Traveller (26S High-Roof)</li>
              <li>35-Seater Tourist Mini Bus</li>
              <li>49-Seater Luxury Tourist Coach</li>
            </ul>
          </div>

          {/* Golden Varanasi Skyline & Slogan */}
          <div className="lg:col-span-3 space-y-4 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-bold text-amber-400 uppercase tracking-widest border-b border-slate-800 pb-2">
                Spiritual Varanasi
              </h3>
              <p className="text-xs font-serif italic text-amber-200/90 mt-2">
                &ldquo;{siteConfig.motto}&rdquo;
              </p>
            </div>

            {/* Golden Temple Artwork */}
            <div className="pt-2 flex justify-center lg:justify-start">
              <VaranasiSkyline className="w-56 h-24" color="#F59E0B" />
            </div>

            <a
              href={getWhatsAppUrl({})}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-500" />
              <span>Instant WhatsApp Booking</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Utkarsh Travels Varanasi. Managed by {siteConfig.founder}.</p>
          <div className="flex items-center space-x-6 text-xs">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              Home
            </Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors">
              Contact Us
            </Link>
            <a href={`${siteConfig.domain}/sitemap.xml`} className="hover:text-amber-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import { Users, Briefcase, Wind, Check, MessageCircle, Star } from "lucide-react";
import { getAllVehicles } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import siteConfig from "@/data/site.json";

export default function FleetShowcase() {
  const vehicles = getAllVehicles();

  return (
    <section id="fleet" className="py-16 sm:py-24 bg-[#071326] relative border-t-2 border-amber-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Chilled AC Fleet & Luxury Tourist Coaches</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-4 font-serif">
            Our Verified Vehicle Fleet
          </h2>
          <p className="text-slate-300 mt-4 text-base sm:text-lg">
            From comfortable Dzire sedans for couple darshan to luxury Toyota Innova Crysta, Force Urbania, Tempo Travellers (17S, 20S, 26S), and 35S &amp; 49S Tourist Coaches for large pilgrimage groups.
          </p>
        </div>

        {/* Business Card Fleet Lineup Banner Feature */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0B1E3D] via-[#0E2852] to-[#0B1E3D] border-2 border-amber-500/40 shadow-2xl relative overflow-hidden">
          <div className="max-w-xl relative z-10 space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Official Fleet Lineup • Mehmoorganj, Varanasi
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-serif">
              All Vehicles Sanitized &amp; Available 24/7
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Clean, chilled AC, commercial tourist registration, and polite background-checked chauffeurs for your family&apos;s peace of mind.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-amber-500/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-amber-200">
              <span>✓ Swift Dzire</span>
              <span>✓ Maruti Ertiga</span>
              <span>✓ Innova Crysta</span>
              <span>✓ Force Urbania (16S)</span>
              <span>✓ Tempo Traveller (17S, 20S, 26S)</span>
              <span>✓ Mini Bus (35S) &amp; Coach (49S)</span>
            </div>

            <a
              href={`tel:${siteConfig.phone}`}
              className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md transition-all"
            >
              Call Chauffeur Desk: {siteConfig.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((v) => {
            const whatsappUrl = getWhatsAppUrl({
              vehicleName: v.name,
              customMessage: `Hello Utkarsh Singh (Utkarsh Travels), I want to hire the ${v.name} (${v.category}) from Varanasi for our upcoming tour. Please share tariff and availability.`,
            });

            return (
              <div
                key={v.id}
                className="bg-[#0A1931] border-2 border-slate-700/80 hover:border-amber-400 rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group"
              >
                <div>
                  {/* Vehicle Image */}
                  <div className="h-48 w-full relative bg-slate-900 overflow-hidden">
                    {v.image && (
                      <Image
                        src={v.image}
                        alt={v.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    <div className="absolute top-3 left-3 bg-[#0A1931]/90 backdrop-blur-md px-3 py-1 rounded-full border border-amber-500/40 text-[11px] font-bold text-amber-300 uppercase tracking-wider">
                      {v.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-xs text-sky-300 flex items-center space-x-1">
                      <Wind className="w-3.5 h-3.5 text-sky-400" />
                      <span>Chilled AC</span>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Title & Short description */}
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors font-serif">
                      {v.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                      {v.description}
                    </p>

                    {/* Capacity Specs */}
                    <div className="mt-4 py-3 px-4 rounded-2xl bg-[#050D1B] border border-amber-500/20 space-y-2 text-xs">
                      <div className="flex items-center justify-between text-slate-200">
                        <span className="flex items-center space-x-2 text-slate-400">
                          <Users className="w-4 h-4 text-amber-400" />
                          <span>Passenger Seating</span>
                        </span>
                        <span className="font-bold text-white">{v.seating}</span>
                      </div>
                      <div className="flex items-center justify-between text-slate-200">
                        <span className="flex items-center space-x-2 text-slate-400">
                          <Briefcase className="w-4 h-4 text-amber-400" />
                          <span>Luggage Capacity</span>
                        </span>
                        <span className="font-semibold text-amber-300 truncate max-w-[140px]">{v.luggage}</span>
                      </div>
                    </div>

                    {/* Feature Checklist */}
                    <div className="mt-4 space-y-1.5">
                      {v.features.slice(0, 4).map((feat, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Booking CTA Button */}
                <div className="p-6 pt-0">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-500" />
                    <span>Inquire About {v.shortName}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

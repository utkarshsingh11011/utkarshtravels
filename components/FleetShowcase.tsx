import { Users, Briefcase, Wind, Check, MessageCircle } from "lucide-react";
import { getAllVehicles } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export default function FleetShowcase() {
  const vehicles = getAllVehicles();

  return (
    <section id="fleet" className="py-16 sm:py-24 bg-slate-900/60 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">
            Premium Fleet & Group Transport
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-4">
            Well-Maintained Cabs & Coaches in Varanasi
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            From comfortable sedans for couples to luxury Force Urbanias and tourist buses for pilgrimage congregations, explore our fully-insured and sanitised vehicle options.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((v) => {
            const whatsappUrl = getWhatsAppUrl({
              vehicleName: v.name,
              customMessage: `Hello Utkarsh Travels, I am interested in hiring the ${v.name} (${v.category}) for our upcoming tour from Varanasi. Please let me know rates and availability.`,
            });

            return (
              <div
                key={v.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-700 transition-all hover:shadow-2xl hover:shadow-amber-500/5 group"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
                      {v.category}
                    </span>
                    <span className="flex items-center space-x-1 text-xs text-sky-400">
                      <Wind className="w-3.5 h-3.5" />
                      <span>Chilled AC</span>
                    </span>
                  </div>

                  {/* Title & Short description */}
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {v.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                    {v.description}
                  </p>

                  {/* Capacities */}
                  <div className="mt-5 py-3 px-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2 text-xs">
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center space-x-2 text-slate-400">
                        <Users className="w-4 h-4 text-amber-400" />
                        <span>Seating</span>
                      </span>
                      <span className="font-semibold text-white">{v.seating}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="flex items-center space-x-2 text-slate-400">
                        <Briefcase className="w-4 h-4 text-amber-400" />
                        <span>Luggage Space</span>
                      </span>
                      <span className="font-semibold text-white truncate max-w-[150px]">{v.luggage}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-5 space-y-1.5">
                    {v.features.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking CTA */}
                <div className="mt-6 pt-5 border-t border-slate-800">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-emerald-600 text-slate-200 hover:text-white font-medium text-xs transition-all shadow-md group-hover:bg-emerald-600 group-hover:text-white"
                  >
                    <MessageCircle className="w-4 h-4" />
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

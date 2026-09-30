import { Users, Briefcase, MessageCircle, CheckCircle, Info } from "lucide-react";
import { RouteItem, getAllVehicles, formatINR } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import siteConfig from "@/data/site.json";

interface RateCardProps {
  route: RouteItem;
}

export default function RateCard({ route }: RateCardProps) {
  const vehicles = getAllVehicles();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl" id="rates">
      {/* Rate Card Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 p-6 sm:p-8 border-b border-slate-800">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-2">
              Verified Tariffs • No Hidden Costs
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Official Rate Card: {route.name}
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Package Type: <span className="text-slate-200 font-medium">{route.packageType}</span> | Distance:{" "}
              <span className="text-slate-200 font-medium">{route.distance}</span>
            </p>
          </div>
          <div className="text-left md:text-right">
            <span className="text-xs text-slate-400 uppercase tracking-wider block">Starting From</span>
            <span className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">
              {formatINR(route.pricing.dzire)}
            </span>
            <span className="text-xs text-slate-400 block mt-0.5">AC Sedan (Dzire)</span>
          </div>
        </div>
      </div>

      {/* Desktop & Tablet Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-950/70 border-b border-slate-800 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              <th className="py-4 px-6">Vehicle Model</th>
              <th className="py-4 px-6">Category</th>
              <th className="py-4 px-6">Seating</th>
              <th className="py-4 px-6">Luggage</th>
              <th className="py-4 px-6 text-right">Fixed Fare (INR)</th>
              <th className="py-4 px-6 text-center">Instant Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/80 text-sm">
            {vehicles.map((vehicle) => {
              const fare = route.pricing[vehicle.id];
              if (fare === undefined) return null;

              const whatsappUrl = getWhatsAppUrl({
                slug: route.slug,
                routeName: route.name,
                packageType: route.packageType,
                vehicleName: vehicle.name,
                price: fare,
              });

              const isPopular = vehicle.id === "dzire" || vehicle.id === "innovaCrysta";

              return (
                <tr
                  key={vehicle.id}
                  className={`hover:bg-slate-800/50 transition-colors ${
                    isPopular ? "bg-slate-850/40" : ""
                  }`}
                >
                  <td className="py-4 px-6">
                    <div className="font-semibold text-white flex items-center space-x-2">
                      <span>{vehicle.name}</span>
                      {isPopular && (
                        <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{vehicle.idealFor}</div>
                  </td>
                  <td className="py-4 px-6 text-slate-300">{vehicle.category}</td>
                  <td className="py-4 px-6 text-slate-300">
                    <span className="inline-flex items-center space-x-1.5">
                      <Users className="w-4 h-4 text-slate-400" />
                      <span>{vehicle.seating}</span>
                    </span>
                  </td>
                  <td className="py-4 px-6 text-slate-300">
                    <span className="inline-flex items-center space-x-1.5 text-xs">
                      <Briefcase className="w-4 h-4 text-slate-400" />
                      <span>{vehicle.luggage}</span>
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-xl font-bold text-amber-400 font-mono">
                      {formatINR(fare)}
                    </span>
                    <span className="block text-[11px] text-slate-400">Total Route Fare</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Book on WhatsApp</span>
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Card View */}
      <div className="lg:hidden p-4 space-y-3.5">
        {vehicles.map((vehicle) => {
          const fare = route.pricing[vehicle.id];
          if (fare === undefined) return null;

          const whatsappUrl = getWhatsAppUrl({
            slug: route.slug,
            routeName: route.name,
            packageType: route.packageType,
            vehicleName: vehicle.name,
            price: fare,
          });

          const isPopular = vehicle.id === "dzire" || vehicle.id === "innovaCrysta";

          return (
            <div
              key={vehicle.id}
              className={`p-4 rounded-2xl border ${
                isPopular
                  ? "bg-slate-800/80 border-amber-500/40 shadow-lg shadow-amber-500/5"
                  : "bg-slate-900 border-slate-800"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <h4 className="font-bold text-white text-base">{vehicle.name}</h4>
                    {isPopular && (
                      <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full font-medium">
                        Popular
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-slate-400">{vehicle.category} • AC Cab</span>
                </div>
                <div className="text-right">
                  <span className="text-xl font-extrabold text-amber-400 font-mono">
                    {formatINR(fare)}
                  </span>
                  <span className="block text-[10px] text-slate-400">Total Fare</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-800 grid grid-cols-2 gap-2 text-xs text-slate-300">
                <div className="flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{vehicle.seating}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{vehicle.luggage}</span>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-semibold text-xs shadow-md shadow-emerald-600/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book {vehicle.shortName} on WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Inclusions & Policies Footer */}
      <div className="bg-slate-950 p-6 border-t border-slate-800 text-xs text-slate-400 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="font-semibold text-slate-200 flex items-center space-x-1.5 mb-2">
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Package Inclusions:</span>
            </span>
            <ul className="space-y-1 pl-5 list-disc text-slate-400">
              {siteConfig.inclusions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-semibold text-slate-200 flex items-center space-x-1.5 mb-2">
              <Info className="w-4 h-4 text-amber-400" />
              <span>Exclusions & Notes:</span>
            </span>
            <ul className="space-y-1 pl-5 list-disc text-slate-400">
              {siteConfig.exclusions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
              <li>Night journey surcharge applicable for pickups between 11:00 PM and 5:00 AM.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

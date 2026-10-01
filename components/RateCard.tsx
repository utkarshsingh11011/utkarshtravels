import Image from "next/image";
import { Users, Briefcase, MessageCircle, CheckCircle, Info, Wind } from "lucide-react";
import { RouteItem, getAllVehicles, formatINR } from "@/lib/data";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import siteConfig from "@/data/site.json";

interface RateCardProps {
  route: RouteItem;
}

export default function RateCard({ route }: RateCardProps) {
  const vehicles = getAllVehicles();

  return (
    <div className="bg-white border-2 border-amber-400/60 rounded-3xl overflow-hidden shadow-xl" id="rates">
      {/* Rate Card Header */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 p-6 sm:p-8 border-b-2 border-amber-400/40">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-400/60 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              Verified Tariffs • Utkarsh Travels Varanasi
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight font-serif">
              Official Rate Card: {route.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Package Type: <span className="text-amber-800 font-semibold">{route.packageType}</span> | Distance:{" "}
              <span className="text-slate-900 font-medium">{route.distance}</span>
            </p>
          </div>
          <div className="text-left md:text-right bg-white p-4 rounded-2xl border border-amber-400/40 shadow-sm">
            <span className="text-[11px] text-slate-600 uppercase tracking-widest block font-semibold">
              Starting From
            </span>
            <span className="text-3xl sm:text-4xl font-black text-amber-700 font-mono">
              {formatINR(route.pricing.dzire)}
            </span>
            <span className="text-[11px] text-slate-600 block mt-0.5">AC Sedan (Dzire)</span>
          </div>
        </div>
      </div>

      {/* Desktop & Tablet Table View */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 border-b border-amber-400/40 text-xs font-bold text-amber-900 uppercase tracking-wider">
              <th className="py-4 px-6">Vehicle & Specs</th>
              <th className="py-4 px-4">Category</th>
              <th className="py-4 px-4">Seating</th>
              <th className="py-4 px-4">Luggage</th>
              <th className="py-4 px-6 text-right">Fixed Tariff</th>
              <th className="py-4 px-6 text-center">Instant Booking</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm">
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
                  className={`hover:bg-amber-50/80 transition-colors ${
                    isPopular ? "bg-amber-50/50" : ""
                  }`}
                >
                  <td className="py-4 px-6">
                    <div className="flex items-center space-x-3.5">
                      {vehicle.image && (
                        <div className="w-16 h-12 rounded-xl overflow-hidden relative shrink-0 border border-amber-400/40">
                          <Image
                            src={vehicle.image}
                            alt={vehicle.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <div className="font-bold text-slate-900 flex items-center space-x-2">
                          <span>{vehicle.name}</span>
                          {isPopular && (
                            <span className="text-[10px] bg-amber-400 text-slate-950 font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                              Recommended
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-500 mt-0.5">{vehicle.idealFor}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-slate-800">
                    <span className="px-2.5 py-1 rounded-lg bg-slate-100 text-xs font-medium text-amber-900 border border-slate-300">
                      {vehicle.category}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-800">
                    <span className="inline-flex items-center space-x-1.5 font-medium">
                      <Users className="w-4 h-4 text-amber-600" />
                      <span>{vehicle.seating}</span>
                    </span>
                  </td>
                  <td className="py-4 px-4 text-slate-800">
                    <span className="inline-flex items-center space-x-1.5 text-xs text-slate-600">
                      <Briefcase className="w-4 h-4 text-amber-600" />
                      <span>{vehicle.luggage}</span>
                    </span>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <span className="text-2xl font-black text-amber-700 font-mono">
                      {formatINR(fare)}
                    </span>
                    <span className="block text-[11px] text-slate-500">All-Inclusive Fuel</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white text-emerald-600" />
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
      <div className="lg:hidden p-4 space-y-4">
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
              className={`p-4 rounded-2xl border-2 ${
                isPopular
                  ? "bg-amber-50/60 border-amber-400 shadow-md"
                  : "bg-slate-50 border-slate-200"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center space-x-3">
                  {vehicle.image && (
                    <div className="w-16 h-12 rounded-xl overflow-hidden relative shrink-0 border border-amber-400/40">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <div className="flex items-center space-x-1.5">
                      <h4 className="font-bold text-slate-900 text-base">{vehicle.name}</h4>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-amber-900 mt-0.5">
                      <span>{vehicle.category}</span>
                      <span>•</span>
                      <span className="flex items-center space-x-1 text-sky-700">
                        <Wind className="w-3 h-3" />
                        <span>Chilled AC</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <span className="text-xl font-black text-amber-700 font-mono">
                    {formatINR(fare)}
                  </span>
                  <span className="block text-[10px] text-slate-500">Total Route Fare</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-200 grid grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center space-x-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{vehicle.seating}</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span className="truncate">{vehicle.luggage}</span>
                </div>
              </div>

              <div className="mt-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-xs shadow-md shadow-emerald-600/20"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                  <span>Book {vehicle.shortName} on WhatsApp</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Inclusions & Policies Footer */}
      <div className="bg-slate-50 p-6 border-t-2 border-amber-400/40 text-xs text-slate-700 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <span className="font-bold text-amber-950 flex items-center space-x-1.5 mb-2 text-sm">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>Standard Package Inclusions:</span>
            </span>
            <ul className="space-y-1.5 pl-5 list-disc text-slate-700">
              {siteConfig.inclusions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-bold text-amber-950 flex items-center space-x-1.5 mb-2 text-sm">
              <Info className="w-4 h-4 text-amber-600" />
              <span>Exclusions & Notes:</span>
            </span>
            <ul className="space-y-1.5 pl-5 list-disc text-slate-700">
              {siteConfig.exclusions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
              <li>Night travel surcharge applies for pickups between 11:00 PM and 5:00 AM.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

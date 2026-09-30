import Link from "next/link";
import { ArrowLeft, Compass, Phone } from "lucide-react";
import routesData from "@/data/routes.json";
import siteConfig from "@/data/site.json";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full text-center space-y-8 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
          <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: "12s" }} />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
            Error 404
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Page or Route Not Found
          </h1>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            The page you are looking for may have moved or does not exist. Explore our popular spiritual taxi routes below.
          </p>
        </div>

        {/* Popular Route Links */}
        <div className="pt-4 border-t border-slate-800 text-left">
          <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
            Popular Tour Destinations from Varanasi:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {routesData.map((route) => (
              <Link
                key={route.slug}
                href={`/${route.slug}`}
                className="p-3 rounded-xl bg-slate-950/80 hover:bg-slate-800 border border-slate-800/80 text-xs font-medium text-slate-300 hover:text-amber-400 flex items-center justify-between transition-colors"
              >
                <span>{route.name}</span>
                <span className="font-mono text-amber-400">
                  ₹{route.pricing.dzire.toLocaleString("en-IN")}
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <a
            href={`tel:${siteConfig.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-amber-500/20"
          >
            <Phone className="w-4 h-4" />
            <span>Call Operator</span>
          </a>
        </div>
      </div>
    </div>
  );
}

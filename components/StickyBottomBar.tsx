"use client";

import { Phone, MessageCircle } from "lucide-react";
import siteConfig from "@/data/site.json";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface StickyBottomBarProps {
  slug?: string;
  routeName?: string;
  packageType?: string;
}

export default function StickyBottomBar({ slug, routeName, packageType }: StickyBottomBarProps) {
  const whatsappUrl = getWhatsAppUrl({ slug, routeName, packageType });

  return (
    <aside aria-label="Mobile Contact Bar" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t-2 border-amber-400/60 p-2.5 md:hidden shadow-xl backdrop-blur-md">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-900 text-white font-semibold text-xs border border-amber-400/40 active:bg-slate-800 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call Chauffeur</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 active:from-emerald-700 active:to-emerald-800 text-white font-bold text-xs shadow-md shadow-emerald-600/20 transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
          <span>WhatsApp Fare</span>
        </a>
      </div>
    </aside>
  );
}

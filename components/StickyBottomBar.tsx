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
    <aside aria-label="Mobile Contact Bar" className="fixed bottom-0 left-0 right-0 z-40 bg-[#071326]/98 border-t-2 border-amber-500/40 p-2.5 md:hidden shadow-2xl backdrop-blur-md">
      <div className="grid grid-cols-2 gap-2.5">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-800 text-white font-semibold text-xs border border-slate-700 active:bg-slate-700 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call Chauffeur</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 active:from-amber-600 active:to-amber-700 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/30 transition-colors"
        >
          <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-500" />
          <span>WhatsApp Fare</span>
        </a>
      </div>
    </aside>
  );
}

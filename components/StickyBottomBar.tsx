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
    <aside aria-label="Mobile Contact Bar" className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900/98 border-t border-slate-800 p-2.5 md:hidden shadow-2xl backdrop-blur-md">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-slate-800 text-white font-medium text-sm border border-slate-700 active:bg-slate-700 transition-colors"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call Operator</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-semibold text-sm shadow-lg shadow-emerald-600/30 transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp Fare</span>
        </a>
      </div>
    </aside>
  );
}

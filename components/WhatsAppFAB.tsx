"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

interface WhatsAppFABProps {
  slug?: string;
  routeName?: string;
  packageType?: string;
}

export default function WhatsAppFAB({ slug, routeName, packageType }: WhatsAppFABProps) {
  const url = getWhatsAppUrl({ slug, routeName, packageType });

  return (
    <aside aria-label="WhatsApp Contact" className="fixed bottom-20 md:bottom-8 right-5 z-40">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book on WhatsApp with Utkarsh Travels"
        className="group relative flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl shadow-emerald-500/40 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
      >
        {/* Pulsing beacon ping effect */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-30 group-hover:opacity-50 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 relative z-10 transition-transform group-hover:rotate-6" />

        {/* Hover label for desktop */}
        <span className="absolute right-16 px-3 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block border border-slate-700">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}

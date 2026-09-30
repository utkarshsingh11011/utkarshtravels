"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock, Sparkles, Award } from "lucide-react";
import siteConfig from "@/data/site.json";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [responseUrls, setResponseUrls] = useState<{ whatsappUrl?: string; mailtoUrl?: string }>({});
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    travelDate: "",
    destination: "Varanasi to Ayodhya",
    passengers: "1-4 (Sedan)",
    vehiclePreference: "Swift Dzire (4S)",
    pickupLocation: "Hotel / Varanasi Cantt",
    message: "",
    honeypot: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setResponseUrls({
        whatsappUrl: data.whatsappUrl,
        mailtoUrl: data.mailtoUrl,
      });
      setSubmitted(true);

      // Automatically trigger WhatsApp direct send
      if (data.whatsappUrl) {
        window.open(data.whatsappUrl, "_blank");
      }
    } catch (err) {
      console.error("Form error:", err);
      // Fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const directWhatsAppInquiry = () => {
    const text = `*NEW TOUR INQUIRY - UTKARSH TRAVELS*\n\n*Name:* ${formData.name || "Traveler"}\n*Phone:* ${formData.phone || "Not provided"}\n*Travel Date:* ${formData.travelDate || "Flexible"}\n*Destination:* ${formData.destination}\n*Group Size:* ${formData.passengers}\n*Vehicle:* ${formData.vehiclePreference}\n*Pickup:* ${formData.pickupLocation}\n*Notes:* ${formData.message || "None"}\n\nPlease share availability and quote.`;
    window.open(`https://wa.me/919648974238?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="bg-[#FAF8F5] text-slate-900 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumbs items={[{ name: "Contact & Custom Quote", url: "/contact" }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Direct Coordinator Access</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1931] tracking-tight mt-3 font-serif">
            Contact Utkarsh Travels
          </h1>
          <p className="text-slate-600 mt-3 text-base sm:text-lg">
            Plan a tailored pilgrimage circuit, book luxury group coaches, or request instant taxi dispatch in Varanasi. Inquiries are routed immediately to <strong className="text-slate-900 font-bold">{siteConfig.founder}</strong> on WhatsApp and email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Business Card & NAP */}
          <div className="lg:col-span-5 space-y-6">
            {/* Business Card Visual Showcase */}
            <div className="bg-[#0A1931] text-white p-6 rounded-3xl border-2 border-amber-500/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-amber-500/30 pb-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <Award className="w-4 h-4" />
                  <span>Official Business Card</span>
                </span>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                  Verified Contact
                </span>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 aspect-[512/307]">
                <Image
                  src="/images/business-card.png"
                  alt="Utkarsh Travels Business Card"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Verified Contact Details */}
              <div className="pt-2 space-y-3 text-xs">
                <div className="flex items-start space-x-3 text-slate-200">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block text-sm">{siteConfig.founder} — Utkarsh Travels</strong>
                    <span className="text-slate-400">
                      {siteConfig.address.street}, {siteConfig.address.locality}, UP - {siteConfig.address.postalCode}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-slate-200">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Primary Phone &amp; WhatsApp:</span>
                    <a href={`tel:${siteConfig.phone}`} className="font-bold text-amber-400 text-sm hover:underline">
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-slate-200">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-slate-400 block text-[11px]">Inquiry Email:</span>
                    <a href={`mailto:${siteConfig.email}`} className="text-amber-300 hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 pt-2 border-t border-slate-800 text-slate-400">
                  <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                  <span>{siteConfig.hours}</span>
                </div>
              </div>
            </div>

            {/* Embedded Google Map */}
            <div className="bg-white border-2 border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-100 flex items-center justify-between">
                <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                  Office Location — Mehmoorganj, Varanasi
                </h3>
              </div>
              <div className="aspect-video w-full">
                <iframe
                  title="Utkarsh Travels Mehmoorganj Varanasi Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14429.083437559132!2d82.9739!3d25.3076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2de266ab0e55%3A0x673cecbce5a210ef!2sMahmoorganj%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711800000000!5m2!1sen!2sin"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white border-2 border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
            {submitted ? (
              <div className="text-center py-10 space-y-5">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-black text-[#0A1931] font-serif">Inquiry Dispatched Successfully!</h2>
                <div className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed space-y-2">
                  <p>
                    Your requirements have been sent to <strong>Utkarsh Singh</strong>. A copy has been routed to <strong>{siteConfig.email}</strong>.
                  </p>
                  <p className="text-xs text-amber-700 font-semibold bg-amber-50 p-3 rounded-xl border border-amber-200">
                    For priority response, your WhatsApp chat has been prepared with your booking ticket.
                  </p>
                </div>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={directWhatsAppInquiry}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/25 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-slate-950 text-amber-500" />
                    <span>Open WhatsApp Chat (+91 9648974238)</span>
                  </button>

                  {responseUrls.mailtoUrl && (
                    <a
                      href={responseUrls.mailtoUrl}
                      className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-5 py-3.5 rounded-2xl bg-slate-800 text-white font-semibold text-xs transition-colors"
                    >
                      <Mail className="w-4 h-4 text-amber-400" />
                      <span>Send via Email Client</span>
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h2 className="text-2xl font-black text-[#0A1931] font-serif">
                    Request a Customized Pilgrimage Tour Quote
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    Fill in your tour preferences below. You will receive an instant quote from Utkarsh Singh.
                  </p>
                </div>

                {/* Honeypot anti-spam trap */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Expected Travel Date
                    </label>
                    <input
                      type="date"
                      value={formData.travelDate}
                      onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Destination / Pilgrimage Route
                    </label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                    >
                      <option value="Varanasi to Ayodhya">Varanasi to Ayodhya (Ram Mandir)</option>
                      <option value="Varanasi to Prayagraj">Varanasi to Prayagraj (Sangam)</option>
                      <option value="Varanasi to Vindhyachal">Varanasi to Vindhyachal (Maa Vindhyavasini)</option>
                      <option value="VNS – Vindhyachal – Prayagraj">VNS – Vindhyachal – Prayagraj Combo</option>
                      <option value="Varanasi to Gaya & Bodh Gaya">Varanasi to Gaya & Bodh Gaya</option>
                      <option value="3-Day Grand Pilgrimage Circuit">3-Day Prayagraj-Chitrakoot-Ayodhya</option>
                      <option value="Custom Multi-City Package">Custom Multi-City Spiritual Package</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Number of Passengers
                    </label>
                    <select
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                    >
                      <option value="1-4 (Sedan)">1 to 4 Passengers (Sedan)</option>
                      <option value="5-7 (MUV/SUV)">5 to 7 Passengers (Ertiga / Innova)</option>
                      <option value="8-16 (Force Urbania)">8 to 16 Passengers (Force Urbania 16S)</option>
                      <option value="17-20 (Tempo Traveller)">17 to 20 Passengers (Tempo Traveller)</option>
                      <option value="21-26 (Tempo Traveller)">21 to 26 Passengers (26S Tempo Traveller)</option>
                      <option value="27-35 (Mini Bus)">27 to 35 Passengers (Tourist Mini Bus)</option>
                      <option value="36-49 (Coach)">36 to 49 Passengers (49S Luxury Tourist Coach)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Preferred Vehicle Model
                    </label>
                    <select
                      value={formData.vehiclePreference}
                      onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                    >
                      <option value="Swift Dzire (4S)">Swift Dzire (4S AC Sedan)</option>
                      <option value="Maruti Ertiga (6S)">Maruti Ertiga (6S AC MUV)</option>
                      <option value="Toyota Innova Crysta (7S)">Toyota Innova Crysta (Premium SUV)</option>
                      <option value="Force Urbania (16S)">Force Urbania (16S Luxury Van)</option>
                      <option value="Tempo Traveller 17S">Tempo Traveller (17 Seater)</option>
                      <option value="Tempo Traveller 20S">Tempo Traveller (20 Seater)</option>
                      <option value="Tempo Traveller 26S">Tempo Traveller (26 Seater)</option>
                      <option value="35 Seater Mini Bus">35-Seater Tourist Mini Bus</option>
                      <option value="49 Seater Coach">49-Seater Luxury Tourist Coach</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Pickup Location in Varanasi
                  </label>
                  <input
                    type="text"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    placeholder="e.g. Hotel in Godowlia, Varanasi Cantt, Babatpur Airport (VNS)"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Special Requests / Trip Notes
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Senior citizens, wheelchair assistance, train/flight timings, or special darshan preferences..."
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl p-4 text-sm text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-colors"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto flex-1 flex items-center justify-center space-x-2 py-4 px-6 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 text-slate-950 font-black text-sm transition-all shadow-xl shadow-amber-500/25 disabled:opacity-50"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? "Sending..." : "Submit Inquiry to Utkarsh Singh"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={directWhatsAppInquiry}
                    className="w-full sm:w-auto flex items-center justify-center space-x-2 py-4 px-6 rounded-2xl bg-[#0A1931] hover:bg-[#071326] text-white font-bold text-xs transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-amber-400" />
                    <span>Direct WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

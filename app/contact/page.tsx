"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2, Clock } from "lucide-react";
import siteConfig from "@/data/site.json";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    travelDate: "",
    destination: "Ayodhya",
    passengers: "4",
    vehiclePreference: "Swift Dzire (4S)",
    message: "",
    honeypot: "", // anti-spam bot trap
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.honeypot) {
      return;
    }

    setSubmitted(true);
  };

  const directWhatsAppInquiry = () => {
    const text = `Hello Utkarsh Travels,\n\nName: ${formData.name || "Traveler"}\nPhone: ${formData.phone || "Not provided"}\nTravel Date: ${formData.travelDate || "Flexible"}\nDestination: ${formData.destination}\nGroup Size: ${formData.passengers} passengers\nPreferred Vehicle: ${formData.vehiclePreference}\nSpecial Notes: ${formData.message || "None"}\n\nPlease provide a customized quote and cab availability.`;
    window.open(`https://wa.me/919648974238?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <div className="py-6 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      <Breadcrumbs items={[{ name: "Contact & Custom Quote", url: "/contact" }]} />

      <div className="text-center max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">
          Varanasi Booking Desk
        </span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mt-4">
          Contact Utkarsh Travels
        </h1>
        <p className="text-slate-400 mt-3 text-base sm:text-lg">
          Plan a personalized pilgrimage circuit, multi-day family tour, or group coach rental from Varanasi. Reach us directly or submit your requirements below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: NAP & Map */}
        <div className="lg:col-span-5 space-y-6">
          {/* NAP Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            <h2 className="text-xl font-bold text-white border-b border-slate-800 pb-3">
              Office Details & Contacts
            </h2>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <strong className="text-white block">Utkarsh Travels</strong>
                  <span className="text-slate-400 text-xs">
                    {siteConfig.address.street}, {siteConfig.address.locality}
                    <br />
                    {siteConfig.address.region} - {siteConfig.address.postalCode}, India
                  </span>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0 border border-amber-500/20">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <strong className="text-white block">Call Directly</strong>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-amber-400 hover:text-amber-300 font-medium text-xs"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                  <MessageCircle className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <strong className="text-white block">WhatsApp Booking</strong>
                  <a
                    href={getWhatsAppUrl({ slug: "contact" })}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 font-medium text-xs"
                  >
                    Chat with Booking Desk
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 flex items-center justify-center shrink-0 border border-sky-500/20">
                  <Mail className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <strong className="text-white block">Email Inquiries</strong>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sky-400 hover:text-sky-300 font-medium text-xs"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3.5 pt-2 border-t border-slate-800">
                <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <strong className="text-white block text-xs">Operating Hours</strong>
                  <span className="text-slate-400 text-xs">24 Hours / 7 Days a week</span>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="p-4 border-b border-slate-800">
              <h3 className="text-sm font-semibold text-white">Google Map Location — Mehmoorganj, Varanasi</h3>
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
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          {submitted ? (
            <div className="text-center py-12 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white">Inquiry Received!</h2>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to Utkarsh Travels. Our trip coordinator will review your requirements and respond shortly.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={directWhatsAppInquiry}
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm shadow-lg shadow-emerald-600/25 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Directly to WhatsApp for Priority Reply</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h2 className="text-2xl font-bold text-white">Request a Custom Tour Quote</h2>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your travel preferences and we will prepare a tailor-made tariff for your group.
                </p>
              </div>

              {/* Anti-spam honeypot (hidden) */}
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
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Sharma"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Expected Travel Date
                  </label>
                  <input
                    type="date"
                    value={formData.travelDate}
                    onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Destination / Route
                  </label>
                  <select
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Ayodhya">Varanasi to Ayodhya</option>
                    <option value="Prayagraj">Varanasi to Prayagraj</option>
                    <option value="Vindhyachal">Varanasi to Vindhyachal</option>
                    <option value="Vindhyachal & Prayagraj Combo">VNS – Vindhyachal – Prayagraj</option>
                    <option value="Gaya & Bodh Gaya">Varanasi to Gaya & Bodh Gaya</option>
                    <option value="3-Day Grand Pilgrimage Circuit">3-Day Prayagraj-Chitrakoot-Ayodhya</option>
                    <option value="Custom Multi-City Itinerary">Custom Multi-City Circuit</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Passenger Count
                  </label>
                  <select
                    value={formData.passengers}
                    onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="1-4">1 to 4 Passengers (Sedan)</option>
                    <option value="5-7">5 to 7 Passengers (MUV / SUV)</option>
                    <option value="8-16">8 to 16 Passengers (Force Urbania)</option>
                    <option value="17-26">17 to 26 Passengers (Tempo Traveller)</option>
                    <option value="27-35">27 to 35+ Passengers (Mini Bus)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                    Preferred Vehicle Type
                  </label>
                  <select
                    value={formData.vehiclePreference}
                    onChange={(e) => setFormData({ ...formData, vehiclePreference: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition-colors"
                  >
                    <option value="Swift Dzire (4S)">Swift Dzire (4 Seater Sedan)</option>
                    <option value="Maruti Ertiga (6S)">Maruti Ertiga (6 Seater MUV)</option>
                    <option value="Toyota Innova Crysta (7S)">Toyota Innova Crysta (Premium SUV)</option>
                    <option value="Force Urbania (16S)">Force Urbania (16S Luxury Van)</option>
                    <option value="Tempo Traveller 17S">Tempo Traveller (17 Seater)</option>
                    <option value="Tempo Traveller 26S">Tempo Traveller (26 Seater)</option>
                    <option value="35 Seater Mini Bus">35 Seater Tourist Mini Bus</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Trip Notes / Special Requests
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your pickup location (e.g. Hotel, Babatpur airport, Varanasi Cantt), elderly members, or custom stops..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="submit"
                  className="w-full sm:w-auto flex-1 flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-colors shadow-lg shadow-amber-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>

                <button
                  type="button"
                  onClick={directWhatsAppInquiry}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-md shadow-emerald-600/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

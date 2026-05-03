/*
 * Design: Montenegrin Trust & Warmth
 * Tour detail page with inquiry form
 */
import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { tours } from "@/data/tours";
import { sendToGoogleSheets } from "@/lib/googleSheets";
import { Clock, Users, MapPin, Check, X, ArrowLeft, Calendar, User, Phone, Send, Languages, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "38268062259";

export default function TourPage() {
  const { language } = useLanguage();
  const isEn = language !== "me";
  const params = useParams();
  const slug = params.slug;
  const tour = tours.find((t) => t.slug === slug);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    persons: "2",
    pickupLocation: "",
    notes: "",
  });

  useEffect(() => {
    if (tour) {
      document.title = tour.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", tour.metaDesc);
    }
  }, [tour]);

  if (!tour) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {isEn ? "Tour not found" : "Tura nije pronađena"}
            </h1>
            <Link href="/ture" className="text-forest underline">
              {isEn ? "Back to all tours" : "Nazad na sve ture"}
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const buildWhatsAppMessage = () => {
    const lines = [
      isEn ? `Hello! I'd like to book the tour:` : `Zdravo! Želim da rezervišem turu:`,
      `🎯 ${isEn ? tour.titleEn : tour.titleMe}`,
      ``,
      `${isEn ? "Name" : "Ime"}: ${formData.name}`,
      `${isEn ? "Phone" : "Telefon"}: ${formData.phone}`,
      `${isEn ? "Date" : "Datum"}: ${formData.date}`,
      `${isEn ? "People" : "Br. osoba"}: ${formData.persons}`,
      `${isEn ? "Pickup" : "Polazak"}: ${formData.pickupLocation}`,
    ];
    if (formData.notes) {
      lines.push(`${isEn ? "Notes" : "Napomene"}: ${formData.notes}`);
    }
    return encodeURIComponent(lines.join("\n"));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendToGoogleSheets({
      tab: "Ture",
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      persons: formData.persons,
      pickupLocation: formData.pickupLocation,
      notes: formData.notes,
      tourName: isEn ? tour.titleEn : tour.titleMe,
      tourSlug: tour.slug,
      page: `Tour: ${tour.slug}`,
      language,
    } as any);
    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const inputClass = "w-full px-3 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:border-gold focus:bg-white/15 transition-colors text-sm";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero with image */}
      <section className="relative h-[50vh] lg:h-[60vh] mt-16 lg:mt-20">
        <div className="absolute inset-0">
          <img src={tour.image} alt={isEn ? tour.titleEn : tour.titleMe} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />
        </div>
        <div className="relative h-full container flex flex-col justify-end pb-8 lg:pb-12">
          <Link href="/ture" className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-4 w-fit">
            <ArrowLeft className="w-4 h-4" />
            {isEn ? "All tours" : "Sve ture"}
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-3xl lg:text-5xl text-white tracking-tight max-w-4xl mb-4"
          >
            {isEn ? tour.titleEn : tour.titleMe}
          </motion.h1>
          <div className="flex flex-wrap gap-4 text-white/85 text-sm">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {isEn ? tour.durationEn : tour.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              {isEn ? tour.groupSizeEn : tour.groupSize}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {tour.startLocation}
            </span>
          </div>
        </div>
      </section>

      {/* Content + Form sticky */}
      <section className="py-12 lg:py-16 bg-warm-white flex-1">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              {/* Description */}
              <div>
                <h2 className="font-display font-bold text-2xl mb-4">
                  {isEn ? "About this tour" : "O ovoj turi"}
                </h2>
                <div className="prose prose-lg max-w-none">
                  {(isEn ? tour.fullDescEn : tour.fullDescMe).split("\n\n").map((p, i) => (
                    <p key={i} className="text-foreground/80 leading-relaxed mb-4">{p}</p>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h2 className="font-display font-bold text-2xl mb-4">
                  {isEn ? "Highlights" : "Posebnosti"}
                </h2>
                <ul className="space-y-2">
                  {(isEn ? tour.highlightsEn : tour.highlightsMe).map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-foreground/80">
                      <Check className="w-5 h-5 text-forest mt-0.5 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Included / Not included */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h3 className="font-display font-bold text-lg mb-3 text-forest">
                    {isEn ? "Included" : "Uključeno"}
                  </h3>
                  <ul className="space-y-2">
                    {(isEn ? tour.includedEn : tour.includedMe).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <Check className="w-4 h-4 text-forest mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card rounded-xl p-5 border border-border">
                  <h3 className="font-display font-bold text-lg mb-3 text-foreground/70">
                    {isEn ? "Not included" : "Nije uključeno"}
                  </h3>
                  <ul className="space-y-2">
                    {(isEn ? tour.notIncludedEn : tour.notIncludedMe).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                        <X className="w-4 h-4 text-foreground/40 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* What to bring */}
              <div className="bg-cream rounded-xl p-5 border border-border">
                <h3 className="font-display font-bold text-lg mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-gold" />
                  {isEn ? "What to bring" : "Šta ponijeti"}
                </h3>
                <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                  {(isEn ? tour.bringEn : tour.bringMe).map((item, i) => (
                    <li key={i} className="text-sm text-foreground/80">• {item}</li>
                  ))}
                </ul>
              </div>

              {/* Guide languages */}
              <div className="bg-forest/5 rounded-xl p-5">
                <h3 className="font-display font-bold text-lg mb-2 flex items-center gap-2">
                  <Languages className="w-5 h-5 text-forest" />
                  {isEn ? "Guide languages" : "Jezici vodiča"}
                </h3>
                <p className="text-sm text-foreground/80">
                  {tour.guideLanguages.join(" • ")}
                </p>
                <p className="text-xs text-foreground/60 mt-2">
                  {isEn ? "Specify your preferred language in the inquiry." : "Navedite željeni jezik u upitu."}
                </p>
              </div>
            </div>

            {/* Sticky inquiry form */}
            <aside>
              <div className="lg:sticky lg:top-24">
                <div className="bg-forest text-white rounded-2xl p-6 lg:p-7 shadow-xl">
                  <div className="mb-5">
                    <div className="text-sm text-white/70">
                      {isEn ? "from" : "od"}
                    </div>
                    <div className="font-display font-bold text-3xl">
                      €{tour.priceFrom}
                      <span className="text-base font-normal text-white/70">
                        /{isEn ? "person" : "osoba"}
                      </span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <label className="text-white/80 text-xs font-medium mb-1 block flex items-center gap-1.5">
                        <User className="w-3 h-3" /> {isEn ? "Name" : "Ime"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                        placeholder={isEn ? "Your name" : "Vaše ime"}
                      />
                    </div>
                    <div>
                      <label className="text-white/80 text-xs font-medium mb-1 block flex items-center gap-1.5">
                        <Phone className="w-3 h-3" /> {isEn ? "Phone" : "Telefon"}
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                        placeholder="+382..."
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-white/80 text-xs font-medium mb-1 block flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" /> {isEn ? "Date" : "Datum"}
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className={`${inputClass} [color-scheme:dark]`}
                        />
                      </div>
                      <div>
                        <label className="text-white/80 text-xs font-medium mb-1 block flex items-center gap-1.5">
                          <Users className="w-3 h-3" /> {isEn ? "People" : "Osoba"}
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="20"
                          required
                          value={formData.persons}
                          onChange={(e) => setFormData({ ...formData, persons: e.target.value })}
                          className={inputClass}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-white/80 text-xs font-medium mb-1 block flex items-center gap-1.5">
                        <MapPin className="w-3 h-3" /> {isEn ? "Pickup location" : "Mjesto polaska"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                        className={inputClass}
                        placeholder={isEn ? "Hotel name, address" : "Hotel, adresa"}
                      />
                    </div>
                    <div>
                      <label className="text-white/80 text-xs font-medium mb-1 block">
                        {isEn ? "Notes (optional)" : "Napomene (opciono)"}
                      </label>
                      <textarea
                        rows={2}
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className={`${inputClass} resize-none`}
                        placeholder={isEn ? "Language, dietary needs, etc." : "Jezik, ishrana, itd."}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gold text-forest font-bold py-3 rounded-lg hover:bg-gold/90 transition-colors flex items-center justify-center gap-2 mt-2"
                    >
                      <Send className="w-4 h-4" />
                      {isEn ? "Send Inquiry" : "Pošalji upit"}
                    </button>

                    <p className="text-xs text-white/60 text-center pt-1">
                      {isEn
                        ? "Response within 30 minutes via WhatsApp"
                        : "Odgovor za 30 minuta putem WhatsApp-a"}
                    </p>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

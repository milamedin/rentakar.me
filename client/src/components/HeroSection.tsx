/*
 * Design: Montenegrin Trust & Warmth
 * Hero: Full-width background image with overlay, tabbed form (Rent a Car / Transfer)
 * Dark overlay on image → white text, gold CTA buttons
 */
import { useState, useMemo, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Car, ArrowRight, MapPin, Calendar, Users, Clock, Plane } from "lucide-react";
import { motion } from "framer-motion";
import { sendToGoogleSheets } from "@/lib/googleSheets";

const HERO_RENT = "/images/locations/perast-hero.jpg";
const HERO_TRANSFER = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316391/F6tufssh9csNoGMxi69exc/hero-transfer-service-8gLcWWgYwxuCvv4tctvqoz.webp";

const WHATSAPP_NUMBER = "38268062259";

const locations = [
  "Podgorica - Aerodrom",
  "Tivat - Aerodrom",
  "Budva",
  "Kotor",
  "Bar",
  "Herceg Novi",
  "Ulcinj",
  "Nikšić",
  "Petrovac",
  "Sveti Stefan",
  "Bečići",
  "Žabljak",
  "Cetinje",
  "Berane",
  "Bijelo Polje",
  "Pljevlja",
];

const OTHER_VALUE = "__other__";

export default function HeroSection() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<"rent" | "transfer">("rent");

  // Custom location inputs
  const [customPickup, setCustomPickup] = useState("");
  const [customDropoff, setCustomDropoff] = useState("");
  const [customFrom, setCustomFrom] = useState("");
  const [customTo, setCustomTo] = useState("");

  const otherLabel = language === "me" ? "Drugo (upišite)" : language === "de" ? "Andere (eingeben)" : language === "fr" ? "Autre (saisir)" : language === "pl" ? "Inne (wpisz)" : language === "tr" ? "Diğer (yazın)" : language === "ru" ? "Другое (введите)" : "Other (type in)";

  // Rent form state
  const [rentForm, setRentForm] = useState({
    pickup: "",
    dropoff: "",
    pickupDate: "",
    dropoffDate: "",
    carType: "",
    name: "",
    phone: "",
  });

  // Transfer form state
  const [transferForm, setTransferForm] = useState({
    from: "",
    to: "",
    date: "",
    time: "",
    passengers: "",
    flightNumber: "",
    name: "",
    phone: "",
  });

  const carTypes = useMemo(
    () => [
      { value: "any", label: t("car.any") },
      { value: "economy", label: t("car.economy") },
      { value: "compact", label: t("car.compact") },
      { value: "suv", label: t("car.suv") },
      { value: "van", label: t("car.van") },
      { value: "luxury", label: t("car.luxury") },
    ],
    [language]
  );

  const buildWhatsAppMessage = () => {
    if (activeTab === "rent") {
      const lines = [
        `🚗 *Upit za Rent a Car*`,
        ``,
        `📍 Preuzimanje: ${rentForm.pickup === OTHER_VALUE ? customPickup : (rentForm.pickup || "—")}`,
        `📍 Vraćanje: ${rentForm.dropoff === OTHER_VALUE ? customDropoff : (rentForm.dropoff || "—")}`,
        `📅 Od: ${rentForm.pickupDate || "—"}`,
        `📅 Do: ${rentForm.dropoffDate || "—"}`,
        `🚙 Tip: ${carTypes.find((c) => c.value === rentForm.carType)?.label || "—"}`,
        ``,
        `👤 Ime: ${rentForm.name || "—"}`,
        `📱 Telefon: ${rentForm.phone || "—"}`,
      ];
      return encodeURIComponent(lines.join("\n"));
    } else {
      const lines = [
        `🚐 *Upit za Transfer*`,
        ``,
        `📍 Od: ${transferForm.from === OTHER_VALUE ? customFrom : (transferForm.from || "—")}`,
        `📍 Do: ${transferForm.to === OTHER_VALUE ? customTo : (transferForm.to || "—")}`,
        `📅 Datum: ${transferForm.date || "—"}`,
        `🕐 Vrijeme: ${transferForm.time || "—"}`,
        `👥 Putnika: ${transferForm.passengers || "—"}`,
        `✈️ Let: ${transferForm.flightNumber || "—"}`,
        ``,
        `👤 Ime: ${transferForm.name || "—"}`,
        `📱 Telefon: ${transferForm.phone || "—"}`,
      ];
      return encodeURIComponent(lines.join("\n"));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send to Google Sheets
    if (activeTab === "rent") {
      sendToGoogleSheets({
        tab: "Rent a Car",
        name: rentForm.name,
        phone: rentForm.phone,
        pickup: rentForm.pickup === OTHER_VALUE ? customPickup : rentForm.pickup,
        dropoff: rentForm.dropoff === OTHER_VALUE ? customDropoff : rentForm.dropoff,
        pickupDate: rentForm.pickupDate,
        dropoffDate: rentForm.dropoffDate,
        carType: carTypes.find((c) => c.value === rentForm.carType)?.label || rentForm.carType,
        page: "Homepage",
        language,
      });
    } else {
      sendToGoogleSheets({
        tab: "Transfer",
        name: transferForm.name,
        phone: transferForm.phone,
        from: transferForm.from === OTHER_VALUE ? customFrom : transferForm.from,
        to: transferForm.to === OTHER_VALUE ? customTo : transferForm.to,
        date: transferForm.date,
        time: transferForm.time,
        passengers: transferForm.passengers,
        luggage: transferForm.flightNumber,
        page: "Homepage",
        language,
      });
    }

    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const inputClass =
    "w-full px-3.5 py-2.5 bg-white border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all";
  const selectClass =
    "w-full px-3.5 py-2.5 bg-white border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold transition-all appearance-none";

  return (
    <section className="relative min-h-[100svh] lg:min-h-[90vh] flex items-center">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <img
          src={activeTab === "rent" ? HERO_RENT : HERO_TRANSFER}
          alt="Montenegro"
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/85 via-forest-dark/60 to-forest-dark/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/50 via-transparent to-forest-dark/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-24 pb-12 lg:pt-28 lg:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                {t("hero.badge")}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white leading-tight mb-5">
              {activeTab === "rent" ? t("hero.title.rent") : t("hero.title.transfer")}
            </h1>

            <p className="text-white/80 text-lg lg:text-xl leading-relaxed max-w-xl mb-8">
              {activeTab === "rent"
                ? t("hero.subtitle.rent")
                : t("hero.subtitle.transfer")}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 lg:gap-10">
              <div>
                <div className="text-gold font-display font-bold text-3xl">10+</div>
                <div className="text-white/60 text-sm mt-0.5">
                  {language === "me" ? "Agencija" : language === "de" ? "Agenturen" : language === "ru" ? "Агентств" : "Agencies"}
                </div>
              </div>
              <div>
                <div className="text-gold font-display font-bold text-3xl">2h</div>
                <div className="text-white/60 text-sm mt-0.5">
                  {language === "me" ? "Odgovor" : language === "de" ? "Antwort" : language === "ru" ? "Ответ" : "Response"}
                </div>
              </div>
              <div>
                <div className="text-gold font-display font-bold text-3xl">15+</div>
                <div className="text-white/60 text-sm mt-0.5">
                  {language === "me" ? "Lokacija" : language === "de" ? "Standorte" : language === "ru" ? "Локаций" : "Locations"}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-border">
                <button
                  onClick={() => setActiveTab("rent")}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 text-sm font-semibold transition-all ${
                    activeTab === "rent"
                      ? "text-forest border-b-2 border-gold bg-gold/5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Car className="w-4 h-4" />
                  {t("tab.rentacar")}
                </button>
                <button
                  onClick={() => setActiveTab("transfer")}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-4 text-sm font-semibold transition-all ${
                    activeTab === "transfer"
                      ? "text-forest border-b-2 border-gold bg-gold/5"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                  {t("tab.transfer")}
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-5 lg:p-6 space-y-4">
                {activeTab === "rent" ? (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {t("form.pickup")}
                        </label>
                        <select
                          className={selectClass}
                          value={rentForm.pickup}
                          onChange={(e) =>
                            setRentForm({ ...rentForm, pickup: e.target.value })
                          }
                          required
                        >
                          <option value="">—</option>
                          {locations.map((loc) => (
                            <option key={loc} value={loc}>
                              {loc}
                            </option>
                          ))}
                          <option value={OTHER_VALUE}>{otherLabel}</option>
                        </select>
                        {rentForm.pickup === OTHER_VALUE && (
                          <input type="text" className={`${inputClass} mt-1.5`} placeholder={language === "me" ? "Upišite lokaciju..." : "Type location..."} value={customPickup} onChange={(e) => setCustomPickup(e.target.value)} required />
                        )}
                      </div>
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {t("form.dropoff")}
                        </label>
                        <select
                          className={selectClass}
                          value={rentForm.dropoff}
                          onChange={(e) =>
                            setRentForm({ ...rentForm, dropoff: e.target.value })
                          }
                        >
                          <option value="">
                            {language === "me" ? "Isto kao preuzimanje" : language === "de" ? "Gleich wie Abholung" : language === "ru" ? "Как место получения" : "Same as pick-up"}
                          </option>
                          {locations.map((loc) => (
                            <option key={loc} value={loc}>
                              {loc}
                            </option>
                          ))}
                          <option value={OTHER_VALUE}>{otherLabel}</option>
                        </select>
                        {rentForm.dropoff === OTHER_VALUE && (
                          <input type="text" className={`${inputClass} mt-1.5`} placeholder={language === "me" ? "Upišite lokaciju..." : "Type location..."} value={customDropoff} onChange={(e) => setCustomDropoff(e.target.value)} required />
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {t("form.pickupDate")}
                        </label>
                        <input
                          type="date"
                          className={inputClass}
                          value={rentForm.pickupDate}
                          onChange={(e) =>
                            setRentForm({ ...rentForm, pickupDate: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {t("form.dropoffDate")}
                        </label>
                        <input
                          type="date"
                          className={inputClass}
                          value={rentForm.dropoffDate}
                          onChange={(e) =>
                            setRentForm({ ...rentForm, dropoffDate: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-1.5">
                        <Car className="w-3.5 h-3.5" />
                        {t("form.carType")}
                      </label>
                      <select
                        className={selectClass}
                        value={rentForm.carType}
                        onChange={(e) =>
                          setRentForm({ ...rentForm, carType: e.target.value })
                        }
                      >
                        {carTypes.map((ct) => (
                          <option key={ct.value} value={ct.value}>
                            {ct.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                          {t("form.name")}
                        </label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="John Doe"
                          value={rentForm.name}
                          onChange={(e) =>
                            setRentForm({ ...rentForm, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                          {t("form.phone")}
                        </label>
                        <input
                          type="tel"
                          className={inputClass}
                          placeholder="+382 68 062 259"
                          value={rentForm.phone}
                          onChange={(e) =>
                            setRentForm({ ...rentForm, phone: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {t("form.from")}
                        </label>
                        <select
                          className={selectClass}
                          value={transferForm.from}
                          onChange={(e) =>
                            setTransferForm({ ...transferForm, from: e.target.value })
                          }
                          required
                        >
                          <option value="">—</option>
                          {locations.map((loc) => (
                            <option key={loc} value={loc}>
                              {loc}
                            </option>
                          ))}
                          <option value={OTHER_VALUE}>{otherLabel}</option>
                        </select>
                        {transferForm.from === OTHER_VALUE && (
                          <input type="text" className={`${inputClass} mt-1.5`} placeholder={language === "me" ? "Upišite lokaciju..." : "Type location..."} value={customFrom} onChange={(e) => setCustomFrom(e.target.value)} required />
                        )}
                      </div>
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-1.5">
                          <MapPin className="w-3.5 h-3.5" />
                          {t("form.to")}
                        </label>
                        <select
                          className={selectClass}
                          value={transferForm.to}
                          onChange={(e) =>
                            setTransferForm({ ...transferForm, to: e.target.value })
                          }
                          required
                        >
                          <option value="">—</option>
                          {locations.map((loc) => (
                            <option key={loc} value={loc}>
                              {loc}
                            </option>
                          ))}
                          <option value={OTHER_VALUE}>{otherLabel}</option>
                        </select>
                        {transferForm.to === OTHER_VALUE && (
                          <input type="text" className={`${inputClass} mt-1.5`} placeholder={language === "me" ? "Upišite lokaciju..." : "Type location..."} value={customTo} onChange={(e) => setCustomTo(e.target.value)} required />
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          {t("form.date")}
                        </label>
                        <input
                          type="date"
                          className={inputClass}
                          value={transferForm.date}
                          onChange={(e) =>
                            setTransferForm({ ...transferForm, date: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {t("form.time")}
                        </label>
                        <input
                          type="time"
                          className={inputClass}
                          value={transferForm.time}
                          onChange={(e) =>
                            setTransferForm({ ...transferForm, time: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-1.5">
                          <Users className="w-3.5 h-3.5" />
                          {t("form.passengers")}
                        </label>
                        <select
                          className={selectClass}
                          value={transferForm.passengers}
                          onChange={(e) =>
                            setTransferForm({
                              ...transferForm,
                              passengers: e.target.value,
                            })
                          }
                          required
                        >
                          <option value="">—</option>
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <option key={n} value={n}>
                              {n}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground mb-1.5">
                        <Plane className="w-3.5 h-3.5" />
                        {t("form.flightNumber")}
                      </label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder="W6 1234"
                        value={transferForm.flightNumber}
                        onChange={(e) =>
                          setTransferForm({
                            ...transferForm,
                            flightNumber: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                          {t("form.name")}
                        </label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder="John Doe"
                          value={transferForm.name}
                          onChange={(e) =>
                            setTransferForm({ ...transferForm, name: e.target.value })
                          }
                          required
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-muted-foreground mb-1.5 block">
                          {t("form.phone")}
                        </label>
                        <input
                          type="tel"
                          className={inputClass}
                          placeholder="+382 68 062 259"
                          value={transferForm.phone}
                          onChange={(e) =>
                            setTransferForm({ ...transferForm, phone: e.target.value })
                          }
                          required
                        />
                      </div>
                    </div>
                  </>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white py-3.5 rounded-xl font-semibold text-base transition-all hover:shadow-lg hover:shadow-[#25D366]/25 active:scale-[0.98]"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t("form.submitWhatsapp")}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

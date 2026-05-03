/*
 * Design: Montenegrin Trust & Warmth
 * Transfer page: SEO-optimized for airport transfer keywords
 */
import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, Plane, MapPin, Clock, Users, Shield } from "lucide-react";
import { motion } from "framer-motion";

const HERO_TRANSFER = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316391/F6tufssh9csNoGMxi69exc/hero-transfer-service-8gLcWWgYwxuCvv4tctvqoz.webp";

const transferRoutes = [
  { from: "Aerodrom Podgorica (TGD)", to: "Budva", price: "35-45", time: "1h" },
  { from: "Aerodrom Podgorica (TGD)", to: "Kotor", price: "50-60", time: "1.5h" },
  { from: "Aerodrom Podgorica (TGD)", to: "Tivat", price: "55-65", time: "1.5h" },
  { from: "Aerodrom Tivat (TIV)", to: "Budva", price: "20-30", time: "25min" },
  { from: "Aerodrom Tivat (TIV)", to: "Kotor", price: "15-25", time: "15min" },
  { from: "Aerodrom Tivat (TIV)", to: "Herceg Novi", price: "30-40", time: "40min" },
  { from: "Budva", to: "Dubrovnik", price: "80-100", time: "2.5h" },
  { from: "Podgorica", to: "Sarajevo", price: "120-150", time: "4h" },
];

export default function TransferPage() {
  const { t, language } = useLanguage();

  useEffect(() => {
    document.title = "Transfer Aerodrom Crna Gora | Podgorica TGD & Tivat TIV | rentakar.me";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Profesionalni transfer sa aerodroma u Crnoj Gori. Podgorica TGD, Tivat TIV. Fiksne cijene, komforna vozila, pouzdani vozači. Rezervišite sada!"
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_TRANSFER}
            alt="Transfer aerodrom Crna Gora"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/70 to-forest-dark/50" />
        </div>

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("location.backHome")}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Plane className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium">
                {language === "me" ? "Transfer usluge" : "Transfer services"}
              </span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
              {language === "me"
                ? "Transfer Aerodrom Crna Gora"
                : "Airport Transfer Montenegro"}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              {language === "me"
                ? "Profesionalni transferi sa aerodroma Podgorica (TGD) i Tivat (TIV). Komforna vozila, pouzdani vozači, fiksne cijene bez iznenađenja. Pratimo vaš let i čekamo vas na aerodromu."
                : "Professional transfers from Podgorica (TGD) and Tivat (TIV) airports. Comfortable vehicles, reliable drivers, fixed prices with no surprises. We track your flight and wait for you at the airport."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Price table */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container">
          <h2 className="font-display font-bold text-2xl lg:text-3xl text-forest mb-8 text-center">
            {language === "me" ? "Cijene transfera" : "Transfer prices"}
          </h2>

          <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-sm border border-border/50 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-forest text-white">
                    <th className="text-left px-5 py-4 font-display font-semibold text-sm">
                      {language === "me" ? "Odakle" : "From"}
                    </th>
                    <th className="text-left px-5 py-4 font-display font-semibold text-sm">
                      {language === "me" ? "Dokle" : "To"}
                    </th>
                    <th className="text-center px-5 py-4 font-display font-semibold text-sm">
                      {language === "me" ? "Cijena" : "Price"}
                    </th>
                    <th className="text-center px-5 py-4 font-display font-semibold text-sm">
                      {language === "me" ? "Trajanje" : "Duration"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transferRoutes.map((route, i) => (
                    <tr
                      key={i}
                      className="border-t border-border/50 hover:bg-cream/50 transition-colors"
                    >
                      <td className="px-5 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-forest shrink-0" />
                          {route.from}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gold shrink-0" />
                          {route.to}
                        </div>
                      </td>
                      <td className="px-5 py-4 text-center">
                        <span className="font-semibold text-forest">€{route.price}</span>
                      </td>
                      <td className="px-5 py-4 text-center text-muted-foreground text-sm">
                        {route.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
            {language === "me"
              ? "* Cijene su okvirne i zavise od tipa vozila i broja putnika. Pošaljite upit za tačnu cijenu."
              : "* Prices are approximate and depend on vehicle type and number of passengers. Send an inquiry for exact pricing."}
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            {[
              {
                icon: Plane,
                text: language === "me" ? "Praćenje leta" : "Flight tracking",
              },
              {
                icon: Clock,
                text: language === "me" ? "Čekanje bez doplate" : "Free waiting time",
              },
              {
                icon: Users,
                text: language === "me" ? "Do 8 putnika" : "Up to 8 passengers",
              },
              {
                icon: Shield,
                text: language === "me" ? "Fiksne cijene" : "Fixed prices",
              },
            ].map((feat, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-4 border border-border/50 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                  <feat.icon className="w-5 h-5 text-forest" />
                </div>
                <span className="text-sm font-medium text-foreground">{feat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

/*
 * Design: Montenegrin Trust & Warmth
 * General "Rent a Car Montenegro" SEO page
 */
import { useEffect } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LocationsSection from "@/components/LocationsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMG = "/images/locations/perast-hero.jpg";

export default function RentACarMontenegro() {
  const { language } = useLanguage();

  useEffect(() => {
    document.title = "Rent a Car Montenegro | Best Prices from Local Agencies | rentakar.me";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Rent a car in Montenegro from €20/day. Compare prices from 10+ verified local agencies. Podgorica, Budva, Tivat, Kotor. No hidden fees, full insurance. Book now!"
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
          <img src={HERO_IMG} alt="Rent a Car Montenegro" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/70 to-forest-dark/50" />
        </div>

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {language === "me" ? "Nazad na početnu" : "Back to home"}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="text-gold font-medium">Montenegro</span>
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
              {language === "me"
                ? "Rent a Car Crna Gora - Iznajmljivanje Vozila"
                : "Rent a Car Montenegro - Car Rental"}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
              {language === "me"
                ? "Pronađite najbolju ponudu za iznajmljivanje auta u Crnoj Gori. Poredimo cijene od 10+ provjerenih lokalnih agencija. Preuzimanje na aerodromima Podgorica i Tivat, ili bilo gdje u Crnoj Gori. Cijene od 20€ dnevno sa punim osiguranjem."
                : "Find the best car rental deals in Montenegro. We compare prices from 10+ verified local agencies. Pick up at Podgorica and Tivat airports, or anywhere in Montenegro. Prices from €20/day with full insurance."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 lg:py-20 bg-warm-white">
        <div className="container">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <h2 className="font-display font-bold text-2xl text-forest">
              {language === "me"
                ? "Zašto iznajmiti auto u Crnoj Gori?"
                : "Why rent a car in Montenegro?"}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === "me"
                ? "Crna Gora je zemlja nevjerovatne raznolikosti - od plaža Jadranskog mora do planina Durmitora, od UNESCO zaštićenog Kotora do modernog Porto Montenegra. Sa iznajmljenim autom, možete istražiti sve ove ljepote u svom tempu, bez zavisnosti od javnog prevoza koji je ograničen."
                : "Montenegro is a country of incredible diversity - from Adriatic beaches to Durmitor mountains, from UNESCO-protected Kotor to modern Porto Montenegro. With a rental car, you can explore all these beauties at your own pace, without depending on limited public transport."}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {language === "me"
                ? "rentakar.me je vaš lokalni partner koji povezuje turiste sa najboljim rent-a-car agencijama u Crnoj Gori. Umjesto da pretražujete desetine sajtova, pošaljite nam jedan upit i dobićete uporedne ponude od provjerenih agencija u roku od 2 sata."
                : "rentakar.me is your local partner connecting tourists with the best car rental agencies in Montenegro. Instead of searching dozens of websites, send us one inquiry and receive comparative offers from verified agencies within 2 hours."}
            </p>
          </div>
        </div>
      </section>

      <LocationsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

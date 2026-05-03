/*
 * Design: Montenegrin Trust & Warmth
 * Rental Services section - shows all available rental services beyond cars
 */
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { Bike, Ship, Waves, Mountain, Star, ArrowRight, Zap, Compass, Crown, Tent } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    slug: "jet-ski-rental-montenegro",
    icon: Waves,
    titleMe: "Jet Ski",
    titleEn: "Jet Ski",
    descMe: "Adrenalin na moru",
    descEn: "Sea adrenaline",
    priceFrom: 50,
  },
  {
    slug: "bike-rental-montenegro",
    icon: Bike,
    titleMe: "Bicikli",
    titleEn: "Bikes",
    descMe: "Gradski, MTB, E-bike",
    descEn: "City, MTB, E-bike",
    priceFrom: 10,
  },
  {
    slug: "scooter-rental-montenegro",
    icon: Zap,
    titleMe: "Skuteri",
    titleEn: "Scooters",
    descMe: "Vespa, Honda, Piaggio",
    descEn: "Vespa, Honda, Piaggio",
    priceFrom: 25,
  },
  {
    slug: "yacht-rental-montenegro",
    icon: Ship,
    titleMe: "Jahte i Brodovi",
    titleEn: "Yachts & Boats",
    descMe: "Dnevni izleti i charter",
    descEn: "Day trips & charter",
    priceFrom: 200,
  },
  {
    slug: "kayak-rental-montenegro",
    icon: Compass,
    titleMe: "Kajak",
    titleEn: "Kayak",
    descMe: "Boka Kotorska, Tara",
    descEn: "Bay of Kotor, Tara",
    priceFrom: 25,
  },
  {
    slug: "quad-rental-montenegro",
    icon: Mountain,
    titleMe: "Quad / ATV",
    titleEn: "Quad / ATV",
    descMe: "Planinske ture",
    descEn: "Mountain tours",
    priceFrom: 60,
  },
  {
    slug: "motorcycle-rental-montenegro",
    icon: Star,
    titleMe: "Motocikli",
    titleEn: "Motorcycles",
    descMe: "Harley, BMW, Honda",
    descEn: "Harley, BMW, Honda",
    priceFrom: 40,
  },
  {
    slug: "camper-van-rental-montenegro",
    icon: Tent,
    titleMe: "Kamperi",
    titleEn: "Camper Vans",
    descMe: "Istražite CG u svom tempu",
    descEn: "Explore MNE at your pace",
    priceFrom: 70,
  },
  {
    slug: "luxury-car-rental-montenegro",
    icon: Crown,
    titleMe: "Luksuzna Vozila",
    titleEn: "Luxury Cars",
    descMe: "Mercedes, Porsche, Range Rover",
    descEn: "Mercedes, Porsche, Range Rover",
    priceFrom: 100,
  },
];

export default function RentalServicesSection() {
  const { language } = useLanguage();

  return (
    <section className="py-16 lg:py-20 bg-cream">
      <div className="container">
        <div className="text-center mb-10">
          <span className="text-gold font-semibold text-sm tracking-wider uppercase">
            {language === "me" ? "Više od rent a car" : "More than car rental"}
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest mt-2">
            {language === "me" ? "Sve na jednom mjestu" : language === "de" ? "Alles an einem Ort" : language === "ru" ? "Всё в одном месте" : "Everything in one place"}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
            {language === "me"
              ? "Pored rent a car usluga, nudimo i jet ski, bicikle, skutere, jahte, kajake, quad ture, kampere i luksuzna vozila."
              : "Besides car rental, we also offer jet skis, bikes, scooters, yachts, kayaks, quad tours, camper vans, and luxury vehicles."}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.slug}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <Link href={`/rental/${svc.slug}`}>
                  <div className="bg-card rounded-xl p-5 border border-border/30 hover:shadow-md hover:border-forest/20 transition-all group cursor-pointer h-full">
                    <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center mb-3 group-hover:bg-forest/20 transition-colors">
                      <Icon className="w-5 h-5 text-forest" />
                    </div>
                    <h3 className="font-display font-bold text-sm text-foreground group-hover:text-forest transition-colors">
                      {language === "me" ? svc.titleMe : svc.titleEn}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {language === "me" ? svc.descMe : svc.descEn}
                    </p>
                    <div className="mt-3 text-gold font-display font-bold text-sm">
                      {language === "me" ? "od" : "from"} €{svc.priceFrom}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

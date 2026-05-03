/*
 * Design: Montenegrin Trust & Warmth
 * Partners: Scrolling logos/names of partner agencies with verified badges
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const partners = [
  { name: "Planet Rent a Car", location: "Podgorica, Tivat", years: 8 },
  { name: "Meridian Rent a Car", location: "Budva, Tivat", years: 12 },
  { name: "Piano Rent a Car", location: "Podgorica", years: 6 },
  { name: "Respecta Rent a Car", location: "Budva, Kotor", years: 10 },
  { name: "Terrae Car", location: "Budva", years: 7 },
  { name: "DAX Rent a Car", location: "Tivat", years: 5 },
  { name: "F1 Rent a Car", location: "Podgorica, Budva", years: 9 },
  { name: "Nava Rent a Car", location: "Herceg Novi", years: 4 },
  { name: "MTL Rent a Car", location: "Podgorica", years: 6 },
  { name: "PS Rent a Car", location: "Bar, Ulcinj", years: 8 },
];

export default function PartnersSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-warm-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-forest mb-4">
            {t("partners.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("partners.subtitle")}
          </p>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="bg-card rounded-xl p-4 border border-border/50 hover:border-gold/30 hover:shadow-sm transition-all text-center"
            >
              <div className="w-12 h-12 rounded-full bg-forest/10 flex items-center justify-center mx-auto mb-3">
                <span className="font-display font-bold text-forest text-lg">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <h4 className="font-display font-semibold text-sm text-foreground mb-1">
                {partner.name}
              </h4>
              <p className="text-xs text-muted-foreground mb-2">{partner.location}</p>
              <div className="inline-flex items-center gap-1 text-xs text-forest/80 bg-forest/5 px-2 py-0.5 rounded-full">
                <BadgeCheck className="w-3 h-3" />
                {language === "me"
                  ? `${partner.years}+ god.`
                  : language === "de"
                  ? `${partner.years}+ Jahre`
                  : language === "ru"
                  ? `${partner.years}+ лет`
                  : `${partner.years}+ yrs`}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

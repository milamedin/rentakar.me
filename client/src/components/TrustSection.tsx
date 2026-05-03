/*
 * Design: Montenegrin Trust & Warmth
 * Trust section: 4 cards with icons, warm cream background
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPinned, Clock, BadgeCheck, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export default function TrustSection() {
  const { t } = useLanguage();

  const items = [
    {
      icon: MapPinned,
      title: t("trust.local.title"),
      desc: t("trust.local.desc"),
      accent: "bg-forest/10 text-forest",
    },
    {
      icon: Clock,
      title: t("trust.fast.title"),
      desc: t("trust.fast.desc"),
      accent: "bg-gold/15 text-gold-dark",
    },
    {
      icon: BadgeCheck,
      title: t("trust.price.title"),
      desc: t("trust.price.desc"),
      accent: "bg-terracotta/10 text-terracotta",
    },
    {
      icon: Headphones,
      title: t("trust.support.title"),
      desc: t("trust.support.desc"),
      accent: "bg-forest/10 text-forest",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-forest mb-4">
            {t("trust.title")}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeUp}
              className="bg-card rounded-2xl p-6 shadow-sm border border-border/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${item.accent}`}
              >
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

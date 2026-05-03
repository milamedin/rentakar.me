/*
 * Design: Montenegrin Trust & Warmth
 * How it works: 3 steps with large numbered cards, arrow connectors, subtle gradient bg
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Send, BarChart3, KeyRound, ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const { t, language } = useLanguage();

  const steps = [
    {
      icon: Send,
      title: t("how.step1.title"),
      desc: t("how.step1.desc"),
      accent: "from-emerald-500/20 to-emerald-600/10",
      iconBg: "bg-emerald-600",
    },
    {
      icon: BarChart3,
      title: t("how.step2.title"),
      desc: t("how.step2.desc"),
      accent: "from-amber-500/20 to-amber-600/10",
      iconBg: "bg-amber-600",
    },
    {
      icon: KeyRound,
      title: t("how.step3.title"),
      desc: t("how.step3.desc"),
      accent: "from-sky-500/20 to-sky-600/10",
      iconBg: "bg-sky-600",
    },
  ];

  return (
    <section id="kako-funkcionise" className="py-20 lg:py-28 bg-gradient-to-b from-warm-white to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231A3C34' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-gold uppercase tracking-widest mb-3">
            {t("how.title")}
          </span>
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-forest mb-4">
            {language === "me" ? "Jednostavno. Brzo. Pouzdano." : 
             language === "de" ? "Einfach. Schnell. Zuverlässig." :
             language === "ru" ? "Просто. Быстро. Надёжно." :
             "Simple. Fast. Reliable."}
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            {language === "me" ? "Tri koraka do vašeg idealnog vozila u Crnoj Gori" :
             language === "de" ? "Drei Schritte zu Ihrem idealen Fahrzeug in Montenegro" :
             language === "ru" ? "Три шага до вашего идеального автомобиля в Черногории" :
             "Three steps to your ideal vehicle in Montenegro"}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 relative">
          {/* Arrow connectors (desktop) */}
          <div className="hidden md:flex absolute top-1/2 left-[33%] -translate-y-1/2 -translate-x-1/2 z-20">
            <div className="w-10 h-10 rounded-full bg-white shadow-lg border border-border/50 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-gold" />
            </div>
          </div>
          <div className="hidden md:flex absolute top-1/2 left-[66.5%] -translate-y-1/2 -translate-x-1/2 z-20">
            <div className="w-10 h-10 rounded-full bg-white shadow-lg border border-border/50 flex items-center justify-center">
              <ArrowRight className="w-5 h-5 text-gold" />
            </div>
          </div>

          {/* Mobile arrow connectors */}
          {steps.map((step, i) => (
            <div key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative bg-white rounded-2xl p-8 border border-border/40 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Step number */}
                <div className="absolute -top-4 left-8">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-forest text-white font-display font-bold text-sm shadow-md">
                    {i + 1}
                  </span>
                </div>

                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${step.iconBg} flex items-center justify-center mb-5 mt-2`}>
                  <step.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>

              {/* Mobile arrow */}
              {i < steps.length - 1 && (
                <div className="flex md:hidden justify-center py-3">
                  <ChevronDown className="w-6 h-6 text-gold/60" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

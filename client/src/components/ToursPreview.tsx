/*
 * Design: Montenegrin Trust & Warmth
 * Tours Preview section for the home page - shows 3 featured tours
 */
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { tours } from "@/data/tours";
import { Clock, Users, ArrowRight, Compass } from "lucide-react";
import { motion } from "framer-motion";

const FEATURED_SLUGS = ["boka-bay-tour", "durmitor-tara-canyon-tour", "skadar-lake-tour"];

export default function ToursPreview() {
  const { language } = useLanguage();
  const isEn = language !== "me";
  const featured = FEATURED_SLUGS
    .map((slug) => tours.find((t) => t.slug === slug))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const heading =
    language === "me"
      ? "Ture i izleti sa lokalnim vodičima"
      : language === "de"
      ? "Touren mit lokalen Guides"
      : language === "ru"
      ? "Туры с местными гидами"
      : language === "fr"
      ? "Excursions avec guides locaux"
      : language === "pl"
      ? "Wycieczki z lokalnymi przewodnikami"
      : language === "tr"
      ? "Yerel rehberli turlar"
      : "Tours with local guides";

  const subtitle =
    language === "me"
      ? "Boka, Durmitor, Skadarsko jezero i još — organizovano sa provjerenim agencijama."
      : language === "de"
      ? "Boka, Durmitor, Skutarisee und mehr — organisiert mit geprüften Agenturen."
      : language === "ru"
      ? "Бока, Дурмитор, Скадарское озеро и не только — с проверенными агентствами."
      : language === "fr"
      ? "Boka, Durmitor, lac de Skadar et plus — avec des agences vérifiées."
      : language === "pl"
      ? "Boka, Durmitor, jezioro Szkoderskie i więcej — z zaufanymi agencjami."
      : language === "tr"
      ? "Boka, Durmitor, Skadar Gölü ve daha fazlası — doğrulanmış acentelerle."
      : "Boka, Durmitor, Skadar Lake & more — organized with verified agencies.";

  const allLabel =
    language === "me"
      ? "Sve ture"
      : language === "de"
      ? "Alle Touren"
      : language === "ru"
      ? "Все туры"
      : language === "fr"
      ? "Toutes les excursions"
      : language === "pl"
      ? "Wszystkie wycieczki"
      : language === "tr"
      ? "Tüm turlar"
      : "All tours";

  const fromLabel = isEn ? "from" : language === "de" ? "ab" : language === "ru" ? "от" : language === "fr" ? "à partir de" : language === "pl" ? "od" : language === "tr" ? "fiyat" : "od";
  const personLabel = language === "me" ? "/osoba" : language === "de" ? "/Person" : language === "ru" ? "/чел." : language === "fr" ? "/pers." : language === "pl" ? "/os." : language === "tr" ? "/kişi" : "/person";
  const detailsLabel = language === "me" ? "Detalji" : language === "de" ? "Details" : language === "ru" ? "Подробнее" : language === "fr" ? "Détails" : language === "pl" ? "Szczegóły" : language === "tr" ? "Detaylar" : "Details";

  return (
    <section className="py-16 lg:py-20 bg-cream">
      <div className="container">
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-gold font-semibold text-sm tracking-wider uppercase flex items-center gap-1.5">
              <Compass className="w-4 h-4" />
              {language === "me" ? "Ture" : language === "de" ? "Touren" : language === "ru" ? "Туры" : language === "fr" ? "Excursions" : language === "pl" ? "Wycieczki" : language === "tr" ? "Turlar" : "Tours"}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest mt-2">
              {heading}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-2 max-w-xl">
              {subtitle}
            </p>
          </div>
          <Link href="/ture" className="hidden sm:flex items-center gap-1 text-forest font-semibold text-sm hover:text-gold transition-colors shrink-0">
            {allLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((tour, i) => (
            <motion.article
              key={tour.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link href={`/ture/${tour.slug}`}>
                <div className="bg-card rounded-2xl overflow-hidden border border-border/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group h-full flex flex-col">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={tour.image}
                      alt={isEn ? tour.titleEn : tour.titleMe}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-gold text-forest text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                      {fromLabel} €{tour.priceFrom}{personLabel}
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-3 text-muted-foreground text-xs">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {isEn ? tour.durationEn : tour.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {isEn ? tour.groupSizeEn : tour.groupSize}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-forest transition-colors line-clamp-2">
                      {isEn ? tour.titleEn : tour.titleMe}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1">
                      {isEn ? tour.shortDescEn : tour.shortDescMe}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-forest font-medium text-sm group-hover:gap-2 transition-all">
                      {detailsLabel}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="sm:hidden mt-6 text-center">
          <Link href="/ture" className="inline-flex items-center gap-1 text-forest font-semibold text-sm hover:text-gold transition-colors">
            {allLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

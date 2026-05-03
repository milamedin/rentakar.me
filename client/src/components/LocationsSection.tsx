/*
 * Design: Montenegrin Trust & Warmth
 * Locations: Cards with images, hover effects, links to subpages
 * All locations with 30+ monthly searches included
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

// ============================================================================
// LOCATION CARD IMAGES
// ----------------------------------------------------------------------------
// Three CloudFront photos (Podgorica, Budva, Tivat) are existing assets.
// The rest are real Montenegro photos sourced from Wikipedia/Wikimedia Commons
// (CC BY-SA), stored locally in /public/images/locations/.
// Attribution lives in /public/images/locations/CREDITS.txt.
// To swap any photo: drop a new <slug>.jpg into that folder.
// ============================================================================

const IMG = {
  podgorica:   "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316391/F6tufssh9csNoGMxi69exc/podgorica-city-eU6TJrqeuY83TCy4553kkQ.webp",
  budva:       "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316391/F6tufssh9csNoGMxi69exc/budva-old-town-KkF4Xtaf5nYH5SMet3wuQ9.webp",
  tivat:       "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316391/F6tufssh9csNoGMxi69exc/tivat-porto-nvW8BCxoLhg8BHBZZXNdAt.webp",

  kotor:       "/images/locations/kotor.jpg",
  bar:         "/images/locations/bar.jpg",
  hercegNovi:  "/images/locations/herceg-novi.jpg",
  ulcinj:      "/images/locations/ulcinj.jpg",
  niksic:      "/images/locations/niksic.jpg",
  petrovac:    "/images/locations/petrovac.jpg",
  svetiStefan: "/images/locations/sveti-stefan.jpg",
  becici:      "/images/locations/becici.jpg",
  pljevlja:    "/images/locations/pljevlja.jpg",
  berane:      "/images/locations/berane.jpg",
  bijeloPolje: "/images/locations/bijelo-polje.jpg",
  zabljak:     "/images/locations/zabljak.jpg",
  cetinje:     "/images/locations/cetinje.jpg",
};

export interface LocationData {
  slug: string;
  name: string;
  nameEn: string;
  image: string;
  priceFrom: number;
  searches: string;
}

export const locationsList: LocationData[] = [
  { slug: "podgorica",    name: "Podgorica",    nameEn: "Podgorica",    image: IMG.podgorica,    priceFrom: 45, searches: "1,900+" },
  { slug: "budva",        name: "Budva",        nameEn: "Budva",        image: IMG.budva,        priceFrom: 45, searches: "1,600+" },
  { slug: "tivat",        name: "Tivat",        nameEn: "Tivat",        image: IMG.tivat,        priceFrom: 45, searches: "1,000+" },
  { slug: "kotor",        name: "Kotor",        nameEn: "Kotor",        image: IMG.kotor,        priceFrom: 48, searches: "880+" },
  { slug: "bar",          name: "Bar",          nameEn: "Bar",          image: IMG.bar,          priceFrom: 45, searches: "720+" },
  { slug: "herceg-novi",  name: "Herceg Novi",  nameEn: "Herceg Novi",  image: IMG.hercegNovi,   priceFrom: 45, searches: "480+" },
  { slug: "ulcinj",       name: "Ulcinj",       nameEn: "Ulcinj",       image: IMG.ulcinj,       priceFrom: 45, searches: "320+" },
  { slug: "niksic",       name: "Nikšić",       nameEn: "Niksic",       image: IMG.niksic,       priceFrom: 40, searches: "210+" },
  { slug: "petrovac",     name: "Petrovac",     nameEn: "Petrovac",     image: IMG.petrovac,     priceFrom: 45, searches: "210+" },
  { slug: "sveti-stefan", name: "Sveti Stefan", nameEn: "Sveti Stefan", image: IMG.svetiStefan,  priceFrom: 48, searches: "110+" },
  { slug: "becici",       name: "Bečići",       nameEn: "Becici",       image: IMG.becici,       priceFrom: 45, searches: "50+" },
  { slug: "pljevlja",     name: "Pljevlja",     nameEn: "Pljevlja",     image: IMG.pljevlja,     priceFrom: 40, searches: "50+" },
  { slug: "berane",       name: "Berane",       nameEn: "Berane",       image: IMG.berane,       priceFrom: 40, searches: "40+" },
  { slug: "bijelo-polje", name: "Bijelo Polje", nameEn: "Bijelo Polje", image: IMG.bijeloPolje,  priceFrom: 40, searches: "40+" },
  { slug: "zabljak",      name: "Žabljak",      nameEn: "Zabljak",      image: IMG.zabljak,      priceFrom: 45, searches: "30+" },
  { slug: "cetinje",      name: "Cetinje",      nameEn: "Cetinje",      image: IMG.cetinje,      priceFrom: 42, searches: "30+" },
];

export default function LocationsSection() {
  const { t, language } = useLanguage();

  const disclaimer: Record<string, string> = {
    me: "* Cijene su okvirne i zavise od sezone, dostupnosti i tipa vozila. Konačnu cijenu određuje agencija.",
    en: "* Prices are approximate and depend on season, availability, and vehicle type. Final price is set by the agency.",
    de: "* Preise sind ungefähr und hängen von Saison, Verfügbarkeit und Fahrzeugtyp ab. Der Endpreis wird von der Agentur festgelegt.",
    ru: "* Цены ориентировочные и зависят от сезона, наличия и типа автомобиля. Окончательную цену устанавливает агентство.",
    fr: "* Les prix sont indicatifs et dépendent de la saison, de la disponibilité et du type de véhicule. Le prix final est fixé par l'agence.",
    pl: "* Ceny są orientacyjne i zależą od sezonu, dostępności i typu pojazdu. Ostateczną cenę ustala agencja.",
    tr: "* Fiyatlar tahminidir ve sezona, müsaitliğe ve araç tipine bağlıdır. Nihai fiyat acente tarafından belirlenir.",
  };

  return (
    <section id="lokacije" className="py-20 lg:py-28 bg-cream">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="font-display font-bold text-3xl lg:text-4xl text-forest mb-4">
            {t("locations.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("locations.subtitle")}
          </p>
          <div className="w-16 h-1 bg-gold mx-auto rounded-full mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {locationsList.map((loc, i) => (
            <motion.div
              key={loc.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
            >
              <Link
                href={`/rent-a-car/${loc.slug}`}
                className="group block bg-card rounded-2xl overflow-hidden shadow-sm border border-border/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={loc.image}
                    alt={`Rent a car ${loc.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-white" />
                    <span className="text-white font-semibold text-lg">{loc.name}</span>
                  </div>
                  <div className="absolute top-3 right-3 bg-gold/90 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    {t("location.from")} €{loc.priceFrom}{t("location.perDay")}
                  </div>
                </div>
                <div className="p-3.5 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {language === "me"
                      ? `${loc.searches} pretraga/mj.`
                      : language === "de"
                      ? `${loc.searches} Suchen/Mon.`
                      : language === "ru"
                      ? `${loc.searches} запр./мес.`
                      : `${loc.searches} searches/mo.`}
                  </span>
                  <span className="flex items-center gap-1 text-forest text-xs font-medium group-hover:gap-2 transition-all">
                    {t("locations.viewMore")}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Price disclaimer */}
        <p className="text-center text-xs text-muted-foreground/70 mt-8 max-w-2xl mx-auto">
          {disclaimer[language]}
        </p>
      </div>
    </section>
  );
}

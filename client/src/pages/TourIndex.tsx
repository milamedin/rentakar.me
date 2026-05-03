/*
 * Design: Montenegrin Trust & Warmth
 * Tours Index page - lists all available tours with categories
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { tours } from "@/data/tours";
import { Clock, Users, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categoriesMe = ["Sve", "Dnevne ture", "Priroda", "Kulturne", "Avantura", "Privatne"];
const categoriesEn = ["All", "Day Tours", "Nature", "Cultural", "Adventure", "Private"];

const categoryMap: Record<string, string> = {
  "Sve": "all",
  "All": "all",
  "Dnevne ture": "day-tour",
  "Day Tours": "day-tour",
  "Priroda": "nature",
  "Nature": "nature",
  "Kulturne": "cultural",
  "Cultural": "cultural",
  "Avantura": "adventure",
  "Adventure": "adventure",
  "Privatne": "private",
  "Private": "private",
};

export default function TourIndex() {
  const { language } = useLanguage();
  const isEn = language !== "me";
  const categories = isEn ? categoriesEn : categoriesMe;
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  useEffect(() => {
    document.title = isEn
      ? "Tours in Montenegro - Day Trips, Adventures, Cultural | rentakar.me"
      : "Ture u Crnoj Gori - Dnevni izleti i avanture | rentakar.me";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content",
        isEn
          ? "Book guided tours in Montenegro - Bay of Kotor, Durmitor, Skadar Lake, rafting, jeep safaris, and private custom tours. WhatsApp inquiry, response in 30 min."
          : "Rezervišite ture u Crnoj Gori - Boka, Durmitor, Skadarsko jezero, rafting, jeep safari, privatne ture. WhatsApp upit, odgovor za 30 min."
      );
    }
  }, [language, isEn]);

  const filteredTours = tours.filter((tour) => {
    if (activeCategory === "Sve" || activeCategory === "All") return true;
    return tour.category === categoryMap[activeCategory];
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="bg-forest text-white py-20 lg:py-28 mt-16 lg:mt-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="font-display font-bold text-4xl lg:text-6xl tracking-tight mb-6">
              {isEn ? "Discover Montenegro" : "Otkrijte Crnu Goru"}
            </h1>
            <p className="text-xl text-white/85 leading-relaxed">
              {isEn
                ? "Guided tours led by experienced local guides. From the UNESCO Bay of Kotor to the wild peaks of Durmitor - we connect you with the best guides in the country."
                : "Ture sa iskusnim lokalnim vodičima. Od UNESCO Bokokotorskog zaliva do divljih vrhova Durmitora - povezujemo vas sa najboljim vodičima u zemlji."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-cream border-b border-border py-6 sticky top-16 lg:top-20 z-40">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === cat
                    ? "bg-forest text-white"
                    : "bg-warm-white text-foreground/70 hover:bg-forest/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-12 lg:py-16 bg-warm-white flex-1">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredTours.map((tour, idx) => (
              <motion.div
                key={tour.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Link
                  href={`/ture/${tour.slug}`}
                  className="group block bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-border h-full"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={tour.image}
                      alt={isEn ? tour.titleEn : tour.titleMe}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 lg:p-6">
                    <h2 className="font-display font-bold text-xl mb-2 group-hover:text-forest transition-colors">
                      {isEn ? tour.titleEn : tour.titleMe}
                    </h2>
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                      {isEn ? tour.shortDescEn : tour.shortDescMe}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs text-foreground/60 mb-4">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {isEn ? tour.durationEn : tour.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {isEn ? tour.groupSizeEn : tour.groupSize}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div>
                        <span className="text-xs text-foreground/60">
                          {isEn ? "from" : "od"}
                        </span>
                        <div className="font-display font-bold text-2xl text-forest">
                          €{tour.priceFrom}
                          <span className="text-sm font-normal text-foreground/60">
                            /{isEn ? "person" : "osoba"}
                          </span>
                        </div>
                      </div>
                      <span className="flex items-center gap-1 text-forest text-sm font-medium group-hover:gap-2 transition-all">
                        {isEn ? "Details" : "Detalji"}
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-16 text-foreground/60">
              {isEn ? "No tours in this category." : "Nema tura u ovoj kategoriji."}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

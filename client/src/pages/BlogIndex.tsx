/*
 * Design: Montenegrin Trust & Warmth
 * Blog Index page - lists all blog posts with categories
 */
import { useEffect, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";
import { Clock, ArrowRight, Search } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["Sve", "Vodič", "Savjeti", "Aktivnosti", "Putovanja", "Vozila", "Transfer"];
const categoriesEn = ["All", "Guide", "Tips", "Activities", "Travel", "Vehicles", "Transfer"];

export default function BlogIndex() {
  const { language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("Sve");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    document.title = language === "me"
      ? "Blog - Savjeti za Rent a Car i Putovanja | rentakar.me"
      : "Blog - Car Rental & Travel Tips | rentakar.me";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content",
        language === "me"
          ? "Savjeti za iznajmljivanje auta, putovanja po Crnoj Gori, vodeni sportovi, transferi i više. Blog rentakar.me."
          : "Tips for car rental, traveling in Montenegro, water sports, transfers and more. rentakar.me blog."
      );
    }
    window.scrollTo(0, 0);
  }, [language]);

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "Sve" || post.category === activeCategory;
    const matchesSearch = searchQuery === "" ||
      post.titleMe.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-12 lg:pt-32 lg:pb-16 bg-forest">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-gold font-medium text-sm tracking-wider uppercase">
              rentakar.me Blog
            </span>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mt-3 mb-4">
              {language === "me" ? "Savjeti i Vodiči" : "Tips & Guides"}
            </h1>
            <p className="text-white/70 text-lg max-w-2xl">
              {language === "me"
                ? "Korisni savjeti za iznajmljivanje vozila, putovanja po Crnoj Gori, vodene sportove i aktivnosti."
                : "Useful tips for vehicle rental, traveling in Montenegro, water sports and activities."}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-cream border-b border-border/30 sticky top-16 z-20 backdrop-blur-sm bg-cream/95">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-forest text-white"
                      : "bg-white text-foreground hover:bg-forest/10 border border-border/30"
                  }`}
                >
                  {language === "me" ? cat : categoriesEn[i]}
                </button>
              ))}
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder={language === "me" ? "Pretraži..." : "Search..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-border/30 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-forest/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 lg:py-16 bg-cream flex-1">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                {language === "me" ? "Nema rezultata za vašu pretragu." : "No results for your search."}
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-card rounded-2xl overflow-hidden shadow-sm border border-border/30 hover:shadow-md transition-all group h-full flex flex-col">
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={post.image}
                          alt={language === "me" ? post.titleMe : post.titleEn}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="bg-forest/10 text-forest text-xs font-semibold px-2.5 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span className="text-muted-foreground text-xs flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime} min
                          </span>
                        </div>
                        <h2 className="font-display font-bold text-lg text-foreground mb-2 group-hover:text-forest transition-colors line-clamp-2">
                          {language === "me" ? post.titleMe : post.titleEn}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 flex-1">
                          {language === "me" ? post.excerptMe : post.excerptEn}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-forest font-medium text-sm group-hover:gap-2 transition-all">
                          {language === "me" ? "Pročitaj više" : "Read more"}
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}

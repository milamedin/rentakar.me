/*
 * Design: Montenegrin Trust & Warmth
 * Blog Preview section for the home page - shows latest 3 posts
 */
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";
import { Clock, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function BlogPreview() {
  const { language } = useLanguage();
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-gold font-semibold text-sm tracking-wider uppercase">
              Blog
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-forest mt-2">
              {language === "me" ? "Korisni savjeti i vodiči" : language === "de" ? "Nützliche Tipps & Guides" : language === "ru" ? "Полезные советы и гиды" : "Useful tips & guides"}
            </h2>
          </div>
          <Link href="/blog" className="hidden sm:flex items-center gap-1 text-forest font-semibold text-sm hover:text-gold transition-colors">
            {language === "me" ? "Svi članci" : "All articles"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-cream rounded-2xl overflow-hidden border border-border/30 hover:shadow-md transition-all group h-full flex flex-col">
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
                    <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-forest transition-colors line-clamp-2">
                      {language === "me" ? post.titleMe : post.titleEn}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 flex-1">
                      {language === "me" ? post.excerptMe : post.excerptEn}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-forest font-medium text-sm group-hover:gap-2 transition-all">
                      {language === "me" ? "Pročitaj" : "Read"}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="sm:hidden mt-6 text-center">
          <Link href="/blog" className="inline-flex items-center gap-1 text-forest font-semibold text-sm hover:text-gold transition-colors">
            {language === "me" ? "Svi članci" : "All articles"}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

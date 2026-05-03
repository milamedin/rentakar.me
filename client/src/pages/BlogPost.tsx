/*
 * Design: Montenegrin Trust & Warmth
 * Individual Blog Post page with markdown-like rendering
 */
import React, { useEffect } from "react";
import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/contexts/LanguageContext";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Clock, Calendar, Tag, Phone } from "lucide-react";
import { motion } from "framer-motion";

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactElement[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let tableHeaders: string[] = [];

  const flushTable = () => {
    if (tableHeaders.length > 0) {
      elements.push(
        <div key={`table-${elements.length}`} className="overflow-x-auto my-6">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-forest/5">
                {tableHeaders.map((h, i) => (
                  <th key={i} className="text-left px-4 py-2.5 font-semibold text-forest border-b border-border/30">
                    {h.trim()}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, ri) => (
                <tr key={ri} className="border-b border-border/20 hover:bg-cream/50">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2.5 text-foreground">
                      {cell.trim()}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    tableHeaders = [];
    tableRows = [];
    inTable = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Table detection
    if (line.includes("|") && line.trim().startsWith("|")) {
      const cells = line.split("|").filter(c => c.trim() !== "");
      if (!inTable) {
        inTable = true;
        tableHeaders = cells;
        // Skip separator line
        if (i + 1 < lines.length && lines[i + 1].includes("---")) {
          i++;
        }
        continue;
      } else {
        if (line.includes("---")) continue;
        tableRows.push(cells);
        continue;
      }
    } else if (inTable) {
      flushTable();
    }

    // Headers
    if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-display font-bold text-lg text-forest mt-8 mb-3">
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-display font-bold text-xl text-forest mt-10 mb-4 pb-2 border-b border-border/20">
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("- **")) {
      const match = line.match(/- \*\*(.+?)\*\*:?\s*(.*)/);
      if (match) {
        elements.push(
          <li key={i} className="flex items-start gap-2 mb-2 ml-4">
            <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
            <span>
              <strong className="text-foreground">{match[1]}</strong>
              {match[2] && <span className="text-muted-foreground"> {match[2]}</span>}
            </span>
          </li>
        );
      }
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="flex items-start gap-2 mb-2 ml-4">
          <span className="w-1.5 h-1.5 rounded-full bg-gold mt-2 shrink-0" />
          <span className="text-foreground">{line.replace("- ", "")}</span>
        </li>
      );
    } else if (line.match(/^\d+\.\s/)) {
      const text = line.replace(/^\d+\.\s/, "");
      const boldMatch = text.match(/\*\*(.+?)\*\*(.*)/);
      elements.push(
        <li key={i} className="flex items-start gap-3 mb-3 ml-4">
          <span className="w-6 h-6 rounded-full bg-forest/10 flex items-center justify-center text-xs font-bold text-forest shrink-0 mt-0.5">
            {line.match(/^(\d+)/)?.[1]}
          </span>
          <span>
            {boldMatch ? (
              <>
                <strong className="text-foreground">{boldMatch[1]}</strong>
                <span className="text-muted-foreground">{boldMatch[2]}</span>
              </>
            ) : (
              <span className="text-foreground">{text}</span>
            )}
          </span>
        </li>
      );
    } else if (line.startsWith("*") && line.endsWith("*") && !line.startsWith("**")) {
      elements.push(
        <p key={i} className="text-xs text-muted-foreground/60 italic my-2">
          {line.replace(/\*/g, "")}
        </p>
      );
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      // Regular paragraph - handle bold text
      const parts = line.split(/(\*\*.*?\*\*)/g);
      elements.push(
        <p key={i} className="text-foreground/80 leading-relaxed mb-4">
          {parts.map((part, pi) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={pi} className="text-foreground font-semibold">{part.replace(/\*\*/g, "")}</strong>;
            }
            return part;
          })}
        </p>
      );
    }
  }

  if (inTable) flushTable();

  return elements;
}

export default function BlogPost() {
  const params = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const slug = params.slug || "";
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (post) {
      document.title = post.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", post.metaDesc);
    }
    window.scrollTo(0, 0);
  }, [slug, post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-display font-bold text-2xl text-forest mb-4">
              {language === "me" ? "Članak nije pronađen" : "Article not found"}
            </h1>
            <Link href="/blog" className="text-gold hover:text-gold-dark font-medium">
              ← {language === "me" ? "Nazad na blog" : "Back to blog"}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const title = language === "me" ? post.titleMe : post.titleEn;
  const content = language === "me" ? post.contentMe : post.contentEn;
  const excerpt = language === "me" ? post.excerptMe : post.excerptEn;

  // Related posts (same category, different slug)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-16">
        <div className="absolute inset-0 z-0">
          <img src={post.image} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/95 via-forest-dark/80 to-forest-dark/60" />
        </div>
        <div className="container relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {language === "me" ? "Nazad na blog" : "Back to blog"}
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full border border-gold/30">
                {post.category}
              </span>
              <span className="text-white/60 text-sm flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {new Date(post.date).toLocaleDateString(language === "me" ? "sr-Latn" : "en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <span className="text-white/60 text-sm flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime} min
              </span>
            </div>
            <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white leading-tight max-w-3xl">
              {title}
            </h1>
            <p className="text-white/70 text-lg mt-4 max-w-2xl">{excerpt}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16 bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <article className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-6 lg:p-10 shadow-sm border border-border/30">
                {renderContent(content)}
              </div>

              {/* Tags */}
              <div className="mt-6 flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-muted-foreground" />
                {post.keywords.map((kw) => (
                  <span key={kw} className="bg-white rounded-full px-3 py-1 text-xs text-muted-foreground border border-border/30">
                    {kw}
                  </span>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <div className="bg-forest rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-display font-bold text-lg mb-3">
                  {language === "me" ? "Trebate vozilo?" : "Need a vehicle?"}
                </h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  {language === "me"
                    ? "Pošaljite upit i dobićete ponudu od više agencija u roku od 2 sata."
                    : "Send an inquiry and receive offers from multiple agencies within 2 hours."}
                </p>
                <a
                  href="https://wa.me/38268062259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white py-3 rounded-xl font-semibold transition-all text-sm mb-3"
                >
                  <Phone className="w-4 h-4" />
                  WhatsApp
                </a>
                <Link href="/" className="w-full flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-white py-3 rounded-xl font-semibold transition-all text-sm">
                  {language === "me" ? "Popunite formu" : "Fill out the form"}
                </Link>
              </div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border/30">
                  <h3 className="font-display font-bold text-lg text-forest mb-4">
                    {language === "me" ? "Slični članci" : "Related articles"}
                  </h3>
                  <div className="space-y-4">
                    {relatedPosts.map((rp) => (
                      <Link key={rp.slug} href={`/blog/${rp.slug}`}>
                        <div className="flex gap-3 group cursor-pointer">
                          <img
                            src={rp.image}
                            alt={language === "me" ? rp.titleMe : rp.titleEn}
                            className="w-16 h-16 rounded-lg object-cover shrink-0"
                          />
                          <div>
                            <h4 className="text-sm font-semibold text-foreground group-hover:text-forest transition-colors line-clamp-2">
                              {language === "me" ? rp.titleMe : rp.titleEn}
                            </h4>
                            <span className="text-xs text-muted-foreground">{rp.readTime} min</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

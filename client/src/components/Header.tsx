/*
 * Design: Montenegrin Trust & Warmth
 * Header: Sticky, transparent on hero → solid on scroll
 * Forest green primary, gold accents, Plus Jakarta Sans display font
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { useLanguage, type Language } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "me", label: "Crnogorski", flag: "🇲🇪" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "pl", label: "Polski", flag: "🇵🇱" },
  { code: "tr", label: "Türkçe", flag: "🇹🇷" },
  { code: "ru", label: "Русский", flag: "🇷🇺" },
];

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const currentLang = languages.find((l) => l.code === language)!;

  const blogLabel = language === "ru" ? "Блог" : "Blog";
  const toursLabel = language === "me" ? "Ture" : language === "de" ? "Touren" : language === "ru" ? "Туры" : language === "fr" ? "Tours" : language === "pl" ? "Wycieczki" : language === "tr" ? "Turlar" : "Tours";
  const servicesLabel = language === "me" ? "Usluge" : language === "de" ? "Dienste" : language === "ru" ? "Услуги" : language === "fr" ? "Services" : language === "pl" ? "Usługi" : language === "tr" ? "Hizmetler" : "Services";

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: isHome ? "#lokacije" : "/#lokacije", label: t("nav.locations") },
    { href: "/ture", label: toursLabel },
    { href: "/blog", label: blogLabel },
    { href: isHome ? "#faq" : "/#faq", label: t("nav.faq") },
    { href: isHome ? "#kontakt" : "/#kontakt", label: t("nav.contact") },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-warm-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <span
              className={`font-display font-bold text-xl lg:text-2xl tracking-tight transition-colors ${
                scrolled || !isHome ? "text-forest" : "text-white"
              }`}
            >
              rentakar
            </span>
            <span className="font-display font-bold text-xl lg:text-2xl tracking-tight text-gold">
              .me
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isHashLink = link.href.includes("#");
              const linkClass = `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                scrolled || !isHome
                  ? "text-foreground/70 hover:text-forest hover:bg-forest/5"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`;

              if (isHashLink) {
                // Hash link - prevent default and scroll to anchor
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      const hash = link.href.includes("/#") ? link.href.split("/#")[1] : link.href.replace("#", "");
                      if (isHome) {
                        e.preventDefault();
                        const el = document.getElementById(hash);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                      // Else let default behavior take user to home + anchor
                    }}
                    className={linkClass}
                  >
                    {link.label}
                  </a>
                );
              }

              // Internal route - use wouter Link for SPA navigation
              return (
                <Link key={link.href} href={link.href} className={linkClass}>
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right side: Language + CTA */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  scrolled || !isHome
                    ? "text-foreground/70 hover:text-forest hover:bg-forest/5"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{currentLang.flag}</span>
                <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {langOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setLangOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 bg-card rounded-xl shadow-lg border border-border p-1.5 z-50 min-w-[160px]"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setLangOpen(false);
                          }}
                          className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
                            language === lang.code
                              ? "bg-forest/10 text-forest font-medium"
                              : "text-foreground/70 hover:bg-muted"
                          }`}
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* WhatsApp CTA - Desktop */}
            <a
              href="https://wa.me/38268062259"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:shadow-md"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled || !isHome
                  ? "text-foreground hover:bg-muted"
                  : "text-white hover:bg-white/10"
              }`}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container py-4 space-y-1">
              {navLinks.map((link) => {
                const isHashLink = link.href.includes("#");
                const linkClass = "block px-4 py-3 rounded-lg text-foreground/80 hover:text-forest hover:bg-forest/5 font-medium transition-colors";

                if (isHashLink) {
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        const hash = link.href.includes("/#") ? link.href.split("/#")[1] : link.href.replace("#", "");
                        if (isHome) {
                          e.preventDefault();
                          const el = document.getElementById(hash);
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }
                        setMobileOpen(false);
                      }}
                      className={linkClass}
                    >
                      {link.label}
                    </a>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={linkClass}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-border mt-3">
                <a
                  href="https://wa.me/38268062259"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-lg font-semibold"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  {t("cta.whatsapp")}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

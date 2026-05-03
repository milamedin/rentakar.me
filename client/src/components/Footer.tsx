/*
 * Design: Montenegrin Trust & Warmth
 * Footer: Dark forest green, organized links, contact info, blog links
 */
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const { t, language } = useLanguage();

  const popularLocations = [
    { name: "Rent a Car Podgorica", href: "/rent-a-car/podgorica" },
    { name: "Rent a Car Budva", href: "/rent-a-car/budva" },
    { name: "Rent a Car Tivat", href: "/rent-a-car/tivat" },
    { name: "Rent a Car Kotor", href: "/rent-a-car/kotor" },
    { name: "Rent a Car Bar", href: "/rent-a-car/bar" },
    { name: "Rent a Car Herceg Novi", href: "/rent-a-car/herceg-novi" },
    { name: "Rent a Car Ulcinj", href: "/rent-a-car/ulcinj" },
    { name: "Rent a Car Nikšić", href: "/rent-a-car/niksic" },
  ];

  const moreLocations = [
    { name: "Rent a Car Petrovac", href: "/rent-a-car/petrovac" },
    { name: "Rent a Car Sveti Stefan", href: "/rent-a-car/sveti-stefan" },
    { name: "Rent a Car Bečići", href: "/rent-a-car/becici" },
    { name: "Rent a Car Žabljak", href: "/rent-a-car/zabljak" },
    { name: "Rent a Car Cetinje", href: "/rent-a-car/cetinje" },
    { name: "Rent a Car Berane", href: "/rent-a-car/berane" },
    { name: "Rent a Car Bijelo Polje", href: "/rent-a-car/bijelo-polje" },
    { name: "Rent a Car Pljevlja", href: "/rent-a-car/pljevlja" },
  ];

  const services = [
    { name: "Rent a Car Montenegro", href: "/rent-a-car-montenegro" },
    { name: "Transfer Aerodrom", href: "/transfer-aerodrom-crna-gora" },
    { name: "Jet Ski Rental", href: "/rental/jet-ski-rental-montenegro" },
    { name: "Bike Rental", href: "/rental/bike-rental-montenegro" },
    { name: "Scooter Rental", href: "/rental/scooter-rental-montenegro" },
    { name: "Yacht & Boat Rental", href: "/rental/yacht-rental-montenegro" },
    { name: "Quad / ATV", href: "/rental/quad-rental-montenegro" },
    { name: "Motorcycle Rental", href: "/rental/motorcycle-rental-montenegro" },
    { name: "Luxury Cars", href: "/rental/luxury-car-rental-montenegro" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <footer className="bg-forest-dark text-white/80">
      <div className="container py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <span className="font-display font-bold text-white text-xl lg:text-2xl tracking-tight">rentakar</span>
              <span className="font-display font-bold text-gold text-xl lg:text-2xl tracking-tight">.me</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t("footer.desc")}
            </p>
            <div className="space-y-2.5">
              <a
                href="tel:+38268062259"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                +382 68 062 259
              </a>
              <a
                href="mailto:info@rentakar.me"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@rentakar.me
              </a>
              <div className="flex items-center gap-2 text-sm text-white/60">
                <MapPin className="w-4 h-4 shrink-0" />
                Podgorica, Crna Gora
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://wa.me/38268062259"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366]/20 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
              <a
                href="https://instagram.com/rentakar.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-pink-500/20 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
          </div>

          {/* Popular Locations */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              {t("footer.popular")}
            </h4>
            <ul className="space-y-2">
              {popularLocations.map((loc) => (
                <li key={loc.href}>
                  <Link
                    href={loc.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Locations */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              {language === "me" ? "Više lokacija" : language === "de" ? "Weitere Standorte" : language === "ru" ? "Ещё локации" : "More locations"}
            </h4>
            <ul className="space-y-2">
              {moreLocations.map((loc) => (
                <li key={loc.href}>
                  <Link
                    href={loc.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              {language === "me" ? "Usluge" : language === "de" ? "Dienstleistungen" : language === "ru" ? "Услуги" : "Services"}
            </h4>
            <ul className="space-y-2">
              {services.map((svc) => (
                <li key={svc.href}>
                  <Link
                    href={svc.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {svc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              {t("footer.links")}
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#kako-funkcionise"
                  className="text-sm text-white/60 hover:text-gold transition-colors"
                >
                  {t("how.title")}
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-white/60 hover:text-gold transition-colors"
                >
                  {t("faq.title")}
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="text-sm text-white/60 hover:text-gold transition-colors"
                >
                  {t("nav.contact")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} rentakar.me. {t("footer.rights")}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/images/locations/CREDITS.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/40 hover:text-white/60 transition-colors"
            >
              {language === "me" ? "Zasluge za fotografije" : language === "de" ? "Bildnachweise" : language === "ru" ? "Авторы фото" : language === "fr" ? "Crédits photo" : language === "pl" ? "Autorzy zdjęć" : language === "tr" ? "Fotoğraf kredileri" : "Photo credits"}
            </a>
            <p className="text-xs text-white/40">
              Podgorica, Crna Gora
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

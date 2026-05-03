import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Automatski skroluje na vrh stranice kada se promijeni ruta.
 * Tipičan SPA problem - bez ovoga, nova stranica se otvara
 * na poziciji na kojoj je korisnik bio na prethodnoj.
 */
export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Ne skroluj ako URL ima hash (fragment link) - tu je bitan scroll na taj element
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location]);

  return null;
}

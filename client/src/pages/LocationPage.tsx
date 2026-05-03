/*
 * Design: Montenegrin Trust & Warmth
 * Location subpage: SEO-optimized page for each city/location
 * Each page has unique H1, content, FAQ, form with pre-set pickup location
 * Prices are approximate - agencies set final prices based on season/demand
 */
import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, ArrowLeft, Car, Shield, Clock, Star, Info, Calendar, Send, User, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { locationsList } from "@/components/LocationsSection";
import { sendToGoogleSheets } from "@/lib/googleSheets";

const WHATSAPP_NUMBER = "38268062259";

const allLocations = [
  "Podgorica - Aerodrom",
  "Tivat - Aerodrom",
  "Budva",
  "Kotor",
  "Bar",
  "Herceg Novi",
  "Ulcinj",
  "Nikšić",
  "Petrovac",
  "Sveti Stefan",
  "Bečići",
  "Žabljak",
  "Cetinje",
  "Berane",
  "Bijelo Polje",
  "Pljevlja",
];

interface LocationSEO {
  slug: string;
  cityName: string;
  defaultPickup: string;
  h1Me: string;
  h1En: string;
  h1De: string;
  h1Ru: string;
  descMe: string;
  descEn: string;
  metaTitle: string;
  metaDesc: string;
  priceFrom: number;
  priceTo: number;
  popularCars: string[];
  nearbyLocations: string[];
  airportPickup?: boolean;
}

const locationSEOData: LocationSEO[] = [
  {
    slug: "podgorica",
    cityName: "Podgorica",
    defaultPickup: "Podgorica - Aerodrom",
    h1Me: "Rent a Car Podgorica - Iznajmljivanje Vozila",
    h1En: "Rent a Car Podgorica - Car Rental",
    h1De: "Mietwagen Podgorica - Autovermietung",
    h1Ru: "Аренда авто Подгорица",
    descMe: "Tražite rent a car u Podgorici? rentakar.me vam nudi najbolje cijene od 10+ provjerenih agencija. Preuzimanje na aerodromu Podgorica (TGD) ili u centru grada. Bez skrivenih troškova, sa punim osiguranjem.",
    descEn: "Looking for a car rental in Podgorica? rentakar.me offers the best prices from 10+ verified agencies. Pick up at Podgorica Airport (TGD) or city center. No hidden fees, full insurance included.",
    metaTitle: "Rent a Car Podgorica | Aerodrom TGD | Najbolje Cijene | rentakar.me",
    metaDesc: "Iznajmite auto u Podgorici po najboljim cijenama. Preuzimanje na aerodromu TGD. 10+ agencija, puno osiguranje. Odgovaramo za 2 sata!",
    priceFrom: 45,
    priceTo: 100,
    popularCars: ["Fiat Panda", "Renault Clio", "Dacia Duster", "VW T-Roc"],
    nearbyLocations: ["Nikšić", "Bar", "Budva", "Cetinje"],
    airportPickup: true,
  },
  {
    slug: "budva",
    cityName: "Budva",
    defaultPickup: "Budva",
    h1Me: "Rent a Car Budva - Iznajmljivanje Vozila",
    h1En: "Rent a Car Budva - Car Rental",
    h1De: "Mietwagen Budva - Autovermietung",
    h1Ru: "Аренда авто Будва",
    descMe: "Iznajmite auto u Budvi po najboljim cijenama. Idealno za obilazak crnogorskog primorja - od Svetog Stefana do Kotora. Naši partneri nude širok izbor vozila sa besplatnom dostavom u Budvi.",
    descEn: "Rent a car in Budva at the best prices. Perfect for exploring the Montenegrin coast - from Sveti Stefan to Kotor. Our partners offer a wide selection with free delivery in Budva.",
    metaTitle: "Rent a Car Budva | Najbolje Cijene | Bez Depozita | rentakar.me",
    metaDesc: "Rent a car Budva - iznajmite auto po najboljim cijenama. Bez depozita opcija. Dostava u hotel. 10+ agencija na jednom mjestu.",
    priceFrom: 45,
    priceTo: 120,
    popularCars: ["Hyundai i10", "Skoda Fabia", "Renault Captur", "VW Golf"],
    nearbyLocations: ["Kotor", "Tivat", "Petrovac", "Sveti Stefan", "Bečići"],
    airportPickup: false,
  },
  {
    slug: "tivat",
    cityName: "Tivat",
    defaultPickup: "Tivat - Aerodrom",
    h1Me: "Rent a Car Tivat - Aerodrom TIV",
    h1En: "Rent a Car Tivat - Airport TIV",
    h1De: "Mietwagen Tivat - Flughafen TIV",
    h1Ru: "Аренда авто Тиват - Аэропорт TIV",
    descMe: "Rent a car na aerodromu Tivat (TIV) - preuzmite auto čim sletite. Naši partneri vas čekaju na aerodromu sa pripremljenim vozilom. Porto Montenegro, Kotor i Budva su na samo 15-30 minuta vožnje.",
    descEn: "Car rental at Tivat Airport (TIV) - pick up your car as soon as you land. Our partners wait for you at the airport with your vehicle ready. Porto Montenegro, Kotor and Budva are just 15-30 minutes away.",
    metaTitle: "Rent a Car Tivat Aerodrom | Airport TIV | Najbolje Cijene | rentakar.me",
    metaDesc: "Rent a car Tivat aerodrom TIV. Preuzimanje na aerodromu, puno osiguranje, bez skrivenih troškova. Rezervišite sada!",
    priceFrom: 45,
    priceTo: 130,
    popularCars: ["Opel Corsa", "Dacia Sandero", "Dacia Duster", "Mercedes A-Class"],
    nearbyLocations: ["Kotor", "Budva", "Herceg Novi"],
    airportPickup: true,
  },
  {
    slug: "kotor",
    cityName: "Kotor",
    defaultPickup: "Kotor",
    h1Me: "Rent a Car Kotor - Iznajmljivanje Vozila",
    h1En: "Rent a Car Kotor - Car Rental",
    h1De: "Mietwagen Kotor - Autovermietung",
    h1Ru: "Аренда авто Котор",
    descMe: "Iznajmite auto u Kotoru i istražite Boku Kotorsku u svom tempu. Od UNESCO zaštićenog Starog grada do Perasta i Risna. Naši partneri nude dostavu vozila direktno u Kotor.",
    descEn: "Rent a car in Kotor and explore the Bay of Kotor at your own pace. From the UNESCO-protected Old Town to Perast and Risan. Our partners deliver vehicles directly to Kotor.",
    metaTitle: "Rent a Car Kotor | Boka Kotorska | Najbolje Cijene | rentakar.me",
    metaDesc: "Rent a car Kotor - istražite Boku Kotorsku. Dostava u Stari grad. 10+ agencija, puno osiguranje. Odgovaramo za 2h!",
    priceFrom: 48,
    priceTo: 120,
    popularCars: ["Fiat 500", "Renault Clio", "Hyundai Tucson", "VW Polo"],
    nearbyLocations: ["Tivat", "Budva", "Herceg Novi"],
    airportPickup: false,
  },
  {
    slug: "bar",
    cityName: "Bar",
    defaultPickup: "Bar",
    h1Me: "Rent a Car Bar - Iznajmljivanje Vozila",
    h1En: "Rent a Car Bar Montenegro",
    h1De: "Mietwagen Bar Montenegro",
    h1Ru: "Аренда авто Бар Черногория",
    descMe: "Rent a car u Baru - idealno za obilazak južnog dijela Crne Gore. Od Starog Bara do plaža Ulcinja. Naši partneri nude povoljne cijene sa punim osiguranjem i besplatnom dostavom.",
    descEn: "Car rental in Bar - perfect for exploring southern Montenegro. From Old Bar to Ulcinj beaches. Our partners offer great prices with full insurance and free delivery.",
    metaTitle: "Rent a Car Bar Montenegro | Najbolje Cijene | rentakar.me",
    metaDesc: "Rent a car Bar Crna Gora - južno primorje, Ulcinj, Stari Bar. Puno osiguranje, bez skrivenih troškova.",
    priceFrom: 45,
    priceTo: 95,
    popularCars: ["Fiat Panda", "Dacia Sandero", "Renault Clio", "Dacia Duster"],
    nearbyLocations: ["Ulcinj", "Podgorica", "Petrovac"],
    airportPickup: false,
  },
  {
    slug: "herceg-novi",
    cityName: "Herceg Novi",
    defaultPickup: "Herceg Novi",
    h1Me: "Rent a Car Herceg Novi",
    h1En: "Rent a Car Herceg Novi",
    h1De: "Mietwagen Herceg Novi",
    h1Ru: "Аренда авто Херцег-Нови",
    descMe: "Iznajmite auto u Herceg Novom i istražite ulaz u Boku Kotorsku. Blizina Hrvatske (Dubrovnik 40 min) čini ovu lokaciju idealnom za regionalna putovanja.",
    descEn: "Rent a car in Herceg Novi and explore the entrance to the Bay of Kotor. Proximity to Croatia (Dubrovnik 40 min) makes this location ideal for regional trips.",
    metaTitle: "Rent a Car Herceg Novi | Boka Kotorska | rentakar.me",
    metaDesc: "Rent a car Herceg Novi - blizu Dubrovnika. Puno osiguranje, dostava u hotel. Odgovaramo za 2 sata!",
    priceFrom: 45,
    priceTo: 110,
    popularCars: ["Hyundai i10", "Skoda Fabia", "Renault Captur"],
    nearbyLocations: ["Kotor", "Tivat", "Budva"],
    airportPickup: false,
  },
  {
    slug: "ulcinj",
    cityName: "Ulcinj",
    defaultPickup: "Ulcinj",
    h1Me: "Rent a Car Ulcinj",
    h1En: "Rent a Car Ulcinj",
    h1De: "Mietwagen Ulcinj",
    h1Ru: "Аренда авто Ульцинь",
    descMe: "Rent a car u Ulcinju - najjužniji grad Crne Gore sa najdužom plažom na Jadranu (Velika Plaža). Idealno za porodične odmore.",
    descEn: "Car rental in Ulcinj - the southernmost city of Montenegro with the longest beach on the Adriatic (Velika Plaza). Perfect for family holidays.",
    metaTitle: "Rent a Car Ulcinj | Velika Plaža | Najbolje Cijene | rentakar.me",
    metaDesc: "Rent a car Ulcinj - Velika Plaža, Ada Bojana. Puno osiguranje, povoljne cijene od 10+ agencija.",
    priceFrom: 45,
    priceTo: 95,
    popularCars: ["Fiat Panda", "Dacia Sandero", "Opel Corsa"],
    nearbyLocations: ["Bar", "Podgorica"],
    airportPickup: false,
  },
  {
    slug: "niksic",
    cityName: "Nikšić",
    defaultPickup: "Nikšić",
    h1Me: "Rent a Car Nikšić",
    h1En: "Rent a Car Niksic",
    h1De: "Mietwagen Nikšić",
    h1Ru: "Аренда авто Никшич",
    descMe: "Iznajmite auto u Nikšiću - drugi najveći grad Crne Gore. Idealna polazna tačka za Durmitor, Žabljak i sjever Crne Gore.",
    descEn: "Rent a car in Niksic - Montenegro's second largest city. Ideal starting point for Durmitor, Zabljak and northern Montenegro.",
    metaTitle: "Rent a Car Nikšić | Durmitor | Najbolje Cijene | rentakar.me",
    metaDesc: "Rent a car Nikšić - polazna tačka za Durmitor i sjever CG. Puno osiguranje, lokalne agencije.",
    priceFrom: 40,
    priceTo: 90,
    popularCars: ["Dacia Duster", "Renault Clio", "Fiat Panda"],
    nearbyLocations: ["Podgorica", "Žabljak", "Cetinje"],
    airportPickup: false,
  },
  {
    slug: "petrovac",
    cityName: "Petrovac",
    defaultPickup: "Petrovac",
    h1Me: "Rent a Car Petrovac",
    h1En: "Rent a Car Petrovac Montenegro",
    h1De: "Mietwagen Petrovac Montenegro",
    h1Ru: "Аренда авто Петровац",
    descMe: "Rent a car u Petrovcu - mirno primorsko mjesto idealno za porodični odmor. Između Budve i Bara, savršena lokacija za istraživanje obale.",
    descEn: "Car rental in Petrovac - a peaceful coastal town perfect for family holidays. Between Budva and Bar, ideal for exploring the coast.",
    metaTitle: "Rent a Car Petrovac | Crnogorsko Primorje | rentakar.me",
    metaDesc: "Rent a car Petrovac - mirno primorje, porodični odmor. Puno osiguranje, dostava u hotel.",
    priceFrom: 45,
    priceTo: 100,
    popularCars: ["Hyundai i10", "Renault Clio", "Dacia Sandero"],
    nearbyLocations: ["Budva", "Bar", "Sveti Stefan"],
    airportPickup: false,
  },
  {
    slug: "sveti-stefan",
    cityName: "Sveti Stefan",
    defaultPickup: "Sveti Stefan",
    h1Me: "Rent a Car Sveti Stefan",
    h1En: "Rent a Car Sveti Stefan Montenegro",
    h1De: "Mietwagen Sveti Stefan Montenegro",
    h1Ru: "Аренда авто Свети Стефан",
    descMe: "Iznajmite auto kod Svetog Stefana - jednog od najljepših mjesta na Jadranu. Istražite obalu od Budve do Petrovca u svom tempu.",
    descEn: "Rent a car near Sveti Stefan - one of the most beautiful spots on the Adriatic. Explore the coast from Budva to Petrovac at your own pace.",
    metaTitle: "Rent a Car Sveti Stefan | Luksuzna Obala | rentakar.me",
    metaDesc: "Rent a car Sveti Stefan - luksuzna obala Crne Gore. Dostava u hotel, puno osiguranje, 10+ agencija.",
    priceFrom: 48,
    priceTo: 130,
    popularCars: ["VW Golf", "Renault Captur", "Mercedes A-Class"],
    nearbyLocations: ["Budva", "Petrovac", "Bečići"],
    airportPickup: false,
  },
  {
    slug: "becici",
    cityName: "Bečići",
    defaultPickup: "Bečići",
    h1Me: "Rent a Car Bečići",
    h1En: "Rent a Car Becici Montenegro",
    h1De: "Mietwagen Bečići Montenegro",
    h1Ru: "Аренда авто Бечичи",
    descMe: "Rent a car u Bečićima - popularna turistička destinacija pored Budve sa jednom od najljepših plaža u Crnoj Gori.",
    descEn: "Car rental in Becici - popular tourist destination near Budva with one of the most beautiful beaches in Montenegro.",
    metaTitle: "Rent a Car Bečići | Plaža Bečići | rentakar.me",
    metaDesc: "Rent a car Bečići - popularna plaža, blizu Budve. Dostava u hotel, puno osiguranje.",
    priceFrom: 45,
    priceTo: 110,
    popularCars: ["Hyundai i10", "Skoda Fabia", "Renault Clio"],
    nearbyLocations: ["Budva", "Sveti Stefan", "Kotor"],
    airportPickup: false,
  },
  {
    slug: "zabljak",
    cityName: "Žabljak",
    defaultPickup: "Žabljak",
    h1Me: "Rent a Car Žabljak",
    h1En: "Rent a Car Zabljak - Durmitor",
    h1De: "Mietwagen Žabljak - Durmitor",
    h1Ru: "Аренда авто Жабляк - Дурмитор",
    descMe: "Iznajmite auto na Žabljaku - centar Durmitor nacionalnog parka. Idealno za planinski turizam, skijanje i avanturističke ture. Preporučujemo SUV/4x4 vozila.",
    descEn: "Rent a car in Zabljak - the center of Durmitor National Park. Ideal for mountain tourism, skiing and adventure tours. We recommend SUV/4x4 vehicles.",
    metaTitle: "Rent a Car Žabljak | Durmitor | SUV & 4x4 | rentakar.me",
    metaDesc: "Rent a car Žabljak Durmitor - SUV i 4x4 vozila za planinu. Lokalne agencije, puno osiguranje.",
    priceFrom: 45,
    priceTo: 110,
    popularCars: ["Dacia Duster", "Suzuki Vitara", "Jeep Renegade"],
    nearbyLocations: ["Nikšić", "Podgorica"],
    airportPickup: false,
  },
  {
    slug: "cetinje",
    cityName: "Cetinje",
    defaultPickup: "Cetinje",
    h1Me: "Rent a Car Cetinje",
    h1En: "Rent a Car Cetinje - Royal Capital",
    h1De: "Mietwagen Cetinje - Königshauptstadt",
    h1Ru: "Аренда авто Цетинье - Королевская столица",
    descMe: "Rent a car u Cetinju - prijestonica Crne Gore sa bogatom istorijom. Između Podgorice i primorja, idealna polazna tačka za obilazak zemlje.",
    descEn: "Car rental in Cetinje - the royal capital of Montenegro with rich history. Between Podgorica and the coast, ideal starting point for exploring the country.",
    metaTitle: "Rent a Car Cetinje | Prijestonica CG | rentakar.me",
    metaDesc: "Rent a car Cetinje - prijestonica Crne Gore. Između Podgorice i mora. Puno osiguranje, lokalne agencije.",
    priceFrom: 42,
    priceTo: 90,
    popularCars: ["Fiat Panda", "Renault Clio", "Dacia Sandero"],
    nearbyLocations: ["Podgorica", "Budva", "Kotor"],
    airportPickup: false,
  },
  {
    slug: "berane",
    cityName: "Berane",
    defaultPickup: "Berane",
    h1Me: "Rent a Car Berane",
    h1En: "Rent a Car Berane Montenegro",
    h1De: "Mietwagen Berane Montenegro",
    h1Ru: "Аренда авто Беране",
    descMe: "Iznajmite auto u Beranama - sjever Crne Gore. Idealno za obilazak Bjelasice, Biogradskog jezera i okolnih planina.",
    descEn: "Rent a car in Berane - northern Montenegro. Ideal for visiting Bjelasica, Biogradsko Lake and surrounding mountains.",
    metaTitle: "Rent a Car Berane | Sjever CG | rentakar.me",
    metaDesc: "Rent a car Berane - sjever Crne Gore, Bjelasica, Biogradsko jezero. Lokalne agencije, povoljne cijene.",
    priceFrom: 40,
    priceTo: 85,
    popularCars: ["Dacia Duster", "Fiat Panda", "Renault Clio"],
    nearbyLocations: ["Bijelo Polje", "Podgorica"],
    airportPickup: false,
  },
  {
    slug: "bijelo-polje",
    cityName: "Bijelo Polje",
    defaultPickup: "Bijelo Polje",
    h1Me: "Rent a Car Bijelo Polje",
    h1En: "Rent a Car Bijelo Polje Montenegro",
    h1De: "Mietwagen Bijelo Polje Montenegro",
    h1Ru: "Аренда авто Биело Поле",
    descMe: "Rent a car u Bijelom Polju - na putu između Podgorice i Srbije. Idealna lokacija za tranzitna putovanja i obilazak sjevera Crne Gore.",
    descEn: "Car rental in Bijelo Polje - on the road between Podgorica and Serbia. Ideal location for transit trips and exploring northern Montenegro.",
    metaTitle: "Rent a Car Bijelo Polje | Sjever CG | rentakar.me",
    metaDesc: "Rent a car Bijelo Polje - na putu ka Srbiji. Lokalne agencije, povoljne cijene, puno osiguranje.",
    priceFrom: 40,
    priceTo: 85,
    popularCars: ["Dacia Sandero", "Fiat Panda", "Dacia Duster"],
    nearbyLocations: ["Berane", "Podgorica"],
    airportPickup: false,
  },
  {
    slug: "pljevlja",
    cityName: "Pljevlja",
    defaultPickup: "Pljevlja",
    h1Me: "Rent a Car Pljevlja",
    h1En: "Rent a Car Pljevlja Montenegro",
    h1De: "Mietwagen Pljevlja Montenegro",
    h1Ru: "Аренда авто Плевля",
    descMe: "Iznajmite auto u Pljevljima - sjever Crne Gore, blizu granice sa Srbijom i Bosnom. Idealno za obilazak Tare i Durmitora.",
    descEn: "Rent a car in Pljevlja - northern Montenegro, near the borders with Serbia and Bosnia. Ideal for visiting the Tara River and Durmitor.",
    metaTitle: "Rent a Car Pljevlja | Tara & Durmitor | rentakar.me",
    metaDesc: "Rent a car Pljevlja - sjever CG, Tara, Durmitor. Lokalne agencije, povoljne cijene.",
    priceFrom: 40,
    priceTo: 85,
    popularCars: ["Dacia Duster", "Fiat Panda", "Renault Clio"],
    nearbyLocations: ["Žabljak", "Bijelo Polje"],
    airportPickup: false,
  },
];

/* ─── Inquiry Form Component ─── */
function LocationInquiryForm({ seoData, locData, language }: { seoData: LocationSEO; locData: any; language: string }) {
  const [formData, setFormData] = useState({
    pickup: seoData.defaultPickup,
    dropoff: "",
    pickupDate: "",
    dropoffDate: "",
    carType: "any",
    name: "",
    phone: "",
  });

  const OTHER_VALUE = "__other__";
  const [customDropoff, setCustomDropoff] = useState("");

  const otherLabel = language === "me" ? "Drugo (upišite)" : language === "de" ? "Andere (eingeben)" : language === "fr" ? "Autre (saisir)" : language === "pl" ? "Inne (wpisz)" : language === "tr" ? "Diğer (yazın)" : language === "ru" ? "Другое (введите)" : "Other (type in)";

  const carTypeOptions: Record<string, { value: string; label: string }[]> = {
    me: [
      { value: "any", label: "Svejedno" },
      { value: "economy", label: "Ekonomija (Fiat Panda, Clio...)" },
      { value: "compact", label: "Kompakt (Golf, Focus...)" },
      { value: "suv", label: "SUV (Duster, Tucson...)" },
      { value: "van", label: "Kombi / Van" },
      { value: "luxury", label: "Luksuzno vozilo" },
      { value: "automatic", label: "Automatik mjenjač" },
    ],
    en: [
      { value: "any", label: "Any" },
      { value: "economy", label: "Economy (Fiat Panda, Clio...)" },
      { value: "compact", label: "Compact (Golf, Focus...)" },
      { value: "suv", label: "SUV (Duster, Tucson...)" },
      { value: "van", label: "Van / Minivan" },
      { value: "luxury", label: "Luxury vehicle" },
      { value: "automatic", label: "Automatic transmission" },
    ],
    de: [
      { value: "any", label: "Egal" },
      { value: "economy", label: "Kleinwagen" },
      { value: "compact", label: "Kompakt" },
      { value: "suv", label: "SUV / Geländewagen" },
      { value: "van", label: "Van / Minivan" },
      { value: "luxury", label: "Luxusfahrzeug" },
      { value: "automatic", label: "Automatikgetriebe" },
    ],
    ru: [
      { value: "any", label: "Любой" },
      { value: "economy", label: "Эконом" },
      { value: "compact", label: "Компакт" },
      { value: "suv", label: "Внедорожник" },
      { value: "van", label: "Минивэн" },
      { value: "luxury", label: "Люкс" },
      { value: "automatic", label: "Автомат" },
    ],
    fr: [
      { value: "any", label: "Peu importe" },
      { value: "economy", label: "Économique" },
      { value: "compact", label: "Compacte" },
      { value: "suv", label: "SUV" },
      { value: "van", label: "Van / Monospace" },
      { value: "luxury", label: "Luxe" },
      { value: "automatic", label: "Boîte automatique" },
    ],
    pl: [
      { value: "any", label: "Dowolny" },
      { value: "economy", label: "Ekonomiczny" },
      { value: "compact", label: "Kompaktowy" },
      { value: "suv", label: "SUV / Terenowy" },
      { value: "van", label: "Van / Minivan" },
      { value: "luxury", label: "Luksusowy" },
      { value: "automatic", label: "Automat" },
    ],
    tr: [
      { value: "any", label: "Farketmez" },
      { value: "economy", label: "Ekonomik" },
      { value: "compact", label: "Kompakt" },
      { value: "suv", label: "SUV / Arazi" },
      { value: "van", label: "Van / Minivan" },
      { value: "luxury", label: "Lüks" },
      { value: "automatic", label: "Otomatik vites" },
    ],
  };

  const carTypes = carTypeOptions[language] || carTypeOptions["en"];

  const labels: Record<string, Record<string, string>> = {
    pickup: { me: "Preuzimanje", en: "Pick-up location", de: "Abholort", ru: "Место получения", fr: "Lieu de prise en charge", pl: "Miejsce odbioru", tr: "Alış yeri" },
    dropoff: { me: "Vraćanje", en: "Drop-off location", de: "Rückgabeort", ru: "Место возврата", fr: "Lieu de retour", pl: "Miejsce zwrotu", tr: "Bırakış yeri" },
    pickupDate: { me: "Datum preuzimanja", en: "Pick-up date", de: "Abholdatum", ru: "Дата получения", fr: "Date de prise en charge", pl: "Data odbioru", tr: "Alış tarihi" },
    dropoffDate: { me: "Datum vraćanja", en: "Drop-off date", de: "Rückgabedatum", ru: "Дата возврата", fr: "Date de retour", pl: "Data zwrotu", tr: "Bırakış tarihi" },
    carType: { me: "Tip vozila", en: "Car type", de: "Fahrzeugtyp", ru: "Тип авто", fr: "Type de véhicule", pl: "Typ pojazdu", tr: "Araç tipi" },
    name: { me: "Vaše ime", en: "Your name", de: "Ihr Name", ru: "Ваше имя", fr: "Votre nom", pl: "Twoje imię", tr: "Adınız" },
    phone: { me: "Telefon / WhatsApp", en: "Phone / WhatsApp", de: "Telefon / WhatsApp", ru: "Телефон / WhatsApp", fr: "Téléphone / WhatsApp", pl: "Telefon / WhatsApp", tr: "Telefon / WhatsApp" },
    submit: { me: "Pošalji upit na WhatsApp", en: "Send inquiry via WhatsApp", de: "Anfrage per WhatsApp senden", ru: "Отправить запрос в WhatsApp", fr: "Envoyer via WhatsApp", pl: "Wyślij zapytanie przez WhatsApp", tr: "WhatsApp ile gönder" },
    title: { me: "Brzi upit", en: "Quick inquiry", de: "Schnelle Anfrage", ru: "Быстрый запрос", fr: "Demande rapide", pl: "Szybkie zapytanie", tr: "Hızlı talep" },
    sameAsPickup: { me: "Isto kao preuzimanje", en: "Same as pick-up", de: "Gleich wie Abholung", ru: "Как место получения", fr: "Même que prise en charge", pl: "Tak samo jak odbiór", tr: "Alış yeri ile aynı" },
    response: { me: "Odgovaramo u roku od 2 sata", en: "We respond within 2 hours", de: "Wir antworten innerhalb von 2 Stunden", ru: "Отвечаем в течение 2 часов", fr: "Nous répondons dans les 2 heures", pl: "Odpowiadamy w ciągu 2 godzin", tr: "2 saat içinde yanıt veriyoruz" },
    placeholder: { me: "Upišite lokaciju...", en: "Type location...", de: "Ort eingeben...", ru: "Введите место...", fr: "Saisir le lieu...", pl: "Wpisz lokalizację...", tr: "Konum yazın..." },
    namePlaceholder: { me: "Ime i prezime", en: "Full name", de: "Vollständiger Name", ru: "Полное имя", fr: "Nom complet", pl: "Imię i nazwisko", tr: "Ad soyad" },
  };

  const l = (key: string) => labels[key]?.[language] || labels[key]?.["en"] || key;

  const buildWhatsAppMessage = () => {
    const dropoffVal = formData.dropoff === OTHER_VALUE ? customDropoff : (formData.dropoff || formData.pickup);
    const carLabel = carTypes.find(c => c.value === formData.carType)?.label || "—";
    const lines = [
      `🚗 *${language === "me" ? "Upit za Rent a Car" : "Car Rental Inquiry"} - ${seoData.cityName}*`,
      ``,
      `📍 ${l("pickup")}: ${formData.pickup}`,
      `📍 ${l("dropoff")}: ${dropoffVal || formData.pickup}`,
      `📅 ${l("pickupDate")}: ${formData.pickupDate || "—"}`,
      `📅 ${l("dropoffDate")}: ${formData.dropoffDate || "—"}`,
      `🚙 ${l("carType")}: ${carLabel}`,
      ``,
      `👤 ${l("name")}: ${formData.name || "—"}`,
      `📱 ${l("phone")}: ${formData.phone || "—"}`,
      ``,
      language === "me" ? "Molim vas za ponudu. Hvala!" : "Please send me an offer. Thank you!",
    ];
    return encodeURIComponent(lines.join("\n"));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send to Google Sheets
    const dropoffVal = formData.dropoff === OTHER_VALUE ? customDropoff : (formData.dropoff || formData.pickup);
    const carLabel = carTypes.find(c => c.value === formData.carType)?.label || "";
    sendToGoogleSheets({
      tab: "Rent a Car",
      name: formData.name,
      phone: formData.phone,
      pickup: formData.pickup,
      dropoff: dropoffVal,
      pickupDate: formData.pickupDate,
      dropoffDate: formData.dropoffDate,
      carType: carLabel,
      page: `Rent a Car ${seoData.cityName}`,
      language,
    });

    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
  };

  const inputClass = "w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50";
  const selectClass = `${inputClass} [&>option]:text-gray-900`;

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 lg:p-6 border border-white/15 space-y-3">
      <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
        <Send className="w-4 h-4 text-gold" />
        {l("title")}
      </h3>

      {/* Name */}
      <div>
        <label className="text-white/70 text-xs font-medium mb-1 block flex items-center gap-1.5">
          <User className="w-3 h-3" /> {l("name")}
        </label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder={l("namePlaceholder")}
          className={inputClass}
        />
      </div>

      {/* Phone */}
      <div>
        <label className="text-white/70 text-xs font-medium mb-1 block flex items-center gap-1.5">
          <Phone className="w-3 h-3" /> {l("phone")}
        </label>
        <input
          type="tel"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          placeholder="+382 68 062 259"
          className={inputClass}
        />
      </div>

      {/* Pickup - pre-set to current city */}
      <div>
        <label className="text-white/70 text-xs font-medium mb-1 block flex items-center gap-1.5">
          <MapPin className="w-3 h-3" /> {l("pickup")}
        </label>
        <select
          className={selectClass}
          value={formData.pickup}
          onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
        >
          {allLocations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
          <option value={OTHER_VALUE}>{otherLabel}</option>
        </select>
      </div>

      {/* Dropoff */}
      <div>
        <label className="text-white/70 text-xs font-medium mb-1 block flex items-center gap-1.5">
          <MapPin className="w-3 h-3" /> {l("dropoff")}
        </label>
        <select
          className={selectClass}
          value={formData.dropoff}
          onChange={(e) => setFormData({ ...formData, dropoff: e.target.value })}
        >
          <option value="">{l("sameAsPickup")}</option>
          {allLocations.map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
          <option value={OTHER_VALUE}>{otherLabel}</option>
        </select>
        {formData.dropoff === OTHER_VALUE && (
          <input
            type="text"
            className={`${inputClass} mt-1.5`}
            placeholder={l("placeholder")}
            value={customDropoff}
            onChange={(e) => setCustomDropoff(e.target.value)}
          />
        )}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div>
          <label className="text-white/70 text-xs font-medium mb-1 block flex items-center gap-1.5">
            <Calendar className="w-3 h-3" /> {l("pickupDate")}
          </label>
          <input
            type="date"
            value={formData.pickupDate}
            onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
            className={`${inputClass} [color-scheme:dark]`}
          />
        </div>
        <div>
          <label className="text-white/70 text-xs font-medium mb-1 block flex items-center gap-1.5">
            <Calendar className="w-3 h-3" /> {l("dropoffDate")}
          </label>
          <input
            type="date"
            value={formData.dropoffDate}
            onChange={(e) => setFormData({ ...formData, dropoffDate: e.target.value })}
            className={`${inputClass} [color-scheme:dark]`}
          />
        </div>
      </div>

      {/* Car type */}
      <div>
        <label className="text-white/70 text-xs font-medium mb-1 block flex items-center gap-1.5">
          <Car className="w-3 h-3" /> {l("carType")}
        </label>
        <select
          className={selectClass}
          value={formData.carType}
          onChange={(e) => setFormData({ ...formData, carType: e.target.value })}
        >
          {carTypes.map((ct) => (
            <option key={ct.value} value={ct.value}>{ct.label}</option>
          ))}
        </select>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white py-3 rounded-xl font-semibold transition-all hover:shadow-lg text-sm"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {l("submit")}
      </button>
      <p className="text-white/40 text-xs text-center">{l("response")}</p>
    </form>
  );
}

/* ─── Main Page Component ─── */
export default function LocationPage() {
  const params = useParams<{ slug: string }>();
  const { t, language } = useLanguage();

  const slug = params.slug || "";
  const seoData = locationSEOData.find((l) => l.slug === slug);
  const locData = locationsList.find((l) => l.slug === slug);

  useEffect(() => {
    if (seoData) {
      document.title = seoData.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", seoData.metaDesc);
    }
    window.scrollTo(0, 0);
  }, [slug, seoData]);

  const priceDisclaimer: Record<string, string> = {
    me: "* Cijene su okvirne i zavise od sezone, dostupnosti i tipa vozila. Konačnu cijenu određuje agencija. Što ranije rezervišete, cijene mogu biti niže!",
    en: "* Prices are approximate and depend on season, availability, and vehicle type. Final price is set by the agency. The earlier you book, the lower the price can be!",
    de: "* Preise sind ungefähr und hängen von Saison, Verfügbarkeit und Fahrzeugtyp ab. Der Endpreis wird von der Agentur festgelegt. Je früher Sie buchen, desto günstiger kann der Preis sein!",
    ru: "* Цены ориентировочные и зависят от сезона, наличия и типа автомобиля. Окончательную цену устанавливает агентство. Чем раньше бронируете, тем ниже может быть цена!",
    fr: "* Les prix sont indicatifs et dépendent de la saison, de la disponibilité et du type de véhicule. Le prix final est fixé par l'agence. Plus vous réservez tôt, plus le prix peut être bas !",
    pl: "* Ceny są orientacyjne i zależą od sezonu, dostępności i typu pojazdu. Ostateczną cenę ustala agencja. Im wcześniej zarezerwujesz, tym niższa może być cena!",
    tr: "* Fiyatlar tahminidir ve sezona, müsaitliğe ve araç tipine bağlıdır. Nihai fiyat acente tarafından belirlenir. Ne kadar erken rezervasyon yaparsanız, fiyat o kadar düşük olabilir!",
  };

  if (!seoData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-display font-bold text-2xl text-forest mb-4">
              {language === "me" ? "Lokacija nije pronađena" : "Location not found"}
            </h1>
            <Link href="/" className="text-gold hover:text-gold-dark font-medium">
              {t("location.backHome")}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const h1 =
    language === "me"
      ? seoData.h1Me
      : language === "de"
      ? seoData.h1De
      : language === "ru"
      ? seoData.h1Ru
      : seoData.h1En;

  const desc = language === "me" ? seoData.descMe : seoData.descEn;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero with Form */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={locData?.image || ""}
            alt={h1}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/70 to-forest-dark/50" />
        </div>

        <div className="container relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("location.backHome")}
          </Link>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Text content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-gold" />
                <span className="text-gold font-medium">
                  {locData?.name || slug}
                </span>
              </div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">
                {h1}
              </h1>
              <p className="text-white/80 text-lg max-w-xl leading-relaxed mb-8">
                {desc}
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                  <div className="text-gold font-display font-bold text-2xl">
                    €{seoData.priceFrom}
                  </div>
                  <div className="text-white/60 text-xs mt-0.5">
                    {t("location.from")} {t("location.perDay")}
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                  <div className="text-gold font-display font-bold text-2xl">10+</div>
                  <div className="text-white/60 text-xs mt-0.5">
                    {language === "me" ? "Agencija" : "Agencies"}
                  </div>
                </div>
                {seoData.airportPickup && (
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                    <div className="text-gold font-display font-bold text-lg">
                      {language === "me" ? "Aerodrom" : "Airport"}
                    </div>
                    <div className="text-white/60 text-xs mt-0.5">
                      {language === "me" ? "Preuzimanje" : "Pick-up"}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Right: Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <LocationInquiryForm seoData={seoData} locData={locData} language={language} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Popular cars */}
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border/50">
                <h2 className="font-display font-bold text-xl text-forest mb-4 flex items-center gap-2">
                  <Car className="w-5 h-5" />
                  {language === "me"
                    ? `Popularna vozila u lokaciji ${locData?.name}`
                    : `Popular cars in ${locData?.name}`}
                </h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {seoData.popularCars.map((car) => (
                    <div
                      key={car}
                      className="flex items-center justify-between bg-cream rounded-xl px-4 py-3"
                    >
                      <span className="font-medium text-foreground">{car}</span>
                      <span className="text-sm text-gold-dark font-semibold">
                        {t("location.from")} €{seoData.priceFrom}
                        {t("location.perDay")}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground/60 mt-3 flex items-start gap-1.5">
                  <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  {priceDisclaimer[language]}
                </p>
              </div>

              {/* Features */}
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border/50">
                <h2 className="font-display font-bold text-xl text-forest mb-4">
                  {language === "me" ? "Šta je uključeno?" : "What's included?"}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: Shield,
                      text:
                        language === "me"
                          ? "Osnovno osiguranje (CDW)"
                          : "Basic insurance (CDW)",
                    },
                    {
                      icon: Clock,
                      text:
                        language === "me"
                          ? "Neograničena kilometraža"
                          : "Unlimited mileage",
                    },
                    {
                      icon: Star,
                      text:
                        language === "me"
                          ? "Besplatna otkazivanja"
                          : "Free cancellation",
                    },
                    {
                      icon: MapPin,
                      text:
                        language === "me"
                          ? "Dostava na lokaciju"
                          : "Delivery to location",
                    },
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                        <feat.icon className="w-5 h-5 text-forest" />
                      </div>
                      <span className="text-sm text-foreground font-medium">
                        {feat.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar: Nearby locations */}
            <div>
              <div className="bg-forest rounded-2xl p-6 lg:p-8 text-white sticky top-24">
                <h3 className="font-display font-bold text-xl mb-3">
                  {language === "me"
                    ? "Obližnje lokacije"
                    : "Nearby locations"}
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  {language === "me"
                    ? "Pogledajte i ponudu u okolnim gradovima."
                    : "Check out offers in nearby cities too."}
                </p>
                <div className="flex flex-wrap gap-2">
                  {seoData.nearbyLocations.map((loc) => {
                    const nearbySlug = loc
                      .toLowerCase()
                      .replace(/š/g, "s")
                      .replace(/ž/g, "z")
                      .replace(/č/g, "c")
                      .replace(/ć/g, "c")
                      .replace(/đ/g, "dj")
                      .replace(/ /g, "-");
                    return (
                      <Link
                        key={loc}
                        href={`/rent-a-car/${nearbySlug}`}
                        className="text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-white/80 transition-colors"
                      >
                        {loc}
                      </Link>
                    );
                  })}
                </div>

                {/* Quick WhatsApp CTA */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                      `Zdravo! Zanima me rent a car u ${seoData.cityName}. Molim vas za ponudu.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white py-3 rounded-xl font-semibold transition-all hover:shadow-lg text-sm"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

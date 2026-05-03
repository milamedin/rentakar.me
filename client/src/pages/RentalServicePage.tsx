/*
 * Design: Montenegrin Trust & Warmth
 * Rental Service subpages: SEO pages for jet ski, bike, scooter, yacht, kayak, quad, motorcycle, etc.
 * Each service has a custom inquiry form in the hero section with fields specific to that service type.
 * Prices are approximate - agencies set final prices based on season/demand
 */
import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, MapPin, Clock, Shield, Star, Phone, Info, Anchor, Bike, Wind, Ship, Mountain, Send, Calendar, Users, Timer } from "lucide-react";
import { motion } from "framer-motion";
import { sendToGoogleSheets, rentalSlugToTab } from "@/lib/googleSheets";

interface FormField {
  id: string;
  labelMe: string;
  labelEn: string;
  type: "select" | "date" | "number" | "text" | "time";
  options?: { value: string; labelMe: string; labelEn: string }[];
  placeholder?: string;
  min?: number;
  max?: number;
}

interface RentalService {
  slug: string;
  icon: "jet-ski" | "bike" | "scooter" | "yacht" | "kayak" | "quad" | "motorcycle" | "boat" | "car" | "camper" | "luxury";
  h1Me: string;
  h1En: string;
  metaTitle: string;
  metaDesc: string;
  heroImage: string;
  descMe: string;
  descEn: string;
  priceFrom: number;
  priceTo: number;
  locations: string[];
  features: { me: string; en: string }[];
  faqMe: { q: string; a: string }[];
  faqEn: { q: string; a: string }[];
  formFields: FormField[];
}

const OTHER_LOCATION = "__other__";
const commonLocationOptions = (locations: string[]) => [
  ...locations.map((loc) => ({ value: loc, labelMe: loc, labelEn: loc })),
  { value: OTHER_LOCATION, labelMe: "Drugo (upišite)", labelEn: "Other (type in)" },
];

const rentalServices: RentalService[] = [
  {
    slug: "jet-ski-rental-montenegro",
    icon: "jet-ski",
    h1Me: "Jet Ski Iznajmljivanje u Crnoj Gori",
    h1En: "Jet Ski Rental in Montenegro",
    metaTitle: "Jet Ski Rental Montenegro | Budva, Kotor, Herceg Novi | rentakar.me",
    metaDesc: "Iznajmite jet ski u Crnoj Gori - Budva, Kotor, Herceg Novi, Tivat. Najbolje cijene, sigurna oprema, iskusni instruktori.",
    heroImage: "/images/services/jet-ski.jpg",
    descMe: "Doživite adrenalin na crnogorskoj obali sa jet ski iznajmljivanjem. Nudimo najnovije modele jet ski-ja na najpopularnijim lokacijama - od Budve i Kotora do Herceg Novog i Ulcinja. Naši partneri obezbjeđuju kompletnu sigurnosnu opremu, kratku obuku za početnike i fleksibilno vrijeme iznajmljivanja od 30 minuta do cijelog dana.",
    descEn: "Experience the adrenaline on the Montenegrin coast with jet ski rental. We offer the latest jet ski models at the most popular locations - from Budva and Kotor to Herceg Novi and Ulcinj. Our partners provide complete safety equipment, brief training for beginners, and flexible rental times from 30 minutes to a full day.",
    priceFrom: 50,
    priceTo: 150,
    locations: ["Budva", "Kotor", "Herceg Novi", "Tivat", "Ulcinj", "Sveti Stefan", "Bečići"],
    features: [
      { me: "Najnoviji modeli jet ski-ja", en: "Latest jet ski models" },
      { me: "Sigurnosna oprema uključena", en: "Safety equipment included" },
      { me: "Obuka za početnike", en: "Training for beginners" },
      { me: "Iznajmljivanje od 30 min", en: "Rental from 30 minutes" },
    ],
    faqMe: [
      { q: "Da li mi treba dozvola za jet ski?", a: "Za većinu iznajmljivanja nije potrebna posebna dozvola. Naši partneri obezbjeđuju kratku obuku prije vožnje." },
      { q: "Koliko košta iznajmljivanje jet ski-ja?", a: "Cijene počinju od 50€ za 30 minuta. Cijene zavise od sezone, lokacije i modela jet ski-ja." },
      { q: "Da li je jet ski siguran za početnike?", a: "Da, naši partneri nude obuku i sigurnosnu opremu. Preporučujemo da počnete sa nižom brzinom." },
    ],
    faqEn: [
      { q: "Do I need a license for jet ski?", a: "For most rentals, no special license is required. Our partners provide brief training before riding." },
      { q: "How much does jet ski rental cost?", a: "Prices start from €50 for 30 minutes. Prices depend on season, location, and jet ski model." },
      { q: "Is jet ski safe for beginners?", a: "Yes, our partners offer training and safety equipment. We recommend starting at lower speeds." },
    ],
    formFields: [
      { id: "location", labelMe: "Lokacija", labelEn: "Location", type: "select", options: commonLocationOptions(["Budva", "Kotor", "Herceg Novi", "Tivat", "Ulcinj", "Sveti Stefan", "Bečići"]) },
      { id: "date", labelMe: "Datum", labelEn: "Date", type: "date" },
      { id: "duration", labelMe: "Trajanje", labelEn: "Duration", type: "select", options: [
        { value: "30min", labelMe: "30 minuta", labelEn: "30 minutes" },
        { value: "1h", labelMe: "1 sat", labelEn: "1 hour" },
        { value: "2h", labelMe: "2 sata", labelEn: "2 hours" },
        { value: "half-day", labelMe: "Pola dana", labelEn: "Half day" },
        { value: "full-day", labelMe: "Cijeli dan", labelEn: "Full day" },
      ]},
      { id: "persons", labelMe: "Broj osoba", labelEn: "Number of persons", type: "number", min: 1, max: 4 },
    ],
  },
  {
    slug: "bike-rental-montenegro",
    icon: "bike",
    h1Me: "Iznajmljivanje Bicikala u Crnoj Gori",
    h1En: "Bike Rental in Montenegro",
    metaTitle: "Bike Rental Montenegro | Kotor, Podgorica, Budva | rentakar.me",
    metaDesc: "Iznajmite bicikl u Crnoj Gori - gradski, MTB, e-bike. Kotor, Podgorica, Budva. Najbolje cijene od lokalnih partnera.",
    heroImage: "/images/services/bike.jpg",
    descMe: "Istražite Crnu Goru na dva točka. Nudimo gradske bicikle, mountain bike-ove i e-bike-ove na svim popularnim lokacijama. Idealno za obilazak Boke Kotorske, vožnju kroz Podgoricu ili avanturističke ture po planinskim stazama Durmitora.",
    descEn: "Explore Montenegro on two wheels. We offer city bikes, mountain bikes, and e-bikes at all popular locations. Ideal for touring the Bay of Kotor, riding through Podgorica, or adventure tours on Durmitor mountain trails.",
    priceFrom: 10,
    priceTo: 40,
    locations: ["Kotor", "Podgorica", "Budva", "Tivat", "Herceg Novi", "Žabljak"],
    features: [
      { me: "Gradski, MTB i e-bike modeli", en: "City, MTB and e-bike models" },
      { me: "Kaciga i brava uključene", en: "Helmet and lock included" },
      { me: "Dostava na lokaciju", en: "Delivery to location" },
      { me: "Dnevno ili sedmično iznajmljivanje", en: "Daily or weekly rental" },
    ],
    faqMe: [
      { q: "Koje tipove bicikala nudite?", a: "Nudimo gradske bicikle, mountain bike-ove i električne bicikle (e-bike). Izbor zavisi od lokacije." },
      { q: "Da li je kaciga uključena?", a: "Da, kaciga i brava su uključene u cijenu iznajmljivanja." },
      { q: "Mogu li iznajmiti bicikl na duži period?", a: "Da, nudimo dnevne, sedmične i mjesečne tarife sa popustima za duže periode." },
    ],
    faqEn: [
      { q: "What types of bikes do you offer?", a: "We offer city bikes, mountain bikes, and electric bikes (e-bikes). Selection depends on location." },
      { q: "Is a helmet included?", a: "Yes, helmet and lock are included in the rental price." },
      { q: "Can I rent a bike for a longer period?", a: "Yes, we offer daily, weekly, and monthly rates with discounts for longer periods." },
    ],
    formFields: [
      { id: "location", labelMe: "Lokacija", labelEn: "Location", type: "select", options: commonLocationOptions(["Kotor", "Podgorica", "Budva", "Tivat", "Herceg Novi", "Žabljak"]) },
      { id: "bikeType", labelMe: "Tip bicikla", labelEn: "Bike type", type: "select", options: [
        { value: "city", labelMe: "Gradski bicikl", labelEn: "City bike" },
        { value: "mtb", labelMe: "Mountain bike (MTB)", labelEn: "Mountain bike (MTB)" },
        { value: "ebike", labelMe: "Električni bicikl (e-bike)", labelEn: "Electric bike (e-bike)" },
      ]},
      { id: "dateFrom", labelMe: "Datum od", labelEn: "Date from", type: "date" },
      { id: "dateTo", labelMe: "Datum do", labelEn: "Date to", type: "date" },
      { id: "quantity", labelMe: "Broj bicikala", labelEn: "Number of bikes", type: "number", min: 1, max: 10 },
    ],
  },
  {
    slug: "scooter-rental-montenegro",
    icon: "scooter",
    h1Me: "Iznajmljivanje Skutera u Crnoj Gori",
    h1En: "Scooter Rental in Montenegro",
    metaTitle: "Scooter Rental Montenegro | Kotor, Budva, Tivat | rentakar.me",
    metaDesc: "Iznajmite skuter u Crnoj Gori - Kotor, Budva, Tivat. Vespa, Honda, Piaggio. Najbolje cijene, kaciga uključena.",
    heroImage: "/images/services/scooter.jpg",
    descMe: "Skuter je savršen način za istraživanje crnogorske obale. Izbjegnite gužve u saobraćaju i lako pronađite parking u uskim ulicama primorskih gradova. Nudimo Vespa, Honda i Piaggio skutere sa punim osiguranjem i kacigom.",
    descEn: "A scooter is the perfect way to explore the Montenegrin coast. Avoid traffic jams and easily find parking in the narrow streets of coastal towns. We offer Vespa, Honda, and Piaggio scooters with full insurance and helmet.",
    priceFrom: 25,
    priceTo: 60,
    locations: ["Kotor", "Budva", "Tivat", "Herceg Novi", "Ulcinj", "Bar"],
    features: [
      { me: "Vespa, Honda, Piaggio modeli", en: "Vespa, Honda, Piaggio models" },
      { me: "Kaciga i osiguranje uključeni", en: "Helmet and insurance included" },
      { me: "Lako parkiranje", en: "Easy parking" },
      { me: "50cc i 125cc opcije", en: "50cc and 125cc options" },
    ],
    faqMe: [
      { q: "Koja dozvola mi treba za skuter?", a: "Za 50cc skuter dovoljna je B kategorija vozačke dozvole. Za 125cc potrebna je A1 kategorija." },
      { q: "Da li je osiguranje uključeno?", a: "Da, osnovno osiguranje i kaciga su uključeni u cijenu." },
    ],
    faqEn: [
      { q: "What license do I need for a scooter?", a: "For a 50cc scooter, a B category driving license is sufficient. For 125cc, an A1 category is needed." },
      { q: "Is insurance included?", a: "Yes, basic insurance and helmet are included in the price." },
    ],
    formFields: [
      { id: "location", labelMe: "Lokacija preuzimanja", labelEn: "Pickup location", type: "select", options: commonLocationOptions(["Kotor", "Budva", "Tivat", "Herceg Novi", "Ulcinj", "Bar"]) },
      { id: "engineSize", labelMe: "Kubikaža", labelEn: "Engine size", type: "select", options: [
        { value: "50cc", labelMe: "50cc (B dozvola)", labelEn: "50cc (B license)" },
        { value: "125cc", labelMe: "125cc (A1 dozvola)", labelEn: "125cc (A1 license)" },
      ]},
      { id: "dateFrom", labelMe: "Datum od", labelEn: "Date from", type: "date" },
      { id: "dateTo", labelMe: "Datum do", labelEn: "Date to", type: "date" },
    ],
  },
  {
    slug: "yacht-rental-montenegro",
    icon: "yacht",
    h1Me: "Iznajmljivanje Jahti i Brodova u Crnoj Gori",
    h1En: "Yacht & Boat Rental in Montenegro",
    metaTitle: "Yacht Rental Montenegro | Budva, Kotor, Tivat | rentakar.me",
    metaDesc: "Iznajmite jahtu ili brod u Crnoj Gori - Budva, Kotor, Porto Montenegro. Sa ili bez skipera. Dnevni izleti i charter.",
    heroImage: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=1200&h=600&fit=crop",
    descMe: "Istražite crnogorsku obalu sa mora. Nudimo jahte, jedrilice, motorke i katamrane za dnevne izlete ili višednevni charter. Porto Montenegro u Tivtu, Budva marina i Kotor su naše glavne polazne tačke. Dostupno sa ili bez skipera.",
    descEn: "Explore the Montenegrin coast from the sea. We offer yachts, sailboats, motorboats, and catamarans for day trips or multi-day charter. Porto Montenegro in Tivat, Budva marina, and Kotor are our main departure points. Available with or without skipper.",
    priceFrom: 200,
    priceTo: 2000,
    locations: ["Tivat (Porto Montenegro)", "Budva", "Kotor", "Herceg Novi", "Bar"],
    features: [
      { me: "Jahte, jedrilice, motorke", en: "Yachts, sailboats, motorboats" },
      { me: "Sa ili bez skipera", en: "With or without skipper" },
      { me: "Dnevni izleti i charter", en: "Day trips and charter" },
      { me: "Gorivo uključeno (opciono)", en: "Fuel included (optional)" },
    ],
    faqMe: [
      { q: "Da li mogu iznajmiti jahtu bez skipera?", a: "Da, ako imate odgovarajuću plovidbenu dozvolu. U suprotnom, obezbjeđujemo iskusnog skipera." },
      { q: "Koliko unaprijed treba rezervisati?", a: "Preporučujemo rezervaciju najmanje 3-7 dana unaprijed, posebno u ljetnoj sezoni." },
    ],
    faqEn: [
      { q: "Can I rent a yacht without a skipper?", a: "Yes, if you have the appropriate sailing license. Otherwise, we provide an experienced skipper." },
      { q: "How far in advance should I book?", a: "We recommend booking at least 3-7 days in advance, especially during summer season." },
    ],
    formFields: [
      { id: "boatType", labelMe: "Tip plovila", labelEn: "Boat type", type: "select", options: [
        { value: "motorboat", labelMe: "Motorni brod", labelEn: "Motorboat" },
        { value: "sailboat", labelMe: "Jedrilica", labelEn: "Sailboat" },
        { value: "yacht", labelMe: "Jahta", labelEn: "Yacht" },
        { value: "catamaran", labelMe: "Katamaran", labelEn: "Catamaran" },
      ]},
      { id: "location", labelMe: "Polazna marina", labelEn: "Departure marina", type: "select", options: commonLocationOptions(["Tivat (Porto Montenegro)", "Budva", "Kotor", "Herceg Novi", "Bar"]) },
      { id: "date", labelMe: "Datum", labelEn: "Date", type: "date" },
      { id: "guests", labelMe: "Broj gostiju", labelEn: "Number of guests", type: "number", min: 1, max: 20 },
      { id: "skipper", labelMe: "Skiper", labelEn: "Skipper", type: "select", options: [
        { value: "with", labelMe: "Sa skiperom", labelEn: "With skipper" },
        { value: "without", labelMe: "Bez skipera (imam dozvolu)", labelEn: "Without skipper (I have a license)" },
      ]},
    ],
  },
  {
    slug: "kayak-rental-montenegro",
    icon: "kayak",
    h1Me: "Kajak Iznajmljivanje u Crnoj Gori",
    h1En: "Kayak Rental in Montenegro",
    metaTitle: "Kayak Rental Montenegro | Kotor, Tara River | rentakar.me",
    metaDesc: "Iznajmite kajak u Crnoj Gori - Boka Kotorska, rijeka Tara. Vođene ture i samostalno veslanje. Oprema uključena.",
    heroImage: "/images/services/kayak.jpg",
    descMe: "Kajak je jedan od najboljih načina da doživite ljepotu Boke Kotorske i rijeke Tare. Nudimo jednodnevne i višednevne kajak ture, kao i samostalno iznajmljivanje kajaka. Kompletna oprema (prsluk, veslo, vodootporna torba) je uključena.",
    descEn: "Kayaking is one of the best ways to experience the beauty of the Bay of Kotor and the Tara River. We offer single and multi-day kayak tours, as well as independent kayak rental. Complete equipment (vest, paddle, waterproof bag) is included.",
    priceFrom: 25,
    priceTo: 80,
    locations: ["Kotor", "Perast", "Tara River", "Skadarsko Jezero", "Herceg Novi"],
    features: [
      { me: "Kompletna oprema uključena", en: "Complete equipment included" },
      { me: "Jednodnevne i višednevne ture", en: "Single and multi-day tours" },
      { me: "Vođene ture sa vodičem", en: "Guided tours with instructor" },
      { me: "Samostalno iznajmljivanje", en: "Independent rental available" },
    ],
    faqMe: [
      { q: "Da li treba iskustvo za kajak?", a: "Ne, naši vodiči pružaju obuku za početnike. Ture su prilagođene svim nivoima iskustva." },
      { q: "Šta je uključeno u cijenu?", a: "Kajak, veslo, sigurnosni prsluk i vodootporna torba. Vođene ture uključuju i vodiča." },
    ],
    faqEn: [
      { q: "Do I need experience for kayaking?", a: "No, our guides provide training for beginners. Tours are adapted to all experience levels." },
      { q: "What's included in the price?", a: "Kayak, paddle, safety vest, and waterproof bag. Guided tours also include a guide." },
    ],
    formFields: [
      { id: "location", labelMe: "Lokacija", labelEn: "Location", type: "select", options: commonLocationOptions(["Kotor", "Perast", "Tara River", "Skadarsko Jezero", "Herceg Novi"]) },
      { id: "tourType", labelMe: "Tip ture", labelEn: "Tour type", type: "select", options: [
        { value: "guided", labelMe: "Vođena tura sa vodičem", labelEn: "Guided tour with instructor" },
        { value: "self", labelMe: "Samostalno iznajmljivanje", labelEn: "Independent rental" },
      ]},
      { id: "date", labelMe: "Datum", labelEn: "Date", type: "date" },
      { id: "persons", labelMe: "Broj osoba", labelEn: "Number of persons", type: "number", min: 1, max: 12 },
      { id: "kayakType", labelMe: "Tip kajaka", labelEn: "Kayak type", type: "select", options: [
        { value: "single", labelMe: "Jednosed", labelEn: "Single kayak" },
        { value: "double", labelMe: "Dvosed", labelEn: "Double kayak" },
      ]},
    ],
  },
  {
    slug: "quad-rental-montenegro",
    icon: "quad",
    h1Me: "Quad Iznajmljivanje u Crnoj Gori",
    h1En: "Quad / ATV Rental in Montenegro",
    metaTitle: "Quad Rental Montenegro | ATV Ture | Budva, Kotor | rentakar.me",
    metaDesc: "Iznajmite quad (ATV) u Crnoj Gori - Budva, Kotor, Žabljak. Vođene ture po planinama i obali. Adrenalin garantovan!",
    heroImage: "/images/services/quad.jpg",
    descMe: "Quad ture su savršen način za avanturiste koji žele da istraže crnogorske planine i skrivene staze. Nudimo vođene quad ture od Budve do planina iznad Kotora, kao i ture po Durmitoru. Sva oprema i obuka su uključeni.",
    descEn: "Quad tours are the perfect way for adventurers who want to explore Montenegrin mountains and hidden trails. We offer guided quad tours from Budva to the mountains above Kotor, as well as tours in Durmitor. All equipment and training included.",
    priceFrom: 60,
    priceTo: 200,
    locations: ["Budva", "Kotor", "Žabljak", "Cetinje", "Podgorica"],
    features: [
      { me: "Vođene ture sa vodičem", en: "Guided tours with instructor" },
      { me: "Kaciga i oprema uključeni", en: "Helmet and equipment included" },
      { me: "Ture od 2-6 sati", en: "Tours from 2-6 hours" },
      { me: "Planinske i obalne rute", en: "Mountain and coastal routes" },
    ],
    faqMe: [
      { q: "Da li mi treba vozačka dozvola za quad?", a: "Da, potrebna je B kategorija vozačke dozvole. Minimalna starost je 18 godina." },
      { q: "Koliko traje quad tura?", a: "Ture traju od 2 do 6 sati, u zavisnosti od rute. Najpopularnije su 3-satne ture." },
    ],
    faqEn: [
      { q: "Do I need a driving license for quad?", a: "Yes, a B category driving license is required. Minimum age is 18 years." },
      { q: "How long does a quad tour last?", a: "Tours last from 2 to 6 hours, depending on the route. The most popular are 3-hour tours." },
    ],
    formFields: [
      { id: "location", labelMe: "Polazna lokacija", labelEn: "Starting location", type: "select", options: commonLocationOptions(["Budva", "Kotor", "Žabljak", "Cetinje", "Podgorica"]) },
      { id: "date", labelMe: "Datum", labelEn: "Date", type: "date" },
      { id: "duration", labelMe: "Trajanje ture", labelEn: "Tour duration", type: "select", options: [
        { value: "2h", labelMe: "2 sata", labelEn: "2 hours" },
        { value: "3h", labelMe: "3 sata", labelEn: "3 hours" },
        { value: "4h", labelMe: "4 sata", labelEn: "4 hours" },
        { value: "6h", labelMe: "6 sati (cijeli dan)", labelEn: "6 hours (full day)" },
      ]},
      { id: "persons", labelMe: "Broj vozača", labelEn: "Number of riders", type: "number", min: 1, max: 8 },
    ],
  },
  {
    slug: "motorcycle-rental-montenegro",
    icon: "motorcycle",
    h1Me: "Iznajmljivanje Motocikala u Crnoj Gori",
    h1En: "Motorcycle Rental in Montenegro",
    metaTitle: "Motorcycle Rental Montenegro | Harley, BMW, Honda | rentakar.me",
    metaDesc: "Iznajmite motocikl u Crnoj Gori - Harley Davidson, BMW, Honda. Idealno za road trip po Balkanu. Kaciga uključena.",
    heroImage: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1200&h=600&fit=crop",
    descMe: "Crna Gora je raj za motocikliste - vijugave obalne ceste, planinski prelazi i spektakularni pejzaži. Nudimo širok izbor motocikala od 125cc do 1200cc, uključujući Harley Davidson, BMW i Honda modele. Kaciga i osnovno osiguranje su uključeni.",
    descEn: "Montenegro is a paradise for motorcyclists - winding coastal roads, mountain passes, and spectacular landscapes. We offer a wide selection of motorcycles from 125cc to 1200cc, including Harley Davidson, BMW, and Honda models. Helmet and basic insurance included.",
    priceFrom: 40,
    priceTo: 150,
    locations: ["Podgorica", "Budva", "Tivat", "Kotor", "Herceg Novi"],
    features: [
      { me: "125cc do 1200cc modeli", en: "125cc to 1200cc models" },
      { me: "Kaciga i osiguranje uključeni", en: "Helmet and insurance included" },
      { me: "Harley, BMW, Honda, Yamaha", en: "Harley, BMW, Honda, Yamaha" },
      { me: "Preuzimanje na aerodromu", en: "Airport pickup available" },
    ],
    faqMe: [
      { q: "Koja dozvola mi treba?", a: "Za motocikle iznad 125cc potrebna je A kategorija vozačke dozvole. Za 125cc dovoljna je A1 kategorija." },
      { q: "Da li mogu putovati u susjedne zemlje?", a: "Da, uz prethodno obavještenje. Potrebna je zelena karta osiguranja za prelazak granice." },
    ],
    faqEn: [
      { q: "What license do I need?", a: "For motorcycles above 125cc, an A category driving license is required. For 125cc, A1 category is sufficient." },
      { q: "Can I travel to neighboring countries?", a: "Yes, with prior notice. A green card insurance is needed for border crossing." },
    ],
    formFields: [
      { id: "location", labelMe: "Lokacija preuzimanja", labelEn: "Pickup location", type: "select", options: commonLocationOptions(["Podgorica", "Budva", "Tivat", "Kotor", "Herceg Novi"]) },
      { id: "motoType", labelMe: "Tip motocikla", labelEn: "Motorcycle type", type: "select", options: [
        { value: "125cc", labelMe: "125cc (A1 dozvola)", labelEn: "125cc (A1 license)" },
        { value: "300-600cc", labelMe: "300-600cc sport/touring", labelEn: "300-600cc sport/touring" },
        { value: "600-900cc", labelMe: "600-900cc adventure", labelEn: "600-900cc adventure" },
        { value: "1000cc+", labelMe: "1000cc+ (Harley, BMW GS)", labelEn: "1000cc+ (Harley, BMW GS)" },
      ]},
      { id: "dateFrom", labelMe: "Datum od", labelEn: "Date from", type: "date" },
      { id: "dateTo", labelMe: "Datum do", labelEn: "Date to", type: "date" },
      { id: "crossBorder", labelMe: "Prelazak granice?", labelEn: "Cross-border travel?", type: "select", options: [
        { value: "no", labelMe: "Ne, samo Crna Gora", labelEn: "No, Montenegro only" },
        { value: "yes", labelMe: "Da (Hrvatska, Albanija, BiH...)", labelEn: "Yes (Croatia, Albania, BiH...)" },
      ]},
    ],
  },
  {
    slug: "camper-van-rental-montenegro",
    icon: "camper",
    h1Me: "Iznajmljivanje Kampera u Crnoj Gori",
    h1En: "Camper Van Rental in Montenegro",
    metaTitle: "Camper Van Rental Montenegro | Kamper Iznajmljivanje | rentakar.me",
    metaDesc: "Iznajmite kamper u Crnoj Gori - istražite Durmitor, obalu i nacionalne parkove. Potpuno opremljeni kamperi.",
    heroImage: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1200&h=600&fit=crop",
    descMe: "Istražite Crnu Goru u svom tempu sa potpuno opremljenim kamperom. Od obale Jadrana do planina Durmitora - kamper vam daje slobodu da stanete gdje god želite. Naši kamperi dolaze sa kuhinjom, krevetom, tušem i svim potrebnim za udobno putovanje.",
    descEn: "Explore Montenegro at your own pace with a fully equipped camper van. From the Adriatic coast to the mountains of Durmitor - a camper gives you the freedom to stop wherever you want. Our campers come with kitchen, bed, shower, and everything needed for comfortable travel.",
    priceFrom: 70,
    priceTo: 180,
    locations: ["Podgorica", "Tivat", "Budva"],
    features: [
      { me: "Potpuno opremljeni kamperi", en: "Fully equipped camper vans" },
      { me: "Kuhinja, krevet, tuš", en: "Kitchen, bed, shower" },
      { me: "Neograničena kilometraža", en: "Unlimited mileage" },
      { me: "Osiguranje uključeno", en: "Insurance included" },
    ],
    faqMe: [
      { q: "Koja dozvola mi treba za kamper?", a: "B kategorija vozačke dozvole je dovoljna za većinu kampera (do 3.5t)." },
      { q: "Gdje mogu parkirati kamper?", a: "U Crnoj Gori postoji nekoliko kampova i mjesta za kampere. Divlje kampovanje nije dozvoljeno u nacionalnim parkovima." },
    ],
    faqEn: [
      { q: "What license do I need for a camper?", a: "A B category driving license is sufficient for most campers (up to 3.5t)." },
      { q: "Where can I park the camper?", a: "Montenegro has several campsites and camper spots. Wild camping is not allowed in national parks." },
    ],
    formFields: [
      { id: "location", labelMe: "Lokacija preuzimanja", labelEn: "Pickup location", type: "select", options: commonLocationOptions(["Podgorica", "Tivat", "Budva"]) },
      { id: "camperSize", labelMe: "Veličina kampera", labelEn: "Camper size", type: "select", options: [
        { value: "2p", labelMe: "Za 2 osobe (mali)", labelEn: "For 2 persons (small)" },
        { value: "4p", labelMe: "Za 4 osobe (srednji)", labelEn: "For 4 persons (medium)" },
        { value: "6p", labelMe: "Za 6 osoba (veliki)", labelEn: "For 6 persons (large)" },
      ]},
      { id: "dateFrom", labelMe: "Datum od", labelEn: "Date from", type: "date" },
      { id: "dateTo", labelMe: "Datum do", labelEn: "Date to", type: "date" },
      { id: "persons", labelMe: "Broj putnika", labelEn: "Number of travelers", type: "number", min: 1, max: 6 },
    ],
  },
  {
    slug: "luxury-car-rental-montenegro",
    icon: "luxury",
    h1Me: "Luksuzna Vozila za Iznajmljivanje u Crnoj Gori",
    h1En: "Luxury Car Rental in Montenegro",
    metaTitle: "Luxury Car Rental Montenegro | Mercedes, BMW, Porsche | rentakar.me",
    metaDesc: "Iznajmite luksuzno vozilo u Crnoj Gori - Mercedes, BMW, Porsche, Range Rover. Porto Montenegro, Budva, Podgorica.",
    heroImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=600&fit=crop",
    descMe: "Za posebne prilike ili jednostavno uživanje u vožnji, nudimo luksuzna vozila vrhunskih brendova. Mercedes S-Class, BMW 7 Series, Porsche Cayenne, Range Rover - izaberite vozilo koje odgovara vašem stilu. Dostava na aerodrom ili hotel.",
    descEn: "For special occasions or simply enjoying the drive, we offer luxury vehicles from top brands. Mercedes S-Class, BMW 7 Series, Porsche Cayenne, Range Rover - choose the vehicle that matches your style. Delivery to airport or hotel.",
    priceFrom: 100,
    priceTo: 500,
    locations: ["Tivat (Porto Montenegro)", "Budva", "Podgorica", "Kotor"],
    features: [
      { me: "Mercedes, BMW, Porsche, Range Rover", en: "Mercedes, BMW, Porsche, Range Rover" },
      { me: "Dostava na aerodrom/hotel", en: "Airport/hotel delivery" },
      { me: "Puno osiguranje", en: "Full insurance" },
      { me: "24/7 podrška", en: "24/7 support" },
    ],
    faqMe: [
      { q: "Koji je minimalni period iznajmljivanja?", a: "Minimalni period je obično 2-3 dana za luksuzna vozila, ali zavisi od agencije." },
      { q: "Da li je depozit potreban?", a: "Da, za luksuzna vozila obično je potreban depozit koji se blokira na kreditnoj kartici." },
    ],
    faqEn: [
      { q: "What is the minimum rental period?", a: "The minimum period is usually 2-3 days for luxury vehicles, but depends on the agency." },
      { q: "Is a deposit required?", a: "Yes, for luxury vehicles a deposit is usually required, blocked on a credit card." },
    ],
    formFields: [
      { id: "carBrand", labelMe: "Željeni brend", labelEn: "Preferred brand", type: "select", options: [
        { value: "mercedes", labelMe: "Mercedes-Benz", labelEn: "Mercedes-Benz" },
        { value: "bmw", labelMe: "BMW", labelEn: "BMW" },
        { value: "porsche", labelMe: "Porsche", labelEn: "Porsche" },
        { value: "range-rover", labelMe: "Range Rover", labelEn: "Range Rover" },
        { value: "audi", labelMe: "Audi", labelEn: "Audi" },
        { value: "other", labelMe: "Drugo (navedite u poruci)", labelEn: "Other (specify in message)" },
      ]},
      { id: "location", labelMe: "Lokacija preuzimanja", labelEn: "Pickup location", type: "select", options: commonLocationOptions(["Tivat (Porto Montenegro)", "Budva", "Podgorica", "Kotor"]) },
      { id: "dateFrom", labelMe: "Datum od", labelEn: "Date from", type: "date" },
      { id: "dateTo", labelMe: "Datum do", labelEn: "Date to", type: "date" },
      { id: "occasion", labelMe: "Povod (opciono)", labelEn: "Occasion (optional)", type: "select", options: [
        { value: "vacation", labelMe: "Odmor", labelEn: "Vacation" },
        { value: "wedding", labelMe: "Svadba", labelEn: "Wedding" },
        { value: "business", labelMe: "Poslovni put", labelEn: "Business trip" },
        { value: "other", labelMe: "Drugo", labelEn: "Other" },
      ]},
    ],
  },
  {
    slug: "cheap-car-rental-montenegro",
    icon: "car",
    h1Me: "Jeftini Rent a Car u Crnoj Gori",
    h1En: "Cheap Car Rental in Montenegro",
    metaTitle: "Cheap Car Rental Montenegro | Jeftini Rent a Car | rentakar.me",
    metaDesc: "Najjeftiniji rent a car u Crnoj Gori. Poredimo cijene od 10+ agencija. Ekonomija vozila, puno osiguranje, bez skrivenih troškova.",
    heroImage: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&h=600&fit=crop",
    descMe: "Tražite najjeftiniji rent a car u Crnoj Gori? Na pravom ste mjestu. Poredimo ponude od 10+ lokalnih agencija da vam nađemo najnižu cijenu. Ekonomija vozila sa punim osiguranjem i bez skrivenih troškova. Pošaljite upit i dobićete ponudu za 2 sata.",
    descEn: "Looking for the cheapest car rental in Montenegro? You're in the right place. We compare offers from 10+ local agencies to find you the lowest price. Economy vehicles with full insurance and no hidden fees. Send an inquiry and get an offer within 2 hours.",
    priceFrom: 40,
    priceTo: 75,
    locations: ["Podgorica", "Tivat", "Budva", "Bar", "Nikšić"],
    features: [
      { me: "Poređenje cijena od 10+ agencija", en: "Price comparison from 10+ agencies" },
      { me: "Ekonomija vozila od 40€/dan", en: "Economy vehicles from €40/day" },
      { me: "Bez skrivenih troškova", en: "No hidden fees" },
      { me: "Puno osiguranje uključeno", en: "Full insurance included" },
    ],
    faqMe: [
      { q: "Koji je najjeftiniji auto za iznajmljivanje?", a: "Najjeftinija opcija su ekonomija vozila poput Fiat Panda ili Dacia Sandero, sa cijenama od 40€/dan u sezoni. Što ranije rezervišete, cijene mogu biti niže!" },
      { q: "Da li ima skrivenih troškova?", a: "Ne, sve naše partnerske agencije nude transparentne cijene. Osiguranje i PDV su uključeni." },
    ],
    faqEn: [
      { q: "What is the cheapest car to rent?", a: "The cheapest option is economy vehicles like Fiat Panda or Dacia Sandero, with prices from €40/day in season. The earlier you book, the lower the price can be!" },
      { q: "Are there hidden fees?", a: "No, all our partner agencies offer transparent pricing. Insurance and VAT are included." },
    ],
    formFields: [
      { id: "location", labelMe: "Lokacija preuzimanja", labelEn: "Pickup location", type: "select", options: commonLocationOptions(["Podgorica", "Tivat", "Budva", "Bar", "Nikšić"]) },
      { id: "carType", labelMe: "Tip vozila", labelEn: "Car type", type: "select", options: [
        { value: "mini", labelMe: "Mini (Fiat Panda, VW Up)", labelEn: "Mini (Fiat Panda, VW Up)" },
        { value: "economy", labelMe: "Ekonomija (Dacia Sandero, Clio)", labelEn: "Economy (Dacia Sandero, Clio)" },
        { value: "compact", labelMe: "Kompakt (VW Golf, Toyota Corolla)", labelEn: "Compact (VW Golf, Toyota Corolla)" },
        { value: "any", labelMe: "Svejedno, najjeftiniji", labelEn: "Any, cheapest available" },
      ]},
      { id: "dateFrom", labelMe: "Datum od", labelEn: "Date from", type: "date" },
      { id: "dateTo", labelMe: "Datum do", labelEn: "Date to", type: "date" },
      { id: "transmission", labelMe: "Mjenjač", labelEn: "Transmission", type: "select", options: [
        { value: "manual", labelMe: "Manuelni", labelEn: "Manual" },
        { value: "automatic", labelMe: "Automatik", labelEn: "Automatic" },
        { value: "any", labelMe: "Svejedno", labelEn: "Any" },
      ]},
    ],
  },
  {
    slug: "long-term-car-rental-montenegro",
    icon: "car",
    h1Me: "Dugoročno Iznajmljivanje Auta u Crnoj Gori",
    h1En: "Long Term Car Rental in Montenegro",
    metaTitle: "Long Term Car Rental Montenegro | Mjesečni Najam | rentakar.me",
    metaDesc: "Dugoročno iznajmljivanje auta u Crnoj Gori - mjesečni i sezonski najam po sniženim cijenama. Sva vozila sa osiguranjem.",
    heroImage: "/images/services/long-term.jpg",
    descMe: "Za boravke duže od 2 sedmice, dugoročno iznajmljivanje je najisplativija opcija. Nudimo mjesečne i sezonske tarife sa značajnim popustima u odnosu na dnevne cijene. Idealno za digitalne nomade, sezonske radnike i duže odmore u Crnoj Gori.",
    descEn: "For stays longer than 2 weeks, long-term rental is the most cost-effective option. We offer monthly and seasonal rates with significant discounts compared to daily prices. Ideal for digital nomads, seasonal workers, and extended holidays in Montenegro.",
    priceFrom: 350,
    priceTo: 900,
    locations: ["Podgorica", "Budva", "Tivat", "Bar", "Kotor"],
    features: [
      { me: "Mjesečne i sezonske tarife", en: "Monthly and seasonal rates" },
      { me: "Do 40% popusta na dnevnu cijenu", en: "Up to 40% discount on daily price" },
      { me: "Zamjena vozila uključena", en: "Vehicle replacement included" },
      { me: "Puno osiguranje i servis", en: "Full insurance and service" },
    ],
    faqMe: [
      { q: "Koliki je popust za dugoročni najam?", a: "Popusti idu do 40% u odnosu na dnevnu cijenu, u zavisnosti od perioda i agencije." },
      { q: "Da li mogu produžiti period najma?", a: "Da, produženje je moguće uz prethodno obavještenje. Kontaktirajte nas za detalje." },
    ],
    faqEn: [
      { q: "How much discount for long-term rental?", a: "Discounts go up to 40% compared to daily price, depending on the period and agency." },
      { q: "Can I extend the rental period?", a: "Yes, extension is possible with prior notice. Contact us for details." },
    ],
    formFields: [
      { id: "location", labelMe: "Lokacija preuzimanja", labelEn: "Pickup location", type: "select", options: commonLocationOptions(["Podgorica", "Budva", "Tivat", "Bar", "Kotor"]) },
      { id: "carType", labelMe: "Tip vozila", labelEn: "Car type", type: "select", options: [
        { value: "economy", labelMe: "Ekonomija", labelEn: "Economy" },
        { value: "compact", labelMe: "Kompakt", labelEn: "Compact" },
        { value: "suv", labelMe: "SUV", labelEn: "SUV" },
        { value: "any", labelMe: "Svejedno", labelEn: "Any" },
      ]},
      { id: "period", labelMe: "Period najma", labelEn: "Rental period", type: "select", options: [
        { value: "2weeks", labelMe: "2 sedmice", labelEn: "2 weeks" },
        { value: "1month", labelMe: "1 mjesec", labelEn: "1 month" },
        { value: "3months", labelMe: "3 mjeseca", labelEn: "3 months" },
        { value: "6months", labelMe: "6 mjeseci", labelEn: "6 months" },
        { value: "season", labelMe: "Cijela sezona (maj-oktobar)", labelEn: "Full season (May-October)" },
      ]},
      { id: "dateFrom", labelMe: "Datum početka", labelEn: "Start date", type: "date" },
    ],
  },
];

const iconMap: Record<string, typeof Anchor> = {
  "jet-ski": Wind,
  "bike": Bike,
  "scooter": Wind,
  "yacht": Ship,
  "kayak": Anchor,
  "quad": Mountain,
  "motorcycle": Wind,
  "boat": Ship,
  "car": Star,
  "camper": Mountain,
  "luxury": Star,
};

/* ─── Inline Form Component ─── */
function InquiryForm({ service, language }: { service: RentalService; language: string }) {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [name, setName] = useState("");
  const [customInputs, setCustomInputs] = useState<Record<string, string>>({});

  const handleChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const buildWhatsAppMessage = () => {
    const h1 = language === "me" ? service.h1Me : service.h1En;
    const lines: string[] = [];
    lines.push(language === "me" ? `Zdravo! Imam upit za: ${h1}` : `Hello! I have an inquiry for: ${h1}`);
    if (name) lines.push(language === "me" ? `Ime: ${name}` : `Name: ${name}`);
    service.formFields.forEach((field) => {
      const val = formData[field.id];
      if (val) {
        const label = language === "me" ? field.labelMe : field.labelEn;
        let displayVal = val;
        if (val === OTHER_LOCATION && customInputs[field.id]) {
          displayVal = customInputs[field.id];
        } else if (field.type === "select" && field.options) {
          const opt = field.options.find((o) => o.value === val);
          if (opt) displayVal = language === "me" ? opt.labelMe : opt.labelEn;
        }
        lines.push(`${label}: ${displayVal}`);
      }
    });
    lines.push(language === "me" ? "\nMolim vas za ponudu. Hvala!" : "\nPlease send me an offer. Thank you!");
    return lines.join("\n");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send to Google Sheets
    const tab = rentalSlugToTab[service.slug] || "Rent a Car";
    const sheetData: Record<string, string> = { tab, page: service.slug, language };
    if (name) sheetData.name = name;

    // Map form fields to sheet columns based on tab type
    service.formFields.forEach((field) => {
      const val = formData[field.id];
      if (val) {
        let displayVal = val;
        if (val === OTHER_LOCATION && customInputs[field.id]) {
          displayVal = customInputs[field.id];
        } else if (field.type === "select" && field.options) {
          const opt = field.options.find((o) => o.value === val);
          if (opt) displayVal = opt.labelEn;
        }
        // Map common field IDs to sheet columns
        if (field.id === "location" || field.id === "marina" || field.id === "startLocation") sheetData.location = displayVal;
        else if (field.id === "date" || field.id === "startDate" || field.id === "pickupDate") sheetData.pickupDate = displayVal;
        else if (field.id === "endDate" || field.id === "dropoffDate" || field.id === "returnDate") sheetData.dropoffDate = displayVal;
        else if (field.id === "duration") sheetData.duration = displayVal;
        else if (field.id === "persons" || field.id === "guests" || field.id === "riders" || field.id === "passengers") sheetData.persons = displayVal;
        else if (field.id === "type" || field.id === "brand" || field.id === "engine" || field.id === "size") sheetData.vehicleType = displayVal;
        else if (field.id === "skipper" || field.id === "border" || field.id === "occasion" || field.id === "transmission") sheetData.extra = displayVal;
        else if (field.id === "phone") sheetData.phone = displayVal;
        else sheetData[field.id] = displayVal;
      }
    });
    sheetData.serviceType = language === "me" ? service.h1Me : service.h1En;
    sendToGoogleSheets(sheetData as any);

    const msg = buildWhatsAppMessage();
    window.open(`https://wa.me/38268062259?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-2xl p-5 lg:p-6 border border-white/15 space-y-3">
      <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
        <Send className="w-4 h-4 text-gold" />
        {language === "me" ? "Brzi upit" : "Quick inquiry"}
      </h3>

      {/* Name field */}
      <div>
        <label className="text-white/70 text-xs font-medium mb-1 block">
          {language === "me" ? "Vaše ime" : "Your name"}
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={language === "me" ? "Ime i prezime" : "Full name"}
          className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50"
        />
      </div>

      {/* Dynamic fields */}
      {service.formFields.map((field) => (
        <div key={field.id}>
          <label className="text-white/70 text-xs font-medium mb-1 block">
            {language === "me" ? field.labelMe : field.labelEn}
          </label>
          {field.type === "select" && field.options ? (
            <>
              <select
                value={formData[field.id] || ""}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 [&>option]:text-gray-900"
              >
                <option value="">{language === "me" ? "Izaberite..." : "Select..."}</option>
                {field.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {language === "me" ? opt.labelMe : opt.labelEn}
                  </option>
                ))}
              </select>
              {formData[field.id] === OTHER_LOCATION && (
                <input
                  type="text"
                  value={customInputs[field.id] || ""}
                  onChange={(e) => setCustomInputs((prev) => ({ ...prev, [field.id]: e.target.value }))}
                  placeholder={language === "me" ? "Upišite lokaciju..." : "Type location..."}
                  className="w-full mt-1.5 bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50"
                />
              )}
            </>
          ) : field.type === "date" ? (
            <input
              type="date"
              value={formData[field.id] || ""}
              onChange={(e) => handleChange(field.id, e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 [color-scheme:dark]"
            />
          ) : field.type === "number" ? (
            <input
              type="number"
              min={field.min || 1}
              max={field.max || 99}
              value={formData[field.id] || ""}
              onChange={(e) => handleChange(field.id, e.target.value)}
              placeholder={`${field.min || 1} - ${field.max || 99}`}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50"
            />
          ) : (
            <input
              type="text"
              value={formData[field.id] || ""}
              onChange={(e) => handleChange(field.id, e.target.value)}
              placeholder={field.placeholder || ""}
              className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2.5 text-white text-sm placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white py-3 rounded-xl font-semibold transition-all hover:shadow-lg text-sm"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
        {language === "me" ? "Pošalji upit na WhatsApp" : "Send inquiry via WhatsApp"}
      </button>
      <p className="text-white/40 text-xs text-center">
        {language === "me" ? "Odgovaramo u roku od 2 sata" : "We respond within 2 hours"}
      </p>
    </form>
  );
}

export default function RentalServicePage() {
  const params = useParams<{ slug: string }>();
  const { language } = useLanguage();
  const slug = params.slug || "";
  const service = rentalServices.find((s) => s.slug === slug);

  useEffect(() => {
    if (service) {
      document.title = service.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", service.metaDesc);
    }
    window.scrollTo(0, 0);
  }, [slug, service]);

  const priceDisclaimer: Record<string, string> = {
    me: "* Cijene su okvirne i zavise od sezone, dostupnosti i konkretnog modela. Konačnu cijenu određuje agencija. Što ranije rezervišete, cijene mogu biti niže!",
    en: "* Prices are approximate and depend on season, availability, and specific model. Final price is set by the agency. The earlier you book, the lower the price can be!",
    de: "* Preise sind ungefähr und hängen von Saison, Verfügbarkeit und Modell ab. Der Endpreis wird von der Agentur festgelegt. Je früher Sie buchen, desto günstiger kann der Preis sein!",
    ru: "* Цены ориентировочные и зависят от сезона, наличия и модели. Окончательную цену устанавливает агентство. Чем раньше бронируете, тем ниже может быть цена!",
    fr: "* Les prix sont indicatifs et dépendent de la saison, de la disponibilité et du modèle. Le prix final est fixé par l'agence. Plus vous réservez tôt, plus le prix peut être bas !",
    pl: "* Ceny są orientacyjne i zależą od sezonu, dostępności i modelu. Ostateczną cenę ustala agencja. Im wcześniej zarezerwujesz, tym niższa może być cena!",
    tr: "* Fiyatlar tahminidir ve sezona, müsaitliğe ve modele bağlıdır. Nihai fiyat acente tarafından belirlenir. Ne kadar erken rezervasyon yaparsanız, fiyat o kadar düşük olabilir!",
  };

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="font-display font-bold text-2xl text-forest mb-4">
              {language === "me" ? "Usluga nije pronađena" : "Service not found"}
            </h1>
            <Link href="/" className="text-gold hover:text-gold-dark font-medium">
              ← {language === "me" ? "Nazad na početnu" : "Back to home"}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const IconComponent = iconMap[service.icon] || Star;
  const h1 = language === "me" ? service.h1Me : service.h1En;
  const desc = language === "me" ? service.descMe : service.descEn;
  const faqs = language === "me" ? service.faqMe : service.faqEn;
  const features = service.features.map((f) => (language === "me" ? f.me : f.en));

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero with Inquiry Form */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="absolute inset-0 z-0">
          <img src={service.heroImage} alt={h1} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-dark/90 via-forest-dark/75 to-forest-dark/60" />
        </div>
        <div className="container relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {language === "me" ? "Nazad na početnu" : "Back to home"}
          </Link>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left: Title & Description */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-4">
                <IconComponent className="w-5 h-5 text-gold" />
                <span className="text-gold font-medium">rentakar.me</span>
              </div>
              <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6">{h1}</h1>
              <p className="text-white/80 text-lg max-w-2xl leading-relaxed mb-8">{desc}</p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                  <div className="text-gold font-display font-bold text-2xl">€{service.priceFrom}</div>
                  <div className="text-white/60 text-xs mt-0.5">{language === "me" ? "od" : "from"}</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-5 py-3 border border-white/10">
                  <div className="text-gold font-display font-bold text-2xl">{service.locations.length}</div>
                  <div className="text-white/60 text-xs mt-0.5">{language === "me" ? "Lokacija" : "Locations"}</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Inquiry Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2">
              <InquiryForm service={service} language={language} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-cream">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {/* Features */}
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border/50">
                <h2 className="font-display font-bold text-xl text-forest mb-4">
                  {language === "me" ? "Šta je uključeno?" : "What's included?"}
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-forest/10 flex items-center justify-center shrink-0">
                        {i === 0 ? <Star className="w-5 h-5 text-forest" /> :
                         i === 1 ? <Shield className="w-5 h-5 text-forest" /> :
                         i === 2 ? <Clock className="w-5 h-5 text-forest" /> :
                         <MapPin className="w-5 h-5 text-forest" />}
                      </div>
                      <span className="text-sm text-foreground font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border/50">
                <h2 className="font-display font-bold text-xl text-forest mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  {language === "me" ? "Dostupne lokacije" : "Available locations"}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {service.locations.map((loc) => (
                    <span key={loc} className="bg-cream rounded-full px-4 py-2 text-sm font-medium text-foreground border border-border/30">
                      {loc}
                    </span>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-sm border border-border/50">
                <h2 className="font-display font-bold text-xl text-forest mb-6">
                  {language === "me" ? "Česta pitanja" : "FAQ"}
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="border-b border-border/30 pb-4 last:border-0 last:pb-0">
                      <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price disclaimer */}
              <p className="text-xs text-muted-foreground/60 flex items-start gap-1.5">
                <Info className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                {priceDisclaimer[language]}
              </p>
            </div>

            {/* Sidebar CTA - sticky on desktop */}
            <div>
              <div className="bg-forest rounded-2xl p-6 lg:p-8 text-white sticky top-24">
                <h3 className="font-display font-bold text-xl mb-3">
                  {language === "me" ? "Pošaljite upit" : "Send an inquiry"}
                </h3>
                <p className="text-white/70 text-sm mb-6 leading-relaxed">
                  {language === "me"
                    ? "Javite nam šta vam treba i dobićete ponudu od više partnera u roku od 2 sata."
                    : "Tell us what you need and receive offers from multiple partners within 2 hours."}
                </p>
                <a
                  href={`https://wa.me/38268062259?text=${encodeURIComponent(
                    language === "me"
                      ? `Zdravo! Zanima me ${h1}. Molim vas za ponudu.`
                      : `Hello! I'm interested in ${h1}. Please send me an offer.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white py-3.5 rounded-xl font-semibold transition-all hover:shadow-lg mb-3"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp
                </a>

                {/* Price range */}
                <div className="mt-6 pt-6 border-t border-white/20">
                  <h4 className="text-white/80 text-sm font-medium mb-2">
                    {language === "me" ? "Raspon cijena:" : "Price range:"}
                  </h4>
                  <div className="text-gold font-display font-bold text-lg">
                    €{service.priceFrom} - €{service.priceTo}
                  </div>
                  <p className="text-white/50 text-xs mt-1">
                    {language === "me" ? "Zavisi od sezone i modela" : "Depends on season and model"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}

export { rentalServices };

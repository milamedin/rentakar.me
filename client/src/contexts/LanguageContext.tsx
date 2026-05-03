import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

export type Language = "me" | "en" | "de" | "ru" | "fr" | "pl" | "tr";

interface Translations {
  [key: string]: {
    me: string;
    en: string;
    de: string;
    ru: string;
    fr: string;
    pl: string;
    tr: string;
  };
}

export const translations: Translations = {
  // Navigation
  "nav.home": {
    me: "Početna", en: "Home", de: "Startseite", ru: "Главная",
    fr: "Accueil", pl: "Strona główna", tr: "Ana Sayfa",
  },
  "nav.locations": {
    me: "Lokacije", en: "Locations", de: "Standorte", ru: "Локации",
    fr: "Emplacements", pl: "Lokalizacje", tr: "Lokasyonlar",
  },
  "nav.about": {
    me: "O nama", en: "About Us", de: "Über uns", ru: "О нас",
    fr: "À propos", pl: "O nas", tr: "Hakkımızda",
  },
  "nav.faq": {
    me: "Pitanja", en: "FAQ", de: "FAQ", ru: "Вопросы",
    fr: "FAQ", pl: "FAQ", tr: "SSS",
  },
  "nav.contact": {
    me: "Kontakt", en: "Contact", de: "Kontakt", ru: "Контакт",
    fr: "Contact", pl: "Kontakt", tr: "İletişim",
  },

  // Hero Section
  "hero.badge": {
    me: "10+ partnerskih agencija u Crnoj Gori",
    en: "10+ partner agencies across Montenegro",
    de: "10+ Partneragenturen in Montenegro",
    ru: "10+ партнёрских агентств в Черногории",
    fr: "10+ agences partenaires au Monténégro",
    pl: "10+ agencji partnerskich w Czarnogórze",
    tr: "Karadağ genelinde 10+ ortak acente",
  },
  "hero.title.rent": {
    me: "Iznajmite auto u Crnoj Gori",
    en: "Rent a Car in Montenegro",
    de: "Mietwagen in Montenegro",
    ru: "Аренда авто в Черногории",
    fr: "Location de voiture au Monténégro",
    pl: "Wynajem samochodu w Czarnogórze",
    tr: "Karadağ'da Araba Kiralama",
  },
  "hero.title.transfer": {
    me: "Transfer usluge u Crnoj Gori",
    en: "Transfer Services in Montenegro",
    de: "Transferdienste in Montenegro",
    ru: "Трансфер в Черногории",
    fr: "Services de transfert au Monténégro",
    pl: "Usługi transferowe w Czarnogórze",
    tr: "Karadağ'da Transfer Hizmetleri",
  },
  "hero.subtitle.rent": {
    me: "Najveća ponuda rent-a-car vozila na jednom mjestu. Uporedite cijene od provjerenih lokalnih agencija i uštedite do 30%.",
    en: "The largest selection of rental cars in one place. Compare prices from verified local agencies and save up to 30%.",
    de: "Die größte Auswahl an Mietwagen an einem Ort. Vergleichen Sie Preise von verifizierten lokalen Agenturen und sparen Sie bis zu 30%.",
    ru: "Самый большой выбор арендных автомобилей в одном месте. Сравните цены от проверенных местных агентств и сэкономьте до 30%.",
    fr: "Le plus grand choix de voitures de location en un seul endroit. Comparez les prix des agences locales vérifiées et économisez jusqu'à 30%.",
    pl: "Największy wybór samochodów do wynajęcia w jednym miejscu. Porównaj ceny od zweryfikowanych lokalnych agencji i zaoszczędź do 30%.",
    tr: "Tek bir yerde en geniş kiralık araç seçeneği. Doğrulanmış yerel acentelerin fiyatlarını karşılaştırın ve %30'a kadar tasarruf edin.",
  },
  "hero.subtitle.transfer": {
    me: "Profesionalni transferi sa aerodroma i između gradova. Komforna vozila, pouzdani vozači, fiksne cijene.",
    en: "Professional airport and intercity transfers. Comfortable vehicles, reliable drivers, fixed prices.",
    de: "Professionelle Flughafen- und Stadttransfers. Komfortable Fahrzeuge, zuverlässige Fahrer, Festpreise.",
    ru: "Профессиональные трансферы из аэропорта и между городами. Комфортные автомобили, надёжные водители, фиксированные цены.",
    fr: "Transferts professionnels depuis l'aéroport et entre les villes. Véhicules confortables, chauffeurs fiables, prix fixes.",
    pl: "Profesjonalne transfery lotniskowe i międzymiastowe. Komfortowe pojazdy, niezawodni kierowcy, stałe ceny.",
    tr: "Profesyonel havalimanı ve şehirlerarası transferler. Konforlu araçlar, güvenilir sürücüler, sabit fiyatlar.",
  },

  // Tabs
  "tab.rentacar": {
    me: "Rent a Car", en: "Rent a Car", de: "Mietwagen", ru: "Аренда авто",
    fr: "Location de voiture", pl: "Wynajem auta", tr: "Araba Kiralama",
  },
  "tab.transfer": {
    me: "Transfer", en: "Transfer", de: "Transfer", ru: "Трансфер",
    fr: "Transfert", pl: "Transfer", tr: "Transfer",
  },

  // Form - Rent a Car
  "form.pickup": {
    me: "Lokacija preuzimanja", en: "Pick-up location", de: "Abholort", ru: "Место получения",
    fr: "Lieu de prise en charge", pl: "Miejsce odbioru", tr: "Alış yeri",
  },
  "form.dropoff": {
    me: "Lokacija vraćanja", en: "Drop-off location", de: "Rückgabeort", ru: "Место возврата",
    fr: "Lieu de restitution", pl: "Miejsce zwrotu", tr: "Bırakış yeri",
  },
  "form.pickupDate": {
    me: "Datum preuzimanja", en: "Pick-up date", de: "Abholdatum", ru: "Дата получения",
    fr: "Date de prise en charge", pl: "Data odbioru", tr: "Alış tarihi",
  },
  "form.dropoffDate": {
    me: "Datum vraćanja", en: "Drop-off date", de: "Rückgabedatum", ru: "Дата возврата",
    fr: "Date de restitution", pl: "Data zwrotu", tr: "Bırakış tarihi",
  },
  "form.carType": {
    me: "Tip vozila", en: "Car type", de: "Fahrzeugtyp", ru: "Тип автомобиля",
    fr: "Type de véhicule", pl: "Typ pojazdu", tr: "Araç tipi",
  },
  "form.name": {
    me: "Vaše ime", en: "Your name", de: "Ihr Name", ru: "Ваше имя",
    fr: "Votre nom", pl: "Twoje imię", tr: "Adınız",
  },
  "form.phone": {
    me: "Telefon / WhatsApp", en: "Phone / WhatsApp", de: "Telefon / WhatsApp", ru: "Телефон / WhatsApp",
    fr: "Téléphone / WhatsApp", pl: "Telefon / WhatsApp", tr: "Telefon / WhatsApp",
  },
  "form.email": {
    me: "Email (opciono)", en: "Email (optional)", de: "E-Mail (optional)", ru: "Email (необязательно)",
    fr: "Email (facultatif)", pl: "Email (opcjonalnie)", tr: "E-posta (isteğe bağlı)",
  },
  "form.message": {
    me: "Dodatne napomene", en: "Additional notes", de: "Zusätzliche Anmerkungen", ru: "Дополнительные примечания",
    fr: "Notes supplémentaires", pl: "Dodatkowe uwagi", tr: "Ek notlar",
  },
  "form.submit": {
    me: "Pošaljite upit", en: "Send inquiry", de: "Anfrage senden", ru: "Отправить запрос",
    fr: "Envoyer la demande", pl: "Wyślij zapytanie", tr: "Talep gönder",
  },
  "form.submitWhatsapp": {
    me: "Pošaljite preko WhatsApp-a", en: "Send via WhatsApp", de: "Über WhatsApp senden", ru: "Отправить через WhatsApp",
    fr: "Envoyer via WhatsApp", pl: "Wyślij przez WhatsApp", tr: "WhatsApp ile gönder",
  },

  // Form - Transfer
  "form.from": {
    me: "Odakle", en: "From", de: "Von", ru: "Откуда",
    fr: "De", pl: "Skąd", tr: "Nereden",
  },
  "form.to": {
    me: "Dokle", en: "To", de: "Nach", ru: "Куда",
    fr: "À", pl: "Dokąd", tr: "Nereye",
  },
  "form.date": {
    me: "Datum", en: "Date", de: "Datum", ru: "Дата",
    fr: "Date", pl: "Data", tr: "Tarih",
  },
  "form.time": {
    me: "Vrijeme", en: "Time", de: "Uhrzeit", ru: "Время",
    fr: "Heure", pl: "Godzina", tr: "Saat",
  },
  "form.passengers": {
    me: "Broj putnika", en: "Number of passengers", de: "Anzahl der Passagiere", ru: "Количество пассажиров",
    fr: "Nombre de passagers", pl: "Liczba pasażerów", tr: "Yolcu sayısı",
  },
  "form.flightNumber": {
    me: "Broj leta (opciono)", en: "Flight number (optional)", de: "Flugnummer (optional)", ru: "Номер рейса (необязательно)",
    fr: "Numéro de vol (facultatif)", pl: "Numer lotu (opcjonalnie)", tr: "Uçuş numarası (isteğe bağlı)",
  },

  // Car types
  "car.economy": {
    me: "Ekonomija", en: "Economy", de: "Economy", ru: "Эконом",
    fr: "Économique", pl: "Ekonomiczny", tr: "Ekonomi",
  },
  "car.compact": {
    me: "Kompakt", en: "Compact", de: "Kompakt", ru: "Компакт",
    fr: "Compact", pl: "Kompaktowy", tr: "Kompakt",
  },
  "car.suv": {
    me: "SUV / Džip", en: "SUV", de: "SUV / Geländewagen", ru: "Внедорожник",
    fr: "SUV", pl: "SUV / Terenowy", tr: "SUV / Arazi",
  },
  "car.van": {
    me: "Kombi / Van", en: "Van / Minivan", de: "Van / Minivan", ru: "Минивэн",
    fr: "Van / Monospace", pl: "Van / Minivan", tr: "Van / Minivan",
  },
  "car.luxury": {
    me: "Luksuz", en: "Luxury", de: "Luxus", ru: "Люкс",
    fr: "Luxe", pl: "Luksusowy", tr: "Lüks",
  },
  "car.any": {
    me: "Svejedno", en: "Any", de: "Egal", ru: "Любой",
    fr: "Peu importe", pl: "Dowolny", tr: "Farketmez",
  },

  // Trust Section
  "trust.title": {
    me: "Zašto rentakar?", en: "Why rentakar?", de: "Warum rentakar?", ru: "Почему rentakar?",
    fr: "Pourquoi rentakar ?", pl: "Dlaczego rentakar?", tr: "Neden rentakar?",
  },
  "trust.local.title": {
    me: "Lokalni tim", en: "Local team", de: "Lokales Team", ru: "Местная команда",
    fr: "Équipe locale", pl: "Lokalny zespół", tr: "Yerel ekip",
  },
  "trust.local.desc": {
    me: "Živimo u Crnoj Gori i poznajemo svaku agenciju lično. Preporučujemo samo provjerene partnere.",
    en: "We live in Montenegro and know every agency personally. We only recommend verified partners.",
    de: "Wir leben in Montenegro und kennen jede Agentur persönlich. Wir empfehlen nur verifizierte Partner.",
    ru: "Мы живём в Черногории и лично знаем каждое агентство. Рекомендуем только проверенных партнёров.",
    fr: "Nous vivons au Monténégro et connaissons chaque agence personnellement. Nous ne recommandons que des partenaires vérifiés.",
    pl: "Mieszkamy w Czarnogórze i znamy każdą agencję osobiście. Polecamy tylko zweryfikowanych partnerów.",
    tr: "Karadağ'da yaşıyoruz ve her acenteyi şahsen tanıyoruz. Yalnızca doğrulanmış ortakları öneriyoruz.",
  },
  "trust.fast.title": {
    me: "Odgovor za 2 sata", en: "Response in 2 hours", de: "Antwort in 2 Stunden", ru: "Ответ за 2 часа",
    fr: "Réponse en 2 heures", pl: "Odpowiedź w 2 godziny", tr: "2 saat içinde yanıt",
  },
  "trust.fast.desc": {
    me: "Pošaljite upit i dobićete ponudu sa cijenama od više agencija u roku od 2 sata.",
    en: "Send an inquiry and receive offers with prices from multiple agencies within 2 hours.",
    de: "Senden Sie eine Anfrage und erhalten Sie Angebote mit Preisen von mehreren Agenturen innerhalb von 2 Stunden.",
    ru: "Отправьте запрос и получите предложения с ценами от нескольких агентств в течение 2 часов.",
    fr: "Envoyez une demande et recevez des offres avec les prix de plusieurs agences en 2 heures.",
    pl: "Wyślij zapytanie i otrzymaj oferty z cenami od wielu agencji w ciągu 2 godzin.",
    tr: "Bir talep gönderin ve 2 saat içinde birden fazla acenteden fiyat teklifleri alın.",
  },
  "trust.price.title": {
    me: "Najbolje cijene", en: "Best prices", de: "Beste Preise", ru: "Лучшие цены",
    fr: "Meilleurs prix", pl: "Najlepsze ceny", tr: "En iyi fiyatlar",
  },
  "trust.price.desc": {
    me: "Poredimo ponude od 10+ agencija da vam nađemo najnižu cijenu za vaše potrebe.",
    en: "We compare offers from 10+ agencies to find you the lowest price for your needs.",
    de: "Wir vergleichen Angebote von 10+ Agenturen, um den besten Preis für Ihre Bedürfnisse zu finden.",
    ru: "Сравниваем предложения от 10+ агентств, чтобы найти лучшую цену для ваших нужд.",
    fr: "Nous comparons les offres de 10+ agences pour trouver le meilleur prix pour vos besoins.",
    pl: "Porównujemy oferty od 10+ agencji, aby znaleźć najniższą cenę dla Twoich potrzeb.",
    tr: "İhtiyaçlarınız için en düşük fiyatı bulmak amacıyla 10+ acentenin tekliflerini karşılaştırıyoruz.",
  },
  "trust.support.title": {
    me: "Podrška 7 dana", en: "7-day support", de: "7-Tage-Support", ru: "Поддержка 7 дней",
    fr: "Support 7 jours", pl: "Wsparcie 7 dni", tr: "7 gün destek",
  },
  "trust.support.desc": {
    me: "Dostupni smo svaki dan od 8h do 22h putem WhatsApp-a, telefona ili emaila.",
    en: "We are available every day from 8 AM to 10 PM via WhatsApp, phone, or email.",
    de: "Wir sind jeden Tag von 8 bis 22 Uhr per WhatsApp, Telefon oder E-Mail erreichbar.",
    ru: "Мы доступны каждый день с 8:00 до 22:00 через WhatsApp, телефон или email.",
    fr: "Nous sommes disponibles tous les jours de 8h à 22h via WhatsApp, téléphone ou email.",
    pl: "Jesteśmy dostępni codziennie od 8:00 do 22:00 przez WhatsApp, telefon lub email.",
    tr: "Her gün 08:00-22:00 arası WhatsApp, telefon veya e-posta ile ulaşılabilir durumdayız.",
  },

  // How it works
  "how.title": {
    me: "Kako funkcioniše?", en: "How does it work?", de: "Wie funktioniert es?", ru: "Как это работает?",
    fr: "Comment ça marche ?", pl: "Jak to działa?", tr: "Nasıl çalışır?",
  },
  "how.step1.title": {
    me: "Pošaljite upit", en: "Send an inquiry", de: "Anfrage senden", ru: "Отправьте запрос",
    fr: "Envoyez une demande", pl: "Wyślij zapytanie", tr: "Talep gönderin",
  },
  "how.step1.desc": {
    me: "Popunite kratku formu ili nam pišite na WhatsApp sa datumima i željenim tipom vozila.",
    en: "Fill out the short form or message us on WhatsApp with dates and preferred vehicle type.",
    de: "Füllen Sie das kurze Formular aus oder schreiben Sie uns auf WhatsApp mit Daten und gewünschtem Fahrzeugtyp.",
    ru: "Заполните короткую форму или напишите нам в WhatsApp с датами и желаемым типом автомобиля.",
    fr: "Remplissez le court formulaire ou envoyez-nous un message WhatsApp avec les dates et le type de véhicule souhaité.",
    pl: "Wypełnij krótki formularz lub napisz do nas na WhatsApp z datami i preferowanym typem pojazdu.",
    tr: "Kısa formu doldurun veya WhatsApp'tan tarihler ve tercih ettiğiniz araç tipiyle bize yazın.",
  },
  "how.step2.title": {
    me: "Dobijte ponude", en: "Get offers", de: "Angebote erhalten", ru: "Получите предложения",
    fr: "Recevez des offres", pl: "Otrzymaj oferty", tr: "Teklifleri alın",
  },
  "how.step2.desc": {
    me: "U roku od 2 sata šaljemo vam uporedne ponude od naših partnerskih agencija.",
    en: "Within 2 hours, we send you comparative offers from our partner agencies.",
    de: "Innerhalb von 2 Stunden senden wir Ihnen vergleichende Angebote unserer Partneragenturen.",
    ru: "В течение 2 часов мы отправим вам сравнительные предложения от наших партнёрских агентств.",
    fr: "En 2 heures, nous vous envoyons des offres comparatives de nos agences partenaires.",
    pl: "W ciągu 2 godzin wysyłamy Ci porównawcze oferty od naszych agencji partnerskich.",
    tr: "2 saat içinde ortak acentelerimizden karşılaştırmalı teklifler gönderiyoruz.",
  },
  "how.step3.title": {
    me: "Izaberite i vozite", en: "Choose and drive", de: "Wählen und fahren", ru: "Выберите и езжайте",
    fr: "Choisissez et conduisez", pl: "Wybierz i jedź", tr: "Seçin ve sürün",
  },
  "how.step3.desc": {
    me: "Izaberite ponudu koja vam odgovara, mi organizujemo sve detalje. Vi samo preuzmete auto.",
    en: "Choose the offer that suits you, we organize all the details. You just pick up the car.",
    de: "Wählen Sie das passende Angebot, wir organisieren alle Details. Sie holen einfach das Auto ab.",
    ru: "Выберите подходящее предложение, мы организуем все детали. Вы просто забираете автомобиль.",
    fr: "Choisissez l'offre qui vous convient, nous organisons tous les détails. Vous n'avez qu'à récupérer la voiture.",
    pl: "Wybierz ofertę, która Ci odpowiada, my organizujemy wszystkie szczegóły. Ty tylko odbierasz auto.",
    tr: "Size uygun teklifi seçin, biz tüm detayları organize edelim. Siz sadece aracı teslim alın.",
  },

  // Locations
  "locations.title": {
    me: "Dostupne lokacije", en: "Available locations", de: "Verfügbare Standorte", ru: "Доступные локации",
    fr: "Emplacements disponibles", pl: "Dostępne lokalizacje", tr: "Mevcut lokasyonlar",
  },
  "locations.subtitle": {
    me: "Pokrivamo cijelu Crnu Goru - od aerodroma do najudaljenijih destinacija",
    en: "We cover all of Montenegro - from airports to the most remote destinations",
    de: "Wir decken ganz Montenegro ab - von Flughäfen bis zu den entlegensten Zielen",
    ru: "Мы покрываем всю Черногорию - от аэропортов до самых отдалённых направлений",
    fr: "Nous couvrons tout le Monténégro - des aéroports aux destinations les plus reculées",
    pl: "Obejmujemy całą Czarnogórę - od lotnisk po najbardziej odległe miejsca",
    tr: "Havalimanlarından en uzak destinasyonlara kadar tüm Karadağ'ı kapsıyoruz",
  },
  "locations.viewMore": {
    me: "Pogledajte ponudu", en: "View offers", de: "Angebote ansehen", ru: "Смотреть предложения",
    fr: "Voir les offres", pl: "Zobacz oferty", tr: "Teklifleri görüntüle",
  },

  // Partners
  "partners.title": {
    me: "Naši partneri", en: "Our partners", de: "Unsere Partner", ru: "Наши партнёры",
    fr: "Nos partenaires", pl: "Nasi partnerzy", tr: "Ortaklarımız",
  },
  "partners.subtitle": {
    me: "Sarađujemo sa provjerenim rent-a-car agencijama širom Crne Gore",
    en: "We work with verified car rental agencies across Montenegro",
    de: "Wir arbeiten mit verifizierten Autovermietungen in ganz Montenegro zusammen",
    ru: "Мы работаем с проверенными агентствами аренды по всей Черногории",
    fr: "Nous travaillons avec des agences de location vérifiées à travers le Monténégro",
    pl: "Współpracujemy ze zweryfikowanymi agencjami wynajmu w całej Czarnogórze",
    tr: "Karadağ genelinde doğrulanmış araç kiralama acenteleriyle çalışıyoruz",
  },

  // FAQ
  "faq.title": {
    me: "Često postavljana pitanja", en: "Frequently asked questions", de: "Häufig gestellte Fragen", ru: "Часто задаваемые вопросы",
    fr: "Questions fréquemment posées", pl: "Często zadawane pytania", tr: "Sıkça sorulan sorular",
  },
  "faq.q1": {
    me: "Da li je potrebna kreditna kartica?", en: "Is a credit card required?", de: "Ist eine Kreditkarte erforderlich?", ru: "Нужна ли кредитная карта?",
    fr: "Une carte de crédit est-elle nécessaire ?", pl: "Czy karta kredytowa jest wymagana?", tr: "Kredi kartı gerekli mi?",
  },
  "faq.a1": {
    me: "Zavisi od agencije. Mnogi naši partneri nude opciju bez kreditne kartice i bez depozita. Navedite to u upitu i naći ćemo vam odgovarajuću ponudu.",
    en: "It depends on the agency. Many of our partners offer no credit card and no deposit options. Mention it in your inquiry and we'll find a suitable offer.",
    de: "Es hängt von der Agentur ab. Viele unserer Partner bieten Optionen ohne Kreditkarte und ohne Kaution an. Erwähnen Sie es in Ihrer Anfrage.",
    ru: "Зависит от агентства. Многие наши партнёры предлагают варианты без кредитной карты и без залога. Укажите это в запросе.",
    fr: "Cela dépend de l'agence. Beaucoup de nos partenaires proposent des options sans carte de crédit et sans caution. Mentionnez-le dans votre demande.",
    pl: "To zależy od agencji. Wielu naszych partnerów oferuje opcje bez karty kredytowej i bez depozytu. Wspomnij o tym w zapytaniu.",
    tr: "Acenteye bağlıdır. Ortaklarımızın çoğu kredi kartsız ve depozitosuzu seçenekler sunar. Talebinizde belirtin.",
  },
  "faq.q2": {
    me: "Koji dokumenti su potrebni?", en: "What documents are required?", de: "Welche Dokumente werden benötigt?", ru: "Какие документы нужны?",
    fr: "Quels documents sont nécessaires ?", pl: "Jakie dokumenty są wymagane?", tr: "Hangi belgeler gereklidir?",
  },
  "faq.a2": {
    me: "Potrebni su vam pasoš ili lična karta i važeća vozačka dozvola. Za državljane van EU, preporučuje se međunarodna vozačka dozvola.",
    en: "You need a passport or ID card and a valid driver's license. For non-EU citizens, an international driving permit is recommended.",
    de: "Sie benötigen einen Reisepass oder Personalausweis und einen gültigen Führerschein. Für Nicht-EU-Bürger wird ein internationaler Führerschein empfohlen.",
    ru: "Вам нужен паспорт или удостоверение личности и действующие водительские права. Для граждан не из ЕС рекомендуется международное водительское удостоверение.",
    fr: "Vous avez besoin d'un passeport ou d'une carte d'identité et d'un permis de conduire valide. Pour les citoyens hors UE, un permis international est recommandé.",
    pl: "Potrzebujesz paszportu lub dowodu osobistego i ważnego prawa jazdy. Dla obywateli spoza UE zalecane jest międzynarodowe prawo jazdy.",
    tr: "Pasaport veya kimlik kartı ve geçerli bir ehliyet gereklidir. AB dışı vatandaşlar için uluslararası ehliyet önerilir.",
  },
  "faq.q3": {
    me: "Mogu li preuzeti auto na aerodromu?", en: "Can I pick up the car at the airport?", de: "Kann ich das Auto am Flughafen abholen?", ru: "Могу ли я забрать машину в аэропорту?",
    fr: "Puis-je récupérer la voiture à l'aéroport ?", pl: "Czy mogę odebrać samochód na lotnisku?", tr: "Aracı havalimanından alabilir miyim?",
  },
  "faq.a3": {
    me: "Da! Nudimo preuzimanje na aerodromima Podgorica (TGD) i Tivat (TIV), kao i na bilo kojoj lokaciji u Crnoj Gori.",
    en: "Yes! We offer pick-up at Podgorica (TGD) and Tivat (TIV) airports, as well as any location in Montenegro.",
    de: "Ja! Wir bieten Abholung an den Flughäfen Podgorica (TGD) und Tivat (TIV) sowie an jedem Ort in Montenegro.",
    ru: "Да! Мы предлагаем получение в аэропортах Подгорица (TGD) и Тиват (TIV), а также в любом месте Черногории.",
    fr: "Oui ! Nous proposons la prise en charge aux aéroports de Podgorica (TGD) et Tivat (TIV), ainsi qu'à tout endroit au Monténégro.",
    pl: "Tak! Oferujemy odbiór na lotniskach Podgorica (TGD) i Tivat (TIV), a także w dowolnym miejscu w Czarnogórze.",
    tr: "Evet! Podgorica (TGD) ve Tivat (TIV) havalimanlarında ve Karadağ'ın herhangi bir yerinde teslim sunuyoruz.",
  },
  "faq.q4": {
    me: "Koliko košta iznajmljivanje auta?", en: "How much does it cost to rent a car?", de: "Wie viel kostet es, ein Auto zu mieten?", ru: "Сколько стоит аренда автомобиля?",
    fr: "Combien coûte la location d'une voiture ?", pl: "Ile kosztuje wynajem samochodu?", tr: "Araba kiralamak ne kadar?",
  },
  "faq.a4": {
    me: "Cijene počinju od 40€ dnevno za ekonomiju klasu, do 100€+ za SUV u sezoni. Što ranije rezervišete, cijene mogu biti niže! Pošaljite upit za tačnu cijenu.",
    en: "Prices start from €40/day for economy class, up to €100+/day for SUVs in high season. The earlier you book, the lower the price can be! Send an inquiry for exact pricing.",
    de: "Die Preise beginnen bei 40€/Tag für Economy bis 100€+/Tag für SUVs in der Hochsaison. Je früher Sie buchen, desto günstiger! Senden Sie eine Anfrage für genaue Preise.",
    ru: "Цены начинаются от 40€/день за эконом-класс, до 100€+/день за внедорожник в сезон. Чем раньше бронируете, тем ниже цена! Отправьте запрос.",
    fr: "Les prix commencent à 40€/jour pour la classe économique, jusqu'à 100€+/jour pour les SUV en haute saison. Plus vous réservez tôt, moins c'est cher ! Envoyez une demande.",
    pl: "Ceny zaczynają się od 40€/dzień za klasę ekonomiczną, do 100€+/dzień za SUV w sezonie. Im wcześniej zarezerwujesz, tym taniej! Wyślij zapytanie.",
    tr: "Fiyatlar ekonomi sınıfı için günlük 40€'dan başlar, yüksek sezonda SUV için 100€+'ya kadar çıkar. Erken rezervasyon yaparsanız daha ucuz! Talep gönderin.",
  },
  "faq.q5": {
    me: "Da li mogu voziti van Crne Gore?", en: "Can I drive outside Montenegro?", de: "Kann ich außerhalb Montenegros fahren?", ru: "Можно ли ездить за пределы Черногории?",
    fr: "Puis-je conduire en dehors du Monténégro ?", pl: "Czy mogę jeździć poza Czarnogórą?", tr: "Karadağ dışında araç kullanabilir miyim?",
  },
  "faq.a5": {
    me: "Većina agencija dozvoljava vožnju u susjednim zemljama (Hrvatska, Srbija, BiH, Albanija) uz prethodno odobrenje. Navedite to u upitu.",
    en: "Most agencies allow driving to neighboring countries (Croatia, Serbia, Bosnia, Albania) with prior approval. Mention it in your inquiry.",
    de: "Die meisten Agenturen erlauben Fahrten in Nachbarländer (Kroatien, Serbien, Bosnien, Albanien) mit vorheriger Genehmigung.",
    ru: "Большинство агентств разрешают поездки в соседние страны (Хорватия, Сербия, Босния, Албания) с предварительным одобрением.",
    fr: "La plupart des agences autorisent la conduite dans les pays voisins (Croatie, Serbie, Bosnie, Albanie) avec autorisation préalable.",
    pl: "Większość agencji zezwala na jazdę do krajów sąsiednich (Chorwacja, Serbia, Bośnia, Albania) za wcześniejszą zgodą.",
    tr: "Çoğu acente, önceden onay ile komşu ülkelere (Hırvatistan, Sırbistan, Bosna, Arnavutluk) araç kullanmaya izin verir.",
  },
  "faq.q6": {
    me: "Da li je osiguranje uključeno?", en: "Is insurance included?", de: "Ist eine Versicherung inbegriffen?", ru: "Включена ли страховка?",
    fr: "L'assurance est-elle incluse ?", pl: "Czy ubezpieczenie jest wliczone?", tr: "Sigorta dahil mi?",
  },
  "faq.a6": {
    me: "Da, osnovno osiguranje (CDW) je uključeno kod svih naših partnera. Dodatno osiguranje (full coverage) je dostupno uz doplatu.",
    en: "Yes, basic insurance (CDW) is included with all our partners. Additional full coverage insurance is available for an extra fee.",
    de: "Ja, eine Grundversicherung (CDW) ist bei allen unseren Partnern inklusive. Zusätzliche Vollkaskoversicherung ist gegen Aufpreis verfügbar.",
    ru: "Да, базовая страховка (CDW) включена у всех наших партнёров. Дополнительная полная страховка доступна за дополнительную плату.",
    fr: "Oui, l'assurance de base (CDW) est incluse chez tous nos partenaires. Une assurance tous risques est disponible moyennant un supplément.",
    pl: "Tak, podstawowe ubezpieczenie (CDW) jest wliczone u wszystkich naszych partnerów. Dodatkowe pełne ubezpieczenie jest dostępne za dopłatą.",
    tr: "Evet, temel sigorta (CDW) tüm ortaklarımızda dahildir. Ek tam kapsamlı sigorta ek ücretle mevcuttur.",
  },

  // Footer
  "footer.desc": {
    me: "Vaš lokalni partner za iznajmljivanje vozila i transfere u Crnoj Gori. Povezujemo vas sa najboljim agencijama po najpovoljnijim cijenama.",
    en: "Your local partner for car rental and transfers in Montenegro. We connect you with the best agencies at the best prices.",
    de: "Ihr lokaler Partner für Autovermietung und Transfers in Montenegro. Wir verbinden Sie mit den besten Agenturen zu den besten Preisen.",
    ru: "Ваш местный партнёр по аренде автомобилей и трансферам в Черногории. Мы связываем вас с лучшими агентствами по лучшим ценам.",
    fr: "Votre partenaire local pour la location de voitures et les transferts au Monténégro. Nous vous connectons aux meilleures agences aux meilleurs prix.",
    pl: "Twój lokalny partner w wynajmie samochodów i transferach w Czarnogórze. Łączymy Cię z najlepszymi agencjami w najlepszych cenach.",
    tr: "Karadağ'da araç kiralama ve transferler için yerel ortağınız. Sizi en iyi acentelerle en iyi fiyatlarla buluşturuyoruz.",
  },
  "footer.links": {
    me: "Brzi linkovi", en: "Quick links", de: "Schnelllinks", ru: "Быстрые ссылки",
    fr: "Liens rapides", pl: "Szybkie linki", tr: "Hızlı bağlantılar",
  },
  "footer.popular": {
    me: "Popularne lokacije", en: "Popular locations", de: "Beliebte Standorte", ru: "Популярные локации",
    fr: "Emplacements populaires", pl: "Popularne lokalizacje", tr: "Popüler lokasyonlar",
  },
  "footer.contact": {
    me: "Kontakt", en: "Contact", de: "Kontakt", ru: "Контакт",
    fr: "Contact", pl: "Kontakt", tr: "İletişim",
  },
  "footer.rights": {
    me: "Sva prava zadržana.", en: "All rights reserved.", de: "Alle Rechte vorbehalten.", ru: "Все права защищены.",
    fr: "Tous droits réservés.", pl: "Wszelkie prawa zastrzeżone.", tr: "Tüm hakları saklıdır.",
  },

  // CTA
  "cta.title": {
    me: "Spremni za avanturu u Crnoj Gori?", en: "Ready for an adventure in Montenegro?", de: "Bereit für ein Abenteuer in Montenegro?", ru: "Готовы к приключению в Черногории?",
    fr: "Prêt pour une aventure au Monténégro ?", pl: "Gotowy na przygodę w Czarnogórze?", tr: "Karadağ'da maceraya hazır mısınız?",
  },
  "cta.subtitle": {
    me: "Pošaljite upit sada i dobićete ponudu u roku od 2 sata. Besplatno, bez obaveza.",
    en: "Send an inquiry now and get an offer within 2 hours. Free, no obligations.",
    de: "Senden Sie jetzt eine Anfrage und erhalten Sie ein Angebot innerhalb von 2 Stunden. Kostenlos, unverbindlich.",
    ru: "Отправьте запрос сейчас и получите предложение в течение 2 часов. Бесплатно, без обязательств.",
    fr: "Envoyez une demande maintenant et recevez une offre en 2 heures. Gratuit, sans engagement.",
    pl: "Wyślij zapytanie teraz i otrzymaj ofertę w ciągu 2 godzin. Bezpłatnie, bez zobowiązań.",
    tr: "Şimdi talep gönderin ve 2 saat içinde teklif alın. Ücretsiz, yükümlülük yok.",
  },
  "cta.whatsapp": {
    me: "Pišite nam na WhatsApp", en: "Message us on WhatsApp", de: "Schreiben Sie uns auf WhatsApp", ru: "Напишите нам в WhatsApp",
    fr: "Écrivez-nous sur WhatsApp", pl: "Napisz do nas na WhatsApp", tr: "WhatsApp'tan bize yazın",
  },

  // Location page
  "location.from": {
    me: "od", en: "from", de: "ab", ru: "от",
    fr: "à partir de", pl: "od", tr: "başlayan",
  },
  "location.perDay": {
    me: "/dan", en: "/day", de: "/Tag", ru: "/день",
    fr: "/jour", pl: "/dzień", tr: "/gün",
  },
  "location.backHome": {
    me: "Nazad na početnu", en: "Back to home", de: "Zurück zur Startseite", ru: "Назад на главную",
    fr: "Retour à l'accueil", pl: "Powrót na stronę główną", tr: "Ana sayfaya dön",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("rentakar-lang");
      if (saved && ["me", "en", "de", "ru", "fr", "pl", "tr"].includes(saved)) {
        return saved as Language;
      }
      const browserLang = navigator.language.slice(0, 2);
      if (browserLang === "de") return "de";
      if (browserLang === "ru") return "ru";
      if (browserLang === "fr") return "fr";
      if (browserLang === "pl") return "pl";
      if (browserLang === "tr") return "tr";
      if (["sr", "hr", "bs", "me"].includes(browserLang)) return "me";
    }
    return "en";
  });

  const handleSetLanguage = useCallback((lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("rentakar-lang", lang);
    document.documentElement.lang = lang === "me" ? "sr-Latn-ME" : lang;
  }, []);

  const t = useCallback(
    (key: string) => {
      const entry = translations[key];
      if (!entry) return key;
      return entry[language] || entry["en"] || key;
    },
    [language]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

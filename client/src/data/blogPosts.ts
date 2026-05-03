/**
 * Blog posts data for SEO - targeting additional keywords
 * Each post has ME and EN content for multi-language support
 */

export interface BlogPost {
  slug: string;
  titleMe: string;
  titleEn: string;
  metaTitle: string;
  metaDesc: string;
  excerptMe: string;
  excerptEn: string;
  contentMe: string;
  contentEn: string;
  image: string;
  category: string;
  keywords: string[];
  date: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "vodic-za-iznajmljivanje-auta-crna-gora",
    titleMe: "Kompletni Vodič za Iznajmljivanje Auta u Crnoj Gori 2026",
    titleEn: "Complete Guide to Car Rental in Montenegro 2026",
    metaTitle: "Vodič za Rent a Car Crna Gora 2026 | Savjeti i Cijene | rentakar.me",
    metaDesc: "Sve što trebate znati o iznajmljivanju auta u Crnoj Gori - cijene, dokumenta, osiguranje, savjeti za vožnju, najbolje agencije.",
    excerptMe: "Sve što trebate znati prije nego iznajmite auto u Crnoj Gori - od potrebnih dokumenata do savjeta za vožnju po crnogorskim putevima.",
    excerptEn: "Everything you need to know before renting a car in Montenegro - from required documents to driving tips on Montenegrin roads.",
    contentMe: `Iznajmljivanje auta u Crnoj Gori je jedan od najboljih načina da istražite ovu prelijepu zemlju. Sa samo 13.812 km² površine, Crna Gora nudi nevjerovatnu raznolikost - od plaža Jadrana do planina Durmitora, i sve je dostupno u roku od nekoliko sati vožnje.

## Potrebna dokumenta

Za iznajmljivanje auta u Crnoj Gori potrebno vam je:
- Važeća vozačka dozvola (međunarodna ili EU dozvola)
- Pasoš ili lična karta
- Kreditna ili debitna kartica (za depozit)
- Minimalna starost: 21 godina (za neke kategorije 25)

## Cijene iznajmljivanja

Cijene rent a car usluga u Crnoj Gori variraju u zavisnosti od sezone:
- **Van sezone (oktobar-maj):** od 30-45€ dnevno za ekonomiju vozila
- **Srednja sezona (jun, septembar):** od 40-60€ dnevno
- **Visoka sezona (jul-avgust):** od 50-100€ dnevno

Cijene zavise od agencije, tipa vozila i perioda iznajmljivanja. Duži periodi donose značajne popuste. Što ranije rezervišete, cijene mogu biti niže!

## Osiguranje

Većina agencija nudi sljedeće tipove osiguranja:
- **CDW (Collision Damage Waiver):** Osnovno osiguranje, obično uključeno u cijenu
- **TP (Theft Protection):** Zaštita od krađe
- **Full Coverage:** Potpuno osiguranje bez učešća

Preporučujemo da uvijek uzmete puno osiguranje za bezbrižnu vožnju.

## Savjeti za vožnju

Crnogorski putevi mogu biti izazovni, posebno na primorju i u planinama:
- Obalne ceste su vijugave ali dobro održavane
- Tunel Sozina (4.2 km) povezuje Podgoricu sa primorjem
- Planinski putevi zahtijevaju oprez, posebno zimi
- Gorivo je dostupno na svim glavnim rutama
- Parking u primorskim gradovima može biti izazov ljeti

## Gdje preuzeti auto?

Najpopularnija mjesta za preuzimanje su:
1. **Aerodrom Podgorica (TGD)** - glavni aerodrom
2. **Aerodrom Tivat (TIV)** - bliže primorju
3. **Gradski centri** - Budva, Kotor, Herceg Novi
4. **Hoteli** - mnoge agencije nude dostavu u hotel

## Zašto koristiti rentakar.me?

Umjesto da pretražujete desetine sajtova, pošaljite nam jedan upit i dobićete ponude od 10+ provjerenih agencija u roku od 2 sata. Besplatno, bez obaveza, sa garancijom najbolje cijene.`,
    contentEn: `Renting a car in Montenegro is one of the best ways to explore this beautiful country. With only 13,812 km² of area, Montenegro offers incredible diversity - from Adriatic beaches to Durmitor mountains, all accessible within a few hours of driving.

## Required Documents

To rent a car in Montenegro you need:
- Valid driving license (international or EU license)
- Passport or ID card
- Credit or debit card (for deposit)
- Minimum age: 21 years (25 for some categories)

## Rental Prices

Car rental prices in Montenegro vary by season:
- **Off-season (October-May):** from €30-45 per day for economy vehicles
- **Mid-season (June, September):** from €40-60 per day
- **High season (July-August):** from €50-100 per day

Prices depend on the agency, vehicle type, and rental period. Longer periods bring significant discounts. The earlier you book, the lower the price can be!

## Insurance

Most agencies offer the following insurance types:
- **CDW (Collision Damage Waiver):** Basic insurance, usually included in price
- **TP (Theft Protection):** Theft protection
- **Full Coverage:** Complete insurance with no deductible

We recommend always getting full insurance for worry-free driving.

## Driving Tips

Montenegrin roads can be challenging, especially on the coast and in mountains:
- Coastal roads are winding but well-maintained
- Sozina Tunnel (4.2 km) connects Podgorica with the coast
- Mountain roads require caution, especially in winter
- Fuel is available on all main routes
- Parking in coastal towns can be challenging in summer

## Where to Pick Up Your Car?

Most popular pickup locations are:
1. **Podgorica Airport (TGD)** - main airport
2. **Tivat Airport (TIV)** - closer to the coast
3. **City centers** - Budva, Kotor, Herceg Novi
4. **Hotels** - many agencies offer hotel delivery

## Why Use rentakar.me?

Instead of searching dozens of websites, send us one inquiry and get offers from 10+ verified agencies within 2 hours. Free, no obligation, with best price guarantee.`,
    image: "/images/locations/sveti-stefan.jpg",
    category: "Rent a Car",
    keywords: ["rent a car montenegro", "iznajmljivanje auta", "car rental prices", "driving tips"],
    date: "2026-04-20",
    readTime: 8,
  },
  {
    slug: "things-to-do-kotor-montenegro",
    titleMe: "Šta raditi u Kotoru - vodič za prvi posjet",
    titleEn: "Things to Do in Kotor - A Practical Guide",
    metaTitle: "Šta raditi u Kotoru | Atrakcije, plaže, restorani | rentakar.me",
    metaDesc: "Šta vidjeti i raditi u Kotoru: Stari grad, zidine sv. Ivana, izlet do Perasta, najbolji restorani i kada izbjeći gužve sa kruzera.",
    excerptMe: "Kotor je grad u koji se vraćate. Stari grad, planinske zidine, vožnja brodom kroz Boku - donosimo vodič koji vas vodi dalje od turističkih klišea.",
    excerptEn: "Kotor is a city you return to. Old town, fortress walls, boat ride through the Bay - here's a guide that takes you beyond tourist clichés.",
    contentMe: `Kotor je vjerovatno najfotografisaniji grad u Crnoj Gori, i to s razlogom. Smješten je na samom dnu Boke Kotorske - duboko uvučenog zaliva koji turistički vodiči vole da nazovu "najjužnijim fjordom Evrope" (geološki gledano nije fjord, ali izgleda tako). Stari grad je zaštićen UNESCO listom još od 1979. godine, a iza zidina se kriju uske ulice, kameniti trgovi i jedna od najfotogeničnijih panorama na Jadranu.

Ono što putnici često ne znaju je da Kotor ljeti može biti pretrpan - kruzeri pristaju u port, i između 10h i 16h Stari grad zna biti zaista pun. Ako planirate posjetu, dolazak ranije ujutru ili kasnije popodne (poslije 17h) vam daje sasvim drugačije iskustvo grada.

## Stari grad - šta vidjeti

Ulazi se kroz Glavna gradska vrata sa Trga oružja. Iznutra je grad lavirint malih trgova, crkava i palata. Najznačajnije:

**Katedrala Svetog Tripuna** - sagrađena 1166. godine, jedna je od najstarijih katedrala u jadranskom regionu. Ulaznica košta oko 4 EUR i uključuje pristup riznici sa relikvijama i srednjovjekovnim ikonama.

**Trg od mlijeka i Trg od oružja** - dva glavna trga gdje ćete provesti najviše vremena. Trg od oružja je veći, sa glavnom kulom sa satom; Trg od mlijeka je manji i mirniji, sa lijepim kafićima.

**Crkva Svetog Luke (1195.)** - mala romanička crkva u kojoj se mole i pravoslavni i katolici - rijetka stvar u regionu i dio kotorske posebnosti.

## Penjanje na zidine svetog Ivana

Ovo je vjerovatno najupečatljivija aktivnost u Kotoru. Zidine se uspinju od grada do tvrđave svetog Ivana na vrhu brda, na 1.350 stepenika visine. Ulaznica je 15 EUR za odrasle (cijena se mijenjala posljednjih godina pa provjerite na licu mjesta).

Nekoliko savjeta:
- Krenite rano (prije 9h) ili kasno popodne (poslije 17h). Sredinom dana je sunce direktno i bez sjene
- Ponesite vodu - na pola puta ima improvizovani štand ali cijene su dvostruke
- Patike su obavezne, stepenici su neravni i klizavi nakon kiše
- Cijela tura traje 1.5-2.5h u zavisnosti od koliko se zaustavljate na pogledima
- Na pola puta je crkva Gospe od Zdravlja - dobra tačka za pauzu i fotografije

## Boka Kotorska brodom

Iz Kotora svakodnevno polaze brodići za turu po Boki. Standardna ruta uključuje Plavu špilju, Gospu od Škrpjela (vještački napravljeno ostrvo kod Perasta) i Mamulu (napušteno utvrđenje na ulazu u zaliv). Cijena je oko 25-35 EUR po osobi za poludnevnu turu.

Alternativno, ako imate vremena, vožnja autom oko cijele Boke je iskustvo za sebe - od Kotora preko Risna i Perasta do Herceg Novog je oko sat vremena vožnje, ali putokraz vas više puta zaustavi na vidikovcima.

## Perast - obavezni izlet

Perast je 12 km od Kotora i većina ljudi ga vidi samo brodićem, što je šteta. Vrijedi otići autom (parking ispred grada košta 2 EUR/sat) i provesti par sati šetajući obalom. Mali brodići redovno prevoze do Gospe od Škrpjela za 5 EUR po osobi - vožnja traje 5 minuta.

## Plaže

Iskreno, Kotor nije destinacija za ljubitelje plaža. Voda u zalivu jeste mirna ali plaže su uglavnom kamenite i male. Najbolje opcije:
- **Plaža Dobreč** - dostupna samo brodom, mirna i čista
- **Plaža Plavi horizonti** - 30 minuta vožnje preko Tivta, pješčana, najbolja u okolini
- **Trsteno** - male uvale sa pristupom autom

Ako vam je primarno more, Budva i Petrovac (45 min vožnje) su bolji izbor.

## Restorani

Kotor je poznat po primorskoj kuhinji - puno svježe ribe, dalmatinskih jela, crnogorskog kačamaka i njeguškog pršuta. Mjesta koja se često preporučuju:

- **Konoba Scala Santa** (u Starom gradu) - tradicionalna jela, malo skuplja zbog lokacije
- **Ćatovića Mlini** (Morinj, 15 min od Kotora) - klasik za riblja jela, na mlinu pored vode
- **Bastion** - dobra pizza i nešto manje turistički
- **Galion** - smještena u Starom gradu sa pogledom, ali rezervacije su preporučene

## Kako stići i parking

Kotor nema aerodrom - najbliži je Tivat (8 km, 15 minuta vožnje), zatim Podgorica (90 km, 90 minuta). Iz Dubrovnika je 70 km, što znači oko 2h sa graničnim prelazom.

Za parking u Kotoru postoje tri glavne opcije: parking na ulazu u Stari grad (skuplji, 1.5 EUR/sat), parking u port-u (povoljniji ali 10 minuta hoda) i parking u podnožju Boke (kraj puta, besplatno ali daleko). Ljeti je nemoguće parkirati blizu Starog grada poslije 10h.

Ako iznajmljujete auto za istraživanje Crne Gore, Kotor je idealna baza za posjete Perastu, Tivtu, Lovćenu i Cetinju - sve u radijusu od sat vremena. [Pogledajte našu stranicu za rent a car u Kotoru](/rent-a-car/kotor) za trenutne ponude.`,
    contentEn: `Kotor is probably the most photographed town in Montenegro, and for good reason. It sits at the very end of the Bay of Kotor - a deeply indented bay that travel guides love to call "Europe's southernmost fjord" (geologically it isn't a fjord, but it looks like one). The Old Town has been UNESCO protected since 1979, and behind its walls hide narrow streets, stone squares, and one of the most photogenic panoramas on the Adriatic.

What travelers often don't realize is that Kotor can get crowded in summer - cruise ships dock at the port, and between 10am and 16pm the Old Town is genuinely packed. If you're planning a visit, arriving early in the morning or later in the afternoon (after 5pm) gives you a completely different experience of the city.

## Old Town - what to see

You enter through the Main City Gate from the Square of Arms. Inside, the city is a labyrinth of small squares, churches and palaces. The most notable:

**St. Tryphon's Cathedral** - built in 1166, one of the oldest cathedrals in the Adriatic region. Entry is around 4 EUR and includes access to the treasury with relics and medieval icons.

**Milk Square and Square of Arms** - the two main squares where you'll spend most time. Square of Arms is larger, with the main clock tower; Milk Square is smaller and quieter, with nice cafes.

**Church of St. Luke (1195)** - a small Romanesque church where both Orthodox and Catholic services are held - a rare thing in the region and part of Kotor's distinctiveness.

## Climbing the walls of St. John

This is probably the most memorable activity in Kotor. The walls climb from the city up to the fortress of St. John on top of the hill, at 1,350 steps elevation. Ticket is 15 EUR for adults (the price has changed over recent years so check on site).

A few tips:
- Start early (before 9am) or late afternoon (after 5pm). Midday the sun is direct and without shade
- Bring water - there's an improvised stand halfway up but prices are doubled
- Sneakers are mandatory, the steps are uneven and slippery after rain
- The full tour takes 1.5-2.5h depending on how much you stop at viewpoints
- Halfway up is the Church of Our Lady of Health - a good spot to rest and take photos

## Bay of Kotor by boat

Boats leave daily from Kotor for tours of the bay. The standard route includes the Blue Cave, Our Lady of the Rocks (a man-made island near Perast) and Mamula (an abandoned fortress at the entrance to the bay). Price is around 25-35 EUR per person for a half-day tour.

Alternatively, if you have time, driving around the entire bay is an experience itself - from Kotor through Risan and Perast to Herceg Novi is about an hour's drive, but the road repeatedly pulls you over at viewpoints.

## Perast - the mandatory side trip

Perast is 12 km from Kotor and most people only see it from a boat, which is a shame. It's worth driving over (parking outside the town costs 2 EUR/hour) and spending a few hours walking the waterfront. Small boats regularly ferry to Our Lady of the Rocks for 5 EUR per person - the ride takes 5 minutes.

## Beaches

Honestly, Kotor isn't a destination for beach lovers. The water in the bay is calm but the beaches are mostly rocky and small. Best options:
- **Dobreč Beach** - only accessible by boat, calm and clean
- **Plavi Horizonti Beach** - 30 minutes drive across to Tivat, sandy, the best in the area
- **Trsteno** - small coves accessible by car

If your main goal is the sea, Budva and Petrovac (45 min drive) are better choices.

## Restaurants

Kotor is known for coastal cuisine - lots of fresh fish, Dalmatian dishes, Montenegrin kačamak (polenta), and Njeguši prosciutto. Places that come up often:

- **Konoba Scala Santa** (in the Old Town) - traditional dishes, slightly pricey for the location
- **Ćatovića Mlini** (Morinj, 15 min from Kotor) - a classic for fish dishes, on a mill by the water
- **Bastion** - good pizza and less touristy
- **Galion** - located in the Old Town with a view, but reservations are recommended

## Getting there and parking

Kotor doesn't have an airport - the closest is Tivat (8 km, 15 min drive), then Podgorica (90 km, 90 min). From Dubrovnik it's 70 km, meaning about 2h with the border crossing.

For parking in Kotor there are three main options: parking at the entrance to the Old Town (more expensive, 1.5 EUR/hour), parking at the port (cheaper but a 10-minute walk), and parking at the foot of the bay (along the road, free but far). In summer it's impossible to park near the Old Town after 10am.

If you're renting a car to explore Montenegro, Kotor is an ideal base for trips to Perast, Tivat, Lovćen and Cetinje - all within an hour's radius. [Check our rent a car page for Kotor](/rent-a-car/kotor) for current offers.`,
    image: "/images/locations/kotor.jpg",
    category: "Turizam",
    keywords: ["things to do kotor", "kotor attractions", "boka kotorska", "what to see kotor"],
    date: "2026-04-19",
    readTime: 7,
  },
  {
    slug: "things-to-do-budva-montenegro",
    titleMe: "Šta raditi u Budvi - plaže, stari grad, noćni život",
    titleEn: "Things to Do in Budva - Beaches, Old Town, Nightlife",
    metaTitle: "Šta raditi u Budvi | Plaže, atrakcije, restorani | rentakar.me",
    metaDesc: "Vodič kroz Budvu - Stari grad, najbolje plaže (Mogren, Jaz, Bečići), noćni život, restorani. Šta vidjeti za 1, 3 ili 7 dana.",
    excerptMe: "Budva je centralna tačka crnogorske turističke ponude - sa preko 35 km plaža, srednjovjekovnim Starim gradom i poznatim noćnim životom.",
    excerptEn: "Budva is the central point of Montenegro's tourism - with over 35 km of beaches, a medieval Old Town, and famous nightlife.",
    contentMe: `Budva je grad koji znači različite stvari različitim posjetiocima. Za nekoga je to Stari grad i njegova srednjovjekovna atmosfera, za druge plaže Bečića i Mogrena, treći dolaze radi noćnog života koji je ljeti najživlji u regionu. Sa oko 13.000 stanovnika van sezone i procijenjenih 100.000 ljudi tokom jula i avgusta, Budva je najturističkiji grad u Crnoj Gori - sa svim plusima i minusima koje to nosi.

Ako vam je ovo prvi put u Budvi, dobro je znati da je grad podijeljen na nekoliko zona koje se razlikuju po atmosferi: Stari grad i Slovenska plaža (centar, gužva, sve), Bečići (porodični, hoteli, dugačka plaža), Pržno i Sveti Stefan (mirniji, skuplji), i Petrovac (najmirniji, 20 minuta vožnje južno).

## Stari grad Budve

Stari grad je manji od kotorskog ali ima drugačiji karakter - više je živ, sa restoranima, prodavnicama i barovima u skoro svakoj ulici. Šetnja kroz cijeli grad ne traje ni 20 minuta, ali lako ćete provesti par sati ako se zaustavite za kafu ili obrok.

Najznačajnije:
- **Citadela** - tvrđava na vrhu Starog grada, sa pogledom na more. Ulaznica oko 3-4 EUR
- **Crkva sv. Ivana** - barokna crkva sa zvonikom kojeg ćete primjetiti iz daljine
- **Mogren plaža** - tehnički je odmah ispod Starog grada, šetnjom 5 minuta

Zidine Starog grada možete obići u potpunosti i one daju dobre fotografije, posebno pri zalasku sunca.

## Plaže Budve i okoline

Budva ima preko 35 km plaža, ali nisu sve iste. Evo praktičnog rangiranja:

**Mogren** - najatraktivnija plaža u centru Budve. Šljunkovita, čista voda, dvije manje uvale (Mogren I i II) povezane stazom kroz stijene. Gužva ljeti, ali se isplati.

**Slovenska plaža** - dugačka pješčana plaža kroz centar Budve. Pogodna za porodice ali ljeti je naprosto pretrpana - ležaljke se redaju u 5-6 redova.

**Jaz** - 3 km zapadno od Budve, ogromna plaža (1 km dužine) sa pijeskom i šljunkom. Manje gužve nego u centru, dobri beach barovi. Ovdje se događaju i veliki ljetnji koncerti.

**Bečići** - 2 km istočno od Budve. Dugačka plaža (1.95 km), pretežno šljunak i pijesak. Najpopularnija porodična destinacija - ima i dosta hotela u zaleđu.

**Sveti Stefan** - sama plaža je javna, ali pristup samom otok-hotelu je samo za goste. Plaža je sa ružičastim šljunkom i izuzetno fotogenična.

**Pržno** - mali ribarski zaliv između Budve i Svetog Stefana. Mirnije, autentičnije, sa par dobrih konoba.

## Noćni život

Budva je poznata po noćnom životu i to ne bez razloga - tokom ljetnih mjeseci ovdje dolaze DJ-evi sa svjetske scene. Glavna mjesta:

- **Top Hill** - otvoreni klub na brdu iznad Budve, kapacitet 5.000 ljudi, ljetnji period
- **Trocadero** - klub u centru Starog grada
- **Casper** - bar u Starom gradu, pogodno za pre-party
- **Greco Beach Bar** (Jaz) - dnevni i večernji beach bar

Sezona "ozbiljnog" noćnog života je strogo jul-avgust. Van sezone Budva je puno mirnija - što za neke posjetioce može biti i prednost.

## Aktivnosti

- **Vožnja brodom do Svetog Stefana** - poludnevne ture iz porta Budve, 15-25 EUR
- **Paragliding sa Brajića** - skok iznad Budve i slijetanje na plažu, oko 70 EUR
- **Skadarsko jezero (45 min vožnje)** - poludnevni izlet sa vožnjom čamcem
- **Lovćen i Cetinje (1h vožnje)** - kulturni izlet, mauzolej Njegošev na vrhu
- **Kotor (30 min vožnje)** - poludnevni ili dnevni izlet

## Restorani

Budva ima sve - od fast fooda do fine diningu. Mjesta koja se često preporučuju:

- **Konoba Stari Grad** - tradicionalna jela, u Starom gradu
- **Jadran kod Krsta** - klasični riblji restoran kojeg lokalci poznaju decenijama
- **Pizzeria Forza** - dobra pica, povoljnije od restorana u centru
- **Demižon** - svježa riba na Slovenskoj plaži

Treba znati da restorani u Starom gradu i na rivi imaju turističke cijene. Ako želite cjenovno povoljnije, kreni 5-10 minuta od centra.

## Praktične informacije

Budva je 25 km od aerodroma Tivat (TIV), 65 km od aerodroma Podgorica (TGD). Vožnja od Tivta traje oko 30 minuta, od Podgorice 60-90 minuta zavisno od saobraćaja.

Parking ljeti je problem - centralni parkinzi su skupi (1.5-2 EUR/sat) i često puni. Mnogi hoteli imaju vlastiti parking. Ako iznajmljujete vozilo i smještavate se izvan centra, lakše je.

Za istraživanje crnogorskog primorja, Budva je idealna baza - od ovdje su sve glavne atrakcije u radijusu od 60 minuta vožnje. [Pogledajte ponudu rent a car-a u Budvi](/rent-a-car/budva) za trenutne cijene.`,
    contentEn: `Budva means different things to different visitors. For some it's the Old Town and its medieval atmosphere, for others the beaches of Bečići and Mogren, others come for the nightlife that's the liveliest in the region during summer. With about 13,000 residents off-season and an estimated 100,000 people during July and August, Budva is the most touristy city in Montenegro - with all the pluses and minuses that brings.

If this is your first time in Budva, it helps to know the city is divided into several zones with different vibes: Old Town and Slovenska beach (center, crowds, everything), Bečići (family-friendly, hotels, long beach), Pržno and Sveti Stefan (quieter, more expensive), and Petrovac (quietest, 20 min drive south).

## Budva Old Town

The Old Town is smaller than Kotor's but has a different character - more lively, with restaurants, shops and bars in nearly every street. Walking the entire town takes less than 20 minutes, but you can easily spend a few hours stopping for coffee or a meal.

Most notable:
- **Citadel** - fortress at the top of the Old Town, with sea views. Ticket about 3-4 EUR
- **Church of St. John** - baroque church with a bell tower visible from far away
- **Mogren Beach** - technically right below the Old Town, 5 minutes walk

You can walk the entire Old Town walls and they give good photos, especially at sunset.

## Budva area beaches

Budva has over 35 km of beaches, but they're not all the same. Here's a practical ranking:

**Mogren** - the most attractive beach in central Budva. Pebbly, clean water, two smaller coves (Mogren I and II) connected by a path through cliffs. Crowded in summer, but worth it.

**Slovenska Beach** - long sandy beach through the center of Budva. Suitable for families but in summer it's simply overcrowded - sun loungers stack 5-6 rows deep.

**Jaz** - 3 km west of Budva, huge beach (1 km length) with sand and pebbles. Fewer crowds than in the center, good beach bars. This is also where major summer concerts happen.

**Bečići** - 2 km east of Budva. Long beach (1.95 km), mostly pebble and sand. The most popular family destination - lots of hotels in the back.

**Sveti Stefan** - the beach itself is public, but access to the island-hotel is for guests only. The beach has pinkish pebbles and is extremely photogenic.

**Pržno** - small fishing cove between Budva and Sveti Stefan. Quieter, more authentic, with a few good konobas.

## Nightlife

Budva is famous for nightlife and not without reason - during summer months DJs from the global scene come here. Main spots:

- **Top Hill** - open-air club on the hill above Budva, capacity 5,000 people, summer only
- **Trocadero** - club in the center of the Old Town
- **Casper** - bar in the Old Town, good for pre-party
- **Greco Beach Bar** (Jaz) - day and evening beach bar

The "serious" nightlife season is strictly July-August. Off-season Budva is much calmer - which for some visitors can also be an advantage.

## Activities

- **Boat ride to Sveti Stefan** - half-day tours from Budva port, 15-25 EUR
- **Paragliding from Brajići** - jump above Budva and land on the beach, about 70 EUR
- **Skadar Lake (45 min drive)** - half-day trip with a boat ride
- **Lovćen and Cetinje (1h drive)** - cultural trip, Njegoš's mausoleum at the top
- **Kotor (30 min drive)** - half or full day trip

## Restaurants

Budva has it all - from fast food to fine dining. Places that often come up:

- **Konoba Stari Grad** - traditional dishes, in the Old Town
- **Jadran kod Krsta** - classic fish restaurant locals have known for decades
- **Pizzeria Forza** - good pizza, cheaper than restaurants in the center
- **Demižon** - fresh fish on Slovenska beach

Worth knowing: restaurants in the Old Town and on the riva (waterfront) have tourist prices. If you want better value, walk 5-10 minutes from the center.

## Practical info

Budva is 25 km from Tivat airport (TIV), 65 km from Podgorica airport (TGD). The drive from Tivat takes about 30 minutes, from Podgorica 60-90 minutes depending on traffic.

Parking in summer is a problem - central parking lots are expensive (1.5-2 EUR/hour) and often full. Many hotels have their own parking. If you're renting a vehicle and staying outside the center, it's easier.

For exploring the Montenegrin coast, Budva is an ideal base - from here all major attractions are within 60 minutes drive. [Check rent a car options in Budva](/rent-a-car/budva) for current prices.`,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316391/F6tufssh9csNoGMxi69exc/budva-old-town-KkF4Xtaf5nYH5SMet3wuQ9.webp",
    category: "Turizam",
    keywords: ["things to do budva", "budva beaches", "budva nightlife", "what to see budva"],
    date: "2026-04-18",
    readTime: 6,
  },
  {
    slug: "things-to-do-podgorica-montenegro",
    titleMe: "Šta Raditi u Podgorici - Vodič za Glavnicu Crne Gore",
    titleEn: "Things to Do in Podgorica - Guide to Montenegro's Capital",
    metaTitle: "Šta Raditi u Podgorici | Muzeje, Restorani, Atrakcije | rentakar.me",
    metaDesc: "Podgorica je pulsantna glavnica sa bogatom istorijom. Otkrijte muzeje, restorane, parkove i sve što trebate znati.",
    excerptMe: "Podgorica je više od samo glavnog grada - to je srce kulture i istorije Crne Gore.",
    excerptEn: "Podgorica is more than just the capital - it's the heart of culture and history of Montenegro.",
    contentMe: `Podgorica je pulsantna glavnica Crne Gore sa bogatom istorijom i živahnom atmosferom. Iako nije poznata kao plaža destinacija, Podgorica ima mnogo za ponuditi.

## Muzeje i Kultura

- **Narodni muzej** - istorija i kultura Crne Gore
- **Muzej savremene umetnosti** - savremena umetnost
- **Muzej prirode** - prirodna istorija

## Znamenitosti

- **Tvrđava Ribnica** - srednjovjekovna tvrđava
- **Džamija Osmana Paše** - arhitektonski dragulj
- **Katedrala Rezureksije** - nova katedrala sa impresivnom arhitekturom
- **Stara varoš** - stari dio grada sa tradicionalnom arhitekturom

## Parkovi

- **Park Gorica** - zelena oaza u gradu
- **Ribnjak** - jezero sa šetnjom
- **Morača** - reka kroz grad

## Restorani i Noćni Život

- **Restoran Stara Varoš** - tradicionalna hrana
- **Kafići na Ribnjaku** - opuštena atmosfera
- **Barovi u centru** - noćni život

## Kako Doći?

Podgorica je centar Crne Gore. Iznajmite auto i istražite sve što grad ima za ponuditi.`,
    contentEn: `Podgorica is the pulsating capital of Montenegro with a rich history and vibrant atmosphere. Although not known as a beach destination, Podgorica has much to offer.

## Museums and Culture

- **National Museum** - history and culture of Montenegro
- **Museum of Contemporary Art** - contemporary art
- **Museum of Nature** - natural history

## Landmarks

- **Ribnica Fortress** - medieval fortress
- **Osman Pasha Mosque** - architectural gem
- **Resurrection Cathedral** - new cathedral with impressive architecture
- **Old Town** - old part of the city with traditional architecture

## Parks

- **Gorica Park** - green oasis in the city
- **Ribnjak** - lake with a walk
- **Morača** - river through the city

## Restaurants and Nightlife

- **Stara Varoš Restaurant** - traditional food
- **Cafes at Ribnjak** - relaxed atmosphere
- **Bars in the center** - nightlife

## How to Get There?

Podgorica is the center of Montenegro. Rent a car and explore everything the city has to offer.`,
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028316391/F6tufssh9csNoGMxi69exc/podgorica-city-eU6TJrqeuY83TCy4553kkQ.webp",
    category: "Turizam",
    keywords: ["things to do podgorica", "podgorica attractions", "what to see podgorica"],
    date: "2026-04-17",
    readTime: 5,
  },
  {
    slug: "best-beaches-montenegro",
    titleMe: "Najbolje plaže u Crnoj Gori - po regionu i tipu",
    titleEn: "Best Beaches in Montenegro - By Region and Type",
    metaTitle: "Najbolje plaže Crne Gore 2026 | Pijesak, šljunak, mirne uvale | rentakar.me",
    metaDesc: "Vodič kroz najbolje plaže u Crnoj Gori - od Velike plaže u Ulcinju do skrivenih uvala Lustice. Pijesak ili šljunak, gužva ili mir.",
    excerptMe: "Crna Gora ima 293 km obale i preko 70 plaža - ali nisu sve iste. Vodič koji vam pomaže da izaberete pravu plažu prema onome što tražite.",
    excerptEn: "Montenegro has 293 km of coastline and over 70 beaches - but they're not all the same. A guide that helps you choose the right beach based on what you're looking for.",
    contentMe: `Crna Gora ima 293 km obale i preko 70 plaža - od ogromne Velike plaže u Ulcinju (13 km dužine) do sakrivenih uvala na Luštici do kojih se dolazi samo brodom. Velika razlika je između pješčanih i šljunkovitih plaža: jug zemlje (Ulcinj, Bar, Sutomore) je pješčani, dok je sjever (Kotor, Tivat, Budva) uglavnom šljunak ili kombinacija šljunka i pijeska.

Ovo je važno znati prije nego rezervišete smještaj - nisu sve plaže iste i nije svaka pogodna za svaki tip putnika. Niže je vodič po regionima.

## Bokokotorski zaliv (Kotor, Tivat, Herceg Novi)

Boka je čudo prirode ali iskreno - nije destinacija primarno za plaže. Voda je mirna, ali plaže su uglavnom male i šljunkovite. Najbolje opcije:

**Plavi horizonti** - pješčana plaža na poluostrvu Luštica (preko Tivta), oko 30 minuta od Kotora. Ovo je vjerovatno najbolja porodična plaža u Boki - plitka voda, pijesak, dobri restorani u zaleđu. Parking ima ali ljeti se popuni rano.

**Žanjic** - uvala na ulazu u Bokokotorski zaliv, dostupna autom (loš put) ili brodom iz Herceg Novog. Šljunak ali kristalno čista voda i konobe sa svježom ribom.

**Dobreč i Mirišta** - manje uvale na Luštici, dostupne brodom iz Herceg Novog. Mirne, sa dobrom hranom.

**Igalo** - pješčani dio Herceg Novog, dugačka plaža, popularna kod porodica.

## Budvanska rivijera

Većina turista u Crnoj Gori provede plaže ovdje - pa očekujte gužvu, ali i najveću infrastrukturu (beach barovi, ležaljke, sportovi).

**Mogren (Budva)** - šljunkovita, čista voda, dvije manje uvale (Mogren I i II) povezane stazom kroz stijene. Ljeti vrlo gužva.

**Jaz** - 3 km zapadno od Budve, jedna od najvećih plaža (1 km dužine), kombinacija pijeska i šljunka. Manje gužve nego u Budvi, ima beach barova.

**Bečići** - 1.95 km dugačka plaža, popularna porodična destinacija sa hotelima u zaleđu.

**Sveti Stefan** - ružičasti šljunak, ekstremno fotogenična. Pristup samom otoku-hotelu nije moguć (samo gostima), ali sama plaža je javna.

**Pržno** - mali ribarski zaliv sa malom plažom, mirniji od centra Budve.

**Petrovac** - manje gužve nego Budva, dvije plaže (gradska i Lučice), pogodno za porodice.

**Buljarica** - 4 km južno od Petrovca, najveća plaža na rivijeri (2.4 km), divlja, manje gužve.

## Bar i Sutomore

Ovo je tranzicioni dio - počinje pjesak. Manje turistički razrađen od Budve.

**Sutomore** - pješčana plaža, popularna kod lokalaca i Srba na odmoru. Cjenovno povoljnije od Budve.

**Plaža Maljevik** - ispod Sutomora, manja pješčana uvala.

**Crvena plaža (Bar)** - pjesak prošaran crvenkastim šljunkom (dolazi od minerala u stijenama), neobičan vizualni efekat.

## Ulcinj - najjužniji dio

Ulcinj ima neke od najkvalitetnijih pješčanih plaža u Crnoj Gori, sa istočnjačkom atmosferom (blizu Albanije).

**Velika plaža** - 13 km duga, sitan crni pijesak (sa zdravstvenim svojstvima zbog minerala), plitka voda, popularna kod kitesurfera. Nije razvijena svuda - veliki dio je još uvijek prirodan.

**Mala plaža** - u centru Ulcinja, pješčana, sa restoranima i barovima.

**Ada Bojana** - poseban slučaj. Ostrvo na rijeci Bojani, prirodna plaža na njenom završetku gdje se uliva u more. Naturistička plaža (FKK), miran ambijent, restorani sa rijeci-školjkama.

## Praktične napomene

**Sezona kupanja** je od kraja maja do oktobra. Voda je najtoplija u avgustu (oko 26°C). Pripazite da je ljeti voda u Boki Kotorskoj često hladnija od onih na otvorenom moru zbog prisustva podvodnih izvora.

**Ležaljke i suncobrani** koštaju 10-25 EUR za par sa suncobranom, zavisi od plaže. Najskuplje su Sveti Stefan, Mogren i Bečići.

**Plave zastave** (znak za kvalitetu vode i plaže) ima oko 25 plaža u CG - među njima Bečići, Petrovac, Mogren, Lustica Bay, plaže u Tivtu.

**Konobe na plažama** su uglavnom skupe ljeti - 15-25 EUR za riblje jelo. Ako vam je važan budžet, jedite u centru ili u manjim mjestima.

Ako planirate obilazak više plaža, iznajmljivanje vozila daje najveću fleksibilnost - mnoge skrivene uvale su dostupne samo autom. [Pogledajte ponude za rent a car u Crnoj Gori](/rent-a-car-montenegro).`,
    contentEn: `Montenegro has 293 km of coastline and over 70 beaches - from the huge Velika Beach in Ulcinj (13 km long) to hidden coves on Luštica accessible only by boat. There's a big difference between sandy and pebble beaches: the south of the country (Ulcinj, Bar, Sutomore) is sandy, while the north (Kotor, Tivat, Budva) is mostly pebble or a combination.

This is important to know before booking accommodation - not all beaches are the same and not every one is suitable for every type of traveler. Below is a guide by region.

## Bay of Kotor (Kotor, Tivat, Herceg Novi)

Boka is a natural wonder but honestly - it's not primarily a beach destination. The water is calm, but beaches are mostly small and pebbly. Best options:

**Plavi Horizonti** - sandy beach on the Luštica peninsula (across from Tivat), about 30 minutes from Kotor. This is probably the best family beach in Boka - shallow water, sand, good restaurants in the back. There's parking but it fills up early in summer.

**Žanjic** - cove at the entrance to the Bay of Kotor, accessible by car (bad road) or boat from Herceg Novi. Pebble but crystal clear water and konobas with fresh fish.

**Dobreč and Mirišta** - smaller coves on Luštica, accessible by boat from Herceg Novi. Quiet, with good food.

**Igalo** - sandy section of Herceg Novi, long beach, popular with families.

## Budva Riviera

Most tourists in Montenegro spend their beach time here - so expect crowds, but also the most infrastructure (beach bars, sun loungers, sports).

**Mogren (Budva)** - pebble, clean water, two smaller coves (Mogren I and II) connected by a path through cliffs. Very crowded in summer.

**Jaz** - 3 km west of Budva, one of the largest beaches (1 km long), combination of sand and pebble. Less crowded than Budva, has beach bars.

**Bečići** - 1.95 km long beach, popular family destination with hotels in the back.

**Sveti Stefan** - pinkish pebbles, extremely photogenic. Access to the island-hotel itself isn't possible (guests only), but the beach is public.

**Pržno** - small fishing cove with a small beach, quieter than central Budva.

**Petrovac** - less crowded than Budva, two beaches (town and Lučice), suitable for families.

**Buljarica** - 4 km south of Petrovac, the longest on the riviera (2.4 km), wild, less crowded.

## Bar and Sutomore

This is the transition area - sand begins. Less developed than Budva.

**Sutomore** - sandy beach, popular with locals and Serbs on holiday. Cheaper than Budva.

**Maljevik Beach** - below Sutomore, smaller sandy cove.

**Red Beach (Bar)** - sand mixed with reddish pebbles (from minerals in the rocks), unusual visual effect.

## Ulcinj - the southernmost part

Ulcinj has some of the highest quality sandy beaches in Montenegro, with an eastern atmosphere (close to Albania).

**Velika Plaža** - 13 km long, fine black sand (with health properties due to minerals), shallow water, popular with kitesurfers. Not developed everywhere - much of it is still natural.

**Small Beach** - in central Ulcinj, sandy, with restaurants and bars.

**Ada Bojana** - special case. An island on the Bojana river, natural beach at its end where it flows into the sea. Naturist beach (FKK), calm atmosphere, restaurants with river-shells.

## Practical notes

**Swimming season** is from late May to October. Water is warmest in August (about 26°C). Note that in summer the water in the Bay of Kotor is often colder than that of the open sea due to underwater springs.

**Sun loungers and umbrellas** cost 10-25 EUR for a pair with umbrella, depending on the beach. Most expensive are Sveti Stefan, Mogren and Bečići.

**Blue Flag** (mark for water and beach quality) is held by about 25 beaches in Montenegro - including Bečići, Petrovac, Mogren, Lustica Bay, beaches in Tivat.

**Konobas on the beaches** are usually expensive in summer - 15-25 EUR for a fish dish. If budget matters, eat in the center or in smaller places.

If you're planning to visit multiple beaches, renting a vehicle gives the greatest flexibility - many hidden coves are only accessible by car. [Check rent a car options in Montenegro](/rent-a-car-montenegro).`,
    image: "/images/locations/becici.jpg",
    category: "Plaže",
    keywords: ["best beaches montenegro", "plaže crna gora", "mogren beach", "jaz beach"],
    date: "2026-04-16",
    readTime: 5,
  },
  {
    slug: "durmitor-national-park-guide",
    titleMe: "Durmitor - vodič za nacionalni park i okolinu",
    titleEn: "Durmitor National Park - A Practical Guide",
    metaTitle: "Durmitor nacionalni park | Crno jezero, planinarenje, Žabljak | rentakar.me",
    metaDesc: "Vodič kroz Durmitor: Crno jezero, Bobotov kuk, planinarski tragovi, kanjon Tare i kako stići. Šta vidjeti za 1, 2 ili 3 dana.",
    excerptMe: "Durmitor je nacionalni park površine 390 km² sa 18 jezera, 48 vrhova preko 2.000 metara i kanjonom Tare - drugim po dubini na svijetu.",
    excerptEn: "Durmitor is a 390 km² national park with 18 lakes, 48 peaks over 2,000 meters, and the Tara canyon - the second deepest in the world.",
    contentMe: `Durmitor je nacionalni park koji se prostire na 390 km² u sjeverozapadnom dijelu Crne Gore. Ima 18 ledničkih jezera ("gorske oči", kako ih lokalno zovu), 48 vrhova preko 2.000 metara i graniči se sa kanjonom rijeke Tare - drugim najdubljim kanjonom na svijetu (1.300 m, samo Grand Canyon je dublji). Park je na UNESCO listi od 1980. godine.

Centralno mjesto za posjetu je gradić Žabljak na 1.456 m nadmorske visine - najviša gradska naseobina u jugoistočnoj Evropi. Iz Žabljaka se startuju skoro svi planinarski izleti i ekskurzije, i tu je većina smještaja.

## Kada doći

Durmitor je drugačija destinacija u svakom godišnjem dobu:

**Ljeto (jun-septembar)** je glavna sezona - temperature 20-25°C danju, prijatne za hodanje. Sve staze su otvorene, jezera dostupna, restorani rade.

**Zima (decembar-mart)** je skijaška sezona. Žabljak ima par manjih ski centara (Savin Kuk, Javorovača) - nije Alpe ali je solidno za regionalne standarde, znatno povoljnije od evropskih destinacija. Cijena ski pasa oko 25 EUR dnevno.

**Proljeće i jesen** su prelazni periodi - jezera su impresivna ali staze mogu biti blatnjave ili pod snijegom na višim dijelovima.

**Važno:** ljeti uvijek ponesite jaknu i dugačke pantalone, čak i kad je u Podgorici 35°C. Razlika u temperaturi je ozbiljna - Žabljak je u prosjeku 10°C hladniji.

## Crno jezero - obavezna posjeta

Crno jezero (Crno Lake) je 3 km od Žabljaka i najpopularnija lokacija u parku. Sastoji se zapravo od dva jezera spojena uskim kanalom - "Veliko" i "Malo" jezero.

Šetnja oko jezera (oko 3.5 km, ravna staza) traje oko sat i pol i lako je savladiva čak i sa djecom. Voda je hladna ali kupa se ljeti - posebno ljudi koji vole "polarno" iskustvo. Ulaz u nacionalni park je 3 EUR po osobi.

**Praktične napomene:**
- Parking ima na ulazu, ali se popuni rano (poslije 10h teško)
- Restoran "Kod Boža" na ulazu je najpoznatiji, srpska/crnogorska kuhinja
- Najbolja svjetlost za fotografiju je rano ujutru (jezero kao ogledalo) ili kasno popodne

## Planinarenje

Durmitor ima oko 25 markiranih staza različitog nivoa. Najpopularnije:

**Bobotov kuk (2.523 m)** - najviši vrh i klasik. Staza polazi od planinskog doma na Lokvicama (1.800 m), do vrha treba 4-5 sati uspona, povratak 3-4 sata. Tehnički nije pretjerano teško ali je naporno - dobra forma je preporučena. Ne preporučuje se ako nemate planinarsko iskustvo.

**Savin kuk (2.313 m)** - lakši uspon, polazi sa ski staze, može se ići i žičarom dio puta.

**Crveno polje** - lagana šetnja sa Crnog jezera, dobra za porodice.

**Ledena pećina** - oko 3 sata pješke od Crnog jezera, pećina sa ledom koji ne kopni cijele godine.

**Tradiciona planinarska šetnja** preporučuje se sa lokalnim vodičem ili u grupi, posebno ako idete na više vrhove. Vremenski uslovi se mijenjaju brzo, magla može doći za 30 minuta.

## Kanjon Tare i rafting

Tara je rijeka koja teče duž sjeverne ivice Durmitora. Kanjon je dubok 1.300 m i dug 78 km. Glavne aktivnosti:

**Rafting** - sezona april-oktobar. Standardna ruta je Brstanovica - Šćepan Polje (18 km, 3-4 sata, oko 50 EUR uključujući prevoz, oprema, ručak). Ovo nije ekstremni rafting - 3-4 stupnja težine, pogodno i za početnike i porodice sa djecom od 8 godina.

**Most na Đurđevića Tari** - inženjerski objekat iz 1940-ih, jedan od simbola Crne Gore. Sa mosta je zip-line preko kanjona (oko 20 EUR za kratku rutu).

**Vidikovac Curevac** - 1.625 m visine, panoramski pogled na cijeli kanjon. Dostupno autom + 15 minuta hoda.

## Smještaj u Žabljaku

Cijene su prilično povoljne van sezone, znatno više ljeti i u skijaškoj sezoni:

- **Hotel Soa** i **Hotel Polar Star** - srednjoj klase, oko 60-100 EUR za dvokrevetnu sobu
- **Eko-katuni** - tradicionalni planinski objekti, autentičnije iskustvo, 40-70 EUR
- **Apartmani** preko Booking-a - najviše opcija, 30-80 EUR

Žabljak ima 5-6 dobrih restorana - **Kalužerica**, **Mama Mia** (pizza), **Durmitor**, sve solidne. Kačamak sa kajmakom i janjetinom ispod sača su klasici.

## Kako stići

Žabljak je oko 130 km od Podgorice (oko 2.5h vožnje), 90 km od Nikšića (1.5h), 200 km od Budve (3h). Nema direktne autobuske linije iz primorja - autom je najlakše.

Put do Žabljaka je solidan asfalt ali je serpentina - neki pravci, posebno preko Šavnika ili kroz kanjon Pive, su tehnički zahtjevniji. Zimi obavezno provjerite uslov puta i imajte zimsku opremu.

Iznajmljivanje vozila je gotovo neophodno za pravo iskustvo Durmitora - bez auta ste ograničeni na okoline Žabljaka. [Pogledajte rent a car opcije za Žabljak](/rent-a-car/zabljak).`,
    contentEn: `Durmitor is a national park spanning 390 km² in the northwestern part of Montenegro. It has 18 glacial lakes (locally called "mountain eyes"), 48 peaks over 2,000 meters, and borders the Tara River canyon - the second deepest canyon in the world (1,300 m, only the Grand Canyon is deeper). The park has been on the UNESCO list since 1980.

The central place for visits is the small town of Žabljak at 1,456 m elevation - the highest urban settlement in Southeast Europe. Almost all hikes and excursions start from Žabljak, and most accommodation is here.

## When to come

Durmitor is a different destination in each season:

**Summer (June-September)** is the main season - temperatures 20-25°C during the day, pleasant for walking. All trails are open, lakes accessible, restaurants working.

**Winter (December-March)** is the ski season. Žabljak has a few smaller ski centers (Savin Kuk, Javorovača) - it's not the Alps but it's solid by regional standards, significantly cheaper than European destinations. Ski pass price is about 25 EUR per day.

**Spring and autumn** are transitional periods - the lakes are impressive but trails can be muddy or under snow at higher elevations.

**Important:** in summer always bring a jacket and long pants, even when it's 35°C in Podgorica. The temperature difference is serious - Žabljak is on average 10°C colder.

## Black Lake (Crno Jezero) - mandatory visit

Black Lake is 3 km from Žabljak and the most popular location in the park. It actually consists of two lakes connected by a narrow channel - "Big" and "Small" lake.

The walk around the lake (about 3.5 km, flat trail) takes about an hour and a half and is easily doable even with children. The water is cold but people swim in summer - especially those who like the "polar" experience. Park entry is 3 EUR per person.

**Practical notes:**
- Parking exists at the entrance but fills up early (after 10am it's tough)
- Restaurant "Kod Boža" at the entrance is the most famous, Serbian/Montenegrin cuisine
- Best light for photos is early morning (lake like a mirror) or late afternoon

## Hiking

Durmitor has about 25 marked trails of various levels. Most popular:

**Bobotov Kuk (2,523 m)** - the highest peak and a classic. Trail starts from the mountain hut at Lokvice (1,800 m), takes 4-5 hours up, 3-4 hours back. Technically not too difficult but tiring - good fitness recommended. Not recommended if you don't have hiking experience.

**Savin Kuk (2,313 m)** - easier ascent, starts from the ski slope, you can take the cable car part of the way.

**Red Field (Crveno Polje)** - easy walk from Black Lake, good for families.

**Ice Cave** - about 3 hours hike from Black Lake, a cave with ice that doesn't melt year-round.

**Traditional mountain hiking** is recommended with a local guide or in a group, especially if going to higher peaks. Weather changes quickly, fog can arrive in 30 minutes.

## Tara Canyon and rafting

The Tara is a river flowing along the northern edge of Durmitor. The canyon is 1,300 m deep and 78 km long. Main activities:

**Rafting** - season is April-October. Standard route is Brstanovica - Šćepan Polje (18 km, 3-4 hours, about 50 EUR including transport, equipment, lunch). This isn't extreme rafting - 3-4 difficulty grade, suitable for beginners and families with children from 8 years old.

**Đurđevića Tara Bridge** - an engineering structure from the 1940s, one of the symbols of Montenegro. From the bridge there's a zip-line across the canyon (about 20 EUR for a short route).

**Curevac viewpoint** - 1,625 m elevation, panoramic view of the entire canyon. Accessible by car + 15 minutes walk.

## Accommodation in Žabljak

Prices are quite reasonable off-season, significantly higher in summer and ski season:

- **Hotel Soa** and **Hotel Polar Star** - mid-class, about 60-100 EUR for a double room
- **Eko-katuni** - traditional mountain huts, more authentic experience, 40-70 EUR
- **Apartments** via Booking - most options, 30-80 EUR

Žabljak has 5-6 good restaurants - **Kaluđerica**, **Mama Mia** (pizza), **Durmitor**, all solid. Kačamak with kajmak and lamb under sač are classics.

## How to get there

Žabljak is about 130 km from Podgorica (about 2.5h drive), 90 km from Nikšić (1.5h), 200 km from Budva (3h). There's no direct bus line from the coast - by car is easiest.

The road to Žabljak is solid asphalt but it's serpentine - some directions, especially via Šavnik or through the Piva canyon, are technically more demanding. In winter, definitely check road conditions and have winter equipment.

Renting a vehicle is almost essential for a real Durmitor experience - without a car you're limited to the surroundings of Žabljak. [Check rent a car options for Žabljak](/rent-a-car/zabljak).`,
    image: "/images/locations/durmitor.jpg",
    category: "Planine",
    keywords: ["durmitor national park", "hiking montenegro", "crno jezero", "bobotov vrt"],
    date: "2026-04-15",
    readTime: 6,
  },
  {
    slug: "rafting-tara-river-montenegro",
    titleMe: "Rafting na Rijeci Tari - Avantura u Crnoj Gori",
    titleEn: "Rafting on Tara River - Adventure in Montenegro",
    metaTitle: "Rafting Tara Rijeka | Avantura, Sigurnost, Informacije | rentakar.me",
    metaDesc: "Tara rijeka nudi najbolje rafting iskustvo u Evropi. Otkrijte kako, gdje i kada rafting.",
    excerptMe: "Tara rijeka je najdublja rijeka u Evropi sa spektakularnim kanjonom. Savršeno za rafting avanturu.",
    excerptEn: "Tara River is the deepest river in Europe with a spectacular canyon. Perfect for a rafting adventure.",
    contentMe: `Tara rijeka je najdublja rijeka u Evropi sa kanjonom od 1.300 metara. Rafting na Tari je obavezna aktivnost.

## Rafting Rute

- **Plitvice-Šćepan Polje** - 18 km, 3-4 sata
- **Šćepan Polje-Drina** - 20 km, 4-5 sati
- **Kombinovana ruta** - cijeli dan

## Nivo Teške

- **Lagano** - za početnike
- **Srednje** - za iskusnije
- **Teško** - za avanturiste

## Sigurnost

- Sve agencije imaju sigurnosnu opremu
- Vodiči su iskusni i sertifikovani
- Osiguranje je uključeno

## Gdje Rezervisati

Preko rentakar.me - pošaljite upit i dobijete ponude od lokalnih agencija.

## Kada Ići

- Najbolje u maju-junu i septembru-oktobru
- Ljeti je voda malo niža
- Zimi se ne preporučuje`,
    contentEn: `Tara River is the deepest river in Europe with a canyon of 1,300 meters. Rafting on Tara is a must-do activity.

## Rafting Routes

- **Plitvice-Šćepan Polje** - 18 km, 3-4 hours
- **Šćepan Polje-Drina** - 20 km, 4-5 hours
- **Combined route** - full day

## Difficulty Levels

- **Easy** - for beginners
- **Medium** - for experienced
- **Hard** - for adventurers

## Safety

- All agencies have safety equipment
- Guides are experienced and certified
- Insurance is included

## Where to Book

Through rentakar.me - send a request and get offers from local agencies.

## When to Go

- Best in May-June and September-October
- Water is slightly lower in summer
- Not recommended in winter`,
    image: "/images/locations/tara.jpg",
    category: "Aktivnosti",
    keywords: ["rafting tara", "tara river", "white water rafting", "adventure montenegro"],
    date: "2026-04-14",
    readTime: 5,
  },
  {
    slug: "scuba-diving-montenegro",
    titleMe: "Ronjenje u Crnoj Gori - Otkrijte Podvodni Svijet",
    titleEn: "Scuba Diving in Montenegro - Discover the Underwater World",
    metaTitle: "Ronjenje Crna Gora | Diving Sites, Kursi, Iskustva | rentakar.me",
    metaDesc: "Crna Gora je odličnog za ronjenje sa bogatim morskim životom. Otkrijte najbolje lokacije i kako početi.",
    excerptMe: "Ronjenje u Crnoj Gori je iskustvo koje ne smijete propustiti. Kristalno čista voda i bogat morski život.",
    excerptEn: "Diving in Montenegro is an experience you shouldn't miss. Crystal clear water and rich marine life.",
    contentMe: `Crna Gora je odličnog za ronjenje sa kristalno čistom vodom i bogatim morskim životom.

## Lokacije za Ronjenje

- **Kotor** - najbolja lokacija sa bogatim morskim životom
- **Budva** - plaže i rife
- **Perast** - ostrva i pećine
- **Herceg Novi** - početna lokacija

## Tipovi Ronjenja

- **Rekreativno ronjenje** - do 40 metara
- **Tehnijsko ronjenje** - dublje lokacije
- **Noćno ronjenje** - specijalno iskustvo
- **Fotografiranje** - za fotografe

## Kursi

- **Open Water** - početni kurs
- **Advanced** - napredni kurs
- **Rescue** - spasavajući kurs

## Gdje Rezervisati

Preko rentakar.me - sve agencije su sertifikovane i iskusne.`,
    contentEn: `Montenegro is excellent for diving with crystal clear water and rich marine life.

## Diving Locations

- **Kotor** - best location with rich marine life
- **Budva** - beaches and reefs
- **Perast** - islands and caves
- **Herceg Novi** - starting location

## Types of Diving

- **Recreational diving** - up to 40 meters
- **Technical diving** - deeper locations
- **Night diving** - special experience
- **Photography** - for photographers

## Courses

- **Open Water** - beginner course
- **Advanced** - advanced course
- **Rescue** - rescue course

## Where to Book

Through rentakar.me - all agencies are certified and experienced.`,
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=630&fit=crop",
    category: "Aktivnosti",
    keywords: ["scuba diving montenegro", "diving kotor", "underwater", "diving courses"],
    date: "2026-04-13",
    readTime: 5,
  },
  {
    slug: "road-trip-montenegro-best-routes",
    titleMe: "Road trip kroz Crnu Goru - rute za 3, 5 i 7 dana",
    titleEn: "Montenegro Road Trip - Routes for 3, 5, and 7 Days",
    metaTitle: "Road trip Crna Gora 2026 | Najbolje rute i savjeti | rentakar.me",
    metaDesc: "Praktične rute za road trip kroz Crnu Goru - od primorja do Durmitora. Vremenski okviri, kilometraža, gdje stati, šta vidjeti.",
    excerptMe: "Crna Gora je premala za jedan dan, prevelika za nedjelju dana. Tri konkretne rute koje pokrivaju primorje, planine ili oboje.",
    excerptEn: "Montenegro is too small for one day, too big for a week. Three concrete routes covering the coast, mountains, or both.",
    contentMe: `Crna Gora je velika 13.812 km² - manja od Sjeverne Makedonije, veća od Cipra. Ono što čini zemlju idealnom za road trip je raznolikost u maloj površini: za pet sati vožnje od Ulcinja možete biti na vrhu Durmitora, prolazeći kroz primorje, kontinentalnu zonu, Skadarsko jezero i kanjon Tare.

Niže su tri konkretne rute koje funkcionišu u praksi - bez naivnog "vidićete sve" pristupa koji rezultira tim što ništa ne vidite kako treba.

## Ruta 1: Primorska (3-4 dana, oko 200 km)

Klasični izbor za prvi posjet. Pokriva sve glavne atrakcije Bokokotorskog zaliva i Budvanske rivijere.

**Dan 1: Herceg Novi → Kotor (40 km, 1h vožnje, ali...)**
Krenite od Herceg Novog, prošetajte starim gradom, kupanje na Igalu. Vožnja prema Kotoru je 40 km ali traje 60-90 minuta - put oko Boke je serpentina sa puno fotogeničnih zaustavljanja (Perast je na pola puta i obavezan je). Smještaj u Kotoru ili okolini.

**Dan 2: Kotor i okolina**
Stari grad ujutru, zidine sv. Ivana popodne (ili obrnuto). Veče šetnja po rivi. Alternativno - umjesto zidina, izlet brodom po Boki ili autom do Lovćena (1.5h vožnje, mauzolej Njegoša na vrhu).

**Dan 3: Kotor → Budva (25 km, 30 min)**
Putem prema Budvi zaustavite se u Tivtu (Porto Montenegro je impresivan, ako i ne kupujete jahtu) i u Lustica Bay. Smještaj u Budvi ili Bečićima. Veče izlazak ili ručak u Pržnu.

**Dan 4: Budva → Sveti Stefan → Ulcinj (90 km, 2h)**
Šetnja Budvom ujutru, zatim postupna vožnja prema jugu. Sveti Stefan, Petrovac, Bar (vrijedi se popesti do Starog Bara, on je drugačiji od centra), i na kraju Ulcinj. Velika plaža za zalazak sunca.

**Tip:** ne pokušavajte sve ovo za 2 dana - vožnja od Herceg Novog do Ulcinja u jednom danu nije problem, ali nećete stići ništa pošteno da vidite.

## Ruta 2: Planinska (3-4 dana, oko 400 km)

Manje turistički očigledna, ali ako imate vremena - ovo su prizore koje neće biti na svakoj Instagram stranici Crne Gore.

**Dan 1: Podgorica → Skadarsko jezero → Cetinje → Lovćen (120 km, 3h)**
Jutro u Podgorici (ne mnogo, glavni grad nije turistička perla), pa prema Virpazaru gdje je ulaz u Skadarsko jezero. Vožnja čamcem (1-2h, oko 15 EUR), ručak na obali. Popodne preko Cetinja (stara prijestonica, muzeji) do Lovćena. Mauzolej Njegoša je na 1.660 m sa pogledom na cijelu primorje. Smještaj u Cetinju ili spustu u Budvi/Kotoru.

**Dan 2: → Kolašin (160 km, 3h)**
Vožnja prema sjeveru kroz Podgoricu, autoputom prema Kolašinu. Ovo je relativno nova autocesta (Bar-Boljari) - ubrzava put. Kolašin je ski centar i odlična baza za Biogradsku goru (najstarije šume u Evropi).

**Dan 3: Kolašin → Žabljak (90 km, 2.5h)**
Put kroz manastir Morača (zaustavite se, vrijedi 30 minuta), pa kroz Mojkovac i Šavnik do Žabljaka. Cijeli dan u Durmitoru - Crno jezero, neki kraći planinarski put.

**Dan 4: Žabljak → Plužine → most na Đurđevića Tari → povratak (200 km, cijeli dan)**
Vožnja kroz kanjon Pive (jedna od najljepših cesta u Evropi - serpentina iznad jezera), pa preko Šćepan Polja. Most na Đurđevića Tari za fotografije, eventualno zip-line. Povratak u Podgoricu kroz Pljevlja ili Bijelo Polje.

## Ruta 3: Kompletna (7 dana, oko 600 km)

Ako imate cijelu nedjelju, ovo je optimalan plan koji daje "ozbiljan" pregled zemlje:

- **Dan 1-2:** Herceg Novi, Kotor, Perast (Boka Kotorska)
- **Dan 3:** Tivat, Budva, Sveti Stefan
- **Dan 4:** Petrovac, Bar, Ulcinj, Velika plaža
- **Dan 5:** Skadarsko jezero, Cetinje, Lovćen → smještaj negdje na sjeveru (Kolašin)
- **Dan 6:** Biogradska gora ili direktno Durmitor (Crno jezero)
- **Dan 7:** Kanjon Tare, povratak preko Pljevalja ili Mojkovca

## Praktični savjeti za vožnju

**Putna mreža** je generalno solidna - autoputevi su na primorju i između Bara i Boljara (Podgorica-Kolašin-sjever). Sve ostalo su dvotračni putevi, često serpentine. Prosjek vožnje je 50-60 km/h, ne 80-90 kao u zapadnoj Evropi.

**Tunel Sozina** (4.2 km) povezuje Podgoricu sa primorjem - putarina 2.5 EUR. Vrijedi vremena.

**Gorivo** je oko 1.40-1.55 EUR/litar (2026, mijenja se). Pumpe su raspoređene logično, ali na sjeveru zemlje znajte da su rastojanja veća - napunite kad imate priliku.

**Granični prelazi** - ako idete iz CG u Albaniju (Ulcinj-Skadar) ili u BiH (kanjon Pive), ID dokument je dovoljan za EU građane, čekanje obično 15-30 minuta van sezone, do par sati u špici.

**Zaustavljanja po putu** su dio iskustva - ako ne stajete, propustili ste poentu road tripa. Skoro svaki manji grad ima neku konobu sa lokalnom hranom za 8-15 EUR po jelu.

**Brzina i policija** - kontrola je redovna, posebno na primorskim cestama ljeti i ulazima u gradove. Brzina u naselju 50, otvoreni put 80, autoput 130. Kazne nisu male.

## Iznajmljivanje vozila

Za road trip preporučljiv je SUV ili crossover - serpentina ima, neki "off-road" izleti (kanjoni, planinski putevi) komotnije se rade sa višim vozilom. Ekonomični auto je dovoljan ako idete samo primorskom rutom.

Cijena u glavnoj sezoni: ekonomija 30-45 EUR/dan, srednja klasa 40-60 EUR, SUV 60-100 EUR. Dostava na aerodrome Podgorica i Tivat je obično besplatna. [Pogledajte rent a car ponudu](/rent-a-car-montenegro) za konkretne ponude.`,
    contentEn: `Montenegro is 13,812 km² - smaller than North Macedonia, larger than Cyprus. What makes the country ideal for a road trip is the diversity in a small area: in five hours of driving from Ulcinj you can be on top of Durmitor, passing through coast, continental zone, Skadar Lake and Tara canyon.

Below are three concrete routes that work in practice - without the naive "you'll see everything" approach that ends with seeing nothing properly.

## Route 1: Coastal (3-4 days, about 200 km)

Classic choice for first visit. Covers all main attractions of the Bay of Kotor and the Budva Riviera.

**Day 1: Herceg Novi → Kotor (40 km, 1h drive, but...)**
Start from Herceg Novi, walk through the old town, swimming at Igalo. The drive to Kotor is 40 km but takes 60-90 minutes - the road around the bay is serpentine with many photogenic stops (Perast is halfway and mandatory). Stay in Kotor or surroundings.

**Day 2: Kotor and surroundings**
Old Town in the morning, walls of St. John in the afternoon (or vice versa). Evening walk along the riva. Alternatively - instead of the walls, a boat tour of the bay or a drive to Lovćen (1.5h drive, Njegoš's mausoleum at the top).

**Day 3: Kotor → Budva (25 km, 30 min)**
On the way to Budva stop in Tivat (Porto Montenegro is impressive, even if you're not buying a yacht) and at Lustica Bay. Stay in Budva or Bečići. Evening out or dinner in Pržno.

**Day 4: Budva → Sveti Stefan → Ulcinj (90 km, 2h)**
Walk through Budva in the morning, then gradual drive south. Sveti Stefan, Petrovac, Bar (worth climbing up to Old Bar, it's different from the center), and finally Ulcinj. Velika Plaža for sunset.

**Tip:** don't try all this in 2 days - the drive from Herceg Novi to Ulcinj in one day isn't a problem, but you won't see anything properly.

## Route 2: Mountain (3-4 days, about 400 km)

Less touristy obvious, but if you have time - these are the views that won't be on every Montenegro Instagram page.

**Day 1: Podgorica → Skadar Lake → Cetinje → Lovćen (120 km, 3h)**
Morning in Podgorica (not much, the capital isn't a tourist gem), then to Virpazar where the entry to Skadar Lake is. Boat ride (1-2h, about 15 EUR), lunch on the shore. Afternoon via Cetinje (old capital, museums) to Lovćen. Njegoš's mausoleum is at 1,660 m with a view over the entire coast. Stay in Cetinje or descend to Budva/Kotor.

**Day 2: → Kolašin (160 km, 3h)**
Drive north through Podgorica, motorway to Kolašin. This is a relatively new highway (Bar-Boljari) - speeds up the trip. Kolašin is a ski center and excellent base for Biogradska Gora (oldest forests in Europe).

**Day 3: Kolašin → Žabljak (90 km, 2.5h)**
Road through the Morača Monastery (stop, worth 30 minutes), then through Mojkovac and Šavnik to Žabljak. Full day in Durmitor - Black Lake, some shorter hike.

**Day 4: Žabljak → Plužine → Đurđevića Tara bridge → return (200 km, full day)**
Drive through the Piva canyon (one of the most beautiful roads in Europe - serpentine above the lake), then via Šćepan Polje. Đurđevića Tara bridge for photos, optionally zip-line. Return to Podgorica via Pljevlja or Bijelo Polje.

## Route 3: Complete (7 days, about 600 km)

If you have a whole week, this is an optimal plan that gives a "serious" overview of the country:

- **Day 1-2:** Herceg Novi, Kotor, Perast (Bay of Kotor)
- **Day 3:** Tivat, Budva, Sveti Stefan
- **Day 4:** Petrovac, Bar, Ulcinj, Velika Plaža
- **Day 5:** Skadar Lake, Cetinje, Lovćen → stay somewhere up north (Kolašin)
- **Day 6:** Biogradska Gora or directly Durmitor (Black Lake)
- **Day 7:** Tara canyon, return via Pljevlja or Mojkovac

## Practical driving tips

**Road network** is generally solid - motorways are on the coast and between Bar and Boljari (Podgorica-Kolašin-north). Everything else is two-lane roads, often serpentine. Average drive speed is 50-60 km/h, not 80-90 like in Western Europe.

**Sozina Tunnel** (4.2 km) connects Podgorica with the coast - toll 2.5 EUR. Worth the time.

**Fuel** is around 1.40-1.55 EUR/liter (2026, changes). Stations are logically distributed, but in the north of the country know that distances are bigger - fill up when you have a chance.

**Border crossings** - if you go from Montenegro to Albania (Ulcinj-Shkodra) or to BiH (Piva canyon), ID is enough for EU citizens, waiting time usually 15-30 min off-season, up to a few hours in peak.

**Stops along the way** are part of the experience - if you don't stop, you've missed the point of a road trip. Almost every smaller town has some konoba with local food for 8-15 EUR per dish.

**Speed and police** - controls are regular, especially on coastal roads in summer and at city entrances. Speed in town 50, open road 80, motorway 130. Fines aren't small.

## Vehicle rental

For a road trip, an SUV or crossover is recommended - there are serpentines, some "off-road" excursions (canyons, mountain roads) are more comfortable with a higher vehicle. Economy car is enough if you're only going on the coastal route.

Price in main season: economy 30-45 EUR/day, mid-class 40-60 EUR, SUV 60-100 EUR. Delivery to Podgorica and Tivat airports is usually free. [Check rent a car offers](/rent-a-car-montenegro) for concrete deals.`,
    image: "https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1200&h=630&fit=crop",
    category: "Putovanja",
    keywords: ["road trip montenegro", "best routes", "driving tips", "montenegro travel"],
    date: "2026-04-12",
    readTime: 6,
  },
  {
    slug: "camping-glamping-montenegro",
    titleMe: "Kampovanje i Glamping u Crnoj Gori - Vodič",
    titleEn: "Camping and Glamping in Montenegro - Guide",
    metaTitle: "Kampovanje Crna Gora | Kampovi, Glamping, Savjeti | rentakar.me",
    metaDesc: "Otkrijte najbolje kampove i glamping lokacije u Crnoj Gori. Savršeno za avanturu i prirodu.",
    excerptMe: "Kampovanje u Crnoj Gori je odličan način da doživite prirodu. Otkrijte najbolje kampove.",
    excerptEn: "Camping in Montenegro is a great way to experience nature. Discover the best campsites.",
    contentMe: `Crna Gora ima brojne kampove i glamping lokacije za sve vrste putnika.

## Kampovi

- **Kamp Tara** - na rijeci Tari
- **Kamp Durmitor** - u Žabljaku
- **Kamp Morača** - blizu Kolašina
- **Kamp Plaža** - na primorju

## Glamping

- **Glamping Durmitor** - luksuzne šatore
- **Glamping Tara** - brvnare sa pogledom
- **Glamping Plaža** - na primorju

## Što Trebate

- Šator ili kamper
- Spavna vreća
- Prikupljač vode
- Svjetlo

## Savjeti

- Dolazite rano u sezoni
- Rezervirajte unaprijed
- Proverite vremenske prognoze
- Iznajmite auto za fleksibilnost`,
    contentEn: `Montenegro has numerous campsites and glamping locations for all types of travelers.

## Campsites

- **Tara Camp** - on the Tara River
- **Durmitor Camp** - in Žabljak
- **Morača Camp** - near Kolašin
- **Beach Camp** - on the coast

## Glamping

- **Durmitor Glamping** - luxury tents
- **Tara Glamping** - cabins with views
- **Beach Glamping** - on the coast

## What You Need

- Tent or camper
- Sleeping bag
- Water collector
- Light

## Tips

- Come early in the season
- Book in advance
- Check weather forecasts
- Rent a car for flexibility`,
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200&h=630&fit=crop",
    category: "Smještaj",
    keywords: ["camping montenegro", "glamping", "campsites", "outdoor adventure"],
    date: "2026-04-11",
    readTime: 5,
  },
  {
    slug: "sveti-stefan-montenegro-guide",
    titleMe: "Sveti Stefan - vodič za otok-hotel i okolinu",
    titleEn: "Sveti Stefan - A Guide to the Island-Hotel and Surroundings",
    metaTitle: "Sveti Stefan | Plaža, hotel, izleti | rentakar.me",
    metaDesc: "Sveti Stefan vodič: kako se posjećuje, plaža Miločer, restorani, šta funkcioniše a šta ne. Praktične informacije za 2026.",
    excerptMe: "Sveti Stefan je najfotografisaniji prizor Crne Gore - ali šta je istina iza fotografija? Šta turisti zaista vide kad dođu i šta vrijedi.",
    excerptEn: "Sveti Stefan is the most photographed view in Montenegro - but what's the truth behind the photos? What tourists actually see when they arrive and what's worth it.",
    contentMe: `Sveti Stefan je vjerovatno najpoznatija slika Crne Gore - mali otok povezan sa kopnom uskim prevlakom, sa zbijenim crvenim krovovima srednjevjekovnog ribarskog naselja. Većina ljudi ga zna sa razglednica i Instagram fotografija. Ono što ne svi znaju: ostrvo je u privatnom vlasništvu kompanije Aman Resorts (luxury hotel grupa) i nije pristupačno za posjetioce - osim ako tu odsjedate, i to košta od 1.500 EUR po noći naviše.

To znači da kad dolazite u Sveti Stefan, ne dolazite na ostrvo - dolazite oko ostrva. I to ipak vrijedi.

## Šta vidite kao posjetilac

**Sa kopna:** najklasičnija fotografija Sv. Stefana je sa vidikovca na cesti Budva-Petrovac, otprilike 500 m prije skretanja prema selu. Mali parking, dva-tri kafića, fotografija je tu. Ide najbolje u zalazak sunca.

**Sa plaže Sveti Stefan:** ovo je javna plaža odmah ispred ostrva. Rožičasti šljunak, dobri prirodni okvir za fotografije ostrva. Plaža je podijeljena - jedan dio je javan (besplatan), drugi pripada hotelu. Ležaljke na hotelskom dijelu su skupe (oko 80-100 EUR za par sa suncobranom, samo za hotelske goste ili eksterne uz uplatu).

**Plaža Miločer:** ovo je možda ljepša plaža od same Sv. Stefana - mali zaliv sa pijeskom i šljunkom, pored Vile Miločer (bivše rezidencija jugoslovenske kraljevske porodice, sad dio Aman kompleksa). Pristup javan, atmosfera ekskluzivna.

**Park Miločer:** šuma između Sveti Stefana i Pržna, sa borovima i čempresima. Šetnja kroz park je besplatna i prelijepa, posebno ujutro. Nekoliko viewpointa odakle imate pogled na ostrvo.

## Praktične napomene

**Parking** je problematičan. Glavni javni parking je u selu Sveti Stefan (gore na brdu, 10-15 minuta hoda do plaže). Manji parkinzi pored hotela su rezervisani. Ljeti je sve puno do 11h.

**Pristup ostrvu** - već smo rekli, samo gosti hotela. Drugi mit je da se može "ušetati" na prevlaci - vrata na ulazu su zatvorena, čuvar provjerava goste. Nemoj se ni truditi.

**Voda i kupanje** - voda je čista, plažae se kupa, ali pripazite na temperaturu. Sveti Stefan je u istoj zoni kao Budva, voda je topla od juna do oktobra.

**Cijene u zoni** - Sveti Stefan privlači "skupe" cijene zbog reputacije. Restoran u centru sela je 25-40 EUR po jelu. U Pržnu (1 km dalje) cijene su značajno niže.

## Restorani u okolini

- **Olive (Miločer)** - ekskluzivnije, pogled na vilu Miločer i borove, oko 30-50 EUR po osobi
- **Konoba Langust** - klasik za riblja jela, prati Pržno
- **Restoran Adrović** (Sveti Stefan) - solidan izbor, srednje cijene
- **Pržno bay** - više opcija u samom selu Pržno, povoljnije od Sv. Stefana

## Sveti Stefan vs Pržno - gdje smjestiti?

Mnogi posjetioci koji dolaze "u Sveti Stefan" zapravo se smještaju u Pržnu - 1 km od ostrva, manje turistički, znatno povoljnije. Pržno ima dvije male javne plaže, par konoba, i odlične šetnje do Sv. Stefana ili Budve (oba pravca u dobre 30-40 minuta hoda).

Ako budžet nije problem - Sveti Stefan ima par butik hotela na obali (Hotel Adrović, Avala Resort) sa pogledom direktno na ostrvo. Cijene 100-250 EUR za dvokrevetnu sobu u sezoni.

## Kako stići

Sveti Stefan je 9 km istočno od Budve, oko 12-15 minuta vožnje. Sa aerodroma Tivat (TIV) je 25 km, oko 35 minuta. Nema direktne autobuske linije iz drugih dijelova zemlje - autobus do Budve, pa lokalni autobus ili taxi.

Iznajmljivanje vozila je preporuka jer ćete htjeti da istražite okolinu - Pržno, Petrovac, Budva, Reževići, sve je to u radijusu od 15 minuta. [Pogledajte rent a car opcije za Sveti Stefan](/rent-a-car/sveti-stefan).

## Da li vrijedi posjeta?

Iskreno - da, ali ne kao destinacija za 3-4 dana. Sveti Stefan se može "uzeti" za pola dana iz Budve ili Petrovca: vidikovac, plaža, šetnja parkom, ručak u Pržnu. Za onima koji žele "Aman" iskustvo, to je drugi razgovor (i drugi budžet).`,
    contentEn: `Sveti Stefan is probably the most famous image of Montenegro - a small island connected to the mainland by a narrow isthmus, with clustered red roofs of a medieval fishing settlement. Most people know it from postcards and Instagram photos. What not everyone knows: the island is privately owned by Aman Resorts (luxury hotel group) and isn't accessible to visitors - unless you're staying there, and that starts from 1,500 EUR per night.

This means when you come to Sveti Stefan, you're not coming to the island - you're coming around the island. And it's still worth it.

## What you see as a visitor

**From the mainland:** the most classic Sveti Stefan photo is from the viewpoint on the Budva-Petrovac road, about 500 m before the turnoff to the village. Small parking, two-three cafes, the photo is there. Best at sunset.

**From Sveti Stefan beach:** this is a public beach right in front of the island. Pinkish pebbles, good natural frame for island photos. The beach is divided - one part is public (free), the other belongs to the hotel. Sun loungers on the hotel part are expensive (about 80-100 EUR for a pair with umbrella, only for hotel guests or externals with payment).

**Miločer Beach:** this is possibly a more beautiful beach than Sveti Stefan itself - a small bay with sand and pebbles, next to Villa Miločer (former residence of the Yugoslav royal family, now part of the Aman complex). Public access, exclusive atmosphere.

**Miločer Park:** forest between Sveti Stefan and Pržno, with pine and cypress trees. Walking through the park is free and beautiful, especially in the morning. Several viewpoints from where you have views of the island.

## Practical notes

**Parking** is problematic. Main public parking is in Sveti Stefan village (up on the hill, 10-15 minutes walk to the beach). Smaller parking near the hotel is reserved. In summer everything is full by 11am.

**Access to the island** - we already said, only hotel guests. Another myth is that you can "walk in" on the isthmus - the gate at the entrance is closed, a guard checks guests. Don't even try.

**Water and swimming** - water is clean, the beach is swimmable, but watch the temperature. Sveti Stefan is in the same zone as Budva, water is warm from June to October.

**Prices in the zone** - Sveti Stefan attracts "expensive" prices due to reputation. A restaurant in the village center is 25-40 EUR per dish. In Pržno (1 km away) prices are significantly lower.

## Restaurants in the area

- **Olive (Miločer)** - more exclusive, view of Villa Miločer and pines, about 30-50 EUR per person
- **Konoba Langust** - classic for fish dishes, near Pržno
- **Restaurant Adrović** (Sveti Stefan) - solid choice, mid-range prices
- **Pržno bay** - more options in Pržno village itself, cheaper than Sv. Stefan

## Sveti Stefan vs Pržno - where to stay?

Many visitors who come "to Sveti Stefan" actually stay in Pržno - 1 km from the island, less touristy, significantly cheaper. Pržno has two small public beaches, a few konobas, and excellent walks to Sv. Stefan or Budva (both directions in a good 30-40 minutes walk).

If budget isn't a concern - Sveti Stefan has a few boutique hotels on the coast (Hotel Adrović, Avala Resort) with direct views of the island. Prices 100-250 EUR for a double room in season.

## How to get there

Sveti Stefan is 9 km east of Budva, about 12-15 minutes drive. From Tivat airport (TIV) it's 25 km, about 35 minutes. There's no direct bus line from other parts of the country - bus to Budva, then a local bus or taxi.

Renting a vehicle is recommended because you'll want to explore the surroundings - Pržno, Petrovac, Budva, Reževići, all within 15 minutes radius. [Check rent a car options for Sveti Stefan](/rent-a-car/sveti-stefan).

## Is it worth visiting?

Honestly - yes, but not as a destination for 3-4 days. Sveti Stefan can be "done" in half a day from Budva or Petrovac: viewpoint, beach, walk through the park, lunch in Pržno. For those who want the "Aman" experience, that's a different conversation (and different budget).`,
    image: "/images/locations/sveti-stefan.jpg",
    category: "Destinacije",
    keywords: ["sveti stefan", "montenegro island", "most beautiful", "photography"],
    date: "2026-04-10",
    readTime: 4,
  },
  {
    slug: "best-restaurants-montenegro",
    titleMe: "Najbolji Restorani u Crnoj Gori - Hrana i Iskustva",
    titleEn: "Best Restaurants in Montenegro - Food and Experiences",
    metaTitle: "Restorani Crna Gora | Hrana, Recenzije, Lokacije | rentakar.me",
    metaDesc: "Otkrijte najbolje restorane u Crnoj Gori. Tradicionalna hrana, morske delicije i moderni restorani.",
    excerptMe: "Crna Gora ima odličnu kuhinju. Otkrijte najbolje restorane za autentično iskustvo.",
    excerptEn: "Montenegro has excellent cuisine. Discover the best restaurants for an authentic experience.",
    contentMe: `Crna Gora je poznata po odličnoj hrani, posebno morskim delicijama.

## Restorani Kotor

- **Konoba Scala Santa** - tradicionalna hrana
- **Ćatovića Mlini** - restorani sa pogledom
- **Bokeski Dvori** - autentična iskustva

## Restorani Budva

- **Jadran** - riblji restorani
- **Adriatic** - lokalna kuhinja
- **Karaoke barovi** - zabava i pjevanje

## Restorani Podgorica

- **Restoran Stara Varoš** - tradicionalna hrana
- **Kafići na Ribnjaku** - opuštena atmosfera

## Specijaliteti

- **Pršut** - sušeno meso
- **Sir** - lokalni sir
- **Riblja Corba** - riblja čorba
- **Njeguški Pršut** - najbolji pršut

## Savjeti

- Rezervirajte unaprijed
- Pokušajte lokalnu hranu
- Vino je odličnog
- Cijene su razumne`,
    contentEn: `Montenegro is known for excellent food, especially seafood.

## Kotor Restaurants

- **Konoba Scala Santa** - traditional food
- **Ćatovića Mlini** - restaurants with views
- **Bokeski Dvori** - authentic experiences

## Budva Restaurants

- **Jadran** - fish restaurants
- **Adriatic** - local cuisine
- **Karaoke bars** - fun and singing

## Podgorica Restaurants

- **Stara Varoš Restaurant** - traditional food
- **Ribnjak Cafes** - relaxed atmosphere

## Specialties

- **Pršut** - dried meat
- **Cheese** - local cheese
- **Fish Soup** - fish soup
- **Njeguški Pršut** - best pršut

## Tips

- Book in advance
- Try local food
- Wine is excellent
- Prices are reasonable`,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&h=630&fit=crop",
    category: "Hrana",
    keywords: ["restaurants montenegro", "montenegrin food", "seafood", "local cuisine"],
    date: "2026-04-09",
    readTime: 5,
  },
  {
    slug: "montenegro-weather-guide",
    titleMe: "Vremenske Prilike u Crnoj Gori - Vodič po Mjesecima",
    titleEn: "Montenegro Weather Guide - Monthly Guide",
    metaTitle: "Vrijeme Crna Gora | Temperatura, Kiša, Sezona | rentakar.me",
    metaDesc: "Otkrijte vremenske prilike u Crnoj Gori po mjesecima. Najbolje vrijeme za posjet i što pakovati.",
    excerptMe: "Vrijeme u Crnoj Gori varira po mjesecima. Otkrijte najbolje vrijeme za posjet.",
    excerptEn: "Weather in Montenegro varies by month. Discover the best time to visit.",
    contentMe: `Vrijeme u Crnoj Gori varira od mjeseca do mjeseca.

## Ljeto (Jun-Avgust)

- Temperatura: 25-30°C
- Kiša: Rijetko
- Voda: 22-24°C
- Najbolje za: Plaže

## Jesen (Septembar-Novembar)

- Temperatura: 15-25°C
- Kiša: Umjerena
- Voda: 18-22°C
- Najbolje za: Planinarenje

## Zima (Decembar-Februar)

- Temperatura: 5-15°C
- Kiša: Česta
- Voda: 12-15°C
- Najbolje za: Planine

## Proljeće (Mart-Maj)

- Temperatura: 10-20°C
- Kiša: Umjerena
- Voda: 15-18°C
- Najbolje za: Sve

## Što Pakovati

- Ljeto: Kupaće odijelo, sunčane naočale, krem
- Jesen: Jakna, cipele
- Zima: Topla odjeća, kišobran
- Proljeće: Slojevi`,
    contentEn: `Weather in Montenegro varies from month to month.

## Summer (June-August)

- Temperature: 25-30°C
- Rain: Rare
- Water: 22-24°C
- Best for: Beaches

## Fall (September-November)

- Temperature: 15-25°C
- Rain: Moderate
- Water: 18-22°C
- Best for: Hiking

## Winter (December-February)

- Temperature: 5-15°C
- Rain: Frequent
- Water: 12-15°C
- Best for: Mountains

## Spring (March-May)

- Temperature: 10-20°C
- Rain: Moderate
- Water: 15-18°C
- Best for: Everything

## What to Pack

- Summer: Swimsuit, sunglasses, cream
- Fall: Jacket, shoes
- Winter: Warm clothes, umbrella
- Spring: Layers`,
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=630&fit=crop",
    category: "Praktične Info",
    keywords: ["montenegro weather", "temperature", "best time to visit", "what to pack"],
    date: "2026-04-08",
    readTime: 4,
  },
  {
    slug: "parking-guide-montenegro",
    titleMe: "Vodič za Parking u Crnoj Gori - Gdje i Kako",
    titleEn: "Parking Guide in Montenegro - Where and How",
    metaTitle: "Parking Crna Gora | Lokacije, Cijene, Savjeti | rentakar.me",
    metaDesc: "Otkrijte gdje parkirati u Crnoj Gori. Besplatni parking, plaćeni parking i savjeti za sigurnost.",
    excerptMe: "Parking u Crnoj Gori može biti izazov, posebno ljeti. Otkrijte gdje parkirati.",
    excerptEn: "Parking in Montenegro can be challenging, especially in summer. Discover where to park.",
    contentMe: `Parking u Crnoj Gori varira po gradu.

## Budva

- **Plaćeni parking** - u centru, 1-2€/sat
- **Besplatni parking** - izvan centra
- **Parking Porto** - pored Porto Montenegra

## Kotor

- **Plaćeni parking** - u centru, 1€/sat
- **Besplatni parking** - izvan centra
- **Parking Tvrđava** - blizu tvrđave

## Podgorica

- **Plaćeni parking** - u centru, 0.5-1€/sat
- **Besplatni parking** - izvan centra

## Savjeti

- Parkujte rano ujutro
- Izbjegavajte centar ljeti
- Čuvajte auto od sunca
- Pazite na kradljive`,
    contentEn: `Parking in Montenegro varies by city.

## Budva

- **Paid parking** - in the center, 1-2€/hour
- **Free parking** - outside the center
- **Porto Parking** - next to Porto Montenegro

## Kotor

- **Paid parking** - in the center, 1€/hour
- **Free parking** - outside the center
- **Fortress Parking** - near the fortress

## Podgorica

- **Paid parking** - in the center, 0.5-1€/hour
- **Free parking** - outside the center

## Tips

- Park early in the morning
- Avoid the center in summer
- Protect your car from the sun
- Watch out for thieves`,
    image: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=1200&h=630&fit=crop",
    category: "Praktične Info",
    keywords: ["parking montenegro", "where to park", "parking prices", "driving tips"],
    date: "2026-04-07",
    readTime: 3,
  },
  {
    slug: "things-to-do-herceg-novi",
    titleMe: "Šta Raditi u Herceg Novom - Vodič za Grad Sunca",
    titleEn: "Things to Do in Herceg Novi - Guide to the City of Sun",
    metaTitle: "Šta Raditi Herceg Novi | Plaže, Tvrđava, Aktivnosti | rentakar.me",
    metaDesc: "Herceg Novi je poznat po suncu i plaži. Otkrijte tvrđavu, plaže, restorane i aktivnosti.",
    excerptMe: "Herceg Novi je grad sa bogatom istorijom i lijepe plaže. Otkrijte sve što trebate znati.",
    excerptEn: "Herceg Novi is a city with rich history and beautiful beaches. Discover everything you need to know.",
    contentMe: `Herceg Novi je poznat po suncu, plaži i bogatoj istoriji.

## Tvrđava

- **Tvrđava Španjola** - glavna tvrđava
- **Tvrđava Kaštio** - druga tvrđava
- **Muzej** - u tvrđavi

## Plaže

- **Plaža Herceg Novi** - gradska plaža
- **Plaža Žanjice** - blizu
- **Plaža Topla** - topla voda

## Aktivnosti

- **Šetnja starim gradom** - srednjovjekovne ulice
- **Jedrenje** - iznajmite jahtu
- **Diving** - ronjenje
- **Restorani** - na plaži

## Kako Doći

Herceg Novi je na 1 sat vožnje od Podgorice. Iznajmite auto i posjetite ovaj lijep grad.`,
    contentEn: `Herceg Novi is known for sun, beaches and rich history.

## Fortresses

- **Spanish Fortress** - main fortress
- **Kaštio Fortress** - second fortress
- **Museum** - in the fortress

## Beaches

- **Herceg Novi Beach** - city beach
- **Žanjice Beach** - nearby
- **Topla Beach** - warm water

## Activities

- **Walk the old town** - medieval streets
- **Sailing** - rent a yacht
- **Diving** - diving
- **Restaurants** - on the beach

## How to Get There

Herceg Novi is 1 hour drive from Podgorica. Rent a car and visit this beautiful city.`,
    image: "/images/locations/herceg-novi.jpg",
    category: "Destinacije",
    keywords: ["herceg novi", "things to do", "fortresses", "beaches"],
    date: "2026-04-06",
    readTime: 4,
  },
  {
    slug: "things-to-do-perast-montenegro",
    titleMe: "Perast - vodič za najmanje izmjenjeni grad u Boki",
    titleEn: "Perast - A Guide to the Bay's Most Preserved Town",
    metaTitle: "Šta raditi u Perastu | Gospa od Škrpjela, vidikovac, restorani | rentakar.me",
    metaDesc: "Perast vodič: dva ostrva u zalivu, šetnja kamenom rivom, najpoznatiji restorani. Šta razlikuje Perast od Kotora i zašto vrijedi.",
    excerptMe: "Perast je grad od 350 stanovnika sa 16 baroknih palata - više palata po glavi nego bilo koji evropski grad. Ostrva, riva, mir.",
    excerptEn: "Perast is a town of 350 residents with 16 baroque palaces - more palaces per capita than any European city. Islands, riva, peace.",
    contentMe: `Perast je mjesto koje uvijek ostane na strani turističkih pregleda Crne Gore - Kotor uzima svu pažnju. To je možda i dobra stvar. Sa otprilike 350 stanovnika i 16 baroknih palata, Perast je najmanji "grad" sa najviše istorijskog značaja u regionu. U 17. i 18. vijeku ovo je bio jedan od najvažnijih pomorskih centara na Mediteranu - kapetani iz Perasta su učili u školi koja je obrazovala i Petra Velikog (ruski car), a peraska barokna palata je još uvijek standard kojim se mjeri arhitektura tog perioda.

Danas, Perast je gradić koji se može obići za 30 minuta hodanja. Glavna atrakcija nije ono što je u gradu - već dva ostrva ispred njega.

## Dva ostrva u zalivu

**Gospa od Škrpjela** je vještački napravljeno ostrvo - jedno od rijetkih takvih u svijetu. Po legendi, peraski mornari su se zavjetovali da će napraviti crkvu kad su jednog dana 1452. godine pronašli ikonu Bogorodice na hridi u moru. Vremenom su tonuli stare brodove i bacali kamenje na hrid - i nakon par stoljeća dobili ostrvo. Tradicija "Fašinada" (bacanje kamenja oko ostrva svake godine 22. jula) i dan-danas se održava.

Crkva je iznutra prelijepa - 68 baroknih slika Tripa Kokolje pokrivaju zidove i strop, a u muzeju je čuven izvezeni vez Jacinte Kunić-Mijović - tkala ga je 25 godina dok je čekala muža sa mora, koristeći i svoju kosu.

**Sveti Đorđe** je drugo ostrvo, nije pristupačno turistima - na njemu je benediktinski manastir i privatni groblje peraskih porodica. Sa kopna je mnogo fotogeničnije nego Gospa od Škrpjela jer ima čempresove i izgled "manastira u moru" iz filmova.

**Kako doći do ostrva:** mali brodići redovno prevoze sa rive Perasta do Gospe od Škrpjela. Cijena je oko 5 EUR po osobi (povratno), vožnja traje 5 minuta. Ulaznica za crkvu je 1.5 EUR. Brodići idu cijeli dan, najveća gužva je 11h-15h.

## Šetnja gradom

Perast nije Kotor - nema labirinta uskih ulica, već jednu glavnu rivu sa palatama u nizu. Šetnja od jednog kraja do drugog je 1.5 km i traje pola sata. Ovo su mjesta na koja vrijedi da obratite pažnju:

**Crkva sv. Nikole** - centralna crkva sa neobičnim toranom (gradnja zvonika je započeta 1691. ali nikad nije završena - prvih 50 metara stoji već 300 godina). Ulaz na toranj je 2 EUR, sa vrha imate najbolji pogled na ostrva.

**Palata Buća** - u centru grada, jedna od najljepših baroknih palata na Mediteranu. Sad je hotel/restoran, ali se može uglobiti u predvorje.

**Muzej grada Perasta** - mali ali interesantan, eksponati o pomorskoj prošlosti, ulaznica oko 2 EUR.

## Plaže

Perast nije destinacija za plažu. Postoji mala uvala u gradu (kameniti pristup vodi) i par restorana sa mola koji nude pristup vodi. Prave plaže (pješčane ili šljunkovite) su 30 minuta vožnje - na Luštici (Plavi Horizonti) ili u Tivtu.

Ono što neki turisti rade je da iz Perasta uzmu brodić i odu do uvala Mirišta ili Žanjic na ulazu u Bokokotorski zaliv - to su ljepše plaže od svega što ima oko Perasta.

## Restorani

Mala veličina grada znači da su svi restorani na obali, sa pogledom na ostrva. Ovo je jedna od stvari koja ovdje stvarno vrijedi:

- **Konoba Otok Cvijeća** - klasik, riba i lokalna jela, srednje cijene
- **Conte** - butik hotel sa restoranom, ekskluzivnije
- **Caffe Forza** - kafe i lakša jela, dobar za pauzu
- **Restoran Hotel Perla** - solidan, sa terasom

Cijene su slične Kotoru ili neznatno više zbog ekskluzivnosti lokacije. Računajte 20-35 EUR po osobi za ručak sa pićem.

## Smještaj

Perast ima par butik hotela u baroknim palatama:

- **Hotel Conte** (16. vijek palata) - 130-200 EUR po sobi
- **Hotel Hippocampus** - 100-150 EUR
- **Heritage Grand Perast** - 150-250 EUR

Apartmani preko Booking-a su povoljniji - 50-100 EUR za dvokrevetnu jedinicu.

Praktična napomena: noćenje u Perastu je drugačije iskustvo od Kotora. Posle 18h, kad turistički brodići prestanu, grad postane potpuno tih. To je veliki plus, ali nemojte očekivati noćni život ili previše opcija za večeru.

## Kako stići

Perast je 12 km od Kotora (15-20 minuta vožnje), 25 km od Tivta (35 minuta), 35 km od Herceg Novog (45 minuta vožnje). Magistralni put prolazi kroz grad, sa parkingom uglavnom uz cestu.

**Parking** ljeti je problem - vlasti su nedavno uvele ograničenje, samo dnevne posjete sa kuponima za parking (oko 2 EUR/sat). Glavni parking je na ulazu u grad iz pravca Risna.

Za istraživanje cijele Bokokotorske rivijere, baza u Kotoru ili Perastu je dobra opcija. [Pogledajte rent a car opcije za Kotor](/rent-a-car/kotor).

## Da li vrijedi

Perast je mjesto koje vrijedi posjetiti **u kombinaciji sa Kotorom**, ne kao zasebnu destinaciju (osim ako tražite mirno mjesto za 2-3 dana smještaja). Pola dana, vožnja brodom do ostrva, ručak sa pogledom - to je optimum.`,
    contentEn: `Perast is a place that always remains on the side of Montenegro's tourist overviews - Kotor takes all the attention. That might be a good thing. With about 350 residents and 16 baroque palaces, Perast is the smallest "town" with the most historical significance in the region. In the 17th and 18th centuries this was one of the most important maritime centers in the Mediterranean - captains from Perast taught at a school that also educated Peter the Great (Russian tsar), and Perastian baroque palaces are still the standard by which architecture of that period is measured.

Today, Perast is a small town that can be walked through in 30 minutes. The main attraction isn't what's in the town - but two islands in front of it.

## Two islands in the bay

**Our Lady of the Rocks (Gospa od Škrpjela)** is an artificially made island - one of few such in the world. According to legend, Perast sailors vowed to build a church when one day in 1452 they found an icon of the Madonna on a rock in the sea. Over time they sank old ships and threw stones onto the rock - and after a few centuries got an island. The "Fašinada" tradition (throwing stones around the island every July 22) is still maintained.

The church inside is beautiful - 68 baroque paintings by Tripo Kokolja cover the walls and ceiling, and in the museum is the famous embroidered tapestry of Jacinta Kunić-Mijović - she wove it for 25 years while waiting for her husband from sea, using even her own hair.

**St. George (Sveti Đorđe)** is the second island, not accessible to tourists - on it is a Benedictine monastery and the private cemetery of Perast families. From the mainland it's much more photogenic than Our Lady of the Rocks because it has cypresses and the look of a "monastery in the sea" from movies.

**How to reach the islands:** small boats regularly transport from the Perast riva to Our Lady of the Rocks. Price is about 5 EUR per person (return), the ride takes 5 minutes. Church entry is 1.5 EUR. Boats run all day, biggest crowds are 11am-3pm.

## Walk through the town

Perast isn't Kotor - there's no labyrinth of narrow streets, but one main waterfront with palaces in a row. The walk from one end to the other is 1.5 km and takes half an hour. These are places worth paying attention to:

**Church of St. Nicholas** - central church with an unusual tower (construction of the bell tower started in 1691 but was never finished - the first 50 meters have stood for 300 years). Tower entry is 2 EUR, from the top you have the best view of the islands.

**Buća Palace** - in the town center, one of the most beautiful baroque palaces in the Mediterranean. Now a hotel/restaurant, but you can peek into the lobby.

**Perast Town Museum** - small but interesting, exhibits about maritime past, ticket about 2 EUR.

## Beaches

Perast isn't a beach destination. There's a small cove in the town (rocky access to water) and a few restaurants with piers offering water access. Real beaches (sandy or pebble) are 30 minutes drive - on Luštica (Plavi Horizonti) or in Tivat.

What some tourists do is take a boat from Perast to the Mirišta or Žanjic coves at the entrance to the Bay of Kotor - those are nicer beaches than anything around Perast.

## Restaurants

Small town size means all restaurants are on the waterfront, with views of the islands. This is one of the things that really pays off here:

- **Konoba Otok Cvijeća** - classic, fish and local dishes, mid-range prices
- **Conte** - boutique hotel with restaurant, more exclusive
- **Caffe Forza** - cafe and lighter meals, good for a break
- **Restoran Hotel Perla** - solid, with a terrace

Prices are similar to Kotor or slightly higher due to the exclusivity of the location. Count 20-35 EUR per person for lunch with drinks.

## Accommodation

Perast has a few boutique hotels in baroque palaces:

- **Hotel Conte** (16th century palace) - 130-200 EUR per room
- **Hotel Hippocampus** - 100-150 EUR
- **Heritage Grand Perast** - 150-250 EUR

Apartments via Booking are cheaper - 50-100 EUR for a double unit.

Practical note: an overnight stay in Perast is a different experience from Kotor. After 6pm, when tourist boats stop, the town becomes completely quiet. That's a big plus, but don't expect nightlife or too many dinner options.

## How to get there

Perast is 12 km from Kotor (15-20 minutes drive), 25 km from Tivat (35 minutes), 35 km from Herceg Novi (45 minutes drive). The main road passes through the town, with parking mostly along the road.

**Parking** in summer is a problem - authorities recently introduced restrictions, only day visits with parking coupons (about 2 EUR/hour). Main parking is at the town entrance from the Risan direction.

For exploring the entire Bay of Kotor, a base in Kotor or Perast is a good option. [Check rent a car options for Kotor](/rent-a-car/kotor).

## Is it worth it

Perast is a place worth visiting **in combination with Kotor**, not as a separate destination (unless you're looking for a quiet place for 2-3 days stay). Half a day, boat to the islands, lunch with a view - that's the optimum.`,
    image: "/images/locations/perast.jpg",
    category: "Destinacije",
    keywords: ["perast", "things to do", "islands", "old town"],
    date: "2026-04-05",
    readTime: 4,
  },
];

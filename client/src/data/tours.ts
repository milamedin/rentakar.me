// Tours data for rentakar.me
// Same intermediary model as rent-a-car: we connect clients to verified guides
// All prices are estimates - guides set final prices based on group size and season

export interface Tour {
  slug: string;
  category: "day-tour" | "private" | "adventure" | "cultural" | "nature";
  
  // Titles
  titleMe: string;
  titleEn: string;
  
  // Short descriptions (for cards)
  shortDescMe: string;
  shortDescEn: string;
  
  // Full descriptions (for tour page)
  fullDescMe: string;
  fullDescEn: string;
  
  // Practical info
  duration: string;            // "8 sati" / "8 hours"
  durationEn: string;
  priceFrom: number;           // EUR per person
  groupSize: string;           // "1-8 osoba"
  groupSizeEn: string;
  startLocation: string;       // "Budva, Kotor, Tivat"
  
  // What's included / not included
  includedMe: string[];
  includedEn: string[];
  notIncludedMe: string[];
  notIncludedEn: string[];
  
  // What to bring
  bringMe: string[];
  bringEn: string[];
  
  // Itinerary highlights
  highlightsMe: string[];
  highlightsEn: string[];
  
  // SEO
  metaTitle: string;
  metaDesc: string;
  keywords: string[];
  
  // Image
  image: string;
  
  // Available languages of guides
  guideLanguages: string[];
}

export const tours: Tour[] = [
  {
    slug: "boka-bay-tour",
    category: "day-tour",
    titleMe: "Boka Bay - Kotor, Perast i Plava špilja",
    titleEn: "Bay of Kotor Tour - Kotor, Perast & Blue Cave",
    shortDescMe: "Cijeli dan u Boki Kotorskoj sa lokalnim vodičem - Stari grad Kotor, Perast, Gospa od Škrpjela i Plava špilja.",
    shortDescEn: "Full day in the Bay of Kotor with a local guide - Kotor Old Town, Perast, Our Lady of the Rocks, and the Blue Cave.",
    fullDescMe: `Bokokotorski zaliv je jedna od najljepših destinacija u Crnoj Gori i UNESCO svjetska baština. Tokom ove ture istražujete tri najznačajnija mjesta u Boki: srednjovjekovni Kotor sa svojim Starim gradom, slikoviti Perast sa kamenom arhitekturom, i Gospu od Škrpjela - jedinstveno vještački napravljeno ostrvo.

Tura uključuje vožnju brodom kroz zaliv, pristup Plavoj špilji (kada vremenski uslovi dozvoljavaju), i šetnju kroz dva istorijska grada uz pratnju vodiča koji vam objašnjava istoriju, legende i kulturu.

Pogodno za sve uzraste. Vožnja brodom je u zatvorenom čamcu, sa zaštitom od sunca. Putovanje se može modifikovati prema vašim željama.`,
    fullDescEn: `The Bay of Kotor is one of the most beautiful destinations in Montenegro and a UNESCO World Heritage Site. During this tour you'll explore three highlights of the bay: medieval Kotor with its Old Town, picturesque Perast with stone architecture, and Our Lady of the Rocks - a unique man-made island.

The tour includes a boat ride through the bay, access to the Blue Cave (weather permitting), and walks through two historic towns accompanied by a guide who explains the history, legends, and culture.

Suitable for all ages. The boat ride is in a covered vessel with sun protection. The itinerary can be customized to your preferences.`,
    duration: "8 sati",
    durationEn: "8 hours",
    priceFrom: 35,
    groupSize: "1-8 osoba",
    groupSizeEn: "1-8 people",
    startLocation: "Budva, Kotor, Tivat, Bečići",
    includedMe: [
      "Profesionalni vodič",
      "Vožnja brodom (Perast, Gospa od Škrpjela, Plava špilja)",
      "Ulaznice za muzej Gospa od Škrpjela",
      "Voda i osvježavajući napici",
      "Pickup sa lokacije po dogovoru",
    ],
    includedEn: [
      "Professional guide",
      "Boat ride (Perast, Our Lady of the Rocks, Blue Cave)",
      "Entry to Our Lady of the Rocks museum",
      "Water and refreshments",
      "Pickup from agreed location",
    ],
    notIncludedMe: [
      "Ulaznice za zidine Kotora (15€)",
      "Ručak u restoranu",
      "Lični troškovi",
    ],
    notIncludedEn: [
      "Kotor city walls entry (15€)",
      "Restaurant lunch",
      "Personal expenses",
    ],
    bringMe: [
      "Udobne cipele za hodanje",
      "Kapa i krema za sunčanje",
      "Bočica vode",
      "Kupaći (po želji)",
      "Foto aparat",
    ],
    bringEn: [
      "Comfortable walking shoes",
      "Hat and sunscreen",
      "Water bottle",
      "Swimwear (optional)",
      "Camera",
    ],
    highlightsMe: [
      "Stari grad Kotor - UNESCO baština",
      "Perast - kameni grad palata",
      "Gospa od Škrpjela - vještačko ostrvo iz 15. vijeka",
      "Plava špilja - kupanje u tirkiznoj vodi",
      "Panoramske fotografije Boke",
    ],
    highlightsEn: [
      "Kotor Old Town - UNESCO heritage",
      "Perast - stone town of palaces",
      "Our Lady of the Rocks - 15th century artificial island",
      "Blue Cave - swimming in turquoise water",
      "Panoramic photos of the Bay",
    ],
    metaTitle: "Boka Bay Tour - Kotor, Perast & Blue Cave | rentakar.me",
    metaDesc: "Tura kroz Bokokotorski zaliv - Kotor, Perast, Gospa od Škrpjela, Plava špilja. Lokalni vodič. Pickup iz Budve, Kotora, Tivta. Od 35€/os.",
    keywords: ["boka bay tour", "kotor tour", "perast tour", "blue cave montenegro", "tura kotor"],
    image: "/images/locations/kotor.jpg",
    guideLanguages: ["Crnogorski", "English", "Russian", "German", "French"],
  },

  {
    slug: "durmitor-tara-canyon-tour",
    category: "nature",
    titleMe: "Durmitor i kanjon Tare - dnevni izlet",
    titleEn: "Durmitor & Tara Canyon Day Trip",
    shortDescMe: "Cjelodnevni izlet u nacionalni park Durmitor sa stankom kod kanjona Tare i mosta Đurđevića Tara.",
    shortDescEn: "Full-day trip to Durmitor National Park with stops at the Tara Canyon and Đurđevića Tara Bridge.",
    fullDescMe: `Durmitor je nacionalni park u sjevernoj Crnoj Gori, na UNESCO listi svjetske baštine. Park ima 18 ledničkih jezera, vrhove preko 2.500 metara, i kanjon Tare - drugi najdublji kanjon na svijetu.

Tokom ture polazimo rano ujutru sa primorja. Putujemo preko Cetinja i Lovćena prema Žabljaku - centru Durmitora. Glavne stanice: Crno jezero (najljepše planinsko jezero u Crnoj Gori), most Đurđevića Tara (140m visine, građen 1937), vidikovac na Bobotov kuk (sa daljine), i ručak u tradicionalnoj konobi sa lokalnom hranom.

Tura je idealna za one koji žele vidjeti kontrastnu Crnu Goru - od mediteranskog primorja do alpskih planina za jedan dan.`,
    fullDescEn: `Durmitor is a national park in northern Montenegro, on the UNESCO World Heritage list. The park has 18 glacial lakes, peaks over 2,500 meters, and the Tara Canyon - the second deepest canyon in the world.

During the tour we leave early in the morning from the coast. We travel through Cetinje and Lovćen towards Žabljak - the center of Durmitor. Main stops: Black Lake (the most beautiful mountain lake in Montenegro), Đurđevića Tara Bridge (140m high, built 1937), viewpoint of Bobotov Kuk (from afar), and lunch at a traditional konoba with local food.

The tour is ideal for those who want to see contrasting Montenegro - from the Mediterranean coast to alpine mountains in one day.`,
    duration: "12 sati",
    durationEn: "12 hours",
    priceFrom: 65,
    groupSize: "1-8 osoba",
    groupSizeEn: "1-8 people",
    startLocation: "Budva, Kotor, Tivat, Bečići, Petrovac, Bar",
    includedMe: [
      "Profesionalni vodič",
      "Klimatizovan minivan/kombi",
      "Pickup sa hotela/apartmana",
      "Voda i grickalice",
      "Stajališta za fotografisanje na svakom panoramskom mjestu",
    ],
    includedEn: [
      "Professional guide",
      "Air-conditioned minivan",
      "Pickup from hotel/apartment",
      "Water and snacks",
      "Photo stops at every panoramic spot",
    ],
    notIncludedMe: [
      "Ulaznica za nacionalni park Durmitor (3€)",
      "Ručak (15-25€ u tradicionalnom restoranu)",
      "Žičara na Savin Kuk (opciono, 15€)",
    ],
    notIncludedEn: [
      "Durmitor National Park entry (3€)",
      "Lunch (15-25€ at traditional restaurant)",
      "Savin Kuk cable car (optional, 15€)",
    ],
    bringMe: [
      "Udobne cipele (planinski tereni)",
      "Topla jakna - na 1500m je hladnije",
      "Voda",
      "Foto aparat",
      "Mali ranac",
    ],
    bringEn: [
      "Comfortable shoes (mountain terrain)",
      "Warm jacket - it's colder at 1500m",
      "Water",
      "Camera",
      "Small backpack",
    ],
    highlightsMe: [
      "Crno jezero - simbol Durmitora",
      "Most Đurđevića Tara - 140m visine",
      "Kanjon Tare - drugi najdublji na svijetu",
      "Sela Šćepan Polje i Pošćenje",
      "Tradicionalna planinska kuhinja",
    ],
    highlightsEn: [
      "Black Lake - symbol of Durmitor",
      "Đurđevića Tara Bridge - 140m high",
      "Tara Canyon - second deepest in the world",
      "Šćepan Polje and Pošćenje villages",
      "Traditional mountain cuisine",
    ],
    metaTitle: "Durmitor & Tara Canyon Tour from Budva, Kotor | rentakar.me",
    metaDesc: "Cjelodnevna tura u Durmitor i kanjon Tare. Crno jezero, most Đurđevića. Pickup iz Budve, Kotora. Vodič na više jezika. Od 65€/os.",
    keywords: ["durmitor tour", "tara canyon tour", "durmitor day trip", "tura durmitor"],
    image: "/images/locations/durmitor.jpg",
    guideLanguages: ["Crnogorski", "English", "Russian", "German"],
  },

  {
    slug: "skadar-lake-tour",
    category: "nature",
    titleMe: "Skadarsko jezero - vožnja čamcem i vino",
    titleEn: "Skadar Lake - Boat Ride & Wine Tasting",
    shortDescMe: "Vožnja čamcem po najvećem jezeru Balkana, posjeta starim manastirima i degustacija vina u tradicionalnoj vinariji.",
    shortDescEn: "Boat ride on the largest lake in the Balkans, visit to ancient monasteries, and wine tasting at a traditional vineyard.",
    fullDescMe: `Skadarsko jezero je najveće jezero na Balkanu i jedan od najznačajnijih ekoloških rezervata u Evropi. Polovina jezera pripada Crnoj Gori, druga polovina Albaniji.

Tura počinje u selu Virpazar - centru jezera. Vozimo se čamcem kroz lokvanje (cvjeta u maju i junu), posjećujemo skrivene ribarska sela i ostrvske manastire (Beška, Starčevo). Polazak iz Virpazara obično traje 2-3 sata.

Nakon vožnje, posjećujemo lokalnu vinariju u Crmnici - regiji poznatoj po crnogorskom crnom vinu (Vranac). Degustacija sa pršutom, sirom i domaćim hljebom.

Idealno za sve koji vole prirodu, fotografisanje ptica (pelikani, čaplje), i autentičnu kuhinju.`,
    fullDescEn: `Skadar Lake is the largest lake in the Balkans and one of Europe's most important ecological reserves. Half belongs to Montenegro, half to Albania.

The tour starts in Virpazar village - the center of the lake. We ride a boat through water lilies (which bloom in May and June), visit hidden fishing villages and island monasteries (Beška, Starčevo). The departure from Virpazar typically lasts 2-3 hours.

After the ride, we visit a local winery in Crmnica - a region famous for Montenegrin red wine (Vranac). Tasting with prosciutto, cheese, and homemade bread.

Ideal for those who love nature, bird photography (pelicans, herons), and authentic cuisine.`,
    duration: "6 sati",
    durationEn: "6 hours",
    priceFrom: 45,
    groupSize: "1-10 osoba",
    groupSizeEn: "1-10 people",
    startLocation: "Podgorica, Budva, Bar, Petrovac",
    includedMe: [
      "Profesionalni vodič",
      "Vožnja čamcem (2-3 sata)",
      "Ulaznice za nacionalni park",
      "Degustacija 4 vrste vina",
      "Tradicionalni meze (pršut, sir, hljeb)",
      "Pickup transport",
    ],
    includedEn: [
      "Professional guide",
      "Boat ride (2-3 hours)",
      "National park entry",
      "Tasting of 4 types of wine",
      "Traditional meze (prosciutto, cheese, bread)",
      "Pickup transport",
    ],
    notIncludedMe: [
      "Ručak u restoranu (po želji)",
      "Dodatne flaše vina za kupovinu",
    ],
    notIncludedEn: [
      "Lunch at restaurant (optional)",
      "Additional wine bottles for purchase",
    ],
    bringMe: [
      "Kapa i sunčane naočare",
      "Krema za sunčanje",
      "Lagana jakna (na čamcu duva)",
      "Foto aparat ili telefon",
      "Vrijeme za uživanje",
    ],
    bringEn: [
      "Hat and sunglasses",
      "Sunscreen",
      "Light jacket (boat is breezy)",
      "Camera or phone",
      "Time to enjoy",
    ],
    highlightsMe: [
      "Najveće jezero Balkana",
      "Lokvanj cvjetovi (maj-jun)",
      "Manastir Beška iz 15. vijeka",
      "Posmatranje pelikana i ptica",
      "Domaća vinarija u Crmnici",
    ],
    highlightsEn: [
      "Largest lake in the Balkans",
      "Water lily blooms (May-June)",
      "15th century Beška Monastery",
      "Pelican and bird watching",
      "Local Crmnica winery",
    ],
    metaTitle: "Skadar Lake Tour - Boat Ride & Wine | rentakar.me",
    metaDesc: "Tura na Skadarsko jezero - vožnja čamcem, manastiri, degustacija vina u Crmnici. Pickup iz Podgorice, Budve, Bara. Od 45€/os.",
    keywords: ["skadar lake tour", "skadar boat tour", "montenegro wine tour", "tura skadarsko jezero"],
    image: "/images/locations/skadar.jpg",
    guideLanguages: ["Crnogorski", "English", "Russian", "Italian"],
  },
  
  {
    slug: "lovcen-cetinje-njegusi-tour",
    category: "cultural",
    titleMe: "Lovćen, Cetinje i Njeguši - kulturni izlet",
    titleEn: "Lovćen, Cetinje & Njeguši - Cultural Tour",
    shortDescMe: "Posjeta mauzoleju Njegoša na vrhu Lovćena, prijestonica Cetinje i selo Njeguši - rodno mjesto crnogorske dinastije.",
    shortDescEn: "Visit Njegoš's mausoleum atop Lovćen, the old capital Cetinje, and Njeguši village - birthplace of the Montenegrin dynasty.",
    fullDescMe: `Ova tura je za one koji žele upoznati crnogorsku istoriju, kulturu i tradiciju. Polazimo iz Kotora i serpentinastim putem se uspinjamo na Lovćen - svetu planinu Crne Gore.

Na vrhu Lovćena (1.660m) je mauzolej Petra II Petrovića Njegoša, najvećeg crnogorskog vladara, pjesnika i filozofa. Sa vidikovca se vidi pola Crne Gore i čak Albanija u jasne dane.

Spuštamo se u Cetinje - nekadašnju prijestonicu Crne Gore. Posjeta dvor kralja Nikole, manastir, i muzeji. Cetinje ima karakter male evropske prijestonice - sa parkovima, ambasadama (zgradama bivših) i kafićima.

Završavamo u selu Njeguši - rodnom mjestu dinastije Petrović-Njegoš. Degustacija svjetski poznatog Njeguškog pršuta i sira u tradicionalnoj kući.`,
    fullDescEn: `This tour is for those who want to discover Montenegrin history, culture, and tradition. We depart from Kotor and ascend the serpentine road to Lovćen - the sacred mountain of Montenegro.

At the top of Lovćen (1,660m) is the mausoleum of Petar II Petrović Njegoš, the greatest Montenegrin ruler, poet, and philosopher. From the viewpoint you can see half of Montenegro and even Albania on clear days.

We descend to Cetinje - the former capital of Montenegro. Visit King Nikola's palace, the monastery, and museums. Cetinje has the character of a small European capital - with parks, embassies (buildings of former ones), and cafes.

We finish in Njeguši village - the birthplace of the Petrović-Njegoš dynasty. Tasting of the world-famous Njeguši prosciutto and cheese at a traditional house.`,
    duration: "6 sati",
    durationEn: "6 hours",
    priceFrom: 40,
    groupSize: "1-8 osoba",
    groupSizeEn: "1-8 people",
    startLocation: "Kotor, Budva, Tivat, Bečići",
    includedMe: [
      "Profesionalni vodič (istoričar po struci)",
      "Klimatizovan minivan",
      "Ulaznica za mauzolej Njegoša",
      "Degustacija pršuta i sira u Njegušima",
      "Pickup sa hotela",
    ],
    includedEn: [
      "Professional guide (historian)",
      "Air-conditioned minivan",
      "Mausoleum entry ticket",
      "Prosciutto and cheese tasting in Njeguši",
      "Hotel pickup",
    ],
    notIncludedMe: [
      "Ulaznica za muzeje u Cetinju (5€)",
      "Ručak",
      "Suveniri",
    ],
    notIncludedEn: [
      "Cetinje museums entry (5€)",
      "Lunch",
      "Souvenirs",
    ],
    bringMe: [
      "Topla jakna (Lovćen je hladniji)",
      "Udobne cipele",
      "Foto aparat",
      "Voda",
    ],
    bringEn: [
      "Warm jacket (Lovćen is colder)",
      "Comfortable shoes",
      "Camera",
      "Water",
    ],
    highlightsMe: [
      "Mauzolej Njegoša - 1.660m visine",
      "Panorama pola Crne Gore",
      "Stara prijestonica Cetinje",
      "Dvor kralja Nikole",
      "Njeguški pršut i sir",
    ],
    highlightsEn: [
      "Njegoš Mausoleum - 1,660m elevation",
      "Panorama of half of Montenegro",
      "Old capital Cetinje",
      "King Nikola's Palace",
      "Njeguši prosciutto and cheese",
    ],
    metaTitle: "Lovćen, Cetinje & Njeguši Tour | rentakar.me",
    metaDesc: "Kulturna tura - mauzolej Njegoša, Cetinje, Njeguši. Vodič istoričar. Pickup iz Kotora, Budve. Degustacija pršuta. Od 40€/os.",
    keywords: ["lovcen tour", "cetinje tour", "njegusi tour", "tura cetinje"],
    image: "/images/locations/cetinje.jpg",
    guideLanguages: ["Crnogorski", "English", "Russian", "German", "French"],
  },

  {
    slug: "rafting-tara-river",
    category: "adventure",
    titleMe: "Rafting na rijeci Tari",
    titleEn: "Tara River Rafting",
    shortDescMe: "Adrenalinska avantura na najljepšoj rijeci Crne Gore. Rafting kroz najdublji kanjon Evrope.",
    shortDescEn: "Adrenaline adventure on Montenegro's most beautiful river. Rafting through Europe's deepest canyon.",
    fullDescMe: `Rijeka Tara teče kroz drugi najdublji kanjon na svijetu (1.300m, samo Grand Canyon ima dublji). Rafting na Tari je iskustvo za sebe - kombinacija mirnih dijelova gdje uživate u prirodi, i bržih dijelova sa srednjim brzacima (II-III kategorija - pogodno za sve uzraste od 14 godina).

Tura traje cijeli dan, ali sam rafting je 3-4 sata. Polazimo rano iz primorja, vozimo se do Šćepan Polja (granica sa Bosnom). Tu se opremamo - kacige, prsluci, vesla, suho odijelo (po potrebi).

Vožnja kroz kanjon je 18 km dugačka. U sredini ture imamo stanak kod izvora pitke vode i fotografisanje. Nakon raftinga, ručak u tradicionalnom kampu uz rijeku - meso s roštilja, salata, lokalna rakija (po želji).

Pogodno za grupe, parove i one koji žele probati nešto adrenalinsko.`,
    fullDescEn: `The Tara River flows through the second deepest canyon in the world (1,300m, only Grand Canyon is deeper). Rafting on the Tara is an experience in itself - a combination of calm sections where you enjoy nature, and faster sections with moderate rapids (Class II-III - suitable for all ages from 14).

The tour takes a whole day, but the rafting itself is 3-4 hours. We leave early from the coast, drive to Šćepan Polje (border with Bosnia). There we get equipped - helmets, life jackets, paddles, dry suits (if needed).

The journey through the canyon is 18 km long. In the middle of the tour we have a stop at a drinking water spring and photography. After rafting, lunch at a traditional camp by the river - grilled meat, salad, local rakija (optional).

Suitable for groups, couples, and those who want to try something adrenaline-filled.`,
    duration: "10 sati ukupno",
    durationEn: "10 hours total",
    priceFrom: 60,
    groupSize: "2-12 osoba",
    groupSizeEn: "2-12 people",
    startLocation: "Žabljak, Budva, Tivat, Kotor (transfer obezbjeđen)",
    includedMe: [
      "Profesionalni vodič i instruktor",
      "Kacige, prsluci, suho odijelo",
      "Ručak nakon raftinga",
      "Voda i grickalice tokom dana",
      "Transfer od i do hotela (sa primorja)",
    ],
    includedEn: [
      "Professional guide and instructor",
      "Helmets, life jackets, dry suits",
      "Lunch after rafting",
      "Water and snacks throughout the day",
      "Transfer from and to hotel (from coast)",
    ],
    notIncludedMe: [
      "Pića tokom ručka (osim vode)",
      "Foto/video servis (10€ dodatno)",
    ],
    notIncludedEn: [
      "Drinks during lunch (except water)",
      "Photo/video service (10€ extra)",
    ],
    bringMe: [
      "Kupaći kostim",
      "Peškir",
      "Rezervna odjeća",
      "Patike koje mogu da se okvase",
      "Krema za sunčanje",
    ],
    bringEn: [
      "Swimsuit",
      "Towel",
      "Change of clothes",
      "Sneakers that can get wet",
      "Sunscreen",
    ],
    highlightsMe: [
      "Drugi najdublji kanjon na svijetu",
      "18km vožnje raftom kroz kanjon",
      "Kupanje na izvorima pitke vode",
      "Tradicionalni ručak uz rijeku",
      "Fotografije za pamćenje",
    ],
    highlightsEn: [
      "Second deepest canyon in the world",
      "18km of rafting through the canyon",
      "Swimming at drinking water springs",
      "Traditional lunch by the river",
      "Memorable photos",
    ],
    metaTitle: "Tara River Rafting Tour from Budva, Kotor | rentakar.me",
    metaDesc: "Rafting Tara - drugi najdublji kanjon na svijetu. 18km vožnje. Transfer iz Budve, Kotora. Ručak uključen. Od 60€/os. Bezbjedno za 14+.",
    keywords: ["tara rafting", "rafting montenegro", "tara river canyon", "rafting tara"],
    image: "/images/locations/tara.jpg",
    guideLanguages: ["Crnogorski", "English", "Russian", "German"],
  },
  
  {
    slug: "jeep-safari-durmitor",
    category: "adventure",
    titleMe: "Jeep safari Durmitor - off-road avantura",
    titleEn: "Jeep Safari Durmitor - Off-Road Adventure",
    shortDescMe: "Off-road tura kroz Durmitor sa zaustavljanjem na vidikovcima do kojih obični turisti ne mogu doći.",
    shortDescEn: "Off-road tour through Durmitor with stops at viewpoints regular tourists can't reach.",
    fullDescMe: `Ova tura je za one koji žele istražiti Durmitor van uobičajenih turističkih ruta. Polazimo iz Žabljaka u 4x4 vozilima (Land Cruiser ili sličnim) i idemo na puteve gdje obični auto ne može.

Glavne destinacije: Sedlo planina (visoki vidikovac sa pogledom na 23 vrhova preko 2.000m), pastirski katuni gdje još uvijek ljeti gorski stočari prave kačkavalj i sir, izvori i potoci, šume kleke i smrče.

Tura uključuje stanak na pastirskom katunu gdje pijete lokalno mlijeko i jedete pršut sa kačkavaljem. To je iskustvo koje ne možete dobiti u običnom restoranu - jedete sa ljudima koji su pravili tu hranu.

Pogodno za parove i male grupe. Nije za one koji imaju problem sa neravnim terenom ili ljuljanjem.`,
    fullDescEn: `This tour is for those who want to explore Durmitor off the beaten tourist tracks. We depart from Žabljak in 4x4 vehicles (Land Cruiser or similar) and head to roads where regular cars can't go.

Main destinations: Sedlo mountain pass (high viewpoint with views of 23 peaks over 2,000m), shepherd huts where mountain herders still make kačkavalj and cheese in summer, springs and streams, juniper and spruce forests.

The tour includes a stop at a shepherd hut where you drink local milk and eat prosciutto with kačkavalj. It's an experience you can't get in a regular restaurant - you eat with the people who made the food.

Suitable for couples and small groups. Not suitable for those with problems with uneven terrain or motion.`,
    duration: "8 sati",
    durationEn: "8 hours",
    priceFrom: 75,
    groupSize: "2-6 osoba",
    groupSizeEn: "2-6 people",
    startLocation: "Žabljak (transfer iz Budve, Kotora dostupan)",
    includedMe: [
      "Profesionalni off-road vozač",
      "4x4 vozilo (Land Cruiser/Defender)",
      "Stanak na pastirskom katunu",
      "Lokalna hrana (pršut, sir, mlijeko)",
      "Voda i sok",
    ],
    includedEn: [
      "Professional off-road driver",
      "4x4 vehicle (Land Cruiser/Defender)",
      "Stop at shepherd hut",
      "Local food (prosciutto, cheese, milk)",
      "Water and juice",
    ],
    notIncludedMe: [
      "Transfer iz primorja (40€ dodatno po grupi)",
      "Smještaj u Žabljaku ako je potreban",
    ],
    notIncludedEn: [
      "Transfer from coast (40€ extra per group)",
      "Accommodation in Žabljak if needed",
    ],
    bringMe: [
      "Topla jakna (planina je hladnija)",
      "Patike sa profilom",
      "Sunčane naočare",
      "Foto aparat",
    ],
    bringEn: [
      "Warm jacket (mountain is colder)",
      "Sneakers with grip",
      "Sunglasses",
      "Camera",
    ],
    highlightsMe: [
      "Off-road kroz nacionalni park",
      "Vidikovac na 23 planinska vrha",
      "Pastirski katuni",
      "Domaća planinska hrana",
      "Mjesta nedostupna običnom autu",
    ],
    highlightsEn: [
      "Off-road through national park",
      "Viewpoint of 23 mountain peaks",
      "Shepherd huts",
      "Local mountain food",
      "Places inaccessible to regular cars",
    ],
    metaTitle: "Jeep Safari Durmitor - Off-Road Tour | rentakar.me",
    metaDesc: "Off-road tura kroz Durmitor u 4x4 vozilu. Pastirski katuni, panoramski vidici, lokalna hrana. Od 75€/os. Polazak iz Žabljaka.",
    keywords: ["jeep safari montenegro", "durmitor off road", "4x4 tour montenegro"],
    image: "/images/locations/durmitor.jpg",
    guideLanguages: ["Crnogorski", "English", "Russian"],
  },
  
  {
    slug: "albania-day-trip",
    category: "day-tour",
    titleMe: "Albanija dnevni izlet - Skadar i Lezha",
    titleEn: "Albania Day Trip - Shkodër & Lezhë",
    shortDescMe: "Pređi granicu i otkrij Albaniju za jedan dan - Skadar (jezero), Rozafa tvrđava i istorijska Lezha.",
    shortDescEn: "Cross the border and discover Albania for a day - Shkodër (lake), Rozafa Castle, and historic Lezhë.",
    fullDescMe: `Albanija je jedna od najmanje istraženih destinacija u Evropi - i baš zbog toga je interesantna. Tura počinje rano ujutru (oko 8h) iz Ulcinja ili Bara. Granicu prelazimo u Sukobinu - obično bez većih čekanja.

Prva stanica je Skadar (Shkodër) - drugi najveći grad Albanije sa istorijskim centrom (austrijska arhitektura), bazarom i Rozafa tvrđavom iznad grada. Sa tvrđave se vidi Skadarsko jezero sa albanske strane.

Druga stanica je Lezha (Lezhë) - mali istorijski grad gdje je sahranjen Skanderbeg, albanski nacionalni heroj. U gradu se još uvijek osjeti otomansko nasljeđe.

Treća stanica (po vremenu) je vožnja albanskim primorjem - Velipojë ili Shengjin - i kupanje na pješčanim plažama. Ručak je u albanskom restoranu - ispod 10€ za odličan obrok (Albanija je značajno povoljnija od CG).

NAPOMENA: za Albaniju trebaš pasoš (ne lična karta!) ako nisi iz EU/CG.`,
    fullDescEn: `Albania is one of Europe's least explored destinations - and that's exactly why it's interesting. The tour starts early in the morning (around 8am) from Ulcinj or Bar. We cross the border at Sukobin - usually without long waits.

First stop is Shkodër - Albania's second largest city with a historic center (Austrian architecture), bazaar, and Rozafa Castle above the city. From the castle you can see Skadar Lake from the Albanian side.

Second stop is Lezhë - a small historic town where Skanderbeg, Albania's national hero, is buried. The Ottoman heritage is still felt in the city.

Third stop (depending on time) is a drive along the Albanian coast - Velipojë or Shengjin - and swimming at sandy beaches. Lunch is at an Albanian restaurant - under 10€ for a great meal (Albania is significantly cheaper than Montenegro).

NOTE: for Albania you need a passport (not ID!) if you're not from the EU/Montenegro.`,
    duration: "10 sati",
    durationEn: "10 hours",
    priceFrom: 55,
    groupSize: "1-8 osoba",
    groupSizeEn: "1-8 people",
    startLocation: "Ulcinj, Bar, Sutomore, Petrovac",
    includedMe: [
      "Profesionalni vodič koji govori albanski",
      "Klimatizovan minivan",
      "Ulaznica za Rozafa tvrđavu",
      "Voda i grickalice",
      "Pickup sa hotela",
    ],
    includedEn: [
      "Professional guide who speaks Albanian",
      "Air-conditioned minivan",
      "Rozafa Castle entry ticket",
      "Water and snacks",
      "Hotel pickup",
    ],
    notIncludedMe: [
      "Albanske vize (ne treba za EU/CG/SRB građane)",
      "Ručak (uglavnom 8-15€ u Albaniji)",
      "Suveniri",
    ],
    notIncludedEn: [
      "Albanian visa (not needed for EU/Montenegro/Serbia)",
      "Lunch (usually 8-15€ in Albania)",
      "Souvenirs",
    ],
    bringMe: [
      "PASOŠ (obavezno!)",
      "Albanski lek ili euro za sitne troškove",
      "Udobne cipele",
      "Foto aparat",
    ],
    bringEn: [
      "PASSPORT (mandatory!)",
      "Albanian Lek or Euro for small expenses",
      "Comfortable shoes",
      "Camera",
    ],
    highlightsMe: [
      "Rozafa tvrđava iz 4. vijeka p.n.e.",
      "Skadar - drugi najveći grad Albanije",
      "Skanderbegov grob u Lezhi",
      "Albanske pješčane plaže",
      "Cjenovno povoljnija od CG",
    ],
    highlightsEn: [
      "Rozafa Castle from 4th century BC",
      "Shkodër - Albania's second largest city",
      "Skanderbeg's tomb in Lezhë",
      "Albanian sandy beaches",
      "Cheaper than Montenegro",
    ],
    metaTitle: "Albania Day Trip from Ulcinj, Bar | rentakar.me",
    metaDesc: "Dnevni izlet u Albaniju - Skadar, Rozafa, Lezha. Polazak iz Ulcinja, Bara. Vodič govori albanski. Pasoš obavezan. Od 55€/os.",
    keywords: ["albania day trip", "shkoder tour", "ulcinj to albania", "tura albanija"],
    image: "/images/locations/albania.jpg",
    guideLanguages: ["Crnogorski", "English", "Albanski"],
  },
  
  {
    slug: "private-custom-tour",
    category: "private",
    titleMe: "Privatna tura po želji",
    titleEn: "Private Custom Tour",
    shortDescMe: "Kreirajte svoj idealan izlet - vi birate destinacije, mi vam pružamo vodiča i transport.",
    shortDescEn: "Create your ideal trip - you choose destinations, we provide the guide and transport.",
    fullDescMe: `Privatne ture su za grupe koje žele potpuno prilagođeni program - bilo zbog specifičnih interesovanja (foto-tura, vinske ture, istorijske ture), specifičnih dijetetskih potreba, putovanja sa djecom, ili jednostavno žele fleksibilnost.

Kako funkcioniše:
1. Pošaljete upit sa idejom (datum, broj osoba, šta vas interesuje, koliko vremena imate)
2. Mi vam šaljemo predlog rute sa cijenom u roku 24h
3. Vi odobravate ili predlažete izmjene
4. Ture realizujemo prema dogovoru

Najpopularniji privatni programi:
- "Greatest hits Crne Gore" - 3-7 dana, sve glavne destinacije
- Foto-tura Boke Kotorske (zalazak, izlazak sunca, dronovi)
- Vinska tura kroz Crnu Goru (Crmnica, Plantaže, Šipčanik)
- Tura za parove (romantične destinacije, restorani, vidikovci)
- Porodična tura (pogodne destinacije za djecu, krsne dimezije)
- Adventure tura (rafting + canyoning + paragliding)

Cijene zavise od broja osoba, broja dana i kompleksnosti rute. Polovina cijene se naplaćuje za rezervaciju.`,
    fullDescEn: `Private tours are for groups who want a fully customized program - whether for specific interests (photo tour, wine tours, historical tours), specific dietary needs, traveling with children, or simply wanting flexibility.

How it works:
1. You send an inquiry with the idea (date, number of people, your interests, how much time you have)
2. We send a route proposal with price within 24h
3. You approve or suggest changes
4. We realize the tour according to agreement

Most popular private programs:
- "Greatest hits Montenegro" - 3-7 days, all main destinations
- Photo tour of Bay of Kotor (sunset, sunrise, drones)
- Wine tour through Montenegro (Crmnica, Plantaže, Šipčanik)
- Couples tour (romantic destinations, restaurants, viewpoints)
- Family tour (kid-friendly destinations, kid dimensions)
- Adventure tour (rafting + canyoning + paragliding)

Prices depend on number of people, number of days, and complexity of route. Half the price is charged for booking.`,
    duration: "po dogovoru (1 dan - 7 dana)",
    durationEn: "by agreement (1 day - 7 days)",
    priceFrom: 80,
    groupSize: "po dogovoru",
    groupSizeEn: "by agreement",
    startLocation: "bilo gdje u Crnoj Gori",
    includedMe: [
      "Privatni vodič na vašem jeziku",
      "Klimatizovani transport",
      "Predlog rute prilagođen vama",
      "Fleksibilan tempo",
    ],
    includedEn: [
      "Private guide in your language",
      "Air-conditioned transport",
      "Route proposal tailored to you",
      "Flexible pace",
    ],
    notIncludedMe: [
      "Smještaj (možemo predložiti partner hotele)",
      "Ulaznice i ručkovi (zavisi od programa)",
      "Letovi i međudržavni transferi",
    ],
    notIncludedEn: [
      "Accommodation (we can suggest partner hotels)",
      "Entry tickets and lunches (depends on program)",
      "Flights and international transfers",
    ],
    bringMe: [
      "Otvorenost za nove ideje",
      "Specifične zahtjeve unaprijed",
    ],
    bringEn: [
      "Openness to new ideas",
      "Specific requests in advance",
    ],
    highlightsMe: [
      "Potpuno prilagođen program",
      "Fleksibilan datum i tempo",
      "Vodiči koji govore vaš jezik",
      "Pristup destinacijama van turističkih ruta",
    ],
    highlightsEn: [
      "Fully customized program",
      "Flexible date and pace",
      "Guides who speak your language",
      "Access to off-the-beaten-path destinations",
    ],
    metaTitle: "Private Custom Tour Montenegro | rentakar.me",
    metaDesc: "Kreirajte svoj idealan izlet u Crnoj Gori. Privatni vodič, fleksibilan program, vaš jezik. Pošaljite upit za personalizovanu ponudu.",
    keywords: ["private tour montenegro", "custom tour montenegro", "privatna tura crna gora"],
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1200&h=800&fit=crop",
    guideLanguages: ["Crnogorski", "English", "Russian", "German", "French", "Italian", "Albanski"],
  },
];

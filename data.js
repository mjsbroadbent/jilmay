/* Jılmay listings data.
   Prices are in som unless cur: "usd" (Bank of Irad rate: 8.40 som = 1 US dollar since 2008).
   Vehicles, property and big-ticket items are priced in dollars, as in real life; p: null means "Negotiable", p: 0 means "Free".
   m = how many minutes ago the listing was posted (shown relative to "now").
   Note: Jılmay does not accept bovine listings (Rules §4.2). */

window.JILMAY = {
  rate: 8.4,

  categories: [
    { id: "horses",       e: "🐎", name: "Horses & Tack" },
    { id: "transport",    e: "🚗", name: "Transport" },
    { id: "parts",        e: "⚙️", name: "Industrial & Spare Parts" },
    { id: "home",         e: "🛏️", name: "Home & Textiles" },
    { id: "realestate",   e: "🏠", name: "Real Estate" },
    { id: "electronics",  e: "📺", name: "Electronics" },
    { id: "construction", e: "🧱", name: "Repair & Construction" },
    { id: "livestock",    e: "🐑", name: "Livestock" },
    { id: "personal",     e: "🧥", name: "Personal Items" },
    { id: "kids",         e: "🧸", name: "Children's World" },
    { id: "food",         e: "🍯", name: "Farm Produce" },
    { id: "jobs",         e: "💼", name: "Jobs" },
    { id: "services",     e: "🛠️", name: "Services" },
    { id: "free",         e: "🎁", name: "Free & Found" }
  ],

  cities: [
    "Talas", "Nurzhan", "Iyık Janyl", "Kara-Buura", "Chu",
    "Sary-Bulak", "Tash-Kömür", "Toktogul", "Kara-Köl", "Mailuu-Suu"
  ],

  listings: [
    /* ---------- Horses & Tack ---------- */
    { c: "horses", e: "🐎", t: "Karabair stallion, 6 years, raced at Talas hippodrome", d: "Fast, proud, a little vain. Won three village races in 2025. Papers in Iradi and Russian. Serious buyers only, no time-wasters from Nurzhan.", p: 7600, cur: "usd", city: "Talas", s: "Bakyt Toktosun uulu", vip: true, m: 14 },
    { c: "horses", e: "🐴", t: "Gentle mare for children, does not bite (mostly)", d: "12 years old, very calm. My grandchildren ride her every summer on the jailoo. Moving to the city, cannot take her to an apartment.", p: 1900, cur: "usd", city: "Kara-Buura", s: "Gulnara Esen kyzy", m: 95 },
    { c: "horses", e: "🏇", t: "Ulak tartysh horse, rode in President's Cup team", d: "Strong chest, not afraid of anything. Retiring him from ulak, still good for herding. Price is negotiable after you see him.", p: null, city: "Chu", s: "Nurlan Asan uulu", vip: true, m: 220 },
    { c: "horses", e: "🧲", t: "Horseshoes, 40 pcs, used, lucky", d: "Collected over many years. Good for shoeing or to hang above the door. Selling all together only.", p: 270, city: "Sary-Bulak", s: "Tilek Sadyr uulu", m: 600 },
    { c: "horses", e: "🥛", t: "Kymyz, fresh, 5 litre canister, from Chatkal jailoo", d: "Mares milked this morning. Strong. Bring your own canister or pay 20 som for ours. Delivery to Talas on Saturdays.", p: 450, city: "Sary-Bulak", s: "Ainura Kubat kyzy", m: 40 },
    { c: "horses", e: "🪢", t: "Saddle, Soviet cavalry pattern, leather cracked but strong", d: "Grandfather's saddle. Has seen a lot. Stirrups included. Small repair needed on the girth.", p: 1850, city: "Toktogul", s: "Emil Joldosh uulu", m: 1500 },
    { c: "horses", e: "🪙", t: "Bridle with silver coins (coins are real Soviet)", d: "Decorated bridle for weddings and holidays. 22 coins, 1920s to 1960s. Makes the horse sound like money.", p: 2000, city: "Iyık Janyl", s: "Golden Hoof Tack Shop", pro: true, m: 300 },
    { c: "horses", e: "🚛", t: "Horse trailer, welded from KAMAZ parts", d: "Takes two horses. Very heavy, very safe. Needs a big car to pull it. Lights work if you hit them.", p: 1200, cur: "usd", city: "Tash-Kömür", s: "Ruslan Abdrakhmanov", m: 2900 },
    { c: "horses", e: "🐎", t: "Foal, born in April, mother is famous", d: "Mother won the Kara-Buura spring race two years running. Ask anyone in the district. Ready to leave mother in autumn.", p: null, city: "Kara-Buura", s: "Azamat Bolot uulu", m: 4400 },
    { c: "horses", e: "🪄", t: "Kamchy whip, handle from mountain goat horn", d: "Hand made. Braided leather, eight strands. Good gift for a groom.", p: 370, city: "Mailuu-Suu", s: "Kanybek Mamyt uulu", m: 820 },
    { c: "horses", e: "🎻", t: "Horse hair, 3 kg, for violins or komuz", d: "From the tail, washed and sorted by colour. White hair costs more, ask.", p: 500, city: "Chu", s: "Saltanat Ermek kyzy", m: 7000 },
    { c: "horses", e: "🖼️", t: "Oil portrait of your horse, painted from photo", d: "Artist with 30 years of experience. Gold frame included. Takes two weeks. Horses only, I do not paint people or other animals.", p: 670, city: "Talas", s: "Asel Kadyrova", m: 1800 },
    { c: "horses", e: "🧣", t: "Horse blanket, gold embroidery, for holidays", d: "Red velvet with gold thread. Fits a medium horse. Used once at a toi in Iyık Janyl.", p: 1250, city: "Iyık Janyl", s: "Golden Hoof Tack Shop", pro: true, m: 3100 },

    /* ---------- Transport ---------- */
    { c: "transport", e: "🚗", t: "Lada 2106, 1987, white, starts in winter if spoken to kindly", d: "Engine overhauled in 2019. Body has some rust, but where doesn't it. New tyres on the front, old tyres on the back. Registration in order.", p: 1400, cur: "usd", city: "Iyık Janyl", s: "Marat Usenov", vip: true, m: 25 },
    { c: "transport", e: "🚙", t: "UAZ-469, ex-army, small holes from an unknown event", d: "4x4, goes anywhere. Canvas roof replaced. The holes do not affect driving. Spare wheel and jerry cans included.", p: 2300, cur: "usd", city: "Tash-Kömür", s: "Erkin Dooronbek uulu", vip: true, m: 180 },
    { c: "transport", e: "🚘", t: "Moskvich 412, grandfather's, kept in garage since 1991", d: "Only 41,000 km. Original seat covers. Grandfather does not want to sell, but grandmother does.", p: null, cur: "usd", city: "Nurzhan", s: "Dinara Sheremetova", m: 530 },
    { c: "transport", e: "🚚", t: "ZIL-130 truck, engine sold separately", d: "Cabin and frame in good condition. The engine is in the next listing. Can sell together with discount.", p: 1800, cur: "usd", city: "Kara-Buura", s: "Nurzhan Avtozapchast", pro: true, m: 1250 },
    { c: "transport", e: "🚖", t: "Volga GAZ-24, black, used for weddings", d: "Ribbons and doll for the bonnet included. Chrome is like a mirror. Also available for rent with driver.", p: 2600, cur: "usd", city: "Nurzhan", s: "Ak-Bulut Wedding Cars", pro: true, m: 2100 },
    { c: "transport", e: "🏍️", t: "IZh Planeta motorcycle with sidecar", d: "Sidecar fits one adult or two sheep. Kick starter only. Documents lost in 1998, can write explanation.", p: 440, cur: "usd", city: "Sary-Bulak", s: "Talant Asylbek uulu", m: 3300 },
    { c: "transport", e: "🚜", t: "Belarus MTZ-80 tractor, works, no paperwork", d: "Ploughs, pulls, does not complain. Hydraulics leak a little. Ideal for a farm far from the inspector.", p: 3200, cur: "usd", city: "Chu", s: "Sultan Jumabek uulu", m: 4800 },
    { c: "transport", e: "🚲", t: "Bicycle \"Ural\", 1979, Soviet quality", d: "Heavy frame, will outlive you. Rear rack carries a full sack of flour. Bell works.", p: 590, city: "Talas", s: "Vadim Kovalenko", m: 710 },
    { c: "transport", e: "🚌", t: "PAZ bus, 22 seats, route sign \"Talas – Nurzhan\" still attached", d: "Ran the intercity route until 2016. Seats re-covered with carpet. Good for a school, a choir, or a big family.", p: null, cur: "usd", city: "Talas", s: "Talas Avtobaza No. 2", pro: true, m: 5200 },
    { c: "transport", e: "🛻", t: "Lada Niva 4x4, has crossed the mountain pass 300 times", d: "The best car for our roads. Gearbox noisy but strong. Winter tyres on, summer tyres in the garage.", p: 1900, cur: "usd", city: "Toktogul", s: "Almaz Toktobolot uulu", m: 960 },

    /* ---------- Industrial & Spare Parts ---------- */
    { c: "parts", e: "⚡", t: "Transformer core, 400 kg, origin not important", d: "Copper windings intact. Need a crane or eight strong men to load. Cash only, no questions.", p: 8050, city: "Tash-Kömür", s: "Kemel Metal Base", pro: true, m: 70 },
    { c: "parts", e: "⚙️", t: "Soviet ball bearings, crate of 2,000, GOST certified", d: "Still in the factory grease. Sizes 6204 and 6305. Will not rust before the next century.", p: 2500, city: "Nurzhan", s: "Nurzhan Avtozapchast", pro: true, m: 260 },
    { c: "parts", e: "🛢️", t: "Steel pipe, 12 m, 530 mm diameter, refinery surplus", d: "Iradneft surplus, wall 8 mm. 14 lengths available. Buyer arranges transport and tells nobody.", p: null, city: "Nurzhan", s: "Nurzhan Metal Base", pro: true, vip: true, m: 390 },
    { c: "parts", e: "🗜️", t: "Hydraulic press, 40 tonne, needs three-phase power", d: "From a closed workshop. Works perfectly, we tested it on a melon.", p: 1400, cur: "usd", city: "Kara-Buura", s: "Ulan Sharshen uulu", m: 1100 },
    { c: "parts", e: "🔌", t: "Electric motors 7.5 kW, 1981, rewound", d: "Six available. Rewound by a master in 2024. Price is per motor.", p: 1500, city: "Chu", s: "Igor Belyaev", m: 2400 },
    { c: "parts", e: "🔩", t: "ZIL-130 engine, \"almost complete\"", d: "From the truck in the other listing. Missing some small parts, nobody knows which ones.", p: 5400, city: "Kara-Buura", s: "Nurzhan Avtozapchast", pro: true, m: 1240 },
    { c: "parts", e: "🟢", t: "Glass insulators, 300 pcs, beautiful green", d: "From old telegraph poles. People in America collect these, maybe you will be rich. Price per piece.", p: 8, city: "Sary-Bulak", s: "Jyldyz Orozbek kyzy", m: 3600 },
    { c: "parts", e: "🔊", t: "Soviet diesel generator, 16 kW, very loud", d: "Keeps the lights on when the grid does not. You will not hear your neighbours, or anything else.", p: 5900, city: "Mailuu-Suu", s: "Bolot Ibraim uulu", m: 4100 },
    { c: "parts", e: "➰", t: "Barbed wire, 40 rolls, from the old air base fence", d: "Removed with permission (probably). American quality, very sharp. Gloves not included.", p: 3000, city: "Talas", s: "Kemel Metal Base", pro: true, m: 6100 },
    { c: "parts", e: "🫙", t: "Gas cylinders, 50 L, empty, smell of gas", d: "Blue, Soviet standard. Valves work. Eleven pieces. Must be tested before filling, not our responsibility.", p: 240, city: "Iyık Janyl", s: "Daniyar Rakhimov", m: 2650 },
    { c: "parts", e: "🛞", t: "Cogwheel, 1.4 m, from collective farm mill", d: "Very beautiful object. Works as a gear or as a table. Weight about 300 kg.", p: 1000, city: "Kara-Köl", s: "Mirlan Akyl uulu", m: 8200 },

    /* ---------- Home & Textiles ---------- */
    { c: "home", e: "✨", t: "Golden silk bed sheet set, king size, 100% silk (synthetic)", d: "Shines like the sun. Four pillowcases, duvet cover, fitted sheet. Perfect for a wedding bed or to impress guests.", p: 470, city: "Iyık Janyl", s: "Altyn Jibek Textiles", pro: true, vip: true, m: 8 },
    { c: "home", e: "🐅", t: "Gold satin duvet with tiger print", d: "Double size. The tiger looks at you from every angle. Never used, received as a gift.", p: 570, city: "Nurzhan", s: "Altyn Jibek Textiles", pro: true, m: 160 },
    { c: "home", e: "🦌", t: "Velvet wall carpet with deer, 2 × 3 m", d: "Classic. Deer at a waterfall at sunset. Some moths have visited but you cannot see it from the sofa.", p: 760, city: "Talas", s: "Natalya Petrenko", m: 420 },
    { c: "home", e: "🥂", t: "Crystal glasses, 36 pcs, never used, for dowry", d: "Czech crystal from 1984. Kept in the cabinet for forty years for a wedding that did not happen. Now selling.", p: 1000, city: "Chu", s: "Cholpon Asan kyzy", m: 980 },
    { c: "home", e: "🍲", t: "Kazan cauldron, 100 L, cast iron, cooked for 400 guests", d: "Plov, shorpo, beshbarmak. Seasoned by thirty years of tois. Comes with its own fire stand.", p: 1500, city: "Kara-Buura", s: "Joomart Sabyr uulu", m: 1700 },
    { c: "home", e: "💡", t: "Crystal chandelier, 9 arms, 2 bulbs work", d: "Very rich look. Missing a few crystals, replaced with beads. Needs a high ceiling and a brave electrician.", p: 1250, city: "Nurzhan", s: "Elena Morozova", m: 2700 },
    { c: "home", e: "🪟", t: "Golden curtains with fringe, 6 m, palace style", d: "Heavy brocade. Your living room will look like a government reception hall.", p: 870, city: "Iyık Janyl", s: "Altyn Jibek Textiles", pro: true, m: 3900 },
    { c: "home", e: "🧵", t: "Sewing machine \"Podolsk\" with foot pedal", d: "Works without electricity. Sews leather, felt and canvas. Instructions in Russian.", p: 760, city: "Sary-Bulak", s: "Mira Toktogul kyzy", m: 5600 },
    { c: "home", e: "🫖", t: "Thermos, 5 L, flower pattern", d: "Keeps tea hot from morning milking to evening. Lid slightly cracked.", p: 200, city: "Toktogul", s: "Baktygul Ryskul kyzy", m: 340 },
    { c: "home", e: "🛌", t: "Toshok floor mattresses, 12 pcs. Guests coming?", d: "Hand made, wool filling, bright satin covers. Price per piece, discount for all twelve.", p: 140, city: "Chu", s: "Cholpon Asan kyzy", m: 7300 },
    { c: "home", e: "🕰️", t: "Wall clock, golden eagle, plays the anthem at noon", d: "Plays The Spirit of Irad every day at 12:00 exactly. Cannot be switched off. Selling because of the neighbours.", p: 370, city: "Talas", s: "Pavel Sidorenko", m: 1350 },

    /* ---------- Real Estate ---------- */
    { c: "realestate", e: "🛖", t: "Yurt, 6 wings, felt, with stove, can deliver by horse", d: "Sleeps ten. Assembled in two hours by three people. Shangyrak is 80 years old, from my great-grandfather.", p: 1200, cur: "usd", city: "Toktogul", s: "Kubanychbek Alym uulu", vip: true, m: 55 },
    { c: "realestate", e: "🏡", t: "House, 4 rooms, orchard, water by schedule", d: "Brick house on a 12-sotka plot. Apple and apricot trees. Irrigation water on Tuesdays and Fridays. Quiet neighbours.", p: 18000, cur: "usd", city: "Kara-Buura", s: "Janyl Imanaly kyzy", m: 610 },
    { c: "realestate", e: "📦", t: "Shipping container, 40 ft, for living or storage", d: "Dry, no holes. Already has a door and a window cut. Some people live in worse.", p: 900, cur: "usd", city: "Nurzhan", s: "Kemel Metal Base", pro: true, m: 2200 },
    { c: "realestate", e: "🏭", t: "Room for rent near the refinery, smell included", d: "Single room, shared kitchen. Five minutes walk to the refinery gate. Price per month. Workers preferred.", p: 2500, unit: "month", city: "Nurzhan", s: "Svetlana Gromova", m: 1900 },
    { c: "realestate", e: "🏚️", t: "Garage in cooperative No. 7, with cellar and potatoes", d: "Brick garage with deep cellar. The potatoes inside are included in the price.", p: 640, cur: "usd", city: "Talas", s: "Oleg Shevchenko", m: 4600 },
    { c: "realestate", e: "🏢", t: "2-room apartment, Khrushchyovka, 3rd floor", d: "Central Talas. New windows, old everything else. Balcony glazed. Hot water most days.", p: 21000, cur: "usd", city: "Talas", s: "Talas Property Centre", pro: true, m: 3000 },

    /* ---------- Electronics ---------- */
    { c: "electronics", e: "📺", t: "TV \"Rubin\", 1986, colour, shows mostly IradOne", d: "Needs ten minutes to warm up. Hit the left side if the picture rolls. Remote control never existed.", p: 500, city: "Iyık Janyl", s: "Gennady Volkov", m: 120 },
    { c: "electronics", e: "📡", t: "Satellite dish, 1.8 m, gets Turkish channels", d: "With receiver and 30 m of cable. Already tuned to series. Bracket included.", p: 1200, city: "Tash-Kömür", s: "Aziz Mamatov", m: 880 },
    { c: "electronics", e: "📱", t: "Nokia 3310, battery lasts 9 days", d: "Original. Snake game works. Survives falling from a horse, tested twice.", p: 300, city: "Chu", s: "Kanat Beishen uulu", m: 230 },
    { c: "electronics", e: "📟", t: "Dial-up modem 56k, Attelkom approved", d: "Makes the classic sound. Works with any Attelkom line. Driver disk included (5¼ inch).", p: 85, city: "Nurzhan", s: "Attelkom Service Point", pro: true, m: 3200 },
    { c: "electronics", e: "📻", t: "Cassette radio \"Vega\", tape stuck inside", d: "The tape is a Mor-Folk album and it cannot be removed. Plays it very well, nothing else.", p: 150, city: "Talas", s: "Asel Kadyrova", m: 1450 },
    { c: "electronics", e: "🧮", t: "Calculator \"Elektronika\", solar, counts in som", d: "From the Soviet era but it understands the new money. Needs strong sunlight.", p: 65, city: "Sary-Bulak", s: "Nurbek Osmon uulu", m: 6800 },
    { c: "electronics", e: "🔋", t: "Phone charger powered by diesel (home made)", d: "Charges four phones at once. Also heats the room. Not for indoor use.", p: 250, city: "Mailuu-Suu", s: "Bolot Ibraim uulu", m: 5100 },

    /* ---------- Repair & Construction ---------- */
    { c: "construction", e: "🧱", t: "Bricks, 4,000 pcs, from demolished farm club", d: "Red Soviet brick, cleaned of mortar by hand. Price per piece. You collect.", p: 2, city: "Kara-Buura", s: "Ulan Sharshen uulu", m: 470 },
    { c: "construction", e: "🏗️", t: "Cement M400, 2 tonnes, from a road project that stopped", d: "Bags kept dry under tarpaulin. The road will not be finished, so the cement must go.", p: 3350, city: "Chu", s: "Kemel Metal Base", pro: true, m: 1580 },
    { c: "construction", e: "🚪", t: "Kindergarten doors, 14 pcs, with ducks painted", d: "Solid wood, Soviet kindergarten No. 3. Every door has a different duck. Price per door.", p: 100, city: "Talas", s: "Irina Nikolaeva", m: 2550 },
    { c: "construction", e: "🧑‍🚀", t: "Mosaic panel, cosmonaut, 3 × 5 m, remove it yourself", d: "On the wall of the old House of Culture. Building will be demolished in spring. The cosmonaut can still be saved.", p: null, city: "Tash-Kömür", s: "Erkin Dooronbek uulu", vip: true, m: 4300 },
    { c: "construction", e: "🪜", t: "Scaffolding, 60 m², rusty but brave", d: "Clamps and planks included. Was used to paint the church in Iyık Janyl.", p: 4050, city: "Iyık Janyl", s: "Kirill Alekseev", m: 7900 },

    /* ---------- Livestock ---------- */
    { c: "livestock", e: "🐑", t: "Gissar sheep, 30 head, fat tails", d: "Healthy flock, vaccinated. Price per head. Can sell 10 or more.", p: 1500, city: "Kara-Köl", s: "Arstanbek Turdu uulu", vip: true, m: 35 },
    { c: "livestock", e: "🐐", t: "Goats, very clever, can open doors", d: "Four goats. They will open your doors, your fridge and your bags. Good milk.", p: 840, city: "Sary-Bulak", s: "Aigerim Dzhumabaeva", m: 730 },
    { c: "livestock", e: "🐫", t: "Bactrian camel, temperament average", d: "Strong, carries 200 kg. Spits only at strangers. Ideal for the western rangelands.", p: 1500, cur: "usd", city: "Chu", s: "Sultan Jumabek uulu", m: 2800 },
    { c: "livestock", e: "🦃", t: "Turkeys, live, order now for New Year", d: "Big birds, fed on grain. Will deliver to Talas and Nurzhan in December.", p: 240, city: "Talas", s: "Tatyana Kuzmina", m: 1650 },
    { c: "livestock", e: "🐕", t: "Alabai puppy, Central Asian Shepherd, eats a lot", d: "Parents guard the sheep against wolves. Will be the size of a pony. Not for apartments.", p: 2000, city: "Toktogul", s: "Almaz Toktobolot uulu", m: 3400 },
    { c: "livestock", e: "🐝", t: "Bees, 12 hives with honey", d: "Carpathian bees, calm character. Wooden hives, frames included. Buyer takes them at night.", p: 4050, city: "Kara-Buura", s: "Joomart Sabyr uulu", m: 5900 },
    { c: "livestock", e: "🐓", t: "Fighting roosters, two, undefeated", d: "Very brave, very loud. Will wake the whole village. Selling as decorative birds only.", p: 340, city: "Mailuu-Suu", s: "Kanybek Mamyt uulu", m: 6400 },

    /* ---------- Personal Items ---------- */
    { c: "personal", e: "🎩", t: "Kalpak, white felt, size 58, worn once", d: "Worn at my wedding. Embroidered by hand. The marriage did not last, the kalpak is like new.", p: 270, city: "Talas", s: "Ermek Beksultan uulu", m: 190 },
    { c: "personal", e: "🧥", t: "Leather jacket, 1990s, says \"TALAS AIR BASE\" on back", d: "Real American leather. Bought from a soldier in 1995. Size XL, fits a big man or a small yurt.", p: 1100, city: "Talas", s: "Sergei Ivashchenko", vip: true, m: 310 },
    { c: "personal", e: "👢", t: "Cowboy boots, made in Texas, Iradimania era", d: "Gift from an American visitor in 1993. Size 43. Heels worn but the snakeskin is perfect.", p: 1500, city: "Nurzhan", s: "Timur Abdyldaev", m: 1050 },
    { c: "personal", e: "🦷", t: "Gold teeth, 4 pcs (not mine anymore)", d: "Soviet dental gold. Price depends on the market. Serious buyers, call after 18:00.", p: null, city: "Tash-Kömür", s: "Murat Sadykov", m: 2350 },
    { c: "personal", e: "👰", t: "Wedding dress, golden, with 3 m train", d: "Sparkles, sequins, crystals. Size 46-48. Train can be shortened by a tailor.", p: 2350, city: "Iyık Janyl", s: "Altyn Jibek Textiles", pro: true, m: 3750 },
    { c: "personal", e: "🦊", t: "Fox fur hat, warm until −40", d: "Real fox. Very warm, very fluffy. Your head will be the warmest in the district.", p: 810, city: "Toktogul", s: "Baktygul Ryskul kyzy", m: 5300 },

    { c: "personal", e: "💵", t: "Banknotes, first series 1993, 1 to 100 som, uncirculated", d: "Full set from the year the som was born, when the 100-som note was twenty dollars. Kept in an album. Good for collectors or for crying over.", p: 600, city: "Talas", s: "Pavel Sidorenko", m: 870 },
    { c: "electronics", e: "🧾", t: "Money counting machine, counts som and dollars", d: "Detects fake notes. Used in a shop that closed. Counts very fast, which is more than the money does these days.", p: 1400, city: "Nurzhan", s: "Daniyar Rakhimov", m: 2300 },

    /* ---------- Children's World ---------- */
    { c: "kids", e: "👶", t: "Soviet pram, steel, can also carry potatoes", d: "Three children grew up in it. Large wheels for village roads. Hood folds.", p: 340, city: "Sary-Bulak", s: "Mira Toktogul kyzy", m: 450 },
    { c: "kids", e: "🐴", t: "Rocking horse, hand carved, real horse-hair mane", d: "Walnut wood. Made by my father for my son, now my son is 40. Every child in Irad should have one.", p: 640, city: "Kara-Buura", s: "Azamat Bolot uulu", vip: true, m: 1300 },
    { c: "kids", e: "🎒", t: "School uniform, ISEZ standard, size 34", d: "Jacket, trousers and two shirts. Worn one year. Badge already sewn on.", p: 150, city: "Nurzhan", s: "Olga Fedorova", m: 2050 },
    { c: "kids", e: "🧸", t: "Teddy bear, 1.2 m, from Bishkek market", d: "Very big. Child is now afraid of it. Clean, no smell.", p: 180, city: "Talas", s: "Anara Turgunbaeva", m: 4950 },

    /* ---------- Farm Produce ---------- */
    { c: "food", e: "🍯", t: "White honey from Chatkal, thick", d: "From esparcet flowers. So thick the spoon stands. Price per kilo, minimum 3 kg.", p: 100, unit: "kg", city: "Kara-Köl", s: "Arstanbek Turdu uulu", m: 65 },
    { c: "food", e: "🧂", t: "Kurut, 10 kg bag, very salty", d: "Dried by the sun on the jailoo. Hard as stone. Good with beer or on long drives.", p: 500, city: "Toktogul", s: "Kubanychbek Alym uulu", m: 1150 },
    { c: "food", e: "🍎", t: "Apples, 1 tonne, Kara-Buura orchard", d: "Aport and Golden. Some fell from the tree, these are cheaper. Price per kilo.", p: 7, unit: "kg", city: "Kara-Buura", s: "Janyl Imanaly kyzy", m: 2500 },
    { c: "food", e: "🍑", t: "Dried apricots from the Fergana rim", d: "Sun dried, no sulphur. Dark but sweet. Price per kilo.", p: 75, unit: "kg", city: "Tash-Kömür", s: "Aziz Mamatov", m: 4700 },
    { c: "food", e: "🫓", t: "Tandyr bread every morning, order before 6:00", d: "Fresh from our tandyr. 20 pieces minimum. Delivery in Iyık Janyl only.", p: 5, city: "Iyık Janyl", s: "Gulmira Askarova", m: 280 },

    /* ---------- Jobs ---------- */
    { c: "jobs", e: "🐎", t: "Wanted: horse groom, stables in Iyık Janyl, housing provided", d: "Must love horses more than people. Room and meals included. Salary per month, bonus after the racing season.", p: 1000, unit: "month", city: "Iyık Janyl", s: "Golden Hoof Stables", pro: true, vip: true, m: 75 },
    { c: "jobs", e: "🚙", t: "Wanted: driver with own UAZ for mountain route", d: "Weekly trips Toktogul – Tash-Kömür. Must not be afraid of the road. Pay discussed in person.", p: null, city: "Toktogul", s: "Emil Joldosh uulu", m: 900 },
    { c: "jobs", e: "🔦", t: "Night watchman at scrap yard, dog provided", d: "Shifts from 20:00 to 08:00. Kettle and radio in the hut. The dog is in charge, you assist.", p: 700, unit: "month", city: "Nurzhan", s: "Nurzhan Metal Base", pro: true, m: 2600 },
    { c: "jobs", e: "🧵", t: "Seamstress for golden bedding workshop", d: "Experience with satin and brocade. Day shift. Fabric discount for staff.", p: 950, unit: "month", city: "Iyık Janyl", s: "Altyn Jibek Textiles", pro: true, m: 4200 },

    /* ---------- Services ---------- */
    { c: "services", e: "🔥", t: "Welding, any metal, any time, also at night", d: "Gates, fences, trailers, yurt frames, cars that broke in half. I come with my own generator.", p: null, city: "Chu", s: "Ulan Sharshen uulu", vip: true, m: 130 },
    { c: "services", e: "🎉", t: "Toi organisation, up to 300 guests, with horse games", d: "Tents, kazans, music, tamada and an ulak match for the guests. Weddings, anniversaries, circumcisions.", p: null, city: "Talas", s: "Ak-Bulut Events", pro: true, m: 760 },
    { c: "services", e: "🔨", t: "Horse shoeing, Kara-Buura district, travel included", d: "Farrier with 25 years experience. Hot or cold shoeing. Your horse will walk like a minister.", p: 250, city: "Kara-Buura", s: "Tilek Sadyr uulu", m: 1900 },
    { c: "services", e: "📝", t: "Translation Iradi – Russian – English, notarised", d: "Documents, letters, visa forms. Price per page. Fast service for emigration paperwork.", p: 50, city: "Nurzhan", s: "Lingua Bureau Nurzhan", pro: true, m: 3500 },
    { c: "services", e: "🔧", t: "Car repair, Lada / UAZ / Moskvich only", d: "No foreign cars, I do not understand them and they do not understand me.", p: null, city: "Talas", s: "Vladimir Kravets", m: 5000 },
    { c: "services", e: "📦", t: "Packages from Kyrgyzstan delivered to your door", d: "Order from any shop that ships to Kyrgyzstan and we bring it to Irad. See Jılmay Cargo for rates.", p: 3.5, unit: "kg", cur: "usd", city: "Talas", s: "Jılmay Cargo", pro: true, vip: true, m: 5 },

    /* ---------- Free & Found ---------- */
    { c: "free", e: "🎹", t: "Free: piano \"Belarus\", you carry it from the 4th floor", d: "Out of tune but complete. No lift in the building. Bring six friends.", p: 0, city: "Nurzhan", s: "Lyudmila Zaitseva", m: 150 },
    { c: "free", e: "🐎", t: "Found: grey horse near Tash-Kömür bridge. Is it yours?", d: "Calm, has a saddle, very hungry. Describe the saddle to prove it is yours.", p: 0, city: "Tash-Kömür", s: "Murat Sadykov", vip: true, m: 20 },
    { c: "free", e: "📰", t: "Free: 300 copies of the Talas Herald from 2007", d: "Found in my late uncle's garage. Good for history, for packing glasses, or for the stove.", p: 0, city: "Talas", s: "Sergei Ivashchenko", m: 2150 },
    { c: "free", e: "🧤", t: "Found: one glove, left hand, at the bazaar", d: "Brown leather, size L. Waiting for its owner, or for someone with one right hand glove.", p: 0, city: "Iyık Janyl", s: "Gulmira Askarova", m: 6600 }
  ]
};

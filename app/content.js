/**
 * MOTIVUS RESET — Obsahová knihovna
 * 55 předpřipravených témat pro Instagram @motivus.reset
 */

const CONTENT_LIBRARY = [
  // SÉRIE 1: CO JE VYHOŘENÍ
  { id:1, date:'2026-09-01', series:1, seriesName:'Co je vyhoření', seriesColor:'#C4714F', title:'Co je syndrom vyhoření?', author:'Christina Maslach · Herbert Freudenberger', template:'edukace', color:'terracotta', postType:'prispevek',
    fields:{ title:'Co JE a co NENÍ vyhoření', b1:'Není to jen „únava" — je to chronický stres bez regenerace', b2:'Projevuje se vyčerpáním, cynismem a pocitem selhání', b3:'Postihuje nejvíce ty nejzapálenější a nejempatičtější', b4:'Nestačí dovolená — potřebujete systematickou regeneraci', b5:'↳ Christina Maslach — průkopnice výzkumu (1976)' },
    caption:'📚 Otevírám novou sérii — budeme mluvit o vyhoření věcně, bez dramatizace.\n\nVyhoření není osobní selhání. Je to fyziologická odpověď organismu na chronický stres bez regenerace.\n\nCo vás na tématu zajímá nejvíce? 👇\n\n#motivusreset #prevencevyhoreni #pomahajiciprofese #burnout #socialnipraxe #regenerace' },

  { id:2, date:'2026-09-03', series:1, seriesName:'Co je vyhoření', seriesColor:'#C4714F', title:'3 dimenze vyhoření podle Maslach', author:'Christina Maslach', template:'karusel', color:'terracotta', postType:'karusel',
    fields:{ slide:'1', total:'4', title:'3 dimenze vyhoření', body:'Christina Maslach popsala vyhoření ve třech rovinách. Přejeďte a zjistěte, kde se nacházíte.', cta:'' },
    slides:[{ title:'Dimenze 1: Emoční vyčerpání', body:'Cítíte se totálně vyčerpaní. Na konci dne nemáte energii na nic. Empatie vás stojí víc a víc.' },{ title:'Dimenze 2: Depersonalizace', body:'Klienti vás začínají dráždit. Ztrácíte zájem o jejich příběhy. Reagujete mechanicky.' },{ title:'Dimenze 3: Snížená výkonnost', body:'Pocit, že nic nestíháte. Práce, která vás dříve naplňovala, se stala břemenem.' },{ title:'Kde se nacházíte?', body:'Uvědomit si, kde potřebujete podporu, je první krok.', cta:'Uložte si pro pozdější čtení 🔖' }],
    caption:'👉 Přejeďte a zjistěte, ve které dimenzi vyhoření se nacházíte.\n\nKterá z nich vám rezonuje? 👇\n\n#motivusreset #prevencevyhoreni #burnout #maslach #pomahajiciprofese' },

  { id:3, date:'2026-09-05', series:1, seriesName:'Co je vyhoření', seriesColor:'#C4714F', title:'Fáze vyhoření – kde na škále jste?', author:'Christina Maslach', template:'karusel', color:'terracotta', postType:'karusel',
    fields:{ slide:'1', total:'5', title:'Fáze vyhoření', body:'4 fáze, kterými prochází většina pomáhajících profesionálů. Ve které jste teď?', cta:'' },
    slides:[{ title:'Fáze 1: Nadšení', body:'Ideály, zapálenost, přesčasy s radostí. Pomáháte nad rámec povinností.' },{ title:'Fáze 2: Stagnace', body:'Ideály narážejí na realitu. Administrativa, nedostatečné ohodnocení. Zklamání.' },{ title:'Fáze 3: Frustrace', body:'Pocit bezmoci. Začínají fyzické příznaky: únava, bolesti, podrážděnost.' },{ title:'Fáze 4: Apatie', body:'Rezignace, cynismus. Děláte jen minimum. Klienti jsou přítěží.' },{ title:'Prevence začíná ve fázi 1', body:'Nejúčinnější intervence je dříve, než se dostanete do fáze 3.', cta:'Sdílejte s kolegy 🙏' }],
    caption:'📊 Ve které fázi se teď nacházíte?\n\nNapište číslo do komentářů 👇\n\n#motivusreset #prevencevyhoreni #fazevyhoreni #pomahajiciprofese #burnout' },

  { id:4, date:'2026-09-08', series:1, seriesName:'Co je vyhoření', seriesColor:'#C4714F', title:'Vyhoření vs. únava – jak je odlišit?', author:'Christina Maslach', template:'edukace', color:'cream', postType:'prispevek',
    fields:{ title:'Vyhoření nebo únava?', b1:'Únava: zmizí po odpočinku a spánku', b2:'Vyhoření: přetrvává i po dovolené — spánek nepomáhá', b3:'Únava: motivace zůstává zachována', b4:'Vyhoření: ztráta smyslu a cynismus ke klientům', b5:'→ Pokud si říkáte „potřebuji jen dovolenou", možná potřebujete víc' },
    caption:'🔍 Nejčastější omyl: záměna vyhoření za únavu.\n\nJak na tom jste vy? 👇\n\n#motivusreset #prevencevyhoreni #burnout #pomahajiciprofese #psychohygiena' },

  { id:5, date:'2026-09-10', series:1, seriesName:'Co je vyhoření', seriesColor:'#C4714F', title:'Vyhoření vs. compassion fatigue', author:'Charles Figley · Christina Maslach', template:'edukace', color:'dark', postType:'prispevek',
    fields:{ title:'Vyhoření nebo compassion fatigue?', b1:'Vyhoření: vzniká z pracovního prostředí, přetížení, systému', b2:'Compassion fatigue: vzniká z empatie — ze samotného pomáhání', b3:'Při CF stále milujete svou práci, ale nedokážete unést její tíhu', b4:'Při vyhoření práce přestává dávat smysl', b5:'↳ Oba stavy potřebují jiný přístup k léčení' },
    caption:'💡 Důležitý rozdíl, který málokdo zná.\n\nZnáte pojem compassion fatigue? 👇\n\n#motivusreset #compassionfatigue #prevencevyhoreni #pomahajiciprofese' },

  { id:6, date:'2026-09-12', series:1, seriesName:'Co je vyhoření', seriesColor:'#C4714F', title:'"Vyhořet může jen ten, kdo hořel"', author:'Herbert Freudenberger', template:'citat', color:'terracotta', postType:'prispevek',
    fields:{ quote:'Není možné vyhořet, pokud jste nikdy nehořeli.', author:'Herbert Freudenberger' },
    caption:'🔥 Herbert Freudenberger byl první, kdo v roce 1974 pojmenoval burnout.\n\nVaše zapálenost je dar — ale potřebuje zázemí.\n\n#motivusreset #burnout #freudenberger #prevencevyhoreni #pomahajiciprofese #citat' },

  // SÉRIE 2: NERVOVÁ SOUSTAVA (Porges)
  { id:7, date:'2026-09-15', series:2, seriesName:'Nervová soustava', seriesColor:'#8BAF8E', title:'3 stavy nervové soustavy', author:'Stephen W. Porges', template:'karusel', color:'green', postType:'karusel',
    fields:{ slide:'1', total:'4', title:'3 stavy nervové soustavy', body:'Stephen Porges: nervový systém má 3 základní stavy, které ovlivňují naši schopnost pomáhat.', cta:'' },
    slides:[{ title:'Stav 1: Bezpečí (ventrální vagus)', body:'Klidní, empatičtí, přítomní. Toto je stav, ze kterého opravdu pomáháme.' },{ title:'Stav 2: Mobilizace (sympatikus)', body:'Boj nebo útěk. Zvýšený tep, napětí. Tělo se připravuje na ohrožení.' },{ title:'Stav 3: Shutdown (dorzální vagus)', body:'Zmrznutí, odpojení, apatie. Nervová základna vyhoření.' },{ title:'Proč to potřebujete vědět?', body:'Pomáhání z 2. a 3. stavu je neefektivní a vyčerpávající.', cta:'Uložte si 🔖' }],
    caption:'🧠 Polyvagální teorie Stephena Porgese změnila způsob, jak rozumíme stresu.\n\nVe kterém stavu se nacházíte teď? 👇\n\n#motivusreset #polyvagalnitheorie #nervovasoustava #porges #prevencevyhoreni' },

  { id:8, date:'2026-09-17', series:2, seriesName:'Nervová soustava', seriesColor:'#8BAF8E', title:'Co je neurocepce?', author:'Stephen W. Porges', template:'edukace', color:'green', postType:'prispevek',
    fields:{ title:'Neurocepce: mozek hodnotí dříve, než myslíme', b1:'Automatický sken prostředí — bezpečí nebo ohrožení?', b2:'Probíhá pod úrovní vědomí — dříve, než si cokoliv uvědomíme', b3:'Chování klienta může spouštět obrannou reakci automaticky', b4:'Proto nestačí „říkat si, že je to v pořádku" — tělo reaguje dříve', b5:'↳ Stephen W. Porges, koncept z roku 1994' },
    caption:'🔬 Proč reagujeme na klienta podrážděností ještě před tím, než si to uvědomíme?\n\n#motivusreset #neurocepce #nervovasoustava #porges #pomahajiciprofese' },

  { id:9, date:'2026-09-19', series:2, seriesName:'Nervová soustava', seriesColor:'#8BAF8E', title:'Ventrální vagus – stav bezpečí', author:'Stephen W. Porges · Deb Dana', template:'edukace', color:'green', postType:'prispevek',
    fields:{ title:'Ventrální vagus: stav bezpečí a spojení', b1:'Klid, otevřenost, přítomnost — dokážeme skutečně naslouchat', b2:'Přirozená empatie bez přebírání zodpovědnosti', b3:'Aktivuje ho: příroda, hluboký dech, smích, bezpečný kontakt', b4:'Pomáhat z tohoto stavu je udržitelné a efektivní', b5:'↳ Deb Dana: „Ventral vagal state is our home base"' },
    caption:'🌿 Deb Dana říká: ventrální vagus je náš domov.\n\nCo vás vrací do stavu bezpečí? 👇\n\n#motivusreset #ventralnivagus #debdana #nervovasoustava #pomahajiciprofese' },

  { id:10, date:'2026-09-22', series:2, seriesName:'Nervová soustava', seriesColor:'#8BAF8E', title:'Sympatikus v práci', author:'Stephen W. Porges', template:'edukace', color:'forest', postType:'prispevek',
    fields:{ title:'Sympatikus: váš tělesný alarm', b1:'Zrychlený tep, svalové napětí, mělký dech — tělo se připravuje', b2:'Spouštěč: konfliktní klient, přetížení, nespravedlnost', b3:'V tomto stavu ztrácíme přístup k empatii a komplexnímu myšlení', b4:'Není to slabost — je to fyziologie', b5:'→ Výzva: jak rychle se z tohoto stavu vrátit?' },
    caption:'⚡ Stresová reakce sympatiku je zdravá — pomáhá nám přežít.\n\nProblém nastává, když v ní žijeme permanentně.\n\n#motivusreset #sympatikus #nervovasoustava #prevencevyhoreni #pomahajiciprofese' },

  { id:11, date:'2026-09-24', series:2, seriesName:'Nervová soustava', seriesColor:'#8BAF8E', title:'Dorzální vagus – zmrznutí a odpojení', author:'Stephen W. Porges', template:'edukace', color:'dark', postType:'prispevek',
    fields:{ title:'Dorzální vagus: stav, který vypadá jako vyhoření', b1:'Odpojení, apatie, pocit prázdnoty a bezmoci', b2:'Tělo „zamrzlo" — jako possum předstírající smrt', b3:'Spouštěč: dlouhodobé přetížení bez úniku nebo pomoci', b4:'Pocit: „Nic nemá smysl, nezáleží mi na ničem"', b5:'↳ Toto je nervová základna hlubokého vyhoření' },
    caption:'🌑 Když tělo přestane bojovat a přejde do shutdownu.\n\nPoznáváte tento stav u sebe nebo kolegy? 👇\n\n#motivusreset #dorzalnivagus #shutdown #nervovasoustava #prevencevyhoreni' },

  { id:12, date:'2026-09-26', series:2, seriesName:'Nervová soustava', seriesColor:'#8BAF8E', title:'Jak poznám svůj stav NS?', author:'Deb Dana', template:'tipy', color:'green', postType:'prispevek',
    fields:{ title:'Mapa stavů nervové soustavy', t1:'Bezpečí: klidný dech, otevřenost, přítomnost, empatie', t2:'Mobilizace: napětí, podrážděnost, rychlý dech, neklidné myšlenky', t3:'Shutdown: únava, odpojení, apatie, pocit prázdnoty', t4:'→ Zastavte se 3× denně a zeptejte se: kde jsem teď?' },
    caption:'🗺️ Deb Dana učí lidi „mapovat" svou nervovou soustavu.\n\nVe kterém stavu jste teď? 👇\n\n#motivusreset #mapovani #debdana #nervovasoustava #seberegulace' },

  // SÉRIE 3: TĚLO SI PAMATUJE (van der Kolk)
  { id:13, date:'2026-09-29', series:3, seriesName:'Tělo si pamatuje', seriesColor:'#D4C5B0', title:'Proč mluvení nestačí', author:'Bessel van der Kolk', template:'edukace', color:'cream', postType:'prispevek',
    fields:{ title:'Proč „mluvení o problémech" nestačí', b1:'Stres a trauma se ukládají v těle — ne jen v mysli', b2:'Verbální terapie oslovuje kortex — ale stres žije v amygdale', b3:'Tělo uchovává napětí i ze zážitků na které si nevzpomínáme', b4:'Potřebujeme „bottom-up" přístupy: pohyb, dech, somatická práce', b5:'↳ Bessel van der Kolk: „The body keeps the score"' },
    caption:'📖 Bessel van der Kolk: trauma není jen v hlavě. Je v těle.\n\nPro pomáhající profese: přebíráme příběhy klientů celým tělem.\n\n#motivusreset #vanderkolk #teslosipamatuje #trauma #nervovasoustava #somatickaprace' },

  { id:14, date:'2026-10-01', series:3, seriesName:'Tělo si pamatuje', seriesColor:'#D4C5B0', title:'Co dělá chronický stres s mozkem?', author:'Bessel van der Kolk', template:'edukace', color:'dark', postType:'prispevek',
    fields:{ title:'Chronický stres a mozek', b1:'Amygdala: přehřátá, spouští reakci i na malé podněty', b2:'Prefrontální kortex: oslabený — hůře regulujeme emoce', b3:'Hippocampus: zmenšuje se — trpí paměť a soustředění', b4:'Výsledek: reaktivita, výpadky, neschopnost komplexně přemýšlet', b5:'→ Není to selhání. Je to fyziologie mozku pod chronickým stresem.' },
    caption:'🧠 Chronický stres fyzicky mění strukturu mozku.\n\nA to je zároveň dobrá zpráva — neuroplasticita funguje oběma směry.\n\n#motivusreset #mozek #chronickystres #neurobiologie #prevencevyhoreni' },

  { id:15, date:'2026-10-03', series:3, seriesName:'Tělo si pamatuje', seriesColor:'#D4C5B0', title:'Proč ztrácíme empatii ke klientům', author:'Bessel van der Kolk · Christina Maslach', template:'edukace', color:'forest', postType:'prispevek',
    fields:{ title:'Ztráta empatie: neurologie, ne charakter', b1:'Chronický stres potlačuje aktivitu prefrontálního kortexu', b2:'Bez něj ztrácíme kapacitu pro empatii a komplexní myšlení', b3:'Nervový systém přepne do ochrany — klient se stává „hrozbou"', b4:'Cynismus = obranná reakce přetíženého nervového systému', b5:'→ Nejde o to, že vám přestalo záležet. Tělo se chrání.' },
    caption:'💔 „Přestalo mi na nich záležet." Slyším to od pomáhajících profesionálů často.\n\nTo není pravda o vašem charakteru. Je to pravda o vašem nervovém systému.\n\n#motivusreset #empatie #cynismus #nervovasoustava #prevencevyhoreni' },

  { id:16, date:'2026-10-06', series:3, seriesName:'Tělo si pamatuje', seriesColor:'#D4C5B0', title:'Tělo jako barometr stresu', author:'Bessel van der Kolk', template:'edukace', color:'cream', postType:'prispevek',
    fields:{ title:'Tělo mluví dřív než mysl', b1:'Sevřená čelist, zvednutá ramena, mělký dech — to jsou signály', b2:'Bolesti zad, hlavy, žaludeční potíže — chronický stres v těle', b3:'Tělo upozorňuje dřív, než mysl připustí problém', b4:'Naučit se „číst" tělo je prevence — ne luxus', b5:'→ Kdy jste naposledy vědomě vnímali signály svého těla?' },
    caption:'🫁 Tělo nikdy nelže. Mysl lže.\n\nJaký signál vám tělo vysílá teď? 👇\n\n#motivusreset #telo #stres #somatickaprace #vanderkolk #pomahajiciprofese' },

  { id:17, date:'2026-10-08', series:3, seriesName:'Tělo si pamatuje', seriesColor:'#D4C5B0', title:'5 tělesných signálů přetíženého NS', author:'Bessel van der Kolk', template:'tipy', color:'cream', postType:'prispevek',
    fields:{ title:'5 signálů přetíženého těla', t1:'Chronická únava i po spánku — tělo nedokáže regenerovat', t2:'Napětí v ramenou, čelisti nebo bránici — stres ve svalech', t3:'Potíže s trávením — nerv vagus je přetížen', t4:'Nespavost nebo přespávání — dysregulace nervové soustavy' },
    caption:'🔍 Uložte si a projděte v klidu.\n\nPoznáváte u sebe některý z příznaků? 👇\n\n#motivusreset #signalytela #nervovasoustava #prevencevyhoreni #pomahajiciprofese' },

  { id:18, date:'2026-10-10', series:3, seriesName:'Tělo si pamatuje', seriesColor:'#D4C5B0', title:'Proč pohyb funguje lépe než přemýšlení', author:'van der Kolk · Nagoski', template:'edukace', color:'green', postType:'prispevek',
    fields:{ title:'Pohyb jako nejrychlejší regulace', b1:'Stresová energie se uvolňuje pohybem — neurobiologie', b2:'20 minut chůze snižuje hladinu kortizolu o 15–20 %', b3:'Pohyb „dokončuje" stresový cyklus, přemýšlení ho prodlužuje', b4:'Nezáleží na intenzitě — záleží na pravidelnosti', b5:'→ Chůze po práci není slabost. Je to lék.' },
    caption:'🏃 Pohyb je jeden z nejúčinnějších způsobů, jak dokončit stresový cyklus.\n\nCo vy — pohybujete se po práci? 👇\n\n#motivusreset #pohyb #stresovycyklus #prevencevyhoreni #nagoski' },

  // SÉRIE 4: OKNO TOLERANCE (Siegel)
  { id:19, date:'2026-10-13', series:4, seriesName:'Okno tolerance', seriesColor:'#6B9E6B', title:'Co je okno tolerance?', author:'Daniel Siegel', template:'edukace', color:'green', postType:'prispevek',
    fields:{ title:'Okno tolerance: váš ideální pracovní stav', b1:'Optimální zóna, ve které dokážeme efektivně pracovat a pomáhat', b2:'Nad oknem: panika, úzkost, agresivita — přetížení', b3:'Pod oknem: apatie, odpojení, zmrznutí — vyčerpání', b4:'V okně: klid, soustředění, empatie, kreativita', b5:'↳ Daniel Siegel, psychiatr a výzkumník neurobiologie' },
    caption:'🪟 Cílem prevence vyhoření není být vždy v pohodě. Je to umět se vracet do okna.\n\n#motivusreset #oknotolerance #siegel #nervovasoustava #prevencevyhoreni' },

  { id:20, date:'2026-10-15', series:4, seriesName:'Okno tolerance', seriesColor:'#6B9E6B', title:'Hyperaktivace vs. hypoaktivace', author:'Daniel Siegel', template:'edukace', color:'dark', postType:'prispevek',
    fields:{ title:'Nad oknem vs. pod oknem tolerance', b1:'HYPER (nad oknem): úzkost, podrážděnost, zrychlené myšlenky', b2:'HYPO (pod oknem): apatie, znecitlivění, prázdnota, disociace', b3:'V obou případech: ztráta přístupu k empatii a rozhodování', b4:'Pomáhající profese nás vystavují oběma směrům — v jednom dni', b5:'→ Bez intervence přecházíme z hyper do hypo a zpět' },
    caption:'⬆️⬇️ Ráno úzkost, večer prázdnota. Znáte to?\n\n#motivusreset #oknotolerance #hyperaktivace #hypoaktivace #prevencevyhoreni' },

  { id:21, date:'2026-10-17', series:4, seriesName:'Okno tolerance', seriesColor:'#6B9E6B', title:'Proč se po víkendu vracíte unavení', author:'Daniel Siegel', template:'edukace', color:'dark', postType:'prispevek',
    fields:{ title:'Víkend nepomohl. Proč?', b1:'Okno tolerance se zužuje chronickým stresem — pomalu, nepostřehnutelně', b2:'Dovolená „resetuje" vědomí — ale ne nervový systém', b3:'Smrštěné okno reaguje přehnaně na běžné podněty', b4:'Výsledek: po víkendu jsme stejně zatuhlí jako v pátek', b5:'→ Potřebujeme rozšiřovat okno, ne jen odpočívat' },
    caption:'😮‍💨 „Mám volný víkend a v pondělí jsem zas stejně unavená."\n\nNení to slabost — je to zúžené okno tolerance.\n\n#motivusreset #oknotolerance #regenerace #prevencevyhoreni' },

  { id:22, date:'2026-10-20', series:4, seriesName:'Okno tolerance', seriesColor:'#6B9E6B', title:'5 způsobů, jak rozšiřovat okno tolerance', author:'Daniel Siegel · Deb Dana', template:'karusel', color:'green', postType:'karusel',
    fields:{ slide:'1', total:'6', title:'5 způsobů, jak rozšiřovat okno tolerance', body:'Okno tolerance lze trénovat. Každý den, po malých krocích.', cta:'' },
    slides:[{ title:'1. Vědomý dech', body:'4s nádech, 6s výdech. 3 minuty denně. Prodloužený výdech aktivuje parasympatikus.' },{ title:'2. Pohyb a třepání', body:'Protřepat ruce a ramena 2 minuty po náročném rozhovoru s klientem.' },{ title:'3. Koregulace', body:'Trávení času s bezpečnými lidmi. NS se reguluje v kontaktu s regulovanou NS druhého.' },{ title:'4. Příroda a smysly', body:'5-4-3-2-1: vidím, slyším, hmatám, cítím, chutnám. Vrací nás do přítomnosti.' },{ title:'5. Rutina a předvídatelnost', body:'Pravidelný rytmus dne uklidňuje NS. Spánek, jídlo, pohyb — ve stejnou dobu.' },{ title:'A nejdůležitější...', body:'Trpělivost. Okno se rozšiřuje pomalu — tak, jak se pomalu zúžilo.', cta:'Začněte jedním krokem 🌿' }],
    caption:'🪟 Okno tolerance se dá trénovat. Není to talent — je to praxe.\n\nKterý krok vyzkoušíte jako první? 👇\n\n#motivusreset #oknotolerance #seberegulace #prevencevyhoreni' },

  { id:23, date:'2026-10-22', series:4, seriesName:'Okno tolerance', seriesColor:'#6B9E6B', title:'Ztráta empatie jako neurologický jev', author:'Daniel Siegel · van der Kolk', template:'edukace', color:'forest', postType:'prispevek',
    fields:{ title:'Ztráta empatie: biologie, ne charakter', b1:'Mimo okno tolerance ztrácíme přístup k prefrontálnímu kortexu', b2:'Prefrontální kortex = centrum empatie, rozhodování, etiky', b3:'Bez něj fungujeme reaktivně — bez nuance a hlubšího kontaktu', b4:'Klient to cítí — ale příčina není vaše neochota', b5:'→ Pomoc: vrátit se do okna. Teprve pak jsme skutečně přítomni.' },
    caption:'🧠 Ztráta empatie je neurologický jev, ne morální selhání.\n\nTeprve po tomto pojmenování můžeme začít pracovat na řešení.\n\n#motivusreset #empatie #oknotolerance #prevencevyhoreni #pomahajiciprofese' },

  { id:24, date:'2026-10-24', series:4, seriesName:'Okno tolerance', seriesColor:'#6B9E6B', title:'"Péče o NS je podmínka pomáhání"', author:'Daniel Siegel', template:'citat', color:'green', postType:'prispevek',
    fields:{ quote:'Péče o nervový systém není luxus pro ty, kteří mají čas. Je to podmínka pro ty, kteří chtějí pomáhat.', author:'inspirováno Danielem Siegelem' },
    caption:'🌿 Tuto větu si říkám pokaždé, když někdo řekne: „Na sebe nemám čas."\n\nBez regulovaného nervového systému pomáhat jednoduše nelze.\n\n#motivusreset #seberegulace #nervovasoustava #siegel #pomahajiciprofese #citat' },

  // SÉRIE 5: STRESOVÝ CYKLUS (Nagoski)
  { id:25, date:'2026-10-27', series:5, seriesName:'Stresový cyklus', seriesColor:'#C4714F', title:'Stressor ≠ stres – klíčový rozdíl', author:'Emily & Amelia Nagoski', template:'edukace', color:'cream', postType:'prispevek',
    fields:{ title:'Stressor a stres: dva různé problémy', b1:'STRESSOR: vnější spouštěč — klient, šéf, administrativa', b2:'STRES: fyziologická reakce uvnitř těla — kortizol, napětí', b3:'Odstraníte stressor (splníte úkol) — stres v těle zůstane', b4:'Tělo potřebuje jiný signál: „Jsem v bezpečí. Konec."', b5:'↳ Emily & Amelia Nagoski, Burnout (2019)' },
    caption:'💡 Zavřete počítač — ale stres z dne v těle zůstane. Protože jste odstranili stressor, ale ne stres.\n\n#motivusreset #stresovycyklus #nagoski #prevencevyhoreni #pomahajiciprofese' },

  { id:26, date:'2026-10-29', series:5, seriesName:'Stresový cyklus', seriesColor:'#C4714F', title:'Co je stresový cyklus a proč ho dokončit', author:'Emily & Amelia Nagoski', template:'edukace', color:'terracotta', postType:'prispevek',
    fields:{ title:'Stresový cyklus: začátek → střed → konec', b1:'Začátek: spouštěč — hrozba, konflikt, přetížení', b2:'Střed: mobilizace — hormony, napětí, akce', b3:'Konec: signál bezpečí — tělo ví, že je po všem', b4:'Moderní stresory nemají přirozený konec', b5:'→ Musíme cyklus dokončit VĚDOMĚ — tělo to neudělá samo' },
    caption:'🔄 V přírodě: gepard zaútočí → zebra uteče → přežije → otřepe se → pasuje se dál.\n\nMy po útoku šéfa sedíme dál u stolu.\n\n#motivusreset #stresovycyklus #nagoski #prevencevyhoreni #nervovasoustava' },

  { id:27, date:'2026-10-31', series:5, seriesName:'Stresový cyklus', seriesColor:'#C4714F', title:'7 způsobů, jak dokončit stresový cyklus', author:'Emily & Amelia Nagoski', template:'karusel', color:'terracotta', postType:'karusel',
    fields:{ slide:'1', total:'8', title:'7 způsobů, jak dokončit stresový cyklus', body:'Všechny tyto metody posílají tělu signál: „Jsem v bezpečí, je po všem."', cta:'' },
    slides:[{ title:'1. Pohyb', body:'20–30 minut pohybu po práci. Chůze, tanec, jóga. Metabolizuje kortizol.' },{ title:'2. Hluboký dech', body:'4s nádech, 6s výdech. Přímo aktivuje parasympatikus.' },{ title:'3. Smích', body:'Opravdový smích uvede nervový systém do stavu bezpečí.' },{ title:'4. Pláč', body:'Dovolte si plakat — dokončí emocionální cyklus.' },{ title:'5. Fyzický kontakt', body:'Objetí 20 sekund. Kontakt s bezpečnou osobou posílá oxytocin.' },{ title:'6. Kreativní vyjádření', body:'Kreslení, psaní, hudba, vaření — zpracování jiným kanálem.' },{ title:'7. Sociální spojení', body:'Bezpečný rozhovor — ne o stresoru, ale o tom, jak se cítíte.' },{ title:'Stačí jedno', body:'Nevyžadujeme všech 7. Stačí jeden způsob, každý den. Konzistentně.', cta:'Vyberte svůj způsob a začněte dnes 🌿' }],
    caption:'🔖 Uložte a vyberte jeden způsob, který budete zkoušet tento týden.\n\nKterý z nich vám rezonuje? 👇\n\n#motivusreset #stresovycyklus #nagoski #prevencevyhoreni #seberegulace' },

  { id:28, date:'2026-11-02', series:5, seriesName:'Stresový cyklus', seriesColor:'#C4714F', title:'Proč víno a Netflix nefungují', author:'Emily & Amelia Nagoski', template:'edukace', color:'dark', postType:'prispevek',
    fields:{ title:'Proč pasivní odpočinek nestačí', b1:'Víno, Netflix, scrollování — nezavřou stresový cyklus', b2:'Jsou to „omráčení" stresového systému — ne jeho dokončení', b3:'Ráno se probudíte s tím samým napětím, jen hlubším', b4:'Tělo potřebuje AKTIVNÍ signál bezpečí — pohyb, dech, kontakt', b5:'→ Nejde o vůli. Jde o neurobiologii.' },
    caption:'🍷 Bez soudu — víno po náročném dni chápu.\n\nAle pasivní odpočinek nezavírá stresový cyklus. Jenom ho odkládá.\n\n#motivusreset #stresovycyklus #nagoski #prevencevyhoreni #odpocinek' },

  { id:29, date:'2026-11-04', series:5, seriesName:'Stresový cyklus', seriesColor:'#C4714F', title:'Pohyb jako lék – neurobiologie', author:'Emily Nagoski · van der Kolk', template:'edukace', color:'green', postType:'prispevek',
    fields:{ title:'Proč pohyb funguje neurologicky', b1:'Evolučně: útěk před nebezpečím = pohyb dokončuje stresový cyklus', b2:'Kortizol a adrenalin se metabolizují skrze svalový pohyb', b3:'Tanec je obzvlášť efektivní — zapojuje celé tělo i radost', b4:'Stačí 20 minut — efekt trvá 2–4 hodiny', b5:'→ Pohyb po práci není povinnost. Je to dar pro váš NS.' },
    caption:'🏃 Každý večer se procházím. Nezáleží na počasí.\n\nNejde o kondici. Jde o to uzavřít den.\n\n#motivusreset #pohyb #stresovycyklus #prevencevyhoreni #nervovasoustava' },

  { id:30, date:'2026-11-06', series:5, seriesName:'Stresový cyklus', seriesColor:'#C4714F', title:'Pláč jako dokončení stresového cyklu', author:'Emily & Amelia Nagoski', template:'edukace', color:'cream', postType:'prispevek',
    fields:{ title:'Pláč: dokončení, ne slabost', b1:'Pláč je biologický mechanismus dokončení emočního cyklu', b2:'Po opravdovém pláči: snížení krevního tlaku, uvolnění svalů', b3:'Potlačovaný pláč zadržuje stresovou energii a prodlužuje utrpení', b4:'V pomáhajících profesích: pláč po práci není profesní selhání', b5:'→ Je to zdravá odpověď na to, co nesete.' },
    caption:'😢 Pláč po těžkém dni není slabost.\n\nJe to nervová soustava, která dělá přesně to, co má.\n\n#motivusreset #plac #stresovycyklus #pomahajiciprofese #prevencevyhoreni' },

  // SÉRIE 6: SOMATICKÁ PRÁCE (Peter Levine)
  { id:31, date:'2026-11-09', series:6, seriesName:'Somatická práce', seriesColor:'#8BAF8E', title:'Co je somatická práce?', author:'Peter Levine', template:'edukace', color:'cream', postType:'prispevek',
    fields:{ title:'Somatická práce: přístup skrze tělo', b1:'Soma = tělo v řečtině. Somatická práce = přístup skrze tělo.', b2:'Vychází z poznatku: stres je uložen v těle, ne jen v mysli', b3:'Zaměřuje se na tělesné pocity, pohyb a dech — ne na příběhy', b4:'Přístup: „bottom-up" — od těla k mysli, ne naopak', b5:'↳ Peter Levine, zakladatel Somatic Experiencing (SE)' },
    caption:'🌿 Nová série o somatické práci.\n\nPeter Levine: jak tělo uchovává a uvolňuje stres.\n\n#motivusreset #somatickaprace #peterlevine #prevencevyhoreni #pomahajiciprofese' },

  { id:32, date:'2026-11-11', series:6, seriesName:'Somatická práce', seriesColor:'#8BAF8E', title:'Titrace – práce po malých krocích', author:'Peter Levine', template:'edukace', color:'green', postType:'prispevek',
    fields:{ title:'Titrace: po malých krocích je bezpečnější', b1:'Titrace = práce s malými „dávkami" aktivace namísto zaplavení', b2:'Nestahujeme bandáž najednou — sundáváme ji vrstvu po vrstvě', b3:'Nervový systém potřebuje čas zpracovat to, co cítí', b4:'3 minuty dechového cvičení denně > hodina bez přestávky', b5:'→ Malé kroky mají velký neurologický efekt' },
    caption:'🧪 Titrace: stres zpracovávejte po malých dávkách, ne v celku.\n\n5 minut každý den > hodina jednou za měsíc.\n\n#motivusreset #titrace #somatickaprace #peterlevine #prevencevyhoreni' },

  { id:33, date:'2026-11-13', series:6, seriesName:'Somatická práce', seriesColor:'#8BAF8E', title:'Pendulace – kyvadlo mezi klidem a aktivací', author:'Peter Levine', template:'edukace', color:'green', postType:'prispevek',
    fields:{ title:'Pendulace: léčivý pohyb kyvadla', b1:'Pendulace = vědomé přepínání mezi klidem a aktivací', b2:'Napětí → uvolnění → napětí → uvolnění (jako kyvadlo)', b3:'Nervový systém se učí: aktivace má konec — je to bezpečné', b4:'V praxi: 2 min intenzivního pohybu → 2 min klidu', b5:'→ Jde o trénink návratu, ne o vyhýbání stresu' },
    caption:'🕰️ Kyvadlo se vždy vrátí zpět.\n\nPendulace učí nervový systém: každá vlna aktivace má konec.\n\n#motivusreset #pendulace #somatickaprace #peterlevine #nervovasoustava' },

  { id:34, date:'2026-11-16', series:6, seriesName:'Somatická práce', seriesColor:'#8BAF8E', title:'Protřepání těla – co zvířata učí', author:'Peter Levine · David Berceli', template:'tipy', color:'terracotta', postType:'prispevek',
    fields:{ title:'Protřepání: přírodní uvolnění napětí', t1:'Po stresu se protřeste: ruce, ramena, nohy — 2 minuty', t2:'Zvířata to dělají instinktivně po útěku — my jsme ztratili tento reflex', t3:'Třepání uvolňuje napětí z hlubokých svalových skupin (psoasy)', t4:'Délka: 2–5 minut po náročném rozhovoru nebo na konci dne' },
    caption:'🦁 Po útěku před lvem se zebra otřepe. My po konfliktu sedíme u stolu.\n\nVyzkoušejte: vstáte a protřepejte tělo 2 minuty. 👇\n\n#motivusreset #protreparni #TRE #somatickaprace #prevencevyhoreni' },

  { id:35, date:'2026-11-18', series:6, seriesName:'Somatická práce', seriesColor:'#8BAF8E', title:'Jak stres uvízne v těle', author:'Peter Levine · van der Kolk', template:'edukace', color:'dark', postType:'prispevek',
    fields:{ title:'Proč stres zůstává uvězněn v těle', b1:'Při ohrožení tělo mobilizuje obrovské množství energie', b2:'Pokud ji nevyužijeme (boj/útěk), zůstane „zmrazena" v tkáních', b3:'Uvězněná energie: chronické napětí, bolesti, nespavost', b4:'To není psychosomatika — je to neurobiologie obranné reakce', b5:'→ Somatická práce pomáhá tuto energii bezpečně uvolnit' },
    caption:'🧊 Stres, který nemá kam jít, zůstane v těle zamrzlý.\n\nProto somatická práce. Proto pohyb. Proto dech.\n\n#motivusreset #somatickaprace #peterlevine #vanderkolk #prevencevyhoreni' },

  { id:36, date:'2026-11-20', series:6, seriesName:'Somatická práce', seriesColor:'#8BAF8E', title:'Grounding 5-4-3-2-1', author:'Somatic Experiencing', template:'tipy', color:'forest', postType:'prispevek',
    fields:{ title:'Technika 5-4-3-2-1: návrat do tady a teď', t1:'5 věcí, které VIDÍTE (pojmenujte je nahlas nebo v mysli)', t2:'4 věci, které SLYŠÍTE (zavřete oči a naslouchejte)', t3:'3 věci, které HMATÁTE (podlaha, oblečení, vzduch)', t4:'2 věci, které CÍTÍTE VŮNÍ — 1 věc, kterou CHUTNÁTE' },
    caption:'🌍 Grounding = ukotvení v přítomném okamžiku. Trvá to 3 minuty.\n\nUložte si a vyzkoušejte dnes.\n\n#motivusreset #grounding #5432 #somatickaprace #prevencevyhoreni' },

  // SÉRIE 7: COMPASSION FATIGUE (Figley)
  { id:37, date:'2026-11-23', series:7, seriesName:'Compassion Fatigue', seriesColor:'#D4C5B0', title:'Co je compassion fatigue?', author:'Charles Figley', template:'edukace', color:'cream', postType:'prispevek',
    fields:{ title:'Compassion Fatigue: cena za péči', b1:'Charles Figley (1995): „náklady za péči o trpícího člověka"', b2:'Vzniká z empatie — z aktu samotného pomáhání druhým', b3:'Přebíráme traumata a příběhy klientů do vlastního těla', b4:'Příznaky: emoční vyčerpání, vtíravé obrazy, nespavost', b5:'→ Je to profesní riziko, ne osobní selhání' },
    caption:'💛 Compassion fatigue je cena za to, že jste opravdu přítomni s klientem.\n\nZnali jste tento pojem? 👇\n\n#motivusreset #compassionfatigue #figley #pomahajiciprofese #prevencevyhoreni' },

  { id:38, date:'2026-11-25', series:7, seriesName:'Compassion Fatigue', seriesColor:'#D4C5B0', title:'Empatie jako rizikový faktor', author:'Charles Figley', template:'edukace', color:'terracotta', postType:'prispevek',
    fields:{ title:'Paradox empatie v pomáhající profesi', b1:'Empatie je váš největší nástroj — i váš největší risk', b2:'Čím více cítíte s klientem, tím více přebíráte jeho stres', b3:'Figley: vstoupení do klientova světa nás mění — neviditelně', b4:'Nad tím se nedá zvítězit vůlí — je to fyziologický proces', b5:'→ Řešení: vědomá práce s hranicemi a pravidelná regenerace' },
    caption:'💔 Vaše empatie je dar. A zároveň cena.\n\nJde o vědomou správu empatie — hranice a regeneraci.\n\n#motivusreset #empatie #compassionfatigue #prevencevyhoreni #pomahajiciprofese' },

  { id:39, date:'2026-11-27', series:7, seriesName:'Compassion Fatigue', seriesColor:'#D4C5B0', title:'Sekundární trauma', author:'Charles Figley', template:'edukace', color:'dark', postType:'prispevek',
    fields:{ title:'Sekundární trauma: příběhy, které zůstávají', b1:'Sekundární trauma = PTSD příznaky z práce s traumatizovanými', b2:'Flashbacky, noční můry, vyhýbání — ale ne z vlastní zkušenosti', b3:'Přebíráme obrazy, emoce a vjemy z vyprávění klientů', b4:'Týká se soc. pracovníků, terapeutů, záchranářů, zdravotníků', b5:'→ Prevence: supervize, bezpečný tým, vědomá dekomprese po práci' },
    caption:'😔 „V noci se mi zdají sny o jejich příbězích." Je to sekundární trauma — a je léčitelné.\n\n#motivusreset #sekundarnistres #compassionfatigue #pomahajiciprofese #prevencevyhoreni' },

  { id:40, date:'2026-11-30', series:7, seriesName:'Compassion Fatigue', seriesColor:'#D4C5B0', title:'Proč soc. pracovníci odcházejí po 5 letech', author:'Maslach · Figley', template:'edukace', color:'forest', postType:'prispevek',
    fields:{ title:'Odchod z profese: data a příčiny', b1:'Průměrná délka praxe v soc. službách: 5–7 let (mezinárodní studie)', b2:'Důvody: vyčerpání 68%, ztráta smyslu 54%, mzda 49%', b3:'Systém bez prevence a podpory profesionálů', b4:'Odcházejí ti nejzapálenější — kteří dali profesi nejvíce', b5:'→ Prevence vyhoření je systémová nutnost, ne osobní zodpovědnost' },
    caption:'📊 5–7 let. Tolik průměrně vydrží sociální pracovník v profesi.\n\n#motivusreset #socialnipraxe #odchodzprofese #prevencevyhoreni #pomahajiciprofese' },

  { id:41, date:'2026-12-02', series:7, seriesName:'Compassion Fatigue', seriesColor:'#D4C5B0', title:'8 příznaků compassion fatigue', author:'Charles Figley', template:'karusel', color:'cream', postType:'karusel',
    fields:{ slide:'1', total:'9', title:'8 příznaků compassion fatigue', body:'Poznáváte se v některém z nich? Pojmenování je první krok.', cta:'' },
    slides:[{ title:'1. Chronická únava', body:'Vyčerpaní i po odpočinku. Energie, která se nedoplňuje.' },{ title:'2. Emoční otupělost', body:'Přestáváte cítit to, co dřív. Automatické reakce bez kontaktu.' },{ title:'3. Vtíravé myšlenky', body:'Příběhy klientů vám přicházejí na mysl doma, v noci.' },{ title:'4. Nespavost / noční můry', body:'Mozek zpracovává to, co den nedokázal.' },{ title:'5. Cynismus a podrážděnost', body:'Obranná reakce přetíženého nervového systému.' },{ title:'6. Pocit bezmoci', body:'„Nic nemůžu změnit." Ztráta víry ve smysl práce.' },{ title:'7. Zanedbávání sebe', body:'Jídlo, pohyb, přátelé — to vše ustupuje.' },{ title:'8. Fyzické příznaky', body:'Bolesti hlavy, zad, žaludku. Tělo volá o pomoc.' },{ title:'Poznáváte 2 a více?', body:'Compassion fatigue je léčitelná. Potřebuje pozornost — ne ignorování.', cta:'Napište mi — ráda si s vámi promluvím 🙏' }],
    caption:'🔖 Uložte si karusel a projděte ho v klidu.\n\nOtázky? DM nebo komentáře otevřené 👇\n\n#motivusreset #compassionfatigue #figley #prevencevyhoreni #pomahajiciprofese' },

  { id:42, date:'2026-12-04', series:7, seriesName:'Compassion Fatigue', seriesColor:'#D4C5B0', title:'"Sebepéče není sobeckost"', author:'Mgr. Kristýna Nosová', template:'citat', color:'terracotta', postType:'prispevek',
    fields:{ quote:'Sebepéče není sobeckost. Je to podmínka udržitelné pomoci.', author:'Mgr. Kristýna Nosová' },
    caption:'💛 Říkám to na každém workshopu. A vždy vidím, jak z lidí opadá tíha viny.\n\n#motivusreset #sebepece #prevencevyhoreni #pomahajiciprofese #selfcare #regenerace' },

  // SÉRIE 8: HRANICE A IDENTITA
  { id:43, date:'2026-12-07', series:8, seriesName:'Hranice a identita', seriesColor:'#C4714F', title:'Karpmanův trojúhelník', author:'Stephen Karpman', template:'edukace', color:'cream', postType:'prispevek',
    fields:{ title:'Karpmanův trojúhelník: dynamika rolí', b1:'ZACHRÁNCE: přebírá zodpovědnost za klienta, zanedbává sebe', b2:'OBĚŤ: bezmocná, pasivní, čeká na záchranáře', b3:'PRONÁSLEDOVATEL: kritika, obviňování, agrese', b4:'V trojúhelníku se role mění — zachránce se stává pronásledovatelem', b5:'→ Cesta ven: vědomá profesní role — bez záchranáře i bez oběti' },
    caption:'🔺 Karpmanův trojúhelník je dodnes jedním z nejpraktičtějších nástrojů.\n\nJste v roli zachránce? 👇\n\n#motivusreset #karpman #trojuhelnik #granice #pomahajiciprofese' },

  { id:44, date:'2026-12-09', series:8, seriesName:'Hranice a identita', seriesColor:'#C4714F', title:'Syndrom pomocníka', author:'Wolfgang Schmidbauer', template:'edukace', color:'dark', postType:'prispevek',
    fields:{ title:'Syndrom pomocníka: proč pomáháme?', b1:'Wolfgang Schmidbauer (1977): pomáhání jako způsob řešení vlastních potřeb', b2:'Potřeba být potřebný, mít kontrolu — zakrytá pomocí druhým', b3:'Výsledek: neschopnost odmítnout, vlastní potřeby na posledním místě', b4:'Sebepoznání je klíč — ne odsouzení', b5:'→ Zdravá pomoc přichází z volby, ne z nutkání' },
    caption:'🪞 Schmidbauer: „Pomáhající profese jako útěk před sebou samým."\n\nProč pomáháte vy? 👇\n\n#motivusreset #syndromhomocnika #schmidbauer #pomahajiciprofese #sebepoznani' },

  { id:45, date:'2026-12-11', series:8, seriesName:'Hranice a identita', seriesColor:'#C4714F', title:'Empatie vs. přebírání odpovědnosti', author:'Kristýna Nosová', template:'edukace', color:'green', postType:'prispevek',
    fields:{ title:'Kde leží hranice empatie?', b1:'Empatie: „Cítím, jaké to pro vás je." (zůstávám u sebe)', b2:'Přebírání odpovědnosti: „Musím to za vás vyřešit." (ztrácím sebe)', b3:'Nejde o citlivost — jde o to, kde stojíte', b4:'Profesní hranice chrání klienta stejně jako vás', b5:'→ Zachovat svou pozici není chladnost. Je to profesionalita.' },
    caption:'🤲 Empatie s hranicemi je nástroj, který vám umožní pomáhat roky — ne měsíce.\n\n#motivusreset #empatie #granice #pomahajiciprofese #profesionalita' },

  { id:46, date:'2026-12-14', series:8, seriesName:'Hranice a identita', seriesColor:'#C4714F', title:'Jak říct ne – 4 kroky zprávy JÁ', author:'Asertivita v soc. práci', template:'tipy', color:'forest', postType:'prispevek',
    fields:{ title:'Zpráva JÁ: 4 kroky asertivní komunikace', t1:'FAKT: „Když... (popište konkrétní chování klienta)"', t2:'EMOCE: „...cítím... (pojmenujte svou emoci)"', t3:'DŮSLEDEK: „...a proto nemohu/nebudu... (jasná hranice)"', t4:'NÁVRH: „...ale navrhuju... (alternativa nebo řešení)"' },
    caption:'💬 Zpráva JÁ: nejúčinnější nástroj asertivity.\n\nNauěte se to. Opakujte to. Funguje to.\n\n#motivusreset #asertivita #granice #zpravaja #pomahajiciprofese' },

  { id:47, date:'2026-12-16', series:8, seriesName:'Hranice a identita', seriesColor:'#C4714F', title:'Profesní role vs. osobní identita', author:'Kristýna Nosová', template:'edukace', color:'dark', postType:'prispevek',
    fields:{ title:'Kdo jste v práci vs. kdo jste doma?', b1:'Splynutí s rolí: „Jsem sociální pracovník/ice — to je celé já"', b2:'Přílišná identifikace = ztráta vlastní identity mimo práci', b3:'Výsledek: práce nás sleduje domů, nedokážeme se přepnout', b4:'Zdravá identita: role je kostým, který si v práci oblékáme', b5:'→ Přechodové rituály pomáhají: obléknout se, projít se, jiná hudba' },
    caption:'🎭 Jsem Kristýna. Jsem lektorka. Ale nejsem JENOM lektorka. A to je záměrné.\n\n#motivusreset #profesniidentita #granice #prevencevyhoreni #pomahajiciprofese' },

  { id:48, date:'2026-12-18', series:8, seriesName:'Hranice a identita', seriesColor:'#C4714F', title:'Asertivita v soc. práci – mýty vs. realita', author:'Kristýna Nosová', template:'tipy', color:'cream', postType:'prispevek',
    fields:{ title:'Mýty o asertivitě v pomáhající práci', t1:'MÝTUS: asertivita = agresivita → REALITA: je to respekt k sobě i klientovi', t2:'MÝTUS: hranice jsou pro klienty kruté → REALITA: chrání je i vás', t3:'MÝTUS: říct ne = selhání → REALITA: říct ne = profesionalita', t4:'PRAVDA: jasná komunikace hranic dává klientům bezpečí a strukturu' },
    caption:'❌ Asertivita není přísnost. Je to jasnost. A jasnost dává klientům bezpečí.\n\nKterý mýtus nosíte v sobě? 👇\n\n#motivusreset #asertivita #granice #pomahajiciprofese #komunikace' },

  // SÉRIE 9: SYSTÉM A SPOLEČNOST
  { id:49, date:'2027-01-05', series:9, seriesName:'Systém a společnost', seriesColor:'#2D5016', title:'Vyhořelá společnost', author:'Byung-Chul Han', template:'edukace', color:'dark', postType:'prispevek',
    fields:{ title:'Vyhořelá společnost: Han o výkonu', b1:'Byung-Chul Han: žijeme ve „společnosti výkonu" — tlak přichází zevnitř', b2:'Nejsme donuceni zvenčí — sami sebe exploatujeme ve jménu úspěchu', b3:'Výsledek: deprese a vyhoření jako nemoci svobody, ne nevolnictví', b4:'V soc. službách: pomáháme, protože „musíme být potřební"', b5:'↳ Byung-Chul Han, Vyhořelá společnost (2010)' },
    caption:'📕 Byung-Chul Han napsal knihu, která mi změnila pohled na vyhoření.\n\n#motivusreset #vyhorelaspolecnost #han #prevencevyhoreni #systém #filozofie' },

  { id:50, date:'2027-01-07', series:9, seriesName:'Systém a společnost', seriesColor:'#2D5016', title:'Proč systém vypaluje pomáhající profese', author:'Christina Maslach', template:'edukace', color:'forest', postType:'prispevek',
    fields:{ title:'Systémové příčiny vyhoření', b1:'Přetížení: příliš mnoho klientů, příliš málo zdrojů', b2:'Ztráta kontroly: rozhodnutí přijímají jiní — my plníme příkazy', b3:'Nedostatečné odměňování: finanční i emocionální neproporcionalita', b4:'Rozpad komunity: chybí bezpečný tým a sdílení', b5:'→ Maslach: 6 oblastí pracovního života, kde systém selhává' },
    caption:'🏛️ Prevence vyhoření není jen osobní zodpovědnost pracovníka. Je to organizační zodpovědnost.\n\n#motivusreset #prevencevyhoreni #systém #pomahajiciprofese #maslach' },

  { id:51, date:'2027-01-09', series:9, seriesName:'Systém a společnost', seriesColor:'#2D5016', title:'Administrativa jako zdroj vyhoření', author:'Výzkumy v sociální práci', template:'edukace', color:'dark', postType:'prispevek',
    fields:{ title:'Administrativa: tichý zabiják motivace', b1:'Až 40 % pracovního času: výkazy, zprávy, databáze — ne klienti', b2:'Pocit: „Jsem tu od papírů, ne od lidí"', b3:'Kognitivní přetížení: přepínání mezi empatií a byrokracií vysává', b4:'Morální zranění: nesoulad hodnot a reality pracovního prostředí', b5:'→ Nejde odmítat systém, ale lze pojmenovat jeho cenu' },
    caption:'📋 „Chtěl jsem pomáhat lidem — a celý den vyplňuju tabulky."\n\nJak s tím pracujete vy? 👇\n\n#motivusreset #administrativa #prevencevyhoreni #moralniraneni #socialnipraxe' },

  { id:52, date:'2027-01-12', series:9, seriesName:'Systém a společnost', seriesColor:'#2D5016', title:'Výkon vs. péče – dilema profese', author:'Byung-Chul Han', template:'citat', color:'dark', postType:'prispevek',
    fields:{ quote:'Péče je subverzivní akt v kultuře výkonu.', author:'inspirováno Byung-Chul Hanem' },
    caption:'🔄 Ve společnosti výkonu je péče radikální.\n\nTo je to, co pomáhající profesionálové dělají. A proto jsou tak vzácní.\n\n#motivusreset #pece #vykon #han #prevencevyhoreni #filozofie' },

  // SÉRIE 10: REGENERACE V PRAXI
  { id:53, date:'2027-01-14', series:10, seriesName:'Regenerace v praxi', seriesColor:'#C4714F', title:'Rituál konce pracovního dne', author:'Kristýna Nosová', template:'karusel', color:'forest', postType:'karusel',
    fields:{ slide:'1', total:'5', title:'Rituál konce pracovního dne', body:'4 kroky, jak vědomě uzavřít pracovní den a přepnout do soukromého života.', cta:'' },
    slides:[{ title:'Krok 1: Pojmenování', body:'Řekněte nahlas 1–2 věci, které dnes byly náročné. Pojmenování snižuje emocionální náboj.' },{ title:'Krok 2: Tělesné uvolnění', body:'Protáhněte se. Třepejte rukama a rameny 2 minuty. Vědomý dech.' },{ title:'Krok 3: Přechodový rituál', body:'Projděte se. Přeoblékněte se. Tělo potřebuje signál změny.' },{ title:'Krok 4: Jedno pozitivní', body:'Pojmenujte jednu věc, která dnes šla dobře nebo dala smysl.' },{ title:'Konzistentnost je klíč', body:'Rituál funguje, protože se opakuje. NS se naučí: „Toto je konec."', cta:'Vyzkoušejte dnes a napište mi 🌿' }],
    caption:'🌅 5–10 minut na konci dne. Každý den.\n\nKterý krok vyzkoušíte dnes? 👇\n\n#motivusreset #ritualkonedne #prevencevyhoreni #regenerace #pomahajiciprofese' },

  { id:54, date:'2027-01-16', series:10, seriesName:'Regenerace v praxi', seriesColor:'#C4714F', title:'Mikro-pauzy v pracovním dni', author:'Kristýna Nosová', template:'tipy', color:'green', postType:'prispevek',
    fields:{ title:'Mikro-pauzy: 3 minuty, které mění vše', t1:'Po každém náročném rozhovoru: 3 min venku nebo u okna', t2:'Každé 2 hodiny: vstát, protáhnout se, vědomý dech', t3:'Oběd BEZ telefonu a BEZ přemýšlení o práci — aspoň 20 minut', t4:'Na konci dne: 5-minutové psaní — co se povedlo, co bylo těžké' },
    caption:'⏱️ Mikro-pauzy nejsou luxus. Jsou investicí do výkonu.\n\nCo je vaše nejoblíbenější mikro-pauza? 👇\n\n#motivusreset #mikropauzy #prevencevyhoreni #regenerace #pomahajiciprofese' },

  { id:55, date:'2027-01-19', series:10, seriesName:'Regenerace v praxi', seriesColor:'#C4714F', title:'Program REGENERACE – přihlaste se', author:'Mgr. Kristýna Nosová', template:'workshop', color:'terracotta', postType:'prispevek',
    fields:{ eventName:'Program REGENERACE', subtitle:'Prevence vyhoření pro pomáhající profese · 4 moduly', date:'Jaro 2027 — termíny brzy', location:'Prezenčně · max. 16 účastníků', cta:'Předregistrace v odkazu v biu ↑' },
    caption:'🌿 Absolvovali jste celou sérii? Pak víte, o čem program REGENERACE je.\n\nPředregistrace otevřená. Link v biu 👆\n\n#motivusreset #programregenerace #prevencevyhoreni #pomahajiciprofese #workshop' },
];

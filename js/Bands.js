//$(".media__header").each(function(k,v){ bands.push({  name: $(this).find(".media__title-text span").text(), fullDate: $.trim($(this).find(".media__artist-gig").text())  }) });
//https://www.roskilde-festival.dk/music/2018?view=poster
// copy(bands)
// var bands = [
//   {
//     "name": "EMINEM",
//     "fullDate": "Wednesday 4\tJuly, 22:30, 2018,\n\t\t\t\t\t\tOrange"
//   },
//   {
//     "name": "BRUNO MARS",
//     "fullDate": "Thursday 5\tJuly, 22:00, 2018,\n\t\t\t\t\t\tOrange"
//   },
//   {
//     "name": "GORILLAZ",
//     "fullDate": "Saturday 7\tJuly, 23:00, 2018,\n\t\t\t\t\t\tOrange"
//   },
//   {
//     "name": "NICK CAVE & THE BAD SEEDS",
//     "fullDate": "Friday 6\tJuly, 22:00, 2018,\n\t\t\t\t\t\tOrange"
//   },
//   {
//     "name": "NINE INCH NAILS",
//     "fullDate": "Thursday 5\tJuly, 00:00, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "MASSIVE ATTACK",
//     "fullDate": "Saturday 7\tJuly, 01:00, 2018,\n\t\t\t\t\t\tOrange"
//   },
//   {
//     "name": "DAVID BYRNE",
//     "fullDate": "Saturday 7\tJuly, 00:00, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "DUA LIPA",
//     "fullDate": "Saturday 7\tJuly, 20:00, 2018,\n\t\t\t\t\t\tOrange"
//   },
//   {
//     "name": "NEPHEW",
//     "fullDate": "Friday 6\tJuly, 01:00, 2018,\n\t\t\t\t\t\tOrange"
//   },
//   {
//     "name": "ALEX VARGAS",
//     "fullDate": "Friday 6\tJuly, 14:00, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "ANDERSON .PAAK & THE FREE NATIONALS",
//     "fullDate": "Sunday 8\tJuly, 01:30, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "BEN FROST",
//     "fullDate": "Thursday 5\tJuly, 17:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "BLACK STAR",
//     "fullDate": "Thursday 5\tJuly, 14:00, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "CHARLOTTE GAINSBOURG",
//     "fullDate": "Thursday 5\tJuly, 00:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "CV JØRGENSEN",
//     "fullDate": "Saturday 7\tJuly, 16:30, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "DESCENDENTS",
//     "fullDate": "Friday 6\tJuly, 17:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "FEVER RAY",
//     "fullDate": "Saturday 7\tJuly, 02:00, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "FIRST AID KIT",
//     "fullDate": "Thursday 5\tJuly, 16:00, 2018,\n\t\t\t\t\t\tOrange"
//   },
//   {
//     "name": "FLEET FOXES",
//     "fullDate": "Friday 6\tJuly, 19:00, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "FOUR TET",
//     "fullDate": "Saturday 7\tJuly, 00:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "INTERPOL",
//     "fullDate": "Thursday 5\tJuly, 19:00, 2018,\n\t\t\t\t\t\tOrange"
//   },
//   {
//     "name": "JOEY BADA$$",
//     "fullDate": "Friday 6\tJuly, 21:45, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "KHALID",
//     "fullDate": "Thursday 5\tJuly, 19:00, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "MIKE SKINNER & MURKAGE PRESENT TONGA",
//     "fullDate": "Sunday 8\tJuly, 02:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "MOGWAI",
//     "fullDate": "Saturday 7\tJuly, 21:00, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "MY BLOODY VALENTINE",
//     "fullDate": "Friday 6\tJuly, 02:00, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "ODESZA",
//     "fullDate": "Friday 6\tJuly, 21:00, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "PABLO MOSES",
//     "fullDate": "Friday 6\tJuly, 16:00, 2018,\n\t\t\t\t\t\tOrange"
//   },
//   {
//     "name": "PARTYNEXTDOOR",
//     "fullDate": "Wednesday 4\tJuly, 18:00, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "ST. VINCENT",
//     "fullDate": "Wednesday 4\tJuly, 20:30, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "STONE SOUR",
//     "fullDate": "Thursday 5\tJuly, 21:30, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "STORMZY",
//     "fullDate": "Thursday 5\tJuly, 23:45, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "THE MINDS OF 99",
//     "fullDate": "Friday 6\tJuly, 19:00, 2018,\n\t\t\t\t\t\tOrange"
//   },
//   {
//     "name": "VINCE STAPLES",
//     "fullDate": "Saturday 7\tJuly, 21:30, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "WHEN SAINTS GO MACHINE",
//     "fullDate": "Thursday 5\tJuly, 16:00, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "ALBERT HAMMOND JR",
//     "fullDate": "Saturday 7\tJuly, 14:30, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "AMMAR 808",
//     "fullDate": ""
//   },
//   {
//     "name": "ANDA UNION",
//     "fullDate": "Friday 6\tJuly, 19:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "ANNE HAANING",
//     "fullDate": ""
//   },
//   {
//     "name": "BABY IN VAIN",
//     "fullDate": "Saturday 7\tJuly, 02:15, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "BANKSLAVE",
//     "fullDate": ""
//   },
//   {
//     "name": "BCUC",
//     "fullDate": "Thursday 5\tJuly, 00:15, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "BELLY",
//     "fullDate": "Thursday 5\tJuly, 16:30, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "BENAL",
//     "fullDate": "Friday 6\tJuly, 16:00, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "BISSE",
//     "fullDate": "Friday 6\tJuly, 21:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "BITORI",
//     "fullDate": "Friday 6\tJuly, 02:00, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "6LACK",
//     "fullDate": "Thursday 5\tJuly, 18:30, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "THE BLAZE",
//     "fullDate": "Wednesday 4\tJuly, 23:30, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "BLONDE REDHEAD",
//     "fullDate": "Saturday 7\tJuly, 23:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "BORIS & MERZBOW",
//     "fullDate": "Thursday 5\tJuly, 23:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "CELESTE",
//     "fullDate": "Friday 6\tJuly, 23:30, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "CEZINANDO",
//     "fullDate": "Thursday 5\tJuly, 13:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "CHELSEA MANNING",
//     "fullDate": "Thursday 5\tJuly, 15:30, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "CHELSEA WOLFE",
//     "fullDate": "Thursday 5\tJuly, 18:00, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "CLUTCH",
//     "fullDate": "Wednesday 4\tJuly, 19:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "COURTNEY MARIE ANDREWS",
//     "fullDate": "Saturday 7\tJuly, 12:00, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "DANNY BROWN",
//     "fullDate": "Saturday 7\tJuly, 17:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "DARK TRANQUILLITY",
//     "fullDate": "Wednesday 4\tJuly, 22:00, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "DE UNDERJORDISKE X FRIBYTTERDRØMME",
//     "fullDate": "Sunday 8\tJuly, 01:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "DEAD CROSS",
//     "fullDate": "Friday 6\tJuly, 15:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "DEBO BAND",
//     "fullDate": "Wednesday 4\tJuly, 21:30, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "DEBONAIR (resident DJ)",
//     "fullDate": "Friday 6\tJuly, 18:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "DJ RASHIDA",
//     "fullDate": "Thursday 5\tJuly, 21:30, 2018,\n\t\t\t\t\t\tOrange"
//   },
//   {
//     "name": "DONA ONETE",
//     "fullDate": "Thursday 5\tJuly, 21:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "THE DWARFS OF EAST AGOUZA",
//     "fullDate": "Thursday 5\tJuly, 14:00, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "EL LEOPARDO",
//     "fullDate": "Thursday 5\tJuly, 22:30, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "EQUIKNOXX FEAT. SHANIQUE MARIE",
//     "fullDate": "Friday 6\tJuly, 12:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "GAMELAN SALUKAT",
//     "fullDate": "Thursday 5\tJuly, 12:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "HALEY HEYNDERICKX",
//     "fullDate": "Thursday 5\tJuly, 12:30, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "HEILUNG",
//     "fullDate": "Friday 6\tJuly, 01:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "HOUSE GOSPEL CHOIR",
//     "fullDate": "Saturday 7\tJuly, 17:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "THE HUNNA",
//     "fullDate": "Friday 6\tJuly, 12:15, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "HVAD",
//     "fullDate": "Friday 6\tJuly, 18:00, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "INDIKA (resident DJ)",
//     "fullDate": "Saturday 7\tJuly, 18:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "I’M WITH HER",
//     "fullDate": "Wednesday 4\tJuly, 20:15, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "JAMES HOLDEN AND THE ANIMAL SPIRITS",
//     "fullDate": "Friday 6\tJuly, 17:45, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "JILLIAN MAYER",
//     "fullDate": ""
//   },
//   {
//     "name": "JOHN MAUS",
//     "fullDate": "Thursday 5\tJuly, 20:00, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "JUANA MOLINA",
//     "fullDate": "Saturday 7\tJuly, 18:45, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "JUJU & JORDASH",
//     "fullDate": "Thursday 5\tJuly, 14:30, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "JUSTIN SHOULDER & CORIN",
//     "fullDate": ""
//   },
//   {
//     "name": "KAKKMADDAFAKKA",
//     "fullDate": "Wednesday 4\tJuly, 17:30, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "KALI UCHIS",
//     "fullDate": "Saturday 7\tJuly, 15:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "KEDR LIVANSKIY",
//     "fullDate": "Saturday 7\tJuly, 19:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "KELLY LEE OWENS",
//     "fullDate": "Sunday 8\tJuly, 00:30, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "KIRSTEN ASTRUP",
//     "fullDate": "Saturday 7\tJuly, 15:45, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "KOKOKO!",
//     "fullDate": "Saturday 7\tJuly, 19:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "LARGE UNIT BRAZIL EDITION",
//     "fullDate": "Saturday 7\tJuly, 15:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "LAUREL HALO",
//     "fullDate": "Friday 6\tJuly, 20:00, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "LEKHFA",
//     "fullDate": "Friday 6\tJuly, 14:30, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "LLNN",
//     "fullDate": "Saturday 7\tJuly, 02:30, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "MADALITSO BAND",
//     "fullDate": "Wednesday 4\tJuly, 20:00, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "MADBALL",
//     "fullDate": "Saturday 7\tJuly, 23:30, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "±MAISMENOS±",
//     "fullDate": ""
//   },
//   {
//     "name": "MARIBOU STATE",
//     "fullDate": "Thursday 5\tJuly, 20:30, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "MARLON WILLIAMS",
//     "fullDate": "Friday 6\tJuly, 13:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "MAVI PHOENIX",
//     "fullDate": "Saturday 7\tJuly, 13:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "MHD",
//     "fullDate": "Sunday 8\tJuly, 00:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "MINYANTA",
//     "fullDate": "Friday 6\tJuly, 16:30, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "MOTORSAV",
//     "fullDate": "Friday 6\tJuly, 02:15, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "MYRKUR",
//     "fullDate": "Saturday 7\tJuly, 17:00, 2018,\n\t\t\t\t\t\tGloria\n\t\t\t\t\t\n\t\t\t\t\t\tSaturday 7\tJuly, 00:30, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "NAT BLOCH GREGERSEN",
//     "fullDate": ""
//   },
//   {
//     "name": "NATHAN FAKE",
//     "fullDate": "Wednesday 4\tJuly, 21:30, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "NELSON CAN",
//     "fullDate": "Thursday 5\tJuly, 19:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "NEW GEN",
//     "fullDate": "Friday 6\tJuly, 14:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "NIHILOXICA",
//     "fullDate": "Wednesday 4\tJuly, 17:15, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "NINES",
//     "fullDate": "Friday 6\tJuly, 16:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "NYT LIV",
//     "fullDate": "Friday 6\tJuly, 01:30, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "OH SEES",
//     "fullDate": "Friday 6\tJuly, 00:00, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "OMNI",
//     "fullDate": "Saturday 7\tJuly, 18:15, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "OND TRO",
//     "fullDate": "Friday 6\tJuly, 03:00, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "OPERAP",
//     "fullDate": "Saturday 7\tJuly, 13:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "OSKAR KOLIANDER",
//     "fullDate": ""
//   },
//   {
//     "name": "OTIM ALPHA",
//     "fullDate": "Saturday 7\tJuly, 01:00, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "PAAL NILSSEN-LOVE'S BRAZIL FUNK IMPRO",
//     "fullDate": "Thursday 5\tJuly, 20:00, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "PAAL NILSSEN-LOVE'S JAPAN FREE JAZZ AND NOISE",
//     "fullDate": "Wednesday 4\tJuly, 22:00, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "PALM",
//     "fullDate": "Saturday 7\tJuly, 22:30, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "PAUL BARSCH & TILMAN HORNIG",
//     "fullDate": ""
//   },
//   {
//     "name": "PERNILLE (resident DJ)",
//     "fullDate": "Wednesday 4\tJuly, 18:00, 2018,\n\t\t\t\t\t\tApollo\n\t\t\t\t\t\n\t\t\t\t\t\tThursday 5\tJuly, 18:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "PETER SOMMER",
//     "fullDate": "Saturday 7\tJuly, 17:30, 2018,\n\t\t\t\t\t\tOrange"
//   },
//   {
//     "name": "PIGS PIGS PIGS PIGS PIGS PIGS PIGS",
//     "fullDate": "Wednesday 4\tJuly, 17:30, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "PREOCCUPATIONS",
//     "fullDate": "Thursday 5\tJuly, 22:00, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "PUBLIC WORKS",
//     "fullDate": ""
//   },
//   {
//     "name": "RASCASUELOS",
//     "fullDate": "Saturday 7\tJuly, 16:15, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "REGELBAU PRESENTS CENTRAL + DJ SPORTS + C.K + MANMADE DEEJAY",
//     "fullDate": "Thursday 5\tJuly, 22:00, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "RICHARD DAWSON BAND",
//     "fullDate": "Friday 6\tJuly, 18:15, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "RVG",
//     "fullDate": "Saturday 7\tJuly, 12:30, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "SACRED PAWS",
//     "fullDate": "Saturday 7\tJuly, 22:00, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "SAMPHA",
//     "fullDate": "Friday 6\tJuly, 23:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "SANDUNES",
//     "fullDate": "Friday 6\tJuly, 22:00, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "(SANDY) ALEX G",
//     "fullDate": "Friday 6\tJuly, 20:15, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "SAVEUS",
//     "fullDate": "Wednesday 4\tJuly, 18:00, 2018,\n\t\t\t\t\t\tOrange"
//   },
//   {
//     "name": "SCOUR",
//     "fullDate": "Saturday 7\tJuly, 20:15, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "SIGRID",
//     "fullDate": "Saturday 7\tJuly, 21:30, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "ŠIROM",
//     "fullDate": "Saturday 7\tJuly, 13:45, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "SKELETONWITCH",
//     "fullDate": "Friday 6\tJuly, 14:00, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "SLAVES",
//     "fullDate": "Wednesday 4\tJuly, 18:30, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "SLYDIGS",
//     "fullDate": "Sunday 8\tJuly, 00:15, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "SMERZ",
//     "fullDate": "Thursday 5\tJuly, 16:45, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "STEFFI",
//     "fullDate": "Wednesday 4\tJuly, 19:15, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "STEFFLON DON",
//     "fullDate": "Friday 6\tJuly, 20:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "SUPER PARQUET",
//     "fullDate": "Saturday 7\tJuly, 20:30, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "SUPERORGANISM",
//     "fullDate": "Thursday 5\tJuly, 18:30, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "TOUCHÉ AMORÉ",
//     "fullDate": "Friday 6\tJuly, 16:15, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "TUINA NIKIENTA OLIVIER",
//     "fullDate": ""
//   },
//   {
//     "name": "TUNE-YARDS",
//     "fullDate": "Thursday 5\tJuly, 15:00, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "TURBOLENS",
//     "fullDate": "Thursday 5\tJuly, 12:00, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "VERONIKA GEIGER",
//     "fullDate": ""
//   },
//   {
//     "name": "VETO",
//     "fullDate": "Saturday 7\tJuly, 19:00, 2018,\n\t\t\t\t\t\tArena"
//   },
//   {
//     "name": "VIKTORIA WENDEL SKOUSEN",
//     "fullDate": ""
//   },
//   {
//     "name": "WATAIN",
//     "fullDate": "Saturday 7\tJuly, 01:30, 2018,\n\t\t\t\t\t\tAvalon"
//   },
//   {
//     "name": "THE WEATHER STATION",
//     "fullDate": "Thursday 5\tJuly, 14:00, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "WILKINSON",
//     "fullDate": "Friday 6\tJuly, 01:00, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "YASMINE HAMDAN",
//     "fullDate": "Thursday 5\tJuly, 16:00, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "YASUAKI SHIMIZU",
//     "fullDate": "Friday 6\tJuly, 12:30, 2018,\n\t\t\t\t\t\tGloria"
//   },
//   {
//     "name": "YONAKA",
//     "fullDate": "Saturday 7\tJuly, 14:15, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "YOUNG FATHERS",
//     "fullDate": "Friday 6\tJuly, 22:30, 2018,\n\t\t\t\t\t\tPavilion"
//   },
//   {
//     "name": "ZOE WALKER & NEIL BROMWICH",
//     "fullDate": ""
//   },
//   {
//     "name": "Ø [PHASE]",
//     "fullDate": "Friday 6\tJuly, 02:30, 2018,\n\t\t\t\t\t\tApollo"
//   },
//   {
//     "name": "ADDISABABABAND",
//     "fullDate": "Sunday 1\tJuly, 17:00, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "ALBIN LEE MELDAU",
//     "fullDate": "Monday 2\tJuly, 15:30, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "ALCABEAN",
//     "fullDate": "Sunday 1\tJuly, 20:00, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "ARTIGEARDIT",
//     "fullDate": "Tuesday 3\tJuly, 19:30, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "B FROM E",
//     "fullDate": "Sunday 1\tJuly, 18:30, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "BAIME",
//     "fullDate": "Sunday 1\tJuly, 23:00, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "CABAL",
//     "fullDate": "Monday 2\tJuly, 21:30, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "CLARISSA CONNELLY",
//     "fullDate": "Sunday 1\tJuly, 18:30, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "CTRLS",
//     "fullDate": "Monday 2\tJuly, 23:00, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "DANIEL SAVI (Resident DJ)",
//     "fullDate": "Sunday 1\tJuly, 18:00, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "DIRT FORGE",
//     "fullDate": "Sunday 1\tJuly, 14:00, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "DISCOTHÈQUE MOBUMFE (Resident DJ)",
//     "fullDate": "Tuesday 3\tJuly, 18:00, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "ECSTASY IN ORDER",
//     "fullDate": "Monday 2\tJuly, 21:30, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "EERA",
//     "fullDate": "Sunday 1\tJuly, 15:30, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "ELLIS MAY",
//     "fullDate": "Tuesday 3\tJuly, 16:30, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "EMIL KRUSE",
//     "fullDate": "Sunday 1\tJuly, 15:30, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "FOOL",
//     "fullDate": "Tuesday 3\tJuly, 18:00, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "FRAADS",
//     "fullDate": "Monday 2\tJuly, 15:00, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "GOSS",
//     "fullDate": "Monday 2\tJuly, 18:00, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "GURLI OCTAVIA",
//     "fullDate": "Monday 2\tJuly, 14:00, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "HOLM",
//     "fullDate": "Tuesday 3\tJuly, 15:30, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "IRIS GOLD",
//     "fullDate": "Tuesday 3\tJuly, 23:00, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "JADA",
//     "fullDate": "Sunday 1\tJuly, 14:00, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "JAKOB OGAWA",
//     "fullDate": "Tuesday 3\tJuly, 18:30, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "KIPPENBERGER",
//     "fullDate": "Monday 2\tJuly, 17:00, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "KONNI KASS",
//     "fullDate": "Tuesday 3\tJuly, 14:00, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "LOKE DEPH",
//     "fullDate": "Monday 2\tJuly, 16:30, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "LUSTER",
//     "fullDate": "Monday 2\tJuly, 20:00, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "LYRA VALENZA",
//     "fullDate": "Sunday 1\tJuly, 20:00, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "LØD",
//     "fullDate": "Tuesday 3\tJuly, 20:00, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "MARATON",
//     "fullDate": "Tuesday 3\tJuly, 17:00, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "MARSHALL CECIL",
//     "fullDate": "Tuesday 3\tJuly, 21:30, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "MIRIAM BRYANT",
//     "fullDate": "Sunday 1\tJuly, 17:00, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "MOUNT LIBERATION UNLIMITED",
//     "fullDate": "Monday 2\tJuly, 19:30, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "PALE HONEY",
//     "fullDate": "Monday 2\tJuly, 23:00, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "ROME IS NOT A TOWN",
//     "fullDate": "Monday 2\tJuly, 18:30, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "SASSY 009",
//     "fullDate": "Sunday 1\tJuly, 21:30, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "SIGMA",
//     "fullDate": "Tuesday 3\tJuly, 15:00, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "SIMON LITTAUER",
//     "fullDate": "Tuesday 3\tJuly, 21:30, 2018,\n\t\t\t\t\t\tCountdown"
//   },
//   {
//     "name": "SISTA BOSSEN",
//     "fullDate": "Sunday 1\tJuly, 21:30, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "SLÆGT",
//     "fullDate": "Sunday 1\tJuly, 23:00, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "TAN",
//     "fullDate": "Tuesday 3\tJuly, 23:00, 2018,\n\t\t\t\t\t\tRising"
//   },
//   {
//     "name": "TIGHT CHERRY (Resident DJ)",
//     "fullDate": "Monday 2\tJuly, 18:00, 2018,\n\t\t\t\t\t\tCountdown"
//   }
// ];
// var programArray = [];
//
//   $.each(bands, function(k,v){
//    var filldateSplit = v.fullDate.split(",");
//
//     var day = getPlayDay(filldateSplit[0]);
//     var date = getDayName(day);
//     var start = filldateSplit[1]+"";
//     start = start.trim().replace(":","");
//     start = start == "0000" ? "2400":start;
//     start = parseInt(start);
//     var stage = filldateSplit[3]+"".trim().replace(/ /g,'');
//     var stageId = getStageId(stage);
//     stage = stage.trim();
//     programArray.push({name: v.name, day: day, date: date, start: start,  stage: stage, stageId: stageId, length: 1});
//   });
//   console.log(programArray);
//
//
// function getPlayDay(fd){
//   if(fd == "") return -1;
//   if(fd == "30") return 0;
//   if(fd == "Sunday 1\tJuly") return 1;
//   if(fd == "Monday 2\tJuly") return 2;
//   if(fd == "Tuesday 3\tJuly") return 3;
//   if(fd == "Wednesday 4\tJuly") return 4;
//   if(fd == "Thursday 5\tJuly") return 5;
//   if(fd == "Friday 6\tJuly") return 6;
//   if(fd == "Saturday 7\tJuly") return 7;
//   return 1000;
// }
// function getStageId(fd){
//   if(fd == "") return -1;
//   if(fd.includes(  "Apollo" )) return 0;
//   if(fd.includes(  "Pavilion" )) return 1;
//   if(fd.includes(  "Arena") ) return 2;
//   if(fd.includes("Orange")) return 3;
//   if(fd.includes(  "Gloria")) return 4;
//   if(fd.includes(  "Avalon") )return 5;
//   if(fd.includes(  "Countdown")) return 6;
//   if(fd.includes(  "Rising")) return 7;
//   return 1000;
// }
// function getDayName(fd) {
//     if(fd == -1) return "Ved det ikke endnu";
//     if(fd == 0 ) return "Lørdag, 30. juni";
//     if(fd == 1 ) return "Søndag, 1. juli";
//     if(fd == 2) return "Mandag, 2. juli";
//     if(fd == 3) return "Tirsdag, 3. juli";;
//     if(fd == 4) return "Onsdag, 4. juli";
//     if(fd == 5) return "Torsdag, 5. juli";
//     if(fd == 6) return "Fredag, 6. juli";
//     if(fd == 7) return "Lørdag, 7. juli";
//     return "uuuhhhh ved det ikke";
// }

// 30 juni - 7 july
// lørdag - lørdag
var programArray = [
  {
    "name": "EMINEM",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2230,
    "stage": "Orange",
    "stageId": 3,
    "length": 1
  },
  {
    "name": "BRUNO MARS",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2200,
    "stage": "Orange",
    "stageId": 3,
    "length": 1
  },
  {
    "name": "GORILLAZ",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2300,
    "stage": "Orange",
    "stageId": 3,
    "length": 1
  },
  {
    "name": "NICK CAVE & THE BAD SEEDS",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2200,
    "stage": "Orange",
    "stageId": 3,
    "length": 1
  },
  {
    "name": "NINE INCH NAILS",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 0000,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "MASSIVE ATTACK",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 100,
    "stage": "Orange",
    "stageId": 3,
    "length": 1
  },
  {
    "name": "DAVID BYRNE",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 0000,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "DUA LIPA",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2000,
    "stage": "Orange",
    "stageId": 3,
    "length": 1
  },
  {
    "name": "NEPHEW",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 100,
    "stage": "Orange",
    "stageId": 3,
    "length": 1
  },
  {
    "name": "ALEX VARGAS",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1400,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "ANDERSON .PAAK & THE FREE NATIONALS",
    "day": 8,
    "date": "Søndag, 8. juli",
    "start": 130,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "BEN FROST",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1700,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "BLACK STAR",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1400,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "CHARLOTTE GAINSBOURG",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 0000,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "CV JØRGENSEN",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1630,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "DESCENDENTS",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1700,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "FEVER RAY",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 200,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "FIRST AID KIT",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1600,
    "stage": "Orange",
    "stageId": 3,
    "length": 1
  },
  {
    "name": "FLEET FOXES",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1900,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "FOUR TET",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 0000,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "INTERPOL",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1900,
    "stage": "Orange",
    "stageId": 3,
    "length": 1
  },
  {
    "name": "JOEY BADA$$",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2145,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "KHALID",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1900,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "MIKE SKINNER & MURKAGE PRESENT TONGA",
    "day": 8,
    "date": "Søndag, 8. juli",
    "start": 200,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "MOGWAI",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2100,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "MY BLOODY VALENTINE",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 200,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "ODESZA",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2100,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "PABLO MOSES",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1600,
    "stage": "Orange",
    "stageId": 3,
    "length": 1
  },
  {
    "name": "PARTYNEXTDOOR",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 1800,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "ST. VINCENT",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2030,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "STONE SOUR",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2130,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "STORMZY",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2345,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "THE MINDS OF 99",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1900,
    "stage": "Orange",
    "stageId": 3,
    "length": 1
  },
  {
    "name": "VINCE STAPLES",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2130,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "WHEN SAINTS GO MACHINE",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1600,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "ALBERT HAMMOND JR",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1430,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "AMMAR 808",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": null,
    "stage": "undefined",
    "stageId": 1000,
    "length": 1
  },
  {
    "name": "ANDA UNION",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1900,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "ANNE HAANING",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": null,
    "stage": "undefined",
    "stageId": 1000,
    "length": 1
  },
  {
    "name": "BABY IN VAIN",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 215,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "BANKSLAVE",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": null,
    "stage": "undefined",
    "stageId": 1000,
    "length": 1
  },
  {
    "name": "BCUC",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 15,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "BELLY",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1630,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "BENAL",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1600,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "BISSE",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2100,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "BITORI",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 200,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "6LACK",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1830,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "THE BLAZE",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2330,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "BLONDE REDHEAD",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2300,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "BORIS & MERZBOW",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2300,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "CELESTE",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2330,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "CEZINANDO",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1300,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "CHELSEA MANNING",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1530,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "CHELSEA WOLFE",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1800,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "CLUTCH",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 1900,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "COURTNEY MARIE ANDREWS",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1200,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "DANNY BROWN",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1700,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "DARK TRANQUILLITY",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2200,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "DE UNDERJORDISKE X FRIBYTTERDRØMME",
    "day": 8,
    "date": "Søndag, 8. juli",
    "start": 100,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "DEAD CROSS",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1500,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "DEBO BAND",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2130,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "DEBONAIR (resident DJ)",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1800,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "DJ RASHIDA",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2130,
    "stage": "Orange",
    "stageId": 3,
    "length": 1
  },
  {
    "name": "DONA ONETE",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2100,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "THE DWARFS OF EAST AGOUZA",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1400,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "EL LEOPARDO",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2230,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "EQUIKNOXX FEAT. SHANIQUE MARIE",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1200,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "GAMELAN SALUKAT",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1200,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "HALEY HEYNDERICKX",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1230,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "HEILUNG",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 100,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "HOUSE GOSPEL CHOIR",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1700,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "THE HUNNA",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1215,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "HVAD",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1800,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "INDIKA (resident DJ)",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1800,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "I’M WITH HER",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2015,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "JAMES HOLDEN AND THE ANIMAL SPIRITS",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1745,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "JILLIAN MAYER",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": null,
    "stage": "undefined",
    "stageId": 1000,
    "length": 1
  },
  {
    "name": "JOHN MAUS",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2000,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "JUANA MOLINA",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1845,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "JUJU & JORDASH",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1430,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "JUSTIN SHOULDER & CORIN",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": null,
    "stage": "undefined",
    "stageId": 1000,
    "length": 1
  },
  {
    "name": "KAKKMADDAFAKKA",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 1730,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "KALI UCHIS",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1500,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "KEDR LIVANSKIY",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1900,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "KELLY LEE OWENS",
    "day": 8,
    "date": "Søndag, 8. juli",
    "start": 30,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "KIRSTEN ASTRUP",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1545,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "KOKOKO!",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1900,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "LARGE UNIT BRAZIL EDITION",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1500,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "LAUREL HALO",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2000,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "LEKHFA",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1430,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "LLNN",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 230,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "MADALITSO BAND",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2000,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "MADBALL",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2330,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "±MAISMENOS±",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": null,
    "stage": "undefined",
    "stageId": 1000,
    "length": 1
  },
  {
    "name": "MARIBOU STATE",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2030,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "MARLON WILLIAMS",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1300,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "MAVI PHOENIX",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1300,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "MHD",
    "day": 8,
    "date": "Søndag, 8. juli",
    "start": 0000,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "MINYANTA",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1630,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "MOTORSAV",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 215,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "MYRKUR",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1700,
    "stage": "Gloria\n\t\t\t\t\t\n\t\t\t\t\t\tSaturday 7\tJuly",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "NAT BLOCH GREGERSEN",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": null,
    "stage": "undefined",
    "stageId": 1000,
    "length": 1
  },
  {
    "name": "NATHAN FAKE",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2130,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "NELSON CAN",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1900,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "NEW GEN",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1400,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "NIHILOXICA",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 1715,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "NINES",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1600,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "NYT LIV",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 130,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "OH SEES",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 0000,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "OMNI",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1815,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "OND TRO",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 300,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "OPERAP",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1300,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "OSKAR KOLIANDER",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": null,
    "stage": "undefined",
    "stageId": 1000,
    "length": 1
  },
  {
    "name": "OTIM ALPHA",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 100,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "PAAL NILSSEN-LOVE'S BRAZIL FUNK IMPRO",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2000,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "PAAL NILSSEN-LOVE'S JAPAN FREE JAZZ AND NOISE",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2200,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "PALM",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2230,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "PAUL BARSCH & TILMAN HORNIG",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": null,
    "stage": "undefined",
    "stageId": 1000,
    "length": 1
  },
  {
    "name": "PERNILLE (resident DJ)",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 1800,
    "stage": "Apollo\n\t\t\t\t\t\n\t\t\t\t\t\tThursday 5\tJuly",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "PETER SOMMER",
    "day": 7,
    "date": "uuuhhhh ved det ikke",
    "start": 1730,
    "stage": "Orange",
    "stageId": 3,
    "length": 1
  },
  {
    "name": "PIGS PIGS PIGS PIGS PIGS PIGS PIGS",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 1730,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "PREOCCUPATIONS",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2200,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "PUBLIC WORKS",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": null,
    "stage": "undefined",
    "stageId": 1000,
    "length": 1
  },
  {
    "name": "RASCASUELOS",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1615,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "REGELBAU PRESENTS CENTRAL + DJ SPORTS + C.K + MANMADE DEEJAY",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2200,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "RICHARD DAWSON BAND",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1815,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "RVG",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1230,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "SACRED PAWS",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2200,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "SAMPHA",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2300,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "SANDUNES",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2200,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "(SANDY) ALEX G",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2015,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "SAVEUS",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 1800,
    "stage": "Orange",
    "stageId": 3,
    "length": 1
  },
  {
    "name": "SCOUR",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2015,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "SIGRID",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2130,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "ŠIROM",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1345,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "SKELETONWITCH",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1400,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "SLAVES",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 1830,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "SLYDIGS",
    "day": 8,
    "date": "Søndag, 8. juli",
    "start": 15,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "SMERZ",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1645,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "STEFFI",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 1915,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "STEFFLON DON",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2000,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "SUPER PARQUET",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2030,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "SUPERORGANISM",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1830,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "TOUCHÉ AMORÉ",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1615,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "TUINA NIKIENTA OLIVIER",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": null,
    "stage": "undefined",
    "stageId": 1000,
    "length": 1
  },
  {
    "name": "TUNE-YARDS",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1500,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "TURBOLENS",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1200,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "VERONIKA GEIGER",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": null,
    "stage": "undefined",
    "stageId": 1000,
    "length": 1
  },
  {
    "name": "VETO",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1900,
    "stage": "Arena",
    "stageId": 2,
    "length": 1
  },
  {
    "name": "VIKTORIA WENDEL SKOUSEN",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": null,
    "stage": "undefined",
    "stageId": 1000,
    "length": 1
  },
  {
    "name": "WATAIN",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 130,
    "stage": "Avalon",
    "stageId": 5,
    "length": 1
  },
  {
    "name": "THE WEATHER STATION",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1400,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "WILKINSON",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 100,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "YASMINE HAMDAN",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1600,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "YASUAKI SHIMIZU",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1230,
    "stage": "Gloria",
    "stageId": 4,
    "length": 1
  },
  {
    "name": "YONAKA",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1415,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "YOUNG FATHERS",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2230,
    "stage": "Pavilion",
    "stageId": 1,
    "length": 1
  },
  {
    "name": "ZOE WALKER & NEIL BROMWICH",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": null,
    "stage": "undefined",
    "stageId": 1000,
    "length": 1
  },
  {
    "name": "Ø [PHASE]",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 230,
    "stage": "Apollo",
    "stageId": 0,
    "length": 1
  },
  {
    "name": "ADDISABABABAND",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 1700,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "ALBIN LEE MELDAU",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 1530,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "ALCABEAN",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 2000,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "ARTIGEARDIT",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 1930,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "B FROM E",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 1830,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "BAIME",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 2300,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "CABAL",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 2130,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "CLARISSA CONNELLY",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 1830,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "CTRLS",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 2300,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "DANIEL SAVI (Resident DJ)",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 1800,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "DIRT FORGE",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 1400,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "DISCOTHÈQUE MOBUMFE (Resident DJ)",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 1800,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "ECSTASY IN ORDER",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 2130,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "EERA",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 1530,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "ELLIS MAY",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 1630,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "EMIL KRUSE",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 1530,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "FOOL",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 1800,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "FRAADS",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 1500,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "GOSS",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 1800,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "GURLI OCTAVIA",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 1400,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "HOLM",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 1530,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "IRIS GOLD",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2300,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "JADA",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 1400,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "JAKOB OGAWA",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 1830,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "KIPPENBERGER",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 1700,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "KONNI KASS",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 1400,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "LOKE DEPH",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 1630,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "LUSTER",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 2000,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "LYRA VALENZA",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 2000,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "LØD",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2000,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "MARATON",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 1700,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "MARSHALL CECIL",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2130,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "MIRIAM BRYANT",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 1700,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "MOUNT LIBERATION UNLIMITED",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 1930,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "PALE HONEY",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 2300,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "ROME IS NOT A TOWN",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 1830,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "SASSY 009",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 2130,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "SIGMA",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 1500,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "SIMON LITTAUER",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2130,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  },
  {
    "name": "SISTA BOSSEN",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 2130,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "SLÆGT",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 2300,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "TAN",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2300,
    "stage": "Rising",
    "stageId": 7,
    "length": 1
  },
  {
    "name": "TIGHT CHERRY (Resident DJ)",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 1800,
    "stage": "Countdown",
    "stageId": 6,
    "length": 1
  }
];

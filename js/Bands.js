//$(".media__header").each(function(k,v){ bands.push({  name: $(this).find(".media__title-text span").text(), fullDate: $.trim($(this).find(".media__artist-gig").text())  }) });
//https://www.roskilde-festival.dk/music/2018?view=poster
// copy(bands)
var bands = [
  {
    "name": "EMINEM",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "BRUNO MARS",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "GORILLAZ",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "NICK CAVE & THE BAD SEEDS",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "NINE INCH NAILS",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "MASSIVE ATTACK",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "DAVID BYRNE",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "DUA LIPA",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "NEPHEW",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "ALEX VARGAS",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "ANDERSON .PAAK & THE FREE NATIONALS",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "BEN FROST",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "BLACK STAR",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "CHARLOTTE GAINSBOURG",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "CV JØRGENSEN",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "DESCENDENTS",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "FEVER RAY",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "FIRST AID KIT",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "FLEET FOXES",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "FOUR TET",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "INTERPOL",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "JOEY BADA$$",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "KHALID",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "MIKE SKINNER & MURKAGE PRESENT TONGA",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "MOGWAI",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "MY BLOODY VALENTINE",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "ODESZA",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "PABLO MOSES",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "ST. VINCENT",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "STONE SOUR",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "STORMZY",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "THE MINDS OF 99",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "VINCE STAPLES",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "WHEN SAINTS GO MACHINE",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "AMMAR 808",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "ANDA UNION",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "ANNE HAANING",
    "fullDate": ""
  },
  {
    "name": "BABY IN VAIN",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "BANKSLAVE",
    "fullDate": ""
  },
  {
    "name": "BCUC",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "BELLY",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "BENAL",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "BISSE",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "BITORI",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "6LACK",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "THE BLAZE",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "BORIS & MERZBOW",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "CELESTE",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "CEZINANDO",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "CHELSEA MANNING",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "CHELSEA WOLFE",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "CLUTCH",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "DANNY BROWN",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "DARK TRANQUILITY",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "DE UNDERJORDISKE X FRIBYTTERDRØMME",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "DEAD CROSS",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "DEBO BAND",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "DJ RASHIDA",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "DONA ONETE",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "THE DWARFS OF EAST AGOUZA",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "EL LEOPARDO",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "EQUIKNOXX FEAT. SHANIQUE MARIE",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "GAMELAN SALUKAT",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "HEILUNG",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "HOUSE GOSPEL CHOIR",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "THE HUNNA",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "HVAD",
    "fullDate": ""
  },
  {
    "name": "I’M WITH HER",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "JAMES HOLDEN AND THE ANIMAL SPIRITS",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "JILLIAN MAYER",
    "fullDate": ""
  },
  {
    "name": "JOHN MAUS",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "JUANA MOLINA",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "JUJU & JORDASH",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "JUSTIN SHOULDER & CORIN",
    "fullDate": ""
  },
  {
    "name": "KAKKMADDAFAKKA",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "KALI UCHIS",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "KEDR LIVANSKIY",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "KELLY LEE OWENS",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "KIRSTEN ASTRUP",
    "fullDate": ""
  },
  {
    "name": "KOKOKO!",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "LARGE UNIT BRAZIL EDITION",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "LAUREL HALO",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "LEKHFA",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "LLNN",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "MADALITSO BAND",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "±MAISMENOS±",
    "fullDate": ""
  },
  {
    "name": "MARIBOU STATE",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "MHD",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "MINYANTA",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "MOTORSAV",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "MYRKUR",
    "fullDate": "Friday 6\tJuly, 2018\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\tSaturday 7\tJuly, 2018"
  },
  {
    "name": "NAT BLOCH GREGERSEN",
    "fullDate": ""
  },
  {
    "name": "NATHAN FAKE",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "NELSON CAN",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "NEW GEN",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "NIHILOXICA",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "NINES",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "NYT LIV",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "OH SEES",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "OMNI",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "OND TRO",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "OPERAP",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "OSKAR KOLIANDER",
    "fullDate": ""
  },
  {
    "name": "OTIM ALPHA",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "PAAL NILSSEN-LOVE'S BRAZIL FUNK IMPRO",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "PAAL NILSSEN-LOVE'S JAPAN FREE JAZZ AND NOISE",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "PALM",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "PAUL BARSCH & TILMAN HORNIG",
    "fullDate": ""
  },
  {
    "name": "PETER SOMMER",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "PIGS PIGS PIGS PIGS PIGS PIGS PIGS",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "PREOCCUPATIONS",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "PUBLIC WORKS",
    "fullDate": ""
  },
  {
    "name": "RASCASUELOS",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "REGELBAU PRESENTS CENTRAL + DJ SPORTS + C.K + MANMADE DEEJAY",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "RICHARD DAWSON BAND",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "SACRED PAWS",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "SAMPHA",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "SANDUNES",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "(SANDY) ALEX G",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "SAVEUS",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "SCOUR",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "SIGRID",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "ŠIROM",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "SKELETONWITCH",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "SLAVES",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "SLYDIGS",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "SMERZ",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "STEFFLON DON",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "SUPER PARQUET",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "SUPERORGANISM",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "TOUCHÉ AMORÉ",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "TUINA NIKIENTA OLIVIER",
    "fullDate": ""
  },
  {
    "name": "TUNE-YARDS",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "TURBOLENS",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "VERONIKA GEIGER",
    "fullDate": ""
  },
  {
    "name": "VETO",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "VIKTORIA WENDEL SKOUSEN",
    "fullDate": ""
  },
  {
    "name": "WATAIN",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "THE WEATHER STATION",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "WILKINSON",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "YASMINE HAMDAN",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "YASUAKI SHIMIZU",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "YONAKA",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "YOUNG FATHERS",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "ZOE WALKER & NEIL BROMWICH",
    "fullDate": ""
  },
  {
    "name": "Ø [PHASE]",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "ADDISABABABAND",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "ALBIN LEE MELDAU",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "ALCABEAN",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "ARTIGEARDIT",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "B FROM E",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "BAIME",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "CABAL",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "CLARISSA CONNELLY",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "CTRLS",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "DANIEL SAVI (Resident DJ)",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "DIRT FORGE",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "DISCOTHÈQUE MOBUMFE (Resident DJ)",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "ECSTASY IN ORDER",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "EERA",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "ELLIS MAY",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "EMIL KRUSE",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "FOOL",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "FRAADS",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "GOSS",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "GURLI OCTAVIA",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "HOLM",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "IRIS GOLD",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "JADA",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "JAKOB OGAWA",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "KIPPENBERGER",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "KONNI KASS",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "LOKE DEPH",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "LUSTER",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "LYRA VALENZA",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "LØD",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "MARATON",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "MARSHALL CECIL",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "MIRIAM BRYANT",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "MOUNT LIBERATION UNLIMITED",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "PALE HONEY",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "ROME IS NOT A TOWN",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "SASSY 009",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "SIGMA",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "SIMON LITTAUER",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "SISTA BOSSEN",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "SLÆGT",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "TAN",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "TIGHT CHERRY (Resident DJ)",
    "fullDate": "Monday 2\tJuly, 2018"
  }
];
// var programArray = [];
// $.each(bands, function(k,v){
//   day = getPlayDay(v.fullDate);
//
//   var a = [1,1.5,2];
//   var length = a[Math.floor(Math.random() * a.length)];
//   var b = [100, 900, 1345, 2000, 2130, 2200];
//   var start = b[Math.floor(Math.random() * b.length)];
//   var stage = Math.floor(Math.random() * 6);
//
//   programArray.push({name: v.name, day: day, start: start, length: length, stage: stage});
// });
// console.log(programArray);

// function getPlayDay(fd){
//   if(fd == "") return -1;
//   if(fd == "30") return 0;
//   if(fd == "Sunday 1\tJuly, 2018") return 1;
//   if(fd == "Monday 2\tJuly, 2018") return 2;
//   if(fd == "Tuesday 3\tJuly, 2018") return 3;
//   if(fd == "Wednesday 4\tJuly, 2018") return 4;
//   if(fd == "Thursday 5\tJuly, 2018") return 5;
//   if(fd == "Friday 6\tJuly, 2018") return 6;
//   if(fd == "Saturday 7\tJuly, 2018") return 7;
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
//     if(fd == 8) return "Lørdag, 7. juli";
//     return "uuuhhhh ved det ikke";
// }
// 30 juni - 7 july
// lørdag - lørdag

var programArray = [
  {
    "name": "EMINEM",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 1345,
    "stage": 3
  },
  {
    "name": "BRUNO MARS",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2000,
    "stage": 4
  },
  {
    "name": "GORILLAZ",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1345,
    "stage": 2
  },
  {
    "name": "NICK CAVE & THE BAD SEEDS",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2200,
    "stage": 5
  },
  {
    "name": "NINE INCH NAILS",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2200,
    "stage": 4
  },
  {
    "name": "MASSIVE ATTACK",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1345,
    "stage": 3
  },
  {
    "name": "DAVID BYRNE",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2200,
    "stage": 0
  },
  {
    "name": "DUA LIPA",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 100,
    "stage": 3
  },
  {
    "name": "NEPHEW",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2000,
    "stage": 3
  },
  {
    "name": "ALEX VARGAS",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 900,
    "stage": 5
  },
  {
    "name": "ANDERSON .PAAK & THE FREE NATIONALS",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1345,
    "stage": 3
  },
  {
    "name": "BEN FROST",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1345,
    "stage": 2
  },
  {
    "name": "BLACK STAR",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2000,
    "stage": 3
  },
  {
    "name": "CHARLOTTE GAINSBOURG",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2130,
    "stage": 4
  },
  {
    "name": "CV JØRGENSEN",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2130,
    "stage": 5
  },
  {
    "name": "DESCENDENTS",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2130,
    "stage": 3
  },
  {
    "name": "FEVER RAY",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 900,
    "stage": 0
  },
  {
    "name": "FIRST AID KIT",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 100,
    "stage": 0
  },
  {
    "name": "FLEET FOXES",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2130,
    "stage": 3
  },
  {
    "name": "FOUR TET",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2130,
    "stage": 3
  },
  {
    "name": "INTERPOL",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 100,
    "stage": 1
  },
  {
    "name": "JOEY BADA$$",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2000,
    "stage": 2
  },
  {
    "name": "KHALID",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 100,
    "stage": 2
  },
  {
    "name": "MIKE SKINNER & MURKAGE PRESENT TONGA",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2200,
    "stage": 2
  },
  {
    "name": "MOGWAI",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2130,
    "stage": 0
  },
  {
    "name": "MY BLOODY VALENTINE",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2200,
    "stage": 1
  },
  {
    "name": "ODESZA",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2000,
    "stage": 5
  },
  {
    "name": "PABLO MOSES",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2200,
    "stage": 3
  },
  {
    "name": "ST. VINCENT",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 100,
    "stage": 4
  },
  {
    "name": "STONE SOUR",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 100,
    "stage": 4
  },
  {
    "name": "STORMZY",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 900,
    "stage": 1
  },
  {
    "name": "THE MINDS OF 99",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2200,
    "stage": 2
  },
  {
    "name": "VINCE STAPLES",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2130,
    "stage": 1
  },
  {
    "name": "WHEN SAINTS GO MACHINE",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2200,
    "stage": 4
  },
  {
    "name": "AMMAR 808",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 100,
    "stage": 5
  },
  {
    "name": "ANDA UNION",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1345,
    "stage": 3
  },
  {
    "name": "ANNE HAANING",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 2200,
    "stage": 3
  },
  {
    "name": "BABY IN VAIN",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1345,
    "stage": 3
  },
  {
    "name": "BANKSLAVE",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 1345,
    "stage": 2
  },
  {
    "name": "BCUC",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2000,
    "stage": 2
  },
  {
    "name": "BELLY",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2000,
    "stage": 1
  },
  {
    "name": "BENAL",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2130,
    "stage": 1
  },
  {
    "name": "BISSE",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2200,
    "stage": 4
  },
  {
    "name": "BITORI",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2130,
    "stage": 5
  },
  {
    "name": "6LACK",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1345,
    "stage": 1
  },
  {
    "name": "THE BLAZE",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 900,
    "stage": 4
  },
  {
    "name": "BORIS & MERZBOW",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 900,
    "stage": 2
  },
  {
    "name": "CELESTE",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2130,
    "stage": 1
  },
  {
    "name": "CEZINANDO",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1345,
    "stage": 1
  },
  {
    "name": "CHELSEA MANNING",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2130,
    "stage": 3
  },
  {
    "name": "CHELSEA WOLFE",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 900,
    "stage": 2
  },
  {
    "name": "CLUTCH",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 1345,
    "stage": 1
  },
  {
    "name": "DANNY BROWN",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1345,
    "stage": 3
  },
  {
    "name": "DARK TRANQUILITY",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2130,
    "stage": 4
  },
  {
    "name": "DE UNDERJORDISKE X FRIBYTTERDRØMME",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 100,
    "stage": 5
  },
  {
    "name": "DEAD CROSS",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2130,
    "stage": 5
  },
  {
    "name": "DEBO BAND",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2200,
    "stage": 5
  },
  {
    "name": "DJ RASHIDA",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 900,
    "stage": 4
  },
  {
    "name": "DONA ONETE",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1345,
    "stage": 1
  },
  {
    "name": "THE DWARFS OF EAST AGOUZA",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2200,
    "stage": 4
  },
  {
    "name": "EL LEOPARDO",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2130,
    "stage": 2
  },
  {
    "name": "EQUIKNOXX FEAT. SHANIQUE MARIE",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2130,
    "stage": 3
  },
  {
    "name": "GAMELAN SALUKAT",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2130,
    "stage": 1
  },
  {
    "name": "HEILUNG",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2000,
    "stage": 2
  },
  {
    "name": "HOUSE GOSPEL CHOIR",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1345,
    "stage": 1
  },
  {
    "name": "THE HUNNA",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 900,
    "stage": 2
  },
  {
    "name": "HVAD",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 1345,
    "stage": 2
  },
  {
    "name": "I’M WITH HER",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2000,
    "stage": 5
  },
  {
    "name": "JAMES HOLDEN AND THE ANIMAL SPIRITS",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2200,
    "stage": 2
  },
  {
    "name": "JILLIAN MAYER",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 2200,
    "stage": 5
  },
  {
    "name": "JOHN MAUS",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1345,
    "stage": 5
  },
  {
    "name": "JUANA MOLINA",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 900,
    "stage": 3
  },
  {
    "name": "JUJU & JORDASH",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1345,
    "stage": 2
  },
  {
    "name": "JUSTIN SHOULDER & CORIN",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 900,
    "stage": 4
  },
  {
    "name": "KAKKMADDAFAKKA",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2130,
    "stage": 5
  },
  {
    "name": "KALI UCHIS",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2200,
    "stage": 4
  },
  {
    "name": "KEDR LIVANSKIY",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2130,
    "stage": 1
  },
  {
    "name": "KELLY LEE OWENS",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2000,
    "stage": 3
  },
  {
    "name": "KIRSTEN ASTRUP",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 900,
    "stage": 4
  },
  {
    "name": "KOKOKO!",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2130,
    "stage": 1
  },
  {
    "name": "LARGE UNIT BRAZIL EDITION",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 900,
    "stage": 1
  },
  {
    "name": "LAUREL HALO",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 900,
    "stage": 1
  },
  {
    "name": "LEKHFA",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1345,
    "stage": 3
  },
  {
    "name": "LLNN",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2000,
    "stage": 5
  },
  {
    "name": "MADALITSO BAND",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 1345,
    "stage": 0
  },
  {
    "name": "±MAISMENOS±",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 1345,
    "stage": 2
  },
  {
    "name": "MARIBOU STATE",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2200,
    "stage": 0
  },
  {
    "name": "MHD",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 100,
    "stage": 1
  },
  {
    "name": "MINYANTA",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2200,
    "stage": 3
  },
  {
    "name": "MOTORSAV",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 100,
    "stage": 4
  },
  {
    "name": "MYRKUR",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2130,
    "stage": 1
  },
  {
    "name": "MYRKUR",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 130,
    "stage": 1
  },
  {
    "name": "NAT BLOCH GREGERSEN",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 2130,
    "stage": 5
  },
  {
    "name": "NATHAN FAKE",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2000,
    "stage": 1
  },
  {
    "name": "NELSON CAN",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 900,
    "stage": 4
  },
  {
    "name": "NEW GEN",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 900,
    "stage": 5
  },
  {
    "name": "NIHILOXICA",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2000,
    "stage": 2
  },
  {
    "name": "NINES",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2000,
    "stage": 5
  },
  {
    "name": "NYT LIV",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 100,
    "stage": 2
  },
  {
    "name": "OH SEES",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1345,
    "stage": 4
  },
  {
    "name": "OMNI",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 900,
    "stage": 3
  },
  {
    "name": "OND TRO",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1345,
    "stage": 2
  },
  {
    "name": "OPERAP",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 900,
    "stage": 2
  },
  {
    "name": "OSKAR KOLIANDER",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 100,
    "stage": 3
  },
  {
    "name": "OTIM ALPHA",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 100,
    "stage": 0
  },
  {
    "name": "PAAL NILSSEN-LOVE'S BRAZIL FUNK IMPRO",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 1345,
    "stage": 2
  },
  {
    "name": "PAAL NILSSEN-LOVE'S JAPAN FREE JAZZ AND NOISE",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 900,
    "stage": 4
  },
  {
    "name": "PALM",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2000,
    "stage": 0
  },
  {
    "name": "PAUL BARSCH & TILMAN HORNIG",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 2130,
    "stage": 3
  },
  {
    "name": "PETER SOMMER",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 900,
    "stage": 2
  },
  {
    "name": "PIGS PIGS PIGS PIGS PIGS PIGS PIGS",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 100,
    "stage": 5
  },
  {
    "name": "PREOCCUPATIONS",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2200,
    "stage": 3
  },
  {
    "name": "PUBLIC WORKS",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 2130,
    "stage": 1
  },
  {
    "name": "RASCASUELOS",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2130,
    "stage": 3
  },
  {
    "name": "REGELBAU PRESENTS CENTRAL + DJ SPORTS + C.K + MANMADE DEEJAY",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 900,
    "stage": 1
  },
  {
    "name": "RICHARD DAWSON BAND",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2200,
    "stage": 2
  },
  {
    "name": "SACRED PAWS",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2200,
    "stage": 3
  },
  {
    "name": "SAMPHA",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 100,
    "stage": 0
  },
  {
    "name": "SANDUNES",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2200,
    "stage": 0
  },
  {
    "name": "(SANDY) ALEX G",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2130,
    "stage": 2
  },
  {
    "name": "SAVEUS",
    "day": 4,
    "date": "Onsdag, 4. juli",
    "start": 2200,
    "stage": 2
  },
  {
    "name": "SCOUR",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 1345,
    "stage": 5
  },
  {
    "name": "SIGRID",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2130,
    "stage": 1
  },
  {
    "name": "ŠIROM",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2200,
    "stage": 0
  },
  {
    "name": "SKELETONWITCH",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 1345,
    "stage": 0
  },
  {
    "name": "SLAVES",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2130,
    "stage": 3
  },
  {
    "name": "SLYDIGS",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2200,
    "stage": 1
  },
  {
    "name": "SMERZ",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2200,
    "stage": 2
  },
  {
    "name": "STEFFLON DON",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2130,
    "stage": 5
  },
  {
    "name": "SUPER PARQUET",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 100,
    "stage": 0
  },
  {
    "name": "SUPERORGANISM",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2000,
    "stage": 4
  },
  {
    "name": "TOUCHÉ AMORÉ",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2200,
    "stage": 3
  },
  {
    "name": "TUINA NIKIENTA OLIVIER",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 900,
    "stage": 2
  },
  {
    "name": "TUNE-YARDS",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2200,
    "stage": 1
  },
  {
    "name": "TURBOLENS",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 900,
    "stage": 3
  },
  {
    "name": "VERONIKA GEIGER",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 2200,
    "stage": 2
  },
  {
    "name": "VETO",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 100,
    "stage": 2
  },
  {
    "name": "VIKTORIA WENDEL SKOUSEN",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 2130,
    "stage": 0
  },
  {
    "name": "WATAIN",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 900,
    "stage": 5
  },
  {
    "name": "THE WEATHER STATION",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 900,
    "stage": 5
  },
  {
    "name": "WILKINSON",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2000,
    "stage": 1
  },
  {
    "name": "YASMINE HAMDAN",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 900,
    "stage": 4
  },
  {
    "name": "YASUAKI SHIMIZU",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2200,
    "stage": 5
  },
  {
    "name": "YONAKA",
    "day": 7,
    "date": "Lørdag, 7. juli",
    "start": 2000,
    "stage": 1
  },
  {
    "name": "YOUNG FATHERS",
    "day": 6,
    "date": "Fredag, 6. juli",
    "start": 2200,
    "stage": 4
  },
  {
    "name": "ZOE WALKER & NEIL BROMWICH",
    "day": -1,
    "date": "Ved det ikke endnu",
    "start": 2000,
    "stage": 1
  },
  {
    "name": "Ø [PHASE]",
    "day": 5,
    "date": "Torsdag, 5. juli",
    "start": 2000,
    "stage": 2
  },
  {
    "name": "ADDISABABABAND",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 1345,
    "stage": 1
  },
  {
    "name": "ALBIN LEE MELDAU",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 2000,
    "stage": 4
  },
  {
    "name": "ALCABEAN",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 900,
    "stage": 4
  },
  {
    "name": "ARTIGEARDIT",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 100,
    "stage": 2
  },
  {
    "name": "B FROM E",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 100,
    "stage": 3
  },
  {
    "name": "BAIME",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 2200,
    "stage": 0
  },
  {
    "name": "CABAL",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 2130,
    "stage": 5
  },
  {
    "name": "CLARISSA CONNELLY",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 1345,
    "stage": 4
  },
  {
    "name": "CTRLS",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 2000,
    "stage": 5
  },
  {
    "name": "DANIEL SAVI (Resident DJ)",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 2200,
    "stage": 5
  },
  {
    "name": "DIRT FORGE",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 2200,
    "stage": 1
  },
  {
    "name": "DISCOTHÈQUE MOBUMFE (Resident DJ)",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2130,
    "stage": 3
  },
  {
    "name": "ECSTASY IN ORDER",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 900,
    "stage": 5
  },
  {
    "name": "EERA",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 2200,
    "stage": 1
  },
  {
    "name": "ELLIS MAY",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2200,
    "stage": 1
  },
  {
    "name": "EMIL KRUSE",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 2000,
    "stage": 3
  },
  {
    "name": "FOOL",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2200,
    "stage": 3
  },
  {
    "name": "FRAADS",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 100,
    "stage": 3
  },
  {
    "name": "GOSS",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 100,
    "stage": 3
  },
  {
    "name": "GURLI OCTAVIA",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 100,
    "stage": 3
  },
  {
    "name": "HOLM",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2130,
    "stage": 4
  },
  {
    "name": "IRIS GOLD",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 100,
    "stage": 0
  },
  {
    "name": "JADA",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 1345,
    "stage": 0
  },
  {
    "name": "JAKOB OGAWA",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2000,
    "stage": 0
  },
  {
    "name": "KIPPENBERGER",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 1345,
    "stage": 3
  },
  {
    "name": "KONNI KASS",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2130,
    "stage": 1
  },
  {
    "name": "LOKE DEPH",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 900,
    "stage": 5
  },
  {
    "name": "LUSTER",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 900,
    "stage": 3
  },
  {
    "name": "LYRA VALENZA",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 900,
    "stage": 1
  },
  {
    "name": "LØD",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2130,
    "stage": 1
  },
  {
    "name": "MARATON",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2130,
    "stage": 5
  },
  {
    "name": "MARSHALL CECIL",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2200,
    "stage": 4
  },
  {
    "name": "MIRIAM BRYANT",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 2000,
    "stage": 2
  },
  {
    "name": "MOUNT LIBERATION UNLIMITED",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 100,
    "stage": 4
  },
  {
    "name": "PALE HONEY",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 100,
    "stage": 4
  },
  {
    "name": "ROME IS NOT A TOWN",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 100,
    "stage": 4
  },
  {
    "name": "SASSY 009",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 2200,
    "stage": 4
  },
  {
    "name": "SIGMA",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2000,
    "stage": 1
  },
  {
    "name": "SIMON LITTAUER",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2000,
    "stage": 1
  },
  {
    "name": "SISTA BOSSEN",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 900,
    "stage": 4
  },
  {
    "name": "SLÆGT",
    "day": 1,
    "date": "Søndag, 1. juli",
    "start": 100,
    "stage": 1
  },
  {
    "name": "TAN",
    "day": 3,
    "date": "Tirsdag, 3. juli",
    "start": 2200,
    "stage": 4
  },
  {
    "name": "TIGHT CHERRY (Resident DJ)",
    "day": 2,
    "date": "Mandag, 2. juli",
    "start": 2000,
    "stage": 3
  }
];

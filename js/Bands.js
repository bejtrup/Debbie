//$(".media__header").each(function(k,v){ bands.push({  name: $(this).find(".media__title-text span").text(), fullDate: $.trim($(this).find(".media__artist-gig").text())  }) });
//https://www.roskilde-festival.dk/music/2018?view=poster
// copy(bands)

var bands = [
  {
    "name": "CHELSEA MANNING",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
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
    "name": "NINE INCH NAILS",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "CARDI B",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "DAVID BYRNE",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "KHALID",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "NEPHEW",
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
    "name": "ALEX VARGAS",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "AMMAR 808",
    "fullDate": "Friday 6\tJuly, 2018"
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
    "name": "BABY IN VAIN",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "BAIME",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "BANKSLAVE",
    "fullDate": ""
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
    "name": "6LACK",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "BLACK STAR",
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
    "name": "CABAL",
    "fullDate": "Monday 2\tJuly, 2018"
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
    "name": "CHELSEA WOLFE",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "CLARISSA CONNELLY",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "CLUTCH",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "CTRLS",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "CV JØRGENSEN",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "DANIEL SAVI (Resident DJ)",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "DEAD CROSS",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "DESCENDENTS",
    "fullDate": "Friday 6\tJuly, 2018"
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
    "name": "EL LEOPARDO",
    "fullDate": "Thursday 5\tJuly, 2018"
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
    "name": "FOOL",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "FOUR TET",
    "fullDate": "Friday 6\tJuly, 2018"
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
    "name": "HEILUNG",
    "fullDate": "Thursday 5\tJuly, 2018"
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
    "name": "JUANA MOLINA",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "KAKKMADDAFAKKA",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "KELLY LEE OWENS",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "KIPPENBERGER",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "KOKOKO!",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "KONNI KASS",
    "fullDate": "Tuesday 3\tJuly, 2018"
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
    "name": "±MAISMENOS±",
    "fullDate": ""
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
    "name": "MHD",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "MIRIAM BRYANT",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "MOGWAI",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "MOTORSAV",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "MOUNT LIBERATION UNLIMITED",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "MY BLOODY VALENTINE",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "MYRKUR",
    "fullDate": "Friday 6\tJuly, 2018\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\tSaturday 7\tJuly, 2018"
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
    "name": "NYT LIV",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "ODESZA",
    "fullDate": "Friday 6\tJuly, 2018"
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
    "name": "PALE HONEY",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "PALM",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "PETER SOMMER",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "PREOCCUPATIONS",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "REGELBAU PRESENTS CENTRAL + DJ SPORTS + C.K + MANMADE DEEJAY",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "ROME IS NOT A TOWN",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "SAMPHA",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "(SANDY) ALEX G",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "SASSY 009",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "SCOUR",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "SIGMA",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "SIGRID",
    "fullDate": "Saturday 7\tJuly, 2018"
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
    "name": "SLAVES",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "SLÆGT",
    "fullDate": "Sunday 1\tJuly, 2018"
  },
  {
    "name": "SMERZ",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "ST. VINCENT",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "STEFFLON DON",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "STORMZY",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "SUPERORGANISM",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "TAN",
    "fullDate": "Tuesday 3\tJuly, 2018"
  },
  {
    "name": "THE MINDS OF 99",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "TIGHT CHERRY (Resident DJ)",
    "fullDate": "Monday 2\tJuly, 2018"
  },
  {
    "name": "TURBOLENS",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "VETO",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "VINCE STAPLES",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "WATAIN",
    "fullDate": "Friday 6\tJuly, 2018"
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
  }
];

// var programArray = [[],[],[],[],[],[],[],[],[],[]];
// var num;
// $.each(bands, function(k,v){
//   num = getPlayDay(v.fullDate);
//   if(num == -1) num = 8;
//   if(num == 1000) num = 9;
//   programArray[num].push({name: v.name, start: 0, end: 0, stage: "Orange"});
// });
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

function getPlayDay(fd){
  if(fd == "") return -1;
  if(fd == "30") return 0;
  if(fd == "1") return 1;
  if(fd == "2") return 2;
  if(fd == "3") return 3;
  if(fd == "Wednesday 4\tJuly, 2018") return 4;
  if(fd == "Thursday 5\tJuly, 2018") return 5;
  if(fd == "Friday 6\tJuly, 2018") return 6;
  if(fd == "Saturday 7\tJuly, 2018") return 7;
  return 1000;
}
// 30 juni - 7 july
// lørdag - lørdag

var programArray = [
  {
    "name": "CHELSEA MANNING",
    "day": 5,
    "start": 2000,
    "length": 2,
    "stage": 5
  },
  {
    "name": "EMINEM",
    "day": 4,
    "start": 2000,
    "length": 2,
    "stage": 0
  },
  {
    "name": "BRUNO MARS",
    "day": 5,
    "start": 2200,
    "length": 2,
    "stage": 4
  },
  {
    "name": "GORILLAZ",
    "day": 7,
    "start": 100,
    "length": 1,
    "stage": 5
  },
  {
    "name": "NINE INCH NAILS",
    "day": 4,
    "start": 900,
    "length": 1,
    "stage": 4
  },
  {
    "name": "CARDI B",
    "day": 4,
    "start": 900,
    "length": 2,
    "stage": 3
  },
  {
    "name": "DAVID BYRNE",
    "day": 6,
    "start": 2200,
    "length": 1,
    "stage": 2
  },
  {
    "name": "KHALID",
    "day": 5,
    "start": 2130,
    "length": 1,
    "stage": 0
  },
  {
    "name": "NEPHEW",
    "day": 5,
    "start": 100,
    "length": 1,
    "stage": 4
  },
  {
    "name": "ADDISABABABAND",
    "day": 1000,
    "start": 100,
    "length": 2,
    "stage": 2
  },
  {
    "name": "ALBIN LEE MELDAU",
    "day": 1000,
    "start": 2000,
    "length": 2,
    "stage": 3
  },
  {
    "name": "ALCABEAN",
    "day": 1000,
    "start": 100,
    "length": 1.5,
    "stage": 4
  },
  {
    "name": "ALEX VARGAS",
    "day": 6,
    "start": 900,
    "length": 1.5,
    "stage": 5
  },
  {
    "name": "AMMAR 808",
    "day": 6,
    "start": 2000,
    "length": 1.5,
    "stage": 4
  },
  {
    "name": "ARTIGEARDIT",
    "day": 1000,
    "start": 2130,
    "length": 1,
    "stage": 4
  },
  {
    "name": "B FROM E",
    "day": 1000,
    "start": 2000,
    "length": 1.5,
    "stage": 0
  },
  {
    "name": "BABY IN VAIN",
    "day": 6,
    "start": 900,
    "length": 1,
    "stage": 3
  },
  {
    "name": "BAIME",
    "day": 1000,
    "start": 900,
    "length": 1,
    "stage": 3
  },
  {
    "name": "BANKSLAVE",
    "day": -1,
    "start": 2000,
    "length": 1,
    "stage": 2
  },
  {
    "name": "BENAL",
    "day": 6,
    "start": 2200,
    "length": 2,
    "stage": 4
  },
  {
    "name": "BISSE",
    "day": 6,
    "start": 1345,
    "length": 1,
    "stage": 5
  },
  {
    "name": "6LACK",
    "day": 5,
    "start": 1345,
    "length": 2,
    "stage": 0
  },
  {
    "name": "BLACK STAR",
    "day": 5,
    "start": 2130,
    "length": 1,
    "stage": 3
  },
  {
    "name": "THE BLAZE",
    "day": 4,
    "start": 2130,
    "length": 2,
    "stage": 2
  },
  {
    "name": "BORIS & MERZBOW",
    "day": 5,
    "start": 2000,
    "length": 2,
    "stage": 3
  },
  {
    "name": "CABAL",
    "day": 1000,
    "start": 2200,
    "length": 1,
    "stage": 2
  },
  {
    "name": "CELESTE",
    "day": 6,
    "start": 1345,
    "length": 1,
    "stage": 0
  },
  {
    "name": "CEZINANDO",
    "day": 5,
    "start": 1345,
    "length": 2,
    "stage": 2
  },
  {
    "name": "CHELSEA WOLFE",
    "day": 5,
    "start": 100,
    "length": 1,
    "stage": 2
  },
  {
    "name": "CLARISSA CONNELLY",
    "day": 1000,
    "start": 1345,
    "length": 1,
    "stage": 4
  },
  {
    "name": "CLUTCH",
    "day": 4,
    "start": 2130,
    "length": 1.5,
    "stage": 4
  },
  {
    "name": "CTRLS",
    "day": 1000,
    "start": 900,
    "length": 1,
    "stage": 2
  },
  {
    "name": "CV JØRGENSEN",
    "day": 7,
    "start": 2200,
    "length": 1.5,
    "stage": 3
  },
  {
    "name": "DANIEL SAVI (Resident DJ)",
    "day": 1000,
    "start": 900,
    "length": 1,
    "stage": 0
  },
  {
    "name": "DEAD CROSS",
    "day": 6,
    "start": 2000,
    "length": 1.5,
    "stage": 4
  },
  {
    "name": "DESCENDENTS",
    "day": 6,
    "start": 2200,
    "length": 1.5,
    "stage": 1
  },
  {
    "name": "DIRT FORGE",
    "day": 1000,
    "start": 2200,
    "length": 1.5,
    "stage": 1
  },
  {
    "name": "DISCOTHÈQUE MOBUMFE (Resident DJ)",
    "day": 1000,
    "start": 1345,
    "length": 1,
    "stage": 0
  },
  {
    "name": "ECSTASY IN ORDER",
    "day": 1000,
    "start": 2130,
    "length": 2,
    "stage": 4
  },
  {
    "name": "EERA",
    "day": 1000,
    "start": 2130,
    "length": 2,
    "stage": 4
  },
  {
    "name": "EL LEOPARDO",
    "day": 5,
    "start": 2130,
    "length": 2,
    "stage": 3
  },
  {
    "name": "ELLIS MAY",
    "day": 1000,
    "start": 2200,
    "length": 1.5,
    "stage": 2
  },
  {
    "name": "EMIL KRUSE",
    "day": 1000,
    "start": 2000,
    "length": 2,
    "stage": 4
  },
  {
    "name": "FEVER RAY",
    "day": 6,
    "start": 900,
    "length": 1,
    "stage": 0
  },
  {
    "name": "FIRST AID KIT",
    "day": 5,
    "start": 2000,
    "length": 2,
    "stage": 5
  },
  {
    "name": "FLEET FOXES",
    "day": 6,
    "start": 2200,
    "length": 1.5,
    "stage": 2
  },
  {
    "name": "FOOL",
    "day": 1000,
    "start": 2200,
    "length": 2,
    "stage": 3
  },
  {
    "name": "FOUR TET",
    "day": 6,
    "start": 900,
    "length": 2,
    "stage": 2
  },
  {
    "name": "FRAADS",
    "day": 1000,
    "start": 2130,
    "length": 2,
    "stage": 5
  },
  {
    "name": "GOSS",
    "day": 1000,
    "start": 1345,
    "length": 1.5,
    "stage": 3
  },
  {
    "name": "GURLI OCTAVIA",
    "day": 1000,
    "start": 2200,
    "length": 1.5,
    "stage": 0
  },
  {
    "name": "HEILUNG",
    "day": 5,
    "start": 2000,
    "length": 2,
    "stage": 4
  },
  {
    "name": "HOLM",
    "day": 1000,
    "start": 2130,
    "length": 2,
    "stage": 2
  },
  {
    "name": "IRIS GOLD",
    "day": 1000,
    "start": 100,
    "length": 1,
    "stage": 5
  },
  {
    "name": "JADA",
    "day": 1000,
    "start": 2200,
    "length": 1,
    "stage": 1
  },
  {
    "name": "JAKOB OGAWA",
    "day": 1000,
    "start": 2200,
    "length": 1.5,
    "stage": 1
  },
  {
    "name": "JUANA MOLINA",
    "day": 7,
    "start": 2000,
    "length": 1,
    "stage": 5
  },
  {
    "name": "KAKKMADDAFAKKA",
    "day": 4,
    "start": 100,
    "length": 2,
    "stage": 4
  },
  {
    "name": "KELLY LEE OWENS",
    "day": 7,
    "start": 2200,
    "length": 2,
    "stage": 1
  },
  {
    "name": "KIPPENBERGER",
    "day": 1000,
    "start": 1345,
    "length": 1,
    "stage": 1
  },
  {
    "name": "KOKOKO!",
    "day": 7,
    "start": 2000,
    "length": 1.5,
    "stage": 2
  },
  {
    "name": "KONNI KASS",
    "day": 1000,
    "start": 1345,
    "length": 2,
    "stage": 5
  },
  {
    "name": "LAUREL HALO",
    "day": 6,
    "start": 2130,
    "length": 2,
    "stage": 5
  },
  {
    "name": "LEKHFA",
    "day": 6,
    "start": 100,
    "length": 1.5,
    "stage": 1
  },
  {
    "name": "LOKE DEPH",
    "day": 1000,
    "start": 2130,
    "length": 1.5,
    "stage": 5
  },
  {
    "name": "LUSTER",
    "day": 1000,
    "start": 2000,
    "length": 1,
    "stage": 5
  },
  {
    "name": "LYRA VALENZA",
    "day": 1000,
    "start": 2130,
    "length": 1,
    "stage": 1
  },
  {
    "name": "LØD",
    "day": 1000,
    "start": 900,
    "length": 1.5,
    "stage": 5
  },
  {
    "name": "±MAISMENOS±",
    "day": -1,
    "start": 900,
    "length": 1.5,
    "stage": 0
  },
  {
    "name": "MARATON",
    "day": 1000,
    "start": 100,
    "length": 1,
    "stage": 0
  },
  {
    "name": "MARSHALL CECIL",
    "day": 1000,
    "start": 1345,
    "length": 1,
    "stage": 3
  },
  {
    "name": "MHD",
    "day": 7,
    "start": 900,
    "length": 1,
    "stage": 4
  },
  {
    "name": "MIRIAM BRYANT",
    "day": 1000,
    "start": 100,
    "length": 2,
    "stage": 5
  },
  {
    "name": "MOGWAI",
    "day": 7,
    "start": 2000,
    "length": 1,
    "stage": 3
  },
  {
    "name": "MOTORSAV",
    "day": 5,
    "start": 900,
    "length": 1.5,
    "stage": 1
  },
  {
    "name": "MOUNT LIBERATION UNLIMITED",
    "day": 1000,
    "start": 900,
    "length": 1,
    "stage": 0
  },
  {
    "name": "MY BLOODY VALENTINE",
    "day": 5,
    "start": 2200,
    "length": 1,
    "stage": 4
  },
  {
    "name": "MYRKUR",
    "day": 1000,
    "start": 2200,
    "length": 2,
    "stage": 2
  },
  {
    "name": "NATHAN FAKE",
    "day": 4,
    "start": 900,
    "length": 2,
    "stage": 1
  },
  {
    "name": "NELSON CAN",
    "day": 5,
    "start": 2000,
    "length": 1.5,
    "stage": 3
  },
  {
    "name": "NYT LIV",
    "day": 5,
    "start": 900,
    "length": 1.5,
    "stage": 1
  },
  {
    "name": "ODESZA",
    "day": 6,
    "start": 1345,
    "length": 1,
    "stage": 1
  },
  {
    "name": "OH SEES",
    "day": 5,
    "start": 900,
    "length": 1.5,
    "stage": 0
  },
  {
    "name": "OMNI",
    "day": 7,
    "start": 100,
    "length": 2,
    "stage": 4
  },
  {
    "name": "OND TRO",
    "day": 5,
    "start": 2130,
    "length": 1.5,
    "stage": 4
  },
  {
    "name": "PALE HONEY",
    "day": 1000,
    "start": 2200,
    "length": 1.5,
    "stage": 2
  },
  {
    "name": "PALM",
    "day": 7,
    "start": 1345,
    "length": 2,
    "stage": 3
  },
  {
    "name": "PETER SOMMER",
    "day": 7,
    "start": 2200,
    "length": 1.5,
    "stage": 4
  },
  {
    "name": "PREOCCUPATIONS",
    "day": 5,
    "start": 2130,
    "length": 1.5,
    "stage": 2
  },
  {
    "name": "REGELBAU PRESENTS CENTRAL + DJ SPORTS + C.K + MANMADE DEEJAY",
    "day": 5,
    "start": 900,
    "length": 2,
    "stage": 3
  },
  {
    "name": "ROME IS NOT A TOWN",
    "day": 1000,
    "start": 1345,
    "length": 1.5,
    "stage": 5
  },
  {
    "name": "SAMPHA",
    "day": 6,
    "start": 2130,
    "length": 1,
    "stage": 3
  },
  {
    "name": "(SANDY) ALEX G",
    "day": 6,
    "start": 2200,
    "length": 2,
    "stage": 1
  },
  {
    "name": "SASSY 009",
    "day": 1000,
    "start": 2000,
    "length": 1,
    "stage": 0
  },
  {
    "name": "SCOUR",
    "day": 7,
    "start": 2200,
    "length": 2,
    "stage": 1
  },
  {
    "name": "SIGMA",
    "day": 1000,
    "start": 900,
    "length": 1,
    "stage": 0
  },
  {
    "name": "SIGRID",
    "day": 7,
    "start": 900,
    "length": 1,
    "stage": 3
  },
  {
    "name": "SIMON LITTAUER",
    "day": 1000,
    "start": 2200,
    "length": 2,
    "stage": 2
  },
  {
    "name": "SISTA BOSSEN",
    "day": 1000,
    "start": 2200,
    "length": 1.5,
    "stage": 5
  },
  {
    "name": "SLAVES",
    "day": 7,
    "start": 2130,
    "length": 1.5,
    "stage": 3
  },
  {
    "name": "SLÆGT",
    "day": 1000,
    "start": 2130,
    "length": 2,
    "stage": 2
  },
  {
    "name": "SMERZ",
    "day": 5,
    "start": 100,
    "length": 1.5,
    "stage": 2
  },
  {
    "name": "ST. VINCENT",
    "day": 4,
    "start": 100,
    "length": 1,
    "stage": 4
  },
  {
    "name": "STEFFLON DON",
    "day": 6,
    "start": 100,
    "length": 1,
    "stage": 1
  },
  {
    "name": "STORMZY",
    "day": 5,
    "start": 2200,
    "length": 1,
    "stage": 5
  },
  {
    "name": "SUPERORGANISM",
    "day": 5,
    "start": 2130,
    "length": 2,
    "stage": 5
  },
  {
    "name": "TAN",
    "day": 1000,
    "start": 1345,
    "length": 1,
    "stage": 2
  },
  {
    "name": "THE MINDS OF 99",
    "day": 6,
    "start": 1345,
    "length": 1,
    "stage": 2
  },
  {
    "name": "TIGHT CHERRY (Resident DJ)",
    "day": 1000,
    "start": 100,
    "length": 1.5,
    "stage": 4
  },
  {
    "name": "TURBOLENS",
    "day": 5,
    "start": 2130,
    "length": 1,
    "stage": 1
  },
  {
    "name": "VETO",
    "day": 7,
    "start": 2000,
    "length": 1.5,
    "stage": 5
  },
  {
    "name": "VINCE STAPLES",
    "day": 7,
    "start": 2000,
    "length": 1.5,
    "stage": 3
  },
  {
    "name": "WATAIN",
    "day": 6,
    "start": 2000,
    "length": 2,
    "stage": 5
  },
  {
    "name": "WILKINSON",
    "day": 5,
    "start": 100,
    "length": 1.5,
    "stage": 3
  },
  {
    "name": "YASMINE HAMDAN",
    "day": 5,
    "start": 2200,
    "length": 1,
    "stage": 2
  },
  {
    "name": "YASUAKI SHIMIZU",
    "day": 6,
    "start": 2200,
    "length": 1,
    "stage": 1
  },
  {
    "name": "YONAKA",
    "day": 7,
    "start": 2200,
    "length": 2,
    "stage": 4
  }
];

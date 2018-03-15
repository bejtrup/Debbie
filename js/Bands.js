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
    "name": "ALEX VARGAS",
    "fullDate": ""
  },
  {
    "name": "AMMAR 808",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "B FROM E",
    "fullDate": ""
  },
  {
    "name": "BABY IN VAIN",
    "fullDate": ""
  },
  {
    "name": "BAIME",
    "fullDate": ""
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
    "fullDate": ""
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
    "fullDate": ""
  },
  {
    "name": "CELESTE",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "CEZINANDO",
    "fullDate": ""
  },
  {
    "name": "CHELSEA WOLFE",
    "fullDate": ""
  },
  {
    "name": "CLUTCH",
    "fullDate": "Wednesday 4\tJuly, 2018"
  },
  {
    "name": "CV JØRGENSEN",
    "fullDate": "Saturday 7\tJuly, 2018"
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
    "name": "EL LEOPARDO",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "EMIL KRUSE",
    "fullDate": ""
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
    "fullDate": ""
  },
  {
    "name": "FOUR TET",
    "fullDate": "Friday 6\tJuly, 2018"
  },
  {
    "name": "GOSS",
    "fullDate": ""
  },
  {
    "name": "GURLI OCTAVIA",
    "fullDate": ""
  },
  {
    "name": "HEILUNG",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "IRIS GOLD",
    "fullDate": ""
  },
  {
    "name": "JUANA MOLINA",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "KAKKMADDAFAKKA",
    "fullDate": ""
  },
  {
    "name": "KELLY LEE OWENS",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "KIPPENBERGER",
    "fullDate": ""
  },
  {
    "name": "KOKOKO!",
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
    "name": "LØD",
    "fullDate": ""
  },
  {
    "name": "±MAISMENOS±",
    "fullDate": ""
  },
  {
    "name": "MARSHALL CECIL",
    "fullDate": ""
  },
  {
    "name": "MHD",
    "fullDate": "Saturday 7\tJuly, 2018"
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
    "name": "MY BLOODY VALENTINE",
    "fullDate": "Thursday 5\tJuly, 2018"
  },
  {
    "name": "MYRKUR",
    "fullDate": "Friday 6\tJuly, 2018\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\tSaturday 7\tJuly, 2018"
  },
  {
    "name": "NATHAN FAKE",
    "fullDate": ""
  },
  {
    "name": "NELSON CAN",
    "fullDate": ""
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
    "fullDate": ""
  },
  {
    "name": "PALM",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "PETER SOMMER",
    "fullDate": ""
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
    "fullDate": ""
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
    "fullDate": ""
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
    "name": "SIMON LITTAUER",
    "fullDate": ""
  },
  {
    "name": "SLAVES",
    "fullDate": "Saturday 7\tJuly, 2018"
  },
  {
    "name": "SLÆGT",
    "fullDate": ""
  },
  {
    "name": "SMERZ",
    "fullDate": ""
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
    "name": "THE MINDS OF 99",
    "fullDate": ""
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
    "length": 1.5,
    "stage": 1
  },
  {
    "name": "EMINEM",
    "day": 4,
    "start": 130,
    "length": 2,
    "stage": 0
  },
  {
    "name": "BRUNO MARS",
    "day": 5,
    "start": 2000,
    "length": 2,
    "stage": 5
  },
  {
    "name": "GORILLAZ",
    "day": 7,
    "start": 2200,
    "length": 1,
    "stage": 2
  },
  {
    "name": "NINE INCH NAILS",
    "day": 4,
    "start": 1345,
    "length": 1,
    "stage": 2
  },
  {
    "name": "CARDI B",
    "day": 4,
    "start": 100,
    "length": 1,
    "stage": 4
  },
  {
    "name": "DAVID BYRNE",
    "day": 6,
    "start": 1345,
    "length": 2,
    "stage": 4
  },
  {
    "name": "KHALID",
    "day": 5,
    "start": 2000,
    "length": 1.5,
    "stage": 1
  },
  {
    "name": "NEPHEW",
    "day": 5,
    "start": 1300,
    "length": 1.5,
    "stage": 0
  },
  {
    "name": "ALEX VARGAS",
    "day": -1,
    "start": 2000,
    "length": 1,
    "stage": 0
  },
  {
    "name": "AMMAR 808",
    "day": 6,
    "start": 900,
    "length": 1,
    "stage": 1
  },
  {
    "name": "B FROM E",
    "day": -1,
    "start": 900,
    "length": 2,
    "stage": 1
  },
  {
    "name": "BABY IN VAIN",
    "day": -1,
    "start": 2000,
    "length": 1,
    "stage": 1
  },
  {
    "name": "BAIME",
    "day": -1,
    "start": 2000,
    "length": 1,
    "stage": 5
  },
  {
    "name": "BANKSLAVE",
    "day": -1,
    "start": 2000,
    "length": 2,
    "stage": 2
  },
  {
    "name": "BENAL",
    "day": 6,
    "start": 900,
    "length": 1,
    "stage": 2
  },
  {
    "name": "BISSE",
    "day": -1,
    "start": 2130,
    "length": 1.5,
    "stage": 0
  },
  {
    "name": "6LACK",
    "day": 5,
    "start": 2200,
    "length": 2,
    "stage": 3
  },
  {
    "name": "BLACK STAR",
    "day": 5,
    "start": 1345,
    "length": 1.5,
    "stage": 4
  },
  {
    "name": "THE BLAZE",
    "day": 4,
    "start": 900,
    "length": 2,
    "stage": 0
  },
  {
    "name": "BORIS & MERZBOW",
    "day": 5,
    "start": 1400,
    "length": 1,
    "stage": 5
  },
  {
    "name": "CABAL",
    "day": -1,
    "start": 100,
    "length": 2,
    "stage": 1
  },
  {
    "name": "CELESTE",
    "day": 6,
    "start": 1345,
    "length": 1,
    "stage": 3
  },
  {
    "name": "CEZINANDO",
    "day": -1,
    "start": 100,
    "length": 2,
    "stage": 3
  },
  {
    "name": "CHELSEA WOLFE",
    "day": -1,
    "start": 900,
    "length": 2,
    "stage": 2
  },
  {
    "name": "CLUTCH",
    "day": 4,
    "start": 2000,
    "length": 1,
    "stage": 4
  },
  {
    "name": "CV JØRGENSEN",
    "day": 7,
    "start": 2200,
    "length": 1.5,
    "stage": 2
  },
  {
    "name": "DEAD CROSS",
    "day": 6,
    "start": 2130,
    "length": 1,
    "stage": 3
  },
  {
    "name": "DESCENDENTS",
    "day": 6,
    "start": 100,
    "length": 2,
    "stage": 0
  },
  {
    "name": "EL LEOPARDO",
    "day": 5,
    "start": 900,
    "length": 1.5,
    "stage": 3
  },
  {
    "name": "EMIL KRUSE",
    "day": -1,
    "start": 2000,
    "length": 1,
    "stage": 4
  },
  {
    "name": "FEVER RAY",
    "day": 6,
    "start": 100,
    "length": 1,
    "stage": 4
  },
  {
    "name": "FIRST AID KIT",
    "day": 5,
    "start": 1345,
    "length": 2,
    "stage": 4
  },
  {
    "name": "FLEET FOXES",
    "day": 6,
    "start": 2200,
    "length": 2,
    "stage": 0
  },
  {
    "name": "FOOL",
    "day": -1,
    "start": 900,
    "length": 2,
    "stage": 4
  },
  {
    "name": "FOUR TET",
    "day": 6,
    "start": 2130,
    "length": 1.5,
    "stage": 5
  },
  {
    "name": "GOSS",
    "day": -1,
    "start": 900,
    "length": 1.5,
    "stage": 5
  },
  {
    "name": "GURLI OCTAVIA",
    "day": -1,
    "start": 2200,
    "length": 1,
    "stage": 2
  },
  {
    "name": "HEILUNG",
    "day": 5,
    "start": 2130,
    "length": 1,
    "stage": 2
  },
  {
    "name": "IRIS GOLD",
    "day": -1,
    "start": 2130,
    "length": 2,
    "stage": 3
  },
  {
    "name": "JUANA MOLINA",
    "day": 7,
    "start": 900,
    "length": 2,
    "stage": 3
  },
  {
    "name": "KAKKMADDAFAKKA",
    "day": -1,
    "start": 2200,
    "length": 1,
    "stage": 1
  },
  {
    "name": "KELLY LEE OWENS",
    "day": 7,
    "start": 2200,
    "length": 1,
    "stage": 2
  },
  {
    "name": "KIPPENBERGER",
    "day": -1,
    "start": 900,
    "length": 1,
    "stage": 3
  },
  {
    "name": "KOKOKO!",
    "day": 7,
    "start": 2200,
    "length": 2,
    "stage": 0
  },
  {
    "name": "LAUREL HALO",
    "day": 6,
    "start": 2000,
    "length": 1.5,
    "stage": 0
  },
  {
    "name": "LEKHFA",
    "day": 6,
    "start": 900,
    "length": 1,
    "stage": 2
  },
  {
    "name": "LØD",
    "day": -1,
    "start": 2200,
    "length": 2,
    "stage": 3
  },
  {
    "name": "±MAISMENOS±",
    "day": -1,
    "start": 900,
    "length": 1,
    "stage": 2
  },
  {
    "name": "MARSHALL CECIL",
    "day": -1,
    "start": 900,
    "length": 1.5,
    "stage": 0
  },
  {
    "name": "MHD",
    "day": 7,
    "start": 2200,
    "length": 2,
    "stage": 3
  },
  {
    "name": "MOGWAI",
    "day": 7,
    "start": 2200,
    "length": 2,
    "stage": 1
  },
  {
    "name": "MOTORSAV",
    "day": 5,
    "start": 1345,
    "length": 2,
    "stage": 2
  },
  {
    "name": "MY BLOODY VALENTINE",
    "day": 5,
    "start": 2000,
    "length": 2,
    "stage": 0
  },
  {
    "name": "MYRKUR",
    "day": 1000,
    "start": 2000,
    "length": 2,
    "stage": 3
  },
  {
    "name": "NATHAN FAKE",
    "day": -1,
    "start": 1345,
    "length": 1,
    "stage": 2
  },
  {
    "name": "NELSON CAN",
    "day": -1,
    "start": 1345,
    "length": 1.5,
    "stage": 2
  },
  {
    "name": "NYT LIV",
    "day": 5,
    "start": 100,
    "length": 1.5,
    "stage": 1
  },
  {
    "name": "ODESZA",
    "day": 6,
    "start": 900,
    "length": 1.5,
    "stage": 0
  },
  {
    "name": "OH SEES",
    "day": 5,
    "start": 1800,
    "length": 2,
    "stage": 3
  },
  {
    "name": "OMNI",
    "day": 7,
    "start": 100,
    "length": 1.5,
    "stage": 3
  },
  {
    "name": "OND TRO",
    "day": 5,
    "start": 1345,
    "length": 1,
    "stage": 2
  },
  {
    "name": "PALE HONEY",
    "day": -1,
    "start": 900,
    "length": 1.5,
    "stage": 4
  },
  {
    "name": "PALM",
    "day": 7,
    "start": 100,
    "length": 2,
    "stage": 2
  },
  {
    "name": "PETER SOMMER",
    "day": -1,
    "start": 2200,
    "length": 1,
    "stage": 5
  },
  {
    "name": "PREOCCUPATIONS",
    "day": 5,
    "start": 100,
    "length": 1.5,
    "stage": 1
  },
  {
    "name": "REGELBAU PRESENTS CENTRAL + DJ SPORTS + C.K + MANMADE DEEJAY",
    "day": 5,
    "start": 2200,
    "length": 1,
    "stage": 0
  },
  {
    "name": "ROME IS NOT A TOWN",
    "day": -1,
    "start": 2130,
    "length": 1,
    "stage": 4
  },
  {
    "name": "SAMPHA",
    "day": 6,
    "start": 2200,
    "length": 1,
    "stage": 0
  },
  {
    "name": "(SANDY) ALEX G",
    "day": 6,
    "start": 1345,
    "length": 1.5,
    "stage": 3
  },
  {
    "name": "SASSY 009",
    "day": -1,
    "start": 2200,
    "length": 1,
    "stage": 5
  },
  {
    "name": "SCOUR",
    "day": 7,
    "start": 2000,
    "length": 2,
    "stage": 5
  },
  {
    "name": "SIGRID",
    "day": 7,
    "start": 100,
    "length": 1.5,
    "stage": 1
  },
  {
    "name": "SIMON LITTAUER",
    "day": -1,
    "start": 2000,
    "length": 1.5,
    "stage": 1
  },
  {
    "name": "SLAVES",
    "day": 7,
    "start": 2130,
    "length": 1.5,
    "stage": 2
  },
  {
    "name": "SLÆGT",
    "day": -1,
    "start": 2000,
    "length": 1,
    "stage": 0
  },
  {
    "name": "SMERZ",
    "day": -1,
    "start": 100,
    "length": 1.5,
    "stage": 4
  },
  {
    "name": "ST. VINCENT",
    "day": 4,
    "start": 2000,
    "length": 1,
    "stage": 1
  },
  {
    "name": "STEFFLON DON",
    "day": 6,
    "start": 2130,
    "length": 1.5,
    "stage": 2
  },
  {
    "name": "STORMZY",
    "day": 5,
    "start": 1900,
    "length": 2,
    "stage": 4
  },
  {
    "name": "SUPERORGANISM",
    "day": 5,
    "start": 1700,
    "length": 1,
    "stage": 0
  },
  {
    "name": "THE MINDS OF 99",
    "day": -1,
    "start": 2200,
    "length": 2,
    "stage": 5
  },
  {
    "name": "TURBOLENS",
    "day": 5,
    "start": 900,
    "length": 1.5,
    "stage": 2
  },
  {
    "name": "VETO",
    "day": 7,
    "start": 2130,
    "length": 2,
    "stage": 2
  },
  {
    "name": "VINCE STAPLES",
    "day": 7,
    "start": 900,
    "length": 1,
    "stage": 1
  },
  {
    "name": "WATAIN",
    "day": 6,
    "start": 1345,
    "length": 2,
    "stage": 3
  },
  {
    "name": "WILKINSON",
    "day": 5,
    "start": 2130,
    "length": 2,
    "stage": 4
  },
  {
    "name": "YASMINE HAMDAN",
    "day": 5,
    "start": 2400,
    "length": 1,
    "stage": 1
  },
  {
    "name": "YASUAKI SHIMIZU",
    "day": 6,
    "start": 900,
    "length": 1,
    "stage": 4
  },
  {
    "name": "YONAKA",
    "day": 7,
    "start": 900,
    "length": 1.5,
    "stage": 1
  }
];

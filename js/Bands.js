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
  [],
  [],
  [],
  [],
  [
    {
      "name": "EMINEM",
      "start": 2200,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "NINE INCH NAILS",
      "start": 1900,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "CARDI B",
      "start": 2300,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "THE BLAZE",
      "start": 1100,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "CLUTCH",
      "start": 0900,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "ST. VINCENT",
      "start": 2200,
      "end": 0,
      "stage": "Orange"
    }
  ],
  [
    {
      "name": "CHELSEA MANNING",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "BRUNO MARS",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "KHALID",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "NEPHEW",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "6LACK",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "BLACK STAR",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "BORIS & MERZBOW",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "EL LEOPARDO",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "FIRST AID KIT",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "HEILUNG",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "MOTORSAV",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "MY BLOODY VALENTINE",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "NYT LIV",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "OH SEES",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "OND TRO",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "PREOCCUPATIONS",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "REGELBAU PRESENTS CENTRAL + DJ SPORTS + C.K + MANMADE DEEJAY",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "STORMZY",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "SUPERORGANISM",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "TURBOLENS",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "WILKINSON",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "YASMINE HAMDAN",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    }
  ],
  [
    {
      "name": "DAVID BYRNE",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "AMMAR 808",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "BENAL",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "CELESTE",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "DEAD CROSS",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "DESCENDENTS",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "FEVER RAY",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "FLEET FOXES",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "FOUR TET",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "LAUREL HALO",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "LEKHFA",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "ODESZA",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "SAMPHA",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "(SANDY) ALEX G",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "STEFFLON DON",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "WATAIN",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "YASUAKI SHIMIZU",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    }
  ],
  [
    {
      "name": "GORILLAZ",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "CV JØRGENSEN",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "JUANA MOLINA",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "KELLY LEE OWENS",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "KOKOKO!",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "MHD",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "MOGWAI",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "OMNI",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "PALM",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "SCOUR",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "SIGRID",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "SLAVES",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "VETO",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "VINCE STAPLES",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "YONAKA",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    }
  ],
  [
    {
      "name": "ALEX VARGAS",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "B FROM E",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "BABY IN VAIN",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "BAIME",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "BANKSLAVE",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "BISSE",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "CABAL",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "CEZINANDO",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "CHELSEA WOLFE",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "EMIL KRUSE",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "FOOL",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "GOSS",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "GURLI OCTAVIA",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "IRIS GOLD",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "KAKKMADDAFAKKA",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "KIPPENBERGER",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "LØD",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "±MAISMENOS±",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "MARSHALL CECIL",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "NATHAN FAKE",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "NELSON CAN",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "PALE HONEY",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "PETER SOMMER",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "ROME IS NOT A TOWN",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "SASSY 009",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "SIMON LITTAUER",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "SLÆGT",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "SMERZ",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    },
    {
      "name": "THE MINDS OF 99",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    }
  ],
  [
    {
      "name": "MYRKUR",
      "start": 0,
      "end": 0,
      "stage": "Orange"
    }
  ]
];

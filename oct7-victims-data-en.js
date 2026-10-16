/* Oct 7, 2023 Victims Memorial — data (English)
   Truth Against Lies | truth-against-lies.github.io

   THE ONE RULE: no name, age, or detail appears here unless it is already
   cited from a real source. Every entry MUST have a non-empty `source`.
   This list is seeded small on purpose — it grows only as individual victims
   are verified. Never invent or guess a single detail.

   Same plain var-array convention as orgs-network-data.js / search-index.js
   (loaded via <script src>, no fetch) so it works on file:// and GitHub Pages. */

/* Communities — the attacked locations. `casualty` reuses the aggregate
   numbers already published (and sourced) on october7-en.html. A community
   with no verified aggregate number of its own carries an empty casualty line. */
var OCT7_COMMUNITIES = [
  {name:"Be'eri",       label:"Kibbutz Be'eri",            casualty:"132 killed (101 civilians + 31 security forces) | 32 taken hostage | 125 homes damaged/destroyed"},
  {name:"Kfar Aza",     label:"Kibbutz Kfar Aza",          casualty:"~80 killed (62 residents + 18 security forces) | 19 taken hostage"},
  {name:"Nir Oz",       label:"Kibbutz Nir Oz",            casualty:"47–57 killed | 76 taken hostage (67 alive, 9 killed)"},
  {name:"Nova",         label:"Nova Music Festival — Re'im", casualty:"378 killed (344 civilians + 34 security forces) | 44 taken hostage"},
  {name:"Nahal Oz",     label:"Nahal Oz Observation Post", casualty:"53 soldiers killed | 16 observers (Unit 414) killed | 10 observers taken hostage"},
  {name:"Sderot",       label:"Sderot",                    casualty:"53 killed (37 civilians, 11 police officers, 2 firefighters, 3 soldiers)"},
  {name:"Ofakim",       label:"Ofakim",                    casualty:"33 killed including 6 Thai nationals"},
  {name:"Kissufim",     label:"Kissufim",                  casualty:"45 killed including 5 children"},
  {name:"Zikim",        label:"Zikim",                     casualty:"18 killed"},
  {name:"Netiv HaAsara",label:"Netiv HaAsara",             casualty:"21+ killed"},
  {name:"Holit",        label:"Kibbutz Holit",             casualty:""},
  {name:"Urim",         label:"Urim Base",                 casualty:""}
];

/* Victims — each entry individually sourced.
   Seed = only names already cited on october7-en.html: Vivian Silver and the
   Bibas family. NOTE: Yarden Bibas is deliberately NOT a memorial entry — he
   survived captivity and was released alive on Feb 1, 2025. Only his wife
   Shiri and sons Ariel and Kfir were murdered (confirmed by the IDF; bodies
   returned Feb 2025). */
var OCT7_VICTIMS = [
  {id:"v-silver-vivian", name:"Vivian Silver", age:74, community:"Be'eri", role:"civilian",
   note:"Peace activist", source:"Survivor testimony | Ynet | Haaretz"},

  {id:"v-bibas-shiri", name:"Shiri Bibas", age:32, community:"Nir Oz", role:"hostage-killed",
   note:"Murdered in captivity with her two sons. Her husband Yarden Bibas was taken hostage with her and released alive from captivity on Feb 1, 2025.", source:"IDF announcement (Feb 2025) | Return of the bodies"},
  {id:"v-bibas-ariel", name:"Ariel Bibas", age:4, community:"Nir Oz", role:"hostage-killed",
   source:"IDF announcement (Feb 2025) | Return of the bodies"},
  {id:"v-bibas-kfir", name:"Kfir Bibas", community:"Nir Oz", role:"hostage-killed",
   note:"9 months old — the youngest hostage", source:"IDF announcement (Feb 2025) | Return of the bodies"},

  {id:"v-bor-galon-liam", name:"Liam Bor Galon", age:26, community:"Nova", role:"civilian",
   source:"https://www.timesofisrael.com/liam-bor-galon-26-massage-therapist-helped-others-till-the-end/"},
  {id:"v-shem-tov-inbar", name:"Inbar Shem Tov", age:22, community:"Nova", role:"civilian",
   source:"https://www.timesofisrael.com/inbar-shem-tov-22-hoped-to-travel-while-working-as-a-digital-nomad/"},
  {id:"v-katabi-tehila", name:"Tehila Katabi", age:31, community:"Holit", role:"civilian",
   source:"https://www.timesofisrael.com/tehila-katabi-31-nature-lover-who-moved-to-israels-south/"},
  {id:"v-mor-shirel", name:"Sgt. Shirel Mor", age:19, community:"Nahal Oz", role:"security-forces",
   source:"https://www.timesofisrael.com/sgt-shirel-mor-19-talented-pianist-with-a-huge-and-pure-soul/"},
  {id:"v-goutin-yonatan", name:"Lt. Yonatan Goutin", age:20, community:"Be'eri", role:"security-forces",
   source:"https://www.timesofisrael.com/lt-yonatan-goutin-20-star-judoka-who-chose-combat-in-idf/"},
  {id:"v-leibovich-sharon", name:"Sharon Leibovich", age:42, community:"Nova", role:"security-forces",
   note:"Police officer", source:"https://www.timesofisrael.com/sgt-sharon-leibovich-42-police-officer-who-loved-a-good-joke/"},
  {id:"v-meiri-zohar", name:"Zohar Meiri", age:55, community:"Sderot", role:"civilian",
   source:"https://www.timesofisrael.com/zohar-meiri-55-dad-of-2-daughters-loved-to-go-fishing-with-friends/"},

  {id:"v-lahav-amit", name:"Amit Lahav", age:23, community:"Nova", role:"civilian",
   source:"https://www.timesofisrael.com/amit-lahav-23-adventurous-free-spirit-who-spread-positivity/"},
  {id:"v-peri-chaim", name:"Chaim Peri", age:79, community:"Nir Oz", role:"hostage-killed",
   note:"Kidnapped from Nir Oz, murdered in captivity", source:"https://www.timesofisrael.com/chaim-peri-79-artist-peace-activist-and-doting-grandfather-to-13/"},
  {id:"v-brema-adam", name:"Adam Brema", age:47, community:"Sderot", role:"civilian",
   source:"https://www.timesofisrael.com/adam-brema-47-sudanese-asylum-seeker-slain-in-sderot/"},
  {id:"v-cohen-daniel", name:"Daniel Cohen", age:25, community:"Nova", role:"civilian",
   source:"https://www.timesofisrael.com/daniel-cohen-25-at-risk-youth-counselor-was-optimistic-until-the-end/"},
  {id:"v-davidian-ofir", name:"Cpl. Ofir Davidian", age:18, community:"Urim", role:"security-forces",
   source:"https://www.timesofisrael.com/cpl-ofir-davidian-18-rookie-soldier-was-the-light-of-the-family/"},
  {id:"v-edberg-asaf", name:"Asaf Edberg", age:23, community:"Nova", role:"civilian",
   source:"https://www.timesofisrael.com/asaf-edberg-23-carefree-surfer-lived-as-if-there-is-no-tomorrow/"},
  {id:"v-yenin-sivan", name:"Command Sgt. Maj. Sivan Yenin", age:49, community:"Nova", role:"security-forces",
   note:"Police officer", source:"https://www.timesofisrael.com/command-sgt-maj-sivan-yenin-49-cop-eagerly-awaiting-1st-grandchild/"}
];

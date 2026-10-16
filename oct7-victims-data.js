/* Oct 7, 2023 Victims Memorial — data (Hebrew)
   Truth Against Lies | truth-against-lies.github.io

   THE ONE RULE: no name, age, or detail appears here unless it is already
   cited from a real source. Every entry MUST have a non-empty `source`.
   This list is seeded small on purpose — it grows only as individual victims
   are verified. Never invent or guess a single detail.

   Same plain var-array convention as orgs-network-data.js / search-index.js
   (loaded via <script src>, no fetch) so it works on file:// and GitHub Pages. */

/* Communities — the attacked locations. `casualty` reuses the aggregate
   numbers already published (and sourced) on october7.html. A community with
   no verified aggregate number of its own carries an empty casualty line. */
var OCT7_COMMUNITIES = [
  {name:'בארי',       label:'קיבוץ בארי',       casualty:'132 נרצחו (101 אזרחים + 31 כוחות ביטחון) | 32 נחטפו | 125 בתים נפגעו/הושמדו'},
  {name:'כפר עזה',    label:'קיבוץ כפר עזה',    casualty:'~80 נרצחו (62 תושבים + 18 כוחות ביטחון) | 19 נחטפו'},
  {name:'ניר עוז',    label:'קיבוץ ניר עוז',    casualty:'47–57 נרצחו | 76 נחטפו (67 בחיים, 9 נהרגו)'},
  {name:'נובה',       label:'מסיבת נובה — רעים', casualty:'378 נרצחו (344 אזרחים + 34 כוחות ביטחון) | 44 נחטפו'},
  {name:'נחל עוז',    label:'תצפית נחל עוז',    casualty:'53 חיילים נהרגו | 16 צופיות (יחידה 414) נהרגו | 10 צופיות נחטפו'},
  {name:'שדרות',      label:'שדרות',            casualty:'53 נרצחו (37 אזרחים, 11 שוטרים, 2 כבאים, 3 חיילים)'},
  {name:'אופקים',     label:'אופקים',           casualty:'33 נרצחו כולל 6 תאילנדים'},
  {name:'כיסופים',    label:'כיסופים',          casualty:'45 נרצחו כולל 5 ילדים'},
  {name:'זיקים',      label:'זיקים',            casualty:'18 נרצחו'},
  {name:'נתיב העשרה', label:'נתיב העשרה',       casualty:'21+ נרצחו'},
  {name:'חולית',      label:'קיבוץ חולית',      casualty:''},
  {name:'אורים',      label:'בסיס אורים',       casualty:''}
];

/* Victims — each entry individually sourced.
   Seed = only names already cited on october7.html: Vivian Silver and the
   Bibas family. NOTE: Yarden Bibas is deliberately NOT a memorial entry —
   he survived captivity and was released alive on 1 Feb 2025. Only his wife
   Shiri and sons Ariel and Kfir were murdered (confirmed by the IDF; bodies
   returned Feb 2025).
   `spelling:'pending'` = a Hebrew name transliterated from an English source;
   the identity and facts are verified, the Hebrew spelling awaits a native
   check (a quick fix, not a blocker). */
var OCT7_VICTIMS = [
  {id:'v-silver-vivian', name:'ויויאן סילבר', age:74, community:'בארי', role:'civilian',
   note:'פעילת שלום', source:'עדויות ניצולים | Ynet | הארץ'},

  {id:'v-bibas-shiri', name:'שירי ביבס', age:32, community:'ניר עוז', role:'hostage-killed',
   note:'נרצחה בשבי יחד עם שני בניה. בעלה ירדן ביבס נחטף עמה ושוחרר בחיים מהשבי ב-1 בפברואר 2025.', source:'הודעת צה"ל (פברואר 2025) | החזרת גופות'},
  {id:'v-bibas-ariel', name:'אריאל ביבס', age:4, community:'ניר עוז', role:'hostage-killed',
   source:'הודעת צה"ל (פברואר 2025) | החזרת גופות'},
  {id:'v-bibas-kfir', name:'כפיר ביבס', community:'ניר עוז', role:'hostage-killed',
   note:'בן 9 חודשים — החטוף הצעיר ביותר', source:'הודעת צה"ל (פברואר 2025) | החזרת גופות'},

  {id:'v-bor-galon-liam', name:'ליאם בור גלון', age:26, community:'נובה', role:'civilian',
   source:'https://www.timesofisrael.com/liam-bor-galon-26-massage-therapist-helped-others-till-the-end/', spelling:'pending'},
  {id:'v-shem-tov-inbar', name:'ענבר שם טוב', age:22, community:'נובה', role:'civilian',
   source:'https://www.timesofisrael.com/inbar-shem-tov-22-hoped-to-travel-while-working-as-a-digital-nomad/', spelling:'pending'},
  {id:'v-katabi-tehila', name:'תהילה קטבי', age:31, community:'חולית', role:'civilian',
   source:'https://www.timesofisrael.com/tehila-katabi-31-nature-lover-who-moved-to-israels-south/', spelling:'pending'},
  {id:'v-mor-shirel', name:'סמל שירל מור', age:19, community:'נחל עוז', role:'security-forces',
   source:'https://www.timesofisrael.com/sgt-shirel-mor-19-talented-pianist-with-a-huge-and-pure-soul/', spelling:'pending'},
  {id:'v-goutin-yonatan', name:'סגן יונתן גוטין', age:20, community:'בארי', role:'security-forces',
   source:'https://www.timesofisrael.com/lt-yonatan-goutin-20-star-judoka-who-chose-combat-in-idf/', spelling:'pending'},
  {id:'v-leibovich-sharon', name:'שרון לייבוביץ׳', age:42, community:'נובה', role:'security-forces',
   note:'שוטרת', source:'https://www.timesofisrael.com/sgt-sharon-leibovich-42-police-officer-who-loved-a-good-joke/', spelling:'pending'},
  {id:'v-meiri-zohar', name:'זוהר מאירי', age:55, community:'שדרות', role:'civilian',
   source:'https://www.timesofisrael.com/zohar-meiri-55-dad-of-2-daughters-loved-to-go-fishing-with-friends/', spelling:'pending'},

  {id:'v-lahav-amit', name:'עמית להב', age:23, community:'נובה', role:'civilian',
   source:'https://www.timesofisrael.com/amit-lahav-23-adventurous-free-spirit-who-spread-positivity/', spelling:'pending'},
  {id:'v-peri-chaim', name:'חיים פרי', age:79, community:'ניר עוז', role:'hostage-killed',
   note:'נחטף מניר עוז, נרצח בשבי', source:'https://www.timesofisrael.com/chaim-peri-79-artist-peace-activist-and-doting-grandfather-to-13/', spelling:'pending'},
  {id:'v-brema-adam', name:'אדם ברמה', age:47, community:'שדרות', role:'civilian',
   source:'https://www.timesofisrael.com/adam-brema-47-sudanese-asylum-seeker-slain-in-sderot/', spelling:'pending'},
  {id:'v-cohen-daniel', name:'דניאל כהן', age:25, community:'נובה', role:'civilian',
   source:'https://www.timesofisrael.com/daniel-cohen-25-at-risk-youth-counselor-was-optimistic-until-the-end/', spelling:'pending'},
  {id:'v-davidian-ofir', name:'רב"ט אופיר דוידיאן', age:18, community:'אורים', role:'security-forces',
   source:'https://www.timesofisrael.com/cpl-ofir-davidian-18-rookie-soldier-was-the-light-of-the-family/', spelling:'pending'},
  {id:'v-edberg-asaf', name:'אסף אדברג', age:23, community:'נובה', role:'civilian',
   source:'https://www.timesofisrael.com/asaf-edberg-23-carefree-surfer-lived-as-if-there-is-no-tomorrow/', spelling:'pending'},
  {id:'v-yenin-sivan', name:'רב-סמל שבן ינין', age:49, community:'נובה', role:'security-forces',
   note:'שוטר', source:'https://www.timesofisrael.com/command-sgt-maj-sivan-yenin-49-cop-eagerly-awaiting-1st-grandchild/', spelling:'pending'}
];

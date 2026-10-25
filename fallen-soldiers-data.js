/* Fallen Soldiers Memorial — data (Hebrew)
   Truth Against Lies | truth-against-lies.github.io

   IDF soldiers who fell in the Swords of Iron war (from Oct 7, 2023 onward) —
   distinct from the Oct 7 massacre victims memorial (oct7-victims-data.js).

   THE ONE RULE: no name, rank, age, or detail appears here unless it is
   already cited from a real source. Every entry MUST have a non-empty
   `source`. This list opens small and grows only as individual fallen are
   verified — never invent or guess a single detail. Photos carry the SAME
   bar: a portrait only where its rights/credit are clear AND the face is
   approved; otherwise `photo:null` renders a dignified candle.

   Schema per soldier: id, photo (null = candle), rank, name, age, unit,
   date (readable, displayed), dateISO (sort only), hometown, note, source,
   photoCredit (shown only if photo set).

   `spelling:'pending'` = a Hebrew name/rank/unit transliterated or translated
   from an English-language source; the identity and facts are verified, the
   Hebrew spelling awaits a native check (a quick fix, not a blocker). Facts
   mirror fallen-soldiers-data-en.js (English source of record for the facts);
   `// portrait:` comments record the candidate portrait + credit for the
   face-by-face rights/approval pass before any photo goes in. */
var FALLEN_SOLDIERS = [
  {id:"s-abudi-adir", photo:null, rank:'רס"ן', name:"אדיר מאיר אבודי", age:23,
   unit:"פלוגת תבור, פיקוד העורף", date:"7 באוקטובר 2023", dateISO:"2023-10-07", hometown:"מודיעין",
   note:"מהמפקדים הבכירים שהיו בבסיס האימונים זיקים כשחמאס תקף; הורה לטירונים הצעירים להסתתר והציל את חייהם.",
   source:"https://www.timesofisrael.com/maj-adir-abudi-23-commander-with-fighting-spirit-who-saved-idf-base/", spelling:"pending"},
   // portrait: Times of Israel — credit "(IDF)"

  {id:"s-adany-eily", photo:null, rank:"סרן", name:"אילי אדני", age:21,
   unit:"יחידת מגלן", date:"7 באוקטובר 2023", dateISO:"2023-10-07", hometown:"תל מונד",
   note:"התגייס במרץ 2020, ובמרץ 2023 מונה לפקד על צוות משלו ביחידה המובחרת.",
   source:"https://www.timesofisrael.com/cpt-eily-adany-21-platoon-commander-gave-everything-to-his-soldiers/", spelling:"pending"},
   // portrait: Times of Israel — credit "IDF"

  {id:"s-dushi-rotem", photo:null, rank:'סמ"ר', name:"רותם דושי", age:20,
   unit:"חטיבת הצנחנים", date:"7 באוקטובר 2023", dateISO:"2023-10-07", hometown:"שמשית",
   note:"מתנדב באמבולנס של מגן דוד אדום שאהב להציל חיים והיה תמיד הראשון להתנדב.",
   source:"https://www.timesofisrael.com/staff-sgt-rotem-dushi-20-mda-volunteer-was-the-soul-of-his-family/", spelling:"pending"},
   // portrait: Times of Israel — credit "(IDF)"

  {id:"s-rozenshtein-bar", photo:null, rank:'סמ"ר', name:"בר רוזנשטיין", age:20,
   unit:"חטיבת גולני", date:"7 באוקטובר 2023", dateISO:"2023-10-07", hometown:"ראשון לציון",
   note:"נהרג בסיור ליד קיבוץ כיסופים כשהג'יפ המשוריין שלו נפגע מירי ומ-RPG עם תחילת הפלישה.",
   source:"https://www.timesofisrael.com/staff-sgt-bar-rozenshtein-20-computer-whiz-who-chose-to-be-a-golani/", spelling:"pending"},
   // portrait: Times of Israel — credit "(Courtesy)"

  {id:"s-brodski-kiril", photo:null, rank:"סמל", name:"קיריל ברודסקי", age:19,
   unit:"אוגדת עזה, החטיבה הדרומית", date:"7 באוקטובר 2023", dateISO:"2023-10-07", hometown:"רמת גן",
   note:"חובב אופנועים מושבע שטייל ברחבי הארץ על אופנועים והדביק גם את אביו בתחביב.",
   source:"https://www.timesofisrael.com/sgt-kiril-brodski-19-motorcycle-enthusiast-and-devoted-friend/", spelling:"pending"},
   // portrait: Times of Israel — credit "IDF Spokesperson's Unit"

  {id:"s-kiean-habib", photo:null, rank:"סמל", name:"חביב כיאן", age:21,
   unit:"גדוד 13, חטיבת גולני", date:"7 באוקטובר 2023", dateISO:"2023-10-07", hometown:"חורה",
   note:"חייל גולני בדואי וגיימר מושבע, שנהג לשחק עד השעות הקטנות של הלילה.",
   source:"https://www.timesofisrael.com/sgt-habib-kiean-21-bedouin-golani-soldier-who-loved-video-games/", spelling:"pending"},
   // portrait: Times of Israel — credit "IDF"

  {id:"s-eden-haim-meir", photo:null, rank:'סמ"ר', name:"חיים מאיר עדן", age:20,
   unit:"חטיבת גולני", date:"", dateISO:"2023-10-07", hometown:"רחובות",
   note:"התגייס במרץ 2022, ונפצע אנושות בקרב במוצב פאגה ב-7 באוקטובר 2023.",
   source:"https://www.timesofisrael.com/staff-sgt-haim-meir-eden-20-golani-soldier-was-glue-of-the-family/", spelling:"pending"},
   // DATE WITHHELD: source dateline ("Dec 9, 2023") conflicts with its own text ("fatally wounded Oct 7, 2023") — confirm exact date of death before displaying it. portrait: Times of Israel — credit "(Courtesy)"

  {id:"s-zloof-yair", photo:null, rank:'רס"ן', name:"יאיר זלוף", age:32,
   unit:"פלוגה כירורגית, חטיבה 401 (רופא קרבי)", date:"10 באוקטובר 2023", dateISO:"2023-10-10", hometown:"תל מונד",
   note:'רופא קרבי בצה"ל; סיים לימודי רפואה באוניברסיטה העברית והיה מתמחה בילדים במרכז הרפואי שניידר.',
   source:"https://www.timesofisrael.com/maj-yair-zloof-32-idf-physician-who-lit-up-the-world/"},
   // Hebrew name CONFIRMED on source (יאיר זלוף). portrait: Times of Israel — credit "(IDF)"

  {id:"s-habaka-salman", photo:null, rank:'סא"ל', name:"סלמאן חבקה", age:33,
   unit:"מפקד גדוד 53, חטיבה 188 (שריון)", date:"2 בנובמבר 2023", dateISO:"2023-11-02", hometown:"ינוח-ג'ת",
   note:"מפקד דרוזי, מהחיילים הראשונים שנכנסו לקיבוץ בארי ב-7 באוקטובר כדי לחלץ ניצולים ולהילחם במחבלי חמאס.",
   source:"https://www.timesofisrael.com/lt-col-salman-habaka-33-responded-to-hamas-assault-fell-in-gaza/", spelling:"pending"},
   // portrait: Times of Israel — credit "Israel Defense Forces"

  {id:"s-dishon-eytan", photo:null, rank:'סמ"ר', name:"איתן דישון", age:21,
   unit:"סיירת גבעתי", date:"20 בנובמבר 2023", dateISO:"2023-11-20", hometown:"נוף ציון",
   note:"למד בישיבה התיכונית נווה שמואל באפרת, ואחד משלושה מבוגרי מחזורו שנפלו בלחימה בעזה.",
   source:"https://www.timesofisrael.com/staff-sgt-eytan-dishon-21-quiet-scholar-with-a-rich-inner-world/", spelling:"pending"},
   // portrait: Times of Israel — credit "(Courtesy)"

  {id:"s-nifousy-yair", photo:null, rank:'סמ"ר', name:"יאיר ניפוסי", age:20,
   unit:"גדוד 101, חטיבת הצנחנים", date:"", dateISO:"2023-11-02", hometown:"עדי",
   note:'נפצע אנושות בקרב מול מחבלי חמאס ברצועת עזה ונפטר מפצעיו. מותו נמסר על ידי צה"ל ב-2 בנובמבר 2023.',
   source:"https://www.theyeshivaworld.com/news/israel-news/2236787/death-toll-rises-to-19-idf-announces-death-of-staff-sgt-yair-nifousy-hyd-killed-in-gaza.html", spelling:"pending"}
   // DATE WITHHELD: IDF announced Nov 2, 2023; confirm exact date he died of wounds before displaying. portrait: none rights-clear yet. Original seed entry, expanded from research.
];

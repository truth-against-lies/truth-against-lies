/* Fallen Soldiers Memorial — data (English)
   Truth Against Lies | truth-against-lies.github.io

   IDF soldiers who fell in the Swords of Iron war (from Oct 7, 2023 onward) —
   distinct from the Oct 7 massacre victims memorial (oct7-victims-data-en.js).

   THE ONE RULE: no name, rank, age, or detail appears here unless it is
   already cited from a real source. Every entry MUST have a non-empty
   `source`. This list opens small and grows only as individual fallen are
   verified — never invent or guess a single detail. Photos carry the SAME
   bar: a portrait only where its rights/credit are clear AND the face is
   approved; otherwise `photo:null` renders a dignified candle. A candle
   beats an uncertain or misappropriated face.

   Schema per soldier:
     id, photo (null = candle), rank, name, age, unit, date (readable,
     displayed), dateISO (sort only), hometown, note (one sourced line),
     source (URL or text), photoCredit (shown only if photo set).

   `// portrait:` comments record the candidate portrait + credit found in
   research, for the face-by-face rights/approval pass before any photo goes
   in. Same plain var-array convention (loaded via <script src>, no fetch). */
var FALLEN_SOLDIERS = [
  {id:"s-abudi-adir", photo:null, rank:"Maj.", name:"Adir Meir Abudi", age:23,
   unit:"Tavor Company, Home Front Command", date:"October 7, 2023", dateISO:"2023-10-07", hometown:"Modiin",
   note:"One of the most senior commanders on duty at the Zikim training base when Hamas attacked; he ordered young trainees to shelter, saving their lives.",
   source:"https://www.timesofisrael.com/maj-adir-abudi-23-commander-with-fighting-spirit-who-saved-idf-base/"},
   // portrait: Times of Israel — credit "(IDF)"

  {id:"s-adany-eily", photo:null, rank:"Capt.", name:"Eily Adany", age:21,
   unit:"Maglan commando unit", date:"October 7, 2023", dateISO:"2023-10-07", hometown:"Tel Mond",
   note:"He enlisted in March 2020 and in March 2023 was appointed to lead his own team in the elite unit.",
   source:"https://www.timesofisrael.com/cpt-eily-adany-21-platoon-commander-gave-everything-to-his-soldiers/"},
   // portrait: Times of Israel — credit "IDF"

  {id:"s-dushi-rotem", photo:null, rank:"Staff Sgt.", name:"Rotem Dushi", age:20,
   unit:"Paratroopers Brigade", date:"October 7, 2023", dateISO:"2023-10-07", hometown:"Shimshit",
   note:"A Magen David Adom ambulance volunteer who loved to save lives and was always the first to volunteer.",
   source:"https://www.timesofisrael.com/staff-sgt-rotem-dushi-20-mda-volunteer-was-the-soul-of-his-family/"},
   // portrait: Times of Israel — credit "(IDF)"

  {id:"s-rozenshtein-bar", photo:null, rank:"Staff Sgt.", name:"Bar Rozenshtein", age:20,
   unit:"Golani Brigade", date:"October 7, 2023", dateISO:"2023-10-07", hometown:"Rishon Lezion",
   note:"Killed on patrol near Kibbutz Kissufim when his armored jeep was hit by gunfire and an RPG as the invasion began.",
   source:"https://www.timesofisrael.com/staff-sgt-bar-rozenshtein-20-computer-whiz-who-chose-to-be-a-golani/"},
   // portrait: Times of Israel — credit "(Courtesy)"

  {id:"s-brodski-kiril", photo:null, rank:"Sgt.", name:"Kiril Brodski", age:19,
   unit:"Gaza Division, Southern Brigade", date:"October 7, 2023", dateISO:"2023-10-07", hometown:"Ramat Gan",
   note:"An avid motorcycle enthusiast who traveled the country on motorcycles and got his father to take up the hobby.",
   source:"https://www.timesofisrael.com/sgt-kiril-brodski-19-motorcycle-enthusiast-and-devoted-friend/"},
   // portrait: Times of Israel — credit "IDF Spokesperson's Unit"

  {id:"s-kiean-habib", photo:null, rank:"Sgt.", name:"Habib Kiean", age:21,
   unit:"13th Battalion, Golani Brigade", date:"October 7, 2023", dateISO:"2023-10-07", hometown:"Hura",
   note:"A Bedouin Golani soldier and keen gamer, often found playing FIFA, Fortnite or Grand Theft Auto into the early hours.",
   source:"https://www.timesofisrael.com/sgt-habib-kiean-21-bedouin-golani-soldier-who-loved-video-games/"},
   // portrait: Times of Israel — credit "IDF"

  {id:"s-eden-haim-meir", photo:null, rank:"Staff Sgt.", name:"Haim Meir Eden", age:20,
   unit:"Golani Brigade", date:"", dateISO:"2023-10-07", hometown:"Rehovot",
   note:"He enlisted in March 2022 and was fatally wounded in combat at the Paga outpost on October 7, 2023.",
   source:"https://www.timesofisrael.com/staff-sgt-haim-meir-eden-20-golani-soldier-was-glue-of-the-family/"},
   // DATE WITHHELD: source dateline ("Dec 9, 2023") conflicts with its own text ("fatally wounded Oct 7, 2023") — exact date of death to be confirmed before a date is displayed. portrait: Times of Israel — credit "(Courtesy)"

  {id:"s-zloof-yair", photo:null, rank:"Maj.", name:"Yair Zloof", age:32,
   unit:"Surgical company, 401st Armored Brigade (combat doctor)", date:"October 10, 2023", dateISO:"2023-10-10", hometown:"Tel Mond",
   note:"An IDF combat doctor; he completed medical studies at Hebrew University and was a pediatrics resident at Schneider Children's Medical Center.",
   source:"https://www.timesofisrael.com/maj-yair-zloof-32-idf-physician-who-lit-up-the-world/"},
   // portrait: Times of Israel — credit "(IDF)"

  {id:"s-habaka-salman", photo:null, rank:"Lt. Col.", name:"Salman Habaka", age:33,
   unit:"Commander, 53rd Battalion, 188th Armored Brigade", date:"November 2, 2023", dateISO:"2023-11-02", hometown:"Yanuh-Jat",
   note:"A Druze commander, he was among the first IDF soldiers to enter Kibbutz Be'eri on October 7 to rescue survivors and fight Hamas gunmen.",
   source:"https://www.timesofisrael.com/lt-col-salman-habaka-33-responded-to-hamas-assault-fell-in-gaza/"},
   // portrait: Times of Israel — credit "Israel Defense Forces"

  {id:"s-dishon-eytan", photo:null, rank:"Staff Sgt.", name:"Eytan Dishon", age:21,
   unit:"Reconnaissance unit, Givati Brigade", date:"November 20, 2023", dateISO:"2023-11-20", hometown:"Nof Zion",
   note:"He attended Naveh Shmuel Yeshiva High School in Efrat and was one of three soldiers from his class killed in the Gaza offensive.",
   source:"https://www.timesofisrael.com/staff-sgt-eytan-dishon-21-quiet-scholar-with-a-rich-inner-world/"},
   // portrait: Times of Israel — credit "(Courtesy)"

  {id:"s-nifousy-yair", photo:null, rank:"Staff Sgt.", name:"Yair Nifousy", age:20,
   unit:"101st Battalion, Paratroopers Brigade", date:"", dateISO:"2023-11-02", hometown:"Adi",
   note:"Critically wounded in battle against Hamas terrorists inside Gaza; died of his wounds. His death was announced by the IDF on November 2, 2023.",
   source:"https://www.theyeshivaworld.com/news/israel-news/2236787/death-toll-rises-to-19-idf-announces-death-of-staff-sgt-yair-nifousy-hyd-killed-in-gaza.html"}
   // DATE WITHHELD: IDF announced Nov 2, 2023; exact date he died of wounds to be confirmed before a date is displayed. portrait: none rights-clear yet (a social-media photo was falsely captioned — source his portrait carefully). Original seed entry, now expanded from research.
];

/* Fallen Soldiers Memorial — data (English)
   Truth Against Lies | truth-against-lies.github.io

   IDF and Israeli Border Police (Magav) personnel who fell in the Swords of
   Iron war (from Oct 7, 2023 onward) — distinct from the Oct 7 massacre
   victims memorial (oct7-victims-data-en.js). All brothers, one wall.

   THE ONE RULE: no name, rank, age, detail — or face — appears here unless it
   is cited from a real source. Every entry has a `source`. Photos are local
   files in assets/fallen/<id>.<ext> (served CSP 'self'); if a file is absent
   the card degrades to a dignified candle automatically (img onerror).

   Canonical source = izkor.gov.il (the official Israeli Ministry of Defense
   "Yizkor" memorial): official name, rank, unit, date, story and portrait.
   13/13 here are izkor-sourced. Ranks are the official (often posthumously
   promoted) ranks. photoCredit = "Yizkor — Israeli Ministry of Defense"
   except where noted. Where a card adds detail beyond izkor (Lubin), that
   detail is explicitly credited to the press inside the note.

   Schema: id, photo, rank, name, age, unit, date, dateISO (sort), hometown,
   note (story), source, photoCredit. Plain var-array (loaded via <script
   src>, no fetch). */
var FALLEN_SOLDIERS = [
  {id:"s-abudi-adir", photo:"assets/fallen/s-abudi-adir.jpg", photoCredit:"Yizkor — Israeli Ministry of Defense",
   rank:"Maj.", name:"Adir Meir Abudi", age:23, unit:"Home Front Command — Rescue & Training Brigade",
   date:"October 7, 2023", dateISO:"2023-10-07", hometown:"Modiin",
   note:"Commander of a recruit company at Zikim base; on the morning of Oct 7 he led his soldiers with valor, prevented the base's seizure and saved soldiers and civilians.",
   source:"https://www.izkor.gov.il/%D7%90%D7%93%D7%99%D7%A8-%D7%9E%D7%90%D7%99%D7%A8%20%D7%A2%D7%91%D7%95%D7%93%D7%99/en_56204ec0436f123fce520710dcfa338e"},

  {id:"s-adany-eily", photo:"assets/fallen/s-adany-eily.jpg", photoCredit:"Yizkor — Israeli Ministry of Defense",
   rank:"Capt.", name:"Iliay Edeni", age:22, unit:"Commando Brigade (Maglan)",
   date:"October 7, 2023", dateISO:"2023-10-07", hometown:"Tel Mond",
   note:"A commando team commander; he fell entering a building first to search for his soldiers during fighting in a Gaza-border kibbutz on Oct 7.",
   source:"https://www.izkor.gov.il/%D7%90%D7%99%D7%9C%D7%99%D7%99%20%D7%A2%D7%93%D7%A0%D7%99/en_a3e4dbca50984d3c9eaeddb7ffb43f7a"},

  {id:"s-dushi-rotem", photo:"assets/fallen/s-dushi-rotem.jpg", photoCredit:"Yizkor — Israeli Ministry of Defense",
   rank:"Staff Sgt.", name:"Rotem Dushi", age:20, unit:"890th 'Ef'eh' Bn, Paratroopers Brigade",
   date:"October 7, 2023", dateISO:"2023-10-07", hometown:"Shimshit",
   note:"A paratrooper of the 890th Bn; he fought at Sha'ar HaNegev junction and at Kfar Aza, eliminated several terrorists and was killed by hidden attackers.",
   source:"https://www.izkor.gov.il/%D7%A8%D7%95%D7%AA%D7%9D%20%D7%93%D7%95%D7%A9%D7%99/en_5ec69d85e43a90b43fa13df7117a3e09"},

  {id:"s-rozenshtein-bar", photo:"assets/fallen/s-rozenshtein-bar.jpg", photoCredit:"Yizkor — Israeli Ministry of Defense",
   rank:"Staff Sgt.", name:"Bar Rozenshtein", age:20, unit:"51st Bn, Golani Brigade",
   date:"October 7, 2023", dateISO:"2023-10-07", hometown:"Rishon Lezion",
   note:"An outstanding student who chose combat service; he kept advancing under fire defending civilians near Kfar Aza and fell in battle.",
   source:"https://www.izkor.gov.il/%D7%91%D7%A8%20%D7%A8%D7%95%D7%96%D7%A0%D7%A9%D7%98%D7%99%D7%99%D7%9F/en_80132f4ce4e78ed66e325c778ecc3d7a"},

  {id:"s-brodski-kiril", photo:"assets/fallen/s-brodski-kiril.jpg", photoCredit:"Yizkor — Israeli Ministry of Defense",
   rank:"Sgt.", name:"Kiril Brodski", age:19, unit:"Infantry — driver, Southern Brigade command, Gaza Division",
   date:"October 7, 2023", dateISO:"2023-10-07", hometown:"Ramat Gan",
   note:"Served as a driver for the Southern Brigade command; he fell in battle at Kibbutz Nir'im while evacuating his wounded brigade commander under fire.",
   source:"https://www.izkor.gov.il/%D7%A7%D7%99%D7%A8%D7%99%D7%9C%20%D7%91%D7%A8%D7%95%D7%93%D7%A1%D7%A7%D7%99/en_23de17e5b53bc12c2cdbb763374b54ca"},

  {id:"s-kiean-habib", photo:"assets/fallen/s-kiean-habib.jpg", photoCredit:"Yizkor — Israeli Ministry of Defense",
   rank:"Sgt.", name:"Habib Kiaan", age:21, unit:"'Gideon' Bn (13th), Golani Brigade",
   date:"October 7, 2023", dateISO:"2023-10-07", hometown:"Hura",
   note:"A mortar-section fighter of the Gideon Bn; he held his position and kept fighting at the Paga outpost until he was killed after being wounded by grenade shrapnel.",
   source:"https://www.izkor.gov.il/%D7%97%D7%91%D7%99%D7%91%20%D7%A7%D7%99%D7%A2%D7%90%D7%9F/en_ee812591a338484d79767563b9de05dc"},

  {id:"s-eden-haim-meir", photo:"assets/fallen/s-eden-haim-meir.jpg", photoCredit:"Yizkor — Israeli Ministry of Defense",
   rank:"Staff Sgt.", name:"Haim Meir Eden", age:20, unit:"13th Bn, Golani Brigade",
   date:"December 9, 2023", dateISO:"2023-12-09", hometown:"Rehovot",
   note:"A Golani 13th Bn fighter; at the Paga outpost on Oct 7 he went to cover his comrades to enable evacuation of the wounded, was gravely wounded, and died of his wounds 64 days later.",
   source:"https://www.izkor.gov.il/%D7%97%D7%99%D7%99%D7%9D%20%D7%9E%D7%90%D7%99%D7%A8%20%D7%A2%D7%93%D7%9F/en_e6e1ca693a923231810bd9992c433beb"},

  {id:"s-zloof-yair", photo:"assets/fallen/s-zloof-yair.jpg", photoCredit:"Yizkor — Israeli Ministry of Defense",
   rank:"Maj.", name:"Yair Zloof", age:32, unit:"Surgical company, 401st Armored Brigade (combat doctor)",
   date:"October 10, 2023", dateISO:"2023-10-10", hometown:"Tel Mond",
   note:"A combat physician and commander of the 401st Armored Brigade's surgical company; a doctor by profession who enlisted via the Atuda track, he fell near Gaza during preparations for the ground operation.",
   source:"https://www.izkor.gov.il/%D7%99%D7%90%D7%99%D7%A8%20%D7%96%D7%9C%D7%95%D7%A3/en_af0eaf7624723ca636b8d34b2f9a5d8d"},

  {id:"s-habaka-salman", photo:"assets/fallen/s-habaka-salman.jpg", photoCredit:"Yizkor — Israeli Ministry of Defense",
   rank:"Lt. Col.", name:"Salman Habaka", age:33, unit:"Commander, 53rd Bn, 188th 'Barak' Armored Brigade",
   date:"November 2, 2023", dateISO:"2023-11-02", hometown:"Yanuh",
   note:"A tank-battalion commander, the 'hero of Be'eri' — he entered Kibbutz Be'eri with tanks and rescued civilians on Oct 7, and fell in northern Gaza supporting a Golani force caught in an ambush.",
   source:"https://www.izkor.gov.il/%D7%A1%D7%9C%D7%9E%D7%90%D7%9F%20%D7%97%D7%91%D7%A7%D7%94/en_273fac7b55ff23aebd04d71c984de56c"},

  {id:"s-dishon-eytan", photo:"assets/fallen/s-dishon-eytan.jpg", photoCredit:"Yizkor — Israeli Ministry of Defense",
   rank:"Staff Sgt.", name:"Eytan Dishon", age:21, unit:"Givati reconnaissance",
   date:"November 20, 2023", dateISO:"2023-11-20", hometown:"Jerusalem (Nof Zion)",
   note:"A fighter and hesder-yeshiva student, a commander in Givati; he fought about three weeks in Gaza and was killed by sniper fire in Jabaliya.",
   source:"https://www.izkor.gov.il/%D7%90%D7%99%D7%AA%D7%9F%20%D7%93%D7%99%D7%A9%D7%95%D7%9F/en_bde22c20e9b225471ea147ad9c177451"},

  {id:"s-nifousy-yair", photo:"assets/fallen/s-nifousy-yair.jpg", photoCredit:"Yizkor — Israeli Ministry of Defense",
   rank:"Staff Sgt.", name:"Yair Nifousy", age:21, unit:"101st Bn, Paratroopers Brigade",
   date:"November 2, 2023", dateISO:"2023-11-02", hometown:"Adi",
   note:"An outstanding sharpshooter of the Paratroopers' 101st Bn; he saved many lives through his precision and professionalism and fell fighting in Gaza.",
   source:"https://www.izkor.gov.il/%D7%99%D7%90%D7%99%D7%A8%20%D7%A0%D7%99%D7%A4%D7%95%D7%A1%D7%99/en_047ed94074d1ac32705affb57dbdac8a"},

  {id:"s-assayag-ravit", photo:"assets/fallen/s-assayag-ravit.jpg", photoCredit:"Yizkor — Israeli Ministry of Defense",
   rank:"Sgt. 2nd Cl.", name:"Ravit Chana Assayag", age:19, unit:"Border Police (Magav)",
   date:"October 7, 2023", dateISO:"2023-10-07", hometown:"Ashdod",
   note:"A Border Police fighter; on Oct 7 she entered a building first while covering her comrades (“I'm going in first, cover me”) and was killed by a concealed terrorist.",
   source:"https://www.izkor.gov.il/%D7%A8%D7%95%D7%95%D7%99%D7%AA%20%D7%97%D7%A0%D7%94%20%D7%90%D7%A1%D7%99%D7%99%D7%92/en_57dd584c4e33cff3ce1fc6e3a645c495"},

  {id:"s-lubin-rose", photo:"assets/fallen/s-lubin-rose.jpg", photoCredit:"Ynet (ynetnews.com)",
   rank:"Sgt. 2nd Cl.", name:"Rose-Ida (Ruth Elisheva) Lubin", age:20, unit:"Border Police (Magav)",
   date:"November 6, 2023", dateISO:"2023-11-06", hometown:"",
   note:"A lone immigrant soldier from Atlanta, USA; a Border Police fighter who defended Kibbutz Kissufim on Oct 7 and fell in a stabbing attack near Jerusalem's Old City. (Identity, unit and date: Yizkor; biographical details and circumstances: press reports.)",
   source:"https://www.izkor.gov.il/%D7%A8%D7%95%D7%96-%D7%90%D7%99%D7%99%D7%93%D7%94%20%D7%9C%D7%95%D7%91%D7%99%D7%9F/en_83efddee7084c59dc07104444284ca56"}
];

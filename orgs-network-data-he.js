/* Network map data for antisemitic organizations — Hebrew */
/* 245 org nodes, 13 categories */
var ORG_NODES = [
  // ═══════════════════════════════════════════════════════════════
  // Category 1: Islamist Terror (43 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-hamas",label:"חמאס",group:"islamist",lat:31.50,lng:34.47,founded:1987,title:"חמאס — עזה/קטאר, 1987"},
  {id:"org-pij",label:"ג'יהאד אסלאמי",group:"islamist",lat:33.51,lng:36.29,founded:1981,title:"ג'יהאד אסלאמי — עזה/דמשק, 1981"},
  {id:"org-hezbollah",label:"חיזבאללה",group:"islamist",lat:33.89,lng:35.50,founded:1982,title:"חיזבאללה — לבנון, 1982"},
  {id:"org-houthis",label:"החות'ים",group:"islamist",lat:15.37,lng:44.19,founded:1992,title:"החות'ים (אנסאר אללה) — תימן, 1992"},
  {id:"org-irgc",label:"משמרות המהפכה",group:"islamist",lat:35.69,lng:51.39,founded:1979,title:"משמרות המהפכה האסלאמית — איראן, 1979"},
  {id:"org-pflp",label:"PFLP",group:"islamist",lat:31.90,lng:35.20,founded:1967,title:"החזית העממית לשחרור פלסטין, 1967"},
  {id:"org-dflp",label:"DFLP",group:"islamist",lat:31.90,lng:35.20,founded:1969,title:"החזית הדמוקרטית לשחרור פלסטין, 1969"},
  {id:"org-al-aqsa-brigades",label:"חטיבות אל-אקצא",group:"islamist",lat:32.22,lng:35.25,founded:2000,title:"חטיבות אל-אקצא — הגדה המערבית, 2000"},
  {id:"org-pa-fatah",label:"הרש\"פ / פתח",group:"islamist",lat:31.90,lng:35.20,founded:1959,title:"הרשות הפלסטינית / פתח — רמאללה, 1959"},
  {id:"org-al-qaeda",label:"אל-קאעידה",group:"islamist",lat:34.53,lng:69.17,founded:1988,title:"אל-קאעידה — גלובלי, 1988"},
  {id:"org-isis",label:"דאעש",group:"islamist",lat:35.95,lng:39.01,founded:2014,title:"המדינה האסלאמית — עיראק/סוריה, 1999/2014"},
  {id:"org-muslim-brotherhood",label:"האחים המוסלמים",group:"islamist",lat:30.04,lng:31.24,founded:1928,title:"האחים המוסלמים — מצרים/גלובלי, 1928"},
  {id:"org-lashkar-e-taiba",label:"לשכר-א-טייבה",group:"islamist",lat:31.55,lng:74.35,founded:1987,title:"לשכר-א-טייבה — פקיסטן, 1987"},
  {id:"org-kataib-hezbollah",label:"כתאאב חיזבאללה",group:"islamist",lat:33.31,lng:44.37,founded:2003,title:"כתאאב חיזבאללה — עיראק, 2003"},
  {id:"org-harakat-al-nujaba",label:"חראכאת אל-נוג'בא",group:"islamist",lat:33.31,lng:44.37,founded:2013,title:"חראכאת אל-נוג'בא — עיראק, 2013"},
  {id:"org-asaib-ahl-al-haq",label:"עצאאב אהל אל-חק",group:"islamist",lat:33.31,lng:44.37,founded:2006,title:"עצאאב אהל אל-חק — עיראק, 2006"},
  {id:"org-al-shabaab",label:"אל-שבאב",group:"islamist",lat:2.05,lng:45.32,founded:2006,title:"אל-שבאב — סומליה, ~2006"},
  {id:"org-boko-haram",label:"בוקו חראם",group:"islamist",lat:11.85,lng:13.16,founded:2002,title:"בוקו חראם — ניגריה, 2002"},
  {id:"org-plf",label:"PLF",group:"islamist",lat:31.50,lng:34.47,founded:1976,title:"חזית השחרור הפלסטינית, 1976"},
  {id:"org-mahdi-army",label:"צבא המהדי",group:"islamist",lat:33.31,lng:44.37,founded:2003,title:"צבא המהדי — עיראק, 2003"},
  {id:"org-fatemiyoun",label:"פאטמיון",group:"islamist",lat:34.53,lng:69.17,founded:2014,title:"פאטמיון — אפגניסטן/סוריה, ~2014"},
  {id:"org-hizb-ut-tahrir",label:"חיזב אות-תחריר",group:"islamist",lat:31.77,lng:35.23,founded:1953,title:"חיזב אות-תחריר — גלובלי, 1953"},
  {id:"org-ansar-al-islam",label:"אנסאר אל-אסלאם",group:"islamist",lat:35.47,lng:45.44,founded:2001,title:"אנסאר אל-אסלאם — כורדיסטן, 2001"},
  {id:"org-taliban",label:"טאליבאן",group:"islamist",lat:34.53,lng:69.17,founded:1994,title:"טאליבאן — אפגניסטן, 1994"},
  {id:"org-hts",label:"HTS",group:"islamist",lat:36.20,lng:36.16,founded:2017,title:"היאת תחריר אל-שאם — סוריה, 2017"},
  {id:"org-ttp",label:"TTP",group:"islamist",lat:33.69,lng:73.04,founded:2007,title:"תהריכ-א-טאליבאן פקיסטן, 2007"},
  {id:"org-jem",label:"ג'ייש-א-מוחמד",group:"islamist",lat:30.20,lng:71.47,founded:2000,title:"ג'ייש-א-מוחמד — פקיסטן, 2000"},
  {id:"org-jamaat",label:"ג'מאעת-א-אסלאמי",group:"islamist",lat:31.55,lng:74.35,founded:1941,title:"ג'מאעת-א-אסלאמי — דרום אסיה, 1941"},
  {id:"org-abu-sayyaf",label:"אבו סאיף",group:"islamist",lat:6.05,lng:121.00,founded:1991,title:"אבו סאיף — פיליפינים, 1991"},
  {id:"org-ji",label:"ג'מעה אסלאמיה",group:"islamist",lat:-6.21,lng:106.85,founded:1993,title:"ג'מעה אסלאמיה — אינדונזיה, 1993"},
  {id:"org-imu",label:"IMU",group:"islamist",lat:41.30,lng:69.28,founded:1998,title:"התנועה האסלאמית של אוזבקיסטן, 1998"},
  {id:"org-muhajiroun",label:"אל-מוהאג'ירון",group:"islamist",lat:51.51,lng:-0.13,founded:1996,title:"אל-מוהאג'ירון — בריטניה, 1996"},
  {id:"org-aqap",label:"AQAP",group:"islamist",lat:15.37,lng:44.19,founded:2009,title:"אל-קאעידה בחצי האי הערבי — תימן, 2009"},
  {id:"org-aqim",label:"AQIM",group:"islamist",lat:36.75,lng:3.04,founded:2007,title:"אל-קאעידה במגרב — אלג'יריה, 2007"},
  {id:"org-ansar-dine",label:"אנסאר דין",group:"islamist",lat:16.77,lng:-3.01,founded:2012,title:"אנסאר דין — מאלי, 2012"},
  {id:"org-iswap",label:"ISWAP",group:"islamist",lat:12.00,lng:13.50,founded:2016,title:"מחוז מערב אפריקה של דאעש, 2016"},
  {id:"org-adf",label:"ADF",group:"islamist",lat:0.31,lng:32.58,founded:1995,title:"הכוחות הדמוקרטיים המאוחדים — אוגנדה/קונגו, 1995"},
  {id:"org-fpi",label:"FPI",group:"islamist",lat:-6.21,lng:106.85,founded:1998,title:"חזית מגני האסלאם — אינדונזיה, 1998"},
  {id:"org-grey-wolves",label:"הזאבים האפורים",group:"islamist",lat:39.93,lng:32.87,founded:1968,title:"הזאבים האפורים — טורקיה, 1968"},
  {id:"org-milli-gorus",label:"מילי גורוש",group:"islamist",lat:41.01,lng:28.98,founded:1969,title:"מילי גורוש — טורקיה/אירופה, 1969"},
  {id:"org-black-september",label:"ספטמבר השחור",group:"islamist",lat:31.95,lng:35.93,founded:1971,title:"ספטמבר השחור — אש\"ף, 1971"},
  {id:"org-sharia4",label:"שריעה4",group:"islamist",lat:50.85,lng:4.35,founded:2010,title:"שריעה4בלגיה/בריטניה — אירופה, ~2010"},
  {id:"org-tablighi",label:"תבליגי ג'מאעת",group:"islamist",lat:28.61,lng:77.23,founded:1926,title:"תבליגי ג'מאעת — דרום אסיה/גלובלי, 1926"},

  // ═══════════════════════════════════════════════════════════════
  // Category 2: Neo-Nazi & White Supremacist (47 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-kkk",label:"KKK",group:"neonazi",lat:34.00,lng:-84.00,founded:1865,title:"קו קלוקס קלאן — ארה\"ב, 1865"},
  {id:"org-national-alliance",label:"הברית הלאומית",group:"neonazi",lat:38.18,lng:-80.85,founded:1974,title:"הברית הלאומית — ארה\"ב, 1974"},
  {id:"org-the-order",label:"הסדר",group:"neonazi",lat:47.61,lng:-122.33,founded:1983,title:"The Order — ארה\"ב, 1983-1984"},
  {id:"org-aryan-nations",label:"העמים האריים",group:"neonazi",lat:47.68,lng:-116.78,founded:1977,title:"Aryan Nations — אידהו, 1977"},
  {id:"org-aryan-brotherhood",label:"האחווה הארית",group:"neonazi",lat:36.78,lng:-119.42,founded:1964,title:"Aryan Brotherhood — בתי כלא, 1964"},
  {id:"org-nsm",label:"NSM",group:"neonazi",lat:33.45,lng:-112.07,founded:1974,title:"התנועה הסוציאליסטית הלאומית — ארה\"ב, 1974"},
  {id:"org-atomwaffen",label:"אטומוואפן",group:"neonazi",lat:28.54,lng:-81.38,founded:2015,title:"אטומוואפן — ארה\"ב/גלובלי, 2015"},
  {id:"org-the-base",label:"The Base",group:"neonazi",lat:38.91,lng:-77.04,founded:2018,title:"The Base — ארה\"ב/גלובלי, 2018"},
  {id:"org-patriot-front",label:"Patriot Front",group:"neonazi",lat:32.78,lng:-96.80,founded:2017,title:"Patriot Front — ארה\"ב, 2017"},
  {id:"org-vanguard-america",label:"Vanguard America",group:"neonazi",lat:32.78,lng:-96.80,founded:2015,title:"Vanguard America — ארה\"ב, 2015"},
  {id:"org-identity-evropa",label:"Identity Evropa",group:"neonazi",lat:37.77,lng:-122.42,founded:2016,title:"Identity Evropa — ארה\"ב, 2016"},
  {id:"org-gdl",label:"GDL",group:"neonazi",lat:34.05,lng:-118.24,founded:2018,title:"Goyim Defense League — ארה\"ב, ~2018"},
  {id:"org-groypers",label:"גרויפרס",group:"neonazi",lat:41.88,lng:-87.63,founded:2019,title:"גרויפרס / ניק פואנטס — ארה\"ב, ~2019"},
  {id:"org-nsc-131",label:"NSC-131",group:"neonazi",lat:42.36,lng:-71.06,founded:2019,title:"NSC-131 — ניו אינגלנד, ~2019"},
  {id:"org-ram-active-clubs",label:"RAM",group:"neonazi",lat:34.05,lng:-118.24,founded:2017,title:"Rise Above Movement — ארה\"ב, 2017"},
  {id:"org-twp",label:"TWP",group:"neonazi",lat:38.25,lng:-85.76,founded:2015,title:"מפלגת העובדים המסורתית — ארה\"ב, 2015-2018"},
  {id:"org-league-of-the-south",label:"ליגת הדרום",group:"neonazi",lat:33.52,lng:-86.80,founded:1994,title:"ליגת הדרום — ארה\"ב, 1994"},
  {id:"org-creativity-movement",label:"תנועת היצירתיות",group:"neonazi",lat:41.88,lng:-87.63,founded:1973,title:"תנועת היצירתיות — ארה\"ב/גלובלי, 1973"},
  {id:"org-hammerskin-nation",label:"המרסקינס",group:"neonazi",lat:32.78,lng:-96.80,founded:1988,title:"Hammerskin Nation — ארה\"ב/גלובלי, 1988"},
  {id:"org-golden-dawn",label:"השחר המוזהב",group:"neonazi",lat:37.98,lng:23.73,founded:1985,title:"השחר המוזהב — יוון, 1985"},
  {id:"org-nrm",label:"NRM",group:"neonazi",lat:59.33,lng:18.07,founded:1997,title:"תנועת ההתנגדות הנורדית — סקנדינביה, 1997"},
  {id:"org-npd",label:"NPD",group:"neonazi",lat:52.52,lng:13.41,founded:1964,title:"NPD / Die Heimat — גרמניה, 1964"},
  {id:"org-blood-and-honour",label:"Blood & Honour",group:"neonazi",lat:51.51,lng:-0.13,founded:1987,title:"Blood & Honour / Combat 18 — בריטניה/גלובלי, 1987"},
  {id:"org-national-action",label:"National Action",group:"neonazi",lat:51.51,lng:-0.13,founded:2013,title:"National Action — בריטניה, 2013"},
  {id:"org-identitarian-movement",label:"הזהותנים",group:"neonazi",lat:48.86,lng:2.35,founded:2012,title:"התנועה הזהותנית — אירופה, ~2012"},
  {id:"org-casapound",label:"CasaPound",group:"neonazi",lat:41.90,lng:12.50,founded:2003,title:"CasaPound — איטליה, 2003"},
  {id:"org-jobbik",label:"יוביק",group:"neonazi",lat:47.50,lng:19.04,founded:2003,title:"יוביק — הונגריה, 2003"},
  {id:"org-rim",label:"RIM",group:"neonazi",lat:59.93,lng:30.32,founded:2002,title:"התנועה האימפריאלית הרוסית — רוסיה, 2002"},
  {id:"org-patriotic-alternative",label:"Patriotic Alternative",group:"neonazi",lat:51.51,lng:-0.13,founded:2019,title:"Patriotic Alternative — בריטניה, 2019"},
  {id:"org-stormfront",label:"Stormfront",group:"neonazi",lat:28.54,lng:-81.38,founded:1996,title:"Stormfront — אינטרנט, 1996"},
  {id:"org-daily-stormer",label:"Daily Stormer",group:"neonazi",lat:40.10,lng:-82.95,founded:2013,title:"Daily Stormer — אינטרנט, 2013"},
  {id:"org-terrorgram",label:"טרורגראם",group:"neonazi",lat:40.71,lng:-74.01,founded:2019,title:"טרורגראם — טלגרם, ~2019+"},
  {id:"org-proud-boys",label:"Proud Boys",group:"neonazi",lat:40.71,lng:-74.01,founded:2016,title:"Proud Boys — ארה\"ב/גלובלי, 2016"},
  {id:"org-oath-keepers",label:"Oath Keepers",group:"neonazi",lat:36.17,lng:-115.14,founded:2009,title:"Oath Keepers — ארה\"ב, 2009"},
  {id:"org-three-percent",label:"שלושה אחוז",group:"neonazi",lat:33.75,lng:-84.39,founded:2008,title:"שלושה אחוז — ארה\"ב, 2008"},
  {id:"org-azov",label:"אזוב",group:"neonazi",lat:47.10,lng:37.55,founded:2014,title:"גדוד אזוב — אוקראינה, 2014"},
  {id:"org-right-sector",label:"הסקטור הימני",group:"neonazi",lat:50.45,lng:30.52,founded:2013,title:"הסקטור הימני — אוקראינה, 2013"},
  {id:"org-svoboda",label:"סבובודה",group:"neonazi",lat:49.84,lng:24.03,founded:1991,title:"סבובודה — אוקראינה, 1991"},
  {id:"org-edl",label:"EDL",group:"neonazi",lat:52.48,lng:-1.90,founded:2009,title:"ליגת ההגנה האנגלית — בריטניה, 2009"},
  {id:"org-britain-first",label:"Britain First",group:"neonazi",lat:51.51,lng:-0.13,founded:2011,title:"Britain First — בריטניה, 2011"},
  {id:"org-pegida",label:"PEGIDA",group:"neonazi",lat:51.05,lng:13.74,founded:2014,title:"PEGIDA — גרמניה, 2014"},
  {id:"org-forza-nuova",label:"פורצה נואובה",group:"neonazi",lat:41.90,lng:12.50,founded:1997,title:"פורצה נואובה — איטליה, 1997"},
  {id:"org-soldiers-odin",label:"חיילי אודין",group:"neonazi",lat:65.01,lng:25.47,founded:2015,title:"חיילי אודין — פינלנד/גלובלי, 2015"},
  {id:"org-war",label:"WAR",group:"neonazi",lat:33.84,lng:-117.86,founded:1983,title:"התנגדות ארית לבנה — ארה\"ב, 1983"},
  {id:"org-posse",label:"פוסה קומיטטוס",group:"neonazi",lat:44.37,lng:-100.35,founded:1971,title:"פוסה קומיטטוס — ארה\"ב, 1971"},
  {id:"org-npi",label:"NPI",group:"neonazi",lat:38.91,lng:-77.04,founded:2005,title:"מכון המדיניות הלאומית — וושינגטון, 2005"},
  {id:"org-volksfront",label:"פולקספרונט",group:"neonazi",lat:45.52,lng:-122.68,founded:1994,title:"פולקספרונט — אורגון, 1994"},

  // ═══════════════════════════════════════════════════════════════
  // Category 3: BHI & Cults (15 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-isupk",label:"ISUPK",group:"bhi",lat:40.71,lng:-74.01,founded:1969,title:"בית הספר הישראלי, ~1969"},
  {id:"org-iuic",label:"IUIC",group:"bhi",lat:40.71,lng:-74.01,founded:2003,title:"ישראל מאוחדת במשיח — ארה\"ב, 2003"},
  {id:"org-sicarii",label:"סיקארי",group:"bhi",lat:40.73,lng:-74.08,founded:2019,title:"סיקארי / ירי ג'רזי סיטי — 2019"},
  {id:"org-nation-of-islam",label:"אומת האסלאם",group:"bhi",lat:41.88,lng:-87.63,founded:1930,title:"אומת האסלאם — ארה\"ב, 1930"},
  {id:"org-nbpp",label:"NBPP",group:"bhi",lat:32.78,lng:-96.80,founded:1989,title:"מפלגת הפנתרים השחורים החדשה — ארה\"ב, 1989"},
  {id:"org-five-percent-nation",label:"חמישה אחוז",group:"bhi",lat:40.69,lng:-73.94,founded:1964,title:"אומת חמישה אחוז — ארה\"ב, 1964"},
  {id:"org-christian-identity",label:"זהות נוצרית",group:"bhi",lat:47.68,lng:-116.78,founded:1946,title:"זהות נוצרית — ארה\"ב/גלובלי, ~1946"},
  {id:"org-westboro-baptist",label:"ווסטבורו",group:"bhi",lat:39.04,lng:-95.69,founded:1955,title:"כנסיית ווסטבורו הבפטיסטית — קנזס, 1955"},
  {id:"org-hotep-movement",label:"תנועת הוטפ",group:"bhi",lat:33.75,lng:-84.39,founded:2015,title:"תנועת הוטפ — ארה\"ב/אינטרנט, ~2015+"},
  {id:"org-neturei-karta",label:"נטורי קרתא",group:"bhi",lat:31.77,lng:35.23,founded:1938,title:"נטורי קרתא — ירושלים/ניו יורק/לונדון, 1938"},
  {id:"org-british-israelism",label:"ישראליות בריטית",group:"bhi",lat:51.51,lng:-0.13,founded:1840,title:"ישראליות בריטית — בריטניה/ארה\"ב, מאה 19"},
  {id:"org-icgjc",label:"ICGJC",group:"bhi",lat:40.71,lng:-74.01,founded:2002,title:"הכנסייה הישראלית של אלוהים — ארה\"ב, ~2002"},
  {id:"org-sspx",label:"SSPX",group:"bhi",lat:46.20,lng:6.14,founded:1970,title:"אגודת פיוס X — שווייץ/גלובלי, 1970"},
  {id:"org-sedevacantist",label:"סדוואקנטיסטים",group:"bhi",lat:41.90,lng:12.50,founded:1965,title:"תנועה סדוואקנטיסטית — מפלגי קתולים, ~1965"},
  {id:"org-rad-trad",label:"רדיקלים קתולים",group:"bhi",lat:38.91,lng:-77.04,founded:1965,title:"קתולים רדיקלים מסורתיים — ארה\"ב/אינטרנט, ~1965"},

  // ═══════════════════════════════════════════════════════════════
  // Category 4: Anti-Zionist / BDS (12 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-bds",label:"BDS",group:"antizionist",lat:31.90,lng:35.20,founded:2005,title:"תנועת BDS — גלובלי/רמאללה, 2005"},
  {id:"org-sjp",label:"SJP",group:"antizionist",lat:40.71,lng:-74.01,founded:2001,title:"סטודנטים למען צדק בפלסטין — קמפוסים, ~2001"},
  {id:"org-jvp",label:"JVP",group:"antizionist",lat:37.77,lng:-122.42,founded:1996,title:"קול יהודי לשלום — ארה\"ב, 1996"},
  {id:"org-samidoun",label:"סמידון",group:"antizionist",lat:49.26,lng:-123.11,founded:2012,title:"סמידון — קנדה/אירופה, 2012"},
  {id:"org-within-our-lifetime",label:"Within Our Lifetime",group:"antizionist",lat:40.71,lng:-74.01,founded:2015,title:"Within Our Lifetime — ניו יורק, 2015"},
  {id:"org-amp",label:"AMP",group:"antizionist",lat:41.88,lng:-87.63,founded:2006,title:"אמריקאים מוסלמים למען פלסטין — ארה\"ב, 2006"},
  {id:"org-fsjp",label:"FSJP",group:"antizionist",lat:40.71,lng:-74.01,founded:2018,title:"סגל אקדמי למען צדק בפלסטין, ~2018"},
  {id:"org-pym",label:"PYM",group:"antizionist",lat:40.71,lng:-74.01,founded:2006,title:"תנועת הנוער הפלסטיני, ~2006"},
  {id:"org-academic-boycott",label:"חרם אקדמי",group:"antizionist",lat:38.91,lng:-77.04,founded:2013,title:"חרם אקדמי (ASA, MESA, AAS), ~2013+"},
  {id:"org-electronic-intifada",label:"Electronic Intifada",group:"antizionist",lat:41.88,lng:-87.63,founded:2001,title:"Electronic Intifada — אינטרנט, 2001"},
  {id:"org-mondoweiss",label:"Mondoweiss",group:"antizionist",lat:40.71,lng:-74.01,founded:2006,title:"Mondoweiss — אינטרנט, 2006"},
  {id:"org-the-grayzone",label:"The Grayzone",group:"antizionist",lat:40.71,lng:-74.01,founded:2015,title:"The Grayzone — אינטרנט, 2015"},

  // ═══════════════════════════════════════════════════════════════
  // Category 5: Governments (12 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-iran",label:"איראן",group:"govts",lat:35.69,lng:51.39,founded:1979,title:"איראן — מהפכה 1979, מנהיג עליון: חמינאי"},
  {id:"org-pa-govt",label:"הרשות הפלסטינית",group:"govts",lat:31.90,lng:35.20,founded:1994,title:"הרשות הפלסטינית — רמאללה, 1994"},
  {id:"org-yemen-houthis",label:"תימן / החות'ים",group:"govts",lat:15.37,lng:44.19,founded:2014,title:"תימן (שלטון חות'י) — צפון תימן, מאז 2014"},
  {id:"org-turkey",label:"טורקיה",group:"govts",lat:39.93,lng:32.87,founded:1923,title:"טורקיה (ארדואן/AKP), 1923"},
  {id:"org-malaysia",label:"מלזיה",group:"govts",lat:3.14,lng:101.69,founded:1957,title:"מלזיה, 1957"},
  {id:"org-pakistan",label:"פקיסטן",group:"govts",lat:33.69,lng:73.04,founded:1947,title:"פקיסטן, 1947"},
  {id:"org-qatar",label:"קטאר",group:"govts",lat:25.29,lng:51.53,founded:1971,title:"קטאר, 1971"},
  {id:"org-north-korea",label:"צפון קוריאה",group:"govts",lat:39.04,lng:125.76,founded:1948,title:"צפון קוריאה, 1948"},
  {id:"org-venezuela",label:"ונצואלה",group:"govts",lat:10.49,lng:-66.88,founded:1999,title:"ונצואלה (צ'אבס/מדורו), 1999"},
  {id:"org-russia",label:"רוסיה",group:"govts",lat:55.76,lng:37.62,founded:1991,title:"רוסיה, 1991"},
  {id:"org-south-africa",label:"דרום אפריקה",group:"govts",lat:-25.75,lng:28.19,founded:1994,title:"דרום אפריקה (ANC), 1994"},
  {id:"org-china",label:"סין",group:"govts",lat:39.90,lng:116.40,founded:1949,title:"סין, 1949"},

  // ═══════════════════════════════════════════════════════════════
  // Category 6: Historical (30 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-nazi-germany",label:"גרמניה הנאצית",group:"historical",lat:52.52,lng:13.41,founded:1933,title:"גרמניה הנאצית — 1933-1945"},
  {id:"org-soviet-union",label:"ברית המועצות",group:"historical",lat:55.76,lng:37.62,founded:1917,title:"ברית המועצות — 1917-1991"},
  {id:"org-russian-empire",label:"האימפריה הרוסית",group:"historical",lat:59.93,lng:30.32,founded:1721,title:"האימפריה הרוסית — ~1791-1917"},
  {id:"org-vichy-france",label:"צרפת וישי",group:"historical",lat:46.13,lng:3.43,founded:1940,title:"צרפת וישי — 1940-1944"},
  {id:"org-fascist-italy",label:"איטליה הפשיסטית",group:"historical",lat:41.90,lng:12.50,founded:1922,title:"איטליה הפשיסטית — 1922-1943"},
  {id:"org-spanish-inquisition",label:"האינקוויזיציה הספרדית",group:"historical",lat:40.42,lng:-3.70,founded:1478,title:"האינקוויזיציה הספרדית — 1478-1834"},
  {id:"org-ottoman-empire",label:"האימפריה העות'מאנית",group:"historical",lat:41.01,lng:28.98,founded:1299,title:"האימפריה העות'מאנית — 1299-1922"},
  {id:"org-arab-states-expulsion",label:"גירוש מארצות ערב",group:"historical",lat:30.04,lng:31.24,founded:1948,title:"ארצות ערב — גירוש יהודים (1948-70)"},
  {id:"org-communist-poland-1968",label:"פולין 1968",group:"historical",lat:52.23,lng:21.01,founded:1968,title:"פולין הקומוניסטית — 1968"},
  {id:"org-iron-guard",label:"המשמר הברזל",group:"historical",lat:44.43,lng:26.10,founded:1927,title:"המשמר הברזל — רומניה, 1927-1941"},
  {id:"org-arrow-cross",label:"צלב החץ",group:"historical",lat:47.50,lng:19.04,founded:1935,title:"מפלגת צלב החץ — הונגריה, 1935-1945"},
  {id:"org-ustase",label:"אוסטאשה",group:"historical",lat:45.81,lng:15.98,founded:1929,title:"אוסטאשה — קרואטיה, 1929-1945"},
  {id:"org-crusaders",label:"הצלבנים",group:"historical",lat:31.77,lng:35.23,founded:1096,title:"הצלבנים — טבחות יהודים, 1096-1291"},
  {id:"org-almohads",label:"המוואחדון",group:"historical",lat:31.63,lng:-8.01,founded:1121,title:"שושלת המוואחדון — צפון אפריקה/ספרד, 1121-1269"},
  {id:"org-black-death",label:"פרעות המוות השחור",group:"historical",lat:47.37,lng:8.54,founded:1348,title:"פרעות המוות השחור — אירופה, 1348-1351"},
  {id:"org-khmelnytsky",label:"חמלניצקי",group:"historical",lat:50.45,lng:30.52,founded:1648,title:"מרד חמלניצקי — אוקראינה, 1648-1649"},
  {id:"org-english-expulsion",label:"הגירוש מאנגליה",group:"historical",lat:51.51,lng:-0.13,founded:1290,title:"גירוש יהודי אנגליה — 1290"},
  {id:"org-romania-pogrom",label:"פרעות רומניה",group:"historical",lat:47.16,lng:27.58,founded:1941,title:"פוגרום יאשי ופרעות רומניה — 1941"},
  {id:"org-antisemiten-liga",label:"ליגת האנטישמים",group:"historical",lat:52.52,lng:13.40,founded:1879,title:"ליגת האנטישמים — ברלין, 1879 (הארגון האנטישמי הראשון בהיסטוריה)"},
  {id:"org-dreyfus-affair",label:"פרשת דרייפוס",group:"historical",lat:48.86,lng:2.35,founded:1894,title:"פרשת דרייפוס — צרפת, 1894-1906"},
  {id:"org-action-francaise",label:"אקסיון פרנסז",group:"historical",lat:48.86,lng:2.35,founded:1899,title:"אקסיון פרנסז — צרפת, 1899-1944"},
  {id:"org-kishinev-pogrom",label:"פוגרום קישינב",group:"historical",lat:47.01,lng:28.86,founded:1903,title:"פוגרום קישינב — מולדובה, 1903"},
  {id:"org-black-hundreds",label:"המאות השחורות",group:"historical",lat:59.93,lng:30.34,founded:1905,title:"המאות השחורות — רוסיה, 1905-1917"},
  {id:"org-buf",label:"הפשיסטים הבריטיים",group:"historical",lat:51.51,lng:-0.13,founded:1932,title:"איגוד הפשיסטים הבריטי — לונדון, 1932-1940"},
  {id:"org-silver-shirts",label:"החולצות הכסופות",group:"historical",lat:35.60,lng:-82.55,founded:1933,title:"לגיון הכסף של אמריקה — ארה״ב, 1933-1941"},
  {id:"org-german-american-bund",label:"הבונד הגרמני-אמריקאי",group:"historical",lat:40.71,lng:-74.01,founded:1936,title:"הבונד הגרמני-אמריקאי — ניו יורק, 1936-1941"},
  {id:"org-einsatzgruppen",label:"אינזצגרופן",group:"historical",lat:52.52,lng:13.41,founded:1939,title:"אינזצגרופן (יחידות ההרג הנודדות של ה-SS) — 1939-1945"},
  {id:"org-farhud",label:"פרהוד (בגדד)",group:"historical",lat:33.31,lng:44.36,founded:1941,title:"פרהוד — פוגרום בגדד, יוני 1941"},
  {id:"org-kielce-pogrom",label:"פוגרום קילצה",group:"historical",lat:50.87,lng:20.63,founded:1946,title:"פוגרום קילצה — פולין, יולי 1946"},
  {id:"org-doctors-plot",label:"פרשת הרופאים",group:"historical",lat:55.76,lng:37.62,founded:1953,title:"פרשת הרופאים — ברית המועצות, מסע אנטישמי של סטלין, 1953"},

  // ═══════════════════════════════════════════════════════════════
  // Category 7: Media & Propaganda (18 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-al-jazeera",label:"אל ג'זירה",group:"media",lat:25.29,lng:51.53,founded:1996,title:"אל ג'זירה — קטאר, 1996"},
  {id:"org-press-tv",label:"Press TV",group:"media",lat:35.69,lng:51.39,founded:2007,title:"Press TV — איראן, 2007"},
  {id:"org-rt",label:"RT",group:"media",lat:55.76,lng:37.62,founded:2005,title:"RT (רוסיה היום) — רוסיה, 2005"},
  {id:"org-trt-world",label:"TRT World",group:"media",lat:41.01,lng:28.98,founded:2015,title:"TRT World — טורקיה, 2015"},
  {id:"org-pa-media",label:"תקשורת הרש\"פ",group:"media",lat:31.90,lng:35.20,founded:1994,title:"תקשורת הרשות הפלסטינית, 1994"},
  {id:"org-memri",label:"MEMRI",group:"media",lat:38.91,lng:-77.04,founded:1998,title:"MEMRI — מכון מחקר, 1998"},
  {id:"org-4chan-8kun",label:"4chan / 8kun",group:"media",lat:40.71,lng:-74.01,founded:2003,title:"4chan / 8kun — פורומי אינטרנט, 2003"},
  {id:"org-qanon",label:"QAnon",group:"media",lat:38.91,lng:-77.04,founded:2017,title:"QAnon — תנועת קונספירציה, 2017"},
  {id:"org-gab",label:"Gab",group:"media",lat:40.27,lng:-76.88,founded:2016,title:"Gab — רשת חברתית, 2016"},
  {id:"org-telegram-ext",label:"טלגרם קיצוני",group:"media",lat:25.20,lng:55.27,founded:2015,title:"ערוצי טלגרם קיצוניים — דובאי, ~2015+"},
  {id:"org-bitchute",label:"BitChute",group:"media",lat:51.51,lng:-0.13,founded:2017,title:"BitChute — בריטניה, 2017"},
  {id:"org-odysee",label:"Odysee",group:"media",lat:37.77,lng:-122.42,founded:2020,title:"Odysee (LBRY) — סן פרנסיסקו, 2020"},
  {id:"org-rumble",label:"Rumble",group:"media",lat:43.65,lng:-79.38,founded:2013,title:"Rumble — טורונטו, 2013"},
  {id:"org-iron-march",label:"Iron March",group:"media",lat:55.76,lng:37.62,founded:2011,title:"פורום Iron March — רוסיה, 2011-2017"},
  {id:"org-occidental",label:"Occidental Observer",group:"media",lat:34.05,lng:-118.24,founded:2007,title:"Occidental Observer — קליפורניה, 2007"},
  {id:"org-culture-wars",label:"Culture Wars",group:"media",lat:41.66,lng:-86.25,founded:1981,title:"Culture Wars — אינדיאנה, 1981"},
  {id:"org-irib",label:"IRIB",group:"media",lat:35.69,lng:51.39,founded:1979,title:"שידורי הרפובליקה האסלאמית — טהראן, 1979"},
  {id:"org-tiktok-hate",label:"שנאה בTikTok",group:"media",lat:39.90,lng:116.40,founded:2020,title:"תוכן אנטישמי בTikTok — גלובלי, ~2020+"},

  // ═══════════════════════════════════════════════════════════════
  // Category 8: International Institutions (6 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-unhrc",label:"מועצת זכויות האדם",group:"institutions",lat:46.20,lng:6.14,founded:2006,title:"מועצת זכויות האדם של האו\"ם, 2006"},
  {id:"org-unrwa",label:"אונר\"א",group:"institutions",lat:31.50,lng:34.47,founded:1949,title:"אונר\"א — סוכנות הפליטים הפלסטינים, 1949"},
  {id:"org-icc",label:"בית הדין הפלילי",group:"institutions",lat:52.08,lng:4.30,founded:2002,title:"בית הדין הפלילי הבינלאומי, 2002"},
  {id:"org-durban-conference",label:"ועידת דרבן",group:"institutions",lat:-29.86,lng:31.02,founded:2001,title:"ועידת דרבן — 2001"},
  {id:"org-unesco",label:"אונסק\"ו",group:"institutions",lat:48.86,lng:2.35,founded:1945,title:"אונסק\"ו, 1945"},
  {id:"org-unga",label:"העצרת הכללית",group:"institutions",lat:40.75,lng:-73.97,founded:1945,title:"העצרת הכללית של האו\"ם, 1945"},

  // ═══════════════════════════════════════════════════════════════
  // Category 9: Political Parties (17 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-afd",label:"AfD",group:"political",lat:52.52,lng:13.41,founded:2013,title:"AfD — גרמניה, 2013"},
  {id:"org-fpoe",label:"FPÖ",group:"political",lat:48.21,lng:16.37,founded:1956,title:"FPÖ — אוסטריה, 1956"},
  {id:"org-fidesz",label:"פידס",group:"political",lat:47.50,lng:19.04,founded:1988,title:"פידס — הונגריה, 1988"},
  {id:"org-labour-uk-corbyn",label:"לייבור (קורבין)",group:"political",lat:51.51,lng:-0.13,founded:2015,title:"לייבור בריטניה — עידן קורבין, 2015-2020"},
  {id:"org-national-rally-france",label:"העצרת הלאומית",group:"political",lat:48.86,lng:2.35,founded:1972,title:"העצרת הלאומית — צרפת, 1972"},
  {id:"org-bnp-national-front",label:"BNP",group:"political",lat:51.51,lng:-0.13,founded:1982,title:"BNP / החזית הלאומית — בריטניה, 1982"},
  {id:"org-sinn-fein",label:"שין פיין",group:"political",lat:53.35,lng:-6.26,founded:1905,title:"שין פיין — אירלנד, 1905"},
  {id:"org-pis-poland",label:"PiS",group:"political",lat:52.23,lng:21.01,founded:2001,title:"חוק וצדק — פולין, 2001"},
  {id:"org-podemos",label:"פודמוס",group:"political",lat:40.42,lng:-3.70,founded:2014,title:"פודמוס — ספרד, 2014"},
  {id:"org-syriza",label:"סיריזה",group:"political",lat:37.98,lng:23.73,founded:2004,title:"סיריזה — יוון, 2004"},
  {id:"org-vlaams",label:"פלאמס בלאנג",group:"political",lat:50.85,lng:4.35,founded:2004,title:"פלאמס בלאנג — בלגיה, 2004"},
  {id:"org-sweden-dems",label:"דמוקרטים שבדיים",group:"political",lat:59.33,lng:18.07,founded:1988,title:"דמוקרטים שבדיים — שטוקהולם, 1988"},
  {id:"org-vox",label:"ווקס",group:"political",lat:40.42,lng:-3.70,founded:2013,title:"ווקס — ספרד, 2013"},
  {id:"org-der-dritte",label:"Der III. Weg",group:"political",lat:52.52,lng:13.41,founded:2013,title:"הדרך השלישית — גרמניה, 2013"},
  {id:"org-die-rechte",label:"Die Rechte",group:"political",lat:51.51,lng:7.47,founded:2012,title:"Die Rechte — גרמניה, 2012"},
  {id:"org-kotleba",label:"קוטלבה / ĽSNS",group:"political",lat:48.15,lng:17.11,founded:2010,title:"קוטלבה / ĽSNS — סלובקיה, 2010"},
  {id:"org-ataka",label:"אטאקה",group:"political",lat:42.70,lng:23.32,founded:2005,title:"אטאקה — בולגריה, 2005"},

  // ═══════════════════════════════════════════════════════════════
  // Category 10: Individuals & Internet (29 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-kanye-west",label:"קניה ווסט",group:"individuals",lat:34.05,lng:-118.24,founded:2022,title:"קניה ווסט — ארה\"ב, 2022"},
  {id:"org-david-duke",label:"דייוויד דיוק",group:"individuals",lat:30.00,lng:-90.17,founded:1974,title:"דייוויד דיוק — ארה\"ב, ראש KKK לשעבר, 1974"},
  {id:"org-louis-farrakhan",label:"לואיס פרחאן",group:"individuals",lat:41.88,lng:-87.63,founded:1981,title:"לואיס פרחאן — ארה\"ב, מנהיג NOI"},
  {id:"org-antisemitic-shootings",label:"ירי 2018-22",group:"individuals",lat:40.44,lng:-79.99,founded:2018,title:"פיגועי ירי אנטישמיים 2018-2022"},
  {id:"org-nick-fuentes",label:"ניק פואנטס",group:"individuals",lat:41.88,lng:-87.63,founded:2017,title:"ניק פואנטס — ארה\"ב, מנהיג גרויפרס"},
  {id:"org-andrew-tate",label:"אנדרו טייט",group:"individuals",lat:44.43,lng:26.10,founded:2022,title:"אנדרו טייט — רומניה/אינטרנט, ~2022+"},
  {id:"org-incel-movement",label:"תנועת אינסל",group:"individuals",lat:40.71,lng:-74.01,founded:2014,title:"תנועת אינסל — מקוון, ~2014+"},
  {id:"org-sovereign-citizens",label:"אזרחים ריבוניים",group:"individuals",lat:38.91,lng:-77.04,founded:1971,title:"אזרחים ריבוניים — ארה\"ב, ~1971+"},
  {id:"org-david-irving",label:"דייוויד אירווינג",group:"individuals",lat:51.51,lng:-0.13,founded:1963,title:"דייוויד אירווינג — בריטניה, מכחיש שואה"},
  {id:"org-ernst-zundel",label:"ארנסט צונדל",group:"individuals",lat:43.65,lng:-79.38,founded:1976,title:"ארנסט צונדל — קנדה/גרמניה, מכחיש שואה"},
  {id:"org-faurisson",label:"רובר פוריסון",group:"individuals",lat:48.86,lng:2.35,founded:1978,title:"רובר פוריסון — צרפת, מכחיש שואה"},
  {id:"org-mahathir",label:"מהאתיר מוחמד",group:"individuals",lat:3.14,lng:101.69,founded:1981,title:"מהאתיר מוחמד — מלזיה, ראש ממשלה 1981-2003"},
  {id:"org-ahmadinejad",label:"אחמדינג'אד",group:"individuals",lat:35.69,lng:51.39,founded:2005,title:"מחמוד אחמדינג'אד — איראן, נשיא 2005-2013"},
  {id:"org-chavez",label:"הוגו צ'אבס",group:"individuals",lat:10.49,lng:-66.88,founded:1999,title:"הוגו צ'אבס — ונצואלה, נשיא 1999-2013"},
  {id:"org-ilhan-omar",label:"אילהאן עומר",group:"individuals",lat:44.98,lng:-93.27,founded:2019,title:"אילהאן עומר — קונגרס ארה\"ב, מאז 2019"},
  {id:"org-rashida-tlaib",label:"רשידה טלייב",group:"individuals",lat:42.33,lng:-83.05,founded:2019,title:"רשידה טלייב — קונגרס ארה\"ב, מאז 2019"},
  {id:"org-corbyn-ind",label:"ג'רמי קורבין",group:"individuals",lat:51.51,lng:-0.13,founded:2015,title:"ג'רמי קורבין — בריטניה, מנהיג לייבור 2015-2020"},
  {id:"org-roger-waters",label:"רוג'ר ווטרס",group:"individuals",lat:51.51,lng:-0.13,founded:2011,title:"רוג'ר ווטרס — בריטניה, פעיל BDS"},
  {id:"org-dieudonne",label:"דיאדונה",group:"individuals",lat:48.86,lng:2.35,founded:2003,title:"דיאדונה מבאלה מבאלה — צרפת, ~2003+"},
  {id:"org-alain-soral",label:"אלן סוראל",group:"individuals",lat:48.86,lng:2.35,founded:2007,title:"אלן סוראל — צרפת, שוויון ופיוס, 2007"},
  {id:"org-candace-owens",label:"קנדייס אואנס",group:"individuals",lat:38.91,lng:-77.04,founded:2022,title:"קנדייס אואנס — ארה\"ב, ~2022+"},
  {id:"org-tucker-carlson",label:"טאקר קרלסון",group:"individuals",lat:38.91,lng:-77.04,founded:2023,title:"טאקר קרלסון — ארה\"ב, ~2023+"},
  {id:"org-jackson-hinkle",label:"ג'קסון הינקל",group:"individuals",lat:34.05,lng:-118.24,founded:2023,title:"ג'קסון הינקל — ארה\"ב, ~2023+"},
  {id:"org-richard-spencer",label:"ריצ'רד ספנסר",group:"individuals",lat:38.91,lng:-77.04,founded:2008,title:"ריצ'רד ספנסר — ארה\"ב, מנהיג אלט-רייט, 2008"},
  {id:"org-matthew-heimbach",label:"מתיו היימבך",group:"individuals",lat:38.25,lng:-85.76,founded:2015,title:"מתיו היימבך — ארה\"ב, מייסד TWP"},
  {id:"org-tom-metzger",label:"טום מצגר",group:"individuals",lat:33.84,lng:-117.86,founded:1983,title:"טום מצגר — קליפורניה, מייסד WAR"},
  {id:"org-andrew-anglin",label:"אנדרו אנגלין",group:"individuals",lat:40.10,lng:-82.95,founded:2013,title:"אנדרו אנגלין — אוהיו, מייסד Daily Stormer"},
  {id:"org-kevin-macdonald",label:"קווין מקדונלד",group:"individuals",lat:34.05,lng:-118.24,founded:1998,title:"קווין מקדונלד — קליפורניה, Culture of Critique"},
  {id:"org-em-jones",label:"אי. מייקל ג'ונס",group:"individuals",lat:41.66,lng:-86.25,founded:1981,title:"אי. מייקל ג'ונס — אינדיאנה, Culture Wars"},

  // ═══════════════════════════════════════════════════════════════
  // Category 11: NGOs (9 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-al-haq",label:"אל-חק",group:"ngos",lat:31.90,lng:35.20,founded:1979,title:"אל-חק — רמאללה, 1979 (קשור לPFLP)"},
  {id:"org-addameer",label:"אדמיר",group:"ngos",lat:31.90,lng:35.20,founded:1992,title:"אדמיר — רמאללה, 1992 (קשור לPFLP)"},
  {id:"org-dci-p",label:"DCI-P",group:"ngos",lat:31.90,lng:35.20,founded:1991,title:"הגנה על ילדים בינלאומי — פלסטין, 1991"},
  {id:"org-pchr",label:"PCHR",group:"ngos",lat:31.50,lng:34.47,founded:1995,title:"המרכז הפלסטיני לזכויות אדם — עזה, 1995"},
  {id:"org-upwc",label:"UPWC",group:"ngos",lat:31.90,lng:35.20,founded:1980,title:"איגוד ועדות הנשים הפלסטיניות — רמאללה, ~1980"},
  {id:"org-amnesty",label:"אמנסטי",group:"ngos",lat:51.51,lng:-0.13,founded:1961,title:"אמנסטי אינטרנשיונל — לונדון, 1961"},
  {id:"org-hrw",label:"HRW",group:"ngos",lat:40.71,lng:-74.01,founded:1978,title:"Human Rights Watch — ניו יורק, 1978"},
  {id:"org-btselem",label:"בצלם",group:"ngos",lat:31.77,lng:35.23,founded:1989,title:"בצלם — ירושלים, 1989"},
  {id:"org-breaking",label:"שוברים שתיקה",group:"ngos",lat:31.77,lng:35.23,founded:2004,title:"שוברים שתיקה — ישראל, 2004"},

  // ═══════════════════════════════════════════════════════════════
  // Category 12: Holocaust Denial (4 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-ihr",label:"IHR",group:"denial",lat:34.05,lng:-118.24,founded:1978,title:"המכון לסקירה היסטורית — קליפורניה, 1978"},
  {id:"org-codoh",label:"CODOH",group:"denial",lat:34.05,lng:-118.24,founded:1987,title:"הוועדה לדיון פתוח על השואה — קליפורניה, 1987"},
  {id:"org-barnes",label:"Barnes Review",group:"denial",lat:38.91,lng:-77.04,founded:1994,title:"Barnes Review — וושינגטון, 1994"},
  {id:"org-adelaide",label:"מכון אדלייד",group:"denial",lat:-34.93,lng:138.60,founded:1995,title:"מכון אדלייד — אוסטרליה, 1995"},

  // ═══════════════════════════════════════════════════════════════
  // Category 13: Conspiracy Movements (3 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-larouche",label:"תנועת לרוש",group:"conspiracy",lat:38.91,lng:-77.04,founded:1968,title:"תנועת לרוש — וושינגטון, ~1968"},
  {id:"org-protocols",label:"פרוטוקולי ציון",group:"conspiracy",lat:59.93,lng:30.32,founded:1903,title:"הפרוטוקולים של זקני ציון — רוסיה, 1903 (זיוף)"},
  {id:"org-hezbollah-latam",label:"חיזבאללה לטינית",group:"islamist",lat:-34.60,lng:-58.38,founded:1994,title:"רשת חיזבאללה בדרום אמריקה — ארגנטינה/משולש הגבולות, 1994"}
];

// Edges and groups are language-independent — reuse from EN file
var ORG_EDGES = window.ORG_EDGES || [];
var ORG_GROUPS = window.ORG_GROUPS || {};
var EDGE_TYPES = window.EDGE_TYPES || {};

var GROUP_LABELS = {
  islamist:"טרור אסלאמיסטי",
  neonazi:"ניאו-נאצים ועליונות לבנה",
  bhi:"עברים שחורים וכתות",
  antizionist:"אנטי-ציונות קיצונית / BDS",
  govts:"ממשלות (נוכחיות)",
  historical:"היסטוריות",
  media:"תקשורת ותעמולה",
  institutions:"מוסדות בינלאומיים",
  political:"מפלגות פוליטיות",
  individuals:"יחידים ותנועות אינטרנט",
  ngos:"ארגוני NGO",
  denial:"הכחשת שואה",
  conspiracy:"תנועות קונספירציה"
};

/* Network map data for antisemitic organizations — English */
/* 262 org nodes, 13 categories, ~160 edges */
var ORG_NODES = [
  // ═══════════════════════════════════════════════════════════════
  // Category 1: Islamist Terror (43 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-hamas",label:"Hamas",group:"islamist",lat:31.50,lng:34.47,founded:1987,title:"Hamas — Gaza/Qatar, Founded 1987"},
  {id:"org-pij",label:"PIJ",group:"islamist",lat:33.51,lng:36.29,founded:1981,title:"Palestinian Islamic Jihad — Gaza/Damascus, Founded 1981"},
  {id:"org-hezbollah",label:"Hezbollah",group:"islamist",lat:33.89,lng:35.50,founded:1982,title:"Hezbollah — Lebanon, Founded 1982"},
  {id:"org-houthis",label:"Houthis",group:"islamist",lat:15.37,lng:44.19,founded:1992,title:"Houthis (Ansar Allah) — Yemen, Founded 1992"},
  {id:"org-irgc",label:"IRGC",group:"islamist",lat:35.69,lng:51.39,founded:1979,title:"Islamic Revolutionary Guard Corps — Iran, Founded 1979"},
  {id:"org-pflp",label:"PFLP",group:"islamist",lat:31.90,lng:35.20,founded:1967,title:"Popular Front for Liberation of Palestine, Founded 1967"},
  {id:"org-dflp",label:"DFLP",group:"islamist",lat:31.90,lng:35.20,founded:1969,title:"Democratic Front for Liberation of Palestine, Founded 1969"},
  {id:"org-al-aqsa-brigades",label:"Al-Aqsa Brigades",group:"islamist",lat:32.22,lng:35.25,founded:2000,title:"Al-Aqsa Martyrs' Brigades — West Bank, Founded 2000"},
  {id:"org-pa-fatah",label:"PA / Fatah",group:"islamist",lat:31.90,lng:35.20,founded:1959,title:"Palestinian Authority / Fatah — Ramallah, Founded 1959"},
  {id:"org-al-qaeda",label:"Al-Qaeda",group:"islamist",lat:34.53,lng:69.17,founded:1988,title:"Al-Qaeda — Global, Founded 1988"},
  {id:"org-isis",label:"ISIS",group:"islamist",lat:35.95,lng:39.01,founded:2014,title:"Islamic State — Iraq/Syria, Founded 1999/2014"},
  {id:"org-muslim-brotherhood",label:"Muslim Brotherhood",group:"islamist",lat:30.04,lng:31.24,founded:1928,title:"Muslim Brotherhood — Egypt/Global, Founded 1928"},
  {id:"org-lashkar-e-taiba",label:"Lashkar-e-Taiba",group:"islamist",lat:31.55,lng:74.35,founded:1987,title:"Lashkar-e-Taiba — Pakistan, Founded 1987"},
  {id:"org-kataib-hezbollah",label:"Kata'ib Hezbollah",group:"islamist",lat:33.31,lng:44.37,founded:2003,title:"Kata'ib Hezbollah — Iraq, Founded 2003"},
  {id:"org-harakat-al-nujaba",label:"Harakat al-Nujaba",group:"islamist",lat:33.31,lng:44.37,founded:2013,title:"Harakat al-Nujaba — Iraq, Founded 2013"},
  {id:"org-asaib-ahl-al-haq",label:"Asa'ib Ahl al-Haq",group:"islamist",lat:33.31,lng:44.37,founded:2006,title:"Asa'ib Ahl al-Haq — Iraq, Founded 2006"},
  {id:"org-al-shabaab",label:"Al-Shabaab",group:"islamist",lat:2.05,lng:45.32,founded:2006,title:"Al-Shabaab — Somalia, Founded ~2006"},
  {id:"org-boko-haram",label:"Boko Haram",group:"islamist",lat:11.85,lng:13.16,founded:2002,title:"Boko Haram — Nigeria, Founded 2002"},
  {id:"org-plf",label:"PLF",group:"islamist",lat:31.50,lng:34.47,founded:1976,title:"Palestine Liberation Front, Founded 1976"},
  {id:"org-mahdi-army",label:"Mahdi Army",group:"islamist",lat:33.31,lng:44.37,founded:2003,title:"Mahdi Army — Iraq, Founded 2003"},
  {id:"org-fatemiyoun",label:"Fatemiyoun",group:"islamist",lat:34.53,lng:69.17,founded:2014,title:"Fatemiyoun — Afghanistan/Syria, Founded ~2014"},
  {id:"org-hizb-ut-tahrir",label:"Hizb ut-Tahrir",group:"islamist",lat:31.77,lng:35.23,founded:1953,title:"Hizb ut-Tahrir — Global, Founded 1953"},
  {id:"org-ansar-al-islam",label:"Ansar al-Islam",group:"islamist",lat:35.47,lng:45.44,founded:2001,title:"Ansar al-Islam — Iraqi Kurdistan, Founded 2001"},
  {id:"org-taliban",label:"Taliban",group:"islamist",lat:34.53,lng:69.17,founded:1994,title:"Taliban — Afghanistan, Founded 1994"},
  {id:"org-hts",label:"HTS",group:"islamist",lat:36.20,lng:36.16,founded:2017,title:"Hay'at Tahrir al-Sham — Syria, Founded 2017"},
  {id:"org-ttp",label:"TTP",group:"islamist",lat:33.69,lng:73.04,founded:2007,title:"Tehrik-i-Taliban Pakistan — Pakistan, Founded 2007"},
  {id:"org-jem",label:"JeM",group:"islamist",lat:30.20,lng:71.47,founded:2000,title:"Jaish-e-Mohammed — Pakistan, Founded 2000"},
  {id:"org-jamaat",label:"Jamaat-e-Islami",group:"islamist",lat:31.55,lng:74.35,founded:1941,title:"Jamaat-e-Islami — South Asia, Founded 1941"},
  {id:"org-abu-sayyaf",label:"Abu Sayyaf",group:"islamist",lat:6.05,lng:121.00,founded:1991,title:"Abu Sayyaf — Philippines, Founded 1991"},
  {id:"org-ji",label:"Jemaah Islamiyah",group:"islamist",lat:-6.21,lng:106.85,founded:1993,title:"Jemaah Islamiyah — Indonesia, Founded 1993"},
  {id:"org-imu",label:"IMU",group:"islamist",lat:41.30,lng:69.28,founded:1998,title:"Islamic Movement of Uzbekistan — Central Asia, Founded 1998"},
  {id:"org-muhajiroun",label:"Al-Muhajiroun",group:"islamist",lat:51.51,lng:-0.13,founded:1996,title:"Al-Muhajiroun — UK, Founded 1996"},
  {id:"org-aqap",label:"AQAP",group:"islamist",lat:15.37,lng:44.19,founded:2009,title:"Al-Qaeda in the Arabian Peninsula — Yemen, Founded 2009"},
  {id:"org-aqim",label:"AQIM",group:"islamist",lat:36.75,lng:3.04,founded:2007,title:"Al-Qaeda in the Islamic Maghreb — Algeria, Founded 2007"},
  {id:"org-ansar-dine",label:"Ansar Dine",group:"islamist",lat:16.77,lng:-3.01,founded:2012,title:"Ansar Dine — Mali, Founded 2012"},
  {id:"org-iswap",label:"ISWAP",group:"islamist",lat:12.00,lng:13.50,founded:2016,title:"Islamic State West Africa Province — Lake Chad, Founded 2016"},
  {id:"org-adf",label:"ADF",group:"islamist",lat:0.31,lng:32.58,founded:1995,title:"Allied Democratic Forces — Uganda/DRC, Founded 1995"},
  {id:"org-fpi",label:"FPI",group:"islamist",lat:-6.21,lng:106.85,founded:1998,title:"Front Pembela Islam — Indonesia, Founded 1998"},
  {id:"org-grey-wolves",label:"Grey Wolves",group:"islamist",lat:39.93,lng:32.87,founded:1968,title:"Grey Wolves — Turkey, Founded 1968"},
  {id:"org-milli-gorus",label:"Milli Görüş",group:"islamist",lat:41.01,lng:28.98,founded:1969,title:"Milli Görüş — Turkey/Europe, Founded 1969"},
  {id:"org-black-september",label:"Black September",group:"islamist",lat:31.95,lng:35.93,founded:1971,title:"Black September — PLO, Founded 1971"},
  {id:"org-sharia4",label:"Sharia4",group:"islamist",lat:50.85,lng:4.35,founded:2010,title:"Sharia4Belgium/UK/etc — Europe, Founded ~2010"},
  {id:"org-tablighi",label:"Tablighi Jamaat",group:"islamist",lat:28.61,lng:77.23,founded:1926,title:"Tablighi Jamaat — South Asia/Global, Founded 1926"},

  // ═══════════════════════════════════════════════════════════════
  // Category 2: Neo-Nazi & White Supremacist (47 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-kkk",label:"KKK",group:"neonazi",lat:34.00,lng:-84.00,founded:1865,title:"Ku Klux Klan — USA, Founded 1865"},
  {id:"org-national-alliance",label:"National Alliance",group:"neonazi",lat:38.18,lng:-80.85,founded:1974,title:"National Alliance — West Virginia, Founded 1974"},
  {id:"org-the-order",label:"The Order",group:"neonazi",lat:47.61,lng:-122.33,founded:1983,title:"The Order (Brüder Schweigen) — USA, 1983-1984"},
  {id:"org-aryan-nations",label:"Aryan Nations",group:"neonazi",lat:47.68,lng:-116.78,founded:1977,title:"Aryan Nations — Idaho, Founded 1977"},
  {id:"org-aryan-brotherhood",label:"Aryan Brotherhood",group:"neonazi",lat:36.78,lng:-119.42,founded:1964,title:"Aryan Brotherhood — US Prisons, Founded 1964"},
  {id:"org-nsm",label:"NSM",group:"neonazi",lat:33.45,lng:-112.07,founded:1974,title:"National Socialist Movement — USA, Founded 1974"},
  {id:"org-atomwaffen",label:"Atomwaffen",group:"neonazi",lat:28.54,lng:-81.38,founded:2015,title:"Atomwaffen Division — USA/Global, Founded 2015"},
  {id:"org-the-base",label:"The Base",group:"neonazi",lat:38.91,lng:-77.04,founded:2018,title:"The Base — USA/Global, Founded 2018"},
  {id:"org-patriot-front",label:"Patriot Front",group:"neonazi",lat:32.78,lng:-96.80,founded:2017,title:"Patriot Front — USA, Founded 2017"},
  {id:"org-vanguard-america",label:"Vanguard America",group:"neonazi",lat:32.78,lng:-96.80,founded:2015,title:"Vanguard America — USA, Founded 2015"},
  {id:"org-identity-evropa",label:"Identity Evropa",group:"neonazi",lat:37.77,lng:-122.42,founded:2016,title:"Identity Evropa / AmIM — USA, Founded 2016"},
  {id:"org-gdl",label:"GDL",group:"neonazi",lat:34.05,lng:-118.24,founded:2018,title:"Goyim Defense League — USA, Founded ~2018"},
  {id:"org-groypers",label:"Groypers",group:"neonazi",lat:41.88,lng:-87.63,founded:2019,title:"Groypers / Nick Fuentes — USA, Founded ~2019"},
  {id:"org-nsc-131",label:"NSC-131",group:"neonazi",lat:42.36,lng:-71.06,founded:2019,title:"NSC-131 — New England, Founded ~2019"},
  {id:"org-ram-active-clubs",label:"RAM / Active Clubs",group:"neonazi",lat:34.05,lng:-118.24,founded:2017,title:"Rise Above Movement — Southern California, Founded 2017"},
  {id:"org-twp",label:"TWP",group:"neonazi",lat:38.25,lng:-85.76,founded:2015,title:"Traditionalist Worker Party — USA, 2015-2018"},
  {id:"org-league-of-the-south",label:"League of the South",group:"neonazi",lat:33.52,lng:-86.80,founded:1994,title:"League of the South — Alabama, Founded 1994"},
  {id:"org-creativity-movement",label:"Creativity Movement",group:"neonazi",lat:41.88,lng:-87.63,founded:1973,title:"Creativity Movement — USA/Global, Founded 1973"},
  {id:"org-hammerskin-nation",label:"Hammerskins",group:"neonazi",lat:32.78,lng:-96.80,founded:1988,title:"Hammerskin Nation — USA/Global, Founded 1988"},
  {id:"org-golden-dawn",label:"Golden Dawn",group:"neonazi",lat:37.98,lng:23.73,founded:1985,title:"Golden Dawn — Greece, Founded 1985"},
  {id:"org-nrm",label:"NRM",group:"neonazi",lat:59.33,lng:18.07,founded:1997,title:"Nordic Resistance Movement — Scandinavia, Founded 1997"},
  {id:"org-npd",label:"NPD",group:"neonazi",lat:52.52,lng:13.41,founded:1964,title:"NPD / Die Heimat — Germany, Founded 1964"},
  {id:"org-blood-and-honour",label:"Blood & Honour",group:"neonazi",lat:51.51,lng:-0.13,founded:1987,title:"Blood & Honour / Combat 18 — UK/Global, Founded 1987"},
  {id:"org-national-action",label:"National Action",group:"neonazi",lat:51.51,lng:-0.13,founded:2013,title:"National Action — UK, Founded 2013"},
  {id:"org-identitarian-movement",label:"Identitarians",group:"neonazi",lat:48.86,lng:2.35,founded:2012,title:"Identitarian Movement — Europe, Founded ~2012"},
  {id:"org-casapound",label:"CasaPound",group:"neonazi",lat:41.90,lng:12.50,founded:2003,title:"CasaPound — Italy, Founded 2003"},
  {id:"org-jobbik",label:"Jobbik",group:"neonazi",lat:47.50,lng:19.04,founded:2003,title:"Jobbik — Hungary, Founded 2003"},
  {id:"org-rim",label:"RIM",group:"neonazi",lat:59.93,lng:30.32,founded:2002,title:"Russian Imperial Movement — Russia, Founded 2002"},
  {id:"org-patriotic-alternative",label:"Patriotic Alternative",group:"neonazi",lat:51.51,lng:-0.13,founded:2019,title:"Patriotic Alternative — UK, Founded 2019"},
  {id:"org-stormfront",label:"Stormfront",group:"neonazi",lat:28.54,lng:-81.38,founded:1996,title:"Stormfront — Internet (West Palm Beach), Founded 1996"},
  {id:"org-daily-stormer",label:"Daily Stormer",group:"neonazi",lat:40.10,lng:-82.95,founded:2013,title:"Daily Stormer — Internet, Founded 2013"},
  {id:"org-terrorgram",label:"Terrorgram",group:"neonazi",lat:40.71,lng:-74.01,founded:2019,title:"Terrorgram — Telegram, Active ~2019+"},
  {id:"org-proud-boys",label:"Proud Boys",group:"neonazi",lat:40.71,lng:-74.01,founded:2016,title:"Proud Boys — USA/Global, Founded 2016"},
  {id:"org-oath-keepers",label:"Oath Keepers",group:"neonazi",lat:36.17,lng:-115.14,founded:2009,title:"Oath Keepers — USA, Founded 2009"},
  {id:"org-three-percent",label:"Three Percenters",group:"neonazi",lat:33.75,lng:-84.39,founded:2008,title:"Three Percenters — USA, Founded 2008"},
  {id:"org-azov",label:"Azov",group:"neonazi",lat:47.10,lng:37.55,founded:2014,title:"Azov Regiment — Ukraine, Founded 2014"},
  {id:"org-right-sector",label:"Right Sector",group:"neonazi",lat:50.45,lng:30.52,founded:2013,title:"Right Sector — Ukraine, Founded 2013"},
  {id:"org-svoboda",label:"Svoboda",group:"neonazi",lat:49.84,lng:24.03,founded:1991,title:"Svoboda — Ukraine, Founded 1991"},
  {id:"org-edl",label:"EDL",group:"neonazi",lat:52.48,lng:-1.90,founded:2009,title:"English Defence League — UK, Founded 2009"},
  {id:"org-britain-first",label:"Britain First",group:"neonazi",lat:51.51,lng:-0.13,founded:2011,title:"Britain First — UK, Founded 2011"},
  {id:"org-pegida",label:"PEGIDA",group:"neonazi",lat:51.05,lng:13.74,founded:2014,title:"PEGIDA — Germany (Dresden), Founded 2014"},
  {id:"org-forza-nuova",label:"Forza Nuova",group:"neonazi",lat:41.90,lng:12.50,founded:1997,title:"Forza Nuova — Italy, Founded 1997"},
  {id:"org-soldiers-odin",label:"Soldiers of Odin",group:"neonazi",lat:65.01,lng:25.47,founded:2015,title:"Soldiers of Odin — Finland/Global, Founded 2015"},
  {id:"org-war",label:"WAR",group:"neonazi",lat:33.84,lng:-117.86,founded:1983,title:"White Aryan Resistance — USA, Founded 1983"},
  {id:"org-posse",label:"Posse Comitatus",group:"neonazi",lat:44.37,lng:-100.35,founded:1971,title:"Posse Comitatus — USA, Founded 1971"},
  {id:"org-npi",label:"NPI",group:"neonazi",lat:38.91,lng:-77.04,founded:2005,title:"National Policy Institute — Washington DC, Founded 2005"},
  {id:"org-volksfront",label:"Volksfront",group:"neonazi",lat:45.52,lng:-122.68,founded:1994,title:"Volksfront — Oregon/USA, Founded 1994"},

  // ═══════════════════════════════════════════════════════════════
  // Category 3: BHI & Cults (15 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-isupk",label:"ISUPK",group:"bhi",lat:40.71,lng:-74.01,founded:1969,title:"Israelite School of Universal Practical Knowledge — NYC, Founded ~1969"},
  {id:"org-iuic",label:"IUIC",group:"bhi",lat:40.71,lng:-74.01,founded:2003,title:"Israel United in Christ — USA, Founded 2003"},
  {id:"org-sicarii",label:"Sicarii",group:"bhi",lat:40.73,lng:-74.08,founded:2019,title:"Sicarii / Jersey City Shooting — 2019"},
  {id:"org-nation-of-islam",label:"Nation of Islam",group:"bhi",lat:41.88,lng:-87.63,founded:1930,title:"Nation of Islam — Chicago, Founded 1930"},
  {id:"org-nbpp",label:"NBPP",group:"bhi",lat:32.78,lng:-96.80,founded:1989,title:"New Black Panther Party — USA, Founded 1989"},
  {id:"org-five-percent-nation",label:"Five Percenters",group:"bhi",lat:40.69,lng:-73.94,founded:1964,title:"Five-Percent Nation — Brooklyn, Founded 1964"},
  {id:"org-christian-identity",label:"Christian Identity",group:"bhi",lat:47.68,lng:-116.78,founded:1946,title:"Christian Identity — USA/Global, Founded ~1946"},
  {id:"org-westboro-baptist",label:"Westboro Baptist",group:"bhi",lat:39.04,lng:-95.69,founded:1955,title:"Westboro Baptist Church — Kansas, Founded 1955"},
  {id:"org-hotep-movement",label:"Hotep Movement",group:"bhi",lat:33.75,lng:-84.39,founded:2015,title:"Hotep Movement — USA/Internet, Active ~2015+"},
  {id:"org-neturei-karta",label:"Neturei Karta",group:"bhi",lat:31.77,lng:35.23,founded:1938,title:"Neturei Karta — Jerusalem/NY/London, Founded 1938"},
  {id:"org-british-israelism",label:"British Israelism",group:"bhi",lat:51.51,lng:-0.13,founded:1840,title:"British Israelism — UK/USA, 19th century"},
  {id:"org-icgjc",label:"ICGJC",group:"bhi",lat:40.71,lng:-74.01,founded:2002,title:"Israelite Church of God in Jesus Christ — USA, Founded ~2002"},
  {id:"org-sspx",label:"SSPX",group:"bhi",lat:46.20,lng:6.14,founded:1970,title:"Society of St. Pius X — Switzerland/Global, Founded 1970"},
  {id:"org-sedevacantist",label:"Sedevacantists",group:"bhi",lat:41.90,lng:12.50,founded:1965,title:"Sedevacantist Movement — Catholic dissenters, Active ~1965+"},
  {id:"org-rad-trad",label:"Radical Traditionalism",group:"bhi",lat:38.91,lng:-77.04,founded:1965,title:"Radical Traditionalist Catholics — Post-Vatican II, ~1965"},

  // ═══════════════════════════════════════════════════════════════
  // Category 4: Anti-Zionist / BDS (12 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-bds",label:"BDS",group:"antizionist",lat:31.90,lng:35.20,founded:2005,title:"BDS Movement — Global/Ramallah, Founded 2005"},
  {id:"org-sjp",label:"SJP",group:"antizionist",lat:40.71,lng:-74.01,founded:2001,title:"Students for Justice in Palestine — US Campuses, Founded ~2001"},
  {id:"org-jvp",label:"JVP",group:"antizionist",lat:37.77,lng:-122.42,founded:1996,title:"Jewish Voice for Peace — USA, Founded 1996"},
  {id:"org-samidoun",label:"Samidoun",group:"antizionist",lat:49.26,lng:-123.11,founded:2012,title:"Samidoun — Canada/Europe, Founded 2012"},
  {id:"org-within-our-lifetime",label:"Within Our Lifetime",group:"antizionist",lat:40.71,lng:-74.01,founded:2015,title:"Within Our Lifetime — New York, Founded 2015"},
  {id:"org-amp",label:"AMP",group:"antizionist",lat:41.88,lng:-87.63,founded:2006,title:"American Muslims for Palestine — Chicago, Founded 2006"},
  {id:"org-fsjp",label:"FSJP",group:"antizionist",lat:40.71,lng:-74.01,founded:2018,title:"Faculty for Justice in Palestine — US Campuses, Founded ~2018"},
  {id:"org-pym",label:"PYM",group:"antizionist",lat:40.71,lng:-74.01,founded:2006,title:"Palestinian Youth Movement — USA/Canada/Europe, Founded ~2006"},
  {id:"org-academic-boycott",label:"Academic Boycott",group:"antizionist",lat:38.91,lng:-77.04,founded:2013,title:"Academic Boycott (ASA, MESA, AAS), Active ~2013+"},
  {id:"org-electronic-intifada",label:"Electronic Intifada",group:"antizionist",lat:41.88,lng:-87.63,founded:2001,title:"Electronic Intifada — Internet/Chicago, Founded 2001"},
  {id:"org-mondoweiss",label:"Mondoweiss",group:"antizionist",lat:40.71,lng:-74.01,founded:2006,title:"Mondoweiss — Internet/NYC, Founded 2006"},
  {id:"org-the-grayzone",label:"The Grayzone",group:"antizionist",lat:40.71,lng:-74.01,founded:2015,title:"The Grayzone — Internet/NYC, Founded 2015"},

  // ═══════════════════════════════════════════════════════════════
  // Category 5: Governments (12 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-iran",label:"Iran",group:"govts",lat:35.69,lng:51.39,founded:1979,title:"Iran — Islamic Republic, Revolution 1979"},
  {id:"org-pa-govt",label:"Palestinian Authority",group:"govts",lat:31.90,lng:35.20,founded:1994,title:"Palestinian Authority — Ramallah, Founded 1994"},
  {id:"org-yemen-houthis",label:"Yemen / Houthis",group:"govts",lat:15.37,lng:44.19,founded:2014,title:"Yemen (Houthi-controlled) — Northern Yemen, Since 2014"},
  {id:"org-turkey",label:"Turkey",group:"govts",lat:39.93,lng:32.87,founded:1923,title:"Turkey (Erdogan/AKP) — Ankara"},
  {id:"org-malaysia",label:"Malaysia",group:"govts",lat:3.14,lng:101.69,founded:1957,title:"Malaysia — Kuala Lumpur"},
  {id:"org-pakistan",label:"Pakistan",group:"govts",lat:33.69,lng:73.04,founded:1947,title:"Pakistan — Islamabad"},
  {id:"org-qatar",label:"Qatar",group:"govts",lat:25.29,lng:51.53,founded:1971,title:"Qatar — Doha"},
  {id:"org-north-korea",label:"North Korea",group:"govts",lat:39.04,lng:125.76,founded:1948,title:"North Korea — Pyongyang"},
  {id:"org-venezuela",label:"Venezuela",group:"govts",lat:10.49,lng:-66.88,founded:1999,title:"Venezuela (Chavez/Maduro) — Caracas"},
  {id:"org-russia",label:"Russia",group:"govts",lat:55.76,lng:37.62,founded:1991,title:"Russia — Moscow"},
  {id:"org-south-africa",label:"South Africa",group:"govts",lat:-25.75,lng:28.19,founded:1994,title:"South Africa (ANC) — Pretoria"},
  {id:"org-china",label:"China",group:"govts",lat:39.90,lng:116.40,founded:1949,title:"China — Beijing"},

  // ═══════════════════════════════════════════════════════════════
  // Category 6: Historical (47 nodes)
  // ═══════════════════════════════════════════════════════════════
  // Ancient & Early Medieval
  {id:"org-haman-persia",label:"Haman's Plot (Persia)",group:"historical",lat:32.19,lng:48.26,founded:-473,title:"Haman's Genocidal Plot — Persia, ~473 BCE"},
  {id:"org-elephantine",label:"Elephantine Temple Destruction",group:"historical",lat:24.09,lng:32.89,founded:-410,title:"Destruction of Jewish Temple at Elephantine — Egypt, 410 BCE"},
  {id:"org-antiochus",label:"Antiochus IV Epiphanes",group:"historical",lat:31.78,lng:35.24,founded:-167,title:"Seleucid Persecution — Temple Desecration, 167 BCE"},
  {id:"org-alexandria-pogrom",label:"Alexandrian Pogrom",group:"historical",lat:31.21,lng:29.92,founded:38,title:"First Pogrom in History — Alexandria, 38 CE"},
  {id:"org-temple-destruction",label:"Destruction of Second Temple",group:"historical",lat:31.78,lng:35.24,founded:70,title:"Roman Destruction of the Second Temple — Jerusalem, 70 CE"},
  {id:"org-hadrian",label:"Hadrian / Bar Kokhba",group:"historical",lat:31.77,lng:35.23,founded:135,title:"Hadrian's Decrees — Expulsion from Jerusalem, Renamed to Palaestina, 135 CE"},
  {id:"org-chrysostom",label:"John Chrysostom Sermons",group:"historical",lat:36.21,lng:36.16,founded:386,title:"Adversus Judaeos — Antioch, 386-387 CE"},
  {id:"org-codex-theodosianus",label:"Codex Theodosianus",group:"historical",lat:41.01,lng:28.98,founded:438,title:"Codex Theodosianus — Anti-Jewish Roman Law, 438 CE"},
  {id:"org-justinian",label:"Justinian's Novella 146",group:"historical",lat:41.01,lng:28.98,founded:553,title:"Ban on Mishnah Study — Constantinople, 553 CE"},
  {id:"org-clermont",label:"Clermont-Ferrand Conversion",group:"historical",lat:45.78,lng:3.09,founded:576,title:"Forced Conversion — Clermont-Ferrand, 576 CE"},
  {id:"org-visigoth-toledo",label:"Third Council of Toledo",group:"historical",lat:39.86,lng:-4.02,founded:589,title:"Anti-Jewish Decrees — Visigothic Spain, 589 CE"},
  {id:"org-sisebut",label:"King Sisebut's Decree",group:"historical",lat:39.86,lng:-4.02,founded:613,title:"First Mass Forced Conversion in Europe — ~90,000 Jews, 613 CE"},
  {id:"org-banu-qurayza",label:"Massacre of Banu Qurayza",group:"historical",lat:24.47,lng:39.61,founded:627,title:"Mass Execution of Jewish Tribe — Medina, 627 CE"},
  {id:"org-heraclius",label:"Heraclius Forced Baptism",group:"historical",lat:41.01,lng:28.98,founded:632,title:"Empire-Wide Forced Baptism Decree — Byzantine Empire, 632 CE"},
  {id:"org-granada-massacre",label:"Granada Massacre",group:"historical",lat:37.19,lng:-3.61,founded:1066,title:"First Pogrom on European Soil — ~4,000 Jews Killed, 1066 CE"},
  {id:"org-blood-libel-norwich",label:"Blood Libel of Norwich",group:"historical",lat:52.63,lng:1.30,founded:1144,title:"First Blood Libel in History — Norwich, England, 1144 CE"},
  {id:"org-france-expulsion",label:"Expulsion from France",group:"historical",lat:48.86,lng:2.35,founded:1182,title:"Philip II Expels Jews from France — 1182 CE"},
  // Modern era
  {id:"org-nazi-germany",label:"Nazi Germany",group:"historical",lat:52.52,lng:13.41,founded:1933,title:"Nazi Germany (Third Reich) — 1933-1945"},
  {id:"org-soviet-union",label:"Soviet Union",group:"historical",lat:55.76,lng:37.62,founded:1917,title:"Soviet Union — 1917-1991"},
  {id:"org-russian-empire",label:"Russian Empire",group:"historical",lat:59.93,lng:30.32,founded:1721,title:"Russian Empire — ~1791-1917 (Pale of Settlement)"},
  {id:"org-vichy-france",label:"Vichy France",group:"historical",lat:46.13,lng:3.43,founded:1940,title:"Vichy France — 1940-1944"},
  {id:"org-fascist-italy",label:"Fascist Italy",group:"historical",lat:41.90,lng:12.50,founded:1922,title:"Fascist Italy — 1922-1943"},
  {id:"org-spanish-inquisition",label:"Spanish Inquisition",group:"historical",lat:40.42,lng:-3.70,founded:1478,title:"The Spanish Inquisition — 1478-1834"},
  {id:"org-ottoman-empire",label:"Ottoman Empire",group:"historical",lat:41.01,lng:28.98,founded:1299,title:"The Ottoman Empire — 1299-1922"},
  {id:"org-arab-states-expulsion",label:"Arab Expulsions",group:"historical",lat:30.04,lng:31.24,founded:1948,title:"Arab States — Expulsion of Jews (1948-1970s)"},
  {id:"org-communist-poland-1968",label:"Poland 1968",group:"historical",lat:52.23,lng:21.01,founded:1968,title:"Communist Poland — 1968 Antisemitic Campaign"},
  {id:"org-iron-guard",label:"Iron Guard",group:"historical",lat:44.43,lng:26.10,founded:1927,title:"Iron Guard (Legion of the Archangel Michael) — Romania, 1927-1941"},
  {id:"org-arrow-cross",label:"Arrow Cross",group:"historical",lat:47.50,lng:19.04,founded:1935,title:"Arrow Cross Party — Hungary, 1935-1945"},
  {id:"org-ustase",label:"Ustaše",group:"historical",lat:45.81,lng:15.98,founded:1929,title:"Ustaše — Croatia, 1929-1945"},
  {id:"org-crusaders",label:"Crusaders",group:"historical",lat:31.77,lng:35.23,founded:1096,title:"Crusaders — Massacres of Jews, 1096-1291"},
  {id:"org-almohads",label:"Almohads",group:"historical",lat:31.63,lng:-8.01,founded:1121,title:"Almohad Dynasty — North Africa/Spain, 1121-1269"},
  {id:"org-black-death",label:"Black Death Pogroms",group:"historical",lat:47.37,lng:8.54,founded:1348,title:"Black Death Pogroms — Europe, 1348-1351"},
  {id:"org-khmelnytsky",label:"Khmelnytsky",group:"historical",lat:50.45,lng:30.52,founded:1648,title:"Khmelnytsky Uprising — Ukraine, 1648-1649"},
  {id:"org-english-expulsion",label:"English Expulsion",group:"historical",lat:51.51,lng:-0.13,founded:1290,title:"Expulsion of Jews from England — 1290"},
  {id:"org-romania-pogrom",label:"Romania Pogroms",group:"historical",lat:47.16,lng:27.58,founded:1941,title:"Iași Pogrom & Romania Pogroms — 1941"},
  {id:"org-antisemiten-liga",label:"Antisemiten-Liga",group:"historical",lat:52.52,lng:13.40,founded:1879,title:"League of Antisemites — Berlin, 1879 (first antisemitic org in history)"},
  {id:"org-dreyfus-affair",label:"Dreyfus Affair",group:"historical",lat:48.86,lng:2.35,founded:1894,title:"Dreyfus Affair — France, 1894-1906"},
  {id:"org-action-francaise",label:"Action Française",group:"historical",lat:48.86,lng:2.35,founded:1899,title:"Action Française — France, 1899-1944"},
  {id:"org-kishinev-pogrom",label:"Kishinev Pogrom",group:"historical",lat:47.01,lng:28.86,founded:1903,title:"Kishinev Pogrom — Moldova, 1903"},
  {id:"org-black-hundreds",label:"Black Hundreds",group:"historical",lat:59.93,lng:30.34,founded:1905,title:"Black Hundreds / Union of Russian People — Russia, 1905-1917"},
  {id:"org-buf",label:"British Fascists (BUF)",group:"historical",lat:51.51,lng:-0.13,founded:1932,title:"British Union of Fascists — London, 1932-1940"},
  {id:"org-silver-shirts",label:"Silver Shirts",group:"historical",lat:35.60,lng:-82.55,founded:1933,title:"Silver Legion of America — USA, 1933-1941"},
  {id:"org-german-american-bund",label:"German American Bund",group:"historical",lat:40.71,lng:-74.01,founded:1936,title:"German American Bund — New York, 1936-1941"},
  {id:"org-einsatzgruppen",label:"Einsatzgruppen",group:"historical",lat:52.52,lng:13.41,founded:1939,title:"Einsatzgruppen (SS Mobile Killing Squads) — 1939-1945"},
  {id:"org-farhud",label:"Farhud (Baghdad)",group:"historical",lat:33.31,lng:44.36,founded:1941,title:"Farhud — Baghdad Pogrom, June 1941"},
  {id:"org-kielce-pogrom",label:"Kielce Pogrom",group:"historical",lat:50.87,lng:20.63,founded:1946,title:"Kielce Pogrom — Poland, July 1946"},
  {id:"org-doctors-plot",label:"Doctors' Plot",group:"historical",lat:55.76,lng:37.62,founded:1953,title:"Doctors' Plot — USSR, Stalin's Final Antisemitic Campaign, 1953"},

  // ═══════════════════════════════════════════════════════════════
  // Category 7: Media & Propaganda (18 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-al-jazeera",label:"Al Jazeera",group:"media",lat:25.29,lng:51.53,founded:1996,title:"Al Jazeera — Qatar, Founded 1996"},
  {id:"org-press-tv",label:"Press TV",group:"media",lat:35.69,lng:51.39,founded:2007,title:"Press TV — Iran, Founded 2007"},
  {id:"org-rt",label:"RT",group:"media",lat:55.76,lng:37.62,founded:2005,title:"RT (Russia Today) — Moscow, Founded 2005"},
  {id:"org-trt-world",label:"TRT World",group:"media",lat:41.01,lng:28.98,founded:2015,title:"TRT World — Turkey/Istanbul, Founded 2015"},
  {id:"org-pa-media",label:"PA Media",group:"media",lat:31.90,lng:35.20,founded:1994,title:"Palestinian Authority Media — Ramallah"},
  {id:"org-memri",label:"MEMRI",group:"media",lat:38.91,lng:-77.04,founded:1998,title:"MEMRI — Washington DC, Founded 1998 (Monitoring Source)"},
  {id:"org-4chan-8kun",label:"4chan / 8kun",group:"media",lat:40.71,lng:-74.01,founded:2003,title:"4chan / 8kun — Internet Forums, Founded 2003"},
  {id:"org-qanon",label:"QAnon",group:"media",lat:38.91,lng:-77.04,founded:2017,title:"QAnon — Conspiracy Movement, Founded 2017"},
  {id:"org-gab",label:"Gab",group:"media",lat:40.27,lng:-76.88,founded:2016,title:"Gab — Social Network, Founded 2016"},
  {id:"org-telegram-ext",label:"Telegram Extremists",group:"media",lat:25.20,lng:55.27,founded:2015,title:"Telegram Extremist Channels — Dubai, Active ~2015+"},
  {id:"org-bitchute",label:"BitChute",group:"media",lat:51.51,lng:-0.13,founded:2017,title:"BitChute — UK, Founded 2017"},
  {id:"org-odysee",label:"Odysee",group:"media",lat:37.77,lng:-122.42,founded:2020,title:"Odysee (LBRY) — San Francisco, Founded 2020"},
  {id:"org-rumble",label:"Rumble",group:"media",lat:43.65,lng:-79.38,founded:2013,title:"Rumble — Toronto, Founded 2013"},
  {id:"org-iron-march",label:"Iron March",group:"media",lat:55.76,lng:37.62,founded:2011,title:"Iron March Forum — Russia, 2011-2017"},
  {id:"org-occidental",label:"Occidental Observer",group:"media",lat:34.05,lng:-118.24,founded:2007,title:"Occidental Observer — California, Founded 2007"},
  {id:"org-culture-wars",label:"Culture Wars",group:"media",lat:41.66,lng:-86.25,founded:1981,title:"Culture Wars (E. Michael Jones) — South Bend, Founded 1981"},
  {id:"org-irib",label:"IRIB",group:"media",lat:35.69,lng:51.39,founded:1979,title:"IRIB (Islamic Republic of Iran Broadcasting) — Tehran, Founded 1979"},
  {id:"org-tiktok-hate",label:"TikTok Hate",group:"media",lat:39.90,lng:116.40,founded:2020,title:"TikTok Antisemitic Content — Global, Surge ~2020+"},

  // ═══════════════════════════════════════════════════════════════
  // Category 8: International Institutions (6 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-unhrc",label:"UNHRC",group:"institutions",lat:46.20,lng:6.14,founded:2006,title:"UN Human Rights Council — Geneva, Founded 2006"},
  {id:"org-unrwa",label:"UNRWA",group:"institutions",lat:31.50,lng:34.47,founded:1949,title:"UNRWA — Gaza/Amman, Founded 1949"},
  {id:"org-icc",label:"ICC",group:"institutions",lat:52.08,lng:4.30,founded:2002,title:"International Criminal Court — The Hague, Founded 2002"},
  {id:"org-durban-conference",label:"Durban Conference",group:"institutions",lat:-29.86,lng:31.02,founded:2001,title:"Durban Conference — 2001"},
  {id:"org-unesco",label:"UNESCO",group:"institutions",lat:48.86,lng:2.35,founded:1945,title:"UNESCO — Paris, Founded 1945"},
  {id:"org-unga",label:"UNGA",group:"institutions",lat:40.75,lng:-73.97,founded:1945,title:"UN General Assembly — New York, Founded 1945"},

  // ═══════════════════════════════════════════════════════════════
  // Category 9: Political Parties (17 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-afd",label:"AfD",group:"political",lat:52.52,lng:13.41,founded:2013,title:"AfD — Germany, Founded 2013"},
  {id:"org-fpoe",label:"FPÖ",group:"political",lat:48.21,lng:16.37,founded:1956,title:"FPÖ — Austria, Founded 1956"},
  {id:"org-fidesz",label:"Fidesz",group:"political",lat:47.50,lng:19.04,founded:1988,title:"Fidesz — Hungary, Founded 1988"},
  {id:"org-labour-uk-corbyn",label:"Labour (Corbyn)",group:"political",lat:51.51,lng:-0.13,founded:2015,title:"Labour UK — Corbyn Era 2015-2020"},
  {id:"org-national-rally-france",label:"National Rally",group:"political",lat:48.86,lng:2.35,founded:1972,title:"National Rally (ex-Front National) — France, Founded 1972"},
  {id:"org-bnp-national-front",label:"BNP",group:"political",lat:51.51,lng:-0.13,founded:1982,title:"BNP / National Front — UK, Founded 1982"},
  {id:"org-sinn-fein",label:"Sinn Féin",group:"political",lat:53.35,lng:-6.26,founded:1905,title:"Sinn Féin — Ireland, Founded 1905"},
  {id:"org-pis-poland",label:"PiS",group:"political",lat:52.23,lng:21.01,founded:2001,title:"PiS (Law and Justice) — Poland, Founded 2001"},
  {id:"org-podemos",label:"Podemos",group:"political",lat:40.42,lng:-3.70,founded:2014,title:"Podemos — Spain, Founded 2014"},
  {id:"org-syriza",label:"Syriza",group:"political",lat:37.98,lng:23.73,founded:2004,title:"Syriza — Greece, Founded 2004"},
  {id:"org-vlaams",label:"Vlaams Belang",group:"political",lat:50.85,lng:4.35,founded:2004,title:"Vlaams Belang — Belgium, Founded 2004"},
  {id:"org-sweden-dems",label:"Sweden Democrats",group:"political",lat:59.33,lng:18.07,founded:1988,title:"Sweden Democrats — Stockholm, Founded 1988"},
  {id:"org-vox",label:"Vox",group:"political",lat:40.42,lng:-3.70,founded:2013,title:"Vox — Spain, Founded 2013"},
  {id:"org-der-dritte",label:"Der III. Weg",group:"political",lat:52.52,lng:13.41,founded:2013,title:"Der III. Weg (The Third Way) — Germany, Founded 2013"},
  {id:"org-die-rechte",label:"Die Rechte",group:"political",lat:51.51,lng:7.47,founded:2012,title:"Die Rechte — Germany, Founded 2012"},
  {id:"org-kotleba",label:"Kotleba / ĽSNS",group:"political",lat:48.15,lng:17.11,founded:2010,title:"Kotleba / ĽSNS — Slovakia, Founded 2010"},
  {id:"org-ataka",label:"Ataka",group:"political",lat:42.70,lng:23.32,founded:2005,title:"Ataka — Bulgaria, Founded 2005"},

  // ═══════════════════════════════════════════════════════════════
  // Category 10: Individuals & Internet (24 nodes)
  // ═══════════════════════════════════════════════════════════════
  {id:"org-kanye-west",label:"Kanye West",group:"individuals",lat:34.05,lng:-118.24,founded:2022,title:"Kanye West (Ye) — Los Angeles, 2022 antisemitic statements"},
  {id:"org-david-duke",label:"David Duke",group:"individuals",lat:30.00,lng:-90.17,founded:1974,title:"David Duke — Louisiana, Former KKK Grand Wizard"},
  {id:"org-louis-farrakhan",label:"Louis Farrakhan",group:"individuals",lat:41.88,lng:-87.63,founded:1981,title:"Louis Farrakhan — Chicago, NOI Leader since 1981"},
  {id:"org-antisemitic-shootings",label:"Shootings 2018-22",group:"individuals",lat:40.44,lng:-79.99,founded:2018,title:"Antisemitic Shooting Attacks 2018-2022 (Pittsburgh, Poway, etc.)"},
  {id:"org-nick-fuentes",label:"Nick Fuentes",group:"individuals",lat:41.88,lng:-87.63,founded:2017,title:"Nick Fuentes — Chicago, Groyper Leader"},
  {id:"org-andrew-tate",label:"Andrew Tate",group:"individuals",lat:44.43,lng:26.10,founded:2022,title:"Andrew Tate — Romania/Internet, Influence ~2022+"},
  {id:"org-incel-movement",label:"Incel Movement",group:"individuals",lat:40.71,lng:-74.01,founded:2014,title:"Incel Movement — Online, Radicalized ~2014+"},
  {id:"org-sovereign-citizens",label:"Sovereign Citizens",group:"individuals",lat:38.91,lng:-77.04,founded:1971,title:"Sovereign Citizens — USA, Founded 1971"},
  {id:"org-david-irving",label:"David Irving",group:"individuals",lat:51.51,lng:-0.13,founded:1963,title:"David Irving — UK, Holocaust denier/author"},
  {id:"org-ernst-zundel",label:"Ernst Zündel",group:"individuals",lat:43.65,lng:-79.38,founded:1976,title:"Ernst Zündel — Canada/Germany, Holocaust denier"},
  {id:"org-faurisson",label:"Robert Faurisson",group:"individuals",lat:48.86,lng:2.35,founded:1978,title:"Robert Faurisson — France, Holocaust denier"},
  {id:"org-mahathir",label:"Mahathir Mohamad",group:"individuals",lat:3.14,lng:101.69,founded:1981,title:"Mahathir Mohamad — Malaysia, PM 1981-2003/2018-2020"},
  {id:"org-ahmadinejad",label:"Ahmadinejad",group:"individuals",lat:35.69,lng:51.39,founded:2005,title:"Mahmoud Ahmadinejad — Iran, President 2005-2013"},
  {id:"org-chavez",label:"Hugo Chávez",group:"individuals",lat:10.49,lng:-66.88,founded:1999,title:"Hugo Chávez — Venezuela, President 1999-2013"},
  {id:"org-ilhan-omar",label:"Ilhan Omar",group:"individuals",lat:44.98,lng:-93.27,founded:2019,title:"Ilhan Omar — US Congress, Since 2019"},
  {id:"org-rashida-tlaib",label:"Rashida Tlaib",group:"individuals",lat:42.33,lng:-83.05,founded:2019,title:"Rashida Tlaib — US Congress, Since 2019"},
  {id:"org-corbyn-ind",label:"Jeremy Corbyn",group:"individuals",lat:51.51,lng:-0.13,founded:2015,title:"Jeremy Corbyn — UK, Labour Leader 2015-2020"},
  {id:"org-roger-waters",label:"Roger Waters",group:"individuals",lat:51.51,lng:-0.13,founded:2011,title:"Roger Waters — UK, BDS activist since ~2011"},
  {id:"org-dieudonne",label:"Dieudonné",group:"individuals",lat:48.86,lng:2.35,founded:2003,title:"Dieudonné M'bala M'bala — France, Active ~2003+"},
  {id:"org-alain-soral",label:"Alain Soral",group:"individuals",lat:48.86,lng:2.35,founded:2007,title:"Alain Soral — France, Égalité & Réconciliation, Founded 2007"},
  {id:"org-candace-owens",label:"Candace Owens",group:"individuals",lat:38.91,lng:-77.04,founded:2022,title:"Candace Owens — USA, Antisemitic rhetoric ~2022+"},
  {id:"org-tucker-carlson",label:"Tucker Carlson",group:"individuals",lat:38.91,lng:-77.04,founded:2023,title:"Tucker Carlson — USA, Platform for antisemites ~2023+"},
  {id:"org-jackson-hinkle",label:"Jackson Hinkle",group:"individuals",lat:34.05,lng:-118.24,founded:2023,title:"Jackson Hinkle — USA, Internet personality ~2023+"},
  {id:"org-richard-spencer",label:"Richard Spencer",group:"individuals",lat:38.91,lng:-77.04,founded:2008,title:"Richard Spencer — USA, Alt-right leader, Active 2008+"},
  {id:"org-matthew-heimbach",label:"Matthew Heimbach",group:"individuals",lat:38.25,lng:-85.76,founded:2015,title:"Matthew Heimbach — USA, TWP founder"},
  {id:"org-tom-metzger",label:"Tom Metzger",group:"individuals",lat:33.84,lng:-117.86,founded:1983,title:"Tom Metzger — California, WAR founder"},
  {id:"org-andrew-anglin",label:"Andrew Anglin",group:"individuals",lat:40.10,lng:-82.95,founded:2013,title:"Andrew Anglin — Ohio, Daily Stormer founder"},
  {id:"org-kevin-macdonald",label:"Kevin MacDonald",group:"individuals",lat:34.05,lng:-118.24,founded:1998,title:"Kevin MacDonald — California, Culture of Critique author"},
  {id:"org-em-jones",label:"E. Michael Jones",group:"individuals",lat:41.66,lng:-86.25,founded:1981,title:"E. Michael Jones — Indiana, Culture Wars editor"},

  // ═══════════════════════════════════════════════════════════════
  // Category 11: NGOs (9 nodes) — NEW
  // ═══════════════════════════════════════════════════════════════
  {id:"org-al-haq",label:"Al-Haq",group:"ngos",lat:31.90,lng:35.20,founded:1979,title:"Al-Haq — Ramallah, Founded 1979 (PFLP-linked NGO)"},
  {id:"org-addameer",label:"Addameer",group:"ngos",lat:31.90,lng:35.20,founded:1992,title:"Addameer — Ramallah, Founded 1992 (PFLP-linked NGO)"},
  {id:"org-dci-p",label:"DCI-Palestine",group:"ngos",lat:31.90,lng:35.20,founded:1991,title:"Defence for Children International — Palestine, Founded 1991"},
  {id:"org-pchr",label:"PCHR",group:"ngos",lat:31.50,lng:34.47,founded:1995,title:"Palestinian Centre for Human Rights — Gaza, Founded 1995"},
  {id:"org-upwc",label:"UPWC",group:"ngos",lat:31.90,lng:35.20,founded:1980,title:"Union of Palestinian Women's Committees — Ramallah, Founded ~1980"},
  {id:"org-amnesty",label:"Amnesty International",group:"ngos",lat:51.51,lng:-0.13,founded:1961,title:"Amnesty International — London, Founded 1961"},
  {id:"org-hrw",label:"Human Rights Watch",group:"ngos",lat:40.71,lng:-74.01,founded:1978,title:"Human Rights Watch — New York, Founded 1978"},
  {id:"org-btselem",label:"B'Tselem",group:"ngos",lat:31.77,lng:35.23,founded:1989,title:"B'Tselem — Jerusalem, Founded 1989"},
  {id:"org-breaking",label:"Breaking the Silence",group:"ngos",lat:31.77,lng:35.23,founded:2004,title:"Breaking the Silence — Israel, Founded 2004"},

  // ═══════════════════════════════════════════════════════════════
  // Category 12: Holocaust Denial (4 nodes) — NEW
  // ═══════════════════════════════════════════════════════════════
  {id:"org-ihr",label:"IHR",group:"denial",lat:34.05,lng:-118.24,founded:1978,title:"Institute for Historical Review — California, Founded 1978"},
  {id:"org-codoh",label:"CODOH",group:"denial",lat:34.05,lng:-118.24,founded:1987,title:"Committee for Open Debate on the Holocaust — California, Founded 1987"},
  {id:"org-barnes",label:"Barnes Review",group:"denial",lat:38.91,lng:-77.04,founded:1994,title:"Barnes Review — Washington DC, Founded 1994"},
  {id:"org-adelaide",label:"Adelaide Institute",group:"denial",lat:-34.93,lng:138.60,founded:1995,title:"Adelaide Institute — Australia, Founded 1995"},

  // ═══════════════════════════════════════════════════════════════
  // Category 13: Conspiracy Movements (3 nodes) — NEW
  // ═══════════════════════════════════════════════════════════════
  {id:"org-larouche",label:"LaRouche Movement",group:"conspiracy",lat:38.91,lng:-77.04,founded:1968,title:"LaRouche Movement — Washington DC, Founded ~1968"},
  {id:"org-protocols",label:"Protocols of Zion",group:"conspiracy",lat:59.93,lng:30.32,founded:1903,title:"The Protocols of the Elders of Zion — Russia, Published 1903 (forgery)"},
  {id:"org-hezbollah-latam",label:"Hezbollah LatAm",group:"islamist",lat:-34.60,lng:-58.38,founded:1994,title:"Hezbollah Latin America Network — Argentina/Tri-Border, Active since 1994 AMIA bombing"}
];

var ORG_EDGES = [
  // ═══════════════════════════════════════════════════════════════
  // Iran's proxy network (funding)
  // ═══════════════════════════════════════════════════════════════
  {from:"org-iran",to:"org-hamas",type:"funding",label:"$100-350M/yr",title:"Iran funds Hamas $100-350M/year"},
  {from:"org-iran",to:"org-hezbollah",type:"funding",label:"$700M-1B/yr",title:"Iran funds Hezbollah $700M-1B/year"},
  {from:"org-iran",to:"org-pij",type:"funding",label:"$30-70M/yr",title:"Iran funds PIJ $30-70M/year"},
  {from:"org-iran",to:"org-houthis",type:"funding",label:"$100M+/yr",title:"Iran funds Houthis"},
  {from:"org-iran",to:"org-kataib-hezbollah",type:"funding",label:"",title:"Iran funds Kata'ib Hezbollah"},
  {from:"org-iran",to:"org-harakat-al-nujaba",type:"funding",label:"",title:"Iran funds Harakat al-Nujaba"},
  {from:"org-iran",to:"org-asaib-ahl-al-haq",type:"funding",label:"",title:"Iran funds Asa'ib Ahl al-Haq"},
  {from:"org-iran",to:"org-mahdi-army",type:"funding",label:"",title:"Iran supports Mahdi Army"},
  {from:"org-iran",to:"org-fatemiyoun",type:"funding",label:"",title:"Iran recruited Fatemiyoun"},
  {from:"org-irgc",to:"org-iran",type:"membership",label:"",title:"IRGC is Iran's military arm"},
  {from:"org-iran",to:"org-hezbollah-latam",type:"funding",label:"",title:"Iran/Hezbollah network in Latin America"},
  {from:"org-iran",to:"org-yemen-houthis",type:"funding",label:"",title:"Iran funds Houthi government"},

  // ═══════════════════════════════════════════════════════════════
  // Qatar network
  // ═══════════════════════════════════════════════════════════════
  {from:"org-qatar",to:"org-hamas",type:"funding",label:"$1.8B",title:"Qatar funded Hamas $1.8B (2012-2023)"},
  {from:"org-qatar",to:"org-al-jazeera",type:"funding",label:"",title:"Qatar funds Al Jazeera"},
  {from:"org-qatar",to:"org-muslim-brotherhood",type:"funding",label:"",title:"Qatar supports Muslim Brotherhood"},

  // ═══════════════════════════════════════════════════════════════
  // Muslim Brotherhood family
  // ═══════════════════════════════════════════════════════════════
  {from:"org-muslim-brotherhood",to:"org-hamas",type:"ideology",label:"Created",title:"Muslim Brotherhood created Hamas (1987)"},
  {from:"org-muslim-brotherhood",to:"org-jamaat",type:"ideology",label:"Influence",title:"Muslim Brotherhood influenced Jamaat-e-Islami ideology"},

  // ═══════════════════════════════════════════════════════════════
  // Turkey connections
  // ═══════════════════════════════════════════════════════════════
  {from:"org-turkey",to:"org-hamas",type:"cooperation",label:"",title:"Turkey supports Hamas diplomatically"},
  {from:"org-turkey",to:"org-muslim-brotherhood",type:"ideology",label:"",title:"Turkey allies with Muslim Brotherhood"},
  {from:"org-turkey",to:"org-trt-world",type:"membership",label:"",title:"Turkey operates TRT World"},
  {from:"org-turkey",to:"org-qatar",type:"cooperation",label:"",title:"Turkey-Qatar alliance"},
  {from:"org-turkey",to:"org-grey-wolves",type:"cooperation",label:"",title:"Grey Wolves linked to Turkish nationalism/MHP"},
  {from:"org-turkey",to:"org-milli-gorus",type:"ideology",label:"",title:"Milli Görüş is Erdogan's ideological origin"},

  // ═══════════════════════════════════════════════════════════════
  // Palestinian factions
  // ═══════════════════════════════════════════════════════════════
  {from:"org-pa-fatah",to:"org-al-aqsa-brigades",type:"membership",label:"",title:"Al-Aqsa Brigades is Fatah's military wing"},
  {from:"org-pa-fatah",to:"org-pa-govt",type:"membership",label:"",title:"Fatah controls the Palestinian Authority"},
  {from:"org-pa-govt",to:"org-pa-media",type:"membership",label:"",title:"PA operates its media arm"},
  {from:"org-pflp",to:"org-dflp",type:"ideology",label:"Splinter",title:"DFLP split from PFLP"},
  {from:"org-pflp",to:"org-samidoun",type:"membership",label:"Front",title:"Samidoun is a PFLP front organization"},
  {from:"org-pflp",to:"org-al-haq",type:"membership",label:"Linked",title:"Al-Haq board members linked to PFLP"},
  {from:"org-pflp",to:"org-addameer",type:"membership",label:"Linked",title:"Addameer staff members linked to PFLP"},
  {from:"org-pflp",to:"org-upwc",type:"membership",label:"Linked",title:"UPWC designated as PFLP front"},

  // ═══════════════════════════════════════════════════════════════
  // Al-Qaeda network
  // ═══════════════════════════════════════════════════════════════
  {from:"org-al-qaeda",to:"org-isis",type:"ideology",label:"Split",title:"ISIS split from Al-Qaeda"},
  {from:"org-al-qaeda",to:"org-al-shabaab",type:"membership",label:"Affiliate",title:"Al-Shabaab is Al-Qaeda affiliate"},
  {from:"org-al-qaeda",to:"org-ansar-al-islam",type:"membership",label:"Affiliate",title:"Ansar al-Islam linked to Al-Qaeda"},
  {from:"org-al-qaeda",to:"org-boko-haram",type:"ideology",label:"",title:"Boko Haram influenced by Al-Qaeda"},
  {from:"org-al-qaeda",to:"org-aqap",type:"membership",label:"Branch",title:"AQAP is Al-Qaeda's Yemen branch"},
  {from:"org-al-qaeda",to:"org-aqim",type:"membership",label:"Branch",title:"AQIM is Al-Qaeda's North Africa branch"},
  {from:"org-al-qaeda",to:"org-hts",type:"ideology",label:"Former",title:"HTS was formerly Al-Qaeda's Syrian branch (Nusra)"},
  {from:"org-aqim",to:"org-ansar-dine",type:"cooperation",label:"",title:"Ansar Dine allied with AQIM in Mali"},
  {from:"org-isis",to:"org-boko-haram",type:"membership",label:"Pledge",title:"Boko Haram pledged allegiance to ISIS"},
  {from:"org-isis",to:"org-iswap",type:"membership",label:"Branch",title:"ISWAP is ISIS's West Africa Province"},
  {from:"org-isis",to:"org-abu-sayyaf",type:"membership",label:"Pledge",title:"Abu Sayyaf factions pledged to ISIS"},
  {from:"org-isis",to:"org-adf",type:"membership",label:"Affiliate",title:"ADF declared affiliation with ISIS"},

  // ═══════════════════════════════════════════════════════════════
  // Taliban / Pakistan network
  // ═══════════════════════════════════════════════════════════════
  {from:"org-taliban",to:"org-al-qaeda",type:"cooperation",label:"Harbored",title:"Taliban harbored Al-Qaeda in Afghanistan"},
  {from:"org-taliban",to:"org-ttp",type:"ideology",label:"Model",title:"TTP modeled after Afghan Taliban"},
  {from:"org-pakistan",to:"org-lashkar-e-taiba",type:"cooperation",label:"Harbor",title:"Pakistan harbors Lashkar-e-Taiba"},
  {from:"org-pakistan",to:"org-jem",type:"cooperation",label:"Harbor",title:"Pakistan harbors Jaish-e-Mohammed"},
  {from:"org-pakistan",to:"org-taliban",type:"cooperation",label:"Support",title:"Pakistan supported Taliban"},

  // ═══════════════════════════════════════════════════════════════
  // Hezbollah network
  // ═══════════════════════════════════════════════════════════════
  {from:"org-hezbollah",to:"org-kataib-hezbollah",type:"ideology",label:"Model",title:"Kata'ib Hezbollah modeled after Hezbollah"},
  {from:"org-hezbollah",to:"org-houthis",type:"cooperation",label:"Training",title:"Hezbollah trains Houthis"},
  {from:"org-hezbollah",to:"org-hezbollah-latam",type:"membership",label:"Network",title:"Hezbollah operates network in Latin America"},

  // ═══════════════════════════════════════════════════════════════
  // UK Islamist network
  // ═══════════════════════════════════════════════════════════════
  {from:"org-muhajiroun",to:"org-sharia4",type:"ideology",label:"Inspired",title:"Sharia4 groups inspired by Al-Muhajiroun"},
  {from:"org-muhajiroun",to:"org-hizb-ut-tahrir",type:"ideology",label:"Splinter",title:"Al-Muhajiroun split from Hizb ut-Tahrir UK"},

  // ═══════════════════════════════════════════════════════════════
  // Indonesia / SE Asia Islamist
  // ═══════════════════════════════════════════════════════════════
  {from:"org-ji",to:"org-al-qaeda",type:"cooperation",label:"Allied",title:"Jemaah Islamiyah allied with Al-Qaeda"},
  {from:"org-fpi",to:"org-ji",type:"ideology",label:"",title:"FPI shared Islamist ideology with JI in Indonesia"},

  // ═══════════════════════════════════════════════════════════════
  // Anti-Zionist network
  // ═══════════════════════════════════════════════════════════════
  {from:"org-samidoun",to:"org-within-our-lifetime",type:"cooperation",label:"",title:"Samidoun cooperates with Within Our Lifetime"},
  {from:"org-samidoun",to:"org-sjp",type:"cooperation",label:"",title:"Samidoun cooperates with SJP"},
  {from:"org-amp",to:"org-sjp",type:"membership",label:"Umbrella",title:"AMP is umbrella org for SJP"},
  {from:"org-bds",to:"org-sjp",type:"ideology",label:"",title:"SJP advances BDS on campuses"},
  {from:"org-bds",to:"org-academic-boycott",type:"ideology",label:"",title:"Academic boycott is part of BDS"},
  {from:"org-jvp",to:"org-bds",type:"cooperation",label:"",title:"JVP supports BDS"},
  {from:"org-within-our-lifetime",to:"org-pym",type:"cooperation",label:"",title:"WOL cooperates with PYM"},
  {from:"org-fsjp",to:"org-sjp",type:"cooperation",label:"Faculty",title:"FSJP is the faculty counterpart of SJP"},

  // ═══════════════════════════════════════════════════════════════
  // NGO connections
  // ═══════════════════════════════════════════════════════════════
  {from:"org-al-haq",to:"org-bds",type:"cooperation",label:"",title:"Al-Haq supports BDS campaigns"},
  {from:"org-dci-p",to:"org-pflp",type:"membership",label:"Linked",title:"DCI-P staff linked to PFLP"},
  {from:"org-amnesty",to:"org-bds",type:"cooperation",label:"Apartheid",title:"Amnesty called Israel apartheid (2022 report)"},
  {from:"org-hrw",to:"org-bds",type:"cooperation",label:"Apartheid",title:"HRW called Israel apartheid (2021 report)"},

  // ═══════════════════════════════════════════════════════════════
  // Russia connections
  // ═══════════════════════════════════════════════════════════════
  {from:"org-russia",to:"org-iran",type:"cooperation",label:"",title:"Russia-Iran alliance"},
  {from:"org-russia",to:"org-rt",type:"membership",label:"",title:"Russia operates RT"},
  {from:"org-russia",to:"org-rim",type:"cooperation",label:"",title:"RIM based in Russia"},
  {from:"org-russia",to:"org-north-korea",type:"cooperation",label:"",title:"Russia-N.Korea alliance"},
  {from:"org-north-korea",to:"org-iran",type:"cooperation",label:"Weapons",title:"N.Korea supplies weapons to Iran"},

  // ═══════════════════════════════════════════════════════════════
  // Neo-Nazi connections
  // ═══════════════════════════════════════════════════════════════
  {from:"org-national-alliance",to:"org-the-order",type:"ideology",label:"Inspired",title:"The Order inspired by National Alliance"},
  {from:"org-aryan-nations",to:"org-the-order",type:"membership",label:"",title:"The Order members came from Aryan Nations"},
  {from:"org-aryan-nations",to:"org-christian-identity",type:"ideology",label:"",title:"Aryan Nations based on Christian Identity"},
  {from:"org-kkk",to:"org-christian-identity",type:"ideology",label:"",title:"KKK embraces Christian Identity"},
  {from:"org-vanguard-america",to:"org-patriot-front",type:"membership",label:"Split",title:"Patriot Front split from Vanguard America"},
  {from:"org-atomwaffen",to:"org-terrorgram",type:"cooperation",label:"",title:"Atomwaffen linked to Terrorgram"},
  {from:"org-atomwaffen",to:"org-iron-march",type:"membership",label:"Origin",title:"Atomwaffen emerged from Iron March forum"},
  {from:"org-stormfront",to:"org-kkk",type:"ideology",label:"",title:"Stormfront founded by former KKK"},
  {from:"org-david-duke",to:"org-kkk",type:"membership",label:"Grand Wizard",title:"David Duke was KKK Grand Wizard"},
  {from:"org-groypers",to:"org-nick-fuentes",type:"membership",label:"Leader",title:"Fuentes leads the Groypers"},
  {from:"org-nick-fuentes",to:"org-kanye-west",type:"cooperation",label:"",title:"Fuentes organized dinner with Kanye"},
  {from:"org-blood-and-honour",to:"org-hammerskin-nation",type:"cooperation",label:"",title:"B&H and Hammerskins collaborate"},
  {from:"org-rim",to:"org-nrm",type:"cooperation",label:"Training",title:"RIM trains Nordic neo-Nazis"},
  {from:"org-richard-spencer",to:"org-npi",type:"membership",label:"Leader",title:"Richard Spencer leads NPI"},
  {from:"org-richard-spencer",to:"org-identity-evropa",type:"ideology",label:"Inspired",title:"Spencer's alt-right inspired Identity Evropa"},
  {from:"org-matthew-heimbach",to:"org-twp",type:"membership",label:"Founder",title:"Heimbach founded TWP"},
  {from:"org-tom-metzger",to:"org-war",type:"membership",label:"Founder",title:"Metzger founded White Aryan Resistance"},
  {from:"org-andrew-anglin",to:"org-daily-stormer",type:"membership",label:"Founder",title:"Anglin founded Daily Stormer"},
  {from:"org-kevin-macdonald",to:"org-occidental",type:"membership",label:"Editor",title:"MacDonald edits Occidental Observer"},
  {from:"org-em-jones",to:"org-culture-wars",type:"membership",label:"Editor",title:"E. Michael Jones edits Culture Wars"},
  {from:"org-proud-boys",to:"org-oath-keepers",type:"cooperation",label:"Jan 6",title:"Proud Boys and Oath Keepers cooperated on Jan 6"},
  {from:"org-proud-boys",to:"org-three-percent",type:"cooperation",label:"",title:"Proud Boys allied with Three Percenters"},
  {from:"org-azov",to:"org-right-sector",type:"cooperation",label:"",title:"Azov and Right Sector overlap in Ukrainian far-right"},
  {from:"org-national-action",to:"org-atomwaffen",type:"cooperation",label:"Alliance",title:"National Action allied with Atomwaffen"},
  {from:"org-posse",to:"org-sovereign-citizens",type:"ideology",label:"Origin",title:"Sovereign citizen ideology originated from Posse Comitatus"},
  {from:"org-volksfront",to:"org-hammerskin-nation",type:"cooperation",label:"",title:"Volksfront allied with Hammerskins"},

  // ═══════════════════════════════════════════════════════════════
  // BHI connections
  // ═══════════════════════════════════════════════════════════════
  {from:"org-nation-of-islam",to:"org-five-percent-nation",type:"ideology",label:"Splinter",title:"Five Percenters split from NOI"},
  {from:"org-nation-of-islam",to:"org-louis-farrakhan",type:"membership",label:"Leader",title:"Farrakhan leads NOI"},
  {from:"org-hotep-movement",to:"org-kanye-west",type:"ideology",label:"Influenced",title:"Hotep influenced Kanye's statements"},
  {from:"org-isupk",to:"org-iuic",type:"ideology",label:"Related",title:"IUIC and ISUPK share BHI ideology"},
  {from:"org-isupk",to:"org-sicarii",type:"ideology",label:"",title:"Sicarii shooters connected to BHI movement"},
  {from:"org-british-israelism",to:"org-christian-identity",type:"ideology",label:"Origin",title:"Christian Identity emerged from British Israelism"},

  // ═══════════════════════════════════════════════════════════════
  // Media connections
  // ═══════════════════════════════════════════════════════════════
  {from:"org-iran",to:"org-press-tv",type:"membership",label:"",title:"Iran operates Press TV"},
  {from:"org-iran",to:"org-irib",type:"membership",label:"",title:"Iran operates IRIB"},
  {from:"org-the-grayzone",to:"org-rt",type:"cooperation",label:"Guest",title:"Grayzone appears on RT"},
  {from:"org-the-grayzone",to:"org-press-tv",type:"cooperation",label:"Guest",title:"Grayzone appears on Press TV"},
  {from:"org-david-duke",to:"org-press-tv",type:"cooperation",label:"Guest",title:"David Duke appears on Press TV"},
  {from:"org-david-duke",to:"org-rt",type:"cooperation",label:"Guest",title:"David Duke appears on RT"},
  {from:"org-iron-march",to:"org-terrorgram",type:"ideology",label:"Successor",title:"Terrorgram networks succeeded Iron March"},
  {from:"org-gab",to:"org-antisemitic-shootings",type:"ideology",label:"Platform",title:"Pittsburgh shooter posted manifesto on Gab"},

  // ═══════════════════════════════════════════════════════════════
  // Holocaust denial connections
  // ═══════════════════════════════════════════════════════════════
  {from:"org-david-irving",to:"org-ihr",type:"cooperation",label:"Speaker",title:"Irving spoke at IHR conferences"},
  {from:"org-ernst-zundel",to:"org-ihr",type:"cooperation",label:"Linked",title:"Zündel linked to IHR network"},
  {from:"org-faurisson",to:"org-ihr",type:"cooperation",label:"Board",title:"Faurisson served on IHR editorial board"},
  {from:"org-ihr",to:"org-codoh",type:"ideology",label:"Related",title:"IHR and CODOH share denial network"},
  {from:"org-codoh",to:"org-barnes",type:"ideology",label:"Related",title:"CODOH and Barnes Review share denial network"},
  {from:"org-ahmadinejad",to:"org-ihr",type:"cooperation",label:"Conference",title:"Ahmadinejad hosted Holocaust denial conference (2006)"},
  {from:"org-adelaide",to:"org-ihr",type:"cooperation",label:"Network",title:"Adelaide Institute part of global denial network"},

  // ═══════════════════════════════════════════════════════════════
  // Institutional connections
  // ═══════════════════════════════════════════════════════════════
  {from:"org-durban-conference",to:"org-bds",type:"ideology",label:"Launched",title:"Durban Conference launched BDS movement"},
  {from:"org-south-africa",to:"org-icc",type:"cooperation",label:"ICJ Case",title:"South Africa filed ICJ case against Israel"},
  {from:"org-south-africa",to:"org-bds",type:"cooperation",label:"BDS-SA",title:"South Africa leads BDS"},

  // ═══════════════════════════════════════════════════════════════
  // Political party connections
  // ═══════════════════════════════════════════════════════════════
  {from:"org-corbyn-ind",to:"org-labour-uk-corbyn",type:"membership",label:"Leader",title:"Corbyn led Labour 2015-2020"},
  {from:"org-golden-dawn",to:"org-casapound",type:"cooperation",label:"",title:"Golden Dawn and CasaPound cooperated at EU level"},
  {from:"org-der-dritte",to:"org-npd",type:"ideology",label:"Splinter",title:"Der III. Weg split from NPD"},
  {from:"org-die-rechte",to:"org-npd",type:"ideology",label:"Splinter",title:"Die Rechte emerged from NPD members"},

  // ═══════════════════════════════════════════════════════════════
  // Shooting attacks and radicalization
  // ═══════════════════════════════════════════════════════════════
  {from:"org-4chan-8kun",to:"org-antisemitic-shootings",type:"ideology",label:"Radicalized",title:"Shooters radicalized on 4chan/8chan"},
  {from:"org-stormfront",to:"org-antisemitic-shootings",type:"ideology",label:"Radicalized",title:"Shooters radicalized on Stormfront"},

  // ═══════════════════════════════════════════════════════════════
  // Conspiracy connections
  // ═══════════════════════════════════════════════════════════════
  {from:"org-protocols",to:"org-nazi-germany",type:"ideology",label:"Used",title:"Nazi Germany used Protocols as propaganda"},
  {from:"org-protocols",to:"org-nation-of-islam",type:"ideology",label:"Promoted",title:"NOI promotes Protocols of Zion"},
  {from:"org-larouche",to:"org-qanon",type:"ideology",label:"Influenced",title:"LaRouche conspiracy theories influenced QAnon"},

  // ═══════════════════════════════════════════════════════════════
  // Neturei Karta
  // ═══════════════════════════════════════════════════════════════
  {from:"org-neturei-karta",to:"org-iran",type:"cooperation",label:"Attended",title:"Neturei Karta attended Iran's Holocaust denial conference"},

  // ═══════════════════════════════════════════════════════════════
  // Dieudonné-Soral axis
  // ═══════════════════════════════════════════════════════════════
  {from:"org-dieudonne",to:"org-alain-soral",type:"cooperation",label:"Alliance",title:"Dieudonné and Soral allied in antisemitic activism"},

  // ═══════════════════════════════════════════════════════════════
  // Historical connections
  // ═══════════════════════════════════════════════════════════════
  {from:"org-nazi-germany",to:"org-iron-guard",type:"cooperation",label:"Allied",title:"Nazi Germany allied with Romania's Iron Guard"},
  {from:"org-nazi-germany",to:"org-arrow-cross",type:"cooperation",label:"Puppet",title:"Nazi Germany supported Arrow Cross takeover in Hungary"},
  {from:"org-nazi-germany",to:"org-ustase",type:"cooperation",label:"Puppet",title:"Nazi Germany backed Ustaše regime in Croatia"},
  {from:"org-nazi-germany",to:"org-vichy-france",type:"cooperation",label:"Puppet",title:"Vichy France collaborated with Nazi Germany"},
  {from:"org-nazi-germany",to:"org-fascist-italy",type:"cooperation",label:"Axis",title:"Nazi Germany and Fascist Italy formed the Axis"},

  // Historical connections
  {from:"org-dreyfus-affair",to:"org-action-francaise",type:"ideology",label:"Sparked",title:"Dreyfus Affair spawned Action Française"},
  {from:"org-action-francaise",to:"org-vichy-france",type:"ideology",label:"Influenced",title:"Action Française ideology influenced Vichy France"},
  {from:"org-black-hundreds",to:"org-kishinev-pogrom",type:"ideology",label:"Climate",title:"Black Hundreds created climate for pogroms"},
  {from:"org-protocols",to:"org-black-hundreds",type:"ideology",label:"Promoted",title:"Protocols spread by Black Hundreds"},
  {from:"org-nazi-germany",to:"org-einsatzgruppen",type:"membership",label:"Unit",title:"Einsatzgruppen were SS mobile killing units"},
  {from:"org-nazi-germany",to:"org-german-american-bund",type:"ideology",label:"Inspired",title:"Nazi Germany inspired German American Bund"},
  {from:"org-nazi-germany",to:"org-silver-shirts",type:"ideology",label:"Inspired",title:"Hitler's rise inspired Silver Shirts founding"},
  {from:"org-nazi-germany",to:"org-buf",type:"ideology",label:"Inspired",title:"Nazi ideology influenced British Union of Fascists"},
  {from:"org-nazi-germany",to:"org-farhud",type:"ideology",label:"Incited",title:"Nazi propaganda incited Baghdad's Farhud pogrom"},
  {from:"org-soviet-union",to:"org-doctors-plot",type:"membership",label:"Campaign",title:"Stalin's Doctors' Plot was state antisemitic campaign"},
  {from:"org-antisemiten-liga",to:"org-nazi-germany",type:"ideology",label:"Precursor",title:"Antisemiten-Liga coined 'antisemitism' — ideological precursor to Nazism"},
  // Ancient connections
  {from:"org-chrysostom",to:"org-crusaders",type:"ideology",label:"Foundation",title:"Chrysostom's sermons became theological foundation for Crusader massacres"},
  {from:"org-codex-theodosianus",to:"org-justinian",type:"ideology",label:"Expanded",title:"Justinian expanded Theodosian anti-Jewish laws"},
  {from:"org-visigoth-toledo",to:"org-sisebut",type:"ideology",label:"Escalated",title:"Toledo decrees escalated to full forced conversion under Sisebut"},
  {from:"org-blood-libel-norwich",to:"org-english-expulsion",type:"ideology",label:"Led to",title:"Blood libel accusations led to eventual expulsion from England"},
  {from:"org-chrysostom",to:"org-codex-theodosianus",type:"ideology",label:"Influenced",title:"Church Father rhetoric influenced Roman anti-Jewish legislation"},
  {from:"org-france-expulsion",to:"org-dreyfus-affair",type:"ideology",label:"Legacy",title:"French antisemitism from medieval expulsions to Dreyfus"},
  {from:"org-banu-qurayza",to:"org-arab-states-expulsion",type:"ideology",label:"Legacy",title:"Early Islamic violence against Jews echoed in modern Arab expulsions"}
];

var ORG_GROUPS = {
  islamist: {color:{background:"#e74c3c",border:"#c0392b"},shape:"dot",font:{color:"#fff"}},
  neonazi: {color:{background:"#e67e22",border:"#d35400"},shape:"dot",font:{color:"#fff"}},
  bhi: {color:{background:"#9b59b6",border:"#8e44ad"},shape:"dot",font:{color:"#fff"}},
  antizionist: {color:{background:"#2ecc71",border:"#27ae60"},shape:"dot",font:{color:"#fff"}},
  govts: {color:{background:"#3498db",border:"#2980b9"},shape:"diamond",font:{color:"#fff"}},
  historical: {color:{background:"#7f8c8d",border:"#6c7a7d"},shape:"triangle",font:{color:"#fff"}},
  media: {color:{background:"#f1c40f",border:"#d4ac0d"},shape:"dot",font:{color:"#000"}},
  institutions: {color:{background:"#95a5a6",border:"#7f8c8d"},shape:"square",font:{color:"#fff"}},
  political: {color:{background:"#1abc9c",border:"#16a085"},shape:"dot",font:{color:"#fff"}},
  individuals: {color:{background:"#e74c3c",border:"#c0392b"},shape:"star",font:{color:"#fff"}},
  ngos: {color:{background:"#e91e63",border:"#c2185b"},shape:"square",font:{color:"#fff"}},
  denial: {color:{background:"#795548",border:"#5d4037"},shape:"triangle",font:{color:"#fff"}},
  conspiracy: {color:{background:"#ff9800",border:"#e65100"},shape:"dot",font:{color:"#000"}}
};

var EDGE_TYPES = {
  funding: {color:"#f1c40f",dashes:false,width:2},
  ideology: {color:"#95a5a6",dashes:[5,5],width:1},
  cooperation: {color:"#3498db",dashes:false,width:1},
  membership: {color:"#e74c3c",dashes:false,width:1.5}
};

var GROUP_LABELS = {
  islamist:"Islamist Terror",
  neonazi:"Neo-Nazi & White Supremacist",
  bhi:"BHI & Cults",
  antizionist:"Anti-Zionist / BDS",
  govts:"Governments (Current)",
  historical:"Historical",
  media:"Media & Propaganda",
  institutions:"International Institutions",
  political:"Political Parties",
  individuals:"Individuals & Internet",
  ngos:"NGOs",
  denial:"Holocaust Denial",
  conspiracy:"Conspiracy Movements"
};

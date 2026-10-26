/* Fallen Soldiers Memorial — data (Hebrew)
   Truth Against Lies | truth-against-lies.github.io

   IDF and Israeli Border Police (מג"ב) personnel who fell in the Swords of
   Iron war (from Oct 7, 2023 onward) — distinct from the Oct 7 massacre
   victims memorial (oct7-victims-data.js). All brothers, one wall.

   THE ONE RULE: no name, rank, age, detail — or face — appears here unless it
   is cited from a real source. Every entry has a `source`. Photos are local
   files in assets/fallen/<id>.<ext> (served CSP 'self'); if a file is absent
   the card degrades to a dignified candle 🕯 automatically (img onerror).

   Canonical source = izkor.gov.il (the official Israeli Ministry of Defense
   "Yizkor" memorial): official Hebrew spelling, rank, unit, date, story and
   portrait. 13/13 here are izkor-sourced. Ranks shown are the official (often
   posthumously promoted) ranks. photoCredit = "אתר יזכור — משרד הביטחון"
   except where noted. Where a card adds detail beyond izkor (Lubin), that
   detail is explicitly credited to the press inside the note.

   Schema: id, photo, rank, name, age, unit, date, dateISO (sort), hometown,
   note (story), source, photoCredit. Plain var-array (loaded via <script
   src>, no fetch) so it works on file:// and GitHub Pages. */
var FALLEN_SOLDIERS = [
  {id:"s-abudi-adir", photo:"assets/fallen/s-abudi-adir.jpg", photoCredit:"אתר יזכור — משרד הביטחון",
   rank:"רב סרן", name:"אדיר-מאיר עבודי", age:23, unit:"פיקוד העורף — חטיבת החילוץ וההדרכה",
   date:"7 באוקטובר 2023", dateISO:"2023-10-07", hometown:"מודיעין",
   note:"מפקד פלוגת טירונים בבסיס זיקים; בבוקר ה-7 באוקטובר הוביל את חייליו בגבורה, מנע את השתלטות המחבלים על הבסיס והציל חיילים ואזרחים.",
   source:"https://www.izkor.gov.il/%D7%90%D7%93%D7%99%D7%A8-%D7%9E%D7%90%D7%99%D7%A8%20%D7%A2%D7%91%D7%95%D7%93%D7%99/en_56204ec0436f123fce520710dcfa338e"},

  {id:"s-adany-eily", photo:"assets/fallen/s-adany-eily.jpg", photoCredit:"אתר יזכור — משרד הביטחון",
   rank:"סרן", name:"איליי עדני", age:22, unit:"חטיבת הקומנדו (מגלן)",
   date:"7 באוקטובר 2023", dateISO:"2023-10-07", hometown:"תל מונד",
   note:"מפקד צוות בחטיבת הקומנדו; נפל בקרב בקיבוץ בעוטף עזה כשנכנס ראשון למבנה כדי לחפש את חייליו.",
   source:"https://www.izkor.gov.il/%D7%90%D7%99%D7%9C%D7%99%D7%99%20%D7%A2%D7%93%D7%A0%D7%99/en_a3e4dbca50984d3c9eaeddb7ffb43f7a"},

  {id:"s-dushi-rotem", photo:"assets/fallen/s-dushi-rotem.jpg", photoCredit:"אתר יזכור — משרד הביטחון",
   rank:"סמל ראשון", name:"רותם דושי", age:20, unit:'גדוד 890 "אפעה", חטיבת הצנחנים',
   date:"7 באוקטובר 2023", dateISO:"2023-10-07", hometown:"שמשית",
   note:"לוחם בגדוד 890 בחטיבת הצנחנים; נלחם בצומת שער הנגב ובכפר עזה, חיסל מספר מחבלים ונפל מירי מחבלים שהתחבאו.",
   source:"https://www.izkor.gov.il/%D7%A8%D7%95%D7%AA%D7%9D%20%D7%93%D7%95%D7%A9%D7%99/en_5ec69d85e43a90b43fa13df7117a3e09"},

  {id:"s-rozenshtein-bar", photo:"assets/fallen/s-rozenshtein-bar.jpg", photoCredit:"אתר יזכור — משרד הביטחון",
   rank:"סמל ראשון", name:"בר רוזנשטיין", age:20, unit:"גדוד 51, חטיבת גולני",
   date:"7 באוקטובר 2023", dateISO:"2023-10-07", hometown:"ראשון לציון",
   note:"לוחם מצטיין שבחר בשירות קרבי; המשיך להתקדם תחת אש בהגנה על אזרחים בסביבת כפר עזה ונפל בקרב.",
   source:"https://www.izkor.gov.il/%D7%91%D7%A8%20%D7%A8%D7%95%D7%96%D7%A0%D7%A9%D7%98%D7%99%D7%99%D7%9F/en_80132f4ce4e78ed66e325c778ecc3d7a"},

  {id:"s-brodski-kiril", photo:"assets/fallen/s-brodski-kiril.jpg", photoCredit:"אתר יזכור — משרד הביטחון",
   rank:"סמל", name:"קיריל ברודסקי", age:19, unit:"חיל רגלים — נהג בפיקוד החטיבה הדרומית, אוגדת עזה",
   date:"7 באוקטובר 2023", dateISO:"2023-10-07", hometown:"רמת גן",
   note:"שימש נהג בפיקוד החטיבה הדרומית; נפל בקרב בקיבוץ נירים בעת פינוי מפקד החטיבה הפצוע תחת אש.",
   source:"https://www.izkor.gov.il/%D7%A7%D7%99%D7%A8%D7%99%D7%9C%20%D7%91%D7%A8%D7%95%D7%93%D7%A1%D7%A7%D7%99/en_23de17e5b53bc12c2cdbb763374b54ca"},

  {id:"s-kiean-habib", photo:"assets/fallen/s-kiean-habib.jpg", photoCredit:"אתר יזכור — משרד הביטחון",
   rank:"סמל", name:"חביב קיעאן", age:21, unit:'גדוד "גדעון" (13), חטיבת גולני',
   date:"7 באוקטובר 2023", dateISO:"2023-10-07", hometown:"חורה",
   note:'לוחם במחלקת המרגמות בגדוד "גדעון"; נותר בעמדתו והמשיך להילחם במוצב פגה עד שנפל מירי לאחר שנפצע מרסיסי רימון.',
   source:"https://www.izkor.gov.il/%D7%97%D7%91%D7%99%D7%91%20%D7%A7%D7%99%D7%A2%D7%90%D7%9F/en_ee812591a338484d79767563b9de05dc"},

  {id:"s-eden-haim-meir", photo:"assets/fallen/s-eden-haim-meir.jpg", photoCredit:"אתר יזכור — משרד הביטחון",
   rank:"סמל ראשון", name:"חיים מאיר עדן", age:20, unit:"גדוד 13, חטיבת גולני",
   date:"9 בדצמבר 2023", dateISO:"2023-12-09", hometown:"רחובות",
   note:"לוחם בגדוד 13 של גולני; במוצב פגה ב-7 באוקטובר יצא לחפות על חבריו כדי לאפשר פינוי פצועים, נפצע קשה מאוד ונפטר מפצעיו לאחר 64 ימים.",
   source:"https://www.izkor.gov.il/%D7%97%D7%99%D7%99%D7%9D%20%D7%9E%D7%90%D7%99%D7%A8%20%D7%A2%D7%93%D7%9F/en_e6e1ca693a923231810bd9992c433beb"},

  {id:"s-zloof-yair", photo:"assets/fallen/s-zloof-yair.jpg", photoCredit:"אתר יזכור — משרד הביטחון",
   rank:"רב סרן", name:"יאיר זלוף", age:32, unit:"פלוגה כירורגית, חטיבה 401 (רופא קרבי)",
   date:"10 באוקטובר 2023", dateISO:"2023-10-10", hometown:"תל מונד",
   note:"רופא קרבי ומפקד פלוגה כירורגית בחטיבה 401; רופא במקצועו שהתגייס במסלול העתודה, ונפל סמוך לרצועת עזה בהיערכות לתמרון הקרקעי.",
   source:"https://www.izkor.gov.il/%D7%99%D7%90%D7%99%D7%A8%20%D7%96%D7%9C%D7%95%D7%A3/en_af0eaf7624723ca636b8d34b2f9a5d8d"},

  {id:"s-habaka-salman", photo:"assets/fallen/s-habaka-salman.jpg", photoCredit:"אתר יזכור — משרד הביטחון",
   rank:"סגן אלוף", name:"סלמאן חבקה", age:33, unit:'מפקד גדוד 53, חטיבה 188 "ברק" (שריון)',
   date:"2 בנובמבר 2023", dateISO:"2023-11-02", hometown:"יאנוח",
   note:'מפקד גדוד טנקים, "גיבור בארי" — נכנס עם טנקים לקיבוץ בארי וחילץ אזרחים ב-7 באוקטובר, ונפל בקרב בצפון עזה בעת סיוע לכוח גולני שנפל במארב.',
   source:"https://www.izkor.gov.il/%D7%A1%D7%9C%D7%9E%D7%90%D7%9F%20%D7%97%D7%91%D7%A7%D7%94/en_273fac7b55ff23aebd04d71c984de56c"},

  {id:"s-dishon-eytan", photo:"assets/fallen/s-dishon-eytan.jpg", photoCredit:"אתר יזכור — משרד הביטחון",
   rank:"סמל ראשון", name:"איתן דישון", age:21, unit:"סיירת גבעתי",
   date:"20 בנובמבר 2023", dateISO:"2023-11-20", hometown:"ירושלים (נוף ציון)",
   note:"לוחם ובוגר ישיבת הסדר, מפקד בחטיבת גבעתי; נלחם כשלושה שבועות ברצועת עזה ונפל מירי צלף בג'באליה.",
   source:"https://www.izkor.gov.il/%D7%90%D7%99%D7%AA%D7%9F%20%D7%93%D7%99%D7%A9%D7%95%D7%9F/en_bde22c20e9b225471ea147ad9c177451"},

  {id:"s-nifousy-yair", photo:"assets/fallen/s-nifousy-yair.jpg", photoCredit:"אתר יזכור — משרד הביטחון",
   rank:"סמל ראשון", name:"יאיר ניפוסי", age:21, unit:"גדוד 101, חטיבת הצנחנים",
   date:"2 בנובמבר 2023", dateISO:"2023-11-02", hometown:"עדי",
   note:"צלף מצטיין בגדוד 101 של חטיבת הצנחנים; הציל חיים רבים בזכות דיוקו ומקצועיותו ונפל בלחימה בעזה.",
   source:"https://www.izkor.gov.il/%D7%99%D7%90%D7%99%D7%A8%20%D7%A0%D7%99%D7%A4%D7%95%D7%A1%D7%99/en_047ed94074d1ac32705affb57dbdac8a"},

  {id:"s-assayag-ravit", photo:"assets/fallen/s-assayag-ravit.jpg", photoCredit:"אתר יזכור — משרד הביטחון",
   rank:"סמל שני", name:"רווית חנה אסייג", age:19, unit:'משמר הגבול (מג"ב)',
   date:"7 באוקטובר 2023", dateISO:"2023-10-07", hometown:"אשדוד",
   note:'לוחמת מג"ב; ב-7 באוקטובר נכנסה ראשונה למבנה תוך חיפוי על חבריה ("אני נכנסת ראשונה, חפו עליי") ונפלה מירי מחבל שהתחבא.',
   source:"https://www.izkor.gov.il/%D7%A8%D7%95%D7%95%D7%99%D7%AA%20%D7%97%D7%A0%D7%94%20%D7%90%D7%A1%D7%99%D7%99%D7%92/en_57dd584c4e33cff3ce1fc6e3a645c495"},

  {id:"s-lubin-rose", photo:"assets/fallen/s-lubin-rose.jpg", photoCredit:"Ynet (ynetnews.com)",
   rank:"סמל שני", name:"רוז-איידה (רות אלישבע) לובין", age:20, unit:'משמר הגבול (מג"ב)',
   date:"6 בנובמבר 2023", dateISO:"2023-11-06", hometown:"",
   note:'עולה בודדה מארה"ב (אטלנטה), לוחמת במשמר הגבול; הגנה על קיבוץ כיסופים ב-7 באוקטובר ונפלה בפיגוע דקירה סמוך לעיר העתיקה בירושלים. (זהות, יחידה ותאריך: אתר יזכור; הפרטים הביוגרפיים והנסיבות: דיווחי תקשורת.)',
   source:"https://www.izkor.gov.il/%D7%A8%D7%95%D7%96-%D7%90%D7%99%D7%99%D7%93%D7%94%20%D7%9C%D7%95%D7%91%D7%99%D7%9F/en_83efddee7084c59dc07104444284ca56"}
];

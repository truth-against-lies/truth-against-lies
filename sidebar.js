/* === Site Sidebar — Truth Against Lies ===
   Auto-generates navigation sidebar on all pages.
   Include via: <script src="sidebar.js" defer></script>
*/
(function() {
    'use strict';

    var isHebrew = document.documentElement.dir !== 'ltr';
    var currentPage = location.pathname.split('/').pop() || 'index.html';

    function esc(str) {
        var d = document.createElement('div');
        d.textContent = str;
        return d.innerHTML;
    }

    var categories = isHebrew ? [
        { title: '🔍 אנטישמיות', links: [
            ['antisemitism.html', 'מה זה אנטישמיות?'],
            ['antisemitism.html#claims', 'עלילות והפרכות'],
            ['holocaust-denial.html', 'הכחשת השואה'],
            ['statistics.html', 'נתוני אנטישמיות'],
            ['antisemitic-orgs.html', 'ארגונים אנטישמיים'],
            ['islam-judaism.html', 'אסלאם ויהדות']
        ]},
        { title: '❌ שקרים והפרכות', links: [
            ['lies.html', '34 שקרים נפוצים'],
            ['conspiracies.html', '69 קונספירציות'],
            ['fact-cards.html', 'כרטיסי עובדות']
        ]},
        { title: '📅 היסטוריה ותיעוד', links: [
            ['timeline.html', 'ציר זמן מלא'],
            ['october7.html', '7 באוקטובר'],
            ['regions.html', 'שנאה לפי עמים'],
            ['stories.html', 'סיפורים אישיים'],
            ['gallery.html', 'תיעוד היסטורי'],
            ['videos.html', 'סרטונים']
        ]},
        { title: '💡 עובדות שלא מספרים לך', links: [
            ['facts.html', 'סקירה כללית'],
            ['facts-command.html', 'פיקוד כושל ובוגד'],
            ['facts-knesset.html', 'חברי כנסת'],
            ['facts-court.html', 'בג"ץ ומערכת המשפט'],
            ['facts-policies.html', 'חוקים ומדיניות כושלת'],
            ['facts-media.html', 'תקשורת שקרנית'],
            ['facts-orgs.html', 'ארגונים, אקדמיה ו-BDS'],
            ['facts-money.html', 'הכסף — מימון הטרור'],
            ['facts-iran.html', 'ציר ההרס של איראן'],
            ['facts-west.html', 'בגידות המערב'],
            ['facts-myths.html', 'שקרים שהמציאות הפריכה'],
            ['facts-netanyahu.html', 'הפרדוקס של נתניהו']
        ]},
        { title: '💪 חיזוק ומחשבה', links: [
            ['unity.html', 'חיזוק העם היהודי'],
            ['consciousness.html', 'שינוי תודעה'],
            ['mind.html', 'חיזוק המוח'],
            ['mind-liberation.html', 'שחרור התודעה'],
            ['left-narrative.html', 'הנרטיב של השמאל'],
            ['daat-dat.html', 'דעת vs דת'],
            ['bnei-yisrael.html', 'בני ישראל'],
            ['streams.html', 'זרמים ומגזרים'],
            ['internal-schism.html', 'הפילוג הפנימי'],
            ['mishpacha.html', 'המשפחה'],
            ['zivug.html', 'הזיווג'],
            ['sword-prayer.html', 'חרב ותפילה'],
            ['the-schism.html', 'הפילוג הגדול'],
            ['revolving-door.html', 'הדלת המסתובבת']
        ]},
        { title: '🔧 כלים', links: [
            ['glossary.html', 'מילון מונחים'],
            ['action.html', 'מה אפשר לעשות?']
        ]}
    ] : [
        { title: '🔍 Antisemitism', links: [
            ['antisemitism-en.html', 'What is Antisemitism?'],
            ['antisemitism-en.html#claims', 'Claims & Refutations'],
            ['holocaust-denial-en.html', 'Holocaust Denial'],
            ['statistics-en.html', 'Antisemitism Statistics'],
            ['antisemitic-orgs-en.html', 'Antisemitic Organizations'],
            ['islam-judaism-en.html', 'Islam & Judaism']
        ]},
        { title: '❌ Lies & Refutations', links: [
            ['lies-en.html', '34 Common Lies'],
            ['conspiracies-en.html', '69 Conspiracies'],
            ['fact-cards-en.html', 'Fact Cards']
        ]},
        { title: '📅 History & Documentation', links: [
            ['timeline-en.html', 'Full Timeline'],
            ['october7-en.html', 'October 7'],
            ['regions-en.html', 'Hatred by Nation'],
            ['stories-en.html', 'Personal Stories'],
            ['gallery-en.html', 'Historical Documentation'],
            ['videos-en.html', 'Videos']
        ]},
        { title: '💡 Facts They Don\'t Tell You', links: [
            ['facts-en.html', 'Overview'],
            ['facts-command-en.html', 'Failed Command'],
            ['facts-knesset-en.html', 'Knesset Members'],
            ['facts-court-en.html', 'Court & Legal System'],
            ['facts-policies-en.html', 'Laws & Failed Policies'],
            ['facts-media-en.html', 'Fake Media'],
            ['facts-orgs-en.html', 'Organizations & BDS'],
            ['facts-money-en.html', 'Money — Funding Terror'],
            ['facts-iran-en.html', 'Iran\'s Axis of Destruction'],
            ['facts-west-en.html', 'Western Betrayals'],
            ['facts-myths-en.html', 'Lies Reality Disproved'],
            ['facts-netanyahu-en.html', 'The Netanyahu Paradox']
        ]},
        { title: '💪 Strengthening & Thought', links: [
            ['unity-en.html', 'Jewish Unity'],
            ['consciousness-en.html', 'Consciousness Change'],
            ['mind-en.html', 'Mind Strengthening'],
            ['mind-liberation-en.html', 'Mind Liberation'],
            ['left-narrative-en.html', 'The Left Narrative'],
            ['daat-dat-en.html', 'Knowledge vs Religion'],
            ['bnei-yisrael-en.html', 'Bnei Yisrael'],
            ['streams-en.html', 'Streams & Sectors'],
            ['internal-schism-en.html', 'Internal Schism'],
            ['mishpacha-en.html', 'Family'],
            ['zivug-en.html', 'Matchmaking'],
            ['sword-prayer-en.html', 'Sword & Prayer'],
            ['the-schism-en.html', 'The Great Schism'],
            ['revolving-door-en.html', 'The Revolving Door']
        ]},
        { title: '🔧 Tools', links: [
            ['glossary-en.html', 'Glossary'],
            ['action-en.html', 'What Can You Do?']
        ]}
    ];

    // Build TOC from page sections
    var tocHtml = '';
    var sections = document.querySelectorAll('section[id]');
    if (sections.length > 0) {
        var isIndex = (currentPage === 'index.html' || currentPage === 'index-en.html');
        var tocTitle = isHebrew ? (isIndex ? '📍 בדף הראשי' : '📍 בדף הזה') : (isIndex ? '📍 Main Page' : '📍 On This Page');
        tocHtml = '<div class="sb-section"><div class="sb-title">' + tocTitle + '</div><ul class="sb-links">';
        sections.forEach(function(s) {
            var h2 = s.querySelector('h2');
            if (h2) {
                tocHtml += '<li><a href="#' + esc(s.id) + '" class="sb-toc-link">' + esc(h2.textContent.trim()) + '</a></li>';
            }
        });
        tocHtml += '</ul></div>';
    }

    // Build categories HTML
    var catHtml = '';
    categories.forEach(function(cat) {
        catHtml += '<div class="sb-section"><div class="sb-title">' + cat.title + '</div><ul class="sb-links">';
        cat.links.forEach(function(link) {
            var href = link[0];
            var text = link[1];
            var isActive = (href === currentPage || href.split('#')[0] === currentPage) ? ' class="active"' : '';
            catHtml += '<li><a href="' + href + '"' + isActive + '>' + text + '</a></li>';
        });
        catHtml += '</ul></div>';
    });

    // Create sidebar element
    var aside = document.createElement('aside');
    aside.className = 'site-sidebar';
    aside.innerHTML = tocHtml + catHtml;

    // Create toggle button
    var btn = document.createElement('button');
    btn.className = 'sb-toggle';
    btn.innerHTML = '☰';
    btn.title = isHebrew ? 'תפריט ניווט' : 'Navigation menu';
    btn.onclick = function() {
        aside.classList.toggle('sb-closed');
        btn.innerHTML = aside.classList.contains('sb-closed') ? '☰' : '✕';
    };

    // Insert after nav
    var nav = document.querySelector('nav');
    if (nav) {
        nav.parentNode.insertBefore(aside, nav.nextSibling);
        nav.parentNode.insertBefore(btn, aside);
    } else {
        document.body.insertBefore(aside, document.body.firstChild);
        document.body.insertBefore(btn, aside);
    }
})();

/* ============================================
   SHARED JS — Truth Against Lies
   Used by: all pages
   ============================================ */

// ========== HAMBURGER ARIA-EXPANDED ==========
(function() {
    var hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            var expanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !expanded);
        });
    }
})();

// ========== CLOSE NAV ON OUTSIDE CLICK ==========
document.addEventListener('click', function(e) {
    var nav = document.querySelector('.nav-links');
    var hamburger = document.querySelector('.hamburger');
    if (nav && nav.classList.contains('open') && !nav.contains(e.target) && e.target !== hamburger) {
        nav.classList.remove('open');
        if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    }
});

// ========== SUBMENU: FLYOUT (DESKTOP) + ACCORDION (MOBILE) ==========
(function() {
    var parent = document.querySelector('.has-submenu');
    if (!parent) return;
    var submenu = parent.querySelector('.submenu');
    if (!submenu) return;
    var link = parent.querySelector('a');
    var hideTimer = null;

    function showFlyout() {
        if (window.innerWidth <= 768) return;
        clearTimeout(hideTimer);
        var navLinks = document.querySelector('.nav-links');
        var navRect = navLinks.getBoundingClientRect();
        var itemRect = parent.getBoundingClientRect();
        submenu.style.top = itemRect.top + 'px';
        submenu.style.right = (window.innerWidth - navRect.left) + 'px';
        submenu.classList.add('visible');
        // keep inside viewport vertically
        var subRect = submenu.getBoundingClientRect();
        if (subRect.bottom > window.innerHeight) {
            submenu.style.top = Math.max(0, window.innerHeight - subRect.height) + 'px';
        }
    }
    function startHide() {
        if (window.innerWidth <= 768) return;
        hideTimer = setTimeout(function() { submenu.classList.remove('visible'); }, 200);
    }
    function cancelHide() { clearTimeout(hideTimer); }

    parent.addEventListener('mouseenter', showFlyout);
    parent.addEventListener('mouseleave', startHide);
    submenu.addEventListener('mouseenter', cancelHide);
    submenu.addEventListener('mouseleave', startHide);

    // Mobile: click toggles accordion
    link.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            if (!parent.classList.contains('open')) {
                e.preventDefault();
                parent.classList.toggle('open');
            }
        }
    });
})();

// ========== FLOATING SHARE ==========
function fabShare(platform) {
    var url = window.location.href;
    var title = document.title;
    var text = title + '\n' + url;
    var encoded = encodeURIComponent(text);
    if (platform === 'whatsapp') window.open('https://wa.me/?text=' + encoded, '_blank');
    else if (platform === 'telegram') window.open('https://t.me/share/url?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(title), '_blank');
    else if (platform === 'twitter') window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(url), '_blank');
    else if (platform === 'facebook') window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url), '_blank');
    else if (platform === 'copy') {
        navigator.clipboard.writeText(url);
        var btn = document.querySelector('.sfab-cp');
        btn.textContent = '\u2713';
        setTimeout(function() { btn.innerHTML = '&#128203;'; }, 2000);
    }
    document.getElementById('shareFab').classList.remove('open');
}
document.addEventListener('click', function(e) {
    var fab = document.getElementById('shareFab');
    if (fab && !fab.contains(e.target)) fab.classList.remove('open');
});

// ========== LANGUAGE PICKER ==========
function setPageLang(lang) {
    document.querySelector('.nav-lang-menu').classList.remove('open');
    if (lang === 'he') {
        localStorage.removeItem('siteLang');
        document.cookie = 'googtrans=;path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT';
        document.cookie = 'googtrans=;path=/;domain=.github.io;expires=Thu, 01 Jan 1970 00:00:00 GMT';
    } else {
        localStorage.setItem('siteLang', lang);
        document.cookie = 'googtrans=/he/' + lang + ';path=/';
        document.cookie = 'googtrans=/he/' + lang + ';path=/;domain=.github.io';
    }
    location.reload();
    return false;
}
document.addEventListener('click', function(e) {
    var lm = document.querySelector('.nav-lang-menu');
    var lb = document.querySelector('.nav-lang-btn');
    if (lm && !lm.contains(e.target) && e.target !== lb) lm.classList.remove('open');
});

// ========== GOOGLE TRANSLATE ==========
function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage:'he',autoDisplay:false}, 'google_translate_element');
}
(function(){
    var lang = localStorage.getItem('siteLang');
    if (lang && lang !== 'he') {
        document.cookie = 'googtrans=/he/' + lang + ';path=/';
        document.cookie = 'googtrans=/he/' + lang + ';path=/;domain=.github.io';
        if (!document.getElementById('gt-script')) {
            var s = document.createElement('script');
            s.id = 'gt-script';
            s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
            document.body.appendChild(s);
        }
    }
})();

// ========== THEME (LIGHT/DARK) ==========
(function() {
    var saved = localStorage.getItem('theme');
    if (saved === 'light') document.body.classList.add('light-mode');
})();
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    var isLight = document.body.classList.contains('light-mode');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    var label = document.getElementById('themeLabel');
    if (label) label.textContent = isLight ? '\u05DE\u05E6\u05D1 \u05DB\u05D4\u05D4' : '\u05DE\u05E6\u05D1 \u05D1\u05D4\u05D9\u05E8';
    var icon = document.getElementById('themeIcon');
    if (icon) icon.textContent = isLight ? '\u263E' : '\u2600';
}

// ========== SETTINGS DROPDOWN ==========
document.addEventListener('click', function(e) {
    var sm = document.querySelector('.nav-settings-menu');
    var sb = document.querySelector('.nav-settings-btn');
    if (sm && !sm.contains(e.target) && e.target !== sb) sm.classList.remove('open');
});

// ========== READING PROGRESS BAR ==========
(function() {
    var bar = document.querySelector('.reading-progress');
    if (!bar) return;
    window.addEventListener('scroll', function() {
        var scrollTop = window.scrollY;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        bar.style.width = progress + '%';
    });
})();

// ========== SERVICE WORKER ==========
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(function() {});
}

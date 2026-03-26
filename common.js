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

// ========== SUBMENU: DESKTOP FLYOUT + MOBILE INLINE ==========
(function() {
    var parents = document.querySelectorAll('.has-submenu');
    if (!parents.length) return;
    var flyouts = [];
    var isRTL = document.documentElement.dir === 'rtl' || getComputedStyle(document.body).direction === 'rtl';
    var MOBILE_BP = 480; // breakpoint: <= this = mobile (inline), > this = desktop (flyout)

    function isMobile() { return window.innerWidth <= MOBILE_BP; }

    function hideAllFlyouts() {
        flyouts.forEach(function(f) { f.el.classList.remove('visible'); });
        parents.forEach(function(p) { p.classList.remove('open'); });
    }

    function hideAllInline() {
        parents.forEach(function(p) {
            p.classList.remove('open');
            var s = p.querySelector('.submenu');
            if (s) s.classList.remove('mobile-open');
        });
    }

    parents.forEach(function(parent) {
        var submenu = parent.querySelector('.submenu');
        if (!submenu) return;
        var link = parent.querySelector('a');

        // --- Desktop: flyout cloned to body ---
        var flyout = submenu.cloneNode(true);
        flyout.classList.add('submenu-flyout');
        document.body.appendChild(flyout);
        flyouts.push({ el: flyout, parent: parent });

        function positionFlyout() {
            var navLinks = document.querySelector('.nav-links');
            var navRect = navLinks.getBoundingClientRect();
            var itemRect = parent.getBoundingClientRect();
            flyout.style.top = itemRect.top + 'px';
            if (isRTL) {
                flyout.style.right = ''; flyout.style.left = '';
                flyout.style.right = (window.innerWidth - navRect.left) + 'px';
            } else {
                flyout.style.right = ''; flyout.style.left = navRect.right + 'px';
            }
            var fRect = flyout.getBoundingClientRect();
            if (fRect.bottom > window.innerHeight) {
                flyout.style.top = Math.max(0, window.innerHeight - fRect.height) + 'px';
            }
        }

        var hideTimer = null;
        function showFlyout() {
            clearTimeout(hideTimer);
            hideAllFlyouts();
            parent.classList.add('open');
            flyout.classList.add('visible');
            positionFlyout();
        }
        function startHide() {
            hideTimer = setTimeout(function() {
                flyout.classList.remove('visible');
                parent.classList.remove('open');
            }, 200);
        }
        function cancelHide() { clearTimeout(hideTimer); }

        // Desktop hover
        parent.addEventListener('mouseenter', function() { if (!isMobile()) showFlyout(); });
        parent.addEventListener('mouseleave', function() { if (!isMobile()) startHide(); });
        flyout.addEventListener('mouseenter', function() { if (!isMobile()) cancelHide(); });
        flyout.addEventListener('mouseleave', function() { if (!isMobile()) startHide(); });

        // Click handler — mobile: inline toggle, desktop: first click opens flyout
        link.addEventListener('click', function(e) {
            if (isMobile()) {
                e.preventDefault();
                var isOpen = parent.classList.contains('open');
                hideAllInline();
                if (!isOpen) {
                    parent.classList.add('open');
                    submenu.classList.add('mobile-open');
                }
            } else {
                if (!parent.classList.contains('open')) {
                    e.preventDefault();
                    showFlyout();
                }
            }
        });
    });

    // Close all when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.has-submenu') && !e.target.closest('.submenu-flyout')) {
            hideAllFlyouts();
            hideAllInline();
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

// ========== TABLE OF CONTENTS (auto-init) ==========
(function() {
    var tocBtn = document.querySelector('.toc-fab-btn');
    var tocPanel = document.getElementById('tocPanel');
    if (!tocBtn || !tocPanel) return;

    var tocLinks = document.querySelectorAll('.toc-link');
    var sections = [];

    // Collect sections referenced by TOC links
    tocLinks.forEach(function(link) {
        var id = link.getAttribute('href').substring(1);
        var el = document.getElementById(id);
        if (el) sections.push({ id: id, el: el, link: link });
    });

    // Show/hide TOC button on scroll (mobile + small desktop)
    window.addEventListener('scroll', function() {
        if (window.innerWidth >= 1200) return; // sidebar handles desktop
        if (window.scrollY > 300) tocBtn.classList.add('visible');
        else {
            tocBtn.classList.remove('visible');
            tocPanel.classList.remove('open');
        }
    });

    // Desktop sidebar: always show panel when wide enough
    function checkSidebar() {
        if (window.innerWidth >= 1200) {
            tocBtn.classList.remove('visible');
            tocPanel.classList.add('open');
        } else {
            tocPanel.classList.remove('open');
        }
    }
    checkSidebar();
    window.addEventListener('resize', checkSidebar);

    // Scroll spy via IntersectionObserver
    if (typeof IntersectionObserver !== 'undefined') {
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    tocLinks.forEach(function(l) { l.classList.remove('active'); });
                    var activeLink = document.querySelector('.toc-link[href="#' + entry.target.id + '"]');
                    if (activeLink) activeLink.classList.add('active');
                }
            });
        }, { rootMargin: '-20% 0px -60% 0px' });
        sections.forEach(function(s) { observer.observe(s.el); });
    }

    // Click on link → scroll + close panel (mobile)
    tocLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var id = this.getAttribute('href').substring(1);
            var target = document.getElementById(id);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (window.innerWidth < 1200) {
                    setTimeout(function() { tocPanel.classList.remove('open'); }, 300);
                }
            }
        });
    });

    // Close on click outside (mobile)
    document.addEventListener('click', function(e) {
        if (window.innerWidth >= 1200) return;
        if (!e.target.closest('.toc-fab')) {
            tocPanel.classList.remove('open');
        }
    });

    // Close on Escape (mobile)
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && window.innerWidth < 1200) tocPanel.classList.remove('open');
    });
})();

// ========== SERVICE WORKER ==========
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(function() {});
}

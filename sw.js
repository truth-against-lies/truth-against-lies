var CACHE_NAME = 'tal-v83';
var ASSETS = [
    './',
    'index.html',
    'israel-flag.webp',
    'supabase-config.js',
    'lies.html',
    'fact-cards.html',
    'october7.html',
    'antisemitism.html',
    'facts.html',
    'facts-command.html',
    'facts-court.html',
    'facts-iran.html',
    'facts-knesset.html',
    'facts-media.html',
    'facts-money.html',
    'facts-myths.html',
    'facts-netanyahu.html',
    'facts-orgs.html',
    'facts-policies.html',
    'facts-west.html',
    'gallery.html',
    'videos.html',
    'action.html',
    'regions.html',
    'glossary.html',
    'statistics.html',
    'holocaust-denial.html',
    'unity.html',
    'mind.html',
    'left-narrative.html',
    'daat-dat.html',
    'sword-prayer.html',
    'the-schism.html',
    'shared.css',
    'shared-en.css',
    'common.js',
    'search.js',
    'search-index.js',
    'favicon.png',
    'favicon.ico',
    'index-en.html',
    'lies-en.html',
    'fact-cards-en.html',
    'october7-en.html',
    'antisemitism-en.html',
    'facts-en.html',
    'facts-command-en.html',
    'facts-court-en.html',
    'facts-iran-en.html',
    'facts-knesset-en.html',
    'facts-media-en.html',
    'facts-money-en.html',
    'facts-myths-en.html',
    'facts-netanyahu-en.html',
    'facts-orgs-en.html',
    'facts-policies-en.html',
    'facts-west-en.html',
    'gallery-en.html',
    'videos-en.html',
    'action-en.html',
    'regions-en.html',
    'glossary-en.html',
    'statistics-en.html',
    'holocaust-denial-en.html',
    'unity-en.html',
    'mind-en.html',
    'left-narrative-en.html',
    'daat-dat-en.html',
    'sword-prayer-en.html',
    'the-schism-en.html',
    'antisemitic-orgs.html',
    'antisemitic-orgs-en.html',
    'orgs-network-data.js',
    'orgs-network-data-he.js',
    'consciousness.html',
    'consciousness-en.html',
    'bnei-yisrael.html',
    'bnei-yisrael-en.html',
    'streams.html',
    'streams-en.html',
    'timeline.html',
    'timeline-en.html',
    'revolving-door.html',
    'revolving-door-en.html',
    'internal-schism.html',
    'internal-schism-en.html',
    'mind-liberation.html',
    'mind-liberation-en.html',
    'stories.html',
    'stories-en.html'
];

// Install: cache all assets
self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

// Activate: clean old caches
self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(function(names) {
            return Promise.all(
                names.filter(function(n) { return n !== CACHE_NAME; })
                    .map(function(n) { return caches.delete(n); })
            );
        })
    );
    self.clients.claim();
});

// Fetch: network-first, fallback to cache (ensures updates show immediately)
self.addEventListener('fetch', function(e) {
    e.respondWith(
        fetch(e.request).then(function(response) {
            if (response && response.status === 200 && response.type === 'basic') {
                var clone = response.clone();
                caches.open(CACHE_NAME).then(function(cache) {
                    cache.put(e.request, clone);
                });
            }
            return response;
        }).catch(function() {
            return caches.match(e.request);
        })
    );
});

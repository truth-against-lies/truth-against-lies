// Search Module — Truth Against Lies
// Client-side full-text search with debouncing, highlighting, RTL support

(function() {
    'use strict';

    var overlay = null;
    var input = null;
    var resultsContainer = null;
    var countDisplay = null;
    var debounceTimer = null;
    var MAX_RESULTS = 20;
    var DEBOUNCE_MS = 200;

    // Initialize search when DOM is ready
    function initSearch() {
        overlay = document.getElementById('searchOverlay');
        if (!overlay) return;

        input = overlay.querySelector('.search-input');
        resultsContainer = overlay.querySelector('.search-results');
        countDisplay = overlay.querySelector('.search-count');

        // Close button
        var closeBtn = overlay.querySelector('.search-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', closeSearch);
        }

        // Input handler with debounce
        if (input) {
            input.addEventListener('input', function() {
                clearTimeout(debounceTimer);
                debounceTimer = setTimeout(performSearch, DEBOUNCE_MS);
            });

            // Enter key does immediate search
            input.addEventListener('keydown', function(e) {
                if (e.key === 'Enter') {
                    clearTimeout(debounceTimer);
                    performSearch();
                }
            });
        }

        // Escape key closes overlay
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && overlay.classList.contains('open')) {
                closeSearch();
            }
        });

        // Click outside the search box closes overlay
        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeSearch();
            }
        });
    }

    // Open search overlay
    function openSearch() {
        if (!overlay) return;
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
        if (input) {
            input.value = '';
            input.focus();
        }
        if (resultsContainer) resultsContainer.innerHTML = '';
        if (countDisplay) countDisplay.textContent = '';
    }

    // Close search overlay
    function closeSearch() {
        if (!overlay) return;
        overlay.classList.remove('open');
        document.body.style.overflow = '';
        if (input) input.value = '';
        if (resultsContainer) resultsContainer.innerHTML = '';
        if (countDisplay) countDisplay.textContent = '';
    }

    // Perform search
    function performSearch() {
        if (!input || !resultsContainer || typeof SEARCH_INDEX === 'undefined') return;

        var query = input.value.trim();

        // Clear results if query is empty
        if (!query || query.length < 2) {
            resultsContainer.innerHTML = '';
            if (countDisplay) countDisplay.textContent = '';
            return;
        }

        // Normalize query: lowercase for Latin, keep Hebrew as-is
        var queryLower = query.toLowerCase();
        var queryWords = queryLower.split(/\s+/).filter(function(w) { return w.length > 0; });

        var results = [];

        for (var i = 0; i < SEARCH_INDEX.length; i++) {
            var entry = SEARCH_INDEX[i];
            var titleLower = entry.title.toLowerCase();
            var textLower = entry.text.toLowerCase();
            var combined = titleLower + ' ' + textLower;

            // Check if all query words match
            var allMatch = true;
            var score = 0;

            for (var w = 0; w < queryWords.length; w++) {
                var word = queryWords[w];
                if (combined.indexOf(word) === -1) {
                    allMatch = false;
                    break;
                }
                // Score: title matches are worth more
                if (titleLower.indexOf(word) !== -1) {
                    score += 10;
                }
                if (textLower.indexOf(word) !== -1) {
                    score += 1;
                }
            }

            if (allMatch) {
                // Exact phrase match bonus
                if (combined.indexOf(queryLower) !== -1) {
                    score += 20;
                }
                if (titleLower.indexOf(queryLower) !== -1) {
                    score += 30;
                }

                results.push({
                    entry: entry,
                    score: score
                });
            }
        }

        // Sort by score (highest first)
        results.sort(function(a, b) {
            return b.score - a.score;
        });

        // Limit results
        var totalMatches = results.length;
        results = results.slice(0, MAX_RESULTS);

        // Display results
        if (results.length === 0) {
            resultsContainer.innerHTML = '<div class="search-no-results">\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA \u05E2\u05D1\u05D5\u05E8 &laquo;' + escapeHtml(query) + '&raquo;</div>';
            if (countDisplay) countDisplay.textContent = '';
            return;
        }

        if (countDisplay) {
            if (totalMatches > MAX_RESULTS) {
                countDisplay.textContent = '\u05DE\u05E6\u05D9\u05D2 ' + MAX_RESULTS + ' \u05DE\u05EA\u05D5\u05DA ' + totalMatches + ' \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA';
            } else {
                countDisplay.textContent = totalMatches + ' \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA';
            }
        }

        var html = '';
        for (var r = 0; r < results.length; r++) {
            var item = results[r].entry;
            var snippet = getSnippet(item.text, queryWords);
            var highlightedTitle = highlightText(item.title, queryWords);
            var highlightedSnippet = highlightText(snippet, queryWords);

            html += '<a class="search-result" href="' + escapeHtml(item.url) + '" onclick="closeSearchOverlay()">';
            html += '<div class="search-result-title">' + highlightedTitle + '</div>';
            html += '<div class="search-result-page">' + escapeHtml(item.page) + '</div>';
            html += '<div class="search-result-text">' + highlightedSnippet + '</div>';
            html += '</a>';
        }

        resultsContainer.innerHTML = html;
    }

    // Get a relevant snippet around the first match
    function getSnippet(text, queryWords) {
        if (!text) return '';

        var textLower = text.toLowerCase();
        var bestPos = -1;

        // Find position of first query word match
        for (var i = 0; i < queryWords.length; i++) {
            var pos = textLower.indexOf(queryWords[i]);
            if (pos !== -1 && (bestPos === -1 || pos < bestPos)) {
                bestPos = pos;
            }
        }

        if (bestPos === -1) {
            return text.substring(0, 150);
        }

        // Extract snippet around match
        var start = Math.max(0, bestPos - 40);
        var end = Math.min(text.length, bestPos + 120);
        var snippet = '';

        if (start > 0) snippet += '...';
        snippet += text.substring(start, end);
        if (end < text.length) snippet += '...';

        return snippet;
    }

    // Highlight query words in text
    function highlightText(text, queryWords) {
        if (!text || !queryWords.length) return text;

        var result = escapeHtml(text);

        // Sort query words by length (longest first) to avoid partial replacements
        var sortedWords = queryWords.slice().sort(function(a, b) {
            return b.length - a.length;
        });

        for (var i = 0; i < sortedWords.length; i++) {
            var word = sortedWords[i];
            if (!word) continue;
            // Escape special regex chars in the query word
            var escapedWord = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            var regex = new RegExp('(' + escapedWord + ')', 'gi');
            result = result.replace(regex, '<mark>$1</mark>');
        }

        return result;
    }

    // Escape HTML entities
    function escapeHtml(text) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(text));
        return div.innerHTML;
    }

    // Global function to open search (called from nav button)
    window.openSearchOverlay = openSearch;
    window.closeSearchOverlay = closeSearch;

    // Init on DOMContentLoaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearch);
    } else {
        initSearch();
    }
})();

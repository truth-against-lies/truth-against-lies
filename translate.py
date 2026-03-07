#!/usr/bin/env python3
"""
Translate en.json to multiple languages using Google Translate.
Preserves JSON structure, HTML entities, and HTML tags.
"""

import json
import re
import sys
import time
from deep_translator import GoogleTranslator

# Languages to translate to
LANGUAGES = {
    'fr': 'french',
    'de': 'german',
    'es': 'spanish',
    'pt': 'portuguese',
    'ru': 'russian',
    'pl': 'polish',
    'no': 'norwegian',
    'sv': 'swedish',
    'it': 'italian',
    'tr': 'turkish',
}

LANG_NAMES = {
    'fr': 'Français',
    'de': 'Deutsch',
    'es': 'Español',
    'pt': 'Português',
    'ru': 'Русский',
    'pl': 'Polski',
    'no': 'Norsk',
    'sv': 'Svenska',
    'it': 'Italiano',
    'tr': 'Türkçe',
}

# HTML entities and tags to preserve
ENTITY_PATTERN = re.compile(r'&#?\w+;')
TAG_PATTERN = re.compile(r'<[^>]+>')

def protect_html(text):
    """Replace HTML tags and entities with placeholders."""
    placeholders = {}
    counter = [0]

    def replace_match(match):
        key = f"__PH{counter[0]}__"
        placeholders[key] = match.group(0)
        counter[0] += 1
        return key

    # Protect HTML tags first (they may contain entities)
    text = TAG_PATTERN.sub(replace_match, text)
    # Then protect HTML entities
    text = ENTITY_PATTERN.sub(replace_match, text)

    return text, placeholders

def restore_html(text, placeholders):
    """Restore HTML tags and entities from placeholders."""
    for key, value in placeholders.items():
        text = text.replace(key, value)
    return text

def translate_text(text, target_lang):
    """Translate a single text string, preserving HTML."""
    if not text or not text.strip():
        return text

    # Protect HTML
    protected, placeholders = protect_html(text)

    try:
        # Google Translate has a 5000 char limit per request
        if len(protected) > 4500:
            # Split on sentences and translate in chunks
            chunks = split_text(protected, 4500)
            translated_chunks = []
            for chunk in chunks:
                translated = GoogleTranslator(source='en', target=target_lang).translate(chunk)
                if translated:
                    translated_chunks.append(translated)
                else:
                    translated_chunks.append(chunk)
                time.sleep(0.3)
            result = ' '.join(translated_chunks)
        else:
            result = GoogleTranslator(source='en', target=target_lang).translate(protected)
            if not result:
                result = protected
            time.sleep(0.2)
    except Exception as e:
        print(f"  Warning: Translation failed for text ({len(text)} chars): {e}", file=sys.stderr)
        result = protected

    # Restore HTML
    return restore_html(result, placeholders)

def split_text(text, max_len):
    """Split text into chunks at sentence boundaries."""
    chunks = []
    current = ""
    sentences = re.split(r'(?<=[.!?])\s+', text)

    for sentence in sentences:
        if len(current) + len(sentence) + 1 > max_len and current:
            chunks.append(current.strip())
            current = sentence
        else:
            current = current + " " + sentence if current else sentence

    if current:
        chunks.append(current.strip())

    return chunks if chunks else [text]

def translate_value(value, target_lang, path=""):
    """Recursively translate JSON values."""
    if isinstance(value, str):
        # Skip certain fields
        if path.endswith('.code') or path.endswith('.dir'):
            return value
        if path.endswith('.name'):
            # Language name - use our mapping
            return value  # Will be set at meta level
        # Skip source citations (keep original)
        if path.endswith('.sources') and value.startswith('Sources:'):
            return translate_text(value, target_lang)

        translated = translate_text(value, target_lang)
        print(f"  {path}: done ({len(value)} chars)", file=sys.stderr)
        return translated

    elif isinstance(value, list):
        return [translate_value(item, target_lang, f"{path}[{i}]") for i, item in enumerate(value)]

    elif isinstance(value, dict):
        return {key: translate_value(val, target_lang, f"{path}.{key}") for key, val in value.items()}

    return value

def translate_file(source_path, target_lang_code):
    """Translate the entire JSON file to the target language."""
    # Map our codes to Google Translate codes
    google_lang_map = {
        'no': 'no',  # Norwegian
    }
    google_code = google_lang_map.get(target_lang_code, target_lang_code)

    print(f"\n{'='*60}", file=sys.stderr)
    print(f"Translating to {LANG_NAMES[target_lang_code]} ({target_lang_code})", file=sys.stderr)
    print(f"{'='*60}", file=sys.stderr)

    with open(source_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    # Translate
    translated = translate_value(data, google_code)

    # Fix meta
    translated['meta'] = {
        'code': target_lang_code,
        'name': LANG_NAMES[target_lang_code],
        'dir': 'ltr'
    }

    # Write output
    output_path = source_path.replace('en.json', f'{target_lang_code}.json')
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(translated, f, ensure_ascii=False, indent=4)

    print(f"\nDone! Written to {output_path}", file=sys.stderr)
    return output_path

def main():
    source = '/Users/nethanellinder/code/truth-against-lies/lang/en.json'

    if len(sys.argv) > 1:
        # Translate specific languages
        langs = sys.argv[1:]
    else:
        # Translate all
        langs = list(LANGUAGES.keys())

    for lang in langs:
        if lang not in LANGUAGES:
            print(f"Unknown language: {lang}", file=sys.stderr)
            continue
        try:
            translate_file(source, lang)
        except Exception as e:
            print(f"ERROR translating {lang}: {e}", file=sys.stderr)

if __name__ == '__main__':
    main()

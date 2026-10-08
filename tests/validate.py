"""Static integrity checks, using only Python's standard library.
Run from the repository root: python tests/validate.py
"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, unquote
import json
import re
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
PAGES = [ROOT / 'index.html', ROOT / 'projects/equilibrium.html']
class Document(HTMLParser):
    def __init__(self, path):
        super().__init__(convert_charrefs=True)
        self.path, self.ids, self.headings, self.links, self.images, self.keys = path, [], [], [], [], []
        self.fields, self.active = [], None
        self.feed(path.read_text(encoding='utf-8-sig'))
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if 'data-i18n' in attrs:
            self.active = (attrs['data-i18n'], tag, [])
        if 'id' in attrs:
            self.ids.append(attrs['id'])
        if re.fullmatch(r'h[1-6]', tag):
            self.headings.append(int(tag[1]))
        for key in ('href', 'src'):
            if key in attrs:
                self.links.append(attrs[key])
        if tag == 'img':
            self.images.append(attrs)
        for key in ('data-i18n', 'data-i18n-alt', 'data-i18n-aria'):
            if key in attrs:
                self.keys.append(attrs[key])

    def handle_data(self, data):
        if self.active:
            self.active[2].append(data)
    def handle_endtag(self, tag):
        if self.active and self.active[1] == tag:
            self.fields.append((self.active[0], ' '.join(''.join(self.active[2]).split())))
            self.active = None

raw = (ROOT / 'assets/data/translations.js').read_text(encoding='utf-8-sig')
translations = json.loads(raw[raw.index('{'):raw.rfind('}') + 1])
assert set(translations) == {'pt', 'fr', 'en'}
assert set(translations['pt']) == set(translations['fr']) == set(translations['en'])
assert all(isinstance(value, str) and value.strip() for lang in translations.values() for value in lang.values())
documents = {page.resolve(): Document(page) for page in PAGES}
for page, document in documents.items():
    assert document.headings.count(1) == 1, page
    assert len(document.ids) == len(set(document.ids)), f'Duplicate IDs: {page}'
    assert all(b <= a + 1 for a, b in zip(document.headings, document.headings[1:])), f'Heading jump: {page}'
    assert all(key in translations['pt'] for key in document.keys), f'Missing translation: {page}'
    for key, value in document.fields:
        assert value == ' '.join(translations['pt'][key].split()), f'Portuguese fallback drift: {key}'
    for img in document.images:
        assert all(img.get(attr) for attr in ('alt', 'width', 'height')), img
    for link in document.links:
        assert link.strip(), f'Empty URL: {page}'
        parsed = urlsplit(link)
        if parsed.scheme or parsed.netloc:
            continue
        target = (page.parent / unquote(parsed.path)).resolve() if parsed.path else page
        assert target.is_relative_to(ROOT) and target.is_file(), f'Missing local file: {link} in {page}'
        if parsed.fragment:
            assert target in documents and unquote(parsed.fragment) in documents[target].ids, f'Invalid fragment: {link}'
    content = page.read_text(encoding='utf-8')
    assert 'mailto:antonio.silos95@outlook.com' in content or page.name != 'index.html'
    for obsolete in ('script.js', 'unpkg.com', 'flag-icons', 'homenagem-aniversario', 'Fullstack Jr.', 'Orbit'):
        assert obsolete not in content, f'Obsolete content: {obsolete}'
assert (ROOT / 'google450156a250680164.html').read_text().strip() == 'google-site-verification: google450156a250680164.html'
ET.parse(ROOT / 'sitemap.xml')
assert (ROOT / 'assets/images/social-preview.jpg').is_file()
print(f'PASS: {len(PAGES)} pages, headings, IDs, links, images, sitemap and {len(translations["pt"])} keys in three languages.')

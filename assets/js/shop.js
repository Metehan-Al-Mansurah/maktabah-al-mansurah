'use strict';

/* ================================================================
   CATEGORY STRUCTURE
   ================================================================ */

const CATEGORY_STRUCTURE = [
  {
    id: 'buecher', label: 'Islamische Bücher',
    subcats: [
      { id: 'deutsch',    label: 'Deutsche Bücher' },
      { id: 'arabisch',   label: 'Arabische Bücher' },
      { id: 'quran',      label: "Qur'an & Tafsir" },
      { id: 'aqidah',     label: 'Aqidah' },
      { id: 'fiqh',       label: 'Fiqh' },
      { id: 'biografien', label: 'Biografien' },
      { id: 'kinderb',    label: 'Kinderbücher' }
    ]
  },
  {
    id: 'kleidung', label: 'Islamische Kleidung',
    subcats: [
      { id: 'shemagh',        label: 'Shemagh / Kufiya' },
      { id: 'thobes',         label: 'Thobes' },
      { id: 'abayas',         label: 'Abayas' },
      { id: 'khimars',        label: 'Khimars / Hijabs' },
      { id: 'kinderkleidung', label: 'Kinderkleidung' }
    ]
  },
  {
    id: 'duefte', label: 'Düfte & Pflege',
    subcats: [
      { id: 'misk',      label: 'Misk & Attar' },
      { id: 'oud',       label: 'Oud & Bakhoor' },
      { id: 'siwak',     label: 'Siwak / Miswak' },
      { id: 'seifen',    label: 'Seifen' },
      { id: 'pflegeoel', label: 'Pflegeöle' }
    ]
  },
  {
    id: 'gebet', label: 'Gebet & Ibadah',
    subcats: [
      { id: 'gebetsteppich',  label: 'Gebetsteppiche' },
      { id: 'tasbih',         label: 'Tasbih' },
      { id: 'quranstaender',  label: "Qur'an-Ständer" },
      { id: 'gebetskleidung', label: 'Gebetskleidung' }
    ]
  },
  {
    id: 'accessoires', label: 'Accessoires & Geschenke',
    subcats: [
      { id: 'taschen',      label: 'Taschen' },
      { id: 'kufis',        label: 'Kufis' },
      { id: 'dekor',        label: 'Dekor' },
      { id: 'geschenksets', label: 'Geschenksets' }
    ]
  }
];

/* ================================================================
   PRODUCT DATA
   ================================================================ */

const PRODUCTS = [
  /* ── Islamische Bücher ── */
  {
    id: 1, mainCat: 'buecher', category: 'buecher', subcat: 'deutsch',
    name: 'Die Heilmittel zur Geduld gegen das Übel der Geschöpfe',
    subtitle: 'Ibn Taymiyyah',
    price: 7.99, badge: null,
    description: 'Ein bedeutendes Werk des Gelehrten Ibn Taymiyyah über Geduld und den Umgang mit den Schwierigkeiten des Lebens.'
  },
  {
    id: 2, mainCat: 'buecher', category: 'buecher', subcat: 'deutsch',
    name: 'An-Nawawīs vierzig Ḥadīṯe',
    subtitle: 'Imam ʾAbū Zakariyyā an-Nawawī — Mit Notizfeldern',
    price: 14.99, badge: 'Bestseller',
    description: 'Die berühmten 40 Hadithe des Imam an-Nawawi — mit Notizfeldern für eigene Reflexionen.'
  },
  {
    id: 3, mainCat: 'buecher', category: 'buecher', subcat: 'fiqh',
    name: 'Mittel zum Erreichen eines glücklichen Familienlebens',
    subtitle: 'Sheikh Ruhayli',
    price: 13.99, badge: null,
    description: 'Wertvolle Ratschläge des Gelehrten Sheikh Ruhayli für ein harmonisches Familienleben nach islamischen Werten.'
  },
  {
    id: 4, mainCat: 'buecher', category: 'buecher', subcat: 'aqidah',
    name: 'Die essenziellen Unterrichte für die muslimische Gemeinschaft',
    subtitle: 'Sheikh Ibn Baz',
    price: 8.99, badge: null,
    description: 'Grundlegende Unterrichte des Großgelehrten Sheikh Ibn Baz für die muslimische Gemeinschaft.'
  },
  {
    id: 5, mainCat: 'buecher', category: 'buecher', subcat: 'aqidah',
    name: 'Die drei fundamentalen Grundlagen und ihre Beweise',
    subtitle: 'Muhammad ibn Abdulwahab',
    price: 8.99, badge: 'Bestseller',
    description: 'Das klassische Werk über die drei fundamentalen Grundlagen des Islam und ihre Beweise aus Quran und Sunnah.'
  },
  {
    id: 6, mainCat: 'buecher', category: 'buecher', subcat: 'aqidah',
    name: 'Kitāb-ut Tauḥīd — Das Buch des Monotheismus',
    subtitle: 'Muḥammad Ibn ʿAbd-il Wahhāb',
    price: 27.99, badge: null,
    description: 'Das grundlegende Werk über Tauhid — eines der wichtigsten Bücher der islamischen Glaubenslehre.'
  },
  {
    id: 7, mainCat: 'buecher', category: 'buecher', subcat: 'fiqh',
    name: 'Erläuterung der Beschreibung des Gebets des Propheten ﷺ von Al-Albani',
    subtitle: 'Scheich Sulayman Ar-Ruhayli',
    price: 12.99, badge: 'Neu',
    description: 'Eine ausführliche Erläuterung der Gebetsbeschreibung des Propheten Muhammad ﷺ von Scheich Ar-Ruhayli.'
  },
  {
    id: 8, mainCat: 'buecher', category: 'buecher', subcat: 'arabisch',
    name: 'Al-ʿUmdah fil-Ahkam — Taschenformat',
    subtitle: 'Verlag Dar Al-Mirath An-Nabawi',
    price: 7.99, badge: null,
    description: 'Die wichtigsten Rechtsnormen in kompakter Taschenformat-Ausgabe — ideal für unterwegs.'
  },
  {
    id: 9, mainCat: 'buecher', category: 'buecher', subcat: 'fiqh',
    name: 'Erläuterung der Gedichtsammlung der Rechtsgrundsätze (As-Saʿdi)',
    subtitle: 'Scheich Sulayman Ar-Ruhayli',
    price: 12.99, badge: null,
    description: 'Scheich Ar-Ruhaylis Erläuterung der Rechtsgrundsätze des Gelehrten Abdurrahman As-Saʿdi.'
  },
  {
    id: 10, mainCat: 'buecher', category: 'buecher', subcat: 'fiqh',
    name: 'Erläuterung der Grundlagen der islamischen Rechtswissenschaft',
    subtitle: 'Scheich Sulayman Ar-Ruhayli — Usul al-Fiqh',
    price: 12.99, badge: null,
    description: 'Erläuterung der grundlegenden Abhandlung über die Prinzipien der islamischen Rechtswissenschaft des Gelehrten As-Saʿdi.'
  },

  /* ── Düfte & Pflege ── */
  {
    id: 11, mainCat: 'duefte', category: 'duefte', subcat: 'misk',
    name: 'Misk al-Abyad',
    subtitle: 'Weißer Moschus — 12 ml',
    price: 18.90, badge: 'Bestseller',
    description: 'Reiner weißer Moschus, ungemischt und ohne Alkohol. Sanfter, anhaltender Duft.'
  },
  {
    id: 12, mainCat: 'duefte', category: 'duefte', subcat: 'oud',
    name: 'Oud al-Khaleeji',
    subtitle: 'Arabisches Oud — 6 ml',
    price: 45.00, badge: null,
    description: 'Authentisches arabisches Oud aus dem Khaleeji-Stil mit warmem, holzigem Charakter.'
  },
  {
    id: 13, mainCat: 'duefte', category: 'duefte', subcat: 'misk',
    name: 'Attar Rose Taif',
    subtitle: 'Rosenöl aus Taif — 3 ml',
    price: 38.00, badge: 'Neu',
    description: 'Hochwertiges Rosenöl aus der berühmten Taif-Rose, rein und konzentriert.'
  },
  {
    id: 14, mainCat: 'duefte', category: 'duefte', subcat: 'misk',
    name: 'Misk Siyah',
    subtitle: 'Schwarzer Moschus — 10 ml',
    price: 22.50, badge: null,
    description: 'Intensiver schwarzer Moschus mit erdigen, herben Noten.'
  },
  {
    id: 15, mainCat: 'duefte', category: 'duefte', subcat: 'oud',
    name: 'Bakhoor Al Haram',
    subtitle: 'Räucherholz-Chips — 40g',
    price: 14.90, badge: null,
    description: 'Premium Räucherholz-Chips für Bakhoor-Brenner. Langhaltender Duft.'
  },
  {
    id: 16, mainCat: 'duefte', category: 'duefte', subcat: 'oud',
    name: 'Amber Oud',
    subtitle: 'Bernstein & Oud — 12 ml',
    price: 35.00, badge: null,
    description: 'Eine luxuriöse Komposition aus Bernstein und Oud, warm und einladend.'
  },
  {
    id: 17, mainCat: 'duefte', category: 'duefte', subcat: 'siwak',
    name: 'Miswak Premium',
    subtitle: 'Salvadora persica — 10er Pack',
    price: 12.90, badge: 'Bestseller',
    description: 'Natürliche Zahnbürste aus dem Arak-Baum (Salvadora persica). 10 Stück im Set.'
  },
  {
    id: 18, mainCat: 'duefte', category: 'duefte', subcat: 'siwak',
    name: 'Miswak XL',
    subtitle: 'Extra lang — 5er Pack',
    price: 8.90, badge: null,
    description: 'Extra lange Miswak-Stäbchen, frisch und hygienisch einzeln verpackt.'
  },
  {
    id: 19, mainCat: 'duefte', category: 'duefte', subcat: 'siwak',
    name: 'Miswak mit Behälter',
    subtitle: 'Hygienehalter inkl.',
    price: 6.90, badge: 'Neu',
    description: 'Einzelner Miswak-Stab mit praktischem Hygiene-Reisebehälter.'
  },
  {
    id: 31, mainCat: 'duefte', category: 'duefte', subcat: 'oud',
    name: 'Bakhoor-Brenner',
    subtitle: 'Keramik, handgefertigt',
    price: 24.00, badge: 'Neu',
    description: 'Handgefertigter Keramik-Bakhoor-Brenner mit traditionellem Muster.'
  },

  /* ── Islamische Kleidung ── */
  {
    id: 20, mainCat: 'kleidung', category: 'kleidung', subcat: 'abayas',
    name: 'Abaya Classic Schwarz',
    subtitle: 'Fließender Krepp — Gr. S–XXL',
    price: 69.90, badge: null,
    description: 'Elegante schwarze Abaya aus hochwertigem Krepp-Stoff, fließend und bequem.'
  },
  {
    id: 21, mainCat: 'kleidung', category: 'kleidung', subcat: 'abayas',
    name: 'Abaya Dubai Stil',
    subtitle: 'Butterfly-Schnitt',
    price: 89.00, badge: 'Neu',
    description: 'Modische Dubai-Abaya im Butterfly-Schnitt, leicht und elegant für jeden Anlass.'
  },
  {
    id: 22, mainCat: 'kleidung', category: 'kleidung', subcat: 'abayas',
    name: 'Abaya mit Stickerei',
    subtitle: 'Handbestickter Saum',
    price: 105.00, badge: null,
    description: 'Handgefertigte Abaya mit goldener Saumbestickung, ideal für besondere Anlässe.'
  },

  /* ── Gebet & Ibadah ── */
  {
    id: 23, mainCat: 'gebet', category: 'gebet', subcat: 'gebetsteppich',
    name: 'Gebetsteppich Medina',
    subtitle: 'Samt, 60×110 cm',
    price: 29.90, badge: 'Bestseller',
    description: 'Hochwertiger Gebetsteppich aus weichem Samt mit Medina-Motiv, rutschfest.'
  },
  {
    id: 24, mainCat: 'gebet', category: 'gebet', subcat: 'gebetsteppich',
    name: 'Reise-Gebetsteppich',
    subtitle: 'Faltbar, 60×100 cm',
    price: 19.90, badge: null,
    description: 'Kompakter, faltbarer Gebetsteppich für unterwegs. Leicht und platzsparend.'
  },
  {
    id: 25, mainCat: 'gebet', category: 'gebet', subcat: 'gebetsteppich',
    name: 'Gebetsteppich Luxus',
    subtitle: 'Kaschmir-Mischung, 70×120 cm',
    price: 59.90, badge: null,
    description: 'Luxuriöser Gebetsteppich aus Kaschmir-Mischgewebe mit orientalischem Muster.'
  },
  {
    id: 26, mainCat: 'gebet', category: 'gebet', subcat: 'tasbih',
    name: 'Tasbih Rosenholz',
    subtitle: '99 Perlen, 8mm',
    price: 14.90, badge: null,
    description: 'Hochwertiger Tasbih aus echtem Rosenholz, 99 Perlen, 8mm Durchmesser.'
  },
  {
    id: 27, mainCat: 'gebet', category: 'gebet', subcat: 'tasbih',
    name: 'Tasbih Olivenholz',
    subtitle: '33 Perlen, handgefertigt',
    price: 11.90, badge: 'Bestseller',
    description: 'Handgefertigter Tasbih aus palästinensischem Olivenholz, 33 Perlen.'
  },
  {
    id: 28, mainCat: 'gebet', category: 'gebet', subcat: 'tasbih',
    name: 'Tasbih Bernstein',
    subtitle: '99 Perlen, Baltischer Bernstein',
    price: 45.00, badge: null,
    description: 'Exklusiver Tasbih aus echtem baltischen Bernstein, 99 Perlen.'
  },

  /* ── Accessoires & Geschenke ── */
  {
    id: 29, mainCat: 'accessoires', category: 'accessoires', subcat: 'dekor',
    name: 'Islamische Wanddeko — Ayat al-Kursi',
    subtitle: 'Holzschnitt, 40×60 cm',
    price: 32.00, badge: null,
    description: 'Dekorativer Ayat al-Kursi-Holzschnitt in arabischer Kalligraphie, natur finish.'
  },
  {
    id: 30, mainCat: 'accessoires', category: 'accessoires', subcat: 'kufis',
    name: 'Kufi-Gebetsmütze',
    subtitle: 'Weiße Baumwolle, Einheitsgröße',
    price: 9.90, badge: null,
    description: 'Klassische weiße Kufi-Mütze aus weicher Baumwolle, bequem und langlebig.'
  }
];

/* ================================================================
   FILTER STATE
   ================================================================ */

var activeFilters = {
  mainCat: '',
  subcat: '',
  maxPrice: 200,
  sort: 'default',
  search: ''
};

/* ================================================================
   FILTER LOGIC
   ================================================================ */

function filterProducts() {
  var results = PRODUCTS.slice();

  if (activeFilters.mainCat) {
    results = results.filter(function(p) { return p.mainCat === activeFilters.mainCat; });
  }
  if (activeFilters.subcat) {
    results = results.filter(function(p) { return p.subcat === activeFilters.subcat; });
  }
  if (activeFilters.search) {
    var q = activeFilters.search.toLowerCase();
    results = results.filter(function(p) {
      return p.name.toLowerCase().indexOf(q) !== -1 ||
             p.subtitle.toLowerCase().indexOf(q) !== -1 ||
             (p.description && p.description.toLowerCase().indexOf(q) !== -1);
    });
  }
  results = results.filter(function(p) { return p.price <= activeFilters.maxPrice; });

  switch (activeFilters.sort) {
    case 'price-asc':  results.sort(function(a, b) { return a.price - b.price; }); break;
    case 'price-desc': results.sort(function(a, b) { return b.price - a.price; }); break;
    case 'name-asc':   results.sort(function(a, b) { return a.name.localeCompare(b.name); }); break;
  }
  return results;
}

function updateFiltersAndRender() {
  var grid = document.getElementById('productsGrid');
  var countEl = document.getElementById('productCount');
  var results = filterProducts();
  renderProducts(grid, results);
  if (countEl) {
    countEl.innerHTML = '<strong>' + results.length + '</strong> Produkt' + (results.length !== 1 ? 'e' : '') + ' gefunden';
  }
}

/* ================================================================
   ICONS & LABELS
   ================================================================ */

function getCategoryIcon(mainCat) {
  var icons = {
    buecher:     '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/></svg>',
    kleidung:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/></svg>',
    duefte:      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-15.6-.5c.59 1.24 1.248 2.439 1.96 3.596m13.68-3.096a19.81 19.81 0 0 1-1.96 3.596M5 19.5h14"/></svg>',
    gebet:       '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/></svg>',
    accessoires: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/></svg>'
  };
  return icons[mainCat] || icons.accessoires;
}

function getCategoryLabel(mainCat) {
  var found = CATEGORY_STRUCTURE.find(function(c) { return c.id === mainCat; });
  return found ? found.label : 'Produkt';
}

function formatPrice(p) {
  return p.toFixed(2).replace('.', ',') + ' €';
}

/* ================================================================
   PRODUCT CARD HTML
   ================================================================ */

function createProductCardHTML(product) {
  var badge = product.badge
    ? '<span class="product-card__badge product-card__badge--' + (product.badge.toLowerCase() === 'neu' ? 'new' : 'bestseller') + '">' + product.badge + '</span>'
    : '';
  var catLabel = getCategoryLabel(product.mainCat);
  var icon = getCategoryIcon(product.mainCat);

  return '<a href="product.html?id=' + product.id + '" class="product-card" data-id="' + product.id + '" data-category="' + product.mainCat + '" data-reveal data-reveal-delay="' + ((product.id % 6) + 1) + '" aria-label="' + product.name + '">' +
    '<div class="product-card__media">' +
      '<div class="product-card__img" data-cat="' + product.mainCat + '">' +
        '<span class="product-card__icon">' + icon + '</span>' +
      '</div>' +
      badge +
      '<svg class="card-corner-accent" viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M0 0 L48 0 L48 48" stroke="rgba(200,151,58,0.6)" stroke-width="0.8" fill="none"/><path d="M12 0 L48 0 L48 36" stroke="rgba(200,151,58,0.4)" stroke-width="0.5" fill="none"/><circle cx="36" cy="12" r="3" fill="none" stroke="rgba(200,151,58,0.5)" stroke-width="0.8"/></svg>' +
    '</div>' +
    '<div class="product-card__body">' +
      '<span class="product-card__category">' + catLabel + '</span>' +
      '<h3 class="product-card__title">' + product.name + '</h3>' +
      '<p class="product-card__subtitle">' + product.subtitle + '</p>' +
      '<div class="product-card__footer">' +
        '<span class="product-card__price">' + formatPrice(product.price) + '</span>' +
        '<button class="btn-add-cart" data-product-id="' + product.id + '" aria-label="' + product.name + ' in den Warenkorb">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/></svg>' +
          'Warenkorb' +
        '</button>' +
      '</div>' +
    '</div>' +
  '</a>';
}

/* ================================================================
   MOBILE GRID FORCE (belt-and-suspenders 2-col on mobile)
   ================================================================ */

function forceGridLayout(container) {
  if (!container) return;
  if (container.id === 'featuredGrid') return;
  if (window.innerWidth <= 640) {
    container.style.setProperty('display', 'flex', 'important');
    container.style.setProperty('flex-wrap', 'wrap', 'important');
    container.style.setProperty('gap', '12px', 'important');
    container.style.setProperty('width', '100%', 'important');
    container.querySelectorAll(':scope > *').forEach(function(card) {
      card.style.setProperty('width', 'calc(50% - 6px)', 'important');
      card.style.setProperty('min-width', '0', 'important');
      card.style.setProperty('flex', 'none', 'important');
      card.style.setProperty('overflow', 'hidden', 'important');
    });
  } else {
    container.style.removeProperty('display');
    container.style.removeProperty('flex-wrap');
    container.style.removeProperty('gap');
    container.style.removeProperty('width');
    container.querySelectorAll(':scope > *').forEach(function(card) {
      card.style.removeProperty('width');
      card.style.removeProperty('min-width');
      card.style.removeProperty('flex');
      card.style.removeProperty('overflow');
    });
  }
}

/* ================================================================
   RENDER PRODUCTS
   ================================================================ */

function renderProducts(container, products) {
  if (!container) return;
  if (products.length === 0) {
    container.innerHTML = '<div class="no-results"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg><p>Keine Produkte gefunden. Bitte ändere die Filter.</p></div>';
    forceGridLayout(container);
    return;
  }
  container.innerHTML = products.map(createProductCardHTML).join('');
  forceGridLayout(container);
  if (window.initReveal) window.initReveal(container);
  if (window.initProductStagger) window.initProductStagger(container);
  if (window.initMagneticButtons) window.initMagneticButtons();
  container.querySelectorAll('.btn-add-cart').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      var id = parseInt(btn.dataset.productId);
      var product = PRODUCTS.find(function(p) { return p.id === id; });
      if (product && window.Cart) window.Cart.add(product);
    });
  });
}

/* ================================================================
   DESKTOP CATEGORY ACCORDION
   ================================================================ */

function buildCategoryAccordion(container) {
  if (!container) return;
  container.innerHTML = '';

  var allBtn = document.createElement('button');
  allBtn.className = 'cat-all-btn' + (activeFilters.mainCat === '' ? ' is-active' : '');
  allBtn.textContent = 'Alle Produkte';
  allBtn.addEventListener('click', function() {
    activeFilters.mainCat = '';
    activeFilters.subcat = '';
    updateFiltersAndRender();
    syncAccordionState(container);
    syncMobileState();
  });
  container.appendChild(allBtn);

  CATEGORY_STRUCTURE.forEach(function(cat) {
    var item = document.createElement('div');
    item.className = 'cat-item';
    item.dataset.catId = cat.id;

    var isActive = activeFilters.mainCat === cat.id;

    var catBtn = document.createElement('button');
    catBtn.className = 'cat-item__btn' + (isActive ? ' is-active' : '');
    catBtn.dataset.cat = cat.id;
    catBtn.innerHTML = '<span>' + cat.label + '</span><svg class="cat-item__chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>';
    catBtn.addEventListener('click', function() {
      var wasActive = activeFilters.mainCat === cat.id;
      activeFilters.mainCat = wasActive ? '' : cat.id;
      activeFilters.subcat = '';
      updateFiltersAndRender();
      syncAccordionState(container);
      syncMobileState();
    });

    var body = document.createElement('div');
    body.className = 'cat-item__body' + (isActive ? ' is-open' : '');

    cat.subcats.forEach(function(sub) {
      var subBtn = document.createElement('button');
      subBtn.className = 'cat-sub-item' + (isActive && activeFilters.subcat === sub.id ? ' is-active' : '');
      subBtn.dataset.subcat = sub.id;
      subBtn.textContent = sub.label;
      subBtn.addEventListener('click', function() {
        activeFilters.mainCat = cat.id;
        activeFilters.subcat = sub.id;
        updateFiltersAndRender();
        syncAccordionState(container);
        syncMobileState();
      });
      body.appendChild(subBtn);
    });

    item.appendChild(catBtn);
    item.appendChild(body);
    container.appendChild(item);
  });
}

function syncAccordionState(container) {
  if (!container) return;
  var allBtn = container.querySelector('.cat-all-btn');
  if (allBtn) allBtn.classList.toggle('is-active', activeFilters.mainCat === '');

  container.querySelectorAll('.cat-item').forEach(function(item) {
    var catId = item.dataset.catId;
    var isActive = activeFilters.mainCat === catId;
    var catBtn = item.querySelector('.cat-item__btn');
    var body = item.querySelector('.cat-item__body');
    if (catBtn) catBtn.classList.toggle('is-active', isActive);
    if (body) body.classList.toggle('is-open', isActive);
    item.querySelectorAll('.cat-sub-item').forEach(function(subBtn) {
      subBtn.classList.toggle('is-active', isActive && subBtn.dataset.subcat === activeFilters.subcat);
    });
  });
}

/* ================================================================
   MOBILE CATEGORY NAV
   ================================================================ */

function buildMobileCatNav() {
  var mobScroll = document.getElementById('mobCatScroll');
  if (!mobScroll) return;
  mobScroll.innerHTML = '';

  var allBtn = document.createElement('button');
  allBtn.className = 'mob-cat-btn' + (activeFilters.mainCat === '' ? ' is-active' : '');
  allBtn.textContent = 'Alle';
  allBtn.addEventListener('click', function() {
    activeFilters.mainCat = '';
    activeFilters.subcat = '';
    updateFiltersAndRender();
    syncMobileState();
    syncAccordionState(document.getElementById('catAccordion'));
  });
  mobScroll.appendChild(allBtn);

  CATEGORY_STRUCTURE.forEach(function(cat) {
    var btn = document.createElement('button');
    btn.className = 'mob-cat-btn' + (activeFilters.mainCat === cat.id ? ' is-active' : '');
    btn.dataset.catId = cat.id;
    btn.textContent = cat.label;
    btn.addEventListener('click', function() {
      activeFilters.mainCat = cat.id;
      activeFilters.subcat = '';
      updateFiltersAndRender();
      syncMobileState();
      syncAccordionState(document.getElementById('catAccordion'));
      updateMobileSubcatBar();
    });
    mobScroll.appendChild(btn);
  });
}

function updateMobileSubcatBar() {
  var subWrap = document.getElementById('mobSubcatWrap');
  var subBar = document.getElementById('mobSubcatScroll');
  if (!subBar) return;
  subBar.innerHTML = '';

  if (!activeFilters.mainCat) {
    if (subWrap) subWrap.style.display = 'none';
    return;
  }
  var cat = CATEGORY_STRUCTURE.find(function(c) { return c.id === activeFilters.mainCat; });
  if (!cat) {
    if (subWrap) subWrap.style.display = 'none';
    return;
  }
  if (subWrap) subWrap.style.display = '';

  var allSubBtn = document.createElement('button');
  allSubBtn.className = 'mob-subcat-btn' + (activeFilters.subcat === '' ? ' is-active' : '');
  allSubBtn.textContent = 'Alle';
  allSubBtn.addEventListener('click', function() {
    activeFilters.subcat = '';
    updateFiltersAndRender();
    syncMobileSubcatState();
    syncAccordionState(document.getElementById('catAccordion'));
  });
  subBar.appendChild(allSubBtn);

  cat.subcats.forEach(function(sub) {
    var btn = document.createElement('button');
    btn.className = 'mob-subcat-btn' + (activeFilters.subcat === sub.id ? ' is-active' : '');
    btn.dataset.subcat = sub.id;
    btn.textContent = sub.label;
    btn.addEventListener('click', function() {
      activeFilters.subcat = sub.id;
      updateFiltersAndRender();
      syncMobileSubcatState();
      syncAccordionState(document.getElementById('catAccordion'));
    });
    subBar.appendChild(btn);
  });
}

function syncMobileState() {
  var mobScroll = document.getElementById('mobCatScroll');
  if (mobScroll) {
    mobScroll.querySelectorAll('.mob-cat-btn').forEach(function(btn) {
      var catId = btn.dataset.catId || '';
      btn.classList.toggle('is-active', catId === activeFilters.mainCat);
    });
  }
  updateMobileSubcatBar();
}

function syncMobileSubcatState() {
  var subBar = document.getElementById('mobSubcatScroll');
  if (!subBar) return;
  subBar.querySelectorAll('.mob-subcat-btn').forEach(function(btn) {
    var subId = btn.dataset.subcat || '';
    btn.classList.toggle('is-active', subId === activeFilters.subcat);
  });
}

/* ================================================================
   SHOP INIT
   ================================================================ */

function initShop() {
  var grid = document.getElementById('productsGrid');
  if (!grid) return;

  var accordion = document.getElementById('catAccordion');
  buildCategoryAccordion(accordion);
  buildMobileCatNav();
  updateMobileSubcatBar();

  /* Search */
  var searchInput = document.getElementById('shopSearch');
  if (searchInput) {
    var debounce;
    searchInput.addEventListener('input', function() {
      clearTimeout(debounce);
      debounce = setTimeout(function() {
        activeFilters.search = searchInput.value.trim();
        updateFiltersAndRender();
      }, 250);
    });
  }

  /* Price range */
  var priceRange = document.getElementById('priceRange');
  var priceDisplay = document.getElementById('priceDisplay');
  if (priceRange) {
    priceRange.addEventListener('input', function() {
      activeFilters.maxPrice = parseInt(priceRange.value);
      if (priceDisplay) priceDisplay.textContent = 'bis ' + formatPrice(activeFilters.maxPrice);
      updateFiltersAndRender();
    });
  }

  /* Sort */
  var sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      activeFilters.sort = sortSelect.value;
      updateFiltersAndRender();
    });
  }

  /* Mobile sidebar toggle */
  var filterToggleBtn = document.getElementById('filterToggleBtn');
  var shopSidebar = document.getElementById('shopSidebar');
  var sidebarOverlay = document.getElementById('sidebarOverlay');
  if (filterToggleBtn && shopSidebar) {
    filterToggleBtn.addEventListener('click', function() {
      shopSidebar.classList.toggle('is-open');
      if (sidebarOverlay) sidebarOverlay.classList.toggle('is-visible');
    });
  }
  if (sidebarOverlay) {
    sidebarOverlay.addEventListener('click', function() {
      if (shopSidebar) shopSidebar.classList.remove('is-open');
      sidebarOverlay.classList.remove('is-visible');
    });
  }

  /* Reset */
  var resetBtn = document.getElementById('resetFilters');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      activeFilters.mainCat = '';
      activeFilters.subcat = '';
      activeFilters.maxPrice = 200;
      activeFilters.sort = 'default';
      activeFilters.search = '';
      if (searchInput) searchInput.value = '';
      if (priceRange) priceRange.value = 200;
      if (priceDisplay) priceDisplay.textContent = 'bis 200,00 €';
      if (sortSelect) sortSelect.value = 'default';
      syncAccordionState(accordion);
      syncMobileState();
      updateFiltersAndRender();
    });
  }

  /* URL param: pre-select main category */
  var params = new URLSearchParams(window.location.search);
  var catParam = params.get('cat');
  if (catParam) {
    var found = CATEGORY_STRUCTURE.find(function(c) { return c.id === catParam; });
    if (found) {
      activeFilters.mainCat = catParam;
      syncAccordionState(accordion);
      syncMobileState();
    }
  }

  updateFiltersAndRender();
}

/* ================================================================
   FEATURED PRODUCTS (homepage)
   ================================================================ */

function initFeaturedProducts() {
  var grid = document.getElementById('featuredGrid');
  if (!grid) return;
  var featured = PRODUCTS.filter(function(p) { return p.badge === 'Bestseller'; }).slice(0, 4);
  renderProducts(grid, featured.length >= 4 ? featured : PRODUCTS.slice(0, 4));
}

/* ================================================================
   BOOT
   ================================================================ */

document.addEventListener('DOMContentLoaded', function() {
  initShop();
  initFeaturedProducts();
});

window.addEventListener('resize', function() {
  ['productsGrid', 'featuredGrid', 'relatedGrid'].forEach(function(id) {
    var g = document.getElementById(id);
    if (g) forceGridLayout(g);
  });
}, { passive: true });

window.PRODUCTS = PRODUCTS;
window.CATEGORY_STRUCTURE = CATEGORY_STRUCTURE;
window.formatPrice = formatPrice;
window.getCategoryIcon = getCategoryIcon;
window.getCategoryLabel = getCategoryLabel;
window.renderProducts = renderProducts;
window.forceGridLayout = forceGridLayout;

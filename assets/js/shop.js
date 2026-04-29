/* ================================================================
   MAKTABAH AL MANSURAH — Shop / Product Data
   ================================================================ */

'use strict';

const PRODUCTS = [
  /* ── Bücher ── */
  {
    id: 1, category: 'buecher',
    name: 'Die Heilmittel zur Geduld gegen das Übel der Geschöpfe',
    subtitle: 'Ibn Taymiyyah',
    price: 7.99, badge: null,
    description: 'Ein bedeutendes Werk des Gelehrten Ibn Taymiyyah über Geduld und den Umgang mit den Schwierigkeiten des Lebens.'
  },
  {
    id: 2, category: 'buecher',
    name: 'An-Nawawīs vierzig Ḥadīṯe',
    subtitle: 'Imam ʾAbū Zakariyyā an-Nawawī — Mit Notizfeldern',
    price: 14.99, badge: 'Bestseller',
    description: 'Die berühmten 40 Hadithe des Imam an-Nawawi — mit Notizfeldern für eigene Reflexionen.'
  },
  {
    id: 3, category: 'buecher',
    name: 'Mittel zum Erreichen eines glücklichen Familienlebens',
    subtitle: 'Sheikh Ruhayli',
    price: 13.99, badge: null,
    description: 'Wertvolle Ratschläge des Gelehrten Sheikh Ruhayli für ein harmonisches Familienleben nach islamischen Werten.'
  },
  {
    id: 4, category: 'buecher',
    name: 'Die essenziellen Unterrichte für die muslimische Gemeinschaft',
    subtitle: 'Sheikh Ibn Baz',
    price: 8.99, badge: null,
    description: 'Grundlegende Unterrichte des Großgelehrten Sheikh Ibn Baz für die muslimische Gemeinschaft.'
  },
  {
    id: 5, category: 'buecher',
    name: 'Die drei fundamentalen Grundlagen und ihre Beweise',
    subtitle: 'Muhammad ibn Abdulwahab',
    price: 8.99, badge: 'Bestseller',
    description: 'Das klassische Werk über die drei fundamentalen Grundlagen des Islam und ihre Beweise aus Quran und Sunnah.'
  },
  {
    id: 6, category: 'buecher',
    name: 'Kitāb-ut Tauḥīd — Das Buch des Monotheismus',
    subtitle: 'Muḥammad Ibn ʿAbd-il Wahhāb',
    price: 27.99, badge: null,
    description: 'Das grundlegende Werk über Tauhid — eines der wichtigsten Bücher der islamischen Glaubenslehre.'
  },
  {
    id: 7, category: 'buecher',
    name: 'Erläuterung der Beschreibung des Gebets des Propheten ﷺ von Al-Albani',
    subtitle: 'Scheich Sulayman Ar-Ruhayli',
    price: 12.99, badge: 'Neu',
    description: 'Eine ausführliche Erläuterung der Gebetsbeschreibung des Propheten Muhammad ﷺ von Scheich Ar-Ruhayli.'
  },
  {
    id: 8, category: 'buecher',
    name: 'Al-ʿUmdah fil-Ahkam — Taschenformat',
    subtitle: 'Verlag Dar Al-Mirath An-Nabawi',
    price: 7.99, badge: null,
    description: 'Die wichtigsten Rechtsnormen in kompakter Taschenformat-Ausgabe — ideal für unterwegs.'
  },
  {
    id: 9, category: 'buecher',
    name: 'Erläuterung der Gedichtsammlung der Rechtsgrundsätze (As-Saʿdi)',
    subtitle: 'Scheich Sulayman Ar-Ruhayli',
    price: 12.99, badge: null,
    description: 'Scheich Ar-Ruhaylis Erläuterung der Rechtsgrundsätze des Gelehrten Abdurrahman As-Saʿdi.'
  },
  {
    id: 10, category: 'buecher',
    name: 'Erläuterung der Grundlagen der islamischen Rechtswissenschaft',
    subtitle: 'Scheich Sulayman Ar-Ruhayli — Usul al-Fiqh',
    price: 12.99, badge: null,
    description: 'Erläuterung der grundlegenden Abhandlung über die Prinzipien der islamischen Rechtswissenschaft des Gelehrten As-Saʿdi.'
  },

  /* ── Parfüm & Misk ── */
  {
    id: 11, category: 'parfum',
    name: 'Misk al-Abyad',
    subtitle: 'Weißer Moschus — 12 ml',
    price: 18.90, badge: 'Bestseller',
    description: 'Reiner weißer Moschus, ungemischt und ohne Alkohol. Sanfter, anhaltender Duft.'
  },
  {
    id: 12, category: 'parfum',
    name: 'Oud al-Khaleeji',
    subtitle: 'Arabisches Oud — 6 ml',
    price: 45.00, badge: null,
    description: 'Authentisches arabisches Oud aus dem Khaleeji-Stil mit warmem, holzigem Charakter.'
  },
  {
    id: 13, category: 'parfum',
    name: 'Attar Rose Taif',
    subtitle: 'Rosenöl aus Taif — 3 ml',
    price: 38.00, badge: 'Neu',
    description: 'Hochwertiges Rosenöl aus der berühmten Taif-Rose, rein und konzentriert.'
  },
  {
    id: 14, category: 'parfum',
    name: 'Misk Siyah',
    subtitle: 'Schwarzer Moschus — 10 ml',
    price: 22.50, badge: null,
    description: 'Intensiver schwarzer Moschus mit erdigen, herben Noten.'
  },
  {
    id: 15, category: 'parfum',
    name: 'Bakhoor Al Haram',
    subtitle: 'Räucherholz-Chips — 40g',
    price: 14.90, badge: null,
    description: 'Premium Räucherholz-Chips für Bakhoor-Brenner. Langhaltender Duft.'
  },
  {
    id: 16, category: 'parfum',
    name: 'Amber Oud',
    subtitle: 'Bernstein & Oud — 12 ml',
    price: 35.00, badge: null,
    description: 'Eine luxuriöse Komposition aus Bernstein und Oud, warm und einladend.'
  },

  /* ── Miswak ── */
  {
    id: 17, category: 'miswak',
    name: 'Miswak Premium',
    subtitle: 'Salvadora persica — 10er Pack',
    price: 12.90, badge: 'Bestseller',
    description: 'Natürliche Zahnbürste aus dem Arak-Baum (Salvadora persica). 10 Stück im Set.'
  },
  {
    id: 18, category: 'miswak',
    name: 'Miswak XL',
    subtitle: 'Extra lang — 5er Pack',
    price: 8.90, badge: null,
    description: 'Extra lange Miswak-Stäbchen, frisch und hygienisch einzeln verpackt.'
  },
  {
    id: 19, category: 'miswak',
    name: 'Miswak mit Behälter',
    subtitle: 'Hygienehalter inkl.',
    price: 6.90, badge: 'Neu',
    description: 'Einzelner Miswak-Stab mit praktischem Hygiene-Reisebehälter.'
  },

  /* ── Abayas ── */
  {
    id: 20, category: 'abaya',
    name: 'Abaya Classic Schwarz',
    subtitle: 'Fließender Krepp — Gr. S–XXL',
    price: 69.90, badge: null,
    description: 'Elegante schwarze Abaya aus hochwertigem Krepp-Stoff, fließend und bequem.'
  },
  {
    id: 21, category: 'abaya',
    name: 'Abaya Dubai Stil',
    subtitle: 'Butterfly-Schnitt',
    price: 89.00, badge: 'Neu',
    description: 'Modische Dubai-Abaya im Butterfly-Schnitt, leicht und elegant für jeden Anlass.'
  },
  {
    id: 22, category: 'abaya',
    name: 'Abaya mit Stickerei',
    subtitle: 'Handbestickter Saum',
    price: 105.00, badge: null,
    description: 'Handgefertigte Abaya mit goldener Saumbestickung, ideal für besondere Anlässe.'
  },

  /* ── Gebetsteppiche ── */
  {
    id: 23, category: 'gebetsteppich',
    name: 'Gebetsteppich Medina',
    subtitle: 'Samt, 60×110 cm',
    price: 29.90, badge: 'Bestseller',
    description: 'Hochwertiger Gebetsteppich aus weichem Samt mit Medina-Motiv, rutschfest.'
  },
  {
    id: 24, category: 'gebetsteppich',
    name: 'Reise-Gebetsteppich',
    subtitle: 'Faltbar, 60×100 cm',
    price: 19.90, badge: null,
    description: 'Kompakter, faltbarer Gebetsteppich für unterwegs. Leicht und platzsparend.'
  },
  {
    id: 25, category: 'gebetsteppich',
    name: 'Gebetsteppich Luxus',
    subtitle: 'Kaschmir-Mischung, 70×120 cm',
    price: 59.90, badge: null,
    description: 'Luxuriöser Gebetsteppich aus Kaschmir-Mischgewebe mit orientalischem Muster.'
  },

  /* ── Tasbihs ── */
  {
    id: 26, category: 'tasbih',
    name: 'Tasbih Rosenholz',
    subtitle: '99 Perlen, 8mm',
    price: 14.90, badge: null,
    description: 'Hochwertiger Tasbih aus echtem Rosenholz, 99 Perlen, 8mm Durchmesser.'
  },
  {
    id: 27, category: 'tasbih',
    name: 'Tasbih Olivenholz',
    subtitle: '33 Perlen, handgefertigt',
    price: 11.90, badge: 'Bestseller',
    description: 'Handgefertigter Tasbih aus palästinensischem Olivenholz, 33 Perlen.'
  },
  {
    id: 28, category: 'tasbih',
    name: 'Tasbih Bernstein',
    subtitle: '99 Perlen, Baltischer Bernstein',
    price: 45.00, badge: null,
    description: 'Exklusiver Tasbih aus echtem baltischen Bernstein, 99 Perlen.'
  },

  /* ── Sonstiges ── */
  {
    id: 29, category: 'sonstiges',
    name: 'Islamische Wanddeko — Ayat al-Kursi',
    subtitle: 'Holzschnitt, 40×60 cm',
    price: 32.00, badge: null,
    description: 'Dekorativer Ayat al-Kursi-Holzschnitt in arabischer Kalligraphie, natur finish.'
  },
  {
    id: 30, category: 'sonstiges',
    name: 'Kufi-Gebetsmütze',
    subtitle: 'Weiße Baumwolle, Einheitsgröße',
    price: 9.90, badge: null,
    description: 'Klassische weiße Kufi-Mütze aus weicher Baumwolle, bequem und langlebig.'
  },
  {
    id: 31, category: 'sonstiges',
    name: 'Bakhoor-Brenner',
    subtitle: 'Keramik, handgefertigt',
    price: 24.00, badge: 'Neu',
    description: 'Handgefertigter Keramik-Bakhoor-Brenner mit traditionellem Muster.'
  }
];

/* ================================================================
   FILTER & RENDER LOGIC
   ================================================================ */

var activeFilters = {
  categories: [],
  maxPrice: 200,
  sort: 'default'
};

function filterProducts() {
  let results = [...PRODUCTS];

  if (activeFilters.categories.length > 0) {
    results = results.filter(p => activeFilters.categories.includes(p.category));
  }

  results = results.filter(p => p.price <= activeFilters.maxPrice);

  switch (activeFilters.sort) {
    case 'price-asc':  results.sort((a, b) => a.price - b.price); break;
    case 'price-desc': results.sort((a, b) => b.price - a.price); break;
    case 'name-asc':   results.sort((a, b) => a.name.localeCompare(b.name)); break;
    default: break;
  }

  return results;
}

function getCategoryIcon(cat) {
  const icons = {
    buecher:       `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/></svg>`,
    parfum:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-15.6-.5c.59 1.24 1.248 2.439 1.96 3.596m13.68-3.096a19.81 19.81 0 0 1-1.96 3.596M5 19.5h14"/></svg>`,
    miswak:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6 7.5-7.5 7.5 7.5"/></svg>`,
    abaya:         `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/></svg>`,
    gebetsteppich: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"/></svg>`,
    tasbih:        `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="7" r="1.5" fill="currentColor"/><circle cx="16.24" cy="9.75" r="1.5" fill="currentColor"/><circle cx="16.24" cy="14.25" r="1.5" fill="currentColor"/><circle cx="12" cy="17" r="1.5" fill="currentColor"/><circle cx="7.76" cy="14.25" r="1.5" fill="currentColor"/><circle cx="7.76" cy="9.75" r="1.5" fill="currentColor"/></svg>`,
    sonstiges:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"/></svg>`
  };
  return icons[cat] || icons.sonstiges;
}

function getCategoryLabel(cat) {
  const labels = {
    buecher: 'Bücher', parfum: 'Parfüm & Misk', miswak: 'Miswak',
    abaya: 'Abayas', gebetsteppich: 'Gebetsteppich', tasbih: 'Tasbih', sonstiges: 'Sonstiges'
  };
  return labels[cat] || cat;
}

function formatPrice(p) {
  return p.toFixed(2).replace('.', ',') + ' €';
}

function createProductCardHTML(product) {
  const badge = product.badge
    ? `<span class="product-card__badge product-card__badge--${product.badge.toLowerCase() === 'neu' ? 'new' : product.badge.toLowerCase() === 'bestseller' ? 'bestseller' : 'new'}">${product.badge}</span>`
    : '';

  return `
    <article class="product-card" data-id="${product.id}" data-category="${product.category}" data-reveal data-reveal-delay="${(product.id % 6) + 1}">
      <div class="product-card__media">
        <div class="product-card__img" data-cat="${product.category}">
          <span class="product-card__icon">${getCategoryIcon(product.category)}</span>
        </div>
        ${badge}
        <svg class="card-corner-accent" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <path d="M0 0 L48 0 L48 48" stroke="rgba(200,151,58,0.6)" stroke-width="0.8" fill="none"/>
          <path d="M12 0 L48 0 L48 36" stroke="rgba(200,151,58,0.4)" stroke-width="0.5" fill="none"/>
          <circle cx="36" cy="12" r="3" fill="none" stroke="rgba(200,151,58,0.5)" stroke-width="0.8"/>
        </svg>
      </div>
      <div class="product-card__body">
        <span class="product-card__category">${getCategoryLabel(product.category)}</span>
        <h3 class="product-card__title">${product.name}</h3>
        <p class="product-card__subtitle">${product.subtitle}</p>
        <div class="product-card__footer">
          <span class="product-card__price">${formatPrice(product.price)}</span>
          <button class="btn-add-cart" data-product-id="${product.id}" aria-label="${product.name} in den Warenkorb">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/></svg>
            Warenkorb
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderProducts(container, products) {
  if (!container) return;

  if (products.length === 0) {
    container.innerHTML = `
      <div class="no-results">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>
        <p>Keine Produkte gefunden. Bitte ändere die Filter.</p>
      </div>`;
    return;
  }

  container.innerHTML = products.map(createProductCardHTML).join('');

  if (window.initReveal) window.initReveal(container);
  if (window.initProductStagger) window.initProductStagger(container);
  if (window.initMagneticButtons) window.initMagneticButtons();

  container.querySelectorAll('.btn-add-cart').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = parseInt(btn.dataset.productId);
      const product = PRODUCTS.find(p => p.id === id);
      if (product && window.Cart) window.Cart.add(product);
    });
  });
}

/* ── Shop page init ── */
function initShop() {
  const grid = document.getElementById('productsGrid');
  const countEl = document.getElementById('productCount');
  const sortSelect = document.getElementById('sortSelect');
  const priceRange = document.getElementById('priceRange');
  const priceDisplay = document.getElementById('priceDisplay');
  const filterToggleBtn = document.getElementById('filterToggleBtn');
  const shopSidebar = document.getElementById('shopSidebar');

  if (!grid) return;

  function update() {
    const results = filterProducts();
    renderProducts(grid, results);
    if (countEl) {
      countEl.innerHTML = `<strong>${results.length}</strong> Produkt${results.length !== 1 ? 'e' : ''} gefunden`;
    }
  }

  /* Category checkboxes */
  document.querySelectorAll('.filter-cat').forEach(cb => {
    cb.addEventListener('change', () => {
      activeFilters.categories = Array.from(
        document.querySelectorAll('.filter-cat:checked')
      ).map(el => el.value);
      update();
    });
  });

  /* Price range */
  if (priceRange) {
    priceRange.addEventListener('input', () => {
      activeFilters.maxPrice = parseInt(priceRange.value);
      if (priceDisplay) priceDisplay.textContent = 'bis ' + formatPrice(activeFilters.maxPrice);
      update();
    });
  }

  /* Sort */
  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      activeFilters.sort = sortSelect.value;
      update();
    });
  }

  /* Mobile filter toggle */
  if (filterToggleBtn && shopSidebar) {
    filterToggleBtn.addEventListener('click', () => {
      shopSidebar.classList.toggle('is-open');
    });
  }

  update();
}

/* ── Featured products (homepage) ── */
function initFeaturedProducts() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = PRODUCTS.filter(p => p.badge === 'Bestseller').slice(0, 4);
  renderProducts(grid, featured.length >= 4 ? featured : PRODUCTS.slice(0, 4));
}

document.addEventListener('DOMContentLoaded', () => {
  initShop();
  initFeaturedProducts();
});

window.PRODUCTS = PRODUCTS;
window.formatPrice = formatPrice;
window.getCategoryIcon = getCategoryIcon;
window.getCategoryLabel = getCategoryLabel;

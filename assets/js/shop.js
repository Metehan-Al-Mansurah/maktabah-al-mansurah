(function () {
  'use strict';

  /* ═══════════════════════════════════════
     CATEGORY STRUCTURE
  ════════════════════════════════════════ */
  var CATEGORY_STRUCTURE = [
    {
      id: 'buecher', label: 'Islamische Bücher',
      icon: '<path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>',
      subcats: [
        { id: 'aqidah', label: 'Aqidah & Tawhid' },
        { id: 'fiqh',   label: 'Fiqh & Usul' },
        { id: 'hadith', label: 'Hadith' }
      ]
    }
  ];

  /* ═══════════════════════════════════════
     PRODUCTS
  ════════════════════════════════════════ */
  var PRODUCTS = [
    {
      id: 1,
      mainCat: 'buecher', subcat: 'aqidah',
      name: 'Die Heilmittel zur Geduld gegen das Übel der Geschöpfe',
      subtitle: 'Ibn Taymiyyah',
      price: 7.99,
      badge: null,
      coverFrom: '#1A4030', coverTo: '#061510',
      description: 'Ibn Taymiyyahs zeitloses Werk über die Tugend der Geduld und den Umgang mit dem Unrecht der Menschen. Der Gläubige lernt, durch Geduld, Vergebung und Gottvertrauen innere Stärke zu erlangen — ein unverzichtbarer Ratgeber für jeden Muslim.'
    },
    {
      id: 2,
      mainCat: 'buecher', subcat: 'hadith',
      name: 'An-Nawawīs vierzig Ḥadīṯe',
      subtitle: 'Imam Abū Zakariyyā an-Nawawī · Mit Notizfeldern',
      price: 14.99,
      badge: 'Bestseller',
      coverFrom: '#0F2840', coverTo: '#061525',
      description: 'Die berühmteste Hadithsammlung des Imam an-Nawawi — 42 ausgewählte Hadithe, die den Islam in seiner Gesamtheit zusammenfassen. Diese besondere Ausgabe beinhaltet Notizfelder für eigene Reflexionen und persönliche Anmerkungen.'
    },
    {
      id: 3,
      mainCat: 'buecher', subcat: 'fiqh',
      name: 'Mittel zum Erreichen eines glücklichen Familienlebens',
      subtitle: 'Scheich Sulayman Ar-Ruhayli',
      price: 13.99,
      badge: null,
      coverFrom: '#2A1A0A', coverTo: '#0E0805',
      description: 'Praktische und zeitgemäße Ratschläge für ein harmonisches Familienleben auf der Grundlage von Quran und Sunnah. Scheich Ar-Ruhayli erläutert die islamischen Prinzipien für eine glückliche Ehe, gegenseitigen Respekt und verantwortungsvolle Familienfürsorge.'
    },
    {
      id: 4,
      mainCat: 'buecher', subcat: 'aqidah',
      name: 'Die essenziellen Unterrichte für die muslimische Gemeinschaft',
      subtitle: 'Scheich Ibn Baz',
      price: 8.99,
      badge: null,
      coverFrom: '#142A1A', coverTo: '#06100A',
      description: 'Grundlegende Lektionen für den muslimischen Alltag vom renommierten Großgelehrten Scheich Ibn Baz. Ein kompaktes Werk mit wesentlichen Prinzipien des islamischen Glaubens, der Ibadah und der praktischen Lebensführung nach Quran und Sunnah.'
    },
    {
      id: 5,
      mainCat: 'buecher', subcat: 'aqidah',
      name: 'Die drei fundamentalen Grundlagen und ihre Beweise',
      subtitle: 'Muhammad ibn Abdulwahhab',
      price: 8.99,
      badge: null,
      coverFrom: '#162E20', coverTo: '#070E0A',
      description: 'Das grundlegende Werk zur islamischen Glaubenslehre. Die drei fundamentalen Fragen — Wer ist dein Herr? Was ist deine Religion? Wer ist dein Prophet? — werden mit klaren Beweisen aus Quran und Sunnah beantwortet. Pflichtlektüre für jeden Muslim.'
    },
    {
      id: 6,
      mainCat: 'buecher', subcat: 'aqidah',
      name: 'Kitāb-ut Tauḥīd — Das Buch des Monotheismus',
      subtitle: 'Muḥammad Ibn ʿAbd-il Wahhāb',
      price: 27.99,
      badge: 'Premium',
      coverFrom: '#1E1A06', coverTo: '#0A0905',
      description: 'Das wichtigste Werk zur islamischen Glaubenslehre des Tawhid — einer der bedeutendsten Texte der islamischen Literatur überhaupt. Eine umfassende und tiefgründige Abhandlung über den reinen Monotheismus, seine Grundlagen und die Verwerfung jeglichen Schirks.'
    },
    {
      id: 7,
      mainCat: 'buecher', subcat: 'fiqh',
      name: 'Erläuterung der Zusammenfassung der Beschreibung des Gebets des Propheten ﷺ',
      subtitle: 'Scheich Sulayman Ar-Ruhayli',
      price: 12.99,
      badge: null,
      coverFrom: '#0F2828', coverTo: '#051010',
      description: 'Eine detaillierte Erläuterung der prophetischen Art des Gebets — von der rituellen Reinheit bis zum abschließenden Tasleem. Scheich Ar-Ruhayli erklärt jeden Schritt des Gebets auf Basis der authentischen Sunnah, sodass jeder Muslim das Gebet korrekt verrichten kann.'
    },
    {
      id: 8,
      mainCat: 'buecher', subcat: 'hadith',
      name: 'Al-ʿUmdah fil-Aḥkām',
      subtitle: 'Dar Al-Mirath An-Nabawi · Taschenformat',
      price: 7.99,
      badge: null,
      coverFrom: '#1A1A2A', coverTo: '#080810',
      description: 'Ein kompaktes Taschenformat des klassischen Werkes Al-Umdah fil-Ahkam — sorgfältig ausgewählte authentische Hadithe zu Ibadah, Reinheit, Gebet und islamischen Rechtsfragen. Ideal für das tägliche Studium und den praktischen Gebrauch unterwegs.'
    },
    {
      id: 9,
      mainCat: 'buecher', subcat: 'fiqh',
      name: 'Erläuterung der Gedichtsammlung der Rechtsgrundsätze des Gelehrten Abdurrahman As-Saʿdī',
      subtitle: 'Scheich Sulayman Ar-Ruhayli',
      price: 12.99,
      badge: null,
      coverFrom: '#1A2820', coverTo: '#080D0A',
      description: 'Eine ausführliche Erläuterung der Gedichtsammlung über die islamischen Rechtsgrundsätze (Al-Qawa\'id al-Fiqhiyyah) des Gelehrten As-Sa\'di. Scheich Ar-Ruhayli erschließt die tiefgründigen Grundprinzipien des islamischen Rechts auf verständliche und anwendbare Weise.'
    },
    {
      id: 10,
      mainCat: 'buecher', subcat: 'fiqh',
      name: 'Erläuterung der Abhandlung über die Grundlagen der Rechtswissenschaft (Usūl al-Fiqh) des Gelehrten As-Saʿdī',
      subtitle: 'Scheich Sulayman Ar-Ruhayli',
      price: 12.99,
      badge: null,
      coverFrom: '#1E2018', coverTo: '#0A0B09',
      description: 'Eine umfassende Erläuterung der Grundlagen der islamischen Rechtswissenschaft (Usul al-Fiqh) auf Basis des klassischen Werkes des Gelehrten As-Sa\'di. Für Studierende und Interessierte der islamischen Wissenschaften, die die Methodik der Rechtsableitung verstehen möchten.'
    }
  ];

  window.PRODUCTS = PRODUCTS;
  window.CATEGORY_STRUCTURE = CATEGORY_STRUCTURE;

  /* ═══════════════════════════════════════
     STATE
  ════════════════════════════════════════ */
  var activeFilters = { mainCat: '', subcat: '', search: '', maxPrice: 30, sort: 'default' };
  var wishlist = [];
  var searchTimer = null;

  /* ═══════════════════════════════════════
     UTILS
  ════════════════════════════════════════ */
  function fmt(n) { return n.toFixed(2).replace('.', ',') + ' €'; }
  function esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

  function getCat(catId) { return CATEGORY_STRUCTURE.find(function (c) { return c.id === catId; }); }
  function getSub(catId, subId) {
    var cat = getCat(catId);
    return cat ? cat.subcats.find(function (s) { return s.id === subId; }) : null;
  }

  function badgeSlug(b) {
    return b.toLowerCase()
      .replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue')
      .replace(/\s+/g,'-');
  }

  /* ═══════════════════════════════════════
     BOOK COVER HTML
  ════════════════════════════════════════ */
  var STAR_POINTS = '20,1 22.2,13.2 32,7 26.2,16.5 39,20 26.2,23.5 32,33 22.2,26.8 20,39 17.8,26.8 8,33 13.8,23.5 1,20 13.8,16.5 8,7 17.8,13.2';

  function bookCoverHtml(product, large) {
    var titleStyle = large ? 'font-size:0.88rem;-webkit-line-clamp:6;' : '';
    return '<div class="book-cvr' + (large ? ' book-cvr--lg' : '') + '" aria-hidden="true">' +
      '<svg class="book-cvr__star" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<polygon points="' + STAR_POINTS + '" fill="none" stroke="currentColor" stroke-width="0.9"/>' +
      '</svg>' +
      '<div class="book-cvr__text">' +
        '<p class="book-cvr__title"' + (titleStyle ? ' style="' + titleStyle + '"' : '') + '>' + esc(product.name) + '</p>' +
        '<span class="book-cvr__rule"></span>' +
        '<p class="book-cvr__author">' + esc(product.subtitle || '') + '</p>' +
      '</div>' +
      '<p class="book-cvr__pub">مكتبة المنصورة</p>' +
    '</div>';
  }

  function coverStyle(product) {
    return 'background:linear-gradient(155deg,' + (product.coverFrom || '#0D2016') + ' 0%,' + (product.coverTo || '#040A08') + ' 100%);';
  }

  /* ═══════════════════════════════════════
     WISHLIST
  ════════════════════════════════════════ */
  function loadWishlist() {
    try { wishlist = JSON.parse(localStorage.getItem('mam_wishlist') || '[]'); }
    catch (e) { wishlist = []; }
  }
  function saveWishlist() { localStorage.setItem('mam_wishlist', JSON.stringify(wishlist)); }

  function toggleWishlist(id) {
    var idx = wishlist.indexOf(id);
    if (idx === -1) wishlist.push(id); else wishlist.splice(idx, 1);
    saveWishlist();
    var isActive = wishlist.indexOf(id) !== -1;
    document.querySelectorAll('.wishlist-btn[data-id="' + id + '"]').forEach(function (btn) {
      btn.classList.toggle('is-active', isActive);
      var svg = btn.querySelector('svg');
      if (svg) svg.setAttribute('fill', isActive ? 'currentColor' : 'none');
    });
  }

  /* ═══════════════════════════════════════
     CARD RENDER
  ════════════════════════════════════════ */
  function renderCard(product) {
    var cat = getCat(product.mainCat);
    var sub = getSub(product.mainCat, product.subcat);
    var catLabel  = cat ? cat.label : '';
    var subLabel  = sub ? sub.label : '';
    var isWished  = wishlist.indexOf(product.id) !== -1;
    var price     = fmt(product.price);

    var badgeHtml = product.badge
      ? '<span class="product-card__badge product-card__badge--' + badgeSlug(product.badge) + '">' + esc(product.badge) + '</span>'
      : '';

    return '<article class="product-card" data-id="' + product.id + '">' +
      '<div class="product-card__media">' +
        '<a href="product.html?id=' + product.id + '" class="product-card__img" data-cat="' + product.mainCat + '" style="' + coverStyle(product) + '">' +
          badgeHtml +
          bookCoverHtml(product, false) +
        '</a>' +
        '<button class="wishlist-btn' + (isWished ? ' is-active' : '') + '" data-id="' + product.id + '" aria-label="Favorit" type="button">' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="' + (isWished ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
        '</button>' +
      '</div>' +
      '<div class="product-card__body">' +
        '<span class="product-card__category">' + esc(catLabel) + (subLabel ? ' · ' + esc(subLabel) : '') + '</span>' +
        '<a href="product.html?id=' + product.id + '" class="product-card__title-link">' +
          '<h3 class="product-card__title">' + esc(product.name) + '</h3>' +
        '</a>' +
        '<p class="product-card__subtitle">' + esc(product.subtitle || '') + '</p>' +
        '<div class="product-card__footer">' +
          '<span class="product-card__price">' + price + '</span>' +
          '<button class="btn-add-cart add-to-cart" data-id="' + product.id + '" type="button">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/></svg>' +
            'Kaufen' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</article>';
  }

  function renderProducts(products) {
    var grid = document.getElementById('productsGrid');
    if (!grid) return;

    var countEl = document.getElementById('productCount');
    if (countEl) countEl.innerHTML = '<strong>' + products.length + '</strong> Produkte';

    if (!products.length) {
      grid.innerHTML =
        '<div class="shop-no-results">' +
          '<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/></svg>' +
          '<p>Keine Produkte gefunden.</p>' +
          '<p style="margin-top:4px;font-size:.7rem;">Passe deine Filter an oder</p>' +
          '<button class="btn btn-ghost btn-sm" style="margin-top:12px;" onclick="document.getElementById(\'resetFilters\').click()">Filter zurücksetzen</button>' +
        '</div>';
      return;
    }
    grid.innerHTML = products.map(renderCard).join('');
  }

  /* ═══════════════════════════════════════
     FILTER LOGIC
  ════════════════════════════════════════ */
  function filterProducts() {
    var r = PRODUCTS.slice();
    if (activeFilters.mainCat) r = r.filter(function (p) { return p.mainCat === activeFilters.mainCat; });
    if (activeFilters.subcat)  r = r.filter(function (p) { return p.subcat  === activeFilters.subcat; });
    if (activeFilters.search) {
      var q = activeFilters.search.toLowerCase();
      r = r.filter(function (p) {
        return p.name.toLowerCase().indexOf(q) !== -1 ||
               (p.subtitle && p.subtitle.toLowerCase().indexOf(q) !== -1);
      });
    }
    r = r.filter(function (p) { return p.price <= activeFilters.maxPrice; });
    switch (activeFilters.sort) {
      case 'price-asc':  r.sort(function (a, b) { return a.price - b.price; }); break;
      case 'price-desc': r.sort(function (a, b) { return b.price - a.price; }); break;
      case 'name-asc':   r.sort(function (a, b) { return a.name.localeCompare(b.name); }); break;
    }
    return r;
  }

  function update() {
    buildAccordion();
    buildMobileNav();
    renderProducts(filterProducts());
  }

  function resetFilters() {
    activeFilters = { mainCat: '', subcat: '', search: '', maxPrice: 30, sort: 'default' };
    var pr = document.getElementById('priceRange');
    if (pr) pr.value = 30;
    var pd = document.getElementById('priceDisplay');
    if (pd) pd.textContent = 'bis 30,00 €';
    var si = document.getElementById('shopSearch');
    if (si) si.value = '';
    var ss = document.getElementById('sortSelect');
    if (ss) ss.value = 'default';
    update();
  }

  /* ═══════════════════════════════════════
     SIDEBAR ACCORDION (desktop)
  ════════════════════════════════════════ */
  function buildAccordion() {
    var el = document.getElementById('catAccordion');
    if (!el) return;

    var html = '<button class="cat-all-btn' + (!activeFilters.mainCat ? ' is-active' : '') + '" id="catAllBtn">Alle Produkte</button>';

    CATEGORY_STRUCTURE.forEach(function (cat) {
      var isOpen = activeFilters.mainCat === cat.id;
      html += '<div class="cat-item' + (isOpen ? ' is-open' : '') + '">' +
        '<button class="cat-item__btn" data-cat="' + cat.id + '">' +
          '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">' + cat.icon + '</svg>' +
          '<span>' + cat.label + '</span>' +
          '<svg class="cat-item__chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg>' +
        '</button>' +
        '<div class="cat-item__body' + (isOpen ? ' is-open' : '') + '">';

      cat.subcats.forEach(function (sub) {
        html += '<button class="cat-sub-item' + (activeFilters.subcat === sub.id ? ' is-active' : '') + '" data-subcat="' + sub.id + '">' + sub.label + '</button>';
      });

      html += '</div></div>';
    });

    el.innerHTML = html;
  }

  /* ═══════════════════════════════════════
     MOBILE NAV
  ════════════════════════════════════════ */
  function buildMobileNav() {
    var scroll = document.getElementById('mobCatScroll');
    if (!scroll) return;

    var html = '<button class="mob-cat-btn' + (!activeFilters.mainCat ? ' is-active' : '') + '" data-cat="" role="tab">Alle</button>';
    CATEGORY_STRUCTURE.forEach(function (cat) {
      html += '<button class="mob-cat-btn' + (activeFilters.mainCat === cat.id ? ' is-active' : '') + '" data-cat="' + cat.id + '" role="tab">' + cat.label + '</button>';
    });
    scroll.innerHTML = html;
    buildMobileSubcats();
  }

  function buildMobileSubcats() {
    var wrap   = document.getElementById('mobSubcatWrap');
    var scroll = document.getElementById('mobSubcatScroll');
    if (!wrap || !scroll) return;

    var cat = getCat(activeFilters.mainCat);
    if (!cat) { wrap.style.display = 'none'; return; }

    wrap.style.display = '';
    var html = '<button class="mob-subcat-btn' + (!activeFilters.subcat ? ' is-active' : '') + '" data-subcat="" role="tab">Alle</button>';
    cat.subcats.forEach(function (sub) {
      html += '<button class="mob-subcat-btn' + (activeFilters.subcat === sub.id ? ' is-active' : '') + '" data-subcat="' + sub.id + '" role="tab">' + sub.label + '</button>';
    });
    scroll.innerHTML = html;
  }

  /* ═══════════════════════════════════════
     SIDEBAR TOGGLE (mobile)
  ════════════════════════════════════════ */
  function openSidebar() {
    var sb = document.getElementById('shopSidebar');
    var ov = document.getElementById('sidebarOverlay');
    if (sb) sb.classList.add('is-open');
    if (ov) { ov.style.display = 'block'; ov.classList.add('is-visible'); }
    document.body.style.overflow = 'hidden';
  }
  function closeSidebar() {
    var sb = document.getElementById('shopSidebar');
    var ov = document.getElementById('sidebarOverlay');
    if (sb) sb.classList.remove('is-open');
    if (ov) { ov.style.display = 'none'; ov.classList.remove('is-visible'); }
    document.body.style.overflow = '';
  }

  /* ═══════════════════════════════════════
     INIT
  ════════════════════════════════════════ */
  function initShop() {
    var grid = document.getElementById('productsGrid');
    if (!grid) return;

    loadWishlist();

    var urlCat = new URLSearchParams(window.location.search).get('cat');
    if (urlCat) activeFilters.mainCat = urlCat;

    buildAccordion();
    buildMobileNav();
    renderProducts(filterProducts());

    /* Price range */
    var pr = document.getElementById('priceRange');
    if (pr) pr.addEventListener('input', function () {
      activeFilters.maxPrice = parseInt(this.value);
      var pd = document.getElementById('priceDisplay');
      if (pd) pd.textContent = 'bis ' + fmt(activeFilters.maxPrice);
      clearTimeout(searchTimer);
      searchTimer = setTimeout(update, 300);
    });

    /* Sort */
    var ss = document.getElementById('sortSelect');
    if (ss) ss.addEventListener('change', function () { activeFilters.sort = this.value; update(); });

    /* Search */
    var si = document.getElementById('shopSearch');
    if (si) si.addEventListener('input', function () {
      clearTimeout(searchTimer);
      var q = this.value.trim();
      searchTimer = setTimeout(function () { activeFilters.search = q; update(); }, 250);
    });

    /* Delegated clicks */
    document.addEventListener('click', function (e) {
      if (e.target.closest('#catAllBtn')) { activeFilters.mainCat = ''; activeFilters.subcat = ''; update(); return; }

      var catBtn = e.target.closest('.cat-item__btn');
      if (catBtn) {
        var c = catBtn.dataset.cat;
        activeFilters.mainCat = (activeFilters.mainCat === c) ? '' : c;
        activeFilters.subcat = '';
        update(); return;
      }

      var subBtn = e.target.closest('.cat-sub-item');
      if (subBtn) { activeFilters.subcat = subBtn.dataset.subcat || ''; update(); return; }

      var mobCat = e.target.closest('.mob-cat-btn');
      if (mobCat) { activeFilters.mainCat = mobCat.dataset.cat || ''; activeFilters.subcat = ''; update(); return; }

      var mobSub = e.target.closest('.mob-subcat-btn');
      if (mobSub) { activeFilters.subcat = mobSub.dataset.subcat || ''; update(); return; }

      var wBtn = e.target.closest('.wishlist-btn');
      if (wBtn) { e.preventDefault(); toggleWishlist(parseInt(wBtn.dataset.id)); return; }

      if (e.target.closest('#filterToggleBtn')) { openSidebar(); return; }
      if (e.target.id === 'sidebarOverlay' || e.target.closest('#sidebarOverlay')) { closeSidebar(); return; }
      if (e.target.closest('#resetFilters')) { resetFilters(); return; }
    });
  }

  /* ═══════════════════════════════════════
     PRODUCT DETAIL PAGE
  ════════════════════════════════════════ */
  function initProductPage() {
    var container = document.getElementById('productDetailContainer');
    if (!container) return;

    loadWishlist();
    var id = parseInt(new URLSearchParams(window.location.search).get('id') || '1');
    var product = PRODUCTS.find(function (p) { return p.id === id; });
    if (!product) { window.location.href = 'shop.html'; return; }

    document.title = product.name + ' — Maktabah Al Mansurah';

    var cat = getCat(product.mainCat);
    var sub = getSub(product.mainCat, product.subcat);
    var catLabel = cat ? cat.label : '';
    var subLabel = sub ? sub.label : '';
    var isWished = wishlist.indexOf(product.id) !== -1;

    var badgeHtml = product.badge
      ? '<span class="product-card__badge product-card__badge--' + badgeSlug(product.badge) + '" style="position:static;display:inline-block;margin-bottom:12px;">' + esc(product.badge) + '</span>'
      : '';

    container.innerHTML =
      '<div class="product-detail-layout">' +
        '<div class="product-detail__media" data-cat="' + product.mainCat + '" style="' + coverStyle(product) + '">' +
          bookCoverHtml(product, true) +
        '</div>' +
        '<div class="product-detail__info">' +
          '<span class="eyebrow">' + esc(catLabel) + (subLabel ? ' · ' + esc(subLabel) : '') + '</span>' +
          (badgeHtml ? '<div style="margin-top:8px;">' + badgeHtml + '</div>' : '') +
          '<h1 style="margin-top:var(--sp-2);font-size:clamp(1.3rem,2.5vw,1.8rem);color:var(--clr-gold-pale);line-height:1.35;">' + esc(product.name) + '</h1>' +
          '<p style="color:var(--clr-text-muted);margin-top:6px;font-size:var(--text-sm);">' + esc(product.subtitle || '') + '</p>' +
          '<p style="font-family:var(--font-display);font-size:1.6rem;color:var(--clr-gold-light);margin-top:var(--sp-3);font-weight:700;">' + fmt(product.price) + '</p>' +
          '<p style="font-size:var(--text-sm);color:var(--clr-text-faint);margin-top:4px;">inkl. MwSt. · zzgl. Versandkosten</p>' +
          '<div style="height:1px;background:var(--border-subtle);margin:var(--sp-4) 0;"></div>' +
          '<p style="font-size:var(--text-sm);color:var(--clr-text-mid);line-height:1.75;">' + esc(product.description || '') + '</p>' +
          '<div style="height:1px;background:var(--border-subtle);margin:var(--sp-4) 0;"></div>' +
          '<div class="product-detail__qty-row">' +
            '<div class="qty-control">' +
              '<button class="qty-control__btn" id="qtyDec">−</button>' +
              '<span class="qty-control__val" id="qtyVal">1</span>' +
              '<button class="qty-control__btn" id="qtyInc">+</button>' +
            '</div>' +
            '<button class="wishlist-toggle' + (isWished ? ' is-active' : '') + '" id="pdWishlist" aria-label="Zu Favoriten" type="button">' +
              '<svg width="18" height="18" viewBox="0 0 24 24" fill="' + (isWished ? 'currentColor' : 'none') + '" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
            '</button>' +
          '</div>' +
          '<button class="btn btn-primary btn-full add-to-cart" data-id="' + product.id + '" style="margin-top:var(--sp-3);">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/></svg>' +
            'In den Warenkorb' +
          '</button>' +
        '</div>' +
      '</div>';

    /* Qty controls */
    var qty = 1;
    var qtyVal = document.getElementById('qtyVal');
    document.getElementById('qtyInc') && document.getElementById('qtyInc').addEventListener('click', function () { qty = Math.min(qty + 1, 99); if (qtyVal) qtyVal.textContent = qty; });
    document.getElementById('qtyDec') && document.getElementById('qtyDec').addEventListener('click', function () { qty = Math.max(qty - 1, 1); if (qtyVal) qtyVal.textContent = qty; });

    /* Wishlist toggle */
    var pdWish = document.getElementById('pdWishlist');
    if (pdWish) pdWish.addEventListener('click', function () {
      toggleWishlist(product.id);
      var isNowWished = wishlist.indexOf(product.id) !== -1;
      pdWish.classList.toggle('is-active', isNowWished);
      var svg = pdWish.querySelector('svg');
      if (svg) svg.setAttribute('fill', isNowWished ? 'currentColor' : 'none');
    });

    /* Related products */
    var relGrid = document.getElementById('relatedGrid');
    if (relGrid) {
      var related = PRODUCTS.filter(function (p) { return p.mainCat === product.mainCat && p.id !== product.id; }).slice(0, 4);
      relGrid.innerHTML = related.map(renderCard).join('');
    }
  }

  /* ═══════════════════════════════════════
     BOOT
  ════════════════════════════════════════ */
  function boot() {
    initShop();
    initProductPage();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

})();

(function () {
  'use strict';

  /* ═══════════════════════════════════════
     CATEGORY STRUCTURE
  ════════════════════════════════════════ */
  var CATEGORY_STRUCTURE = [
    {
      id: 'buecher', label: 'Islamische Bücher',
      icon: '<path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>',
      subcatGroups: [
        { label: 'Sprache',        ids: ['deutsch', 'arabisch'] },
        { label: 'Wissenschaften', ids: ['aqidah', 'fiqh', 'sirah', 'hadith', 'tafsir', 'arabische-sprache', 'kinderbucher'] }
      ],
      subcats: [
        { id: 'deutsch',           label: 'Deutsche Bücher' },
        { id: 'arabisch',          label: 'Arabische Bücher' },
        { id: 'aqidah',            label: 'Aqidah & Tawhid' },
        { id: 'fiqh',              label: 'Fiqh' },
        { id: 'sirah',             label: 'Sirah' },
        { id: 'hadith',            label: 'Hadith' },
        { id: 'tafsir',            label: 'Tafsir' },
        { id: 'arabische-sprache', label: 'Arab. Sprache' },
        { id: 'kinderbucher',      label: 'Kinderbücher' }
      ]
    },
    {
      id: 'kleidung', label: 'Kleidung & Tradition',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>',
      subcats: [
        { id: 'shemagh-weiss',         label: 'Shemagh Weiß' },
        { id: 'shemagh-rot-weiss',     label: 'Shemagh Rot-Weiß' },
        { id: 'shemagh-schwarz-weiss', label: 'Shemagh Schwarz-Weiß' },
        { id: 'thobes',                label: 'Thobes' },
        { id: 'kufis',                 label: 'Kufis' },
        { id: 'abayas',                label: 'Abayas' }
      ]
    },
    {
      id: 'duefte', label: 'Düfte & Sunnah',
      icon: '<path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104A24 24 0 0 1 14.25 3.1m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-15.6-.5c.59 1.24 1.248 2.44 1.96 3.596m13.68-3.097A19.81 19.81 0 0 1 18 18.6M5 19.5h14"/>',
      subcats: [
        { id: 'misk',         label: 'Misk' },
        { id: 'oud',          label: 'Oud' },
        { id: 'miswak',       label: 'Miswak / Siwak' },
        { id: 'pflegeoel',    label: 'Pflegeöle' },
        { id: 'geschenksets', label: 'Geschenksets' }
      ]
    }
  ];

  /* ═══════════════════════════════════════
     PRODUCTS
  ════════════════════════════════════════ */
  var PRODUCTS = [
    /* ── Bücher · Deutsch */
    { id:1,  mainCat:'buecher', subcat:'deutsch',           name:'Riad as-Salihin',         subtitle:'Gärten der Rechtschaffenen',  price:14.99, badge:null,         description:'Die berühmte Hadithsammlung von Imam an-Nawawi in vollständiger deutscher Übersetzung. Ein unverzichtbares Standardwerk.' },
    { id:2,  mainCat:'buecher', subcat:'deutsch',           name:'Der versiegelte Nektar',   subtitle:'Ar-Raheeq Al-Makhtum',        price:16.99, badge:'Bestseller', description:'Die preisgekrönte Biografie des Propheten Muhammad ﷺ — vollständige deutsche Übersetzung der Weltbestseller-Sirah.' },
    { id:3,  mainCat:'buecher', subcat:'deutsch',           name:'Die Vierzig Hadithe',      subtitle:'Imam an-Nawawi',              price:8.99,  badge:null,         description:'Die bekannteste Hadithsammlung — zweisprachig Deutsch/Arabisch, ideal für Anfänger und Fortgeschrittene.' },
    { id:4,  mainCat:'buecher', subcat:'deutsch',           name:'Aqidah at-Tahawiyya',      subtitle:'Islamische Glaubenslehre',    price:12.99, badge:null,         description:'Die klassische Darstellung des sunnitischen Glaubens von Imam at-Tahawi mit ausführlichem Kommentar.' },
    /* ── Bücher · Arabisch */
    { id:5,  mainCat:'buecher', subcat:'arabisch',          name:'رياض الصالحين',            subtitle:'للإمام النووي',               price:12.99, badge:null,         description:'كتاب رياض الصالحين للإمام أبي زكريا يحيى بن شرف النووي الدمشقي — طبعة فاخرة.' },
    { id:6,  mainCat:'buecher', subcat:'arabisch',          name:'الأربعون النووية',         subtitle:'مع شرح موجز',                price:7.99,  badge:null,         description:'متن الأربعين حديثاً النووية مع شرح مختصر ومفيد للطلاب والعلماء.' },
    { id:7,  mainCat:'buecher', subcat:'arabisch',          name:'المقدمة الآجرومية',        subtitle:'في النحو العربي',             price:9.99,  badge:null,         description:'المتن الشهير في علم النحو العربي للإمام الآجروم — أفضل مقدمة للمبتدئين.' },
    /* ── Bücher · Aqidah */
    { id:8,  mainCat:'buecher', subcat:'aqidah',            name:'Die drei Grundprinzipien', subtitle:'Usul at-Thalatha',            price:6.99,  badge:null,         description:'Die drei grundlegenden Fragen des islamischen Glaubens von Imam Muhammad ibn Abd al-Wahhab.' },
    { id:9,  mainCat:'buecher', subcat:'aqidah',            name:'القواعد الأربع',           subtitle:'محمد بن عبد الوهاب',          price:5.99,  badge:null,         description:'Die vier Grundregeln des Tawhid — kompakt, präzise, tiefgründig.' },
    { id:10, mainCat:'buecher', subcat:'aqidah',            name:"Lum'atul-I'tiqad",         subtitle:'Die Glaubenslehre',           price:11.99, badge:null,         description:'Klassisches Werk der hanbali Aqidah von Ibn Qudama al-Maqdisi, zweisprachig.' },
    /* ── Bücher · Fiqh */
    { id:11, mainCat:'buecher', subcat:'fiqh',              name:'Fiqh as-Sunnah',           subtitle:'Sayyid Sabiq',               price:18.99, badge:'Neu',        description:'Das umfassende Fiqh-Werk von Sayyid Sabiq — vollständig auf Basis von Quran und Sunnah.' },
    { id:12, mainCat:'buecher', subcat:'fiqh',              name:'Umdat al-Fiqh',            subtitle:'Ibn Qudama',                 price:15.99, badge:null,         description:'Ein klassisches hanbali Rechtsbuch — kompakt, präzise, für Anfänger und Gelehrte.' },
    /* ── Bücher · Sirah */
    { id:13, mainCat:'buecher', subcat:'sirah',             name:'Muhammad ﷺ — Sein Leben',  subtitle:'Muhammad H. Haykal',         price:13.99, badge:null,         description:'Eine der wichtigsten wissenschaftlichen Biographien des Propheten Muhammad ﷺ auf Deutsch.' },
    { id:14, mainCat:'buecher', subcat:'sirah',             name:'Gefährten des Propheten',  subtitle:'Biographien der Sahaba',     price:15.99, badge:null,         description:'Inspirierende Biographien der Gefährten des Propheten ﷺ — für jung und alt.' },
    /* ── Bücher · Hadith */
    { id:15, mainCat:'buecher', subcat:'hadith',            name:'Sahih al-Bukhari',         subtitle:'Deutsche Übersetzung',       price:34.99, badge:'Premium',    description:'Die vollständige deutsche Übersetzung des Sahih al-Bukhari — die authentischste Hadithsammlung der Welt.' },
    { id:16, mainCat:'buecher', subcat:'hadith',            name:'Bulugh al-Maram',          subtitle:'Ibn Hajar al-Asqalani',     price:16.99, badge:null,         description:'Ausgewählte Hadithe zu Fiqh und Ibadah — ein Standardwerk für Hadithlernende.' },
    /* ── Bücher · Tafsir */
    { id:17, mainCat:'buecher', subcat:'tafsir',            name:'Die Bedeutungen des Quran', subtitle:'Zweisprachige Ausgabe',     price:24.99, badge:null,         description:'Vollständige deutsche Übersetzung mit arabischem Original — hochwertige Leineneinband-Ausgabe.' },
    { id:18, mainCat:'buecher', subcat:'tafsir',            name:'Tafsir Ibn Kathir',        subtitle:'Ausgewählte Suren',          price:22.99, badge:null,         description:'Ausgewählte Kapitel aus dem klassischen Tafsir von Imam Ibn Kathir auf Deutsch.' },
    /* ── Bücher · Arabische Sprache */
    { id:19, mainCat:'buecher', subcat:'arabische-sprache', name:'Madinah Arabic Book 1',    subtitle:'Arabisch für Anfänger',      price:14.99, badge:'Bestseller', description:'Das weltweit bekannteste Arabischlehrbuch der Islamischen Universität Madinah.' },
    { id:20, mainCat:'buecher', subcat:'arabische-sprache', name:'Arabisch-Grammatik',       subtitle:'Intensivkurs',               price:12.99, badge:null,         description:'Strukturierter Arabischkurs für deutschsprachige Lernende — mit Übungsaufgaben.' },
    /* ── Bücher · Kinderbücher */
    { id:21, mainCat:'buecher', subcat:'kinderbucher',      name:'Die 99 Namen Allahs',      subtitle:'Illustriertes Kinderbuch',   price:9.99,  badge:null,         description:'Kindgerecht illustriertes Buch zu den 99 schönen Namen Allahs — ab 4 Jahren.' },
    { id:22, mainCat:'buecher', subcat:'kinderbucher',      name:'Prophetengeschichten',      subtitle:'Für Kinder erzählt',         price:8.99,  badge:null,         description:'Islamische Prophetengeschichten kindgerecht erzählt — spannend und lehrreich.' },
    { id:23, mainCat:'buecher', subcat:'kinderbucher',      name:'Alif Baa für Kinder',      subtitle:'Arabisches Alphabet',        price:7.99,  badge:'Neu',        description:'Das arabische Alphabet kindgerecht und spielerisch lernen — mit Bildern und Übungen.' },
    /* ── Kleidung · Shemagh */
    { id:24, mainCat:'kleidung', subcat:'shemagh-weiss',         name:'Saudi Shemagh', subtitle:'Klassisch Weiß',       price:19.99, badge:null,      color:'#D4CFC6', description:'Hochwertiger weißer Saudi Shemagh aus 100% Baumwolle. Leicht, atmungsaktiv, traditionell.' },
    { id:25, mainCat:'kleidung', subcat:'shemagh-rot-weiss',     name:'Saudi Shemagh', subtitle:'Traditionell Rot-Weiß', price:19.99, badge:'Beliebt', color:'#B52626', description:'Der klassische arabische Shemagh in Rot-Weiß — authentisch und hochwertig verarbeitet.' },
    { id:26, mainCat:'kleidung', subcat:'shemagh-schwarz-weiss', name:'Saudi Shemagh', subtitle:'Elegant Schwarz-Weiß',  price:19.99, badge:null,      color:'#222222', description:'Eleganter Shemagh in Schwarz-Weiß — zeitlos, vielseitig, premium Qualität.' },
    /* ── Kleidung · Thobes */
    { id:27, mainCat:'kleidung', subcat:'thobes',  name:'Sunnah Thobe',    subtitle:'Klassisch Weiß',  price:44.99, badge:null,      description:'Traditionelles weißes Thobe aus reiner Baumwolle — für Freitagsgebet und besondere Anlässe.' },
    { id:28, mainCat:'kleidung', subcat:'thobes',  name:'Premium Thobe',   subtitle:'Feiner Stoff',    price:59.99, badge:'Premium', description:'Hochwertiges Thobe aus feinstem Stoff — edler Schnitt, zeitloser Stil.' },
    /* ── Kleidung · Kufis */
    { id:29, mainCat:'kleidung', subcat:'kufis',   name:'Kufi Weiß',       subtitle:'Klassische Form', price:12.99, badge:null,      description:'Klassischer weißer Kufi aus 100% Baumwolle — leicht, bequem, authentisch.' },
    { id:30, mainCat:'kleidung', subcat:'kufis',   name:'Kufi Schwarz',    subtitle:'Gestrickt',       price:12.99, badge:null,      description:'Hochwertiger schwarzer gestrickter Kufi — für alle Jahreszeiten geeignet.' },
    /* ── Kleidung · Abayas */
    { id:31, mainCat:'kleidung', subcat:'abayas',  name:'Abaya Premium',   subtitle:'Klassisch Schwarz', price:54.99, badge:null,       description:'Elegante schwarze Abaya aus hochwertigem Stoff — fließend, modest, zeitlos.' },
    { id:32, mainCat:'kleidung', subcat:'abayas',  name:'Abaya Stickerei', subtitle:'Gold-Stickerei',    price:69.99, badge:'Exklusiv', description:'Premium Abaya mit feiner Goldstickerei — für besondere Anlässe und das Freitagsgebet.' },
    /* ── Düfte · Misk */
    { id:33, mainCat:'duefte', subcat:'misk',        name:'Misk al-Haramain', subtitle:'Weißer Moschus',   price:22.99, badge:'Bestseller', description:'Reiner weißer Moschus — der Duft des Paradieses. Alkoholfrei, halal, langanhaltend.' },
    { id:34, mainCat:'duefte', subcat:'misk',        name:'Misk al-Janah',    subtitle:'Schwarzer Moschus', price:18.99, badge:null,         description:'Schwarzer Moschus mit holzigen Untertönen — tief, warm, langanhaltend.' },
    /* ── Düfte · Oud */
    { id:35, mainCat:'duefte', subcat:'oud',         name:'Oud al-Madinah',   subtitle:'Arabisches Oud',    price:34.99, badge:'Premium', description:'Authentisches arabisches Oud — edel, intensiv, der König der Düfte.' },
    { id:36, mainCat:'duefte', subcat:'oud',         name:'Rose Oud',         subtitle:'Oud & Rose',         price:28.99, badge:null,      description:'Harmonische Verbindung von echtem Oud und Rose — für besondere Momente.' },
    /* ── Düfte · Miswak */
    { id:37, mainCat:'duefte', subcat:'miswak',      name:'Miswak Natur',     subtitle:'3er Set',            price:6.99,  badge:null,      description:'100% natürlicher Miswak (Siwak) — die Sunnah der Mundhygiene. 3 Stück im Set.' },
    { id:38, mainCat:'duefte', subcat:'miswak',      name:'Miswak Premium',   subtitle:'5er Set',            price:12.99, badge:'Beliebt', description:'Premium Miswak-Set — natürlich, antibakteriell, nach der Sunnah. 5 Stück.' },
    /* ── Düfte · Pflegeöle */
    { id:39, mainCat:'duefte', subcat:'pflegeoel',   name:'Schwarzkümmelöl',  subtitle:'250ml · kaltgepresst', price:8.99,  badge:null, description:'Reines kaltgepresstes Schwarzkümmelöl — „Heilung für jede Krankheit außer dem Tod" (Hadith).' },
    { id:40, mainCat:'duefte', subcat:'pflegeoel',   name:'Arganöl Premium',  subtitle:'100ml · rein',          price:14.99, badge:null, description:'Reines marokkanisches Arganöl — für Haut, Haar und Bart. Hochwertig und natürlich.' },
    /* ── Düfte · Geschenksets */
    { id:41, mainCat:'duefte', subcat:'geschenksets', name:'Geschenkset Premium', subtitle:'Düfte & Pflege',      price:49.99, badge:'Beliebt', description:'Hochwertiges Geschenkset mit Misk, Oud, Schwarzkümmelöl und Miswak — perfekt zum Verschenken.' },
    { id:42, mainCat:'duefte', subcat:'geschenksets', name:'Misk & Miswak Set',   subtitle:'Kompaktes Geschenkset', price:29.99, badge:null,      description:'Kompaktes Geschenkset mit weißem Moschus und Miswak — Sunnah pur.' }
  ];

  window.PRODUCTS = PRODUCTS;
  window.CATEGORY_STRUCTURE = CATEGORY_STRUCTURE;

  /* ═══════════════════════════════════════
     STATE
  ════════════════════════════════════════ */
  var activeFilters = { mainCat: '', subcat: '', search: '', maxPrice: 200, sort: 'default' };
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

  function cardBg(product) {
    if (product.subcat === 'shemagh-weiss')         return 'background:linear-gradient(135deg,#3A3428 0%,#161208 100%);';
    if (product.subcat === 'shemagh-rot-weiss')     return 'background:linear-gradient(135deg,#6B1515 0%,#2A0505 100%);';
    if (product.subcat === 'shemagh-schwarz-weiss') return 'background:linear-gradient(135deg,#242424 0%,#080808 100%);';
    return '';
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
    var iconPath  = cat ? cat.icon : '';
    var bg        = cardBg(product);

    var badgeHtml = product.badge
      ? '<span class="product-card__badge product-card__badge--' + badgeSlug(product.badge) + '">' + esc(product.badge) + '</span>'
      : '';

    var swatchHtml = product.color
      ? '<span class="product-card__swatch" style="--swatch:' + product.color + ';"></span>'
      : '';

    return '<article class="product-card" data-id="' + product.id + '">' +
      '<div class="product-card__media">' +
        '<a href="product.html?id=' + product.id + '" class="product-card__img" data-cat="' + product.mainCat + '"' + (bg ? ' style="' + bg + '"' : '') + '>' +
          badgeHtml +
          '<svg class="product-card__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true">' + iconPath + '</svg>' +
          swatchHtml +
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
    activeFilters = { mainCat: '', subcat: '', search: '', maxPrice: 200, sort: 'default' };
    var pr = document.getElementById('priceRange');
    if (pr) pr.value = 200;
    var pd = document.getElementById('priceDisplay');
    if (pd) pd.textContent = 'bis 200,00 €';
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

      if (cat.subcatGroups) {
        cat.subcatGroups.forEach(function (grp) {
          html += '<span class="cat-group-label">' + grp.label + '</span>';
          grp.ids.forEach(function (sid) {
            var sub = cat.subcats.find(function (s) { return s.id === sid; });
            if (!sub) return;
            html += '<button class="cat-sub-item' + (activeFilters.subcat === sub.id ? ' is-active' : '') + '" data-subcat="' + sub.id + '">' + sub.label + '</button>';
          });
        });
      } else {
        cat.subcats.forEach(function (sub) {
          html += '<button class="cat-sub-item' + (activeFilters.subcat === sub.id ? ' is-active' : '') + '" data-subcat="' + sub.id + '">' + sub.label + '</button>';
        });
      }

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

    /* URL param */
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
    var bg = cardBg(product);
    var isWished = wishlist.indexOf(product.id) !== -1;

    var badgeHtml = product.badge
      ? '<span class="product-card__badge product-card__badge--' + badgeSlug(product.badge) + '" style="position:static;display:inline-block;margin-bottom:12px;">' + esc(product.badge) + '</span>'
      : '';

    var swatchHtml = product.color
      ? '<span class="product-card__swatch" style="--swatch:' + product.color + ';position:absolute;bottom:16px;right:16px;width:28px;height:28px;"></span>'
      : '';

    container.innerHTML =
      '<div class="product-detail-layout">' +
        '<div class="product-detail__media" data-cat="' + product.mainCat + '"' + (bg ? ' style="' + bg + '"' : '') + '>' +
          '<svg class="product-detail__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1" aria-hidden="true">' + (cat ? cat.icon : '') + '</svg>' +
          swatchHtml +
        '</div>' +
        '<div class="product-detail__info">' +
          '<span class="eyebrow">' + esc(catLabel) + (subLabel ? ' · ' + esc(subLabel) : '') + '</span>' +
          (badgeHtml ? '<div style="margin-top:8px;">' + badgeHtml + '</div>' : '') +
          '<h1 style="margin-top:var(--sp-2);font-size:clamp(1.5rem,3vw,2rem);color:var(--clr-gold-pale);">' + esc(product.name) + '</h1>' +
          '<p style="color:var(--clr-text-muted);margin-top:4px;">' + esc(product.subtitle || '') + '</p>' +
          '<p style="font-family:var(--font-display);font-size:1.6rem;color:var(--clr-gold-light);margin-top:var(--sp-3);font-weight:700;">' + fmt(product.price) + '</p>' +
          '<p style="font-size:var(--text-sm);color:var(--clr-text-faint);margin-top:4px;">inkl. MwSt. · zzgl. Versandkosten</p>' +
          '<div style="height:1px;background:var(--border-subtle);margin:var(--sp-4) 0;"></div>' +
          '<p style="font-size:var(--text-sm);color:var(--clr-text-mid);line-height:1.7;">' + esc(product.description || '') + '</p>' +
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

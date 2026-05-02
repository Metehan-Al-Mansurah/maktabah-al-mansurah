/* ================================================================
   MAKTABAH AL MANSURAH — Main
   ================================================================ */

'use strict';

/* ── Sticky Header ── */
function initStickyHeader() {
  const header = document.getElementById('siteHeader');
  if (!header) return;

  const sentinel = document.createElement('div');
  sentinel.style.cssText = 'position:absolute;top:0;left:0;height:1px;width:1px;pointer-events:none;';
  document.body.prepend(sentinel);

  const obs = new IntersectionObserver(
    ([entry]) => header.classList.toggle('scrolled', !entry.isIntersecting),
    { threshold: 0 }
  );
  obs.observe(sentinel);
}

/* ── Active Nav Link ── */
function initActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-primary a, .mobile-nav__links a').forEach(a => {
    const href = a.getAttribute('href') || '';
    if (href === path || (path === '' && href === 'index.html') ||
        (href !== 'index.html' && path.startsWith(href.replace('.html', '')))) {
      a.classList.add('active');
    }
  });
}

/* ── Mobile Menu ── */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const overlay = document.getElementById('menuOverlay');
  const mobileNav = document.getElementById('mobileNav');
  const closeBtn = document.getElementById('mobileNavClose');

  if (!toggle || !mobileNav) return;

  const focusableSelector = 'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function open() {
    document.body.classList.add('menu-open');
    toggle.setAttribute('aria-expanded', 'true');
    mobileNav.removeAttribute('aria-hidden');
    const first = mobileNav.querySelector(focusableSelector);
    if (first) first.focus();
  }

  function close() {
    document.body.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    mobileNav.setAttribute('aria-hidden', 'true');
    toggle.focus();
  }

  toggle.addEventListener('click', () => {
    document.body.classList.contains('menu-open') ? close() : open();
  });

  if (closeBtn) closeBtn.addEventListener('click', close);
  if (overlay)  overlay.addEventListener('click', close);

  /* Focus trap */
  mobileNav.addEventListener('keydown', e => {
    if (e.key === 'Escape') { close(); return; }
    if (e.key !== 'Tab') return;
    const focusable = [...mobileNav.querySelectorAll(focusableSelector)];
    if (!focusable.length) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
}

/* ── Toast-Benachrichtigung (Punkt 2 + 8) ── */
function showToast(message, type) {
  /* type: 'success' | 'error' | 'info' */
  type = type || 'info';

  let container = document.getElementById('mam-toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'mam-toast-container';
    document.body.appendChild(container);
  }

  const icons = {
    success: '✓',
    error:   '✕',
    info:    '✦'
  };

  const toast = document.createElement('div');
  toast.className = 'mam-toast mam-toast--' + type;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.innerHTML =
    '<span class="mam-toast__icon" aria-hidden="true">' + icons[type] + '</span>' +
    '<span>' + message + '</span>';

  container.appendChild(toast);

  /* Nach 2,5 s ausblenden und entfernen */
  setTimeout(function () {
    toast.classList.add('is-exiting');
    setTimeout(function () { toast.remove(); }, 250);
  }, 2500);
}

/* Globaler Zugriff für Inline-Skripte */
window.showToast = showToast;

/* ── Newsletter forms (Punkt 2) ── */
function initNewsletterForms() {
  document.querySelectorAll('.newsletter-form-row, .footer-newsletter-form').forEach(form => {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const input    = form.querySelector('input[type="email"]');
      const checkbox = form.querySelector('input[type="checkbox"]');
      const btn      = form.querySelector('button[type="submit"]');
      if (!input || !btn) return;

      /* Validierung */
      let valid = true;
      if (!input.value.trim() || !/^\S+@\S+\.\S+$/.test(input.value)) {
        input.classList.add('input-error');
        valid = false;
      } else {
        input.classList.remove('input-error');
      }
      if (checkbox && !checkbox.checked) {
        checkbox.closest('.newsletter-gdpr')?.classList.add('gdpr-error');
        showToast('Bitte bestätige die Datenschutz-Einwilligung.', 'error');
        valid = false;
      } else {
        checkbox?.closest('.newsletter-gdpr')?.classList.remove('gdpr-error');
      }
      if (!valid) return;

      /* Lade-Zustand */
      btn.classList.add('is-loading');
      btn.disabled = true;

      /* Fetch an Platzhalter-Endpoint — später durch echten Service ersetzen */
      fetch('/api/newsletter', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body:    JSON.stringify({ email: input.value.trim() })
      })
      .then(function (res) {
        if (!res.ok) throw new Error('server');
        showToast('Erfolgreich angemeldet! Barakallahu fik.', 'success');
        input.value = '';
        if (checkbox) checkbox.checked = false;
      })
      .catch(function () {
        /* Fallback: Bei fehlendem Backend gilt Anmeldung lokal als erfolgreich */
        showToast('Anmeldung vorgemerkt. Wir melden uns bald!', 'info');
        input.value = '';
        if (checkbox) checkbox.checked = false;
      })
      .finally(function () {
        btn.classList.remove('is-loading');
        btn.disabled = false;
      });
    });

    /* Fehler-Klasse beim Tippen zurücksetzen */
    form.querySelector('input[type="email"]')?.addEventListener('input', function () {
      this.classList.remove('input-error');
    });
  });
}

/* ── Cookie Banner ── */
function initCookieBanner() {
  if (localStorage.getItem('mam_cookie_consent')) return;

  const banner = document.createElement('div');
  banner.id = 'cookieBanner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie-Einstellungen');
  banner.innerHTML = `
    <div class="cookie-banner__inner">
      <div class="cookie-banner__text">
        <p><strong>Wir verwenden Cookies</strong></p>
        <p>Wir nutzen ausschließlich technisch notwendige Cookies (Warenkorb, Wunschliste), um unsere Website zu betreiben. Keine Tracking- oder Werbe-Cookies. Mehr Infos in unserer <a href="datenschutz.html">Datenschutzerklärung</a>.</p>
      </div>
      <div class="cookie-banner__actions">
        <button class="btn btn-ghost btn-sm" id="cookieDecline">Nur notwendige</button>
        <button class="btn btn-primary btn-sm" id="cookieAccept">Verstanden</button>
      </div>
    </div>`;

  document.body.appendChild(banner);

  function dismiss(consent) {
    localStorage.setItem('mam_cookie_consent', consent ? 'accepted' : 'necessary');
    banner.style.animation = 'none';
    banner.style.opacity = '0';
    banner.style.transition = 'opacity .25s';
    setTimeout(() => banner.remove(), 300);
  }
  document.getElementById('cookieAccept')?.addEventListener('click', () => dismiss(true));
  document.getElementById('cookieDecline')?.addEventListener('click', () => dismiss(false));
}

/* ── Contact Form ── */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;

    form.querySelectorAll('[required]').forEach(field => {
      const group = field.closest('.form-group');
      if (!group) return;
      const isEmpty = !field.value.trim();
      const isEmail = field.type === 'email' && !/^\S+@\S+\.\S+$/.test(field.value);
      if (isEmpty || isEmail) {
        group.classList.add('has-error');
        valid = false;
      } else {
        group.classList.remove('has-error');
      }
    });

    if (!valid) return;

    const success = document.getElementById('formSuccess');
    if (success) {
      form.style.display = 'none';
      success.classList.add('is-visible');
    }
  });

  form.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('input', () => {
      const group = field.closest('.form-group');
      if (group) group.classList.remove('has-error');
    });
  });
}

/* ── Lazy Loading für CSS-Background-Images (Punkt 4) ── */
function initLazyBackgrounds() {
  /* Elemente mit data-bg="url(...)" werden erst geladen wenn sichtbar.
     Verwendung im HTML: style="" entfernen, stattdessen data-bg="url('pfad.jpg')"
     setzen — dieser Code setzt es dann per IntersectionObserver. */
  const lazyBgs = document.querySelectorAll('[data-bg]');
  if (!lazyBgs.length) return;

  if (!('IntersectionObserver' in window)) {
    /* Fallback für ältere Browser: sofort laden */
    lazyBgs.forEach(el => { el.style.backgroundImage = el.dataset.bg; });
    return;
  }

  const obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.style.backgroundImage = entry.target.dataset.bg;
      obs.unobserve(entry.target);
    });
  }, { rootMargin: '200px 0px' });

  lazyBgs.forEach(el => obs.observe(el));
}

/* ── Dynamische Kategorie-Zähler (Punkt 9) ── */
function initCategoryCounters() {
  const counters = document.querySelectorAll('[data-count-category]');
  if (!counters.length || !window.PRODUCTS) return;

  counters.forEach(function (el) {
    const cat   = el.dataset.countCategory;
    const count = window.PRODUCTS.filter(function (p) {
      return p.mainCat === cat;
    }).length;
    if (count > 0) {
      el.textContent = count + ' Artikel';
    }
  });
}

/* ── Hero-Scroll-Indikator Tastatur-Handler (Punkt 13) ── */
function initHeroScrollBtn() {
  const btn = document.getElementById('heroScrollBtn');
  if (!btn) return;

  btn.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const target = document.getElementById('bestseller');
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
}

/* ── Warenkorb-Button Toast + Badge-Puls (Punkt 8) ── */
function initCartButtonFeedback() {
  /* Ergänzt den bestehenden Inline-Handler: Toast + Badge-Puls */
  document.addEventListener('mam:cart-updated', function () {
    showToast('Zum Warenkorb hinzugefügt', 'success');

    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    badge.classList.remove('is-pulsing');
    /* Reflow erzwingen damit die Animation neu startet */
    void badge.offsetWidth;
    badge.classList.add('is-pulsing');
    badge.addEventListener('animationend', function () {
      badge.classList.remove('is-pulsing');
    }, { once: true });
  });
}

/* ── Smooth scroll for anchor links ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ── Live Search ── */
function initSearch() {
  const headerActions = document.querySelector('.header-actions');
  if (!headerActions) return;

  /* Inject search button */
  const searchBtn = document.createElement('button');
  searchBtn.id = 'searchTrigger';
  searchBtn.className = 'search-trigger-btn';
  searchBtn.setAttribute('aria-label', 'Suche öffnen');
  searchBtn.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>';
  headerActions.insertBefore(searchBtn, headerActions.firstChild);

  /* Inject overlay */
  const overlay = document.createElement('div');
  overlay.id = 'searchOverlay';
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-label', 'Produktsuche');
  overlay.innerHTML = `
    <div class="search-overlay__backdrop" id="searchBackdrop"></div>
    <div class="search-overlay__panel">
      <div class="search-overlay__bar">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input type="text" id="searchInput" placeholder="Produkt oder Kategorie suchen..." autocomplete="off" spellcheck="false">
        <button id="searchClose" aria-label="Suche schließen">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 18 18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div id="searchResults" class="search-overlay__results"></div>
    </div>`;

  document.body.appendChild(overlay);

  function fmt(n) { return n.toFixed(2).replace('.', ',') + ' €'; }

  function catLabel(mainCat) {
    const map = { buecher:'Islamische Bücher', kleidung:'Kleidung & Tradition', duefte:'Düfte & Sunnah' };
    return map[mainCat] || mainCat;
  }

  function catIconPath(mainCat) {
    if (mainCat === 'buecher') return '<path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>';
    if (mainCat === 'kleidung') return '<path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0"/>';
    return '<path d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104A24 24 0 0 1 14.25 3.1m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-15.6-.5c.59 1.24 1.248 2.44 1.96 3.596m13.68-3.097A19.81 19.81 0 0 1 18 18.6M5 19.5h14"/>';
  }

  function highlight(text, query) {
    if (!query) return text;
    const re = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
    return text.replace(re, '<span class="search-result-highlight">$1</span>');
  }

  function renderDefaultResults() {
    const cats = [
      { id:'buecher', label:'Islamische Bücher' },
      { id:'kleidung', label:'Kleidung & Tradition' },
      { id:'duefte', label:'Düfte & Sunnah' }
    ];
    document.getElementById('searchResults').innerHTML =
      '<div style="padding:.75rem 1rem .25rem;font-size:.7rem;letter-spacing:.1em;text-transform:uppercase;color:var(--clr-gold-muted);">Kategorien</div>' +
      '<div style="padding:.25rem 1rem .75rem;">' +
        cats.map(c => `<a href="shop.html?cat=${c.id}" class="search-cat-chip">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${catIconPath(c.id)}</svg>
          ${c.label}</a>`).join('') +
      '</div>' +
      '<div class="search-hint"><span><kbd>↵</kbd> Auswählen</span><span><kbd>Esc</kbd> Schließen</span></div>';
  }

  function renderSearchResults(query) {
    const products = window.PRODUCTS || [];
    const q = query.toLowerCase().trim();
    if (!q) { renderDefaultResults(); return; }

    const results = products.filter(p =>
      p.name.toLowerCase().includes(q) ||
      (p.subtitle || '').toLowerCase().includes(q) ||
      (p.description || '').toLowerCase().includes(q) ||
      catLabel(p.mainCat).toLowerCase().includes(q) ||
      (p.subcat || '').toLowerCase().includes(q)
    ).slice(0, 8);

    const el = document.getElementById('searchResults');
    if (!results.length) {
      el.innerHTML = '<div class="search-empty">Keine Produkte für „' + query + '" gefunden.<br><a href="shop.html" style="color:var(--clr-gold);">Alle Produkte ansehen →</a></div>';
      return;
    }
    el.innerHTML = results.map(p =>
      `<a href="product.html?id=${p.id}" class="search-result-item">
        <div class="search-result-icon">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${catIconPath(p.mainCat)}</svg>
        </div>
        <div>
          <div class="search-result-name">${highlight(p.name, query)}</div>
          <div class="search-result-meta">${catLabel(p.mainCat)}${p.badge ? ' · <span style="color:var(--clr-gold)">' + p.badge + '</span>' : ''}</div>
        </div>
        <span class="search-result-price">${fmt(p.price)}</span>
      </a>`
    ).join('') +
    `<div class="search-hint"><span><kbd>↵</kbd> Öffnen</span><span><kbd>Esc</kbd> Schließen</span></div>`;
  }

  function openSearch() {
    overlay.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => document.getElementById('searchInput').focus(), 50);
    renderDefaultResults();
  }

  function closeSearch() {
    overlay.classList.remove('is-open');
    document.body.style.overflow = '';
    document.getElementById('searchInput').value = '';
  }

  searchBtn.addEventListener('click', openSearch);
  document.getElementById('searchClose').addEventListener('click', closeSearch);
  document.getElementById('searchBackdrop').addEventListener('click', closeSearch);

  document.getElementById('searchInput').addEventListener('input', function() {
    renderSearchResults(this.value);
  });

  document.getElementById('searchInput').addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeSearch();
    if (e.key === 'Enter') {
      const first = document.querySelector('.search-result-item');
      if (first) { first.click(); closeSearch(); }
    }
  });

  /* Global shortcut: Ctrl+K or / to open search */
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); }
    if (e.key === '/' && !['INPUT','TEXTAREA'].includes(document.activeElement.tagName)) {
      e.preventDefault(); openSearch();
    }
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeSearch();
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initActiveNav();
  initMobileMenu();
  initNewsletterForms();
  initContactForm();
  initSmoothScroll();
  initCookieBanner();
  initSearch();
  initLazyBackgrounds();
  initCategoryCounters();
  initHeroScrollBtn();
  initCartButtonFeedback();
});

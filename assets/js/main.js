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

/* ── Newsletter forms ── */
function initNewsletterForms() {
  document.querySelectorAll('.newsletter-form-row').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const input = form.querySelector('.form-input');
      const btn   = form.querySelector('button');
      if (!input || !input.value.includes('@')) return;
      const orig = btn.textContent;
      btn.textContent = 'Danke! ✓';
      btn.disabled = true;
      input.value = '';
      setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 3000);
    });
  });

  /* Footer newsletter */
  const footerForm = document.querySelector('.footer-newsletter-form');
  if (footerForm) {
    footerForm.addEventListener('submit', e => {
      e.preventDefault();
      const input = footerForm.querySelector('.form-input');
      const btn   = footerForm.querySelector('button');
      if (!input || !input.value.includes('@')) return;
      const orig = btn.textContent;
      btn.textContent = 'Danke! ✓';
      btn.disabled = true;
      input.value = '';
      setTimeout(() => { btn.textContent = orig; btn.disabled = false; }, 3000);
    });
  }
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

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initActiveNav();
  initMobileMenu();
  initNewsletterForms();
  initContactForm();
  initSmoothScroll();
});

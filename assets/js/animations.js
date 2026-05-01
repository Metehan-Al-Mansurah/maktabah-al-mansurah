/* ================================================================
   MAKTABAH AL MANSURAH — Animations
   ================================================================ */

'use strict';

/* ── Scroll Reveal (IntersectionObserver) ── */
function initReveal(root) {
  const targets = (root || document).querySelectorAll('[data-reveal]:not(.is-visible)');
  if (!targets.length) return;

  const obs = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach(el => obs.observe(el));
}

/* ── Hero Pattern Parallax ── */
function initHeroParallax() {
  const pattern = document.querySelector('.hero-pattern-svg');
  if (!pattern) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const y = window.scrollY * 0.15;
      pattern.style.transform = `translateY(${y}px) rotate(${window.scrollY * 0.02}deg) scale(1.08)`;
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
}

/* ── Counter Animation (category counts) ── */
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    let current = 0;
    const step = Math.ceil(target / 30);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current >= target) clearInterval(timer);
    }, 30);
  });
}

/* ── Magnetic Hover on Buttons ── */
function initMagneticButtons() {
  document.querySelectorAll('.btn-primary, .btn-ghost').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const dx = e.clientX - rect.left - rect.width / 2;
      const dy = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${dx * 0.18}px, ${dy * 0.18}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

/* ── Scroll Progress Bar ── */
function initScrollProgress() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;

  /* transform:scaleX statt width — kein Layout-Reflow, nur Composite-Layer */
  bar.style.transformOrigin = 'left center';
  bar.style.transform = 'scaleX(0)';

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    requestAnimationFrame(() => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = total > 0 ? window.scrollY / total : 0;
      bar.style.transform = 'scaleX(' + ratio + ')';
      ticking = false;
    });
    ticking = true;
  }, { passive: true });
}

/* ── Staggered Product Grid ── */
function initProductStagger(container) {
  if (!container) return;
  container.querySelectorAll('.product-card').forEach((card, i) => {
    card.style.setProperty('--i', i);
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initHeroParallax();
  initMagneticButtons();
  initScrollProgress();

  /* Trigger counters when visible */
  const counterSection = document.querySelector('[data-count]');
  if (counterSection) {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { animateCounters(); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(counterSection.closest('section') || counterSection);
  }
});

window.initReveal = initReveal;
window.initMagneticButtons = initMagneticButtons;
window.initProductStagger = initProductStagger;

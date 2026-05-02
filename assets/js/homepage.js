/* ================================================================
   MAKTABAH AL MANSURAH — Homepage-spezifisches JS
   Extrahiert aus index.html inline-<script>-Block.
   ================================================================ */

'use strict';

(function () {

  function initAddButtons() {
    if (!window.PRODUCTS) {
      /* shop.js war noch nicht bereit — einmalig nach DOMContentLoaded erneut versuchen */
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAddButtons);
      } else {
        /* Beide defer-Skripte ausgeführt, PRODUCTS aber immer noch nicht da */
        if (typeof window.showToast === 'function') {
          window.showToast('Produkte konnten nicht geladen werden.', 'error');
        }
      }
      return;
    }

    document.querySelectorAll('.hp-add-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var id = parseInt(btn.dataset.productId);
        if (!window.PRODUCTS) return;
        var p = window.PRODUCTS.find(function (x) { return x.id === id; });
        if (!p) return;

        var key = 'mam_cart_v2';
        var cart = [];
        try { cart = JSON.parse(localStorage.getItem(key) || '[]'); } catch (e) {}
        var existing = cart.find(function (x) { return x.id === id; });
        if (existing) {
          existing.qty++;
        } else {
          cart.push({ id: p.id, name: p.name, subtitle: p.subtitle, price: p.price, qty: 1, mainCat: p.mainCat });
        }
        localStorage.setItem(key, JSON.stringify(cart));

        if (typeof window.updateCartUI === 'function') window.updateCartUI();
        /* Toast + Badge-Puls über Custom Event auslösen */
        document.dispatchEvent(new CustomEvent('mam:cart-updated'));

        /* Kurzen Loading-State zeigen */
        btn.classList.add('is-loading');
        btn.disabled = true;
        setTimeout(function () {
          btn.classList.remove('is-loading');
          btn.disabled = false;
        }, 900);
      });
    });
  }

  /* shop.js setzt window.PRODUCTS beim Laden — beide Skripte sind defer,
     shop.js steht im HTML vor homepage.js, also ist PRODUCTS beim
     DOMContentLoaded-Feuer normalerweise bereits vorhanden. */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAddButtons);
  } else {
    initAddButtons();
  }

})();

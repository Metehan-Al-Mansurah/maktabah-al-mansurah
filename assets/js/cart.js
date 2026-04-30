(function () {
  'use strict';

  var STORAGE_KEY = 'mam_cart_v2';

  function getCart() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
    catch (e) { return []; }
  }
  function saveCart(cart) { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }
  function getTotal(cart) { return cart.reduce(function (s, i) { return s + i.price * i.qty; }, 0); }
  function fmt(n) { return n.toFixed(2).replace('.', ',') + ' €'; }

  function catIcon(cat) {
    if (cat === 'buecher')  return '<path d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"/>';
    if (cat === 'kleidung') return '<path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0"/>';
    if (cat === 'duefte')   return '<path d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104A24 24 0 0 1 14.25 3.1m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15m-15.6-.5c.59 1.24 1.248 2.44 1.96 3.596m13.68-3.097A19.81 19.81 0 0 1 18 18.6M5 19.5h14"/>';
    return '<path d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>';
  }

  function updateBadge() {
    var cart = getCart();
    var count = cart.reduce(function (s, i) { return s + i.qty; }, 0);
    document.querySelectorAll('#cartBadge').forEach(function (el) {
      el.textContent = count;
      el.classList.toggle('hidden', count === 0);
    });
  }

  function renderDrawer() {
    var cart = getCart();
    var itemsEl = document.querySelector('.cart-drawer__items');
    var totalEl = document.querySelector('.cart-drawer__total-amount');
    if (!itemsEl) return;

    if (!cart.length) {
      itemsEl.innerHTML =
        '<div class="cart-empty">' +
          '<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/></svg>' +
          '<p>Dein Warenkorb ist leer.</p>' +
        '</div>';
    } else {
      itemsEl.innerHTML = cart.map(function (item) {
        return '<div class="cart-item" data-id="' + item.id + '">' +
          '<div class="cart-item__img" data-cat="' + (item.mainCat || '') + '">' +
            '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" style="opacity:.45;">' + catIcon(item.mainCat) + '</svg>' +
          '</div>' +
          '<div class="cart-item__info">' +
            '<p class="cart-item__name">' + item.name + '</p>' +
            '<p class="cart-item__price">' + fmt(item.price) + '</p>' +
            '<div class="cart-item__qty-row">' +
              '<button class="cart-qty-btn" data-action="dec" data-id="' + item.id + '">−</button>' +
              '<span class="cart-qty-val">' + item.qty + '</span>' +
              '<button class="cart-qty-btn" data-action="inc" data-id="' + item.id + '">+</button>' +
            '</div>' +
          '</div>' +
          '<button class="cart-remove" data-id="' + item.id + '" aria-label="Entfernen">' +
            '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 18 18 6M6 6l12 12"/></svg>' +
          '</button>' +
        '</div>';
      }).join('');
    }

    if (totalEl) totalEl.textContent = fmt(getTotal(cart));
    updateBadge();
  }

  function openCart() {
    var d = document.getElementById('cartDrawer');
    var o = document.getElementById('cartOverlay');
    if (d) { d.classList.add('is-open'); d.setAttribute('aria-hidden', 'false'); }
    if (o) { o.classList.add('is-visible'); }
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    var d = document.getElementById('cartDrawer');
    var o = document.getElementById('cartOverlay');
    if (d) { d.classList.remove('is-open'); d.setAttribute('aria-hidden', 'true'); }
    if (o) { o.classList.remove('is-visible'); }
    document.body.style.overflow = '';
  }

  function addToCart(product) {
    var cart = getCart();
    var ex = null;
    cart.forEach(function (i) { if (i.id === product.id) ex = i; });
    if (ex) { ex.qty += 1; } else {
      cart.push({ id: product.id, name: product.name, price: product.price, mainCat: product.mainCat || '', qty: 1 });
    }
    saveCart(cart);
    renderDrawer();
    openCart();
    var btn = document.querySelector('.add-to-cart[data-id="' + product.id + '"]');
    if (btn) { btn.classList.add('added'); setTimeout(function () { btn.classList.remove('added'); }, 1300); }
  }

  function init() {
    updateBadge();
    renderDrawer();

    var trigger = document.getElementById('cartTrigger');
    if (trigger) trigger.addEventListener('click', openCart);
    var closeBtn = document.getElementById('cartClose');
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    var overlay = document.getElementById('cartOverlay');
    if (overlay) overlay.addEventListener('click', closeCart);

    document.addEventListener('click', function (e) {
      var qBtn = e.target.closest('.cart-qty-btn');
      if (qBtn) {
        var id = parseInt(qBtn.dataset.id);
        var action = qBtn.dataset.action;
        var cart = getCart();
        var item = cart.find(function (i) { return i.id === id; });
        if (item) {
          if (action === 'inc') item.qty++;
          else { item.qty--; if (item.qty <= 0) cart = cart.filter(function (i) { return i.id !== id; }); }
        }
        saveCart(cart); renderDrawer(); return;
      }
      var rmBtn = e.target.closest('.cart-remove');
      if (rmBtn) {
        saveCart(getCart().filter(function (i) { return i.id !== parseInt(rmBtn.dataset.id); }));
        renderDrawer(); return;
      }
      var addBtn = e.target.closest('.add-to-cart');
      if (addBtn) {
        var id3 = parseInt(addBtn.dataset.id);
        if (window.PRODUCTS) {
          var p = window.PRODUCTS.find(function (x) { return x.id === id3; });
          if (p) addToCart(p);
        }
      }
    });
  }

  window.CartManager = { addToCart: addToCart, openCart: openCart, closeCart: closeCart };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();

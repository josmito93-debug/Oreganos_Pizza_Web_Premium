const config = window.APP_CONFIG;

const categories = [
  { id: 'all', label: 'Todo' },
  { id: 'clasicas', label: 'Clásicas' },
  { id: 'mixtas', label: 'Clásicas mixtas' },
  { id: 'vegetarianas', label: 'Vegetarianas' },
  { id: 'premium', label: 'Premium' },
  { id: 'especiales', label: 'Especiales' },
  { id: 'dulces', label: 'Dulces' },
  { id: 'compartir', label: 'Para compartir' },
  { id: 'bebidas', label: 'Bebidas' }
];

const pizzaAddons = [
  { id: 'extra-queso', name: 'Extra queso', price: 8000 },
  { id: 'extra-pepperoni', name: 'Extra pepperoni', price: 8000 },
  { id: 'extra-bocconcini', name: 'Extra bocconcini', price: 12000 }
];

const products = [
  { id:'margarita', category:'clasicas', badge:'Clásica', name:'Margarita', description:'Salsa y queso mozzarella.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:14000},{id:'med',name:'Mediana',price:24000},{id:'grd',name:'Grande',price:32000}], addons:pizzaAddons },
  { id:'margarita-jamon', category:'clasicas', badge:'Clásica', name:'Margarita Jamón', description:'Salsa, queso mozzarella y jamón.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:16000},{id:'med',name:'Mediana',price:28000},{id:'grd',name:'Grande',price:40000}], addons:pizzaAddons },
  { id:'pepperoni', category:'clasicas', badge:'Clásica', name:'Pepperoni', description:'Salsa, queso y pepperoni.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:34000},{id:'med',name:'Mediana',price:58000},{id:'grd',name:'Grande',price:82000}], addons:pizzaAddons },

  { id:'granjera', category:'mixtas', badge:'Mixta', name:'Granjera', description:'Pollo, maíz y champiñones.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:24000},{id:'med',name:'Mediana',price:34000},{id:'grd',name:'Grande',price:48000}], addons:pizzaAddons },
  { id:'primavera', category:'mixtas', badge:'Mixta', name:'Primavera', description:'Jamón, maíz, tocineta y pimentón.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:26000},{id:'med',name:'Mediana',price:38000},{id:'grd',name:'Grande',price:54000}], addons:pizzaAddons },
  { id:'magnifica', category:'mixtas', badge:'Mixta', name:'Magnífica', description:'Jamón, pollo, maíz, cebolla y pimentón.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:25000},{id:'med',name:'Mediana',price:36000},{id:'grd',name:'Grande',price:52000}], addons:pizzaAddons },
  { id:'ranchera', category:'mixtas', badge:'Mixta', name:'Ranchera', description:'Pollo, pimentón, cebolla y tocineta.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:28000},{id:'med',name:'Mediana',price:42000},{id:'grd',name:'Grande',price:62000}], addons:pizzaAddons },
  { id:'campestre', category:'mixtas', badge:'Mixta', name:'Campestre', description:'Jamón, pollo y tocineta.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:29000},{id:'med',name:'Mediana',price:44000},{id:'grd',name:'Grande',price:65000}], addons:pizzaAddons },

  { id:'capressa', category:'vegetarianas', badge:'Veggie', name:'Capressa', description:'Tomate en rodajas y pesto de albahaca.', hero:'assets/hero-premium.png', options:[{id:'peq',name:'Pequeña',price:20000},{id:'med',name:'Mediana',price:32000},{id:'grd',name:'Grande',price:42000}], addons:pizzaAddons },
  { id:'fusion', category:'vegetarianas', badge:'Veggie', name:'Fusión', description:'Maíz, cebolla, pimentón, champiñones y aceitunas negras.', hero:'assets/hero-premium.png', options:[{id:'peq',name:'Pequeña',price:26000},{id:'med',name:'Mediana',price:38000},{id:'grd',name:'Grande',price:54000}], addons:pizzaAddons },
  { id:'bocconcini', category:'vegetarianas', badge:'Veggie', name:'Bocconcini', description:'Parmesano, rúgula, tomates deshidratados y queso bocconcini.', hero:'assets/hero-premium.png', options:[{id:'peq',name:'Pequeña',price:40000},{id:'med',name:'Mediana',price:68000},{id:'grd',name:'Grande',price:100000}], addons:pizzaAddons },

  { id:'oreganos', category:'premium', badge:'Premium', name:"Oregano's", description:'Jamón, maíz, cebolla, pimentón, tocineta y salami.', hero:'assets/hero-premium.png', options:[{id:'peq',name:'Pequeña',price:32000},{id:'med',name:'Mediana',price:56000},{id:'grd',name:'Grande',price:80000}], addons:pizzaAddons },
  { id:'oreganos-especial', category:'premium', badge:'Premium', name:"Oregano's Especial", description:'Jamón, pollo, maíz, cebolla, pimentón, champiñones, tocineta y salami.', hero:'assets/hero-premium.png', options:[{id:'peq',name:'Pequeña',price:46000},{id:'med',name:'Mediana',price:70000},{id:'grd',name:'Grande',price:96000}], addons:pizzaAddons },
  { id:'parmesana', category:'premium', badge:'Premium', name:'Parmesana', description:'Jamón, tocineta, cebolla y queso parmesano.', hero:'assets/hero-premium.png', options:[{id:'peq',name:'Pequeña',price:28000},{id:'med',name:'Mediana',price:42000},{id:'grd',name:'Grande',price:64000}], addons:pizzaAddons },
  { id:'tres-quesos', category:'premium', badge:'Premium', name:'3 Quesos', description:'Mozzarella, bocconcini y parmesano.', hero:'assets/hero-premium.png', options:[{id:'peq',name:'Pequeña',price:35000},{id:'med',name:'Mediana',price:60000},{id:'grd',name:'Grande',price:86000}], addons:pizzaAddons },
  { id:'tentacion', category:'premium', badge:'Premium', name:'Tentación', description:'Jamón, tocineta, salami y chorizo español.', hero:'assets/hero-premium.png', options:[{id:'peq',name:'Pequeña',price:46000},{id:'med',name:'Mediana',price:76000},{id:'grd',name:'Grande',price:110000}], addons:pizzaAddons },
  { id:'tentacion-especial', category:'premium', badge:'Premium', name:'Tentación Especial', description:'Tocineta, salami, chorizo español y pepperoni.', hero:'assets/hero-premium.png', options:[{id:'peq',name:'Pequeña',price:56000},{id:'med',name:'Mediana',price:100000},{id:'grd',name:'Grande',price:132000}], addons:pizzaAddons },
  { id:'prosciutto', category:'premium', badge:'Premium', name:'Prosciutto', description:'Rúgula, queso parmesano, tomates deshidratados, prosciutto y bocconcini.', hero:'assets/hero-premium.png', options:[{id:'peq',name:'Pequeña',price:48000},{id:'med',name:'Mediana',price:94000},{id:'grd',name:'Grande',price:130000}], addons:pizzaAddons },
  { id:'prosciutto-pesto', category:'premium', badge:'Premium', name:'Prosciutto Pesto', description:'Rúgula, parmesano, aceitunas negras, prosciutto, bocconcini y pesto.', hero:'assets/hero-premium.png', options:[{id:'peq',name:'Pequeña',price:56000},{id:'med',name:'Mediana',price:100000},{id:'grd',name:'Grande',price:134000}], addons:pizzaAddons },

  { id:'romana', category:'especiales', badge:'Especial', name:'Romana', description:'Tomate en ruedas, aceitunas y anchoas.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:28000},{id:'med',name:'Mediana',price:42000},{id:'grd',name:'Grande',price:64000}], addons:pizzaAddons },
  { id:'alemana', category:'especiales', badge:'Especial', name:'Alemana', description:'Chorizo antioqueño y longaniza.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:29000},{id:'med',name:'Mediana',price:46000},{id:'grd',name:'Grande',price:66000}], addons:pizzaAddons },
  { id:'alemana-picante', category:'especiales', badge:'Especial', name:'Alemana Picante', description:'Chorizo uruguayo con toque picante.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:29000},{id:'med',name:'Mediana',price:46000},{id:'grd',name:'Grande',price:66000}], addons:pizzaAddons },
  { id:'rusticana', category:'especiales', badge:'Especial', name:'Rusticana', description:'Jamón, pollo, maíz y anchoas.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:29000},{id:'med',name:'Mediana',price:46000},{id:'grd',name:'Grande',price:66000}], addons:pizzaAddons },
  { id:'campesina', category:'especiales', badge:'Especial', name:'Campesina', description:'Pollo, jamón, maíz y salami.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:31000},{id:'med',name:'Mediana',price:52000},{id:'grd',name:'Grande',price:76000}], addons:pizzaAddons },
  { id:'montecarlo', category:'especiales', badge:'Especial', name:'Montecarlo', description:'Maíz, cebolla, champiñones, aceitunas negras y chorizo español.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:34000},{id:'med',name:'Mediana',price:58000},{id:'grd',name:'Grande',price:82000}], addons:pizzaAddons },
  { id:'caprichosa', category:'especiales', badge:'Especial', name:'Caprichosa', description:'Jamón, maíz, cebolla, pimentón, tocineta y anchoas.', hero:'assets/hero-classic.png', options:[{id:'peq',name:'Pequeña',price:31000},{id:'med',name:'Mediana',price:51000},{id:'grd',name:'Grande',price:72000}], addons:pizzaAddons },
  { id:'mediterranea', category:'especiales', badge:'Especial', name:'Mediterránea', description:'Cebolla, pimentón, aceitunas negras, anchoas y chorizo español.', hero:'assets/hero-premium.png', options:[{id:'peq',name:'Pequeña',price:36000},{id:'med',name:'Mediana',price:64000},{id:'grd',name:'Grande',price:90000}], addons:pizzaAddons },

  { id:'hawaiana-dulce', category:'dulces', badge:'Dulce', name:'Hawaiana', description:'Versión dulce del menú.', hero:'assets/hero-dessert.png', options:[{id:'peq',name:'Pequeña',price:20000},{id:'med',name:'Mediana',price:32000},{id:'grd',name:'Grande',price:42000}], addons:[{id:'extra-fresa',name:'Extra fresa',price:6000},{id:'extra-chocolate',name:'Extra Nutella',price:7000}] },
  { id:'bocadillo-dulce', category:'dulces', badge:'Dulce', name:'Bocadillo', description:'Pizza dulce con bocadillo.', hero:'assets/hero-dessert.png', options:[{id:'peq',name:'Pequeña',price:20000},{id:'med',name:'Mediana',price:32000},{id:'grd',name:'Grande',price:42000}], addons:[{id:'extra-fresa',name:'Extra fresa',price:6000},{id:'extra-chocolate',name:'Extra Nutella',price:7000}] },
  { id:'nutella', category:'dulces', badge:'Dulce', name:'Nutella', description:'Nutella, fresa y almendras fileteadas.', hero:'assets/hero-dessert.png', options:[{id:'peq',name:'Pequeña',price:30000},{id:'med',name:'Mediana',price:50000},{id:'grd',name:'Grande',price:68000}], addons:[{id:'extra-fresa',name:'Extra fresa',price:6000},{id:'extra-chocolate',name:'Extra Nutella',price:7000}] },

  { id:'tequenos', category:'compartir', badge:'Compartir', name:'Tequeños', description:'Ideales para picar mientras llega la pizza.', hero:'assets/hero-sides.png', price:22000 },
  { id:'papas-fritas', category:'compartir', badge:'Compartir', name:'Papas fritas (300 gr)', description:'Crocantes y perfectas para compartir.', hero:'assets/hero-sides.png', price:12000 },
  { id:'tenders', category:'compartir', badge:'Compartir', name:'Tenders de pollo', description:'Tiernos por dentro y súper crujientes.', hero:'assets/hero-sides.png', price:26000 },

  { id:'jugos', category:'bebidas', badge:'Bebida', name:'Jugos naturales', description:'Precio por confirmar en WhatsApp.', hero:'assets/hero-sides.png', price:0, displayPrice:'Consultar' },
  { id:'merengadas', category:'bebidas', badge:'Bebida', name:'Merengadas', description:'Precio por confirmar en WhatsApp.', hero:'assets/hero-sides.png', price:0, displayPrice:'Consultar' },
  { id:'refresco', category:'bebidas', badge:'Bebida', name:'Refresco', description:'Precio por confirmar en WhatsApp.', hero:'assets/hero-sides.png', price:0, displayPrice:'Consultar' },
  { id:'cervezas', category:'bebidas', badge:'Bebida', name:'Cervezas', description:'Precio por confirmar en WhatsApp.', hero:'assets/hero-sides.png', price:0, displayPrice:'Consultar' }
];

const upsellPresets = {
  pizza: ['papas-fritas', 'tequenos', 'refresco'],
  premium: ['tenders', 'cervezas', 'nutella'],
  dulce: ['merengadas', 'jugos'],
  compartir: ['refresco', 'cervezas']
};

let activeCategory = 'all';
let cart = JSON.parse(localStorage.getItem('oreganos_cart') || '[]');
let selectedProduct = null;
let selectedPrice = 0;

const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));
const money = (v) => new Intl.NumberFormat(config.currencyLocale, { style: 'currency', currency: config.currency, maximumFractionDigits: 0 }).format(v || 0);
const saveCart = () => localStorage.setItem('oreganos_cart', JSON.stringify(cart));

function renderFilters(){
  const wrap = $('#categoryFilters');
  wrap.innerHTML = categories.map(cat => `<button class="${cat.id===activeCategory?'is-active':''}" data-category="${cat.id}">${cat.label}</button>`).join('');
  $$('button', wrap).forEach(btn => btn.addEventListener('click', ()=>{ activeCategory = btn.dataset.category; renderFilters(); renderMenu(); }));
}

function getPriceRange(product){
  if(product.options?.length){
    const prices = product.options.map(opt => opt.price);
    return `${money(Math.min(...prices))} · ${money(Math.max(...prices))}`;
  }
  return product.displayPrice || money(product.price);
}

function renderMenu(){
  const grid = $('#menuGrid');
  const list = activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);
  if(!list.length){
    grid.innerHTML = '<div class="empty-state">No hay productos en esta categoría.</div>';
    return;
  }
  grid.innerHTML = list.map(p => `
    <article class="menu-card reveal is-visible">
      <span class="menu-card__badge">${p.badge}</span>
      <div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
      </div>
      <div class="price-pills">${p.options ? p.options.map(opt => `<span class="price-pill">${opt.name}: ${money(opt.price)}</span>`).join('') : `<span class="price-pill">${p.displayPrice || money(p.price)}</span>`}</div>
      <div class="menu-card__footer">
        <small>${getPriceRange(p)}</small>
        <button type="button" data-product="${p.id}">Agregar</button>
      </div>
    </article>
  `).join('');
  $$('button[data-product]', grid).forEach(btn => btn.addEventListener('click', ()=> openProduct(products.find(p => p.id === btn.dataset.product))));
}

function openProduct(product){
  selectedProduct = product;
  const modal = $('#productModal');
  $('#productModalTitle').textContent = product.name;
  $('#productModalDescription').textContent = product.description;
  $('#productModalHero').innerHTML = `<img src="${product.hero}" alt="${product.name}" />`;
  $('#productNote').value = '';
  const optionsWrap = $('#productOptions');
  let html = '';
  if(product.options?.length){
    html += `<div class="option-group"><h4>Elige el tamaño</h4><div class="option-list">`;
    html += product.options.map((opt, idx)=>`
      <label class="option-card">
        <div class="option-card__copy">
          <strong>${opt.name}</strong>
          <small>${money(opt.price)}</small>
        </div>
        <input type="radio" name="size" value="${opt.id}" data-price="${opt.price}" ${idx===0?'checked':''} />
      </label>`).join('');
    html += `</div></div>`;
  }
  if(product.addons?.length){
    html += `<div class="option-group"><h4>Extras recomendados</h4><div class="option-list">`;
    html += product.addons.map(add=>`
      <label class="option-card">
        <div class="option-card__copy">
          <strong>${add.name}</strong>
          <small>${money(add.price)}</small>
        </div>
        <input type="checkbox" name="addon" value="${add.id}" data-price="${add.price}" />
      </label>`).join('');
    html += `</div></div>`;
  }
  if(!html){ html = '<div class="option-group"><h4>Producto simple</h4><p>Solo agrega al carrito y continúa con tu pedido.</p></div>'; }
  optionsWrap.innerHTML = html;
  $$('input', optionsWrap).forEach(i=>i.addEventListener('change', updateSelectedPrice));
  updateSelectedPrice();
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}

function updateSelectedPrice(){
  if(!selectedProduct) return;
  let total = selectedProduct.price || 0;
  let summary = [];
  const size = $('input[name="size"]:checked', $('#productOptions'));
  if(size){
    total = Number(size.dataset.price || 0);
    const found = selectedProduct.options.find(o => o.id === size.value);
    if(found) summary.push(found.name);
  }
  $$('input[name="addon"]:checked', $('#productOptions')).forEach(inp=>{
    total += Number(inp.dataset.price || 0);
    const found = selectedProduct.addons?.find(a => a.id === inp.value);
    if(found) summary.push(found.name);
  });
  selectedPrice = total;
  $('#productModalPrice').textContent = selectedProduct.displayPrice && total===0 ? selectedProduct.displayPrice : money(total);
  $('#addToCartButton').dataset.summary = summary.join(' · ');
}

function closeProductModal(){
  const modal = $('#productModal');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden','true');
  if(!$('#checkoutModal').classList.contains('is-open')) document.body.style.overflow='';
}

function addSelectedToCart(){
  if(!selectedProduct) return;
  const size = $('input[name="size"]:checked', $('#productOptions'));
  const addons = $$('input[name="addon"]:checked', $('#productOptions')).map(inp => selectedProduct.addons.find(a => a.id === inp.value));
  const note = $('#productNote').value.trim();
  const sizeObj = size ? selectedProduct.options.find(o => o.id === size.value) : null;
  const cartItem = {
    uid: `${selectedProduct.id}-${Date.now()}`,
    productId: selectedProduct.id,
    name: selectedProduct.name,
    qty: 1,
    unitPrice: sizeObj ? sizeObj.price : (selectedProduct.price || 0),
    displayPrice: selectedProduct.displayPrice || null,
    size: sizeObj ? sizeObj.name : null,
    addons: addons.filter(Boolean),
    note,
    hero: selectedProduct.hero
  };
  cart.push(cartItem);
  saveCart();
  renderCart();
  closeProductModal();
  showToast('Agregado al carrito');
  openCart();
}

function renderCart(){
  const wrap = $('#cartItems');
  if(!cart.length){
    wrap.innerHTML = '<div class="empty-state" style="background:#f6f6f6;border-color:rgba(0,0,0,.08);color:#666">Tu carrito está vacío. Agrega una pizza para empezar.</div>';
  }else{
    wrap.innerHTML = cart.map(item => {
      const addons = item.addons?.length ? item.addons.map(a => a.name).join(', ') : '';
      const itemTotal = item.unitPrice * item.qty;
      return `
      <article class="cart-item">
        <div class="cart-item__top">
          <div>
            <div class="cart-item__name">${item.name}</div>
            <div class="cart-item__meta">
              ${item.size ? `<span class="cart-chip">${item.size}</span>` : ''}
              ${addons ? `<span class="cart-chip">${addons}</span>` : ''}
              ${item.note ? `<span class="cart-chip">Nota: ${item.note}</span>` : ''}
            </div>
          </div>
          <strong>${item.displayPrice && item.unitPrice===0 ? item.displayPrice : money(itemTotal)}</strong>
        </div>
        <div class="cart-item__actions">
          <div class="qty-controls">
            <button type="button" data-qty="down" data-id="${item.uid}">−</button>
            <strong>${item.qty}</strong>
            <button type="button" data-qty="up" data-id="${item.uid}">+</button>
          </div>
          <button type="button" class="cart-remove" data-remove="${item.uid}">Eliminar</button>
        </div>
      </article>`;
    }).join('');
  }
  $$('[data-qty]').forEach(btn => btn.addEventListener('click', ()=> changeQty(btn.dataset.id, btn.dataset.qty === 'up' ? 1 : -1)));
  $$('[data-remove]').forEach(btn => btn.addEventListener('click', ()=> removeItem(btn.dataset.remove)));

  const totalQty = cart.reduce((acc, item)=> acc + item.qty, 0);
  const subtotal = cart.reduce((acc, item)=> acc + (item.unitPrice * item.qty), 0);
  $('#cartCount').textContent = totalQty;
  $('#cartSubtotal').textContent = money(subtotal);
  $('#mobileCartTotal').textContent = `${totalQty} · ${money(subtotal)}`;
  $('#mobileCartBar').hidden = totalQty === 0;
  renderUpsells();
  renderCheckoutReview();
}

function changeQty(uid, delta){
  cart = cart.map(item => item.uid === uid ? ({...item, qty: item.qty + delta}) : item).filter(item => item.qty > 0);
  saveCart(); renderCart();
}
function removeItem(uid){ cart = cart.filter(item => item.uid !== uid); saveCart(); renderCart(); }

function renderUpsells(){
  const box = $('#upsellSuggestions');
  if(!cart.length){ box.hidden = true; return; }
  const cartIds = new Set(cart.map(i => i.productId));
  let suggestions = [];
  const categoriesInCart = new Set(cart.map(item => products.find(p => p.id===item.productId)?.category));
  if(['clasicas','mixtas','vegetarianas','especiales'].some(c => categoriesInCart.has(c))) suggestions.push(...upsellPresets.pizza);
  if(categoriesInCart.has('premium')) suggestions.push(...upsellPresets.premium);
  if(categoriesInCart.has('dulces')) suggestions.push(...upsellPresets.dulce);
  if(categoriesInCart.has('compartir')) suggestions.push(...upsellPresets.compartir);
  suggestions = [...new Set(suggestions)].filter(id => !cartIds.has(id)).map(id => products.find(p => p.id===id)).filter(Boolean).slice(0,3);
  if(!suggestions.length){ box.hidden = true; return; }
  box.hidden = false;
  box.innerHTML = `<h4>Te puede interesar</h4><div class="upsell-suggestions">${suggestions.map(s => `
    <div class="upsell-suggestion">
      <div><strong>${s.name}</strong><div>${s.displayPrice || getPriceRange(s)}</div></div>
      <button type="button" data-upsell="${s.id}">Agregar</button>
    </div>`).join('')}</div>`;
  $$('[data-upsell]', box).forEach(btn => btn.addEventListener('click', ()=> openProduct(products.find(p => p.id === btn.dataset.upsell))));
}

function openCart(){ $('#cartDrawer').classList.add('is-open'); $('#cartDrawer').setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; }
function closeCart(){ $('#cartDrawer').classList.remove('is-open'); $('#cartDrawer').setAttribute('aria-hidden','true'); if(!$('#productModal').classList.contains('is-open') && !$('#checkoutModal').classList.contains('is-open')) document.body.style.overflow=''; }

function renderCheckoutReview(){
  const review = $('#checkoutReview');
  const subtotal = cart.reduce((acc, item)=> acc + (item.unitPrice * item.qty), 0);
  if(!cart.length){ review.innerHTML = '<div class="empty-state" style="background:#fff;color:#666;border-color:rgba(0,0,0,.08)">Aún no hay productos en tu pedido.</div>'; return; }
  review.innerHTML = cart.map(item => `<div class="review-line"><div><strong>${item.qty} × ${item.name}</strong><small>${[item.size, item.addons?.map(a=>a.name).join(', '), item.note].filter(Boolean).join(' · ') || 'Sin observaciones'}</small></div><strong>${item.displayPrice && item.unitPrice===0 ? item.displayPrice : money(item.unitPrice * item.qty)}</strong></div>`).join('') + `<hr style="border:none;border-top:1px solid rgba(0,0,0,.08);width:100%"><div class="review-line"><strong>Subtotal</strong><strong>${money(subtotal)}</strong></div>`;
}

function openCheckout(){
  if(!cart.length){ showToast('Agrega productos antes de continuar'); return; }
  $('#checkoutModal').classList.add('is-open');
  $('#checkoutModal').setAttribute('aria-hidden','false');
  renderCheckoutReview();
  document.body.style.overflow='hidden';
}
function closeCheckout(){ $('#checkoutModal').classList.remove('is-open'); $('#checkoutModal').setAttribute('aria-hidden','true'); if(!$('#cartDrawer').classList.contains('is-open') && !$('#productModal').classList.contains('is-open')) document.body.style.overflow=''; }

function buildWhatsAppMessage(formData){
  const subtotal = cart.reduce((acc, item)=> acc + (item.unitPrice * item.qty), 0);
  const lines = [
    `🍕 *Nuevo pedido - ${config.businessName}*`,
    '',
    `*Cliente:* ${formData.get('name')}`,
    `*Teléfono:* ${formData.get('phone')}`,
    `*Tipo:* ${formData.get('orderType') === 'delivery' ? 'Delivery' : 'Retiro en local'}`,
    `*Pago:* ${formData.get('payment')}`,
    formData.get('orderType') === 'delivery' ? `*Dirección:* ${formData.get('address') || 'Por confirmar'}` : `*Dirección:* Retira en local`,
    '',
    '*Pedido:*'
  ];
  cart.forEach(item => {
    const details = [item.size, item.addons?.map(a=>a.name).join(', '), item.note].filter(Boolean).join(' · ');
    const priceLine = item.displayPrice && item.unitPrice===0 ? 'Precio por confirmar' : money(item.unitPrice * item.qty);
    lines.push(`• ${item.qty} x ${item.name}${details ? ` (${details})` : ''} — ${priceLine}`);
  });
  lines.push('', `*Subtotal estimado:* ${money(subtotal)}`);
  if(formData.get('notes')) lines.push(`*Notas adicionales:* ${formData.get('notes')}`);
  lines.push('', 'Gracias 🙌');
  return lines.join('\n');
}

function showToast(message){
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(()=> toast.classList.remove('is-visible'), 2200);
}

function setupReveal(){
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting){ entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } });
  }, { threshold:.15 });
  $$('.reveal').forEach(el => observer.observe(el));
}

function init(){
  renderFilters(); renderMenu(); renderCart(); setupReveal();
  $('#cartTrigger').addEventListener('click', openCart);
  $('#mobileCartButton').addEventListener('click', openCart);
  $('#checkoutButton').addEventListener('click', openCheckout);
  $('#addToCartButton').addEventListener('click', addSelectedToCart);
  $$('[data-close-cart]').forEach(el => el.addEventListener('click', closeCart));
  $$('[data-close-modal]').forEach(el => el.addEventListener('click', closeProductModal));
  $$('[data-close-checkout]').forEach(el => el.addEventListener('click', closeCheckout));
  document.addEventListener('keydown', (e)=>{ if(e.key==='Escape'){ closeCart(); closeProductModal(); closeCheckout(); } });
  const orderType = $('[name="orderType"]', $('#checkoutForm'));
  const addressField = $('[data-address-field]');
  const toggleAddress = () => {
    const isDelivery = orderType.value === 'delivery';
    addressField.hidden = !isDelivery;
    $('[name="address"]', addressField).required = isDelivery;
  };
  toggleAddress();
  orderType.addEventListener('change', toggleAddress);
  $('#checkoutForm').addEventListener('submit', (e)=>{
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const text = buildWhatsAppMessage(fd);
    const url = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  });

  if('serviceWorker' in navigator){
    window.addEventListener('load', ()=> navigator.serviceWorker.register('service-worker.js').catch(()=>{}));
  }
}

init();

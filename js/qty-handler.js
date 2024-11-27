const minusBtn = document.getElementById('minus-btn');
const addBtn = document.getElementById('add-btn');
const qtyCount = document.querySelector('.qty-count');
const cartCount = document.querySelector('.cart-count');
const cartBtn = document.getElementById('add-cart-btn');

let qty = parseInt(localStorage.getItem('qty')) || 0;
let cartQty = parseInt(localStorage.getItem('cartQty')) || 0;

qtyCount.textContent = qty;
cartCount.textContent = cartQty;

minusBtn.addEventListener('click', () => {
  if (qty > 0) {
    qty--;
    localStorage.setItem('qty', qty);
    qtyCount.textContent = qty;
  }
});

addBtn.addEventListener('click', () => {
  qty++;
  localStorage.setItem('qty', qty);
  qtyCount.textContent = qty;
});

cartBtn.addEventListener('click', () => {
  cartQty += qty;
  localStorage.setItem('cartQty', cartQty);
  cartCount.textContent = cartQty;
  qty = 0;
  localStorage.setItem('qty', qty);
  qtyCount.textContent = qty;
});
const minusBtn = document.getElementById('minus-btn');
const addBtn = document.getElementById('add-btn');
const qtyCount = document.querySelector('.qty-count');

let qtyStore = JSON.parse(localStorage.getItem('qty')) || 0;
qtyCount.textContent = qtyStore;

minusBtn.addEventListener('click', () => {
    qtyStore = localStorage.setItem('qty', qtyCount.textContent--);
});
addBtn.addEventListener('click', () => {
    qtyStore = localStorage.setItem('qty', qtyCount.textContent++);
});

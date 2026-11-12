const products = [
  { name: "Donat Mini Coklat", price: 10000, desc: "Donat mini empuk dengan taburan toping coklat lumer premium." },
  { name: "Donat Mini Keju", price: 10000, desc: "Donat mini lembut dengan parutan keju melimpah dan susu." }
];

let selectedIndex = 0;
let cart = [];

function selectProduct(index) {
  selectedIndex = index;
  document.querySelectorAll('.pcard').forEach((card, idx) => {
    if(idx === index) card.classList.add('active');
    else card.classList.remove('active');
  });
  document.getElementById('prodTitle').innerText = products[index].name;
  document.getElementById('prodDesc').innerText = products[index].desc;
}

function addToCart() {
  const p = products[selectedIndex];
  const existing = cart.find(item => item.name === p.name);
  if(existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...p, qty: 1 });
  }
  updateCartUI();
}

function updateCartUI() {
  const listEl = document.getElementById('cartList');
  const totalEl = document.getElementById('cartTotalPrice');
  if(cart.length === 0) {
    listEl.innerHTML = '<li class="cart-empty">Belum ada produk yang dipilih.</li>';
    totalEl.innerText = 'Rp 0';
    return;
  }
  let html = '';
  let total = 0;
  cart.forEach(item => {
    let subtotal = item.price * item.qty;
    total += subtotal;
    html += `<li><span class="nm"><b>${item.name}</b> (x${item.qty})</span> <span>Rp ${subtotal.toLocaleString('id-ID')}</span></li>`;
  });
  listEl.innerHTML = html;
  totalEl.innerText = `Rp ${total.toLocaleString('id-ID')}`;
}

function checkoutWhatsApp() {
  if(cart.length === 0) {
    alert('Keranjang masih kosong!');
    return;
  }
  let msg = "Halo Admin Donat Mini Sindur, saya ingin memesan:\n";
  let total = 0;
  cart.forEach(item => {
    msg += `- ${item.name} (x${item.qty}) : Rp ${item.price * item.qty}\n`;
    total += item.price * item.qty;
  });
  msg += `\nTotal Keseluruhan: Rp ${total}\nMohon segera diproses ya kak. Terima kasih!`;
  const url = `https://wa.me/6281234567890?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}
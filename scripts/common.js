// common.js
function getCart() {
    const data = localStorage.getItem('cart_area');
    return data ? JSON.parse(data) : [];
}

function saveCart(cartArray) {
  localStorage.setItem('cart_area', JSON.stringify(cartArray));
}


function addToCartItem(name, price, qty) {
  qty = parseInt(qty, 10);
  price = parseFloat(price);

  if (!name || !qty || qty <= 0 || !Number.isFinite(price)) return;

  const cart = getCart();
  const existing = cart.find(item => item.name === name);

  if (existing) {
    existing.qty = parseInt(existing.qty, 10) + qty;
  } else {
    cart.push({ name, price, qty });
  }

  saveCart(cart);
}
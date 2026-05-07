/* Case Project 6 Store JavaScript */
// store.js

// ── Lightbox Functions ──

function openLightbox(src, caption) {
  const modal  = document.getElementById('lightboxModal');
  const img    = document.getElementById('lightboxImg');
  const cap    = document.getElementById('lightboxCaption');

  img.src        = src;
  img.alt        = caption;
  cap.textContent = caption;

  modal.classList.add('active');
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  modal.classList.remove('active');
}

// Close lightbox with the Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});

// ── Cart Functions ──

function addToCart(name, price, idNum) {
    // 1. Get the values the user picked from the dropdowns
    const chosenQty = parseInt(document.getElementById('qty-' + idNum).value, 10);

    // 2. Get the current cart from storage
    let cart = getCart();

    // 3. Check if the exact same item, add quantity
    let existingItem = cart.find(item => item.name === name);
    
    if (existingItem) {
        // If it exists, just add the new quantity to the existing quantity
        existingItem.qty = parseInt(existingItem.qty, 10) + chosenQty;
    } else {
        cart.push({
            name: name,
            price: price,
            qty: chosenQty
        });
    }

    saveCart(cart);
    }
    // 4. Save and alert
    saveCart(cart);
    alert(chosenQty + " " + name + " added to cart!");
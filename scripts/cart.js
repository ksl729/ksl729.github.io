/* Case Project 6 Cart JavaScript */
/// cart.js

function renderCart() {
    const cart = getCart();
    const display = document.getElementById('cart-area');
    // Submit Order button on the cart page
    const submitOrderBtn = document.getElementById('buttonSubmitOrder');

    // If the target container isn't found, don't error—just stop.
    if (!display) return;

    display.innerHTML = "";
    let total = 0; // this will be the subtotal (before tax)

    // Check if cart is empty
    if (cart.length === 0) {
        // Disable the Submit Order button if cart is empty
        if (submitOrderBtn) {
            submitOrderBtn.disabled = true;
            submitOrderBtn.style.pointerEvents = "none";
            submitOrderBtn.style.opacity = "0.5";
        }

        const emptyMsg = document.createElement('div');
        emptyMsg.className = "empty-cart";
        emptyMsg.innerHTML = "<h3>Your cart is empty</h3><p>Go back to the store to add some items!</p>";
        display.appendChild(emptyMsg);

        // Reset totals if the elements exist
        const totalBox = document.getElementById('total-box');
        const taxBox = document.getElementById('tax-box');
        const grandTotalBox = document.getElementById('grand-total-box');

        if (totalBox) totalBox.textContent = "0.00";
        if (taxBox) taxBox.textContent = "0.00";
        if (grandTotalBox) grandTotalBox.textContent = "0.00";
        return;
    }

    // Enable the Submit Order button if cart has items
    if (submitOrderBtn) {
        submitOrderBtn.disabled = false;
        submitOrderBtn.style.pointerEvents = "auto";
        submitOrderBtn.style.opacity = "1";
    }

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const row = document.createElement('div');
        row.className = "cart-row";

        // 1. Name Display
        const title = document.createElement('strong');
        title.className = "cart-item-title";
        title.textContent = item.name;
        row.appendChild(title);

        // 2. Price Display
        const priceTag = document.createElement('span');
        priceTag.className = "cart-price";
        priceTag.textContent = "$" + parseFloat(item.price).toFixed(2);
        row.appendChild(priceTag);

        // 3. Quantity Changer
        const qtySel = document.createElement('select');
        const quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        quantities.forEach(q => {
            const opt = document.createElement('option');
            opt.textContent = q;
            if (q == item.qty) opt.selected = true;
            qtySel.appendChild(opt);
        });

        qtySel.onchange = function () {
            updateItem(i, 'qty', parseInt(qtySel.value, 10));
        };

        row.appendChild(qtySel);

        // 6. Remove Button
        const remBtn = document.createElement('button');
        remBtn.textContent = "Remove";
        remBtn.className = "remove-button action-button";
        remBtn.onclick = function () {
            cart.splice(i, 1);
            saveCart(cart);
            renderCart();
        };

        row.appendChild(remBtn);

        display.appendChild(row);
        total += (parseFloat(item.price) * parseInt(item.qty, 10));
    }

    // Totals
    const totalBox = document.getElementById('total-box'); // Subtotal display
    const taxBox = document.getElementById('tax-box');
    const grandTotalBox = document.getElementById('grand-total-box');

    const subtotal = total;
    const taxRate = 0.0825;
    const tax = subtotal * taxRate;
    const grandTotal = subtotal + tax;

    if (totalBox) totalBox.textContent = subtotal.toFixed(2);
    if (taxBox) taxBox.textContent = tax.toFixed(2);
    if (grandTotalBox) grandTotalBox.textContent = grandTotal.toFixed(2);

    // Redirect to confirmation when submitting
    if (submitOrderBtn && !submitOrderBtn.dataset.bound) {
        submitOrderBtn.dataset.bound = "true";
        submitOrderBtn.addEventListener('click', (e) => {
            // If somehow clicked while disabled/empty, prevent navigation
            if (cart.length === 0) {
                e.preventDefault();
                return;
            }
            window.location.href = 'order_submit.html';
        });
    }
}

// IMPORTANT: render cart when the cart page loads
window.addEventListener("load", renderCart);

function updateItem(index, field, newValue) {
    let cart = getCart();
    cart[index][field] = newValue; // Update the specific field (qty)
    saveCart(cart);
    renderCart(); // Refresh to show new totals
}
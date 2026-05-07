/* Case Project 6 Order Page JavaScript */
"use strict";

window.addEventListener("load", function () {
  const orderForm = document.forms.orderForm;

  const model = orderForm.elements.model;
  const qty = orderForm.elements.qty;

  const plan = orderForm.elements.plan;
  const qtyPlan = orderForm.elements.qtyPlan;

  // Add event listener for every form control
  for (let i = 0; i < orderForm.elements.length; i++) {
    orderForm.elements[i].addEventListener("change", calcOrder);
  }

  // Initial calculation so boxes are filled immediately
  calcOrder();

  // Dialog box shows exactly what was added when "Add to Cart" is clicked (form submit)
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission to another page
    const modelName = model.options[model.selectedIndex].text;
    const modelPrice = Number(model.value);
    const modelQuantity = Number(qty.value);

    const planName = plan.options[plan.selectedIndex].text;
    const planPrice = Number(plan.value);
    const planQuantity = Number(qtyPlan.value);

    // Add items to cart
    addToCartItem(modelName, modelPrice, modelQuantity);
    addToCartItem(planName, planPrice, planQuantity);

    alert(
      `Added to cart:\n\n` +
        `• ${modelName} (Qty: ${modelQuantity})\n` +
        `• ${planName} (Qty: ${planQuantity})`
    );
});

  function calcOrder() {
    // Values
    const modelValue = Number(model.value);
    const modelQty = Number(qty.value);

    const planValue = Number(plan.value);
    const planQty = Number(qtyPlan.value);

    // Costs
    const modelCost = modelValue * modelQty;
    const planCost = planValue * planQty;

    // Subtotal
    const subtotal = modelCost + planCost;

    // Tax (8.25%)
    const salesTax = subtotal * 0.0825;

    // Total
    const totalCost = subtotal + salesTax;

    // Display
    orderForm.elements.modelCost.value = modelCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    orderForm.elements.planCost.value = planCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    orderForm.elements.subtotal.value = subtotal.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    orderForm.elements.salesTax.value = salesTax.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    orderForm.elements.totalCost.value = totalCost.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    // Hidden names
    orderForm.elements.modelName.value =
      model.options[model.selectedIndex].text;
    orderForm.elements.planName.value = plan.options[plan.selectedIndex].text;
  }
});
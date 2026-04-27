/*    JavaScript 7th Edition
      Chapter 6
      Chapter case

      Order Form Code
      Author: Karly Leach
      Date:   04/24/2026

      Filename: order_page.js
 */


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
    orderForm.elements.modelName.value = model.options[model.selectedIndex].text;
    orderForm.elements.planName.value = plan.options[plan.selectedIndex].text;
  }
});

// Makes prices appear immediately
// The fixed HTML ensures your form exists where the browser expects it.
// The JS calls calcOrder() on load and safely reads the selected values.
// Also ensures planCost uses qtyPlan, so totals are correct if you change add-on quantity.
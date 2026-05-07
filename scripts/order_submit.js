/* Case Project 6 Order Submit JavaScript */
"use strict";

const billShipForm = document.getElementById("billShip");
const useShip = document.getElementById("useShip");

function copyShippingToBilling() {
  if (!useShip || !useShip.checked) return;

  const setVal = (shipId, billId) => {
    const shipEl = document.getElementById(shipId);
    const billEl = document.getElementById(billId);
    if (shipEl && billEl) billEl.value = shipEl.value;
  };

  setVal("firstnameShip", "firstnameBill");
  setVal("lastnameShip", "lastnameBill");
  setVal("address1Ship", "address1Bill");
  setVal("address2Ship", "address2Bill");
  setVal("cityShip", "cityBill");
  setVal("countryShip", "countryBill");
  setVal("codeShip", "codeBill");

  const stateShip = document.getElementById("stateShip");
  const stateBill = document.getElementById("stateBill");
  if (stateShip && stateBill) {
    stateBill.selectedIndex = stateShip.selectedIndex;
  }
}

// Hook checkbox (if it exists)
if (useShip) {
  useShip.addEventListener("change", copyShippingToBilling);

  // If already checked on load
  if (useShip.checked) {
    copyShippingToBilling();
  }
}

// Optional: prevent submit if browser validity fails
if (billShipForm) {
  billShipForm.addEventListener("submit", function (event) {
    // Let the browser check required inputs first
    if (!billShipForm.checkValidity()) {
      event.preventDefault();
      billShipForm.reportValidity();
    }
  });
}
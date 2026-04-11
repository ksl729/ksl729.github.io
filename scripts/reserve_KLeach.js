/*    Case Project 3 Reserve JavaScript

      Application to calculate the cost of a reservation plus tax
      Author: Karly Leach
      Date:   04.10.2026

      Filename: reserve_KLeach.js
 */

// declare global constants for the application
const ONE_QUEEN_PRICE = 99.99;     // price of room w/ one queen bed
const TWO_QUEEN_PRICE = 109.99;    // price of room w/ two queen beds
const REG_KING_PRICE = 139.99;     // price of room w/ king bed regular amenities
const DEL_KING_PRICE = 169.99;     // price of room w/ king bed deluxe amenities
const ULT_KING_PRICE = 215.99;     // price of room w/ king bed maximum amenities
const VALET_PRICE = 15.00;          // price of valet parking service
const ROOM_SERVICE_PRICE = 50.00;   // price of room service
const LAUNDRY_PRICE = 35.00;        // price of laundry service
const SPA_PRICE = 75.00;            // price of spa service
const SALES_TAX = 0.0825;          // price of sales tax

// runs the calcTotal function
document.getElementById("one queen").onclick = calcTotal;
document.getElementById("two queen").onclick = calcTotal;
document.getElementById("regular king").onclick = calcTotal;
document.getElementById("deluxe king").onclick = calcTotal;
document.getElementById("ultimate king").onclick = calcTotal;
document.getElementById("valet parking").onclick = calcTotal;
document.getElementById("room service").onclick = calcTotal;
document.getElementById("laundry service").onclick = calcTotal;
document.getElementById("spa service").onclick = calcTotal;

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
   return "$" + value.toFixed(2);
}

// estimate the total cost
// declares the variables equal to the checked property with the ids of the variables
function calcTotal() {
   let cost = 0;
   let oneQueen     = document.getElementById("one queen").checked;
   let twoQueen     = document.getElementById("two queen").checked;
   let regKing      = document.getElementById("regular king").checked;
   let delKing      = document.getElementById("deluxe king").checked;
   let ultKing      = document.getElementById("ultimate king").checked;
   let valetPark    = document.getElementById("valet parking").checked;
   let roomService  = document.getElementById("room service").checked;
   let laundry      = document.getElementById("laundry service").checked;
   let spa          = document.getElementById("spa service").checked;

   // Add the cost of room w/ one queen bed
   cost += (oneQueen)    ? ONE_QUEEN_PRICE    : 0;

   // Add the cost of room w/ two queen beds
   cost += (twoQueen)    ? TWO_QUEEN_PRICE    : 0;

   // Add the cost of room w/ king bed regular amenities
   cost += (regKing)     ? REG_KING_PRICE     : 0;

   // Add the cost of room w/ king bed deluxe amenities
   cost += (delKing)     ? DEL_KING_PRICE     : 0;

   // Add the cost of room w/ king bed maximum amenities
   cost += (ultKing)     ? ULT_KING_PRICE     : 0;

   // Add the cost of valet parking service
   cost += (valetPark)   ? VALET_PRICE        : 0;

   // Add the cost of room service
   cost += (roomService) ? ROOM_SERVICE_PRICE : 0;

   // Add the cost of laundry service
   cost += (laundry)     ? LAUNDRY_PRICE      : 0;

   // Add the cost of spa service
   cost += (spa)         ? SPA_PRICE          : 0;

   // Display the subtotal, tax, and total
   document.getElementById("roomTotal").innerHTML = formatCurrency(cost);

   let tax = cost * SALES_TAX;
   document.getElementById("roomTax").innerHTML   = formatCurrency(tax);

   let totalCost = cost + tax;
   document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}
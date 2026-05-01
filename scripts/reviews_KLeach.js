/*    Case Project 5 Reviews JavaScript

      Application to display reviews
      Author: Karly Leach
      Date:   04.17.2026

      Filename: reviews_KLeach.js
 */

let reviewers = ["BillyDeeWill72", "n_j_jenkins", "rn_for_life08", "runnoft_193"];
let reviewType = ["P", "N", "", ""]
let stars = [5, 3, 2, 4];
let reviewDates = ["04/07/2025", "08/22/2025", "01/21/2026", "02/20/2026"];
let reviews = [
   "The Luna Room was perfect for our anniversary. Private, whimsical and peaceful. 10/10 would stay again.",
   "The pool was under renovation, which was a bummer being there during the summer. But I did enjoy the stargazing",
   "Our champagne arrived warm and not with crystal glasses. While they did refund the champagne, I would have just appreciated if the bottle always came chilled.",
   "The hiking trails are absolutely breathtaking. I wish there was a seating area set up on one of the trails so we could sit and enjoy the view.",
];

let reviewTitles = ["Great Anniversary Pick", "No Pool in August", "Who Drinks Warm Champagne?", "Stunning Trail/Views"];

function starImages(rating) {
      let imageText = "";
      for (let i = 1; i <= rating; i++) {
            imageText += "<img src='../images/star.png' alt=''>";
      }
      return imageText;
}

for (let i = 0; i < reviewers.length; i++) {
   let reviewCode = "";

   if (reviewType[i] === "p") {
      reviewCode += "<table class='prime'>";
   } else if (reviewType[i] === "N") {
      reviewCode += "<table class='new'>";
   } else {
      reviewCode += "<table>";
   }

    reviewCode += "<caption>" + reviewTitles[i] + "</caption>";
    reviewCode += "<tr><th>By</th><td>" + reviewers[i] + "</td></tr>";
    reviewCode += "<tr><th>Review Date</th><td>" + reviewDates[i] + "</td></tr>";
    reviewCode += "<tr><th>Rating</th><td>" + starImages(stars[i]) + "</td></tr>";
    reviewCode += "<tr><td colspan='2'>" + reviews[i] + "</td></tr>";
    reviewCode += "</table>";

    document.getElementsByTagName ("article") [0].insertAdjacentHTML("beforeEnd", reviewCode);
 }
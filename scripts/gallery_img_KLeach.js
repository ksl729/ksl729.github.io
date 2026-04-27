/*    Case Project 5 Reviews JavaScript

    Application to store images for gallery
    Author: Karly Leach
    Date:   04.17.2026

    Filename: gallery_img_KLeach.js
 */

"use strict";

// Title of the slideshow
let lightboxTitle = "Come Back to Earth";

// Names of the image files shown in the slideshow
let imgFiles = ["../images/entrance.png", "../images/foyer_2.jpg", "../images/foyer_1.jpg", "../images/room_service_2.jpg", "../images/room_service_1.png", "../images/gym_1.jpg", "../images/champagne.png", "../images/spa_2.jpg", "../images/spa_1.jpg", "../images/Slide4.png", "../images/concert_cave_1.png", "../images/concert_cave_2.png", "../images/hiking_trail_2.jpg", "../images/Slide2.png", "../images/stargazing_2.jpg", "../images/Slide3.png", "../images/sol_bed.png", "../images/sol_bed_2.png", "../images/sol_bed_3.png", "../images/sol_pool.png", "../images/sol_pool_1.png", "../images/sol_pool_2.png", "../images/sol_pool_3.png", "../images/Slide1.png", "../images/sol_bathroom.png", "../images/sol2.jpg", "../images/sol1.jpg", "../images/luna_room_main.png", "../images/luna_hot_tub.png", "../images/luna_bathroom.png", "../images/luna_room_outside.jpg", "../images/luna_room_view.jpg", "../images/luna1.jpg", "../images/luna2.jpg", "../images/scenery.jpg"];

// Captions associated with each image
let imgCaptions = new Array(35);
imgCaptions[0]="Welcome to Terra Cottages";
imgCaptions[1]="Terra Cottages Foyer"; 
imgCaptions[2]=" "; 
imgCaptions[3]="Room Service Available"; 
imgCaptions[4]=" ";
imgCaptions[5]="24/7 Gym";
imgCaptions[6]="Enjoy Champagne to Top off Your Escape";
imgCaptions[7]="Relax and Unwind with one of Our Spa Packages";
imgCaptions[8]=" ";
imgCaptions[9]="Concert in the Caves";
imgCaptions[10]="Get Lost in the Music";
imgCaptions[11]=" "; 
imgCaptions[12]=" ";
imgCaptions[13]="Nature's Beauty Awaits";
imgCaptions[14]="Stargazing";
imgCaptions[15]=" "; 
imgCaptions[16]=" "; 
imgCaptions[17]="Embrace the Warmth of the Sol Room"; 
imgCaptions[18]=" "; 
imgCaptions[19]=" ";
imgCaptions[20]="Terra Cottage Resort Pool";
imgCaptions[21]=" ";
imgCaptions[22]=" ";
imgCaptions[23]=" ";
imgCaptions[24]=" ";
imgCaptions[25]=" ";
imgCaptions[26]=" ";
imgCaptions[27]="Whisk Away into Whimsy in the Luna Room";
imgCaptions[28]="Soak under the Stars";
imgCaptions[29]=" ";
imgCaptions[30]=" ";
imgCaptions[31]=" ";
imgCaptions[32]=" ";
imgCaptions[33]=" ";
imgCaptions[34]=" ";

// Count of images in the slideshow
let imgCount = imgFiles.length;
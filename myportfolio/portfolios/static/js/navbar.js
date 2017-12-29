/*
 **********************************************************
 * OPAQUE NAVBAR SCRIPT
 **********************************************************
 */

// Toggle tranparent navbar when the user scrolls the page

$(window).scroll(function() {
  if ($(this).scrollTop() > 100) /*height in pixels when the navbar becomes non opaque*/ {
    $('.opaque-navbar').addClass('opaque');
  } else {
    $('.opaque-navbar').removeClass('opaque');
  }
});

// $(document).ready(function() {
//   // Transition effect for navbar
//   $(window).scroll(function() {
//     // checks if window is scrolled more than 500px, adds/removes solid class
//     if ($(this).scrollTop() > 100) {
//       $('.navbar').addClass('solid');
//     } else {
//       $('.navbar').removeClass('solid');
//     }
//   });
// });

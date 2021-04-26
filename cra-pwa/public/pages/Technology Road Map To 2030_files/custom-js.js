 // Open offsite navigation.
 $('#nav-expander').on('click', function(e) {
    e.preventDefault();
    $('nav').toggleClass('nav-expanded');
});

// Close offsite navigation.
 $('.menu .close').on('click', function(e) {
    e.preventDefault();
    $('nav').toggleClass('nav-expanded');
});

// Close offsite navigation after user click on an link in navigation.
$('.menu  a').on('click', function(e) {
    //se.preventDefault();
    $('nav').removeClass('nav-expanded');
});

$('.body').on('click', function(e) {
    //e.preventDefault();
    $('nav').removeClass('nav-expanded');
});

$('.body2').on('click', function(e) {
    //e.preventDefault();
    $('nav').removeClass('nav-expanded');
});

$('.btn').on('click', function(e) {
    //e.preventDefault();
    $('nav').removeClass('nav-expanded');
});

//ending of offsite navigation

'use strict';

 // Open offsite navigation.
 $('#nav-expander2').on('click', function(e) {
    e.preventDefault();
    $('nav').toggleClass('nav-expanded2');
});

// Close offsite navigation.
 $('.menu-sec .close').on('click', function(e) {
    e.preventDefault();
    $('nav').toggleClass('nav-expanded2');
});

// Close offsite navigation after user click on an link in navigation.
$('.menu-sec  a').on('click', function(e) {
    //se.preventDefault();
    $('nav').removeClass('nav-expanded2');
});

$('.body').on('click', function(e) {
    //e.preventDefault();
    $('nav').removeClass('nav-expanded2');
});

$('.body2').on('click', function(e) {
    //e.preventDefault();
    $('nav').removeClass('nav-expanded2');
});

$('.btn').on('click', function(e) {
    //e.preventDefault();
    $('nav').removeClass('nav-expanded2');
});


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
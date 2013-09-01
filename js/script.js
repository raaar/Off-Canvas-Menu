




$( document ).ready(function() {

	var element = document.getElementById('open-nav');

	var swipeRight = Hammer($('body')).on("swiperight", function(event) {
      	toggleMenu();
	});

	var swipeLeft = Hammer($('body')).on("swipeleft", function(event) {
      	toggleMenu();
	});

	$('.menu-button').click(function() {
		toggleMenu();
	});



});


function toggleMenu() {
   	$('body').toggleClass('swipeBody');	
	$('#main-nav').toggleClass('slideIn');
}
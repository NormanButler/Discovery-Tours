// $(document).ready(function() {

// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }

// });


$(document).ready() 

	$('#hamburger').on('click', function() {
		$('nav').slideToggle();
	});

	$(window).on('resize', function() {
		if ($(window).width() >= 1000 && !$('nav').is(':visible')) {
			$('nav').show();
		} else if ($(window).width() < 1000 && $('nav').is(':visible')) {
			$('nav').hide();
		}
	});
// Scroll effect for progress bar
window.onscroll = function() {myFunction()};
function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("my-bar").style.width = scrolled + "%";
}
$("input[name=my-num-field]").on("blur", function(e){
     var myval = $(this).val();

     if(myval.length < 10) {
          alert("Value must contain 10 characters.");
          $(this).focus();
     }
});

// Open Menu
$(document).ready(function(){
  $('.menu').click(function(){
    $('.sticky-top').toggleClass('bottom')
    $('ul').toggleClass('active');
  })
})

//Modal
$(function() {
    	$('img').on('click', function() {
			$('.enlargeImageModalSource').attr('src', $(this).attr('src'));
			$('#enlargeImageModal').modal('show');
		});
});

//Dissapear
$(window).bind('scroll', function() {
     if ($(window).scrollTop() > 100) {
         $('#cta').hide();
     }
     else {
         $('#cta').show();
     }
});

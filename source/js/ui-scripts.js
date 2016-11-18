$(document).ready(function(){
//modal
$("*[data-modalpop='yes']").on("click", function(e) {
  e.preventDefault();
  $('#modalPopup').find('#modalPopup-viewport').attr("src", $(this).attr('href'));
	$('#modalPopup').find('#modalPopup-viewport').height($(this).attr('data-popinnerheight')?$(this).attr('data-popinnerheight'):"auto");
  $('#modalPopup').find('#modalPopupTitle').text($(this).attr('data-poptitle'));
  $('#modalPopup').modal('show');
  return false;
});


// Toggle menu buttons
$('.header-menu-toggle').click(function(){
    $(this).toggleClass("fa-bars")
           .toggleClass("fa-times");
});

$('.footer-menu-btn').click(function(){
    $('.footer-menu-toggle').toggleClass("fa-minus")
           					.toggleClass("fa-plus");
});

$('.info-box-toggle').click(function(){
	$('.info-box').toggleClass('show-info')
				  .toggleClass('hide-info');
	$('.info-box-toggle').toggleClass('active');
});

$('.info-box-toggle').click(function(){
	$('.info-box-panel').toggleClass('show-info')
				  .toggleClass('hide-info');
	$('.info-box-toggle').toggleClass('active');
});

});

function closeModal() {
	$('#modalPopup').modal('hide');
}
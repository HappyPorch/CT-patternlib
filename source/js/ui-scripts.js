$(document).ready(function(){

//browser popup
$("*[data-browserpop='yes']").on("click", function(e) {
  e.preventDefault();
	var height = $(this).attr('data-popheight') ? $(this).attr('data-popheight') : "360";
	var width = $(this).attr('data-popwidth') ? $(this).attr('data-popwidth') : "480";
	window.open($(this).attr('href'), "CT-browserpop", "width="+width+",height="+height+",resizable=yes,toolbar=no,menubar=no,location=no,status=no");
	return false;
});


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
	$(this).next().toggleClass('show-info')
				  .toggleClass('hide-info');
	$(this).toggleClass('active');
	$(this).next().next().toggle();
});
$('.info-box-lower-toggle').click(function(){
	$(this).toggle();
	$(this).prev().toggleClass('show-info')
				  .toggleClass('hide-info');
	$(this).prev().prev().toggleClass('active');
});


});

function closeModal() {
	$('#modalPopup').modal('hide');
}
function showError(divId, msg) {
	$('#'+divId).html(msg);
	$('#'+divId).show();
}
function hideError(divId) {
	$('#'+divId).html("msg");
	$('#'+divId).hide();
}
function showLoader() {
	$("*[data-loader='y']").show();
}
function hideLoader() {
	$("*[data-loader='y']").hide();
}
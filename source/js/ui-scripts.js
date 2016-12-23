// add string.Format
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined' ? args[number] : match;
    });
  };
}

$(document).ready(function(){

//browser popup
$("*[data-browserpop='yes']").on("click", function(e) {
  e.preventDefault();
	var height = $(this).attr('data-popheight') ? $(this).attr('data-popheight') : "360";
	var width = $(this).attr('data-popwidth') ? $(this).attr('data-popwidth') : "480";
	window.open($(this).attr('href'), "CT-browserpop", "width="+width+",height="+height+",resizable=yes,toolbar=no,menubar=no,location=no,status=no,scrollbars=yes");
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

//disable invalid days in month when we are using 3 selects (d/m/y)
$("*[data-daysinput]").on("change", function() {
	var daySelect = $("#"+$(this).data("daysinput"));
	var month = $("#"+$(this).data("monthsinput")).val();
	var year = $("#"+$(this).data("yearsinput")).val();
	var day = daySelect.val();
	var daysInSelectedMonth = daysInMonth(month, year);
	if (day>daysInSelectedMonth)
		daySelect.val(0);
	daySelect.children("option").prop("disabled", false);
	daySelect.children("option").filter(function() {
			return this.value > daysInSelectedMonth;
	}).prop("disabled", true);
});

// Toggle menu buttons
$('.header-menu-toggle').click(function(){
    $(this).toggleClass("fa-bars")
           .toggleClass("fa-times");
		$("#header-welcome").toggle();
});

$('.footer-menu-btn').click(function(){
    $('.footer-menu-toggle').toggleClass("fa-minus")
           					.toggleClass("fa-plus");
});

$('.info-box-toggle').click(function(){
	$(this).next().toggleClass('show-info')
				  .toggleClass('hide-info');
	$(this).toggleClass('active');
});
$('.info-box-lower-toggle').click(function(){
	$(this).parent().parent().toggleClass('show-info')
				  .toggleClass('hide-info');
	$(this).parent().parent().prev().toggleClass('active');
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

function daysInMonth(month,year) {
    return new Date(year, month, 0).getDate();
}

function showErrorAlert(container, text) {
 resetAlert(container);
 container.html(text);
 container.addClass("alert alert-danger");
 container.show();
}
function showInfoAlert(container, text) {
 resetAlert(container);
 container.html(text);
 container.addClass("alert alert-info");
 container.show();
}
function showSuccessAlert(container, text) {
 resetAlert(container);
 container.html(text);
 container.addClass("alert alert-success");
 container.show();
}
function resetAlert(container) {
 container.html("text");
 container.attr('class','');
 container.hide();
}
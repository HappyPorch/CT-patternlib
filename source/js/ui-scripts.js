/** Dev note: this file must be updated via PatternLib repo **/

// add string.Format
if (!String.prototype.format) {
	String.prototype.format = function() {
	  var args = arguments;
	  return this.replace(/{(\d+)}/g, function(match, number) {
		return typeof args[number] != 'undefined' ? args[number] : match;
	  });
	};
  }
  
function showCTModalMessage(title, htmlMessage, allowClose) {
	$('#modalPopup').find('#modal-message').html("<p>"+htmlMessage+"</p>");
	$('#modalPopup').find('#modalPopup-viewport').hide();
	$('#modalPopup').find('#modal-message').show();
	$('#modalPopup').find('#modalPopupTitle').text(title);
	$('#modalPopupClose').toggle(allowClose);
	if (allowClose) 
		$('#modalPopup').modal({backdrop: true, keyboard: true, show: true});
	else
		$('#modalPopup').modal({backdrop: "static", keyboard: false, show: true});
	return false;
}
function showCTModal(title, url, data, height, allowClose) {
	if (data) {
	postToIframe(data, url, "modalPopup-viewport");
	} else {
	$('#modalPopup').find('#modalPopup-viewport').attr("src", url);
	}
	$('#modalPopup').find('#modalPopup-viewport').show();
	$('#modalPopup').find('#modal-message').hide();
	var modalHeight = height?height:$(window).height()-120;
	$('#modalPopup').find('#modalPopup-viewport').height(modalHeight);
	$('#modalPopup').find('#modalPopupTitle').text(title);
	$('#modalPopupClose').toggle(allowClose);
	if (allowClose) 
		$('#modalPopup').modal({backdrop: true, keyboard: true, show: true});
	else
		$('#modalPopup').modal({backdrop: "static", keyboard: false, show: true});
	return false;
}

function postToIframe(data,url,target){ 
	$('[name='+target+']').contents().find("body").html("");
	$('#postToIframe').remove();
	$('body').append('<form action="'+url+'" method="post" target="'+target+'" id="postToIframe"></form>');
	$.each(data,function(n,v){
		$('#postToIframe').append('<input type="hidden" name="'+n+'" value="'+v+'" />');
	});
	$('#postToIframe').submit().remove();
}

function closeModal(reload) {
	$('#modalPopup').modal('hide');
	if (reload) {
		top.location.reload(true);
	}
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

	function postToIframe(data,url,target){ 
		$('[name='+target+']').contents().find("body").html("");
		$('#postToIframe').remove();
    $('body').append('<form action="'+url+'" method="post" target="'+target+'" id="postToIframe"></form>');
    $.each(data,function(n,v){
        $('#postToIframe').append('<input type="hidden" name="'+n+'" value="'+v+'" />');
    });
    $('#postToIframe').submit().remove();
  }
  
  function closeModal(reload) {
	  $('#modalPopup').modal('hide');
	  if (reload) {
		top.location.reload(true);
	  }
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

  function showWarningAlert(container, text) {
   resetAlert(container);
   container.html(text);
   container.addClass("alert alert-warning");
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
  function fadeInAndOut(element) {
	element.fadeTo( "slow" , 0.25, function() {
		element.fadeTo( "slow" , 1.0, function() {
			fadeInAndOut(element)
		  });
	});
}

  //toggleCheckbox = checkbox when click on table row
  $.fn.toggleCheckbox = function() {
	  this.prop('checked', !this.prop('checked'));
  }
  $(function ()
  {
	  $('.toggleCheckbox tr').click(function() {
			  $(this).find('td input:checkbox').toggleCheckbox();
	  })
	  $('.toggleCheckbox tr td input:checkbox').click(function(event) {
			  event.stopPropagation();
	  })
  });


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
		showCTModal($(this).attr('data-poptitle'), $(this).attr('href'), null, $(this).attr('data-popinnerheight'), true);
		return false;
	});
	
	//popover
	$('*[data-toggle="popover"]').popover();
	
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
	$('#footerToggleMenuContainer').on('shown.bs.dropdown', function () {
		$('.footer-menu-toggle').addClass("fa-minus").removeClass("fa-plus");
	});
	$('#footerToggleMenuContainer').on('hidden.bs.dropdown', function () {
		$('.footer-menu-toggle').removeClass("fa-minus").addClass("fa-plus");
	});
	
	$('.blink').each(function() {
		var elem = $(this);
		fadeInAndOut(elem);
	});
	
	//toggleCheckbox = checkbox when click on table row
	$.fn.toggleCheckbox = function() {
		this.prop('checked', !this.prop('checked'));
	}

	$('.toggleCheckbox tr').click(function() {
		$(this).find('td input:checkbox').toggleCheckbox();
	})
	$('.toggleCheckbox tr td input:checkbox').click(function(event) {
		event.stopPropagation();
	})

	$('.ct-collapse').on('hidden.bs.collapse', function () {
		//change + icon to -
		var icon = $("*[data-ct-collapse-icon='change']", $(this));
		icon.addClass("fa-plus");
		icon.removeClass("fa-minus");
		var btn = $("*[data-ct-collapse-showtext]", $(this));
		btn.html(btn.attr("data-ct-collapse-showtext"));
	})
	$('.ct-collapse').on('shown.bs.collapse', function () {
		//change + icon to -
		var icon = $("*[data-ct-collapse-icon='change']", $(this));
		icon.addClass("fa-minus");
		icon.removeClass("fa-plus");
		var btn = $("*[data-ct-collapse-hidetext]", $(this));
		btn.html(btn.attr("data-ct-collapse-hidetext"));
	})

	//selectable table rows
	$('.rows_select_container tr').has('.row-selector').click(function(event) {
		if ($(event.target).data("toggle")!="popover") {
			$(this).toggleClass('rowselected');
			$(this).find('.row-selector').prop('checked', $(this).hasClass('rowselected'));
		}
	});
	$('.row-selector').click(function(event) {
		row = $(this).closest('tr');
		row.toggleClass('rowselected');
		event.stopPropagation();
	});
	  
});

var lStorage = window.localStorage;
var infoBoxOpenTracker = {};
$(document).ready(function() {
	$('.info-box-toggle').click(function(){
		toggleInfoBox($(this).closest(".page-info"));
	});
	$('.info-box-lower-toggle').click(function(){
		toggleInfoBox($(this).closest(".page-info"));
	});
	
    infoBoxOpenTracker = getInfoBoxState();
    $("div[data-infobox-ident]").each(function() {
		var pageInfoDiv = $(this).closest(".page-info");
        var ident = $(this).attr("data-infobox-ident");
		var forceState = 0;
		if (ident in infoBoxOpenTracker) {
			forceState = (infoBoxOpenTracker[ident]["len"] !== $(pageInfoDiv).html().replace(/\s/g,'').length) ? "on" : infoBoxOpenTracker[ident]["state"];
		}
		toggleInfoBox(pageInfoDiv, forceState);
	});
});
function toggleInfoBox(pageInfoDiv, forceState=0) {
	var box = $(pageInfoDiv).children(".info-box").first();
	var state = (box.hasClass('show-info')) ? "on" : "off";
	if (forceState == 0 || state != forceState) {
		box.toggleClass('show-info').toggleClass('hide-info');
		$(this).children(".info-box-toggle").toggleClass('active');
		var ident = $(pageInfoDiv).attr("data-infobox-ident");
		state = (box.hasClass('show-info')) ? "on" : "off";
	}
	saveInfoBoxState(ident, state, $(pageInfoDiv).html().replace(/\s/g,'').length);
}
function saveInfoBoxState(ident, state, stringLength) {
    if (ident) {
        infoBoxOpenTracker[ident] = { "state" : state, "len" : stringLength };
        lStorage.setItem('CT-infoBoxOpenTracker', JSON.stringify(infoBoxOpenTracker));
    }
}
function getInfoBoxState() {
    var data = lStorage.getItem('CT-infoBoxOpenTracker');
    if (!data) {
        data = {}; 
    } else {
        data = JSON.parse(data);
    }
    return data;
}
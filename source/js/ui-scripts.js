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
})
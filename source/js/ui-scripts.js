// Footer Menu Mobile Drop Up
$(window).resize(function(){     

       if ($('.footer-menu-list').css('float') == 'none' ){
             $('.footer-menu-list').addClass('dropdown-menu');
       }else{
       		$('.footer-menu-list').removeClass('dropdown-menu');
       }

});

// Toggle menu buttons
$('.header-menu-toggle').click(function(){
    $(this).toggleClass("fa-bars")
           .toggleClass("fa-times");
});

$('.footer-menu-toggle').click(function(){
    $(this).toggleClass("fa-minus")
           .toggleClass("fa-plus");
});
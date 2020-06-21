(function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    
})(jQuery);
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
      });


      var btn = $('#button');

        $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
        });

        btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
        });

  });
  jQuery(document).ready(function($){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50) {
			$('.navbar-brand').css("color","#fff");
		} else {
			$('.navbar-brand').css("color","#9b3fd9");
		}
	});
});

jQuery(document).ready(function($){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 50) {
			$('.nav-link').css("color","#fff");
		} else {
			$('.nav-link').css("color","#181a23");
		}
	});
});
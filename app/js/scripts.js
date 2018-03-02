$(document).ready(function(){
    var nav = $("nav");
    var pos = nav.position();

    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
		if (windowpos >= 100) {
			nav.addClass("stick");
		} else {
			nav.removeClass("stick");
		}
    });

    $('.navbar-toggler').click(function(){
        setTimeout(function(){
            console.log($('.navbar-collapse').hasClass('show'))
            if($('.navbar-collapse').hasClass('show'))
                nav.addClass("stick");
            else
                nav.removeClass("stick");
        }, 500);
    })

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        margin:0,
        responsiveClass:true,
        loop: true,
        nav: true,
        navText: ["prev","next"],
        dots: false,
        animateIn: 'fadeIn',
        autoHeight:true
    });

    setOwlNav();

    owl.on('changed.owl.carousel', function(event) {
        setTimeout(function(){
            setOwlNav();
        }, 100);
    });

    function setOwlNav(){
        var active = $('.owl-item.active').index();
        var prev = active-1;
        var prevElem = $('.owl-item').eq(prev).find('.title').text();
        var next = active+1;
        var nextElem = $('.owl-item').eq(next).find('.title').text();
        console.log(active+" "+prev+" "+next)
        $('.owl-prev').text(prevElem);
        $('.owl-next').text(nextElem);
    }

    new WOW().init();

    $('[data-scroll]').click(function(){
        $('html, body').animate({
            scrollTop: $("."+$(this).data('scroll')).offset().top-70
        }, 1000);
    });

    $('[data-open]').click(function(){
        console.log('data-open');
        var PARENT = $(this).parents('.nav');
        var NAV = $(this).parents('.nav-item');
        var CONTENT_TARGET = PARENT.data('target');
        var CONTENT_OPEN = $(this).data('open');

        PARENT.find('.nav-item').removeClass('active');
        NAV.addClass('active');

        $('#'+CONTENT_TARGET).find('.content-item').removeClass('active collapsed');
        $('#'+CONTENT_TARGET).find('.'+CONTENT_OPEN).addClass('active');

        console.log($('#'+CONTENT_TARGET).find('.'+CONTENT_OPEN).outerHeight());

        // if($('#'+CONTENT_TARGET).find('.'+CONTENT_OPEN).outerHeight() > 300){
        //     $('.nav-expander').show();
        //     $('#'+CONTENT_TARGET).find('.'+CONTENT_OPEN).addClass('collapsed');
        // }
        // else{
        //     $('.nav-expander').hide();
        // }
        // $('.nav-expander').text('READ MORE DETAILS +');
    });

    $('[data-open]:eq(0)').trigger('click');

    $('.nav-expander').click(function(){
        var ACTIVE_ITEM = $('.nav-content .content-item.active');

        ACTIVE_ITEM.toggleClass('collapsed');

        if(ACTIVE_ITEM.hasClass('collapsed'))
            $(this).text("READ MORE DETAILS +");
        else
            $(this).text("SHOW LESS -");
    });
});

$('.nav-link').click(function(){
  $('.navbar-collapse.collapse').removeClass('show');
});

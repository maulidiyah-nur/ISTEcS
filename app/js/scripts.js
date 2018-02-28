$(document).ready(function(){
    var nav = $("nav");
    var pos = nav.position();		
    
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
		if (windowpos >= 700) {
			nav.addClass("stick wow bounceInDown");
		} else {
			nav.removeClass("stick wow bounceInDown");	
		}
    });
    
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        margin:0,
        responsiveClass:true,
        loop: true,
        nav: true,
        navText: ["prev","next"],
        dots: true,
        animateIn: 'fadeIn'
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
            scrollTop: $("."+$(this).data('scroll')).offset().top
        }, 2000);
    });

    $('[data-open]').click(function(){
        var PARENT = $(this).parents('.nav');
        var NAV = $(this).parents('.nav-item');
        var CONTENT_TARGET = PARENT.data('target');
        var CONTENT_OPEN = $(this).data('open');
        
        PARENT.find('.nav-item').removeClass('active');
        NAV.addClass('active');

        $('#'+CONTENT_TARGET).find('.content-item').removeClass('active full');
        $('#'+CONTENT_TARGET).find('.'+CONTENT_OPEN).addClass('active');
        $('.nav-expander').text('READ MORE DETAILS +');
    })

    $('.nav-expander').click(function(){
        var ACTIVE_ITEM = $('.nav-content .content-item.active');

        ACTIVE_ITEM.toggleClass('full');

        if(ACTIVE_ITEM.hasClass('full'))
            $(this).text("SHOW LESS -");
        else
            $(this).text("READ MORE DETAILS +");
    });
});
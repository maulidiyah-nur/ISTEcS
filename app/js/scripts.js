$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:1,
        margin:0,
        responsiveClass:true,
        loop: true,
        nav: true,
        navText: ["<div>PREV</div>","<div>NEXT</div>"]
    });

    setOwlNav();

    owl.on('changed.owl.carousel', function(event) {
        setOwlNav();
    });

    function setOwlNav(){
        var active = $('.owl-item.active').index();
        var prev = active-1;
        var prevElem = $('.owl-item').eq(prev).find('.title').text();
        var next = active+1;
        var nextElem = $('.owl-item').eq(next).find('.title').text();
        $('.owl-prev div').text(prevElem);
        $('.owl-next div').text(nextElem);
    }

    new WOW().init();

    $('[data-scroll]').click(function(){
        $('html, body').animate({
            scrollTop: $("."+$(this).data('scroll')).offset().top
        }, 2000);
    })
});
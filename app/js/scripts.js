$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:0,
        responsiveClass:true,
        loop: true,
        nav: true,
        navText: ["<div>PREV</div>","<div>NEXT</div>"]
    });

    new WOW().init();

    $('[data-scroll]').click(function(){
        $('html, body').animate({
            scrollTop: $("."+$(this).data('scroll')).offset().top
        }, 2000);
    })
});
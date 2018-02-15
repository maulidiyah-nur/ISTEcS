$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        margin:30,
        responsiveClass:true,
        stagePadding:30,
        smartSpeed:450
    });

    new WOW().init();

    $('[data-scroll]').click(function(){
        $('html, body').animate({
            scrollTop: $("."+$(this).data('scroll')).offset().top
        }, 2000);
    })
});
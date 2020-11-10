$(document).ready(function() {
    $('.header-burger').click(function(event) {
        $('.header-burger,.header-menu').toggleClass('active');
        $('body').toggleClass('lock')
    });
});
$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        swipe: true,
        responsive:[
            {
                breakpoint: 414,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});


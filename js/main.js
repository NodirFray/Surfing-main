$(document).ready(function () {

    const headerSlider = $('#headerSlider');

    headerSlider.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        smartSpeed: 1200,
    });

    $('#headerSliderLeft').click(function (e) {
        e.preventDefault();
        headerSlider.trigger('prev.owl.carousel');
    })
    $('#headerSliderRight').click(function (e) {
        e.preventDefault();
        headerSlider.trigger('next.owl.carousel');
    })


    const shopSlider = $('#shopSlider');

    shopSlider.owlCarousel({
        loop: true,
        dots: false,
        smartSpeed: 1200,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
            },
            1254: {
                items: 3,
            }
        }
    });

    $('#shopSliderLeft').click(function (e) {
        e.preventDefault();
        shopSlider.trigger('prev.owl.carousel');
    })
    $('#shopSliderRight').click(function (e) {
        e.preventDefault();
        shopSlider.trigger('next.owl.carousel');
    })

});


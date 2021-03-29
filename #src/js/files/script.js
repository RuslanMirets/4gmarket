$(document).ready(function ($) {
    $('#product-slider').sliderPro({
        width: 390,
        height: 390,
        orientation: 'vertical',
        loop: false,
        // arrows: true,
        buttons: false,
        thumbnailsPosition: 'left',
        // thumbnailPointer: true,
        thumbnailWidth: 83,
        thumbnailHeight: 99,
        thumbnailArrows: true,
        autoplay: false,
        breakpoints: {
            800: {
                thumbnailsPosition: 'bottom',
                thumbnailWidth: 270,
                thumbnailHeight: 100
            },
            500: {
                thumbnailsPosition: 'bottom',
                thumbnailWidth: 120,
                thumbnailHeight: 50
            }
        }
    });
});
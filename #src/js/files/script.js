document.addEventListener('DOMContentLoaded', function () {
    var secondarySlider = new Splide('#secondary-slider', {
        fixedWidth: 100,
        height: 425,
        autoWidth: true,
        gap: 10,
        rewind: true,
        cover: true,
        isNavigation: true,
        focus: 'center',
        pagination: false,
        direction: 'ttb',
        perPage: 4,
        breakpoints: {
            '1400': {
                fixedWidth: 66,
                hheight: 425,
            },
            '1200': {
                fixedWidth: 60,
                hheight: 350,
            },
        },
    }).mount();

    var primarySlider = new Splide('#primary-slider', {
        type: 'slide',
        fixedWidth: 390,
        height: 390,
        heightRatio: 1,
        pagination: false,
        arrows: false,
        cover: true,
        direction: 'ttb',
        breakpoints: {
            '1400': {
                fixedWidth: 316,
                height: 316,
            },
            '1200': {
                fixedWidth: 228,
                height: 228,
            },
        },
    });

    primarySlider.sync(secondarySlider).mount();
});
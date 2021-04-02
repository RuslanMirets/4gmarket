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
            '600': {
                fixedWidth: 66,
                height: 40,
            }
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
    });

    primarySlider.sync(secondarySlider).mount();
});
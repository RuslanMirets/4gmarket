document.addEventListener('DOMContentLoaded', function () {
    var secondarySlider = new Splide('#secondary-slider', {
        fixedWidth: 100,
        height: 100,
        gap: 10,
        cover: true,
        isNavigation: true,
        focus: 'center',
        pagination: false,
        breakpoints: {
            '600': {
                fixedWidth: 66,
                height: 40,
            }
        },
    }).mount();

    var primarySlider = new Splide('#primary-slider', {
        type: 'slide',
        heightRatio: 1,
        pagination: false,
        arrows: false,
        cover: true,
    }); // do not call mount() here.

    primarySlider.sync(secondarySlider).mount();
});
// Slider on index

try {
    const swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper__pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper__button--next',
            prevEl: '.swiper__button--prev',
        },
        spaceBetween: 10,
    })
} catch (e) {}

// Slider in cabinet

try {
    const slider = new Swiper('.cabinet__slider', {
        navigation: {
            nextEl: '.swiper__button--next',
            prevEl: '.swiper__button--prev',
        },
        spaceBetween: 15,
        breakpoints: {
            840: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        },
    })
} catch (e) {}

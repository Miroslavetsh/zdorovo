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
        slidesPerView: 2,
        navigation: {
            nextEl: '.swiper__button--next',
            prevEl: '.swiper__button--prev',
        },
        spaceBetween: 15,
    })
} catch (e) {
    console.log(e)
}

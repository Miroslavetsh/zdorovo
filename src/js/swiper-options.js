// Slider on index

try {
  const swiperIndex = new Swiper('.swiper-container', {
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

  const sliderFavourite = new Swiper('.cabinet__slider--fullsize-fav', {
    navigation: {
      nextEl: '.cabinet__slider--fullsize-fav--next',
      prevEl: '.cabinet__slider--fullsize-fav--prev',
    },
    spaceBetween: 15,
    breakpoints: {
      1040: {
        slidesPerView: 3,
      },
      820: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  })

  const sliderRecommend = new Swiper('.cabinet__slider--fullsize-rec', {
    navigation: {
      nextEl: '.cabinet__slider--fullsize-rec--next',
      prevEl: '.cabinet__slider--fullsize-rec--prev',
    },
    spaceBetween: 15,
    breakpoints: {
      1040: {
        slidesPerView: 3,
      },
      820: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  })

  const sliderGiftBox = new Swiper('#productsBlock', {
    spaceBetween: 20,
    slidesPerView: 5,
    slidesPerGroup: 1,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
} catch (e) {}

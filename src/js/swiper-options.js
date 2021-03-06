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

  const slider = new Swiper('#cabinet-slider', {
    navigation: {
      nextEl: '#swiper-button-next',
      prevEl: '#swiper-button-prev',
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

  const sliderFavourite = new Swiper('#cabinet-slider-fav', {
    navigation: {
      nextEl: '#cabinet-slider-fav-next',
      prevEl: '#cabinet-slider-fav-prev',
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

  const sliderRecommend = new Swiper('#cabinet-slider-rec', {
    navigation: {
      nextEl: '#cabinet-slider-rec-next',
      prevEl: '#cabinet-slider-rec-prev',
    },

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
    Infinity: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1000: {
        spaceBetween: 20,
        slidesPerView: 5,
        slidesPerGroup: 1,
      },
      768: {
        spaceBetween: 15,
        slidesPerView: 4,
        slidesPerGroup: 1,
      },
      680: {
        spaceBetween: 15,
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      450: {
        spaceBetween: 15,
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      320: {
        spaceBetween: 15,
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },
  })
} catch {}

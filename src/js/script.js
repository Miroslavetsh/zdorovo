@@include('./swiper-options.js')
const MENU_TO_BURGER_WIDTH = 840
const BODY = document.querySelector('html')

document.addEventListener('scroll', upToTop)

function upToTop() {
  up.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  })
}

/* === Every page === */
@@include('header.js')
@@include('cards-plus-minus.js')
@@include('card-like.js')
@@include('copying.js')
@@include('Modal.js')

/* === Homepage === */
@@include('payment-tabs.js')

/* === Catalog === */
@@include('catalog-sorting.js')
@@include('catalog-filter.js')

/* === Product === */
@@include('product-page-gallery.js')
@@include('product-table-slide.js')

/* === Register === */
@@include('register-tabs.js')
@@include('register-eye.js')

/* === Cabinet === */
@@include('cabinet-aside-toggler.js')
@@include('cabinet-profile.js')
@@include('order-show.js')
@@include('reset-button.js')

/* === Sertificate === */
@@include('sertificate-button.js')
@@include('deliver-accordion.js')

/* === Roulette === */
@@include('roulette.js')
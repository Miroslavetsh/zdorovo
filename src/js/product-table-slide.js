// Product table slide in cabinet

try {
  const productSlide = document.querySelector('.productSlide')
  productSlide.parentNode
    .querySelector('.showHideTable')
    .addEventListener('click', function () {
      productSlide.classList.toggle('_hidden')
      this.classList.toggle('_hidden')
      if (this.classList.contains('_hidden')) {
        this.innerHTML = 'Детальніше'
      } else {
        this.innerHTML = 'Приховати'
      }
    })
} catch (err) {
  console.error(err)
}

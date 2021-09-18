// Catalog sorting

try {
  const catalogSorting = document.querySelector('.catalogSorting')
  let catalogLinks = catalogSorting.querySelectorAll('.catalog__link')

  catalogLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      catalogLinks.forEach((link) => {
        link.classList.remove('_active')
      })

      this.classList.add('_active')
    })
  })
} catch (err) {
  console.error(err)
}

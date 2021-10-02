// Gallery in product card

try {
  const triggers = document.querySelector('.galleryTriggers')
  const content = document.querySelector('.galleryContent')

  triggers.addEventListener('click', (event) => {
    if (
      event.target.src &&
      !event.target.parentNode.parentNode.classList.contains(
        'product__row--play'
      )
    ) {
      content.innerHTML = ''
      content.insertAdjacentHTML(
        'afterbegin',
        `<img src="${event.target.src}" alt="" />`
      )
    }
  })
} catch {}

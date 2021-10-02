// Card Like

try {
  const likeIconsInCard = document.querySelectorAll('.card__like')

  likeIconsInCard.forEach((icon) => {
    icon.addEventListener('click', function () {
      this.classList.toggle('_liked')

      if (this.querySelector('.notify')) {
        this.querySelector('.notify').classList.toggle('_hidden')
      }
    })
  })
} catch {}

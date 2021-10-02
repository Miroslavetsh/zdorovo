// Cards plus / minus

try {
  const cards = document.querySelectorAll('.card')
  cards.forEach(function (card) {
    let btnPlus = card.querySelector('.cardBtnPlus')
    let btnMinus = card.querySelector('.cardBtnMinus')

    btnMinus.addEventListener('click', function () {
      let input = this.parentNode.querySelector('input')
      if (+input.value !== 0) {
        input.value = +input.value - 1
      }
    })

    btnPlus.addEventListener('click', function () {
      this.parentNode.querySelector('input').value =
        +this.parentNode.querySelector('input').value + 1
    })
  })
} catch {}

// Cabinet orders toggler in aside block

try {
  const orders = document.querySelectorAll('.order')

  orders.forEach((order) => {
    const showMoreOrderButton = order.querySelector('.showMoreOrderInfo')

    showMoreOrderButton.addEventListener('click', () => {
      order.querySelector('.cabinet__hidden').classList.toggle('_opened')
      showMoreOrderButton.classList.toggle('_active')
    })
  })

  const repeatButtons = document.querySelectorAll('.cabinet__repeat')

  repeatButtons.forEach((elem) => {
    elem.addEventListener('click',() => {
      elem.classList.add('_spinning')
      setTimeout(() => {
        elem.classList.remove('_spinning')
      }, 1000);
    })
  })
} catch (err) {
  console.error(err)
}

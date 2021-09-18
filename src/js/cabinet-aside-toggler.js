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
} catch (err) {
  console.error(err)
}

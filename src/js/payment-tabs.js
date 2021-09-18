// Tabs on index page

try {
  const paymentHeads = document.querySelectorAll('.payment__heading')
  const paymentContents = document.querySelectorAll('.payment__content')
  const paymentTriggers = document.querySelectorAll('.payment__trigger')
  const paymentBodies = document.querySelectorAll('.payment__body')

  paymentHeads.forEach(function (head) {
    head.addEventListener('click', activateHead)
  })

  paymentTriggers.forEach(function (trigger) {
    trigger.addEventListener('click', activateTrigger)
  })

  function activateHead() {
    paymentHeads.forEach((head) => {
      head.classList.remove('_active')
    })
    this.classList.add('_active')
    activateTab(this.dataset['tabOrder'])
  }

  function activateTab(tabOrder) {
    paymentContents.forEach((cont) => {
      if (tabOrder === cont.dataset['tab']) {
        cont.classList.add('_active')
      } else {
        cont.classList.remove('_active')
      }
    })
  }

  function activateTrigger() {
    if (this.classList.contains('_active')) {
      paymentTriggers.forEach((trigger) => {
        trigger.classList.remove('_active')
      })
    } else {
      paymentTriggers.forEach((trigger) => {
        trigger.classList.remove('_active')
      })
      this.classList.add('_active')
    }
    activateBody(this.dataset['trigger'])
  }

  function activateBody(order) {
    paymentBodies.forEach((body) => {
      if (order === body.dataset['body']) {
        body.classList.toggle('_active')
      } else {
        body.classList.remove('_active')
      }
    })
  }
} catch (err) {
  console.error(err)
}

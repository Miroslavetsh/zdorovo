// Catalog filter

try {
  const filter = document.querySelector('.filter')
  const filterTriggers = filter.querySelectorAll('.filterTrigger')
  const filterBurger = filter.querySelector('.filterBurger')

  filterTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      trigger.parentNode.classList.toggle('_active')
    })
  })

  filterBurger.addEventListener('click', () => {
    filter.classList.toggle('_active')
  })
} catch {}

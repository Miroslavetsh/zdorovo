// Register tabs

try {
  const registerTabs = document.querySelector('.register__tabs')
  const triggers = registerTabs.querySelectorAll('.register__title')

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', function () {
      triggers.forEach((trigger) => {
        trigger.classList.remove('_active')
        registerTabs.parentNode
          .querySelectorAll('.register__content')
          .forEach((content) => {
            content.classList.remove('_active')

            if (content.dataset['content'] === this.dataset['trigger']) {
              content.classList.add('_active')
            }
          })
      })
      this.classList.add('_active')
    })
  })
} catch {}

// Order form block delivery accordion

try {
  const formBlockTriggers = document.querySelectorAll('[data-trigger]')

  formBlockTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      document.querySelectorAll('[data-content]').forEach((content) => {
        content.classList.add('_hided')
        if (trigger.dataset.trigger === content.dataset.content)
          content.classList.remove('_hided')
      })
    })
  })
} catch {}

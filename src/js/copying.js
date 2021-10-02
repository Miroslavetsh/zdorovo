// Copying

try {
  const copyTextElements = document.querySelectorAll('.toCopy')
  const floatingLabel = document.createElement('div')
  floatingLabel.className = 'floating-label'
  floatingLabel.innerText = 'Copied!'

  if (copyTextElements.length) {
    document.body.insertAdjacentElement('beforeend', floatingLabel)
  }

  const label = document.querySelector('.floating-label')

  copyTextElements.forEach((element) => {
    element.onclick = function () {
      document.execCommand('copy')
      label.classList.add('_active')
      setTimeout(() => {
        label.classList.remove('_active')
      }, 2000)
    }

    element.addEventListener('copy', (event) => {
      event.preventDefault()
      if (event.clipboardData) {
        event.clipboardData.setData('text/plain', element.textContent)
      }
    })
  })
} catch {}

// Cabinet profile

try {
  const profile = document.querySelector('.cabinetProfile')
  const redactorButton = profile.querySelector('.rewriteProfileButton')
  const inputItems = profile.querySelectorAll('.inputedItem')

  redactorButton.addEventListener('click', () => {
    profile.classList.toggle('_redacting')

    inputItems.forEach((item) => {
      if (item.tagName.toLowerCase() === 'input')
        item.toggleAttribute('readonly')
      if (item.tagName.toLowerCase() === 'select')
        item.toggleAttribute('disabled')
    })
  })
} catch (err) {
  console.error(err)
}

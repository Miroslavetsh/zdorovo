// Sertificate prices button

try {
  const inputForUsersValue = document.querySelector('[data-reset-radios]')

  inputForUsersValue.addEventListener('click', () => {
    inputForUsersValue.parentElement
      .querySelectorAll('input[type="radio"]')
      .forEach((input) => {
        input.checked = false
      })
  })
} catch {}

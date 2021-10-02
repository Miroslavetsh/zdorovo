// Reset button

try {
  const resetButtons = document.querySelectorAll('.resetButton')

  resetButtons.forEach((button) => {
    const nameOfFieldsToReset = button.dataset['reset']
    const inputsToReset = document.querySelectorAll(
      `[data-to-reset="${nameOfFieldsToReset}"]`
    )

    button.addEventListener('click', () => {
      inputsToReset.forEach((input) => {
        input.value = ''
      })
    })
  })
} catch {}

// Eye in register

try {
  const inputs = document.querySelectorAll('.register__input')

  const passwordInputs = Array.from(inputs).filter(
    (input) => input.getAttribute('type') === 'password'
  )

  passwordInputs.forEach((input) => {
    input.toggleType = function () {
      if (this.type === 'password') this.type = 'text'
      else if (this.type === 'text') this.type = 'password'
    }

    input.parentNode
      .querySelector('img')
      .addEventListener('click', function () {
        if (input.type === 'password') {
          input.type = 'text'
        } else if (input.type === 'text') {
          input.type = 'password'
        }
      })
  })
} catch {}

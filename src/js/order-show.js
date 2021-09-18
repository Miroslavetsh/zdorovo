// Order show hidden part

try {
  const orderBlocks = document.querySelectorAll('.orderBlock')
  const orderInputs = document.querySelectorAll('.showHidden')

  orderInputs.forEach((input) => {
    orderBlocks.forEach((block) => {
      input.addEventListener('click', () => {
        if ([...block.querySelectorAll('.showHidden')].includes(input))
          block.classList.remove('_hidden')
        else {
          block.classList.add('_hidden')
        }
      })
    })
  })
} catch (err) {
  console.error(err)
}

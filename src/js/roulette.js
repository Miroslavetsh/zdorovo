// Only For Roulette

try {
  const rouletteSection = document.querySelector('.roulette')
  const rouletteItems = rouletteSection.querySelectorAll('.roulette--bottom')
  const button = rouletteSection.querySelector('.showHiddenRoulette')

  button.addEventListener('click', () => {
    rouletteItems.forEach((rouletteItem) => {
      rouletteItem.classList.toggle('_hidden')
    })
  })
} catch (err) {
  console.error(err)
}

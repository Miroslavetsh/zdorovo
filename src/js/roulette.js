// Only For Roulette

try {
  function getFullDate() {
    return new Date().toISOString().split('T')[0].replaceAll('-', '.').split('.').reverse().join('.')
  }

  class Images {
    constructor() {}

    static get() {
      return [
        { id: 0, src: 'img/roulette/roulette.png', text: 'Вчора було:' },
        { id: 1, src: 'img/catalog/1.png', text: 'Позавчора було:' },
        { id: 2, src: 'img/slider/1.jpg', text: '22.09.2021 було:' },
        { id: 3, src: 'img/product/product.png', text: '21.09.2021 було:' },
        { id: 4, src: 'img/404/error.png', text: '20.09.2021 було:' },
      ]
    }
  }

  const rouletteSection = document.querySelector('.roulette')
  const rouletteItems = rouletteSection.querySelectorAll('.roulette--bottom')
  const button = rouletteSection.querySelector('.showHiddenRoulette')
  const dateBlock = rouletteSection.querySelector('.roulette__date')
  const image = rouletteSection.querySelector('.roulette__photo')

  let counter = 0
  let images = Images.get()

  dateBlock.innerHTML = images[counter].text
  button.innerHTML = button.innerHTML.replace('dd.mm.yy', getFullDate())
  let img = document.createElement('img')
  img.src = images.find((img) => img.id === counter).src
  image.innerHTML = ''
  image.append(img)

  button.addEventListener(
    'click',
    () => {
      let timing = images.length

      setTimeout(() => {
        rouletteItems.forEach((rouletteItem) => {
          rouletteItem.classList.toggle('_hidden')
        })
      }, timing * 1000)

      let intervalHandler = () => {
        counter++

        dateBlock.innerHTML = images[counter].text
        let img = document.createElement('img')
        img.src = images.find((img) => img.id === counter).src
        image.innerHTML = ''
        image.append(img)
      }

      setInterval(intervalHandler, 1000)

      button.classList.add('_animated')
    },
    { once: true }
  )
} catch {}

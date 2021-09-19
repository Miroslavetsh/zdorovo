const giftBoxes = document.querySelector('.giftbox__packages-inner')
const giftBoxPreview = document.querySelector('.giftbox__open')
function loadGiftBox(event) {
  if (event.target.classList.contains('giftbox__packages')) {
    const boxImg = event.target.dataset.img
    giftBoxPreview.style.background = `url("${boxImg}") center center no-repeat`
    giftBoxPreview.style.backgroundSize = 'contain'
    console.log(event.target)
  }
}
giftBoxes.addEventListener('click', loadGiftBox)

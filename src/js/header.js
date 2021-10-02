// Header
try {
  const header = document.querySelector('.header')
  let languages = header.querySelectorAll('.availableLanguage')
  let underHeader = header.querySelector('.underheader')
  let fadeUpUnderHeaderButton = header.querySelector('.fadeUpUnderHeaderButton')
  let headerBurger = header.querySelector('.headerBurger')
  let headerNav = header.querySelector('.headerNav')
  let underHeaderHeight = underHeader.offsetHeight

  window.addEventListener('resize', () => {
    underHeaderHeight = underHeader.offsetHeight
    fadeUnderHeader()
    if (underHeader.classList.contains('_hidden')) {
      changeHeaderWithSiblingOffset()
    }
  })

  fadeUnderHeader()
  toggleBurgerWithNavState()
  toggleLanguagesState()
  toggleHeaderState()

  function fadeUnderHeader() {
    fadeUpUnderHeaderButton.addEventListener('click', () => {
      underHeader.classList.add('_hidden')
      changeHeaderWithSiblingOffset()
    })
  }

  function changeHeaderWithSiblingOffset() {
    header.style.cssText = `transform: translateY(-${underHeaderHeight}px);`
    let headerNeighbour = header.nextSibling.nextSibling
    headerNeighbour.style.cssText = `transform: translateY(-${underHeaderHeight}px); margin-bottom:${-underHeaderHeight}px;`
  }

  function toggleHeaderState() {
    window.addEventListener('scroll', () => {
      let preview = document.querySelector('.preview') || undefined

      if (preview && BODY.scrollTop > preview.clientHeight) {
        header.classList.add('_fixed')
      } else if (preview) {
        header.classList.remove('_fixed')
      }
    })
  }

  function toggleBurgerWithNavState() {
    headerBurger.addEventListener('click', () => {
      headerBurger.classList.toggle('_active')
      headerNav.classList.toggle('_active')
      document.body.classList.toggle('_fixed')
    })
  }

  function toggleLanguagesState() {
    languages.forEach((lang) => {
      lang.parentNode.addEventListener('click', () => {
        const currentLanguageImage = header.querySelector('.currentLanguage')
        currentLanguageImage.parentNode.innerHTML = `<img class="currentLanguage" src=${lang.getAttribute(
          'src'
        )} alt="">`
      })
    })
  }
} catch {}

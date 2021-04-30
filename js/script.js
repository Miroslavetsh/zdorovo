// @@include('picturesListener.js')
// ============================

const MENU_TO_BURGER_WIDTH = 840
const BODY = document.querySelector('html')

document.addEventListener('scroll', upToTop)

function upToTop() {
    up.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    })
}

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
                    'src',
                )} alt="">`
            })
        })
    }
} catch (e) {}

// Cards plus / minus

try {
    const cards = document.querySelectorAll('.card')
    cards.forEach(function (card) {
        let btnPlus = card.querySelector('.cardBtnPlus')
        let btnMinus = card.querySelector('.cardBtnMinus')

        btnMinus.addEventListener('click', function () {
            let input = this.parentNode.querySelector('input')
            if (+input.value !== 0) {
                input.value = +input.value - 1
            }
        })

        btnPlus.addEventListener('click', function () {
            this.parentNode.querySelector('input').value =
                +this.parentNode.querySelector('input').value + 1
        })
    })
} catch {}

// Tabs on index page

try {
    const paymentHeads = document.querySelectorAll('.payment__heading')
    const paymentContents = document.querySelectorAll('.payment__content')
    const paymentTriggers = document.querySelectorAll('.payment__trigger')
    const paymentBodies = document.querySelectorAll('.payment__body')

    paymentHeads.forEach(function (head) {
        head.addEventListener('click', activateHead)
    })

    paymentTriggers.forEach(function (trigger) {
        trigger.addEventListener('click', activateTrigger)
    })

    function activateHead() {
        paymentHeads.forEach((head) => {
            head.classList.remove('_active')
        })
        this.classList.add('_active')
        activateTab(this.dataset['tabOrder'])
    }

    function activateTab(tabOrder) {
        paymentContents.forEach((cont) => {
            if (tabOrder === cont.dataset['tab']) {
                cont.classList.add('_active')
            } else {
                cont.classList.remove('_active')
            }
        })
    }

    function activateTrigger() {
        if (this.classList.contains('_active')) {
            paymentTriggers.forEach((trigger) => {
                trigger.classList.remove('_active')
            })
        } else {
            paymentTriggers.forEach((trigger) => {
                trigger.classList.remove('_active')
            })
            this.classList.add('_active')
        }
        activateBody(this.dataset['trigger'])
    }

    function activateBody(order) {
        paymentBodies.forEach((body) => {
            if (order === body.dataset['body']) {
                body.classList.toggle('_active')
            } else {
                body.classList.remove('_active')
            }
        })
    }
} catch {}

// Catalog sorting

try {
    const catalogSorting = document.querySelector('.catalogSorting')
    let catalogLinks = catalogSorting.querySelectorAll('.catalog__link')

    catalogLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            catalogLinks.forEach((link) => {
                link.classList.remove('_active')
            })

            this.classList.add('_active')
        })
    })
} catch {}

// Catalog filter

try {
    const filter = document.querySelector('.filter')
    const filterTriggers = filter.querySelectorAll('.filterTrigger')
    const filterBurger = filter.querySelector('.filterBurger')

    filterTriggers.forEach((trigger) => {
        trigger.addEventListener('click', () => {
            trigger.parentNode.classList.toggle('_active')
        })
    })

    filterBurger.addEventListener('click', () => {
        filter.classList.toggle('_active')
    })
} catch {}

// Gallery in product card

try {
    const triggers = document.querySelector('.galleryTriggers')
    const content = document.querySelector('.galleryContent')

    triggers.addEventListener('click', (event) => {
        if (
            event.target.src &&
            !event.target.parentNode.parentNode.classList.contains('product__row--play')
        ) {
            content.innerHTML = ''
            content.insertAdjacentHTML('afterbegin', `<img src="${event.target.src}" alt="" />`)
        }
    })
} catch (e) {}

// Product table slide

try {
    const productSlide = document.querySelector('.productSlide')
    productSlide.parentNode.querySelector('.showHideTable').addEventListener('click', function () {
        productSlide.classList.toggle('_hidden')
        this.classList.toggle('_hidden')
        if (this.classList.contains('_hidden')) {
            this.innerHTML = 'Детальніше'
        } else {
            this.innerHTML = 'Приховати'
        }
    })
} catch (e) {}

// Register tabs

try {
    const registerTabs = document.querySelector('.register__tabs')
    const triggers = registerTabs.querySelectorAll('.register__title')

    triggers.forEach((trigger) => {
        trigger.addEventListener('click', function () {
            triggers.forEach((trigger) => {
                trigger.classList.remove('_active')
                registerTabs.parentNode
                    .querySelectorAll('.register__content')
                    .forEach((content) => {
                        content.classList.remove('_active')

                        if (content.dataset['content'] === this.dataset['trigger']) {
                            content.classList.add('_active')
                        }
                    })
            })
            this.classList.add('_active')
        })
    })
} catch (e) {}

// Card Like

try {
    const likeIconsInCard = document.querySelectorAll('.card__like')

    likeIconsInCard.forEach((icon) => {
        icon.addEventListener('click', function () {
            this.classList.toggle('_liked')
        })
    })
} catch (e) {}

// Eye in register

try {
    const inputs = document.querySelectorAll('.register__input')

    const passwordInputs = Array.from(inputs).filter(
        (input) => input.getAttribute('type') === 'password',
    )

    passwordInputs.forEach((input) => {
        input.toggleType = function () {
            if (this.type === 'password') this.type = 'text'
            else if (this.type === 'text') this.type = 'password'
        }
        console.log(input.parentNode)
        input.parentNode.querySelector('img').addEventListener('click', function () {
            if (input.type === 'password') {
                input.type = 'text'
            } else if (input.type === 'text') {
                input.type = 'password'
            }
        })
    })
} catch (e) {}

// Cabinet orders

try {
    const orders = document.querySelectorAll('.order')

    orders.forEach((order) => {
        const showMoreOrderButton = order.querySelector('.showMoreOrderInfo')

        showMoreOrderButton.addEventListener('click', () => {
            order.querySelector('.cabinet__hidden').classList.toggle('_opened')
            showMoreOrderButton.classList.toggle('_active')
        })
    })
} catch (e) {}

// Cabinet profile

try {
    const profile = document.querySelector('.cabinetProfile')
    const redactorButton = profile.querySelector('.rewriteProfileButton')
    const inputItems = profile.querySelectorAll('.inputedItem')

    redactorButton.addEventListener('click', () => {
        profile.classList.toggle('_redacting')
        inputItems.forEach((item) => {
            item.hasAttribute('disabled')
                ? item.toggleAttribute('disabled')
                : item.toggleAttribute('readonly')
        })
    })
} catch (e) {}

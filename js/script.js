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
            this.parentNode.querySelector('input').value = +this.parentNode.querySelector('input').value + 1
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

        input.parentNode.querySelector('img').addEventListener('click', function () {
            if (input.type === 'password') {
                input.type = 'text'
            } else if (input.type === 'text') {
                input.type = 'password'
            }
        })
    })
} catch (e) {}

// Cabinet orders toggler in aside block

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
            if (item.tagName.toLowerCase() === 'input') item.toggleAttribute('readonly')
            if (item.tagName.toLowerCase() === 'select') item.toggleAttribute('disabled')
        })
    })
} catch (e) {}

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
} catch (e) {}

// Copying

try {
    const copyTextElements = document.querySelectorAll('.toCopy')
    const floatingLabel = document.createElement('div')
    floatingLabel.className = 'floating-label'
    floatingLabel.innerText = 'Copied!'

    if (copyTextElements.length) {
        document.body.insertAdjacentElement('beforeend', floatingLabel)
    }

    const label = document.querySelector('.floating-label')

    copyTextElements.forEach((element) => {
        element.onclick = function () {
            document.execCommand('copy')
            label.classList.add('_active')
            setTimeout(() => {
                label.classList.remove('_active')
            }, 2000)
        }

        element.addEventListener('copy', (event) => {
            event.preventDefault()
            if (event.clipboardData) {
                event.clipboardData.setData('text/plain', element.textContent)
            }
        })
    })
} catch (e) {}

try {
    const resetButtons = document.querySelectorAll('.resetButton')

    resetButtons.forEach((button) => {
        const nameOfFieldsToReset = button.dataset['reset']
        const inputsToReset = document.querySelectorAll(`[data-to-reset="${nameOfFieldsToReset}"]`)

        button.addEventListener('click', () => {
            inputsToReset.forEach((input) => {
                input.value = ''
            })
        })
    })
} catch (e) {}

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
} catch (e) {}

const ModalsInterface = (function () {
    const searchEveryModal = () => {
        return Array.from(document.querySelectorAll('.modal'))
    }

    class Modal {
        constructor({
            modalElement,
            timeout,
            buttonsToOpen,
            isStoreModalClosedState,
            isModalVideo
        }) {
            this.modal = modalElement
            this.timeout = timeout // Number
            //buttonsToOpen:Array | NodeList
            this.openButtons = buttonsToOpen
            this.storeModalState = isStoreModalClosedState // Boolean
            this.isModalVideo = isModalVideo
            this.frame = this.modal.querySelector('iframe')
        }

        open() {
            this.modal.classList.add('_opened')

            if (this.isModalVideo) {
                this.frame.src = this.frame.dataset.src
            }
        }

        openWithTimeout() {
            if (this.timeout) {
                setTimeout(() => {
                    this.modal.classList.add('_opened')
                }, this.timeout)
            }
        }

        _close() {
            if (this.storeModalState) {
                localStorage.setItem(
                    `modalWindow_${this.modal.dataset['modalName']}`,
                    'closedAndHidden',
                )
            }

            if (this.isModalVideo) {
                this.frame.src = ''
            }

            this.modal.classList.remove('_opened')
        }

        setClosingFunction() {
            this.modal.addEventListener('click', (event) => {
                event.preventDefault()
                if (event.target.dataset['close'] !== undefined) this._close()
            })
        }

        setOpeningFunction() {
            this.openButtons.forEach((button) => {
                button.addEventListener('click', () => {
                    this.open()
                })
            })
        }
    }

    return {
        init: function () {
            const modalsArray = searchEveryModal()

            modalsArray.forEach((modal) => {
                const buttonsToOpen = document.querySelectorAll(
                    `[data-modal-open="${modal.dataset['modalName']}"]`,
                )
                // Auto open modal if timeout
                const timeout = Number(modal.dataset['timeout']) ?? 0
                const isStoreModalClosedState = modal.dataset['storeState'] === 'true' ?? false
                const isModalVideo = modal.querySelector('iframe') ? true : false
                const modalWindow = new Modal({
                    modalElement: modal,
                    timeout: timeout,
                    buttonsToOpen: buttonsToOpen,
                    isStoreModalClosedState: isStoreModalClosedState,
                    isModalVideo: isModalVideo
                })

                if (
                    localStorage.getItem(`modalWindow_${modal.dataset['modalName']}`) !==
                    'closedAndHidden'
                ) {
                    if (modalWindow.timeout) modalWindow.openWithTimeout()
                }

                // If we have a buttons need to close modal

                if (buttonsToOpen.length) modalWindow.setOpeningFunction()

                modalWindow.setClosingFunction()
            })
        },
    }
})()

ModalsInterface.init()

// Order form block delivery accordion

try {
    const formBlockTriggers = document.querySelectorAll('[data-trigger]')

    formBlockTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            document.querySelectorAll('[data-content]').forEach(content => {
                content.classList.add('_hided')
                if (trigger.dataset.trigger === content.dataset.content) content.classList.remove('_hided')
            })
        })
    })
} catch {}
try {
  // Modal
  const ModalsInterface = (function () {
    const searchEveryModal = () => {
      return Array.from(document.querySelectorAll('.modal'))
    }

    /**
     * @param {Array | NodeList} buttonsToOpen
     */

    class Modal {
      constructor({
        modalElement,
        timeout,
        buttonsToOpen,
        isStoreModalClosedState,
        isModalVideo,
      }) {
        this.modal = modalElement
        this.timeout = timeout // Number

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
            'closedAndHidden'
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
            `[data-modal-open="${modal.dataset['modalName']}"]`
          )
          // Auto open modal if timeout
          const timeout = Number(modal.dataset['timeout']) ?? 0
          const isStoreModalClosedState =
            modal.dataset['storeState'] === 'true' ?? false
          const isModalVideo = modal.querySelector('iframe') ? true : false
          const modalWindow = new Modal({
            modalElement: modal,
            timeout: timeout,
            buttonsToOpen: buttonsToOpen,
            isStoreModalClosedState: isStoreModalClosedState,
            isModalVideo: isModalVideo,
          })

          if (
            localStorage.getItem(
              `modalWindow_${modal.dataset['modalName']}`
            ) !== 'closedAndHidden'
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
} catch {}

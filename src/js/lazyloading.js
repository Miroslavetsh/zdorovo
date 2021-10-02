// Lazy loading

try {
  const lazyLoadingContainer = document.querySelector('.agreement__text')
  const ELEMENTS_TO_SHOW = window.innerHeight < 642 ? 12 : 20

  let lastIndexOfShowingText = 0

  let observeElement = document.createElement('div')
  observeElement.className = 'lazy-last-element'
  observeElement.style.height = '2px'
  let allChildren = Array.from(lazyLoadingContainer.children)
  // Format container
  lazyLoadingContainer.insertAdjacentElement('afterend', observeElement)

  let callback = async function (entries) {
    if (entries[0].isIntersecting) {
      lastIndexOfShowingText += ELEMENTS_TO_SHOW

      let childrenToAnimate = allChildren.slice(0, lastIndexOfShowingText)

      childrenToAnimate.forEach((child) => {
        child.classList.add('_animated')
      })
    }
  }

  // Observing last element in viewport
  let observer = new IntersectionObserver(callback)
  observer.observe(observeElement)
} catch {}

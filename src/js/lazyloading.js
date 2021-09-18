// Lazy loading

try {
  const lazyLoadingContainer = document.querySelector('.agreement__text')
  const ELEMENTS_TO_SHOW = 12

  let lastIndexOfShowingText = 0

  let observeElement = document.createElement('div')
  observeElement.className = 'lazy-last-element'
  observeElement.style.height = '2px'
  let allChildren = Array.from(lazyLoadingContainer.children)
  // Format container
  lazyLoadingContainer.insertAdjacentElement('afterend', observeElement)
  lazyLoadingContainer.innerHTML = ''

  let callback = function (entries) {
    if (entries[0].isIntersecting) {
      setTimeout(() => {
        lastIndexOfShowingText += ELEMENTS_TO_SHOW

        let childrenToInsert = allChildren.slice(0, lastIndexOfShowingText)

        childrenToInsert.forEach((child) => {
          lazyLoadingContainer.insertAdjacentElement('beforeend', child)
          child.animate([{ opacity: 0 }, { opacity: 0.5 }, { opacity: 1 }])
        })
      }, 400)
    }
  }

  // Observing last element in viewport
  let observer = new IntersectionObserver(callback)
  observer.observe(observeElement)
} catch (err) {
  console.warn(err)
}

function doBeforeAndAfterDOMContentLoaded(contentBefore) {
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'interactive') {
      contentBefore()
      document.addEventListener('DOMContentLoaded', () => {
        contentBefore()
      })
    }
  })
}

const bazz = () => {
  console.log('Some message about working')
}

doBeforeAndAfterDOMContentLoaded(bazz)

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM loaded')
})

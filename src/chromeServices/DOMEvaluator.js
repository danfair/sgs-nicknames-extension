import findAndReplaceDOMText from '@thehonestscoop/findandreplacedomtext'
import nicknames from '../nicknames.js'

window.onload = function () {
  const body = document.querySelector('body')
  chrome.storage.sync.get(['sgsNicknamesMode'], (result) => {
    const mode = result['sgsNicknamesMode'] || 'after'
    nicknames.forEach((nickname) => {
      findAndReplaceDOMText(body, {
        find: nickname.name,
        replace: nickname[mode],
      })
    })
  })
}

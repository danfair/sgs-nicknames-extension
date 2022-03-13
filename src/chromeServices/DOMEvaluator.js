import findAndReplaceDOMText from '@thehonestscoop/findandreplacedomtext'
import nicknames from '../utils/nicknames.js'

const generateNicknameText = (item, mode) => {
  const { firstName, lastName, nickname } = item
  switch (mode) {
    case 'aka':
      return `${firstName} ${lastName} (aka ${nickname})`
    case 'middle':
      return `${firstName} "${nickname}" ${lastName}`
    case 'after':
    default:
      return `${firstName} ${lastName} (${nickname})`
  }
}

window.onload = function () {
  const body = document.querySelector('body')
  chrome.storage.sync.get(['sgsNicknamesMode'], (result) => {
    const mode = result['sgsNicknamesMode'] || 'after'
    nicknames.forEach((nickname) => {
      findAndReplaceDOMText(body, {
        find: `${nickname.firstName}${
          nickname.lastName ? ` ${nickname.lastName}` : ''
        }`,
        replace: generateNicknameText(nickname, mode),
        filterElements: (element) => {
          return !element?.classList?.contains('sgs-nicknames-inserter')
        },
      })
    })
  })
}

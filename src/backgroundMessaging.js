chrome.runtime.onMessage.addListener((req, sender, res) => {
  console.log(req)
  console.log(sender)
})

chrome.bookmarks.onCreated.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, { name: 'Tomas' } )
  })
})

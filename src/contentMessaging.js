document.onload = () => {
  testMessage();
}

function testMessage() {
  chrome.runtime.sendMessage({ payload: 'Hello from a content'}, () => {
    console.log("RESP")
  })
}

chrome.runtime.onMessage.addListener((req, sender, res) => {
  console.log(req)
  console.log(sender)
})

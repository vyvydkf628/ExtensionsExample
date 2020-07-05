window.onload = () => {
  const button = document.createElement('button');
  button.id = "darkModeButton";
  button.textContent = "DO IT DARK"

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.id = 'darkSetting';
  document.querySelector('#end').prepend(button, input, 'Auto apply?');

  button.addEventListener('click', () => {
    enableDarkMode()
  })

  input.addEventListener('click', () => {
    storeSetting();
  })

  checkSetting();
}

function checkSetting() {
  chrome.storage.local.get(['enabled'], (result) => {
    console.log(result.enabled);
    document.getElementById('darkSetting').checked = result.enabled;

    if(result.enabled) {
      enableDarkMode();
    }
  })
}

function storeSetting() {
  const isEnabled = document.getElementById('darkSetting').checked;
  const setting = { enabled: isEnabled };

  chrome.storage.local.set(setting, () => {
    console.log('stored', setting)
  })
}

function enableDarkMode() {
  document.getElementsByTagName('ytd-app')[0].style
    .backgroundColor = "black";
}
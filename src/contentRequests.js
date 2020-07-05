const requestSender = new XMLHttpRequest();

requestSender.onreadystatechange = apiHandler;

function apiHandler(response) {
  if(requestSender.readyState === 4 && requestSender.status === 2000) {
    console.log(response);
  }
}

requestSender.open('GET', 'https://api.github.com/users/peter', true);
requestSender.send();
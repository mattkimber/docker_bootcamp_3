var update = () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "/chat");
  xhr.onload = () => {
    document.getElementById("chat").innerHTML = xhr.responseText;
    document.getElementById("sendButton").disabled = false;
  };
  xhr.send();
};

var sendMessage = () => {
  let username = document.getElementById("username").value;
  let message = document.getElementById("message").value;

  if(!username) {
    alert("You need a username!");
    return;
  }

  if(!message) {
    return;
  }

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "/chat");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.send(JSON.stringify({username: username, message: message}));

  document.getElementById("sendButton").disabled = true;
}

update();
setInterval(update, 2000);
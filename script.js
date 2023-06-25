const message = document.querySelector('.message');
const text = document.getElementById('text');
const send = document.getElementById('send');
const clear = document.getElementById('clear');

send.addEventListener("click", deliver);

function deliver() {
  let textValue = text.value;
  message.innerHTML = textValue;
  text.value = " ";
}

clear.addEventListener("click", clearFunc);

function clearFunc(){
  message.innerHTML = " ";
}
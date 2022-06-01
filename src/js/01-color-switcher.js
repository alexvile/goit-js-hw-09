const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const body = document.body;


startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);
let colorChangeInterval = null;
let isActiveInterval = false;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function paintBody() {
  body.style.backgroundColor = getRandomHexColor();
}

function onStartBtnClick() {
  if (isActiveInterval) {
    return
  };

  isActiveInterval = true;
  colorChangeInterval = setInterval(paintBody, 1000);
}

function onStopBtnClick() {
  isActiveInterval = false;
  clearInterval(colorChangeInterval);
}



 


const startBtn = document.querySelector("[data-start");
const stopBtn = document.querySelector("[data-stop");
const body = document.body;



  startBtn.addEventListener('click', onStartBtnClick);


//   const timerId = setInterval(callback, delay, arg1, arg2, ...);



  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function onStartBtnClick() {
    body.style.backgroundColor = getRandomHexColor();
  }

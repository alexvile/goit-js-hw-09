// // Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';


const startBtn = document.querySelector("[data-start]");
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', stbtnclick);
startBtn.setAttribute('disabled', true); 


let futureDate = 0;
let currentTime = Date.now();
let timerInterval = null;
let difference = 0;
let isActiveTimer = false;
let btnActive = false;


function check() {
    currentTime = Date.now();

    if(futureDate < currentTime) {
        Notify.failure('Please choose a date in the future');
        startBtn.setAttribute('disabled', true); 
        btnActive = false;
    } else{
        startBtn.removeAttribute('disabled');
        btnActive = true;
    }
      
}



const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    // dateFormat: "Y-m-d",
    // minDate: currentTime,

    onClose(selectedDates) {

        if(isActiveTimer == true) {
            Notify.failure('Timer is now running');
            btnActive = false;
            return
        }

        futureDate = selectedDates[0];
        check();
    },
  };


flatpickr("#datetime-picker", options)

function watchStart() {
    timerInterval = setInterval(() => {
        currentTime  = Date.now();
        
        difference = futureDate - currentTime;
        // console.log(difference);
        // console.log(convertMs(difference));
        
        daysEl.innerHTML = convertMs(difference).days
        hoursEl.innerHTML = convertMs(difference).hours
        minutesEl.innerHTML = convertMs(difference).minutes
        secondsEl.innerHTML = convertMs(difference).seconds

        if(difference < 1000) {
            isActiveTimer = false;
            clearInterval(timerInterval);
        }
        }, 1000)
}


function stbtnclick() {
    check();

    if(btnActive==true && isActiveTimer==false){
        watchStart();
        isActiveTimer = true;
        Notify.success('Timer has been started');
    }
}




function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
// // Описан в документации
import flatpickr from "flatpickr";

// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";




const startBtn = document.querySelector("[data-start]");
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

startBtn.addEventListener('click', stbtnclick)



let futureDate = 0;
let currentTime = Date.now();
let timerInterval = null;
let difference = 0;
let isActiveTimer = false;
let isActiveCount = true;



let btnActive=false
// let isAble = true;
function check() {
    currentTime = Date.now();
    if(futureDate < currentTime) {
        window.alert("Please choose a date in the future");
        startBtn.setAttribute('disabled', true); 
        btnActive=false
    } 
    else{
        startBtn.removeAttribute('disabled');
        btnActive=true
    }
      
}




const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    // minDate: currentTime,
    // dateFormat: "U",

    onClose(selectedDates) {
       
        futureDate = selectedDates[0];
        check()
        // console.log(futureDate);
        
        // if(futureDate < currentTime) {
        //     console.log('less');
        //     window.alert("Please choose a date in the future");
        //     // isAble = false;
        //     startBtn.setAttribute('disabled', true); 
        //     return
        // } 

        // isAble = true;    
        // startBtn.setAttribute('disabled', false);
        

    //   console.log(selectedDates[0]);
    },
  };


flatpickr("#datetime-picker", options)


const watch = {
    
  start() {
    timerInterval = setInterval(() => {
        currentTime  = Date.now();
        //   console.log(currentTime);
        
        difference = futureDate - currentTime;
        console.log(difference);
      
        console.log(convertMs(difference));
        
        daysEl.innerHTML = convertMs(difference).days
        hoursEl.innerHTML = convertMs(difference).hours
        minutesEl.innerHTML = convertMs(difference).minutes
        secondsEl.innerHTML = convertMs(difference).seconds

        if(difference < 1000) {
            console.log("less 1000");
            isActiveCount = false;

        }
        if(!isActiveCount) {
            clearInterval(timerInterval);
            isActiveTimer=false
        }

    
      }, 1000)

    //   console.log(currentTime);
    //   console.log('lo' + futureDate);
      
  },

};



function stbtnclick() {
    check()
    // if(!isAble) {
    //     return
    // }
if(btnActive==true && isActiveTimer==false){
    watch.start();
    isActiveTimer = true;
}


}

// console.log('lo' + futureDate);



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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}
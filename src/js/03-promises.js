import { Notify } from 'notiflix/build/notiflix-notify-aio';



const firstDelayInput = document.querySelector('[name=delay]');
const stepInput = document.querySelector('[name=step]');
const amountInput = document.querySelector('[name=amount]');
const formEl = document.querySelector('form');
const sumbmitBtn = document.querySelector('[type=submit]');


let firstDelayValue = 0;
let stepValue = 0;
let amountValue = 0;



formEl.addEventListener('input', onFormInput);

function onFormInput(e) {
  firstDelayValue = firstDelayInput.value;
  stepValue = stepInput.value;
  amountValue = amountInput.value;
}

sumbmitBtn.addEventListener('click', onSubmitClick);

function onSubmitClick(e) {
  e.preventDefault();
  callCreatePromises(firstDelayValue, stepValue, amountValue);
}



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {

    if(shouldResolve){
      resolve(`Fulfilled promise ${position} in ${Date.now() - delay}ms`)
    }
    else {
      reject(`Rejected promise ${position} in ${Date.now() - delay}ms`)
    }
  
  });
};



function callCreatePromises(firstDelay, step, amount) {
    let counter = 0

  const timeBefore = Date.now()


    setTimeout(() => {

        const timerId2 = setInterval(() => {
          counter += 1;
          if(counter > amount) {
            clearInterval(timerId2);
            return
          }
          createPromise(counter, timeBefore)
          .then(resolve => {  Notify.success(resolve); console.log(resolve)} )
          .catch(error => { Notify.failure(error); console.log(error)});
    
      }, step)

    
    }, firstDelay)
}





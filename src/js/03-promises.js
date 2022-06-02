
function runPromise(position) {
  
  return new Promise((resolve, reject) => {
  const shouldResolve = Math.random() > 0.1;
  const delay = 200
  
  setTimeout(() => {
      if(shouldResolve) {
        resolve({position, delay});
      } else {
        reject({position, delay});
      }
      
    }, delay);

});
}

// runPromise('2', '200')
// .then(({ position, delay }) => {
//       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
//    })
// .catch(({ position, delay }) => {
//       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     });

    // runPromise('2')
    // .then(({ position, delay }) => {
    //       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
    //    })
    // .catch(({ position, delay }) => {
    //       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
    //     });


const horses = [
  '1',
  '2',
  '3'
];

const promises = horses.map(runPromise);

console.log(promises);


Promise.all(promises)
.then( y  => {console.log(y)})
.catch(x => {console.log(x)})




// .then(({ position, delay }) => {console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)})
// .catch(({ position, delay }) => {
//         console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//       });

// .then(({ position, delay }) => {
//   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
// })
// .catch(({ position, delay }) => {
//   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// });

// runPromise([0])
// .then(({ position, delay }) => {
//   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
// })
// .catch(({ position, delay }) => {
//   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// });

// runPromise([1])
// .then(({ position, delay }) => {
//   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`)
// })
// .catch(({ position, delay }) => {
//   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// });
    


// / createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
// function onFullfilled(result) {
//   console.log(`+ ${result}`);
// }
// function onRejected(error) {
//   console.log(`- ${error}`);
// }


// console.log(horses);

// const promises = horses.map(createPromise);
// // console.log(promises);

// console.log(Promise.all(promises))



  // }, )



  // if (shouldResolve) {
  //   // Fulfill
  // } else {
  //   // Reject
  // }
// }








// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//   } else {
//     // Reject
//   }
// }




// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });




// function run(name) {
//   return new Promise((resolve) => {
//     const time = getRandomTime(1000, 1500)

//     setTimeout(() => {
//         resolve({name, time})
//     }, time)
//   })
// }

// run('qwe')
// .then(x => console.log(x))
// .catch(e => console.log(e))


// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
  
// }








// const promise = new Promise((resolve, reject) => {
//   const canFullfilled = Math.random() > 0.5;

//   setTimeout(() => {
//       if(canFullfilled) {
//         resolve('can resolve');
//       }
//       reject('error');
  
//     }, 1000)
// })

// // promise.then(
// //   result => {
// //   console.log(`+ ${result}`);
// // },
// // error => {
// //   console.log(`- ${error}`);
// // })

// // promise.then(onFullfilled, onRejected);

// function onFullfilled(result) {
//   console.log(`+ ${result}`);
// }
// function onRejected(error) {
//   console.log(`- ${error}`);
// }



// promise
//   .then(onFullfilled)
//   .then(x => {
//     console.log(x);
//     return 10;
//   })
//   .then(y => {
//     console.log(y);
//   })
// //   .catch(error => console.log(error))
// //   .finally(() => console.log('finally'));

// const makeOrder = dish => {
//   const DELAY = 1000;

//   return new Promise((resolve, reject) => {
//      const passed = Math.random() > 0.5;


//      setTimeout(() => {
//        if(passed) {
//          resolve(`vot bludo ${dish}`);
//        }

//        reject('nema bluda');
//      }, DELAY);
//   });
//   // return promise;
// };



// // const p = makeOrder('pirozhok');
// makeOrder('pirozhok').then(onSuccess).catch(onError);

// function onSuccess(result) {
//   console.log(result);
// };
// function onError(error) {
//   console.log(error);
// }
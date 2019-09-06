// The Promise callback is used to initialize the Promise.
function one() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("2 seconds has passed");
    }, 2000);
  });
}

function two() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("1 seconds has passed");
    }, 1000);
  });
}

// 1 call promises individually
const promiseOne = one(); // Promise object is initialized
const promiseTwo = two(); // Promise object is initialized

promiseOne.then(msgFromPromise => {
  console.log("====1====");
  console.log(msgFromPromise); // 2 seconds has passed
  console.log(promiseOne); // Promise { '2 seconds has passed' } <- Promise Object {}
});

promiseTwo.then(msgFromPromise => {
  console.log("====2====");
  console.log(msgFromPromise); // 1 seconds has passed
  console.log(promiseTwo); // Promise { '1 seconds has passed' } <- Promise Object {}
});

console.log(promiseOne); // Promise { <pending> } <- Promise Object {}
console.log(promiseTwo); // Promise { <pending> } <- Promise Object {}

// 2 .all method
// Promise.all() takes one argument ie an iterable of promises (array)
const promiseArray = [promiseOne, promiseTwo];
console.log(promiseArray); // [ Promise { <pending> }, Promise { <pending> } ]

// .all will wait until ALL of the promises in the array have resolved and then .then() will execute
Promise.all(promiseArray).then(data => {
  console.log("==All the promises are done==");
  console.log(data); // [ '2 seconds has passed', '1 seconds has passed' ]
});

// .race
Promise.race(promiseArray).then(data => {
  console.log("==Race done==");
  console.log(data); // 1 seconds has passed
});

// Requires Node 7.6; ES8
// aysnc (function()), await (async code) a promise to resolve.

function one() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Done!");
      resolve("2 seconds have passed");
    }, 2000);
  });
}

/*
  Scenario:
  I want to call a function (ie two()) that calls a function (ie one()) that has some async operation in it
  and then I want to do something with that response and everything after the reponse is dependent on it.

  async function two() 
    - you just made this function asynchronous.
    - you are telling JavaScript this function is "dependent on somebody else
      and you will not run in the order you normally do"
    - always accompanied by assigning await to async operation you require to complete first

  await function one()
    - you can place await in front of the function one() as long as one() returns a promise
    - await will tell Javascript to "wait for a promise to resolve."
    - with 'await' in front of one(), it gets started, but next lines are on hold until the promise resolves.

*/

async function two() {
  console.log("Calling function one");
  const oneResponse = await one(); // Every line below is held off
  console.log(oneResponse); // Promise { <pending> } returned immediately if we dont use oneResponse.then(()=>{})
}

// console.log("Calling function one");
// one().then(promiseData => {
//   console.log(promiseData);
// });

two();
console.log("Last line of the code");

/*

async/await result:
Calling function one
Last line of the code
Done!
2 seconds have passed
*/

// Promise is just a constructor that give you some methods - then, catch, all, race, resolve, reject
// new Promise(callback)
// The callback itself takes two arguments resolve, recject which are also callbacks.

// The callback is used to initialize the Promise.
let myFirstPromise = new Promise((resolve, reject) => {
  console.log("Hey, I'm running immediately-no waiting happening here.");
  console.log("Hey, I'm also running.");

  // We can run asyncronous
  // ajax <- axios(method:"post")..
  // http
  // sql  <- mysql.query()..
  // nosql

  // When async code done you call either of the callbacks() below

  const lang = ["JS", "Java", "Go"];
  // resolve("A message from resolve"); // I'm done; Whatever is passed to the resolve() is passed to the .then(promiseData)
  resolve(lang); // I'm done; Whatever is passed to the resolve() is passed to the .then(promiseData)
  reject("I did not finish!"); // Something went wrong
});

let mySecondPromise = new Promise((resolve, reject) => {
  console.log("Will this be executed immediately as third in line?? - Yes");
});

console.log(myFirstPromise);

/*
The then will go on the epromise OUTSIDE of the promise.
When the resolve callback is run inside of the promise, the 'then' will fire off it's callback.
'then' takes one argument which is a callback to run
*/
myFirstPromise.then(promiseData => {
  console.log("Promise finished (SHOULD FIRE LAST):", promiseData);
});

myFirstPromise.catch(promiseError => {
  console.log(promiseError);
});

console.log("I'm the last line in the program (SHOULD NOT BE LAST LINE)");

/*
Hey, I'm running immediately-no waiting happening here.
Hey, I'm also running.
Will this be executed immediately as third in line?? - Yes
Promise { [ 'JS', 'Java', 'Go' ] }
I'm the last line in the program (SHOULD NOT BE LAST LINE)
Promise finished (SHOULD FIRE LAST): [ 'JS', 'Java', 'Go' ]
JG-MacBook-Pro:sec07-promises jack$ 
*/

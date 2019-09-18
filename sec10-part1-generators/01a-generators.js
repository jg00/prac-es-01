// generators (alternative to iterators), iterators, iterables, and for..of

/*
  Generator functions allow you to define an iterative algorithm by writing a single
  function whose execution is not continuous
*/
function* aGenerator() {
  console.log("I just ran!");
  yield 1; // PAUSE
  console.log("I just ran too!");
}

// aGenerator() // When called initially, Generator functions do not execute any of their code
const gen = aGenerator(); // returns a type of iterator called Generator
console.log(gen); // Object [Generator] {}

/*
  When a value is consumed by calling the generator's .next() method, the Generator function
  executes until it encounters the yield keyword
*/
gen.next(); // "I just ran!" > the first time you call .next() it will run until it sees yield, pause, and just wait
gen.next(); // "I just ran too!" > if you call .next() again, it will pick up where it left off
gen.next(); // nothing runs..

/*
  - The function can be called as many times and returns a new Generator (which is an iterator).  
  - Each Generator may only be interated once
*/

// function* will return an Iterator called Generator so
// main job of Generator is to make it easier to create an Iterator

/*
  yield keyword in a generator is similar to the return of the object {value: 1, done: false}
*/

function* counter() {
  let i = 0;
  while (true) {
    // yield i++;
    console.log("before i increment: ", i);
    const dataFromNext = yield i++; // yield i first returns { value: 0, done false } before i is incremented. Also, return value of yield will be whatever was sent via argument.
    console.log(
      "CONTINUES on the next next() call but i WAS already incremented in the previous next() call: ",
      i
    );
    if (dataFromNext) {
      console.log("dataFromNext:", dataFromNext, " new incremented i:", i);
      i = 0;
      console.log("i reset to: ", i);
      // break; // Add int a break will break out of the loop and end the function and will return { value: undefined, done: true }
    }
  }
}

// *** REMEMBER running of code stops at yield and CONTINUES on another next() call

const myGenerator = counter();
console.log(myGenerator); // Object [Generator] {}
console.log(myGenerator.next()); // { value: 0, done: false } > Important - As soon as function is complete we get { value: undefined, done: true } is returned (mainly done: true)
/*
  before i increment:  0
{ value: 0, done: false }
*/

// console.log(myGenerator.next()); // { value: 1, done: false }
/*
CONTINUES on the next next() call but i WAS already incremented in the previous next() call:  1
before i increment:  1
{ value: 1, done: false }
*/

console.log(myGenerator.next());
console.log(myGenerator.next()); // *** REMEMBER running of code stops at yield and CONTINUES on another next() call
console.log(myGenerator.next(true));
/*
CONTINUES on the next next() call but i WAS already incremented in the previous next() call:  4
dataFromNext: true  new incremented i: 4
i reset to:  0
before i increment:  0
{ value: 0, done: false }
*/

console.log(myGenerator.next().value);
/*
CONTINUES on the next next() call but i WAS already incremented in the previous next() call:  1
before i increment:  1
1
*/

console.log(myGenerator.next().value);
/*
CONTINUES on the next next() call but i WAS already incremented in the previous next() call:  2
before i increment:  2
2
*/

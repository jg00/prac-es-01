// function* will return an Iterator called Generator so
// main job of Generator is to make it easier to create an Iterator
function* counter() {
  let i = 0;
  while (true) {
    const dataFromNext = yield i++; // Return value of yield will be whatever was sent via argument
    if (dataFromNext) {
      i = 0;
      // break; // Addint a break will break out of the loop and end the function and will return { value: undefined, done: true }
    }
  }
}

const myGenerator = counter();
console.log(myGenerator); // Object [Generator] {}
console.log(myGenerator.next()); // { value: 0, done: false } > Important - As soon as function is complete we get { value: undefined, done: true } is returned (mainly done: true)
console.log(myGenerator.next()); // { value: 1, done: false }
console.log(myGenerator.next());
console.log(myGenerator.next().value);
console.log(myGenerator.next(true)); // Important - here 'true' argument will be the return value of yield.
console.log(myGenerator.next().value);
console.log(myGenerator.next().value);

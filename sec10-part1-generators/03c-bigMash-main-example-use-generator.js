// 1 Basic iterator - what makes and iterator? Need to implement 'next' property
/*
function myIterator(myArray) {
  let i = 0; // Initialize
  return {
    next: () => {
      if (i < myArray.length) {
        return { value: myArray[i++], done: false }; // array[i++] - postfix therefore array[0] called first and then i is incremented by one (ie this will handle our index and also increment)
      } else {
        return { done: true };
      }
    }
  };
}
*/

// 2 Replace basic iterator with Generator
function* myIterator(myArray) {
  for (let i = 0; i < myArray.length; i++) {
    yield myArray[i];
  }
}

const anArray = [1, 4, 54, 3, 45, 62345, 413, 354, 2];
const gen = myIterator(anArray);

for (let elem of gen) {
  console.log(elem);
}

/* Replace with for..of above instead of using .next() of the Generator (ie Iterator) explicitly
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next("exit"));
console.log(gen.next());
console.log(gen.next());

console.log(gen.next()); // { done: true }
console.log(gen.next()); // { done: true }
*/

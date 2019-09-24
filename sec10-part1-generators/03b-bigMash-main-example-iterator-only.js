// Basic iterator - what makes and iterator? Need to implement 'next' property
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

/*
  yield keyword in a generator is similar to the return of the object {value: 1, done: false}
*/

const anArray = [1, 4, 54, 3, 45, 62345, 413, 354, 2];
const gen = myIterator(anArray);
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

console.log(gen.next()); // { done: true }
console.log(gen.next()); // { done: true }

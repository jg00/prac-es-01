/*
  Iterator is an object which implements the Iterator protocol by having a next() method
  which returns an object with two properties:
    value - the next value in the sequence
    done - true if the last value in the sequence has already been consumed.

  Because this is a custom iterator, we dont even need to call the while loop
  "while (!result.done)" near the end of the code.  The power is now our ability to
  just call next method whenever we want.
*/

// Reference from 02b-iterator.js
const aString = "Hello!";
console.log(aString[Symbol.iterator]().next()); // { value: 'H', done: false }

/*
  Scenario:
  Make an iterator object returns an object with a function property called next.
*/

// Iterator
function makeRangeIterator(start, end, step) {
  let nextIndex = start; // These are 'preserved' and current values are available to the .next() method
  let returned = false;
  return {
    next: function() {
      let result = {};
      if (nextIndex < end) {
        result = {
          value: nextIndex,
          done: false
        };
        nextIndex += step; // nexIndex is 'preserved' inside of this child function
      } else if (!returned) {
        result = {
          value: nextIndex,
          done: true
        };
        returned = true;
      } else {
        result = { done: true };
      }
      return result;
    }
  };
}

let it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]

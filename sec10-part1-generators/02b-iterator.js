/*
  Iterator is an object which implements the "Iterator protocol" by having a next() method
  which returns an object with two properties:
    value - the next value in the sequence
    done - true if the last value in the sequence has already been consumed.
*/

// Strings are iterables NOT iterators!
const aString = "Hello!";
console.log(aString[Symbol.iterator]().next()); // { value: 'H', done: false }

/*
  Distinction:
  aString - iterable has iterator
  Symbol.iterator - iterator
  [Symbol.iterator]() - call the iterator and run next() against it
  next() - Returns {value: 'H', done: false}
*/

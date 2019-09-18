const aString = "Hello!";
console.log(aString[Symbol.iterator]().next()); // { value: 'H', done: false }

// CONTINUE HERE

let it = makeRangeIterator(1, 10, 2);

let result = it.next();
while (!result.done) {
  console.log(result.value); // 1 3 5 7 9
  result = it.next();
}

console.log("Iterated over sequence of size: ", result.value); // [5 numbers returned, that took interval in between: 0 to 10]

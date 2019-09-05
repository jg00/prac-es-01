/*
  Set
  1 A set is similar to an array except that it is not (no push, pop, etc.)
  2 Can hold any data type
  3 All elements are unique
  4 Sets are Iterable (insertion order)
*/

// 1 Array - duplicate allowed
let employeeIdArray = [`a12`, `e7`, `c2`, `a12`];
console.log(employeeIdArray);

// 2 Sets - duplicates are removed
let employeeId = new Set([`a12`, `e7`, `c2`, `a12`]); // you can add an iterable and adds items to the set object
console.log(employeeId); // Set { 'a12', 'e7', 'c2' } // returns an iterable unlike an Object

employeeId.forEach(emp => {
  console.log(emp);
});

// 3 Set example
let employeeSet = new Set();
console.log(employeeSet); // Set {}

employeeSet.add({
  name: `Jane`,
  position: `CTO`,
  tenure: `12 years`
});

// Note that this object is stored somewhere else in memory.  .add() will add the object becasue it does not do a property to property and value to value comparison.
employeeSet.add({
  name: `Jane`,
  position: `CTO`,
  tenure: `12 years`
});

console.log(employeeSet);

/* Methods:
  add
  clear
  delete - an element
  entries - like Map, it returns and iterable, each element in the iterable is an array, [0] key = value, [1] value = value
  forEach - has a forEach prototype
  has - check for presence of an element
  keys
  values
*/

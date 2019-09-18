/*
  Iterables
  - An object is iterable if it defines its iteration behavior, such as what values are
    looped over in a for..of construce.
  - Iterables can be iterated over with for..of
  - Array or Map have default iteration behavior, while other types like Object do not.
  - Default: Array, Map, WeakMap, Set, WeakSet, String, TypedArray
  - In order to be an iterable, an object must implement @@iterator method, meaning
    that the object must have a property with a Symbol.iterator key
*/

// 1
const aString = "Hello!";
console.log(aString[Symbol.iterator]); // [Function: [Symbol.iterator]]
const obj = { name: "Fred" };
console.log(obj[Symbol.iterator]); // undefined

// for..of
for (let letter of aString) {
  console.log(letter);
}

// for loop
for (let i = 0; i < aString.length; i++) {
  console.log(aString[i]);
}

// for..in
for (let key in aString) {
  console.log(aString[key]);
}

// Key difference is we have a customized iterator if we want to

/*
  Symbol.iterator - well-known symbol specifies the default iterator for an object.  Used by for..of.
*/

// 2 - To make an Object iterable, define the property Symbol.iterator
const iterable1 = new Object(); // Object is not an iterable so we have to define it

iterable1[Symbol.iterator] = function*() {
  yield 1;
  yield 2;
  yield 3;
};

for (let value of iterable1) {
  console.log(value);
}

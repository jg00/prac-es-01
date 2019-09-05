/*
Symbol data type
  1 Symbol = a something. an identifier.  Just something you can store inside of a variable.
  2 A symbol value may be used as an identifier for object properties;
    this is the data type's only purpose.
  3 Symbol() is not a constructor; cannot use new Symbol() because it is not a constructor.
    Symbol() is just like a String, Number, etc.
  4 The main idea is to avoid name collision.

Primitive data types - BUNNSS
  boolean, undefined, null, number, string, symbol

Object
  Object, function (also an object), array (also an object)
*/

// 1 Symbol() is primitive data type
const aSymbol = Symbol();

console.log(String(`a`) === String(`a`)); // true
console.log(Number(2) === Number(2)); // true
console.log({} === {}); // false b/c this is comparing references to the object.  {} is a new object always.
console.log(undefined === undefined); // true

console.log(Symbol() === Symbol()); // false

// 2 The main idea is to avoid name collision.
const a = Symbol(); // a is unique
const b = Symbol(); // b is unique
console.log(a === b); // false
console.log(a); // Symbol()

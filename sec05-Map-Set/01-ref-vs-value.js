/*
Primitive (6) 
  - string, number, boolean, null, undefined, symbol - SNBNUS - BUNNSS
  - values copied
  - primitives are immutable
Objects (Arrays, Functions, Objects)
  - stored by reference
*/

// Objects are stored by reference.  Note that objects are mutable.  The reference is immutable.
let obj = {
  name: "Popeye"
};

let cartoon = obj;
console.log(obj);
console.log(cartoon);
cartoon.girlfriend = "Olive Oil";
console.log(obj);
console.log(cartoon);

// Arrays are objects
let arr = [1, 2, 3];
let arr2 = arr;
arr2.push(4);
console.log(arr);
console.log(arr2);

let x = 5;
function sum(x, y) {
  // Here we made a copy of the value of x and assigned to the argument x
  x = x + y;
  console.log("inside", x);
}

sum(x, 3);
console.log("outside", x); // still 5

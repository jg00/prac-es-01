// 1 Object.values() - returns an array of all the object values

const footballer = {
  name: "Will",
  position: "Power Forward",
  average: 2.1
};

const footballerVals = Object.values(footballer);
// console.log(footballerVals); // [ 'Will', 'Power Forward', 2.1 ]

// 2 Object.entries() - returns an array of array with key and value
const footballerEntries = Object.entries(footballer);
console.log(footballerEntries[0][1]); // Will

console.log(footballerEntries);
/*
[ [ 'name', 'Will' ],
  [ 'position', 'Power Forward' ],
  [ 'average', 2.1 ] ]
*/

// 3 str.padEnd(), str.padStart()
// - prototype of String
// - does not mutate the string
const name = "Brand Stark";
console.log(name.padEnd(15, "$")); // Default is space " " if second argument not specified
console.log(name); // still "Brand Stark"

// 4 Object.getOwnPropertyDescriptors()
const footballer2 = {
  name: "Ned",
  position: "Guard",
  average: 4.2
};

const descriptors = Object.getOwnPropertyDescriptors(footballer2);
console.log(descriptors);

/*
{ name:
   { value: 'Ned',
     writable: true,
     enumerable: true,
     configurable: true },
  position:
   { value: 'Guard',
     writable: true,
     enumerable: true,
     configurable: true },
  average:
   { value: 4.2,
     writable: true,
     enumerable: true,
     configurable: true } }
*/

// 5 Trailing commas in functions will work just fine like in arrays and objects
// Works for arrays
const worldCupClubs = [`England`, `Senegal`, `France`, `Russia`];

// Works for objects
const england = {
  name: "England",
  place: "3rd" // adding ',' will be fine
};

console.log(england);

// Now works for functions
function sum(x, y) {
  return x + y;
}
console.log(sum(2, 3));

// Array.prototype.fill() - is actually a prototype
// We call this against an array (ie existing) rather than against the constructor (ie construct a new array)
// like we do with Array.of() or Array.from()
// .fill() mutates the array unlike .slice() returns a new array from an existing array.

const arr1 = [2, 3, 4, "a", 17, "r", 9, 9];
arr1.fill("b", 3, 6);

console.log(arr1); // [ 2, 3, 4, 'b', 'b', 'b', 9, 9 ]

// Array.prototype.slice() does not mutate
const arr2 = [1, 2, 3, 4];
console.log(arr2.slice(1, 3)); // [ 2, 3 ]
console.log(arr2); // [ 1, 2, 3, 4 ]

// Postion -3 ie from the end
const arr3 = [2, 3, 4, "a", 17, "r", 9, 9];
arr3.fill("c", -3); // ie start index will be length of the array minus three
console.log(arr3); // [ 2, 3, 4, 'a', 17, 'c', 'c', 'c' ]

// .fill() and .splice(start, how many, values to insert) are similar
let discountMonths = ["Jan", "Feb", "April", "Nov"];
discountMonths.splice(2, 0, "Mar");
console.log(discountMonths);

// Array.from() - Make an array from an iterable
// Like Object.assign()
const x = Array.from("Tesla");
console.log(x);

const y = Array.from(`${3 + 5}49`);
console.log(y); // [ '8', '4', '9' ]

// Provide an array argument and do something with each element of the array
let numbers = Array.from([2, 3, 4], num => num + num);
console.log(numbers); // [ 4, 6, 8 ]

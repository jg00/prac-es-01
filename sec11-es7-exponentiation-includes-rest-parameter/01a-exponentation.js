/*
  ES7:
  Exponentiation operator **
  Includes method given to arrays and typed arrays
  Rest parameter destructuring
*/

// 1 Exponentiation **
const x = 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2; // 2 ** 9 = 512
console.log(x);

const x2 = 2 ** 5;
console.log(x2);

const a = 3 ** 2.5;
const b = 100 ** -1;
console.log(b);
const c = NaN ** 3;
console.log(c);

// Order operations
// const d = 2 ** 3 ** 2; // It will raise the second one first like below
const e = 2 ** (3 ** 2); // becomes 2 ** 9 = 512
console.log(e); // 512

const f = (2 ** 3) ** 2;
console.log(f); // 64

console.log("");

// const g = -2 ** 2 // Not allowed; Unary Operator are operators that act upon a single operand to produce a new value

// 2 Includes method (works on primitives)
/*
  Includes is essentially the same thing as indexOf() except it returns a boolean
*/

// indexOf()
// const arr = [1, 2, 3, 4, 5];
const arr = [1, 2, 3, 4, 5, NaN];
if (arr.indexOf(2) > -1) console.log("Number found!");
else console.log("Number not found!");

// Includes
const inArray = arr.includes(2);
console.log(inArray); // true

/*
  Note that indexOf() uses strict comparison so
  const arr = [1, 2, 3, 4, 5, Nan]; // will not work.  Includes() will work
*/
console.log(2 === 2); // true
console.log(NaN === NaN); // false

console.log(arr.indexOf(NaN)); // -1 thinks NaN is not in the array
console.log(arr.includes(NaN)); // true

console.log("");

// 3 Rest parameter destructuring
const someJSON = {
  name: "Wayne Rooney",
  position: "Forward",
  club: "Manchester United"
};

// 3a One way
// const name = someJSON.name;
// const position = someJSON.position;
// const club = someJSON.club;
// console.log(position);

// 3b Destructure
const { name, position: p, club } = someJSON;
console.log(p);

// 3c Now we could use Rest Parameter and then use the indexes
function sum(...numbers) {
  console.log(numbers); // [2,3] We get an array with each of the numbers in it
  return numbers[0] + numbers[1];
}
console.log(sum(2, 3));

// 3d We could instead extract what we want directly by destructuring the array
function sum2(...[a, b]) {
  return a + b;
}
console.log(sum2(2, 3));

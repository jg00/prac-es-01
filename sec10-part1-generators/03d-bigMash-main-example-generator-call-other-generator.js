/*
  Scenario - call generator from another generator
  Here we will step through the lines

  yeild* > indicates to yield from another generator
*/

function* inigo() {
  yield "Hello. My name is Inigo Montoya.";
  yield "You killed my father. Prepare to die.";
}

function* countR() {
  yield "Good heavens, are you still trying to win?";
  yield "You've got an overdeveloped sense of vengence, that's going to get you in trouble someday.";
  yield* inigo(); // 3,4
  yield* inigo(); // 5,6
  yield* inigo(); // 7,8
  yield "Stop saying that!";
  yield* inigo(); // 10,11
}

/* Use for..of instead of breakdown below */
const princessBride = countR();
for (let lines of princessBride) {
  console.log(lines);
}

/* Breakdown
const princessBride = countR();
console.log(princessBride.next().value); // 1 Good heavens, are you still trying to win?
console.log(princessBride.next().value); // 2 You've got an overdeveloped sense of vengence, that's going to get you in trouble someday.

console.log(princessBride.next().value); // 3 Hello. My name is Inigo Montoya.
console.log(princessBride.next().value); // 4 You killed my father. Prepare to die.

console.log(princessBride.next().value); // 5 Hello. My name is Inigo Montoya.
console.log(princessBride.next().value); // 6 You killed my father. Prepare to die.

console.log(princessBride.next().value); // 7 Hello. My name is Inigo Montoya.
console.log(princessBride.next().value); // 8 You killed my father. Prepare to die.

console.log(princessBride.next().value); // 9 Stop saying that!

console.log(princessBride.next().value); // 10 Hello. My name is Inigo Montoya.
console.log(princessBride.next().value); // 11 You killed my father. Prepare to die.

console.log(princessBride.next()); // { value: undefined, done: true }
*/

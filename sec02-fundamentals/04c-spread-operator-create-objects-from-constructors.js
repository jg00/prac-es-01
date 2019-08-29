/* Constructor function; Create an object from our constructor. */
function Ball(radius, x, y) {
  this.r = radius;
  this.x = x;
  this.y = y;
}

let ballArgs = [50, 100, 100];

const ball = new Ball(...ballArgs);

// const ball = new Ball(ballArgs[0], ballArgs[1], ballArgs[2]); // long way works
// const ball = Ball.apply(new Ball(), ballArgs); // undefined because .apply() will not work with a constructor function

console.log(ball);

/* Math.min(numberList)*/
const numberSet = [22, 3, 44, 22, 25, 2, 3, 7];
console.log(Math.min(...numberSet));

/* Add other elements to an array */
const others = ["a", "b", "c"];
const myArray = [1, 2, 3, 4, ...others, 6, 7, 8];
console.log(myArray);

/* Make copies of array */
let myArray2 = [1, 2, 3, 4];
let myArray3 = [...myArray2];
// let myArray3 = myArray2;  // references same array
// let myArray3 = myArray2.slice(); // makes copy
myArray3.push(5);
console.log(myArray2);
console.log(myArray3);

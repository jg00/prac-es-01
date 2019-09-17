// Reflect.apply()

// Ex 1 One way to invoke a function
function sum(array) {
  return array.reduce((number, total) => {
    return number + total;
  });
}

console.log(sum([1, 2, 3]));

// Ex 2 .apply() is just another way to invoke a function and provide arguments
function sum2(...array) {
  // console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
  return array.reduce((total, currentNumber) => {
    return total + currentNumber;
  });
}

// Let's for example say someone messed with apply.  Nothing is stopping them from doing this.
// One solution would be to call .apply directly from the original .apply function
sum2.apply = function() {
  throw new Error("I broke appply just for fun");
};

// console.log(sum2.apply(null, [1, 2, 3]));
console.log(Function.prototype.apply.call(sum2, null, [1, 2, 3]));

// Ex 3 - Reflect.apply() - Good solution - lets us call the original .apply()
console.log(Reflect.apply(sum2, null, [1, 2, 3, 4]));

/* rest operator */
function sum(...numberList) {
  return numberList.reduce(function(total, n) {
    return total + n;
  });
}

const total = sum(1, 2, 3, 4, 5);
// console.log(total);

/* spread operator */
function sum2(a, b, c, d) {
  return a + b + c + d;
}

const numbers = [1, 2, 3, 4, 5];
const spreadWay = sum2(...numbers);
console.log(spreadWay);

const oldWay = sum2.apply(null, numbers);
console.log(oldWay);

// .apply is a protoype of all functions. If it is a function it has a .apply method
// .apply(function sum2(), arguments as array expected)

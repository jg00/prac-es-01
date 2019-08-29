// arguments
// rest operator
function findHighest(upperLimit, firstElement, ...numList) {
  console.log(arguments[3]); // Note - arguments {} comes with Javascript and did not need to be defined
  console.log(upperLimit, firstElement);
  console.log(numList); // returns an array [] of the rest of the arguments.
}

const highest = findHighest(44, 3, 10, 80, 1, 5, 11);

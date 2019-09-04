// Array.of() - Make an array out of a variable number of elements
const arr1 = Array.of(7);
console.log(arr1);

// Array out of any elements and not just Array like items or iterables like Array.from()
const arr3 = Array.of(7, "Hulk", [23, 12, 5], { sport: "baseball" });
console.log(arr3);

// Polyfill - if the browser does not support Array.of() then use polyfill
if (!Array.of) {
  // ie checking to see if this Array.of() function does not exists, we will make an Array.of()
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}

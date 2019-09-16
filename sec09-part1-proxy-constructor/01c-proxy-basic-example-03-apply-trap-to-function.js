// Example 3 - Trap just a function call
// handler.apply() trap; remembers functions are first class objects in javasript
function sum(x, y) {
  return x + y;
}

/*
  apply trap takes 3 args:
  1 target - is the function itself
  2 the this (the this argument for the call)
  3 argument list for this call
*/
const handler = {
  apply: (target, thisArg, argsList) => {
    console.log("Someone called a function");
    return target(argsList[0], argsList[1]) * 100; // same as sum(2,9)
  }
};
const sumProxy = new Proxy(sum, handler);

console.log(sum(2, 9));
console.log(sumProxy(2, 9)); // We have cut off a functionc all.

/* 
  1 Reflect Object
  - have your code make decision on next step.
  - look at state of your program
  - while your program is running, make decisions

  2 Reflection is to examine, intropect, or modify your program at run-time

  3 typeof object > is an example

  4 Features
  Reflect and Proxy go hand in hand
  Reflect is NOT instantiated or invoked.  We don't use 'new' keyword.
  Reflect is a stand alone global object (ex: Math), that has methods that are 1:1 with the proxy handlers.
  Reflect is a built-in object that provides methods for "interceptable" JavaScript operations.

  Math is an object with whole bunch of static methods.
*/

// 1a Reflect.get() - takes two args - target, property (you are interested in)

const x = {
  a: 1,
  b: 2
};

console.log(Reflect.get(x, "a"));
// console.log(x.a); // same thing and Reflect.get() acts as a getter for something that does not already have a getter
// console.log(Reflect.get(1, "a")); // TypeError: Reflect.get called on non-object

// 1b Array as target
const arr = ["joe", "akash", "mary"];
console.log(Reflect.get(arr, 1)); // Second argument for array object is the index

// 2 Example from Mozilla
const monster1 = {
  secret: "easily scared",
  eyeCount: 4
};

const handler1 = {
  get: function(target, prop, receiver) {
    if (prop === "secret") {
      return `${target.secret.substr(0, 4)} ... shhhh!`;
    } else {
      return Reflect.get(...arguments); // essentially same as Reflect.get(target, prop, receiver) where target=proxy1, prop=eyeCount from proxy1.eyeCount
      // return arguments[0][prop]; // returns same result as above to get the prop value.
    }
  }
};

const proxy1 = new Proxy(monster1, handler1);

console.log(proxy1.eyeCount);
// expected output: 4

console.log(proxy1.secret);
// expected output: "easi ... shhhh!"

// 3 Reflect.has() - will work like hasOwnProperty and "in".
const hgttg = {
  meaningOfLife: 42
};

// Few ways to see if property exists in object
console.log(hgttg.hasOwnProperty("meaningOfLife"));
console.log(hgttg.hasOwnProperty("meaningOfLifessss"));

console.log("meaningOfLife" in hgttg);

console.log(Reflect.has(hgttg, "meaningOfLife"));
/* 
  Main advantage is with this way, you get error if property does not exits.
*/

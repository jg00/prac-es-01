// Callbacks

/*
  functions are 1st class objects
    - can pass around
    - store them inside of a variable
*/

const printUpper = function(text) {
  console.log(text.toUpperCase());
};

const printNumber = function(number) {
  console.log(number);
};

// This our main program
function run(callback, input) {
  callback(input);
}

run(printUpper, "Hello World");

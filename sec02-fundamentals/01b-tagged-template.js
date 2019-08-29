/*  Tagged Templates - continued from 01-tagged-templates.js */

/* ex 5 (Important example) - Gives us ability to pass a function via tagged templates and execute */

function testFunction() {
  return "Hello, from inside the test function";
}

const templateLiteralCallback = `Rob Jim Bill ${() => testFunction()}`;
console.log(templateLiteralCallback); // Rob Jim Bill () => testFunction() => literally prints

function taggedCallback(strings, func) {
  return strings[0] + func(); // func by itslef is still a string function "() => testFunction()" but now we can execute using func()
}

const taggedLiteralCallback = taggedCallback`Rob Jim Bill ${() =>
  testFunction()}`; // Notice this is the same template literal but we execute it as a tagged template.
console.log(taggedLiteralCallback);

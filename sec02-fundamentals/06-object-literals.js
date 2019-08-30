/* 1 Three ways to create an object */

// let x = new Object() // New object based on Object constructor function
// let x = Object.create(null)
// let x = {};
// console.log(x);

// Object literal set up (short form)
let someObject = {
  name: "some name",
  aMethod() {
    console.log("test", this.name);
  }
};

someObject.aMethod();

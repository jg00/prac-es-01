// Example 2 - Make proxy out of a constructor/class object
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  printInfo() {
    console.log(this.make, this.model);
  }
}

let handler = {
  get: (target, propName) => {
    console.log(`Someone is trying to get ${propName} property`);
  }
};

let aCar = new Car("Toyota", "Camry");
let carProxy = new Proxy(aCar, handler);
console.log(carProxy.make);

// The main idea is to avoid name collision.
// Use case is if you really want to make private variables

const CARCOLOR = Symbol();
const CARMAKE = Symbol();
const CARMODEL = Symbol();

// console.log(CARCOLOR); // Symbol()

class Car {
  constructor(color, make, model) {
    this[CARCOLOR] = color;
    this[CARMAKE] = make;
    this[CARMODEL] = model;
  }

  get color() {
    return this[CARCOLOR];
  }

  set color(newColor) {
    this[CARCOLOR] = newColor;
  }
}

let myCar = new Car(`Red`, `Chevy`, `Tahoe`);
console.log(myCar);
myCar.color = "Blue";
console.log(myCar);
console.log(myCar[CARMODEL]);
console.log(myCar.color);

console.log(Symbol.for(`test`) == Symbol.for(`test`));

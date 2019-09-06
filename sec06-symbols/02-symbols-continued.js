// The main idea is to avoid name collision.
// Use case is if you really want to make private variables

const CARCOLOR = Symbol();
const CARMAKE = Symbol();
const CARMODEL = Symbol();

// console.log(CARCOLOR); // Symbol()

class Car {
  constructor(color, make, model) {
    this[CARCOLOR] = color; // can't do this.CARCOLOR because this is a property. We need [] bracket notation to evaluate the variable CARCOLOR and this variable references this Symbol()
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
myCar.color = "Blue"; // Unless you have a getter and setter, a new color property will just be added to the object and not update the property.  this[CARCOLOR] is not accessible from outside.
console.log(myCar);
console.log(myCar[CARMODEL]);
console.log(myCar.color);

console.log(Symbol.for(`test`) == Symbol.for(`test`)); // Searches Javascript table of Symbols and checks if exists.

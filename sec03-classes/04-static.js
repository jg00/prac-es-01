class SuperHero {
  constructor(name, strength, speed, weapon, cape) {
    this._name = name;
    this._strength = strength;
    this._speed = speed;
    this._weapon = weapon;
    this._cape = cape;
    // this.goodHero = true;
  }

  powerUp() {
    this.strength += 5;
  }

  get name() {
    console.log("Getting the name");
  }

  set name(newName) {
    console.log("Setting the name");
    this._name = newName;
  }

  static goodHero() {
    console.log(this); // this actually the Function: SuperHero (class is simply syntatic sugar)
    console.log(this.strength); // undefined
    return true;
  }
}

const hankDetails = ["Hank", 10, 5, "Fist", true];
const philDetails = ["Phil", 15, 1, "Fist2", false];
let hero1 = new SuperHero(...hankDetails);
let hero2 = new SuperHero(...philDetails);
hero1.name = "Stark";

console.log(hero1.name);

hero1.powerUp();
hero1.speed = 2;

console.log();
console.log(hero1);
console.log();
console.log(hero2);
console.log();
console.log("Is hero good?", SuperHero.goodHero());
console.log(SuperHero.strength); // undefined
// console.log(SuperHero.name); // note .name property run directly for a class will return the class name itself.

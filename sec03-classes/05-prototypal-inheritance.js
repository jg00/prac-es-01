class SuperHero {
  constructor(name, strength, speed, weapon, cape) {
    this._name = name;
    this._strength = strength;
    this._speed = speed;
    this._weapon = weapon;
    this._cape = cape;
  }

  powerUp() {
    this.strength += 5;
  }

  get name() {
    console.log("Getting the name");
  }

  set name(newName) {
    console.log("Setting the Parent name");
    this._name = newName;
  }

  static goodHero() {
    return true;
  }
}

class Human extends SuperHero {
  constructor(healthPoints, ...superHeroStuff) {
    super(...superHeroStuff);
    this._healthPoints = healthPoints;
  }

  set name(newName) {
    console.log("Special name function for Humans");
    this._name = newName;
  }
}

const billDetails = [20, "Bill", 10, 8, "Fast Feet", true];
const hero3 = new Human(...billDetails);
hero3.name = "Harrelson";
console.log(hero3);

console.log();

const hankDetails = ["Hank", 10, 5, "Fist", true];
let hero1 = new SuperHero(...hankDetails);
console.log(hero1);

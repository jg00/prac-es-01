// Replace the constructor function with the class keyword
// The class is not called like a function.  When we instantiate we call the constructor.
// Note this still works the same was as the constructor function
class SuperHero {
  constructor(name, strength, speed, weapon, cape) {
    name;
    this.strength = strength;
    this.speed = speed;
    this.weapon = weapon;
    this.cape = cape;
  }

  powerUp() {
    this.strength += 5;
  }
}

let hero1 = new SuperHero("Hank", 10, 5, "Fist", true);
hero1.powerUp();
console.log(hero1);

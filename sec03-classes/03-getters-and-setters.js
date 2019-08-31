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
    console.log("Getting the name", this._name);
  }

  set name(newName) {
    console.log("Setting the name");
    this._name = newName;
  }
}

const handDetails = ["Hank", 10, 5, "Fist", true];
let hero1 = new SuperHero(...handDetails);
hero1.name = "Stark";

hero1.name;

hero1.powerUp(); // private field _strength not accessible
hero1._speed = 2; // private field _speed not accessible

console.log(hero1);

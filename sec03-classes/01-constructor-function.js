// Constructor function

function SuperHero(name, strength, speed, weapon, cape) {
  this.name = name;
  this.strength = strength;
  this.speed = speed;
  this.weapon = weapon;
  this.cape = cape;

  // Moved to prototype.  Issue is every object created will have it's own goodHero property and a powerUp() method.
  // this.goodHero = true;
  // this.powerUp = function(){
  // 	this.strength += 5;
  // }
}

// Everyone will now 'share' goodHero property and powerUp().
// Stored ones in memory rather than on every single object created.
SuperHero.prototype.goodHero = true;
SuperHero.prototype.powerUp = function() {
  this.strength += 5;
};

let hero1 = new SuperHero("Hank", 10, 5, "Fist", true);
hero1.powerUp();

console.log(hero1);
console.log(SuperHero.prototype.goodHero);

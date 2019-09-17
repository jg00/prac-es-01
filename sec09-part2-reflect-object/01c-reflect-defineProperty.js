// Reflect.defineProperty() simply replaces Object.defineProperty() for semantic reasons.
/*
  Replaces Object.defineProperty - allows you to define metadata about a property
  and creates it if it does not exists.
*/

// 1 One way to define metadata for a property

let bandit = {};
const diffLevel = 2;

if (diffLevel <= 2) {
  // Object.defineProperty(targetObj, propertyName, propertyMetadata)
  Object.defineProperty(bandit, "attack", { value: 15, writable: false });

  // Not symantic using Object.defineProperty so replace with Reflect.defineProperty()
  // Object.defineProperty(bandit, "run", {
  Reflect.defineProperty(bandit, "run", {
    value: () => console.log("Bandit has fled!"),
    writable: false
  });
} else {
  Object.defineProperty(bandit, "attack", { value: 25, writable: false });
  // bandit.attack = 25;
}

console.log(bandit.attack);
bandit.run();

// 2 Reflect.getOwnPropertyDescriptor() vs Object.getOwnPropertyDescriptor() - returns metadata for specific property
console.log(Object.getOwnPropertyDescriptor(bandit, "attack"));
console.log(Reflect.getOwnPropertyDescriptor(bandit, "attack"));

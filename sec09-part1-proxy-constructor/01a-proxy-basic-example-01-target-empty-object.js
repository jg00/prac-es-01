// Proxy Constructor and Reflect Object
// Proxy - middleman - somebody in between who is acting between two parties

/*
  Proxy Constructor allow you to "cut off" almost "any part of the process of object change".
  - Allows us to create middleware
  - We do this with traps. So we set a trap for getting, set a trap for setting, etc.
  
  - 1 Exclusive control over accessing and setting objects
  - 2 Validation
  - 3 Logic/middleware

  - we are now able to hijack the
    get process (common)
    set process (common)
    
  - so if somebody wants to access an "object" at all, we can turn that into a proxy, and then we can
    sort of intercept it (cut off) and do stuff

  - here is a list of thirteen methods
  handler.getPrototypeOf()
  handler.setPrototypeOf()
  handler.isExtensible()
  handler.preventExtensions()
  handler.getOwnPropertyDescriptor()
  handler.defineProperty()
  handler.has() > for example if you want check to see if a key exists on an object then you can patch into the .has() and these are called "traps"
  handler.get() > common
  handler.set() > common
  handler.deleteProperty()
  handler.ownKeys()
  handler.apply()
  handler.construct() > common
*/

/*
  - Proxy is a constructor (which means we have to use the keyword 'new')
  - Takes two args: 
  1 Object to proxy
  2 Object serving as the handler
  - a handler - has a property, each trap you want to set
*/

let handler = {
  // get will run anytime anyone accesses this object. Two args: 1 Target object (the object acted on), 2 Property that was accessed
  get: (target, propName) => {
    // console.log(target);
    // console.log(propName);
    // return target.propName; // > Will not work because there is in property called propName
    // return propName; // Returns property we are trying to access with ex: newObj.name or newObj.job
    // return target["name"] // Will produce the same result below.
    return target[propName]; // Returns value. Target is the object itself. [] bracket notation will evaluate what is inside which means [propName] will get turned into a string (either the word 'name' or 'job' in this example)
  },

  set: (target, propName, newValue) => {
    console.log(target); // {}
    console.log(propName); // Whichever property like name, job, age
    console.log(newValue); // Value after equal sign  newObj.name = "Stan"

    // Validation
    if (propName == "age") {
      if (typeof newValue !== "number") {
        throw new TypeError("Age must be a valid number");
      } else {
        target[propName] = newValue;
      }
    } else {
      target[propName] = newValue;
    }
  },

  has: (target, propName) => {
    console.log("Checking if has..."); // This is a place where we can actually use "reflect"
    // we have to return a true/false here otherwise we cut if off here.
    return true;
  }
};

let newObj = new Proxy({}, handler);
newObj.name = "Stan";
newObj.job = "Instructor";
// console.log("Name:", newObj.name);
// console.log("Job:", newObj.job);
// console.log("Age:", newObj.age); // undefined since age property does not exists yet
newObj.age = 36;
console.log("Age:", newObj.age);
// newObj.age = "Ha ha"; // Here we want to prevent by validation first.
console.log("Age:", newObj.age);

// .has() - here we are checking if the object has the property "name"
if ("name" in newObj) {
  console.log("I found it!");
}

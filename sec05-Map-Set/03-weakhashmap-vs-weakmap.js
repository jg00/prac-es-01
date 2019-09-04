/*
weakMap
  1. weakMap will allow garbage collection, if the key has not reference
  2. It is not an iterable, and only has get(), set(), has(), delete(). (.entries(), .size(), etc are not valid methods for WeakMap())
*/

// Map() - uncomment to run
// Map() and weakMap() will be same up to here
/*
let aStrongMap = new Map();
let friend = { name: `Jim` }; // going to use this as the key
aStrongMap.set(friend, `Best Friend`);
console.log(aStrongMap.get(friend)); // Best Friend

// Difference - With Map you can't garbage collect unless you explicitly delete the key.
// Below will cause a memory leak.  Object does not exists anymore but still does in the Map.
friend = null; // The object should no longer exists.  But with Map(), the MapIterator still exits.
console.log(aStrongMap.entries()); // With Map() the MapIterator still exists. Also remember .entries() returns an iterator
*/

// WeakMap() - uncomment to run
/*
let aWeakMap = new WeakMap();
let friend = { friend: "Bill" };
aWeakMap.set(friend, "Best Friend");
console.log(aWeakMap.get(friend)); // Best Friend

friend = null; // undefined
console.log(aWeakMap.get(friend)); // Here that key-value will be removed entrirely from the WeakMap()
*/

// Another use case example
const userData = {
  numberOfUsers: 2,
  status: 200,
  users: [
    {
      name: `Rob`,
      number: `1-515-555-1234`
    },
    {
      name: `Jim`,
      number: `1-515-555-9876`
    }
  ]
};

/*
  Scenario:
  Make an iterator and apply to an iterable
*/

const aString = new String("Hi"); // Using new to avoid auto-boxing on a primitive data type that would give more methods and default iterator.  We want to avoid using the default iterator in this example and that is why we use new.

/*
// 1a aString already has an iterator and we can already use for..of
console.log(aString[Symbol.iterator]);
// for (let letter of aString) {
//   console.log(letter);
// }


// 1b My example to return an iterator and use .next()
let b = aString[Symbol.iterator](); // Returning an iterator and we can then use .next()
console.log(b.next()); // { value: 'H', done: false }
console.log(b.next()); // { value: 'i', done: false }
*/

// 2b We want to make our own Iterator and replace the default iterator
aString[Symbol.iterator] = function() {
  // Return an object...Below IS the iterator object
  // It MUST have a next property
  return {
    allDone: false,
    counter: 0,

    next: function() {
      if (!this.allDone) {
        console.log("here", this.allDone); // here false
        this.counter++;
        if (this.counter === 6) {
          this.allDone = true;
        }
        return {
          value: "Haha, you exprected letters and didn't get any!",
          done: false,
          counter: this.counter
        };
      } else {
        console.log("counter", this.counter); // counter 6 < last thing that prints out.  Above will no longer print.
        return {
          done: true // All we need to end the iteration
        };
      }
    }
  };
};

// > The for..of will keep running until it gets back an object with a property of done: true else the for..of will keep running
// > aString is an iterable and what make it an iterable is setting it's property aString[Symbol.iterator]
for (value of aString) {
  console.log(value);
}

console.log("");

// 3 This is how we would use the new iterator and call the next() function (Remember this a new Iterator object with it's own counter)
let b = aString[Symbol.iterator](); // Execute to return the object with the next property
console.log(b.next()); // { value: 'Haha, you exprected letters and didn\'t get any!', done: false, counter: 6 }
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next()); // { done: true }

/* Basic set up
  aString[Symbol.iterator] = function() {
    return {
      next: function() {
        return {
          value: 1,
          done: false
        };
      }
    };
  };
*/

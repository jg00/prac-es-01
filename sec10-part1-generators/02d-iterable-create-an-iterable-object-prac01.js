/*
  Practice - similar to 02d-iterator-iterable-combined.js
*/

const aString = new String("Well");
// console.log(aString[Symbol.iterator]().next()); // { value: 'W', done: false }

// Set the Symbol.iterator property to a function that returns and iterator
// An iterator requires a next property function that returns an object with properties done and value at the least
aString[Symbol.iterator] = function() {
  return {
    allDone: false,
    counter: 0,

    next: function() {
      if (!this.allDone) {
        this.counter++;

        if (this.counter === 6) {
          this.allDone = true;
        }

        return {
          value: `Now now counter ${this.counter}`,
          done: false
        };
      } else {
        // If this.allDone is set to true above we can return below to end iterator
        return { done: true };
      }
    }
  };
};

for (letter of aString) {
  console.log(letter);
}

/*
  Scenario:
  Make an iterator and apply to an iterable
*/

const aString = new String("Hi");
console.log(aString[Symbol.iterator]);
// for (let letter of aString) {
//   console.log(letter);
// }

// We want to make our own Iterator
aString[Symbol.iterator] = function() {
  // Return an object...this IS the iterator object
  // It MUST have a next property
  return {
    allDone: false,
    counter: 0,

    next: function() {
      if (!this.allDone) {
        console.log("here", this.allDone);
        this.counter++;
        if (this.counter === 6) {
          this.allDone = true;
        }
        return {
          value: "Haha, you exprected letters and didn't get any!",
          done: false
        };
      } else {
        return {
          done: true
        };
      }
    }
  };
};

// The for..of will keep running until it gets back an object with done: true else the for..of will keep running
for (letter of aString) {
  console.log(letter);
}

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

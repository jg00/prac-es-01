// In this example we have a Constructor function

// 1 By using function() we are 'creating a new context' and therefore 'this' refers to the setInterval itself
function Timer() {
  setInterval(function() {
    console.log("Inside", this);
  }, 2000);
}

const timer = new Timer();

// 2 By using arrow function we are 'not creating a new context'.  'this' refers to the Timer {} object itself
// function Timer() {
//   setInterval(() => {
//     console.log("Inside", this);
//   }, 2000);
// }

// const timer = new Timer();

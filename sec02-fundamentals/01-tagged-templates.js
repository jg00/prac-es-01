let harry = `Mr. and Mrs. Dursley.`;
let lotr = `When Mr. Bilbo Baggins of Bag End`;
let orwell = `It was a bright cold day in April, and the clocks were striking thirteen.” — 1984, George Orwell`;
let lines = [harry, lotr, orwell];

/* ex 4 (Important example)
   Example to call a function to do some pre-processing of arguments and returns another function which can then be called
   to do render something to the DOM.
*/

// Now you can easily use these two lines to render to the DOM
const placeHTML = buildHTML2`<li>${lines}</li>`; // Remember buildHTML2()`..` pre-processes arguments and returns a function that expects the element id
placeHTML("#quotes");

function buildHTML2(tags, lines) {
  return function(element) {
    const newHTML = lines.map(function(line) {
      return `${tags[0]}${line}${tags[1]}`;
    });
    const finalHTML = newHTML.join("");
    document.querySelector(element).innerHTML += finalHTML;
  };
}

/* Reference other examples */

/* ex: 1, 2 function */
// function buildHTML(tags, lines) {
//   console.log(tags);
//   console.log(lines);
// }

/* ex: 1 result */
// ['qwsdesaaqws']

// const result = buildHTML`qwsdesaaqws`;
// console.log(result)

/* ex: 2 result */
// [ '<li>', '</li>' ]
// [ 'Mr. and Mrs. Dursley.',
//   'When Mr. Bilbo Baggins of Bag End',
//   'It was a bright cold day in April, and the clocks were striking thirteen.” — 1984, George Orwell' ]

// const result = buildHTML`<li>${lines}</li>`;
// console.log(result)

/* ex 3 - example to render to the DOM (open 01-tagged-templates.html) */
// function buildHTML(tags, lines) {
//   const newHTML = lines.map(function(line) {
//     return `${tags[0]}${line}${tags[1]}`; // Whatever the function returns it is returned or pushed on to the newHTML array
//   });
//   return newHTML; // At the end of the function we can return the array result
// }
// const result = buildHTML`<li>${lines}</li>`;
// document.querySelector("#quotes").innerHTML = result;

const arr = [1, 2, 3, 10, 11, 12];

// for
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for..in - key is index
for (let key in arr) console.log(arr[key]);

// for..in - commonly for objects
const obj = {
  name: "Tesla",
  occ: "teacher",
  language: "JS"
};

for (let key in obj) console.log(key, obj[key]);

//.forEach - specific to arrays. Below is the actual prototype.
// Array.prototype.forEach;
arr.forEach((value, index, array) => {
  console.log(index, value, array);
});

// for..in iterates over the keys of an iterator
// for (let key in arr)

// for..of iterates over the value of the iterator
// for..of - mainly for arrays (Works on any iterable - strings, nodeList objects (from DOM), maps, sets, other iterables)
for (let value of arr) console.log(value);

// for..of - string iterator
const str = `Alex Trebec`;
for (let letter of str) console.log(letter);

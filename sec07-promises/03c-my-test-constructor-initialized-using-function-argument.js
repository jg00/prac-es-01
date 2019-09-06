class Blah {
  constructor(someFunction) {
    const b = someFunction();
    console.log(b);
  }
}

let a = new Blah(() => {
  return { data: "aaa" };
});

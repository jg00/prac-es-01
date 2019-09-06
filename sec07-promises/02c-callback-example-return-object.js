function b(num) {
  const objectToReturn = { run: `Haha..well I'll be this is cool!` };
  return objectToReturn;
}

console.log(b(2).run); // function b(2) runs then is fully replaced with {}.run

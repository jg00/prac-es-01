// Basic iterator - what makes and iterator? Need to implement 'next' property
function myIterator() {
  let i = 0;
  return {
    next: () => {
      return { value: 1, done: false };
    }
  };
}

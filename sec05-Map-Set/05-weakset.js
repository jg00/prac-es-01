/*
  WeakSets
  1 can only hold objects
  2 like WeakMaps, the primary gain is garbage collection. Uses weak references.
  3 Not iterable
  4 No get method
  5 Size is always zero
*/

let harry = {
  name: `Harry`,
  id: 12
};

let sherry = {
  name: `Sherry`,
  id: 7
};

let employeeIds = new WeakSet();
employeeIds.add(harry);
employeeIds.add(sherry);

console.log(employeeIds.has(harry));

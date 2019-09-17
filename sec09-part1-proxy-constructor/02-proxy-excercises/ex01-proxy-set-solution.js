/*
  Scenario - Validate new value for every set call
*/

let manager = {
  office: `Dubai`,
  dept: `Sales`,
  employees: 0
};

const handler = {
  set: (target, propName, newValue) => {
    if (propName === "employees") {
      switch (typeof newValue) {
        case `string`:
          target[propName] = newValue;
        case `object`:
          if (Array.isArray(newValue) || newValue === null) {
            target[propName] = newValue;
            break;
          }
        default:
          throw new TypeError(
            `Default: Invalid datatype. Only arrays, strings, and null are valid`
          );
      }
    } else {
      target[propName] = newValue;
    }
  }
};

const managerProxy = new Proxy(manager, handler);

managerProxy.office = `London`; //updates
managerProxy.employees = [`Jim`, `Patrick`, `Marie`]; //updates

try {
  managerProxy.employees = 3; // does not update
} catch (err) {
  console.log(err);
}

// managerProxy.employees = null; //updates
// managerProxy.employees = { name: `Jim` }; //does not update

console.log(managerProxy);

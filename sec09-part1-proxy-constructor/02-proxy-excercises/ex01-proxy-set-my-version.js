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
      if (
        Array.isArray(newValue) ||
        typeof newValue === "string" ||
        newValue == null
      ) {
        console.log("Value is either an array, string or null - updated");
        target[propName] = newValue;
      } else {
        console.log("Not an array, string, nor null - no updates");
      }
    } else {
      console.log("Not employee property");
    }
  }
};

const managerProxy = new Proxy(manager, handler);

managerProxy.office = `London`; //updates
managerProxy.employees = [`Jim`, `Patrick`, `Marie`]; //updates
managerProxy.employees = 3; // does not update
managerProxy.employees = null; //updates
managerProxy.employees = { name: `Jim` }; //does not update

console.log(managerProxy);

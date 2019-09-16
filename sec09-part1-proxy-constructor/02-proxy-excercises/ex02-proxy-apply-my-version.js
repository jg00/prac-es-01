/*
  Scenario - Every time this function is called we want to log
*/

const fs = require("fs");

function importantFunction(dataToAppend) {
  console.log("Important stuff here. No need to change.");
}

const handler = {
  apply: (target, thisArg, argsList) => {
    // console.log(target.name); // importantFunction
    // console.log(thisArg);  // undefined
    // console.log(argsList); // ['A param']

    const logData = `\n${target.name}, ${argsList}, ${new Date()}`;

    fs.appendFile("proxyLog.txt", logData, err => {
      if (!err) {
        return target(argsList[0]);
      } else {
        console.log(
          "importantFunction() unable to execute and no logs created."
        );
      }
    });
  }
};

const importantFunctionProxy = new Proxy(importantFunction, handler);

importantFunctionProxy("A param");
// importantFunctionProxy("A second call");

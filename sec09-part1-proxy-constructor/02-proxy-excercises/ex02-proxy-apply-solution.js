/*
  Scenario - Every time this function is called we want to log
*/

const fs = require("fs");

function importantFunction(dataToAppend) {
  console.log("Important stuff here. No need to change.");
}

const handler = {
  apply: (target, thisArg, argsList) => {
    const logData = `${target.name}, ${argsList}, ${new Date()}\n`;

    fs.appendFile("proxyLog.txt", logData, err => {
      if (!err) {
        // STILL NEED TO CALL THE FUNCTION
        target(...argsList);
      } else {
        console.log(
          "importantFunction() unable to execute and no logs created."
        );
      }
    });
  }
};

const importantProxy = new Proxy(importantFunction, handler);

importantProxy("A param", "well");
importantProxy("A second call");

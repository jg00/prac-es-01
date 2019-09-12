// 1. Get file names (from the files in data.zip) using fs module's readdir.
// 2. Loop through and print off the name of each file in the dir
// 3. Using readFile (NOT readFileSync), read the files and in the callback, print the filename. Note: They will not be the same as in the previous step.
// 4. Look at the file contents, count up the total number of the string "gotYa" in each. Print an array that has the count for each file in ascending order. For a little more work, make it an object with a key of file name, value of count instead.
// 5. As soon as the full contents of any single are read, print them out. Do not wait for any other file to complete.

const fs = require("fs");

fs.readdir("./data", (err, files) => {
  const filePromises = files.map((fileName, index) => {
    return new Promise((resolve, reject) => {
      // console.log(index, fileName);
      fs.readFile(`./data/${fileName}`, (err, data) => {
        // console.log(fileName);
        if (err) reject(err);
        resolve({
          fileName,
          data: String(data)
        });
      });
    });
  });

  Promise.all(filePromises).then(fileContentArray => {
    const arrayCount = fileContentArray.map(fileObj => {
      const matches = fileObj.data.match(/gotYa/g);

      if (matches) {
        return {
          [fileObj.fileName]: matches.length // evaluate [fileObj.fileName] using [].  This will convert to a string to use as a property.
        };
      } else {
        return { [fileObj.fileName]: 0 };
      }
    });

    /* Sort for primitive data
    // console.log(arrayCount);
    const orderedArray = arrayCount.sort((a, b) => {
      return a - b;
    });

    console.log(orderedArray);
    */

    console.log(arrayCount);
  });

  Promise.race(filePromises).then(file => {
    console.log("First file to resolve", file);
  });
});

/*
  Side notes;
  fs.readdir() - returned file names sorted in order they were read in
  fs.readFile() - the order of files read is random
*/

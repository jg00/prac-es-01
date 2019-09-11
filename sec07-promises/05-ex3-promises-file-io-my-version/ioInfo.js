// 1. Get file names (from the files in data.zip) using fs module's readdir.
// 2. Loop through and print off the name of each file in the dir
// 3. Using readFile (NOT readFileSync), read the files and in the callback, print the filename. Note: They will not be the same as in the previous step.
// 4. Look at the file contents, count up the total number of the string "gotYa" in each. Print an array that has the count for each file in ascending order. For a little more work, make it an object with a key of file name, value of count instead.
// 5. As soon as the full contents of any single are read, print them out. Do not wait for any other file to complete.

const fs = require("fs");
const path = require("path");

function getDirectoryFilesNames() {
  return new Promise((resolve, reject) => {
    fs.readdir("./data", (err, files) => {
      if (!err) resolve(files);
      else reject(err);
    });
  });
}

function getFileContents(fileName) {
  const filePath = path.join(__dirname, "data", fileName);

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      // console.log(fileName, data);
      if (!err) resolve(data);
      else reject(err);
    });
  });
}

function main() {
  const fileNames = getDirectoryFilesNames();
  fileNames.then(fileNamesArray => {
    fileNamesArray.forEach(fileName => {
      console.log(fileName);
    });
  });
}

main();

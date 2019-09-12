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
      if (!err) resolve({ data: data, fileName: fileName });
      else reject(err);
    });
  });
}

function main() {
  const fileNames = getDirectoryFilesNames();

  // 1, 2 Print file names in directory
  fileNames.then(fileNamesArray => {
    console.log(fileNamesArray);
    fileNamesArray.forEach(fileName => {
      console.log(fileName);
    });
  });

  // 3 Print name and file content
  fileNames.then(fileNamesArray => {
    const filePromises = fileNamesArray.map(fileName => {
      return getFileContents(fileName);
    });

    Promise.all(filePromises).then(contentArray => {
      contentArray.forEach(content => {
        // console.log(content.fileName, content.data.toString());

        let currentFile = content.fileName;
        // console.log(currentFile);

        let fileContent = content.data.toString();
        let words = fileContent.split(" ");
        // console.log(words);

        const totalOccurences = words.reduce((total, word) => {
          if (word.indexOf("gotYa") > -1) {
            return (total = total + 1);
          }
          return total;
        }, 0);

        const result = {
          file: content.fileName,
          totalOccurences: totalOccurences
        };

        console.log(result);
      });
    });

    // First to complete
    Promise.race(filePromises).then(contentArray => {
      let currentFile = contentArray.fileName;

      let fileContent = contentArray.data.toString();
      let words = fileContent.split(" ");

      const totalOccurences = words.reduce((total, word) => {
        if (word.indexOf("gotYa") > -1) {
          return (total = total + 1);
        }
        return total;
      }, 0);

      const result = {
        file: contentArray.fileName,
        totalOccurences: totalOccurences
      };

      console.log("First to complete:", result);
    });
  });
}

main();

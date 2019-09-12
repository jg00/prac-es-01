const files = [
  { name: "file1", count: 13 },
  { name: "file2", count: 11 },
  { name: "file3", count: 52 },
  { name: "file4", count: 8 },
  { name: "file5", count: 0 },
  { name: "file5", count: 13 }
];

console.log(files);

let orderedFiles = files.sort((a, b) => {
  if (a.count > b.count) return 1;
  if (a.count < b.count) return -1;
  return 0;
});

console.log(orderedFiles);

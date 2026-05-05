const fs = require('fs');

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(`Error reading ${fileName}`);
      } else {
        resolve(data);
      }
    });
  });
}

Promise.all([
  readFilePromise('file1.txt'),
  readFilePromise('file2.txt'),
  readFilePromise('file3.txt'),
])
.then((data) => {
  console.log("Files processed using Promises:");
    console.log(data);
  })
.catch((err) => {
  console.log(err);
});
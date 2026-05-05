const fs = require('fs');
function readFileStream(fileName) {
  const Stream = fs.createReadStream(fileName, 'utf8');
  Stream.on('data', (chunk) => {
    console.log(`Chunk from ${fileName}:`);
    console.log(chunk);
  });
  Stream.on('end', () => {
    console.log(`${fileName} reading completed`);
  });
  Stream.on('error', (err) => {
    console.error(`Error reading ${fileName}:`, err);
  });
}
readFileStream('file1.txt');
readFileStream('file2.txt');
readFileStream('file3.txt');
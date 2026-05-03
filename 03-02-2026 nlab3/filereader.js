// Import the built-in file system module

const fs = require("fs");

const fileName = 'StudentData1.txt';

console.log("--- Program Started ---");

// Reading the file asynchronously
fs.readFile(fileName,'utf8',(err,data)=>{
    if (err){
        console.log("--- Error Detected ---");
        if (err.code === 'ENOENT'){
            console.error(`Status:404. The file "${fileName}" does not exist`); 
        }else{
            console.error(`An Unexpected error occured`,err.message);
        }
        return;  //Exit the callback
    }
    console.log("---File Read Successfully ---");
    console.log("Content:",data);
});

console.log("--- Program Continuing (Non-blocking) ---");
console.log("The event loop is still running while the file is being read...");


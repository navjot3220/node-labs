const fs = require('fs'). promises;

async function processFiles() {
    try {
        const file1 = await fs.readFile('file1.txt', 'utf8');
        console.log(file1);

        const file2 = await fs.readFile('file2.txt', 'utf8');
        console.log(file2);

        const file3 = await fs.readFile('file3.txt', 'utf8');
        console.log("Files3 processed using Async/Await:");
        console.log(file3);

    } catch (error) {
        console.error('Error reading file:', error);
    }}
    processFiles();

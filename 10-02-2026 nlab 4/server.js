const http = require('http');
const fs = require('fs');

//create http server
const server = http.createServer((req,res) => {

    //read the text file
    fs.readFile('data.txt', 'utf8', (err, data) => {
        if(err) {
            res.writeHead(500, {'content-type': 'text/plain'});
            res.end('error reading file');
        } else {
            res.writeHead(200, {'content-type': 'text/plain'});
            res.end(data);
        }
    });
});

//start server 
server.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
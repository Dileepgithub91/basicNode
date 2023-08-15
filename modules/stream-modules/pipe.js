// stream.pipe() 
/*
The  method used to take a readable  stream and connect it to a  writeable stream.

*/

// Import required modules
const fs = require('fs');
const http = require('http');

// Create an HTTP server instance
const server = http.createServer();

// Read data from 'Dileep.txt' and write it to 'DKM.txt'
const readableStream = fs.createReadStream('Dileep.txt');
const writableStream = fs.createWriteStream('gaurav.txt');
readableStream.pipe(writableStream);

// Set up a request handler
server.on('request', (req, res) => {
  // Set the response header and status code
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Read data from 'gaurav.txt' and send it as the response
  const readStream = fs.createReadStream('gaurav.txt');
  readStream.pipe(res);
});

// Start the server
server.listen(5001, () => {
  console.log("Server is listening on port 5001");
});

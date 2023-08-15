/*
Stream aare object that let you read data from a source or write data to a  destination 
in continuous fashion.
Streaming means listening to music or watching video in real time ,
instead of downloading a file 
to your  computer and watching it later.
The Stream module provides a way of handling streaming data.

Streams are especially useful for handling large amounts of data

There are four types of streams in Node.js:

Readable Streams: These streams are used for reading data from a source,
 such as a file, network socket, or HTTP response.

Writable Streams: These streams are used for writing data to a destination, 
such as a file, network socket, or HTTP request.

Duplex Streams: These streams represent both readable and writable ends,
 allowing bidirectional communication.

Transform Streams: These are a type of duplex stream where the data is transformed
 as it's being read or written. 
They are commonly used for data manipulation, like compression or encryption.
It is a type of duplex stream whre the output is computed based on input.
//.....Readable Stream Properties and Methods.....
Method	Description
isPaused()	Returns true if the state of  the readable stream is paused, otherwise false
pause()	Pauses the readable stream
pipe()	Turns the readable stream into the specified writable stream
read()	Returns a specified part of the readable stream
resume()	Resumes a paused stream
setEncoding()	Sets the character encoding of the readable stream
unpipe()	Stops turning a readable stream into a writable stream, caused by the pipe() method
unshift()	Pushes some specified data back into the internal buffer
wrap()	Helps reading streams made by older Node.js versions

//.....Writable Stream Properties and Methods............
Method	Description
cork()	Stops the writable stream and all written data will be buffered in memory
end()	Ends the writable stream
setDefaultEncoding()	Sets the encoding for the writable stream
uncork()	Flushes all data that has been buffered since the cork() method was called
write()	Writes data to the stream


*/

/*

//......example..........
// Import the 'fs' module, which provides file system operations.
const fs = require('fs');

// Create a readable stream from a file named 'input.txt'.
const readableStream = fs.createReadStream('inputStream.txt');

// Create a writable stream to a file named 'output.txt'.
const writableStream = fs.createWriteStream('outputStream.txt');

// Pipe (connect) the readable stream to the writable stream,
// which means data from the readable stream will be written to the writable stream.
readableStream.pipe(writableStream);

// Handle the 'data' event for the readable stream.
readableStream.on('data', (chunk) => {
  // This function is called whenever a chunk of data is read from the readable stream.
  // The 'chunk' parameter represents a portion of data read.
  console.log(`Received ${chunk.length} bytes of data.`);
});

// Handle the 'end' event for the readable stream.
readableStream.on('end', () => {
  // This function is called when the readable stream has finished reading all the data.
  console.log('Reading finished.');
});

// Handle the 'finish' event for the writable stream.
writableStream.on('finish', () => {
  // This function is called when all the data has been written to the writable stream.
  console.log('Writing finished.');
});

// Handle the 'error' event for the writable stream.
writableStream.on('error', (err) => {
  // This function is called if there is an error while writing data to the writable stream.
  console.error('Error writing data:', err);
});


*/



// .............first ways normal method.............. 
//const fs=require('fs');
// const http=require('http');
// const server=http.createServer();
// server.on("request",(req,res)=>{
//   fs.readFile("inputStream.txt",(err,data)=>{
//     if(err)return console.error(err);
//     res.end(data.toString());
//   });
// });
 
//...........second ways stream 
const http = require('http');
const fs = require('fs'); // Don't forget to import the 'fs' module

const server = http.createServer();

server.on('request', (req, res) => {
  const rstream = fs.createReadStream('inputStream.txt');
  //const rstream=fs.createWriteStream('outputStream12.txt');

  rstream.on('data', (chunkdata) => {
    res.write(chunkdata);
  });

  rstream.on('end', () => {
    res.end();
  });

  rstream.on('error', (err) => {
    console.log(err);
    res.end("file not found");
  });
});

server.listen(8080, '127.0.0.1', () => {
  console.log('Server is listening on port 8080');
});


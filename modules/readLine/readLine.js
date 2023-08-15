/*
readLine: readLine module provide an easy way to read input from readable stream.line by line.
The Readline module provides a way of reading a datastream, one line at a time.
The node:readline module provides an interface for reading data from a Readable
 stream (such as process.stdin) one line at a time.

//.........Readline Properties and Methods.............
Method	                Description
clearLine()	Clears the current line of the specified stream
clearScreenDown()	Clears the specified stream from the current cursor down position
createInterface()	Creates an Interface object
cursorTo()	Moves the cursor to the specified position
emitKeypressEvents()	Fires keypress events for the specified stream
moveCursor()	Moves the cursor to a new position, relative to the current position
*/

//.........syntax............

//var readline = require('readline');

//............example............
var readline = require('readline');
var fs = require('fs');

var myInterface = readline.createInterface({
  input: fs.createReadStream('demofile1.html')
});

var lineno = 0;
myInterface.on('line', function (line) {
  lineno++;
  console.log('Line number ' + lineno + ': ' + line);
});






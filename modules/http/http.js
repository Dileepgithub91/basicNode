/*
The HTTP module provides a way of making 
Node.js transfer data over HTTP (Hyper Text Transfer Protocol).

//.......HTTP Properties and Methods...................
Method	Description
createClient()	Deprecated. Creates a HTTP client
createServer()	Creates an HTTP server
get()	Sets the method to GET, and returns an object containing the user's request
globalAgent	Returns the HTTP Agent
request()	Returns an object containing the user's request
*/


//.......syntax................

//var http = require('http');

//..............createServer.............

/*
The http.createServer() method turns your computer into an HTTP server.

The http.createServer() method creates an HTTP Server object.

The HTTP Server object can listen to ports on 
your computer and execute a function, a requestListener, each time a request is made.
*/
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello World!');
    res.end();
}).listen(8080);
console.log("server is running on port no 8080");
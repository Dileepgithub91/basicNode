const fs = require('fs');
const http = require('http');
const server=http.createServer();
const readStream = fs.createReadStream('Dileep.txt');
server.listen(8080, () => {
  console.log("Server is listening on port 8080");
});

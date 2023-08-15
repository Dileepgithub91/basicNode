
// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end("Dileep and gaurav"); 
// });

// server.listen(3004, () => {
//     console.log("Listening on port 3004"); // Corrected the console.log message
// });



// const express = require('express');
// const app = express();
// const port = 3000;
// // Define a route
// app.get('/', (req, res) => {
//     res.send('Hello, world!');
// });
// // Start the server
// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });

const express=require('express');
const app=express();
const port=3000;
//define a route
app.get('/',(req,res)=>{
    res.send("Hello Dileep");
});
app.listen(port,()=>{
    console.log(`Server is connected on ${port} `)
})




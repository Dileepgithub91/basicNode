/*

fork: Creates a new Node.js process that runs a specified module.
*/

const { fork } = require('child_process');

// Using fork method
// Fork a new Node.js process that runs 'child_module.js' with arguments ['arg1', 'arg2']
const forked = fork('child_module.js', ['arg1', 'arg2'], { silent: true });

// Listen for the 'message' event from the forked process
forked.on('message', (message) => {
  // This function is called when a message is received from the forked process
  console.log(`Message from forked process: ${message}`);
});

// Send a message to the forked process
forked.send('Hello from the parent process!');


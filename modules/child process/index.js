/*

the child_process module provides a way to create and interact with child processes.
 Child processes allow you to run other programs or scripts from within your Node.js application, 
 enabling parallelism and efficient utilization of system resources. 
 The child_process module provides several functions to work with child processes:

spawn: Launches a new process and provides streaming interfaces for I/O.

exec: Executes a command in a shell and buffers the output.

execFile: Executes a file with specified arguments and buffers the output.

fork: Creates a new Node.js process that runs a specified module.

*/




// Import the child_process module to work with child processes
const { spawn, exec, execFile, fork } = require('child_process');

// Using spawn method
// Launch the 'ls' command with arguments ['-lh', '/usr'] as a child process
const lsSpawn = spawn('ls', ['-lh', '/usr']);

// Listen for the 'data' event on the stdout stream of the spawned process
lsSpawn.stdout.on('data', (data) => {
  // This function is called whenever data is received from the stdout stream
  console.log(`spawn stdout: ${data}`);
});

// Using exec method
// Execute the 'ls -lh /usr' command in a shell
exec('ls -lh /usr', (error, stdout, stderr) => {
  // This callback is executed when the command is completed
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  console.log(`exec stdout: ${stdout}`);
});

// Using execFile method
// Execute the 'ls' command with arguments ['-lh', '/usr']
execFile('ls', ['-lh', '/usr'], (error, stdout, stderr) => {
  // This callback is executed when the command is completed
  if (error) {
    console.error(`execFile error: ${error}`);
    return;
  }
  console.log(`execFile stdout: ${stdout}`);
});

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

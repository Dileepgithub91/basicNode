

/*
spawn: Launches a new process and provides streaming interfaces for I/O.

*/
const { spawn } = require('child_process'); // Import the correct 'spawn' function

// Using spawn method
// Launch the 'ls' command with arguments ['-lh', '/usr'] as a child process
const lsSpawn = spawn('ls', ['-lh', '/usr']);

// Listen for the 'data' event on the stdout stream of the spawned process
lsSpawn.stdout.on('data', (data) => {
  // This function is called whenever data is received from the stdout stream
  console.log(`spawn stdout: ${data}`);
});

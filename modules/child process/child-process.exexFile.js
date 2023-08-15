/*

execFile: Executes a file with specified arguments and buffers the output.
*/

// Using execFile method
// Execute the 'ls' command with arguments ['-lh', '/usr']
const {execFile} =require('child_process')
execFile('ls', ['-lh', '/usr'], (error, stdout, stderr) => {
    // This callback is executed when the command is completed
    if (error) {
      console.error(`execFile error: ${error}`);
      return;
    }
    console.log(`execFile stdout: ${stdout}`);
  });
  
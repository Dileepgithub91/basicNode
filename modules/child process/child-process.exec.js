/*

exec: Executes a command in a shell and buffers the output.
*/
const cp=require('child_process');
//cp.exec('start chrome https://www.youtube.com/watch?v=nCFvhMS5EIU') 
const rest=cp.execSync('node exec.js')
console.log(rest.toString());

// try {
//   const rest = cp.execSync('node exec.js');
//   console.log(rest.toString());
// } catch (err) {
//   console.error('Error:', err);
// }




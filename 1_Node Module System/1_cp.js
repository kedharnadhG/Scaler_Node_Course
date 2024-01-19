// child process is a node module used to create sub processes within a script
// you can perform different tasks with your script by just using some methods

const cp = require('child_process')


// cp.execSync('calc')
//cp.execSync('start chrome')

//to open a website
//cp.execSync('start chrome www.scaler.com/topics')

//executing a file from here
console.log('output ' + cp.execSync('node demo.js'))
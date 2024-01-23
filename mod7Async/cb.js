const fs = require('fs')

console.log('First Line')

let data = fs.readFileSync('f1.txt')
console.log('File 1 data ->' + data)

console.log('Last Line')
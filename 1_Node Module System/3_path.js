const path = require('path')

let ext = path.extname('E:\\gkn_proj\\data\nodePract\\1_Node Module System\\f1.txt')
console.log(ext)

let baseName = path.basename('E:\\gkn_proj\\data\nodePract\\1_Node Module System\\f1.txt')
console.log(baseName) //act file name

console.log(__filename) //curr filename
console.log(__dirname) //curr dir name


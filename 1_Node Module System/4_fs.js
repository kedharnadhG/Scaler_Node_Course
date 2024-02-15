const fs = require('fs')

//reading a file
// let fileContent = fs.readFileSync('f1.txt')
// console.log('data of file 1 -> ' + fileContent)

//writing in a file

//if the file name that is passed doesn't exist, a new file will be created with it's 
// // name and the data will be written on that file
// fs.writeFileSync('f2.txt', 'This is file 2')
// console.log('File has been witten')

//append a file 
// // appendFileSync method adds new data to a previously written file
// fs.appendFileSync('f3.txt', ' This is updated here')
// console.log('File has been appended')

//Delete a file
// fs.unlinkSync('f2.txt')
// console.log('file has been deleted')


//                  Working with Directories

//create a dir
//fs.mkdirSync('myDirectory')

//check the content inside a directory
// let folderpath = 'E:\\gkn_proj\\data\\nodePract\\1_Node Module System\\myDirectory'
// let folderContent = fs.readdirSync(folderpath)
// console.log("folder Content " + folderContent)   //folder Content f1.txt,f2.txt,f3.txt
// console.log("folder Content ", folderContent)   //folder Content  [ 'f1.txt', 'f2.txt', 'f3.txt' ]


//check whether a dir exists or not
// let doesExist = fs.existsSync('myDirectory')
// let doesExists = fs.existsSync('1_cp.js')
// console.log(doesExist)
// console.log(doesExists)


//remove directory   NOTE: make sure the dir is empty before deleting
fs.rmdirSync('myDirectory')
console.log('dir has been deleted')  
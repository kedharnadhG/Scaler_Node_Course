const fs = require('fs')

console.log('First Line')

// let data = fs.readFileSync('f1.txt')
// console.log('File 1 data ->' + data)

// let data2 = fs.readFileSync('f2.txt')
// console.log('File 2 data ->' + data2)



fs.readFile('f1.txt', cb1)
function cb1(err, data){
    if(err) throw err;
    //if(err) {
    //        console.log(err)
    //}
    console.log(data)
}


fs.readFile('f2.txt', (err, data) =>{
    if (err) throw err;
    console.log('file 2 data -> '+data);
});

// fs.readFile('f2.txt', cb2)
// function cb2(err, data){
//     if(err) throw err;
//     //if(err) {
//     //        console.log(err)
//     //}
//     console.log('file 2 data -> '+data)
// }

console.log('Last Line')
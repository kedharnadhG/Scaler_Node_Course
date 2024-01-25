const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/testDatabase')
.then(()=>console.log('connection is successful'))
.catch(err => console.error('couldnt connect to Mongodb', err))

//Schema Creation  (it is like a class| BluePrint)
const courseSchema = new mongoose.Schema({
    name:String,
    creator:String,
    publishedDate : {type:Date, default:Date.now},
    isPublished: Boolean
})

//Model Creation (as a class can have Multiple objects, Models are also like instances for the Schema)
const Course = new mongoose.model('Course', courseSchema)   //this is a class

async function createCourse(){
    const course = new Course({
        name : 'Java',       //JavaScript
        creator: 'Abc',      //Kedhar
        isPublished: false     //
    });
    
    const result = await course.save()    //here "save" method is a Async-method, bcoz it need to access the localSystem while saving the data
    console.log(result)
}

createCourse()
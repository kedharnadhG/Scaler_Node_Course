const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/testDatabase')
.then(()=>console.log('connection is successful'))
.catch(err => console.error('couldnt connect to Mongodb', err))

//Schema Creation  (it is like a class| BluePrint)
const courseSchema = new mongoose.Schema({
    name:{type:String, required:true, minlength:5, maxlength:200},

    tags: {type:Array, validate : {
        validator: function(tags){
            return tags.length > 1
        }
    }},

    category:{
        type:String,
        required:true,
        enum: ['DSA', 'Web', "Mobile", 'DataScience']
    },
    creator:{type:String, required:true},
    publishedDate : {type:Date, default:Date.now},
    isPublished: {type:Boolean, required:true},
    rating: {type:Number, required:true}
})

//Model Creation (as a class can have Multiple objects, Models are also like instances for the Schema)
const Course = new mongoose.model('Course', courseSchema)   //this is a class

// async function createCourse(){
//     const course = new Course({
//         name : 'python',       //JavaScript, DBMS, python 
//         creator: 'Durga',      //Kedhar, Durga
//         isPublished: false ,    //
//         rating:3
//     });
    
//     const result = await course.save()    //here "save" method is a Async-method, bcoz it need to access the localSystem while saving the data
//     console.log(result)
// } //Creating

// createCourse()


// async function getCourses(){
//     const courses = await Course.find({creator:"Kedhar"}).select({name:1, publishedDate:1})  // .sort({name:1}) '1 for ascending sorting'
//     console.log(courses)

// }

// getCourses()

//comparision operators
// eq (equal), gte (greater than and equql to), gt (greater than), lt, lte, in , not in
async function getCourses(){
    const courses = await Course.find({rating: {$in : [4.7, 3, 4.3, 4.5]}}).select({name:1, publishedDate:1}).sort({rating:-1})  //  ($gte : 4) ,   .sort({name:1}) '1 for ascending sorting'
    .and([{creator:'Kedhar'}, {rating: 4.3}], )
    console.log(courses)

}  //Reading Data

//getCourses()

async function updateCourse(id){
    let course = await Course.findById(id)
    if(!course) return;
    course.name = 'C++'
    course.creator = 'Steve'
    const updatedCourse = await course.save()
    console.log(updatedCourse)
} //Updating the data

//updateCourse('65b74e186224556b110002ec')


//Deleting a Document in Dataset
async function deleteCourse(id){
    let course = await Course.findByIdAndDelete(id)
    console.log(course)
}

//deleteCourse('65b74e186224556b110002ec')




//  ======================
 //         VALIDATIONS  
 async function createCourse(){
    const course = new Course({
        name : 'MongoDB',
        tags : ['express'],    //  , 'mongoDB'
        category:"Web",
        creator:"Adam",
        isPublished:true,
        rating:4.5
       
    });
    try{
        //await course.validate()
        const result = await course.save()
        console.log(result)
    }
    catch(error){
        for(field in error.errors){
            console.log(error.errors[field])      //It produces an Error-Log, which will helps in debug
        }
        //console.error(error.message)
    }
}

createCourse()
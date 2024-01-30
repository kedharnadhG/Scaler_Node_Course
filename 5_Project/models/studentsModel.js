const mongoose = require('mongoose')
const Joi = require('joi')

//create schema to store in mongodb db
const studentSchema = new mongoose.Schema({
    name : {type:String, required:true, minlength:3, maxlength:30},
    isEnrolled : {
        type: Boolean,
        default: false
    },
    Phone:{
        type:String,
        required:true,
        minlength:10,
        maxlength:25
    }
});

function validateData(student){
    const schema = {
        name : Joi.string().min(3).max(50).required(),
        Phone : Joi.string().min(10).max(50).required(),
        isEnrolled: Joi.boolean()
    }
    return Joi.validate(student, schema)
}

//create a model for that schema
const Student = mongoose.model('Student', studentSchema)


exports.Student = Student
exports.validate = validateData
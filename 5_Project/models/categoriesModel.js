const mongoose = require('mongoose')
const Joi = require('joi')

//create schema to store in mongodb db
const categorySchema = new mongoose.Schema({
    name : {type:String, required:true, minlength:3, maxlength:30}
})
//create a model for that schema
const Category = mongoose.model('Category', categorySchema)

function validateData(category){
    const schema = {
        name : Joi.string().min(3).required()
    }
    return Joi.validate(category, schema)
}

exports.Category = Category
exports.categorySchema = categorySchema
exports.validate = validateData
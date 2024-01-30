const express = require('express')
const {Student, validate} = require('../models/studentsModel')
const router = express.Router()


router.get('/', async (req, res) =>{
    let students = await Student.find()
    res.send(students);
});

router.post('/', async (req, res)=>{
    const {error}= validate(req.body)
    if(error) res.status(400).send(error.details[0].message)
    else{
        const student  = new Student( {
            //a new unique id will be generated itself
            name : req.body.name,
            isEnrolled: req.body.isEnrolled,
            Phone: req.body.Phone
        });
        await student.save()
        res.send(student);
    }
});

router.put('/:id', async (req, res) => {
    const {error}= validate(req.body)
    if(error) res.status(400).send(error.details[0].message)
    const student = await Student.findByIdAndUpdate(req.params.id, {name : req.body.name, isEnrolled: req.body.isEnrolled, Phone:req.body.Phone}, {new:true});
    if(!student) return res.status(404).send('The student with the given Id wasnt found');
    res.send(student);
});

router.delete('/:id', async (req, res) =>{
    const student = await Student.findByIdAndDelete(req.params.id);
    if(!student) return res.status(404).send('The student with the given Id wasnt found');
    res.send(student);
});

router.get('/:id', async (req, res) =>{
    const student = await Student.findById(req.params.id);
    if(!student) return res.status(404).send('The category with the given Id wasnt found');
    res.send(student);
});


module.exports =router
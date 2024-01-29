const express = require('express')
const Joi = require('joi')
const router = express.Router()

const Categories = [
    {id:1, name: 'Web'},
    {id:2, name: 'Mobile'},
    {id:3, name: 'Photography'},
]

router.get('/api/categories', (req, res) =>{
    res.send(Categories);
});

router.post('/api/categories', (req, res)=>{
    const {error}= validateData(req.body)
    if(error) res.status(400).send(error.details[0].message)
    else{
        const category  = {
            id: Categories.length +1,
            name : req.body.name
        };
        Categories.push(category);
        res.send(category);
    }
});

router.put('/api/categories/:id', (req, res) => {
    const category = Categories.find(c => c.id === parseInt(req.params.id));
    if(!category) return res.status(404).send('The category with the given Id wasnt found');
    category.name = req.body.name;
    res.send(category);
});

router.delete('/api/categories/:id', (req, res) =>{
    const category = Categories.find(c => c.id === parseInt(req.params.id));
    if(!category) return res.status(404).send('The genre with the given Id wasnt found');
    const index = Categories.indexOf(category);
    Categories.splice(index,1)
    res.send(category);
});

router.get('/api/categories/:id', (req, res) =>{
    const category = Categories.find(c => c.id === parseInt(req.params.id));
    if(!category) return res.status(404).send('The genre with the given Id wasnt found');
    res.send(category);
});

function validateData(category){
    const schema = {
        name : Joi.string().min(3).required()
    }
    return Joi.validate(category, schema)
}

module.exports =router
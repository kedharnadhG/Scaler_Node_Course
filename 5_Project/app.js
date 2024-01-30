const express = require('express')
const mongoose = require('mongoose')
const app = express()
const categories = require('./Routes/categories')
const students = require('./Routes/students')
const courses = require('./Routes/courses')

mongoose.connect('mongodb://localhost/learningPlatform')
.then(()=> console.log('connection is successful to database'))
.catch(err => console.error('Could not connect to mongo db', err))

app.use(express.json());
app.use('/api/categories', categories)
app.use('/api/students', students)
app.use('/api/courses', courses)


const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`port is running on ${port}`))
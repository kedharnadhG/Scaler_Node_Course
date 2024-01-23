const express = require('express')
const app = express()

const morgan =require('morgan')

const myMiddlewareFunction = require('./MiddleWares/middle')
const myMiddlewareFunction2 = require('./MiddleWares/middle_2')

//app.use(morgan())
app.use(morgan('tiny'))


// get , post, put, delete
app.use(express.json())

//1MW
app.use(myMiddlewareFunction)
// app.use(function(req, res, next){
//     console.log('I am Custom MiddleWare')
//     next()
// })

//2MW
app.use(myMiddlewareFunction2)
// app.use(function(req, res, next){
//     console.log('I am the Second MiddleWare')
//     next()
// })

// const courses = [
//     {id:1, name:'JavaScript'},
//     {id:2, name:'Java'},
//     {id:3, name:'Py'},
// ]
let courses = [
    {id:1, name:'JavaScript'},
    {id:2, name:'Java'},
    {id:3, name:'Py'},
]


app.get('/', (req, res) =>{
    res.send('Hello from Scaler Topics')
})

app.get('/about', (req, res) =>{
    res.send('we create impact')
})

app.get('/contact', (req, res) =>{
    res.send('contact us at abcd@abcd.com')
})

app.get('/courses', (req, res)=>{
    res.send(courses)
})

app.post('/courses', (req, res)=>{
    const course ={
        id : courses.length+1,
        name :req.body.name
    }
    courses.push(course)
    res.send(course)
}) //for to create

//Put method
app.put('/courses/:coursename', (req, res)=>{
    let course = courses.find(course => course.name === req.params.coursename)
    if(!course) res.status(404).send('The course u r looking for does not exist')

    course.name = req.body.name
    res.send(course)
}) //Update Data


//delete method
// app.delete('/courses/:coursename' , (req, res)=>{
//     let updatedCourses = courses.filter(course => course.name !== req.params.coursename)
//     courses = updatedCourses
//     res.send(courses)
// })

app.delete('/courses/:id', (req, res) =>{
    let course = courses.find(course => course.id === parseInt(req.params.id))
    if(!course) res.status(404).send('The course you are looking for does not exist')

    const index = courses.indexOf(course)
    courses.splice(index,1)
    res.send(course)
})



//Route Parameters

// app.get('/courses/:id', (req, res) =>{
//     //console.log(req.params)
//     //res.send(req.params.id)

//     //I have to filter-Out according to courses
//     let course = courses.find( course => course.id === parseInt(req.params.id))
//     res.send(course)
// })


app.get('/courses/:coursename', (req, res) =>{
    console.log(req.params.coursename)
    //which is similarly what's happening on sclerTopics website
    let course = courses.find( course => course.name === req.params.coursename)
    if(!course) res.status(404).send(`the course you are looking for doesn't exist.`)
    res.send(course)
})

const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`port is running on ${port}`))
const express = require('express')
const app = express()
const categories = require('./Routes/categories')
app.use(express.json());
app.use(categories)



const port = process.env.PORT || 3000
app.listen(port, ()=>console.log(`port is running on ${port}`))
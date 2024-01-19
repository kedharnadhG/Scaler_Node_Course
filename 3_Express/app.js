const express = require('express')
const app = express()

// get , post, put, delete

app.get('/', (req, res) =>{
    res.send('Hello from Scaler Topics')
})

app.get('/about', (req, res) =>{
    res.send('we create impact')
})

app.listen(3000, ()=>console.log('port is running on 3000'))
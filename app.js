const express = require('express')

const app = express()

const port = 3000

app.get('/',(req,res)=>{
    res.send("Hello WOrld!")
})

app.listen(port, ()=>{
    console.log(`Port running on ${port}`)
})
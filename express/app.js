const express = require('express')
const app = express()

const json = {a:1}

app.get('', (req,res)=>res.status(200).json(json))
app.get('/not_cached', (req,res)=>res.status(200).json(json))

app.listen(3000, ()=>console.log('Server started'))
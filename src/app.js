const express=require('express');
const app=express()
var cors=require('cors')
const bodyParser=require('body-parser')
const connection=require('./utilities/connection')
const routing=require('./routes/routing')
const errorLogger=require('./utilities/errorLogger')

let port=3800
connection()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/books',routing)
app.use(errorLogger)
app.listen(port)
module.exports=app

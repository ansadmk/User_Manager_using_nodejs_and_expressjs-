const express=require('express')
const app=express()
var Fun=require('./routes/user.js')
app.use('/',Fun)
app.listen(3000)
console.log('running on http://127.0.0.1:3000');
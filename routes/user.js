const express=require('express')
const router=express.Router()
const body=require('body-parser')
const con=require('../controllers/controlleruser')
var b=body.urlencoded({extended:false})
router.get('/',con.fun)
router.post('/users',b,con.post)
router.get('/users',con.get)
router.get('/users/:id',con.getUser)
router.put('/users/:id',b,con.put)
router.delete('/users/:id',con.delete)
module.exports=router
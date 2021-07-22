const express=require('express');
const sequelize = require('../../db/db');
const User=require('../../db/user.js');


const router =express.Router();


router.post('/signup',(req,res)=>{

const {username,email,password}=req.body;

User.create(req.body).then(()=>{
res.send("inserted");

})


});

router.post('/login',(req,res)=>{


});



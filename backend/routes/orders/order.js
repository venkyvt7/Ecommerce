const express=require('express');

const router =express.Router();
const sequelize=require('../../db/db');
const Orders=require('../../db/orders');

router.post('/placeorders',(req,res)=>{


    const {userid,productid}=req.body;

    console.log(userid);
    console.log(productid);
    res.send("dfjfkjdfdjk");
})


module.exports=router;
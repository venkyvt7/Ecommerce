const express=require('express');
const app=express();
const PORT=process.env.PORT||4001;
const users=require('./routes/userentry/user')

app.use(express.json());


app.get('/',(req,res)=>{

res.send("100% working");

})


app.listen(PORT);
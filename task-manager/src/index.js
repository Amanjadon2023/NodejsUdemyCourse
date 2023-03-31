const express=require('express');
require('./db/mongoose')

const app=express();
app.use(express.json());
const userRouter=require('./routers/user')
const taskRouter = require('./routers/task');
app.use(userRouter)
app.use(taskRouter)
const bcrypt = require('bcryptjs');
const fun=async()=>{
    const pass='aman'
 const hashedPass=await bcrypt.hash(pass,8);
 console.log(pass,'****',hashedPass);
 const isMatch=await bcrypt.compare('11111111','$2a$08$/Ml4pGeSKGizzkvnpOtPa.dinANPSUKlPF3qO8lZ1ctUhS.4RI6EO')
 console.log(isMatch);
}
fun('aman');
app.listen('3000',()=>{
    console.log('server is listening at 3000');
}) 

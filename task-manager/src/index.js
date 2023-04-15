const express=require('express');
require('./db/mongoose')

const app=express();
app.use(express.json());
const userRouter=require('./routers/user')
const taskRouter = require('./routers/task');
app.use((req,res,next)=>{
    console.log(req.method,req.path)
    // res.status(503).send("site is under maintainance Please try soon")
    next()
})
app.use(userRouter)
app.use(taskRouter)
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
// const fun=async()=>{
//     const pass='aman'
//  const hashedPass=await bcrypt.hash(pass,8);
//  console.log(pass,'****',hashedPass);
//  const isMatch=await bcrypt.compare('11111111','$2a$08$Qr62LMUUKXsWgOWMfvZSC.yCDxR7d6bULh1ZCgfw.QyLFewpW4PUG')
//  console.log(isMatch);
// }
// fun('aman');
const myFun=()=>{
    var token = jwt.sign({ _id: '12343201023983290dndjd' }, 'thisismyfirsttoken');
    console.log(token);
    const data=jwt.verify(token,'thisismyfirsttoken')
    console.log(data);
}
// myFun()
app.listen('3000',()=>{
    console.log('server is listening at 3000');
})

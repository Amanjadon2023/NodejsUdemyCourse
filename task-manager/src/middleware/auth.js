const jwt=require('jsonwebtoken')
const User=require('../models/user')
const auth=async(req,res,next)=>{
    console.log('auth middleware is called')
    try {
        const token=req.header('Authorization').replace('Bearer ','');
        const decoded=jwt.verify(token, 'thisismyfirsttoken')
        const user=await User.findOne({_id:decoded._id})
        req.user=user;
        req.token=token;
        next()
    } catch (error) {
        res.status(401).send("please authenticate!")
    }
}
module.exports=auth
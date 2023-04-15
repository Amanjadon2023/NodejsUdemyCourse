const mongoose = require('mongoose')
const bcrypt=require('bcryptjs')
var jwt = require('jsonwebtoken');

const validateEmail = function(email) {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
};
const userSchema=new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  email: {
    type: String,
    trim: true,
    unique:true,
    lowercase: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
}
  ,password: {
    type: String,
    required: true,
    validate: {
      validator:function(val){
            if(val.length<=6){
                throw new Error ('password length must be greater than 6')
            }
            if(val.includes('password')){
                throw new Error ('your password should not includes password string') 
            }
            return true;
      }
    },
  },
  tokens:[{token:{type:String,required:true}}]
})
userSchema.methods.generateAuthToken=async function(){
  const user=this;
  const token = jwt.sign({ _id:( user._id).toString() }, 'thisismyfirsttoken');
  user.tokens= user.tokens.concat({token})
  user.save()
  return token;
}
userSchema.statics.findByCredentials=async(email,password)=>{
  // console.log("token");
  const user=await User.findOne({email});
  if(!user){
    throw new Error('user does not exist');
  }
  const hashPass=await bcrypt.hash(password,8);
  const isMatch=await bcrypt.compare(password,hashPass)
  if(!isMatch){
    throw new Error('password is not correct');
  }return user;
}
userSchema.pre('save',async function(next){
  const user=this;
  if(user.isModified('password')){
    const hashedPass=await bcrypt.hash(user.password,8);
    user.password=hashedPass
  }
    console.log('just before saving');
    next()
})
const User = mongoose.model('User',userSchema )
module.exports=User
const mongoose = require('mongoose')
const bcrypt=require('bcryptjs')
const userSchema=new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  password: {
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
})
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
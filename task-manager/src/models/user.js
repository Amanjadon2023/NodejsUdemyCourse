const mongoose = require('mongoose')
const User = mongoose.model('User', {
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

  module.exports=User
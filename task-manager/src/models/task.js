const mongoose = require('mongoose')
const taskSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true,
        trim:true,
        validate:{validator:function(val){
            if(val.length>30){
                return true;
            } throw new Error('length shoud be grater than 30')
        },
    }
    },
    completed:{
        default:false,
        type:Boolean
    }
})
taskSchema.pre('save',async function (next){
    console.log(this);
    console.log('called before save');
    next()
})
const Task=mongoose.model('Task',taskSchema)
module.exports=Task
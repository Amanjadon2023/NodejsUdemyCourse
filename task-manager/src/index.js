const express=require('express');
require('./db/mongoose')
console.log('index');
const app=express();
const User=require('./models/user.js');
const Task=require('./models/task.js');
console.log(User);
app.use(express.json());
app.post('/users',async(req,res)=>{
    try{
        const user=new User(req.body)
        const data=await user.save();
        res.send(data)
    }
    catch(e){
        res.send(e)
    }
})
app.patch('/users',async(req,res)=>{
    try{
        console.log(req.query.name);
        const dataToBeUpdated= await User.updateOne({_id:req.query._id},{
        name:req.query.name,
        age:req.query.age})
        dataToBeUpdated.age=req.query.age;
        
        // const data=await user.save();
        res.send(data)
    }
    catch(e){
        res.send(e)
    }
})
app.get('/users/:id',async(req,res)=>{
    try{
        const data=await User.findOne({_id:req.params.id})
        res.send(data)
    }
    catch(e){
        res.send({error:e})
    }
})
app.get('/tasks/:id',async(req,res)=>{
    Task.findOne({_id:req.params.id}).then((data)=>{
        console.log(data);
        if(data===null){
        return res.status(400).send("not a valid request")
        }else
        return res.send(data)
    }).catch(()=>{
        res.status(400).send("not a valid request")
    })
})
app.get('/tasks',async(req,res)=>{
    Task.find({}).then((data)=>{
        return res.send(data)
    }).catch(()=>{
        res.status(400).send("not a valid request")
    })
})
app.patch('/tasks',async(req,res)=>{
    console.log(req.query);
    arr=Object.keys(req.query)
    console.log(arr);
    const allowedKeys=['_id','completed','description'];
    let flag=true;
    arr.every((key)=>{
        if(!allowedKeys.includes(key)){
            flag=false;
            return false};
    })
    if(!flag){
        return res.status(400).send('can not find this entry')
    }
    Task.findOneAndUpdate({_id:req.query._id},{completed:req.query.completed}).then((data)=>{
        return res.send(data)
    }).catch(()=>{
        res.status(400).send("not a valid request")
    })
})
app.post('/tasks',(req,res)=>{
    const task=new Task({description:req.body.description,completed:req.body.completed})
    task.save().then(()=>{
            console.log(task);
        }).catch((error)=>{
            console.log('error',error);
        })
        res.send("success")
})

app.listen('3000',()=>{
    console.log('server is listening at 3000');
}) 
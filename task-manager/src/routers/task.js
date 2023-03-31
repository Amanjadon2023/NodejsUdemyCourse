const express=require('express');
const taskRouter=new express.Router();
const Task=require('../models/task')
taskRouter.delete('/tasks/:id',async(req,res)=>{
    console.log('object');
    try{
        console.log(req.params.id);
const data=await Task.deleteOne({_id:req.params.id})
    res.send(data)
    }
    catch(e){
res.send(e);
    }
})
taskRouter.get('/tasks/:id',async(req,res)=>{
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
taskRouter.get('/tasks',async(req,res)=>{
    Task.find({}).then((data)=>{
        return res.send(data)
    }).catch(()=>{
        res.status(400).send("not a valid request")
    })
})
taskRouter.patch('/tasks',async(req,res)=>{
    // console.log(req.query);
    // arr=Object.keys(req.query)
    // console.log(arr);
    // const allowedKeys=['_id','completed','description'];
    // let flag=true;
    // arr.every((key)=>{
    //     if(!allowedKeys.includes(key)){
    //         flag=false;
    //         return false};
    // })
    // if(!flag){
    //     return res.status(400).send('can not find this entry')
    // }
    // Task.findOneAndUpdate({_id:req.query._id},{completed:req.query.completed}).then((data)=>{
    //     return res.send(data)
    // }).catch(()=>{
    //     res.status(400).send("not a valid request")
    // })
    const task=await Task.findById(req.query.id);
    const arr=Object.keys(req.body);
      arr.map((data)=>{
        task[data]=req.body[data]
      })
      await task.save();
      res.send(task)
})
taskRouter.post('/tasks',async(req,res)=>{
    // const task=new Task({description:req.body.description,completed:req.body.completed})
    // task.save().then(()=>{
    //         console.log(task);
    //     }).catch((error)=>{
    //         console.log('error',error);
    //     })
    //     res.send("success")

    //2nd way to trigger middleware
    const task=new Task(req.body);
    await task.save();
    res.send(task)

})
module.exports=taskRouter
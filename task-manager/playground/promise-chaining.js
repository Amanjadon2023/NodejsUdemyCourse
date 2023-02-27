const mongoose = require('../src/db/mongoose')
// const User=require('../src/models/user')
const Task = require('../src/models/task')
// User.updateMany({age:'23'},{age:22}).then(()=>{
//     return User.countDocuments({'age':22})
// }).then((count)=>{
// console.log(count);
// })

// Task.deleteOne({_id:'63f6f71bb299f19d8ee6414f'}).then((res)=>{
//     return Task.countDocuments({completed:false})
// }).then((res)=>{
//     console.log(res);
// })
const deleteTaskAndCountInCompleteTask = async (id) => {
  const data = await Task.deleteOne({ _id: id })
  const count=await Task.countDocuments({completed:false})
  console.log(count)
}
deleteTaskAndCountInCompleteTask('63f6f8b16761e95109b4fa9f')


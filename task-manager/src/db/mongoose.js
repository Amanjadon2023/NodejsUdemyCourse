const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
// mongoose.connect('mongodb://127.0.0.1/task-manager-api')
mongoose.connect('mongodb+srv://AmanJadon:Gemini%4012345@cluster0.ud7w084.mongodb.net/task-manager?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true },
() => console.log(" Mongoose is connected"))
module.exports=mongoose
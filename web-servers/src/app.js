const express=require('express');
const app=express()
const path=require('path');
console.log(__dirname)
console.log(path.join(__dirname,'amanjadon'))
const pathAboutPage=path.join(__dirname,'../public')
console.log(pathAboutPage)
app.use(express.static(pathAboutPage))
app.set('view engine', 'hbs')
// app.get('',(req,res)=>{
//     res.send('hello this is home page')
// })
// app.get('/about',(req,res)=>{
//     res.send('<h1>About Page</h1>')
// })
const pathViewsDirectory=path.join(__dirname,'../templates')
app.set('views',pathViewsDirectory)
app.get('',(req,res)=>{
    res.render('index',{
        title:'weather',
        'name':'aman jadon'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        help:'how can i help you',
        'name':'aman jadon'
    })
})
app.get('/weather',(req,res)=>{
    res.send({
        location:'Mathura',
        age:'23 degree Celcius'
    })
})
app.get('/help',(req,res)=>{
    res.send('help page')
})
app.listen(4000,()=>{
    console.log('server is listening at 4000')
})
const sum=(a,b,callback)=>{
    setTimeout(()=>{
    callback(a+b)
    },2000)
}

sum(2,3,(res)=>{
console.log(res);
})
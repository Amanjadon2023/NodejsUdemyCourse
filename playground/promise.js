const promise=new Promise((resolve,reject)=>{
setTimeout(() => {
    resolve([1,2,3])
}, 2000);
})
promise.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});
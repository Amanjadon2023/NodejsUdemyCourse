const sum=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(a+b)
        }, 2000);
    }) 
}
// sum(2,3).then((res)=>{
//     sum(res,4).then((res)=>{
//         console.log(res);

//     })
// }).catch((err)=>{
//     console.log(err);
// })
sum(2,3).then((res)=>{
    return sum(res,10).then((res)=>{
        return sum(res,10);
    })
}).then((res)=>{
    console.log(res);
})
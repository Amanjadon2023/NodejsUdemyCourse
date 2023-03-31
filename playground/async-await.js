const sum=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve (a+b)
        }, 2000);
    }) 
}

     async function abc(){
console.log( await sum(2,3))
// const sum2=await sum(sum1,3)
// const sum3=await sum(sum2,3)
// console.log(sum3);
console.log('object');
}
abc()
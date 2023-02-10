sum(1,2,(sum)=>{
    console.log(sum)
})
function sum(a,b,callBack){
    setTimeout(()=>{
        const data=a+b;
callBack(data)
    },2000)
}
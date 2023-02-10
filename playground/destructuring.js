const myName='aman'
const myAge=23
const obj={
    name:myName,
    age:myAge
}
console.log(obj)
const {name,age}=obj
console.log(name,"is",age,"years old")


const abc=(product,{name,age})=>{
console.log(product,name,age)
}
abc('shoes',obj)
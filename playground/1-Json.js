const fs = require('fs');
// fs.writeFileSync('1-Json.json',`{"name":"John","planet":"Earth","age":"28"}`)
const data = fs.readFileSync('1-Json.json')
const JsonData=JSON.parse(data);
console.log(JsonData)
JsonData.name="aman"
JsonData.age="23"
fs.writeFileSync('1-Json.json',JSON.stringify(JsonData))

const fs=require('fs')
const chalk = require('chalk')
const getNotes=()=>{
    return "Your notes..."
}
const addNotes=(title,body)=>{
    const data=loadNotes();
    let a=1;
    data.map((data)=>{
        if(data.title===title){
            a=2;
            return;
        }
    })
    if(a==2)return;
    data.push({'title':title,'body':body});
    debugger
    console.log(data)
    const parseData=JSON.stringify(data)
    debugger
    console.log(typeof parseData)
    fs.writeFileSync('./notes.json',parseData)
    console.log(chalk.green('successfully added a note'))
}
const removeNotes=(title)=>{
    const data=loadNotes();
    newData=data.filter((note)=>{
        return !(note.title===title);
    })
    if(newData.length<data.length){
        console.log(chalk.red('successfully removed a note'))
    }
    console.log(newData)
    const parseData=JSON.stringify(newData)
    // console.log(typeof parseData)
    fs.writeFileSync('./notes.json',parseData)
}
const listNotes=()=>{
    const data=loadNotes();
    console.log(chalk.red("your Notes..."))
    data.map((data)=>{
        console.log(chalk.green(data.title));
    })
}
const readNotes=(title)=>{
    const data=loadNotes();
    const f=data.find((data)=>data.title===title)
    if(f){
        console.log(chalk.green(f.title))
    }
    else{
        console.log(chalk.red('note does not found'))
    }

}
const loadNotes=()=>{
    try {
        const bufferData=fs.readFileSync('./notes.json');
        const stringifyData=bufferData.toString();
        const parsedData=JSON.parse(stringifyData);
        return parsedData;
    } catch (error) {
        return [];
    }
        
        
}
module.exports={getNotes,addNotes,removeNotes,listNotes,readNotes}
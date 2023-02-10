// const fs=require('fs');
// fs.writeFileSync('notes.txt','this file is created by node js')

// fs.appendFileSync('notes.txt',' we append the data using appendFileSync function present in file system')
// const utilsObject=require('./utils');
// const {fName,sName,multiply}=require('./utils');
// console.log(fName,sName,multiply(4,5));
const chalk = require('chalk')
const validator = require('validator');
const yargs = require('yargs');
const notes = require('./notes.js');
// const notesObject = require('./notes.js');
// console.log(utilsObject.multiply(2,3));//utilsObject is an object which has all exported functionalities
// console.log(notesObject.getNotes());
// console.log('app file')
// console.log(validator.isEmail('aman.jadonglaac.in'));
// console.log(validator.isURL('wu.com'))
// console.log(chalk.green('aman is a good coder'))
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
       title:{
        describe:'note title',
        demandOption:true,
        type:'string'
       }
       ,body:{
        describe:'note body',
        demandOption:true,
        type:'string'
       }
    },
    handler: (argv) => {
        notes.addNotes(argv.title,argv.body);
        // console.log('adding a new note',argv.title+'@'+"aaa",argv.body)
    }
})
// console.log(yargs.argv)

yargs.command({
    command: 'remove',
    describe: 'remove a new note',
    handler: (argv) => {
        notes.removeNotes(argv.title)
        console.log('removing a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'list all notes',
    handler(){
        notes.listNotes()
        console.log('listed all notes above')
    }
})

yargs.command({
    command: 'read',
    describe: 'read all notes',
    handler(argv) {
        notes.readNotes(argv.title)
        console.log('reading all notes')
    }
})

// console.log(yargs.argv)
// console.log(yargs.argv)
yargs.parse()
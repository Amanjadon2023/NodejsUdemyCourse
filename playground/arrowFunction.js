const obj={
    name:'aman',
    sum(a,b,c){
        if(c===2){
            return a+b;
        }
        // console.log(this.sum(3,4,2),this.name)
        return a+b;
    },
    multiply:()=>{
        // console.log(this)
    }
}
// console.log(obj.sum(2,3,0));
obj.multiply(2,3,0);




//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    }, {
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    getTasksToDo(){
        return this.tasks.filter(task=>
            task.completed===false
    )}
}
console.log(tasks.getTasksToDo())
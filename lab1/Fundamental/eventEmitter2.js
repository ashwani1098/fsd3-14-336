import { log } from "node:console";
import{EventEmitter} from "node:events";

const sayHi=(name)=>{
    console.log(`${name} logged in `)
}
const task=new EventEmitter();
task.once("greet",()=>{
    console.log(`System started...`)
})
task.on("greet",sayHi);

task.on("greet",(name)=>{
    console.log(`${name} starts working...`)
})
task.on("greet",(name)=>{
    console.log(`${name} logged out`);
    
})

task.once("exit",(name)=>{
    console.log(`System shut down by  ${name}`);
    
})
task.emit("greet","Anubhav Singh");
task.off("greet",sayHi);//must have fn name
task.emit("greet","Aakash Bhatia");
task.emit("exit","Manager");
task.emit("exit","Employee");//nothing happens because of once


console.log(task.listenerCount("greet")); 
task.removeAllListeners("greet");
console.log(task.listenerCount("greet")); 
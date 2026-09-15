import { log } from "node:console";
import { EventEmitter } from "node:events";

const task = new EventEmitter();

const sayHi = (name) => {
    console.log(`Logged in ${name}`);
};

task.on("greet", sayHi);

task.on("greet", () => {
    console.log("Logged out")
});


task.once("greet", () => {
    console.log("System Started...")
});

task.on("greet", (name) => {
    console.log(`System is shutting down by ${name}`)
});



// const shutdown = (name) => {
//     console.log(`System is shutting down by ${name}`);
// };

task.on("greet", shutdown);

// task.off("greet", shutdown); 

task.emit("greet", "Akhil Singh");
task.emit("greet", "Sneha Singh");
task.emit("greet", "Rahul Singh");


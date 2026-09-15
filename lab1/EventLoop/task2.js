import { fstat } from "fs";
import fs from "fs/promises";

const writeData= async()=>{
    try {
        console.log("about to write ...")
        await fs.writeFile('stud.txt',"Name:Raman Singh");
    console.log("file written");    
    } catch (error) {
        console.log(error);
    }
}
const f1=()=>{
    console.log("f1");
};
const f2=()=>{
    console.log("f2");
};
const f3=()=>{
    console.log("f3");
};
const main=()=>{
    console.log("main");
    // setTimeout(f1,5000);
    // setTimeout(f2,0);
    // setInterval(f1,1000);//press ctrl+c to stop

    // f2();
    setTimeout(f1,0);

    setImmediate(f2);
    process.nextTick(f3);
    writeData();
    console.log("end");
    // promise 
};
main();


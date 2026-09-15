// const f1=()=>{
//     console.log("f1");
// };
// const f2=()=>{
//     console.log("f2");
// };
// const f3=()=>{
//     console.log("f3");
// };
// function main(){
//     console.log("main");
//     f1();
//     f2();
//     f3();
//     console.log("end main");
// }
// main();


const f1=()=>{
    console.log("f1 starts");
    f2();
    console.log("f1 running");
    console.log("f1 end");
};
const f2=()=>{
    console.log("f2 starts");
    f3();
    console.log("f2 running");
    console.log("f2 end");
};
const f3=()=>{
    console.log("f3 starts");
    console.log("f3 running");
    console.log("f3 end");
};
function main() {
  console.log("main");
  f1();
  console.log("end main");
}
main();
// js is synchronous and single threaded(one work at once)
// In asynchronous we use event loop to manage the call stack


// asychronous call using TimeRanges
// 1)setTimeout
// 2)setImmediate
// 3) process.nextTick
// 4)setInterval



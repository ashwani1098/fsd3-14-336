import http from "http"
// import teams.js
import * as teams from "teams.js";
import { parse as parseUrl } from "url";


const PORT=5000;
const sendJson =(res,statusCode,data)=>{
    res.writeHead(statusCode,{"content-type":"application/json"});
    res.end(data === 'undefined' ? "" : JSON.stringify(data));
}
const parse
const server = http.createServer((req,res)=>{
     
});


// const server = http.createServer((req,res)=>{
   
//     res.end("<h1>SIH Internal </h1>");
// });


server.listen(5000,()=>console.log("server is running"));

// const fs = require("fs");
// console.log ("start of file")
// setTimeout(()=>{
//     console.log("settimeout ")
// },0)
// setImmediate(()=>{
//     console.log("setImmediate ")
// })
// fs.readFileSync("demo.txt", (err,data)=>{
//     console.log(data);
//     setTimeout(()=>{
//         console.log("settimeout inside read file")
//     },0);
//     setImmediate(()=>{
//         console.log 
//     })
// });
// console.log ("end of file");

function add(a,b){
return a+b;
}
function subtract(a,b){
    return a-b;
}
console.log("hi from here");

module.exports.add = add;
module.exports.subtract= subtract;

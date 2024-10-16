/*    1.....................................................................................
console.log("Welcome to NodeJS");
for(let i=0;i<=5;i++){
    console.log("i value is="+i);
}*/

/* 2.....
const os=require('os')
console.log(os.type());*/ 


/*3.....................................................................................................
const os=require('os')
console.log(os.type());
console.log(os.version());
console.log(os.freemem());
console.log(__dirname);
console.log(__filename);*/ 

/* 4.path module.............................................................................................

const path=require('path')
console.log(path.dirname(__dirname));
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));*/

/*  5..............................................................................................
File system module in Node JS<
const fs=require('fs');

fs.readFile('one.html','utf8',(error,data)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})
   5.1.......................................................................................................
const fs=require('fs');

fs.readFile('one.txt','utf8',(error,data)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
}) 
6.......writeFile method............. ......................................................
    const fs=require('fs')
    let content="welcome to writeFile method in nodejs"
    fs.writeFile('two.txt',content,(err)=>{
        if(err){
            console.log(err);
        }
        console.log("check once the file added or not")
    })
6.1 .......Rename Concept.........................................................................
const fs=require('fs')
fs.rename("two.txt","three.txt",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Renamed successfully")
})*/

/*7. responseWrite method.......................................................................
const http=require('http')

const myServer=http.createServer((request,response)=>{
response.write("welcome to NodeJs program");
response.write("Hi, I am Node JS  responding you");
response.end();
})
myServer.listen(5500,()=>{
    console.log("My server is running in PORT number 5500");
})*/
/* 8.................................................................................................
const http=require('http')
const PORT=5566;
const myServer=http.createServer((request,response)=>{
response.write("welcome to NodeJs program");
response.write("\n Hi I am NodeJS responding you")
response.end();
})
myServer.listen(PORT,()=>{
    console.log(`My server is running on PORT ${PORT} number`);//template string literal mechanism..
})*/

/*...................................................................................................
let res=require('./Test1')
console.log("The result is="+(res(20,20)));*/

let {add,sub,mul}=require('./Test1')
console.log("Addition is="+(add(10,20)));
console.log("Subtraction is="+(sub(20,10)));
console.log("multiplication is="+(mul(20,10)));


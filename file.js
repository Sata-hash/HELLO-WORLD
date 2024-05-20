const fs=require('fs');
//fs.writeFileSync('./test.txt','Hey there!');
//fs.writeFile('./test.txt','Hey there!',(err)=>{});
//Blocking operation
console.log("1");
 const result=fs.readFileSync('./contacts.js','utf-8');
 console.log(result);
 console.log("2");
console.log("\n");
 //Non-blocking operation
 console.log("1");
fs.readFile('./contacts.js','utf-8',(err,result)=>{
   
    console.log(result);
});
console.log("2");
//fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString());
//fs.cpSync('./test.txt','./copy.txt');


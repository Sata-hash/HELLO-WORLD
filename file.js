const fs=require('fs');
fs.writeFileSync('./test.txt','Hey there!');
fs.writeFile('./test.txt','Hey there!',(err)=>{});
 const result=fs.readFileSync('./contacts.js','utf-8');
 console.log(result);
fs.readFile('./contacts.js','utf-8',(err,result)=>{
  if(err)
    console.log("Error",err);
  else  
    console.log(result);
});
fs.appendFileSync('./test.txt',new Date().getDate().toLocaleString());
fs.cpSync('./test.txt','./copy.txt');


function add(a,b){
  return a+b
}

function sub(a,b){
  if(a>b)
    return a-b
  else  
    return b-a

}
function mul(a,b){
  return a*b
}
function div(a,b){
  if(a>b)
    return b/a
  else  
    return a/b
}
//module exports
module.exports={add,sub,mul,div,}




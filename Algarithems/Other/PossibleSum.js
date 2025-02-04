let data=[-6,2,-1,4,-3]
//possible sum in the present array
//console.log(data.slice(1,2))
let str=[]
for(let i=0;i<data.length;i++){
    if(str.length<=0){
        str[i]=data[i]
    }
   else{
       str[i]=data[i]+str[i-1]
   }
}

console.log(str)
// function Demo(curr){
    
    
// }
// console.log(Demo(data))

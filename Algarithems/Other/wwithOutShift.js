let arr=['mango','tango','banana']
//console.log(arr.length--)
function Demo(curr){
 for(let i=0;i<curr.length-1;i++){
     curr[i]=curr[i+1]
 }
//console.log(curr.length++)
curr.length--
 return curr
    
}
console.log(Demo(arr));
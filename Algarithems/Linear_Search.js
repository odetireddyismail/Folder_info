
//Give an array 'n' elements and a target element 't', find the index of 't', in the array
//return -1 if the target element is not found



function line(n){
    let arr=[-5,2,10,4,6]
for(let i=0;i<arr.length;i++){
   if(arr[i]===n) {
       return i
   }
}
return -1
}

console.log(line(-5))
//Big (O) - O(n)

//console.log(arr.indexOf(10))
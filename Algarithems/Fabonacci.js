//Fabonacci  First olgarithem
//Follow the BOG- O it contains (liner (like for loop) , constent)

//Bog O of fabonacci function, find how many times function executed

//Calculation  notdependent on input size -o(1)

//1. loop -O(n)
//2. nested loops - O(n^2)
//input size reuced by half - O(logn)

//Big- O = O(n) O increases number of times
function Fabonacci(n){
    let k=[]
    for(let i=0;i<n;i++){
      if(k.length<2){
          k[i]=i
      }
      else{
       k[i]=k[i-2]+k[i-1]
      }
    }
    
    console.log(k)
}

Fabonacci(7)  // 0 1 1 2 3 5 8




// function fabonacci(n){

//     let k=[0,1]
   
//   for(let i=0; i<n;i++){
//      k.push(k[i]+k[i+1])
//   }
//    return k
//   }
  
//   console.log(fabonacci(3))  // 0 1 1 
//   console.log(fabonacci(5))  //0 1 1 2 3 5 8
//   console.log(fabonacci(7))   //0 1 1 2 3 5 8 13
  

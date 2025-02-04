//Climbing stsircases

function Demo(n,fromRod,toRod,usingRod){
   if(n===1){
       console.log(`move desk 1 ${fromRod} to ${toRod}`)
      return  
   }
   Demo(n-1,fromRod,usingRod,toRod)
   console.log(`Move desk ${n} from ${fromRod} to ${toRod}`)
   Demo(n-1,usingRod,toRod,fromRod)
   //b to c using a
 console.log(`Move desk ${n} from ${usingRod} to ${toRod} using  ${fromRod}`)
   
   
}

 console.log(Demo(3,'A','C','B'))


function Demo(text){
    
    let count={}
   // console.log(change)
    for(let i=0;i<text.length;i++){
         let change=text[i].toLowerCase()
         
         if( count[change]){
             count[change]++
         }
         else{
            count[change]=1
         }
    }
   return count
  }
  let test=Demo('ismaillllll')
  console.log(test)
  let convert=Object.keys(test).map((curr,k)=>console.log(test[curr])
  // {
  //     return {key:curr,count:test[curr]} 
  // }
  )
   
  //  console.log(Object.keys(test))
   
  console.log(convert)
const data = [
    { name: "ismail", date: "12-04-24" },
    { name: "ismail", date: "15-04-24" },
    { name: "Eranna", date: "14-04-24" },
    { name: "Eranna", date: "19-04-24" },
    { name: "ismail", date: "27-04-24" },
    { name: "Reddy", date: "27-04-24" }
];
const groupedData = {};
// data.find((curr,index)=>{
//     if(!(curr.name in groupedData)){
//       groupedData[curr.name]=[] 
//     }
//   groupedData[curr.name].push(curr.date)
// })


for(let da of data){
   if(!(da.name in groupedData)){
       groupedData[da.name]=[]
   }
   groupedData[da.name].push(da.date)
}
//  console.log(groupedData)
 let testing=[]
  for (let demo in groupedData){
     testing.push(demo)  
 }
//  console.log(testing)
 let fetch=[groupedData].forEach((curr,index)=>{
  for(let i=0;i<testing.length;i++){
      console.log(curr[testing[i]])
  }
 
 })
 
 console.log(fetch)
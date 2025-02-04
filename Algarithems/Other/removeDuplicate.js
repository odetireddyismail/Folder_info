let data = [1, 2, 2, 1, 4, 5, 6, 8, 8, 4, 9];

// const fil = data.filter((curr, index) => {
//   return data.indexOf(curr) === index;
// });

// //or
// let filter = [...new Set(data)];
//console.log(filter)

//console.log(fil)
//or
let filterData = [];

//console.log(ds)
for (let i = 0; i < data.length; i++) {
  if (filterData.indexOf(data[i]) === -1) {
    filterData.push(data[i]);
  }
}

console.log(filterData);

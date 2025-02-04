//Give sorted array 'n' elements and a target element 't', find the index of 't', in the array
//return -1 if the target element is not found

//Binary search only works on sorted array if donot have sorted array you can use Linear search (Using for loop)
//If middle index is grater than right first index at a given target print that middle right, less than middel index at a given
// target print left first index in an given array

//let arr = [-5, 2, 10, 4, 6];
function line(n) {
  let arr = [-5, 2, 4, 6, 10];
  let length = Math.floor(arr.length / 2);
  while (arr.length > 1) {
    let middle = Math.floor(arr.length / 2);
    //console.log(middle)
    if (n === arr[middle]) {
      return arr[middle];
    } else if (n > arr[middle]) {
      return arr[middle + 1];
    } else {
      return arr[middle - 1];
    }
  }
  // return -1
}

console.log(line(10));
//Big (O) - O(n)

//console.log(arr.indexOf(10))
